import React from 'react';
import { Server, Shield, Container, Network, Code2, Terminal, Cpu, Activity } from 'lucide-react';

const competencies = [
  {
    id: 'PKG_01',
    icon: Code2,
    title: 'software_eng',
    ver: 'v4.0.2',
    desc: 'Low-level programming (C, Asm), Backend Architecture, Automation.',
  },
  {
    id: 'PKG_02',
    icon: Terminal,
    title: 'linux_kernel',
    ver: 'v5.15.x',
    desc: 'Kernel internals, distro engineering, systemd, bootloaders.',
  },
  {
    id: 'PKG_03',
    icon: Container,
    title: 'containerization',
    ver: 'docker-ce',
    desc: 'Orchestration (K8s), LXC/LXD, production-grade infrastructure.',
  },
  {
    id: 'PKG_04',
    icon: Network,
    title: 'net_security',
    ver: 'openssh',
    desc: 'Firewall engineering (nftables), server hardening, secure design.',
  },
  {
    id: 'PKG_05',
    icon: Server,
    title: 'reliability',
    ver: 'cron+ansible',
    desc: 'Self-healing systems, infrastructure scripting, deployment automation.',
  },
  {
    id: 'PKG_06',
    icon: Shield,
    title: 'web_stack',
    ver: 'react-18',
    desc: 'Modern web apps, DOM manipulation, semantic structure.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-mono selection:bg-cyan-900 selection:text-white pb-20">
      {/* Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px] -z-10" />
      
      {/* Top Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-900/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 pt-24 sm:px-6 lg:px-8">
        
        {/* --- SECTION 1: NEOFETCH HERO --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 animate-in fade-in duration-700">
          
          {/* Avatar / ASCII Placeholder */}
          <div className="flex justify-center lg:justify-end relative">
             <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <img 
                    src="/potetoo.jpg" 
                    alt="Profile" 
                    className="relative w-64 h-64 md:w-80 md:h-80 object-cover grayscale contrast-125 brightness-90 border-2 border-cyan-900/50 rounded bg-black"
                    style={{ imageRendering: 'pixelated' }}
                />
                {/* Decoration Corner */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-cyan-500/50"></div>
             </div>
          </div>

          {/* Terminal Output */}
          <div className="space-y-4">
            <div>
              <p className="text-green-500 mb-2">
                <span className="text-blue-500">root@omar-system</span>:<span className="text-blue-400">~</span>$ neofetch
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-2">
                OMAR<span className="text-cyan-500">.DEV</span>
              </h1>
              <div className="h-px w-32 bg-cyan-800 my-4"></div>
            </div>

            <div className="font-mono text-sm md:text-base space-y-2 text-gray-400">
              <div className="flex">
                <span className="w-24 md:w-32 text-cyan-500 font-bold">Role</span>
                <span className="text-gray-100">Senior Systems Engineer</span>
              </div>
              <div className="flex">
                <span className="w-24 md:w-32 text-cyan-500 font-bold">Uptime</span>
                <span>5 years, 214 days</span>
              </div>
              <div className="flex">
                <span className="w-24 md:w-32 text-cyan-500 font-bold">OS</span>
                <span>Arch Linux x86_64</span>
              </div>
              <div className="flex">
                <span className="w-24 md:w-32 text-cyan-500 font-bold">Kernel</span>
                <span>Custom Build 6.1.x</span>
              </div>
              <div className="flex">
                <span className="w-24 md:w-32 text-cyan-500 font-bold">Shell</span>
                <span>Zsh + Oh-My-Zsh</span>
              </div>
              <div className="flex">
                <span className="w-24 md:w-32 text-cyan-500 font-bold">Palette</span>
                <div className="flex gap-2 mt-1">
                  <div className="w-3 h-3 bg-black"></div>
                  <div className="w-3 h-3 bg-red-500"></div>
                  <div className="w-3 h-3 bg-green-500"></div>
                  <div className="w-3 h-3 bg-yellow-500"></div>
                  <div className="w-3 h-3 bg-blue-500"></div>
                  <div className="w-3 h-3 bg-magenta-500"></div>
                  <div className="w-3 h-3 bg-cyan-500"></div>
                  <div className="w-3 h-3 bg-white"></div>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
                <span className="inline-block px-3 py-1 bg-cyan-900/30 text-cyan-400 text-xs border border-cyan-800 rounded">
                    Status: <span className="text-green-400 animate-pulse">● Online</span>
                </span>
            </div>
          </div>
        </div>

        {/* --- SECTION 2: ABOUT (cat about.txt) --- */}
        <div className="mb-24">
            <div className="flex items-center gap-2 mb-4 text-lg">
                <span className="text-green-500">➜</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-400">cat</span>
                <span className="text-yellow-400">about_me.txt</span>
            </div>

            <div className="bg-black/50 border-l-2 border-cyan-800 pl-6 py-4 pr-4 rounded-r relative overflow-hidden group">
                 {/* Decorative scanline for text box */}
                 <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-900 to-transparent opacity-50"></div>
                 
                 <div className="space-y-4 text-gray-300 leading-relaxed max-w-3xl">
                    <p>
                        I architect and engineer infrastructure-grade software with deep expertise in 
                        <span className="text-white"> Linux internals, kernel behavior, and system architecture</span>.
                        I blend low-level precision with automation-first thinking.
                    </p>
                    <p>
                        I built a complete Linux distribution from scratch, covering kernel configuration, 
                        init systems, bootloaders, and package management. This gives me a foundational 
                        understanding of operating systems beyond abstraction layers.
                    </p>
                    <p>
                        <span className="text-cyan-400 opacity-70"># Systems designed to be reliable, scalable, and secure by default.</span>
                    </p>
                 </div>
            </div>
        </div>

        {/* --- SECTION 3: COMPETENCIES (ls /modules) --- */}
        <div>
            <div className="flex items-center gap-2 mb-8 text-lg">
                <span className="text-green-500">➜</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-400">ls -la</span>
                <span className="text-yellow-400">/usr/bin/competencies/</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {competencies.map((comp, idx) => (
                    <div 
                        key={idx}
                        className="group relative bg-gray-900/20 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 p-5 overflow-hidden"
                    >
                        {/* Hover Background Effect */}
                        <div className="absolute inset-0 bg-cyan-900/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        {/* Header */}
                        <div className="flex justify-between items-start mb-4 relative z-10">
                            <div className="p-2 bg-gray-900 border border-gray-700 rounded group-hover:border-cyan-500/30 transition-colors">
                                <comp.icon size={20} className="text-cyan-500" />
                            </div>
                            <span className="text-xs font-mono text-gray-600 group-hover:text-cyan-700 transition-colors">
                                {comp.id}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            <h3 className="text-lg font-bold text-gray-200 mb-1 group-hover:text-cyan-400 transition-colors">
                                {comp.title}
                            </h3>
                            <div className="text-xs text-blue-400 mb-3 font-mono">
                                [{comp.ver}]
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                                {comp.desc}
                            </p>
                        </div>

                        {/* Corner Accents */}
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gray-700 group-hover:border-cyan-500 transition-colors"></div>
                    </div>
                ))}
            </div>
            
            <div className="mt-8 text-gray-600 text-sm font-mono">
                <span className="text-green-500">➜</span> {competencies.length} modules loaded successfully.
            </div>
        </div>

      </div>
    </div>
  );
}