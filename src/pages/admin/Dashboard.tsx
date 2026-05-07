import { DollarSign, Pickaxe, Users, TrendingUp } from "lucide-react";

export default function Dashboard() {
  const metrics = [
    { label: "Receita do Mês", value: "R$ 45.230,00", change: "+12%", icon: <DollarSign size={24} /> },
    { label: "Serviços Finalizados", value: "124", change: "+8%", icon: <Pickaxe size={24} /> },
    { label: "Novos Clientes", value: "32", change: "+15%", icon: <Users size={24} /> },
    { label: "Orçamentos Aprovados", value: "85%", change: "+2%", icon: <TrendingUp size={24} /> },
  ];

  const recentServices = [
    { id: "SRV-1023", client: "João Carlos", engine: "EA111 1.6", status: "Concluído", date: "Hoje" },
    { id: "SRV-1024", client: "Auto Center Silva", engine: "Zetec Rocam 1.0", status: "Em andamento", date: "Hoje" },
    { id: "SRV-1025", client: "Maria Aparecida", engine: "Fire 1.4", status: "Aguardando Peças", date: "Ontem" },
    { id: "SRV-1026", client: "Oficina do Toninho", engine: "AP 1.8", status: "Concluído", date: "Ontem" },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-black italic uppercase tracking-wider mb-8">Visão Geral</h1>
      
      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
        {metrics.map((metric, i) => (
          <div key={i} className="bg-zinc-900 border border-white/5 p-6 rounded-xl flex items-start justify-between">
            <div>
              <div className="text-zinc-400 text-sm font-medium mb-1">{metric.label}</div>
              <div className="text-2xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded inline-block">
                {metric.change} em relação ao mês passado
              </div>
            </div>
            <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400">
              {metric.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-zinc-900 border border-white/5 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-white/5">
          <h2 className="text-xl font-bold uppercase tracking-wider">Serviços Recentes</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-800/50 text-zinc-400 text-xs uppercase tracking-widest">
                <th className="p-4 font-medium">O.S.</th>
                <th className="p-4 font-medium">Cliente</th>
                <th className="p-4 font-medium">Motor / Veículo</th>
                <th className="p-4 font-medium">Data</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-white/5">
              {recentServices.map((service, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-mono text-zinc-300">{service.id}</td>
                  <td className="p-4 font-medium text-white">{service.client}</td>
                  <td className="p-4 text-zinc-400">{service.engine}</td>
                  <td className="p-4 text-zinc-400">{service.date}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      service.status === 'Concluído' ? 'bg-emerald-500/10 text-emerald-500' :
                      service.status === 'Em andamento' ? 'bg-blue-500/10 text-blue-500' :
                      'bg-amber-500/10 text-amber-500'
                    }`}>
                      {service.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
