import { Outlet, Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Image as ImageIcon, FileText, Settings, LogOut, Wrench, Menu, X, Wrench as ToolIcon } from "lucide-react";
import { useState, useEffect } from "react";

export default function AdminLayout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Dashboard", path: "/admin", icon: <LayoutDashboard size={20} /> },
    { name: "Serviços", path: "/admin/services", icon: <ToolIcon size={20} /> },
    { name: "Galeria", path: "/admin/gallery", icon: <ImageIcon size={20} /> },
    { name: "Recibos (PDF)", path: "/admin/receipt", icon: <FileText size={20} /> },
    { name: "Configurações", path: "/admin/settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col md:flex-row text-white font-sans selection:bg-belo-red">
      
      {/* Mobile Header - Only visible on small screens */}
      <div className="md:hidden flex items-center justify-between p-4 bg-zinc-900 border-b border-white/5 print:hidden">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-belo-red flex items-center justify-center">
            <Wrench size={16} />
          </div>
          <span className="font-black italic uppercase tracking-wider text-xl">Admin</span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-zinc-400 hover:text-white"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar - Not printed */}
      <aside className={`
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
        fixed md:sticky top-0 left-0 z-40
        w-64 bg-zinc-900 border-r border-white/5 flex flex-col shrink-0 h-screen transition-transform duration-300 print:hidden
      `}>
        <div className="p-6 border-b border-white/5 items-center gap-3 hidden md:flex">
          <div className="w-8 h-8 rounded bg-belo-red flex items-center justify-center">
            <Wrench size={16} />
          </div>
          <span className="font-black italic uppercase tracking-wider text-xl">Admin</span>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 flex flex-col gap-2 px-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (location.pathname.startsWith(item.path) && item.path !== "/admin");
            // Highlight dashboard only if exact match, to avoid highlighting it for all /admin routes
            const isDashboard = item.path === "/admin";
            const actuallyActive = isDashboard ? location.pathname === "/admin" : isActive;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${
                  actuallyActive 
                    ? "bg-belo-red text-white" 
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5 mt-auto">
          <Link 
            to="/" 
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors font-medium"
          >
            <LogOut size={20} />
            Sair para o Site
          </Link>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden print:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-auto h-screen md:h-screen pt-0 md:pt-0 bg-[#0a0a0a] print:h-auto print:overflow-visible print:bg-white print:text-black">
        <Outlet />
      </main>
    </div>
  );
}
