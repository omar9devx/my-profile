import React from 'react';
import { Download, Mail, Github, MessageCircle, MapPin } from 'lucide-react';

export default function CV() {
  const handleDownload = () => window.print();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between print:hidden">
          <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Curriculum Vitae
          </h1>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-cyan-500/20 border border-cyan-500/40 rounded-xl transition-all"
          >
            <Download size={18} className="text-cyan-400" />
            <span className="font-medium">Download PDF</span>
          </button>
        </div>

        {/* CV Card */}
        <div
          id="cv-content"
          className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl print:bg-white print:text-black print:border-0"
        >
          {/* Identity */}
          <section className="mb-10">
            <h2 className="text-4xl font-bold mb-2">Omar</h2>
            <p className="text-2xl text-cyan-400 mb-4 print:text-gray-700">
              Senior Software Engineer & Linux Systems Craftsman
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400 print:text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Palestine → Egypt / Cairo</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:omar9dev@gmail.com">omar9dev@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Github size={16} />
                <a href="https://github.com/omar9devx" target="_blank" rel="noreferrer">
                  github.com/omar9devx
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={16} />
                <span>Omar9Dev</span>
              </div>
            </div>
          </section>

          {/* Section helper */}
          {[
            {
              title: 'Professional Summary',
              content: (
                <p className="leading-relaxed">
                  Senior Software Engineer specializing in Linux systems architecture, infrastructure automation,
                  and low-level programming. Built a complete Linux distribution from scratch with deep mastery
                  of kernel internals, system initialization, and OS fundamentals. Experienced in designing
                  scalable, secure, production-grade systems.
                </p>
              ),
            },
            {
              title: 'Technical Expertise',
              content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    ['Programming Languages', 'Python, JavaScript, C, Assembly, Bash'],
                    ['Shell Environments', 'Bash, Zsh, Fish'],
                    ['Linux & Systems', 'Kernel internals, init systems, bootloaders, distro engineering'],
                    ['Containers & Virtualization', 'Docker, LXC/LXD, Qemu/KVM'],
                    ['Networking & Security', 'SSH, firewalls, hardening'],
                    ['DevOps & Automation', 'CI/CD, cron, Nginx'],
                    ['Web Technologies', 'HTML5, CSS3, DOM, React, Vite'],
                    ['Infrastructure Tools', 'Git, systemd, monitoring'],
                  ].map(([title, value]) => (
                    <div key={title}>
                      <h4 className="font-semibold mb-1">{title}</h4>
                      <p className="text-gray-400 print:text-gray-800">{value}</p>
                    </div>
                  ))}
                </div>
              ),
            },
            {
              title: 'Key Projects',
              content: (
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">VOPK – Unified Package Manager</h4>
                    <p className="text-gray-400 mb-2">
                      Universal frontend abstracting Linux package managers with automatic environment detection.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-400 ml-4">
                      <li>OS fingerprinting & command translation</li>
                      <li>Portable automation across distros</li>
                      <li>Modular detection & execution layers</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-2">Custom Linux Distribution</h4>
                    <p className="text-gray-400 mb-2">
                      Built a Linux distro from scratch including kernel, init system, toolchain, and packages.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-400 ml-4">
                      <li>Kernel compilation & optimization</li>
                      <li>Init & service orchestration</li>
                      <li>Bootloader & recovery design</li>
                    </ul>
                  </div>
                </div>
              ),
            },
            {
              title: 'Key Achievements',
              content: (
                <ul className="space-y-3">
                  {[
                    'Built a complete Linux distribution from scratch',
                    'Automated secure server hardening',
                    'Reduced MTTR with self-healing systems',
                    'Designed containerized production infrastructure',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-cyan-400">▸</span>
                      <span className="text-gray-400 print:text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              ),
            },
            {
              title: 'Professional Interests',
              content: (
                <p className="leading-relaxed">
                  Interested in senior roles focused on systems architecture, distributed systems,
                  infrastructure automation, and security-critical platforms.
                </p>
              ),
            },
          ].map((section) => (
            <section
              key={section.title}
              className="border-t border-white/10 print:border-gray-300 pt-8 mb-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-cyan-400 print:text-black">
                {section.title}
              </h3>
              {section.content}
            </section>
          ))}
        </div>
      </div>

      {/* Print rules */}
      <style>{`
        @media print {
          body { background: white !important; }
          .print\\:hidden { display: none !important; }
        }
      `}</style>
    </div>
  );
}
