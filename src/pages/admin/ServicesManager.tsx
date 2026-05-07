import { useState, useEffect } from "react";
import { Plus, Trash2, Edit2, Save, X } from "lucide-react";

export interface ServiceItem {
  id: string;
  name: string;
  price: number;
}

export default function ServicesManager() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  
  // New service form state
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");

  // Edit service state
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");

  useEffect(() => {
    const loaded = localStorage.getItem("@retifica-belo/services");
    if (loaded) {
      setServices(JSON.parse(loaded));
    } else {
      // Default mock services
      const defaultServices = [
        { id: "1", name: "Plaina / Usinagem Básica", price: 350.00 },
        { id: "2", name: "Banho Químico (Descarbonização)", price: 150.00 },
        { id: "3", name: "Assentamento de Válvulas", price: 200.00 }
      ];
      setServices(defaultServices);
      localStorage.setItem("@retifica-belo/services", JSON.stringify(defaultServices));
    }
  }, []);

  const saveToStorage = (data: ServiceItem[]) => {
    localStorage.setItem("@retifica-belo/services", JSON.stringify(data));
    setServices(data);
  };

  const handleAddService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName) return;

    const newService: ServiceItem = {
      id: Date.now().toString(),
      name: newName,
      price: parseFloat(newPrice) || 0
    };

    saveToStorage([...services, newService]);
    setNewName("");
    setNewPrice("");
  };

  const handleDelete = (id: string) => {
    if(confirm("Tem certeza que deseja excluir este serviço?")) {
      saveToStorage(services.filter(s => s.id !== id));
    }
  };

  const startEditing = (service: ServiceItem) => {
    setIsEditing(service.id);
    setEditName(service.name);
    setEditPrice(service.price.toString());
  };

  const cancelEditing = () => {
    setIsEditing(null);
    setEditName("");
    setEditPrice("");
  };

  const saveEdit = (id: string) => {
    const updated = services.map(s => {
      if (s.id === id) {
        return {
          ...s,
          name: editName,
          price: parseFloat(editPrice) || 0
        };
      }
      return s;
    });
    saveToStorage(updated);
    setIsEditing(null);
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-black italic uppercase tracking-wider mb-8">Gerenciar Serviços</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* ADD NEW SERVICE */}
        <div className="col-span-1">
          <div className="bg-zinc-900 border border-white/5 p-6 rounded-xl sticky top-8">
            <h2 className="text-xl font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
              <Plus size={20} className="text-belo-red" />
              Novo Serviço
            </h2>
            <form onSubmit={handleAddService} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Nome do Serviço</label>
                <input 
                  type="text" 
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-lg p-3 outline-none focus:border-belo-red text-white" 
                  placeholder="Ex: Retífica Completa"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Preço Padrão (R$)</label>
                <input 
                  type="number" 
                  step="0.01"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-lg p-3 outline-none focus:border-belo-red text-white" 
                  placeholder="0.00"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-belo-red hover:bg-red-700 text-white font-bold uppercase tracking-widest py-3 rounded-lg transition-colors"
              >
                Cadastrar
              </button>
            </form>
          </div>
        </div>

        {/* SERVICES LIST */}
        <div className="col-span-1 lg:col-span-2">
          <div className="bg-zinc-900 border border-white/5 rounded-xl overflow-hidden">
            <div className="p-6 border-b border-white/5">
              <h2 className="text-xl font-bold uppercase tracking-wider">Serviços Cadastrados ({services.length})</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-zinc-800/50 text-zinc-400 text-xs uppercase tracking-widest">
                    <th className="p-4 font-medium">Nome do Serviço</th>
                    <th className="p-4 font-medium w-32">Preço (R$)</th>
                    <th className="p-4 font-medium w-32 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-white/5">
                  {services.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="p-8 text-center text-zinc-500">
                        Nenhum serviço cadastrado.
                      </td>
                    </tr>
                  ) : (
                    services.map((service) => (
                      <tr key={service.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4">
                          {isEditing === service.id ? (
                            <input 
                              type="text" 
                              value={editName}
                              onChange={(e) => setEditName(e.target.value)}
                              className="w-full bg-black/40 border border-belo-red rounded px-2 py-1 outline-none text-white" 
                            />
                          ) : (
                            <span className="font-medium text-white">{service.name}</span>
                          )}
                        </td>
                        <td className="p-4">
                          {isEditing === service.id ? (
                            <input 
                              type="number" 
                              step="0.01"
                              value={editPrice}
                              onChange={(e) => setEditPrice(e.target.value)}
                              className="w-full bg-black/40 border border-belo-red rounded px-2 py-1 outline-none text-white" 
                            />
                          ) : (
                            <span className="text-zinc-300">R$ {service.price.toFixed(2)}</span>
                          )}
                        </td>
                        <td className="p-4 text-right">
                          {isEditing === service.id ? (
                            <div className="flex justify-end gap-2">
                              <button onClick={() => saveEdit(service.id)} className="p-2 bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-white rounded transition-colors">
                                <Save size={16} />
                              </button>
                              <button onClick={cancelEditing} className="p-2 bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white rounded transition-colors">
                                <X size={16} />
                              </button>
                            </div>
                          ) : (
                            <div className="flex justify-end gap-2">
                              <button onClick={() => startEditing(service)} className="p-2 bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white rounded transition-colors">
                                <Edit2 size={16} />
                              </button>
                              <button onClick={() => handleDelete(service.id)} className="p-2 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded transition-colors">
                                <Trash2 size={16} />
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
