import { useState } from "react";
import { X, UploadCloud } from "lucide-react";

function UploadModal({ open, onClose, onSubmit }) {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!open) return null;

  const handleFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    const url = URL.createObjectURL(f);
    setPreview(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !file) return;
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("file", file);

      await onSubmit(formData);
      setTitle("");
      setFile(null);
      setPreview("");
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative z-10 w-[92vw] max-w-lg rounded-lg bg-neutral-900 text-white shadow-xl border border-white/10">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <h3 className="font-semibold">Upload New Title</h3>
          <button onClick={onClose} className="p-1.5 hover:bg-white/10 rounded">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label className="block text-sm text-white/80 mb-1">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded bg-white/10 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="Enter a name"
            />
          </div>

          <div>
            <label className="block text-sm text-white/80 mb-2">Poster Image</label>
            <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-white/20 rounded p-6 cursor-pointer hover:border-white/30">
              <UploadCloud />
              <span className="text-xs text-white/70">Click to choose an image</span>
              <input type="file" accept="image/*" onChange={handleFile} className="hidden" />
            </label>
            {preview && (
              <img
                src={preview}
                alt="preview"
                className="mt-3 w-full h-48 object-cover rounded"
              />
            )}
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-white/10 hover:bg-white/20"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !title || !file}
              className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 disabled:opacity-50"
            >
              {isSubmitting ? "Uploading..." : "Upload"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadModal;
