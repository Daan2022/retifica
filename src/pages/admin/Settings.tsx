import { Save } from "lucide-react";

export default function Settings() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-black italic uppercase tracking-wider mb-8">Configurações da Loja</h1>

      <div className="space-y-6">
        <div className="bg-zinc-900 border border-white/5 rounded-xl p-6">
          <h2 className="text-xl font-bold uppercase tracking-wider mb-6 pb-4 border-b border-white/5 text-belo-red">Informações Principais</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Nome da Loja</label>
              <input type="text" defaultValue="Retífica Belô" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 outline-none focus:border-belo-red text-white" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">WhatsApp de Contato</label>
              <input type="text" defaultValue="(31) 99999-0000" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 outline-none focus:border-belo-red text-white" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Endereço Completo</label>
              <input type="text" defaultValue="Av. das Oficinas, 1200 - Belo Horizonte, MG" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 outline-none focus:border-belo-red text-white" />
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-white/5 rounded-xl p-6">
          <h2 className="text-xl font-bold uppercase tracking-wider mb-6 pb-4 border-b border-white/5 text-belo-red">Email e Notificações</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Email para Receber Orçamentos</label>
              <input type="email" defaultValue="contato@retificabelo.com.br" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 outline-none focus:border-belo-red text-white" />
            </div>
            
            <div className="flex flex-col justify-center">
              <label className="flex items-center gap-3 cursor-pointer mt-4">
                <input type="checkbox" defaultChecked className="w-5 h-5 accent-belo-red bg-black border-white/10" />
                <span className="text-zinc-300 font-medium tracking-wide">Receber cópia dos orçamentos no WhatsApp</span>
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-belo-red hover:bg-red-700 text-white font-bold uppercase tracking-widest px-8 py-3 rounded-lg transition-colors flex items-center gap-2">
            <Save size={20} /> Salvar Configurações
          </button>
        </div>
      </div>
    </div>
  );
}
