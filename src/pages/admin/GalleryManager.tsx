import { useState, useRef } from "react";
import { Plus, Trash2, Image as ImageIcon, Upload } from "lucide-react";

export default function GalleryManager() {
  const [images, setImages] = useState([
    { id: 1, url: "https://images.unsplash.com/photo-1486262715619-670810a04929?q=80&w=800", title: "Cabeçote EA111" },
    { id: 2, url: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=800", title: "Oficina" },
    { id: 3, url: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800", title: "Usinagem CNC" },
  ]);

  const [newUrl, setNewUrl] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUrl) return;
    
    setImages([...images, { id: Date.now(), url: newUrl, title: newTitle || "Nova Imagem" }]);
    setNewUrl("");
    setNewTitle("");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create a local object URL for the image
    const objectUrl = URL.createObjectURL(file);
    
    setImages([...images, { id: Date.now(), url: objectUrl, title: newTitle || file.name }]);
    setNewTitle("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDelete = (id: number) => {
    setImages(images.filter(img => img.id !== id));
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="text-3xl font-black italic uppercase tracking-wider">Gerenciar Galeria</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ADD NEW IMAGE FORMS */}
        <div className="col-span-1 lg:col-span-1 flex flex-col gap-6">
          <div className="bg-zinc-900 border border-white/5 p-6 rounded-xl">
            <h2 className="text-xl font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
              <Upload size={20} className="text-belo-red" />
              Subir Imagem
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Título / Descrição (Opcional)</label>
                <input 
                  type="text" 
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-lg p-3 outline-none focus:border-belo-red text-white" 
                  placeholder="Ex: Motor V8"
                />
              </div>
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="w-full bg-belo-red hover:bg-red-700 text-white font-bold uppercase tracking-widest py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <ImageIcon size={18} /> Escolher Arquivo
              </button>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileUpload} 
                accept="image/*" 
                className="hidden" 
              />
            </div>
          </div>

          <div className="bg-zinc-900 border border-white/5 p-6 rounded-xl">
            <h2 className="text-sm font-bold uppercase tracking-wider mb-4 text-zinc-500">
              Ou usar URL da Imagem
            </h2>
            <form onSubmit={handleAddUrl} className="space-y-4">
              <div>
                <input 
                  type="url" 
                  required
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-lg p-3 outline-none focus:border-belo-red text-white text-sm" 
                  placeholder="https://..."
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-white/5 hover:bg-white/10 text-white font-bold uppercase tracking-widest py-2 rounded-lg transition-colors text-xs"
              >
                Adicionar via URL
              </button>
            </form>
          </div>
        </div>

        {/* IMAGE GRID */}
        <div className="col-span-1 lg:col-span-2">
          <div className="bg-zinc-900 border border-white/5 p-6 rounded-xl">
            <h2 className="text-xl font-bold uppercase tracking-wider mb-6">Imagens Atuais ({images.length})</h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((img) => (
                <div key={img.id} className="relative group bg-black/50 border border-white/5 rounded-lg overflow-hidden group">
                  <div className="aspect-square">
                    <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3">
                    <div className="text-xs md:text-sm font-medium truncate text-white">{img.title}</div>
                  </div>
                  <button 
                    onClick={() => handleDelete(img.id)}
                    className="absolute top-2 right-2 p-2 bg-red-600 hover:bg-red-700 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
                    title="Excluir imagem"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
            
            {images.length === 0 && (
              <div className="text-center py-12 text-zinc-500">
                <ImageIcon size={48} className="mx-auto mb-4 opacity-20" />
                <p>Nenhuma imagem na galeria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
