import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Row from "./components/Row";
import UploadModal from "./components/UploadModal";

const sampleData = [
  {
    id: 1,
    title: "Edge of Tomorrow",
    image:
      "https://image.tmdb.org/t/p/w780/uUHvlkLavotfGsNtosDy8ShsIYF.jpg",
  },
  {
    id: 2,
    title: "Arcane",
    image:
      "https://image.tmdb.org/t/p/w780/abFZ5H1qjnI5lOhr5W7HQwZ0pni.jpg",
  },
  {
    id: 3,
    title: "Dune: Part Two",
    image:
      "https://image.tmdb.org/t/p/w780/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
  },
  {
    id: 4,
    title: "Oppenheimer",
    image:
      "https://image.tmdb.org/t/p/w780/8Gxv8QVzIu2kI0R8iT9nG7rC1Xw.jpg",
  },
  {
    id: 5,
    title: "Spirited Away",
    image:
      "https://image.tmdb.org/t/p/w780/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg",
  },
];

function App() {
  const [openUpload, setOpenUpload] = useState(false);
  const [myList, setMyList] = useState(() => {
    try {
      const raw = localStorage.getItem("myList");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(myList));
  }, [myList]);

  const rows = useMemo(
    () => [
      { title: "Trending Now", items: sampleData },
      { title: "Because you watched Thrillers", items: [...sampleData].reverse() },
      { title: "Top Picks for You", items: [...sampleData] },
    ],
    []
  );

  const handleUpload = async (formData) => {
    // In a full app this would POST to the backend and store to DB/storage.
    // For this UX demo, we add to "My List" and use a local object URL.
    const title = formData.get("title");
    const file = formData.get("file");
    const url = URL.createObjectURL(file);
    const item = { id: Date.now(), title, image: url };
    setMyList((prev) => [item, ...prev]);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 mt-6">
            <h2 className="text-xl font-semibold text-white/90">My Uploads</h2>
            <button
              onClick={() => setOpenUpload(true)}
              className="px-4 py-2 rounded bg-red-600 hover:bg-red-700"
            >
              Upload
            </button>
          </div>
          {myList.length > 0 ? (
            <div className="px-4 sm:px-6 lg:px-8">
              <Row title="Recently Uploaded" items={myList} />
            </div>
          ) : (
            <p className="px-4 sm:px-6 lg:px-8 text-white/60 mt-3">
              Your uploads will appear here.
            </p>
          )}
        </div>

        <div className="mx-auto max-w-7xl">
          {rows.map((r, idx) => (
            <Row key={idx} title={r.title} items={r.items} />
          ))}
        </div>
      </main>

      <UploadModal
        open={openUpload}
        onClose={() => setOpenUpload(false)}
        onSubmit={handleUpload}
      />
    </div>
  );
}

export default App;
