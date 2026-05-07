import { useState, useRef, useEffect } from "react";
import { Download, Plus, Trash2 } from "lucide-react";
import { ServiceItem } from "./ServicesManager";

export default function ReceiptGenerator() {
  const [clientName, setClientName] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [services, setServices] = useState([{ desc: "", price: 0 }]);
  const [observations, setObservations] = useState("");
  
  const [registeredServices, setRegisteredServices] = useState<ServiceItem[]>([]);

  useEffect(() => {
    const loaded = localStorage.getItem("@retifica-belo/services");
    if (loaded) {
      setRegisteredServices(JSON.parse(loaded));
    }
  }, []);
  
  const printRef = useRef<HTMLDivElement>(null);

  const addService = () => {
    setServices([...services, { desc: "", price: 0 }]);
  };

  const updateService = (index: number, field: "desc" | "price", value: string | number) => {
    const updated = [...services];
    updated[index] = { ...updated[index], [field]: value };
    setServices(updated);
  };

  const handleSelectPredefinedService = (index: number, serviceId: string) => {
    if(!serviceId) return;
    
    const service = registeredServices.find(s => s.id === serviceId);
    if(service) {
      const updated = [...services];
      updated[index] = { desc: service.name, price: service.price };
      setServices(updated);
    }
  };

  const removeService = (index: number) => {
    if (services.length === 1) return;
    const updated = services.filter((_, i) => i !== index);
    setServices(updated);
  };

  const total = services.reduce((acc, curr) => acc + (Number(curr.price) || 0), 0);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Editor Panel - Hidden when printing */}
      <div className="w-full lg:w-[450px] bg-zinc-900 border-r border-white/5 p-4 md:p-8 overflow-y-auto print:hidden shrink-0">
        <h1 className="text-2xl font-black italic uppercase tracking-wider mb-8 text-white">Criar Recibo</h1>
        
        <div className="space-y-6">
          <div className="space-y-4">
             <h2 className="text-sm font-bold uppercase tracking-widest text-belo-red border-b border-white/5 pb-2">Dados do Cliente</h2>
             <div>
               <label className="block text-xs text-zinc-500 mb-1 uppercase tracking-wider">Cliente</label>
               <input type="text" value={clientName} onChange={e => setClientName(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-2 text-white outline-none focus:border-belo-red" placeholder="Nome do Cliente" />
             </div>
             <div className="flex flex-col sm:flex-row gap-4">
               <div className="flex-1">
                 <label className="block text-xs text-zinc-500 mb-1 uppercase tracking-wider">Veículo / Motor</label>
                 <input type="text" value={vehicle} onChange={e => setVehicle(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-2 text-white outline-none focus:border-belo-red" placeholder="Ex: Gol 1.0 EA111" />
               </div>
               <div className="w-full sm:w-1/3">
                 <label className="block text-xs text-zinc-500 mb-1 uppercase tracking-wider">Data</label>
                 <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-2 text-white outline-none focus:border-belo-red text-sm" />
               </div>
             </div>
          </div>

          <div className="space-y-4">
             <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <h2 className="text-sm font-bold uppercase tracking-widest text-belo-red">Serviços Executados</h2>
             </div>
             
             {services.map((svc, i) => (
                <div key={i} className="flex flex-col gap-2 p-3 bg-black/20 rounded-lg border border-white/5">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-zinc-500 font-mono">Item {i + 1}</span>
                    {services.length > 1 && (
                      <button onClick={() => removeService(i)} className="text-red-500 hover:text-red-400">
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>
                  
                  {registeredServices.length > 0 && (
                    <select 
                      className="w-full bg-zinc-800 border border-white/10 rounded p-2 text-zinc-300 outline-none focus:border-belo-red text-sm appearance-none"
                      onChange={(e) => handleSelectPredefinedService(i, e.target.value)}
                      defaultValue=""
                    >
                      <option value="" disabled>Selecionar serviço cadastrado...</option>
                      {registeredServices.map(rs => (
                        <option key={rs.id} value={rs.id}>{rs.name} - R$ {rs.price.toFixed(2)}</option>
                      ))}
                    </select>
                  )}
                  
                  <input 
                    type="text" 
                    value={svc.desc} 
                    onChange={e => updateService(i, 'desc', e.target.value)} 
                    className="w-full bg-black/40 border border-white/10 rounded p-2 text-white outline-none focus:border-belo-red text-sm" 
                    placeholder="Ou digite a descrição manualmente" 
                  />
                  
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500 text-sm">R$</span>
                    <input 
                      type="number" 
                      value={svc.price || ""} 
                      onChange={e => updateService(i, 'price', e.target.value)} 
                      className="w-full bg-black/40 border border-white/10 rounded p-2 text-white outline-none focus:border-belo-red text-sm" 
                      placeholder="0.00" 
                    />
                  </div>
                </div>
             ))}
             
             <button onClick={addService} className="w-full py-2 bg-white/5 hover:bg-white/10 text-white rounded flex items-center justify-center gap-2 transition-colors text-sm font-medium">
               <Plus size={16} /> Adicionar Novo Item
             </button>
          </div>
          
          <div className="space-y-4 border-t border-white/5 pt-4">
            <div>
              <label className="block text-xs text-zinc-500 mb-1 uppercase tracking-wider">Observações / Garantia</label>
              <textarea value={observations} onChange={e => setObservations(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-2 text-white outline-none focus:border-belo-red resize-none h-24" placeholder="Detalhes extras..." />
            </div>
          </div>

          <button onClick={handlePrint} className="w-full bg-belo-red py-4 rounded-lg text-white font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-red-700 transition-colors mt-8">
            <Download size={20} />
            Baixar Recibo PDF
          </button>
        </div>
      </div>

      {/* Preview Panel - This is what gets printed */}
      <div className="flex-1 p-4 md:p-8 lg:p-12 flex items-start justify-center bg-zinc-950 overflow-y-auto print:p-0 print:bg-white print:overflow-visible h-full">
        <div 
          ref={printRef}
          className="bg-white w-full max-w-[210mm] min-h-[297mm] shadow-2xl p-6 sm:p-12 text-black print:shadow-none print:m-0 print:p-0 print:w-full print:max-w-none print:border-none"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start border-b-2 border-black pb-8 mb-8 gap-6 sm:gap-0">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-sm rotate-45 flex items-center justify-center shrink-0">
                  <span className="text-white text-2xl sm:text-3xl font-black -rotate-45">B</span>
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-black uppercase italic tracking-tighter">Retífica <span className="text-red-600">Belô</span></h1>
                  <p className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-widest">Performance & Precisão</p>
                </div>
             </div>
             <div className="text-left sm:text-right text-xs sm:text-sm">
                <p className="font-bold">Av. das Oficinas, 1200 - BH/MG</p>
                <p>Telefone/WhatsApp: (31) 99999-0000</p>
                <p>CNPJ: 00.000.000/0001-00</p>
             </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-widest bg-gray-100 py-2 border-y border-gray-300">Recibo de Venda / Serviço</h2>
          </div>

          {/* Client Info */}
          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6 sm:gap-4 mb-8">
             <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Cliente / Empresa</p>
                <p className="text-lg font-bold border-b border-gray-300 pb-1">{clientName || "______________________________"}</p>
             </div>
             <div className="grid grid-cols-2 gap-4">
               <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Veículo/Motor</p>
                  <p className="text-lg font-bold border-b border-gray-300 pb-1 truncate">{vehicle || "____________________"}</p>
               </div>
               <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Data</p>
                  <p className="text-lg font-bold border-b border-gray-300 pb-1">{date.split('-').reverse().join('/')}</p>
               </div>
             </div>
          </div>

          {/* Services Table */}
          <div className="mb-8 min-h-[200px] sm:min-h-[300px]">
             <table className="w-full text-left border-collapse">
                <thead>
                   <tr className="border-b-2 border-black text-sm sm:text-base">
                      <th className="py-3 px-2 font-black uppercase tracking-wider w-3/4">Descrição do Serviço / Peça</th>
                      <th className="py-3 px-2 font-black uppercase tracking-wider text-right w-1/4">Valor (R$)</th>
                   </tr>
                </thead>
                <tbody className="text-sm sm:text-base">
                   {services.map((svc, i) => (
                      <tr key={i} className="border-b border-gray-200">
                         <td className="py-4 px-2">{svc.desc || "..."}</td>
                         <td className="py-4 px-2 text-right whitespace-nowrap">
                           {Number(svc.price) ? Number(svc.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : "---"}
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>

          {/* Total & Obs */}
          <div className="flex flex-col sm:flex-row justify-between items-start pt-4 border-t-2 border-black gap-6 sm:gap-0">
             <div className="w-full sm:w-1/2 sm:pr-8 order-2 sm:order-1">
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-2">Observações / Garantia</p>
                <p className="text-xs sm:text-sm whitespace-pre-wrap">{observations || "A Garantia Cobre Apenas Os Serviços Realizados. A Garantia Será Anulada Em Caso De Superaquecimento Ou Má Reparação Do Bloco."}</p>
             </div>
             <div className="w-full sm:w-1/3 bg-gray-100 p-4 sm:p-6 rounded-lg text-right order-1 sm:order-2">
                <p className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Total a Pagar</p>
                <p className="text-3xl sm:text-4xl font-black text-red-600">
                  {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </p>
             </div>
          </div>
          
          {/* Signatures */}
          <div className="mt-16 sm:mt-32 pt-8 border-t border-gray-300 grid grid-cols-2 gap-8 sm:gap-16 text-center">
            <div>
              <div className="w-full border-b border-black mb-2"></div>
              <p className="font-bold text-[10px] sm:text-xs uppercase tracking-widest break-words">Retífica Belô</p>
            </div>
            <div>
              <div className="w-full border-b border-black mb-2"></div>
              <p className="font-bold text-[10px] sm:text-xs uppercase tracking-widest break-words">{clientName || "Assinatura do Cliente"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
