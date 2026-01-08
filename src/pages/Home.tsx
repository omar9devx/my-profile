import React from 'react';
import { Server, Shield, Container, Network, Code2, Terminal } from 'lucide-react';

const competencies = [
  {
    icon: Code2,
    title: 'Software Engineering',
    description:
      'Architecture, backend systems, automation tooling, and low-level programming in C, Assembly, Python, and JavaScript.',
  },
  {
    icon: Terminal,
    title: 'Linux & Systems',
    description:
      'Deep kernel understanding, system internals, and complete Linux distribution engineering from scratch.',
  },
  {
    icon: Container,
    title: 'DevOps & Containers',
    description:
      'Docker orchestration, LXC/LXD virtualization, and production-grade containerized infrastructure.',
  },
  {
    icon: Network,
    title: 'Networking & Security',
    description:
      'SSH mastery, firewall engineering, server hardening, and secure system design principles.',
  },
  {
    icon: Server,
    title: 'Automation & Reliability',
    description:
      'Cron scheduling, deployment automation, infrastructure scripting, and self-healing systems.',
  },
  {
    icon: Shield,
    title: 'Web Technologies',
    description:
      'HTML5, CSS3, DOM manipulation, event systems, and semantic structure for modern web applications.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Top glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        {/* Hero */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-mono">
              $ whoami
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Omar
              </span>
            </h1>

            <p className="text-2xl text-cyan-400 font-light">
              Senior Software Engineer & Linux Systems Craftsman
            </p>

            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Engineering systems from the kernel layer up to production-grade deployment pipelines.
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {['Python', 'C', 'Assembly', 'JavaScript', 'Bash / Zsh / Fish'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-cyan-950/30 text-cyan-300 rounded-lg text-sm border border-cyan-500/20 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Avatar */}
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-2xl" />
            <img
              src="/potetoo.jpg"
              alt="Omar"
              className="relative w-72 h-72 rounded-2xl object-cover border border-cyan-500/30 shadow-2xl"
            />
          </div>
        </div>

        {/* About */}
        <div className="mb-32 bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl">
          <h3 className="text-3xl font-bold mb-6 text-cyan-400">About Me</h3>
          <div className="space-y-4 text-lg text-gray-400 leading-relaxed">
            <p>
              I architect and engineer infrastructure-grade software with deep expertise in Linux internals,
              kernel behavior, and system architecture — blending low-level precision with automation-first
              thinking.
            </p>
            <p>
              I built a complete Linux distribution from scratch, covering kernel configuration, init systems,
              bootloaders, and package management. This gives me a foundational understanding of operating
              systems beyond abstraction layers.
            </p>
            <p>
              My work spans containers, networking, security hardening, and DevOps workflows. I design systems
              that are reliable, scalable, and secure by default — engineered to survive real production load.
            </p>
            <p>
              I write production-grade code in Python, JavaScript, C, and Assembly, and move seamlessly between
              infrastructure and application layers with strong engineering discipline.
            </p>
          </div>
        </div>

        {/* Competencies */}
        <div>
          <h3 className="text-3xl font-bold mb-14 text-cyan-400">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competencies.map((comp, idx) => (
              <div
                key={idx}
                className="group bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all shadow-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-gray-800 to-black rounded-xl border border-white/10 group-hover:shadow-cyan-500/20 transition-all">
                    <comp.icon className="text-cyan-400" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-white">{comp.title}</h4>
                </div>
                <p className="text-gray-400 leading-relaxed">{comp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
