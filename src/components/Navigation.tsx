import { Terminal, Code, FileText, Sparkles, Mail } from 'lucide-react';
import { navigate, Route } from '../utils/router';

interface NavigationProps {
  currentRoute: Route;
}

export default function Navigation({ currentRoute }: NavigationProps) {
  const navItems = [
    { route: 'home' as Route, label: 'Home', icon: Terminal },
    { route: 'projects' as Route, label: 'Projects', icon: Code },
    { route: 'cv' as Route, label: 'CV', icon: FileText },
    { route: 'scribbles' as Route, label: 'Scribbles', icon: Sparkles },
    { route: 'contact' as Route, label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => navigate('home')}
            className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Omar9Dev
          </button>

          <div className="flex items-center gap-1">
            {navItems.map(({ route, label, icon: Icon }) => {
              const active = currentRoute === route;

              return (
                <button
                  key={route}
                  onClick={() => navigate(route)}
                  className={`group flex items-center gap-2 px-4 py-2 rounded-lg transition-all motion-reduce:transition-none ${
                    active
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-cyan-400'
                  }`}
                >
                  <Icon size={18} className="shrink-0" />
                  <span className="hidden sm:inline text-sm font-medium">
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
