import { Terminal, Code, FileText, Sparkles, Mail, Cpu, BookOpen } from 'lucide-react';
import { navigate, Route } from '../utils/router';

interface NavigationProps {
  currentRoute: Route;
}

export default function Navigation({ currentRoute }: NavigationProps) {
  const navItems = [
    { route: 'home' as Route, label: '~/home', icon: Terminal },
    { route: 'projects' as Route, label: '~/bin', icon: Code },
    { route: 'logs' as Route, label: '~/logs', icon: BookOpen },
    { route: 'stack' as Route, label: '~/etc', icon: Cpu },
    { route: 'cv' as Route, label: '~/doc', icon: FileText },
    { route: 'scribbles' as Route, label: '~/tmp', icon: Sparkles },
    { route: 'contact' as Route, label: '~/mail', icon: Mail },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-black border-b border-cyan-800/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-2 text-cyan-500 font-bold hidden md:flex">
             <span>root@omar9dev:~$</span>
             <span className="animate-pulse">_</span>
          </div>

          <div className="flex items-center overflow-x-auto no-scrollbar gap-1 w-full md:w-auto">
            {navItems.map(({ route, label, icon: Icon }) => {
              const active = currentRoute === route;
              return (
                <button
                  key={route}
                  onClick={() => navigate(route)}
                  className={`flex items-center gap-2 px-3 py-1.5 text-sm transition-all whitespace-nowrap border-b-2 ${
                    active
                      ? 'border-cyan-500 text-cyan-400 bg-cyan-950/30'
                      : 'border-transparent text-gray-500 hover:text-cyan-300 hover:bg-cyan-900/10'
                  }`}
                >
                  <Icon size={14} />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}