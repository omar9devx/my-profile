import React from 'react';
import { Mail, Github, MessageCircle, MapPin, Briefcase } from 'lucide-react';

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'omar9dev@gmail.com',
    href: 'mailto:omar9dev@gmail.com',
    description: 'Preferred for professional inquiries',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'omar9devx',
    href: 'https://github.com/omar9devx',
    description: 'Code, systems, and infrastructure projects',
  },
  {
    icon: MessageCircle,
    label: 'Discord',
    value: 'Omar9Dev',
    href: 'https://discord.com/users/1279500219154956419',
    description: 'Quick technical discussions',
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-20">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Let’s Connect
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Open to senior engineering roles focused on systems architecture, infrastructure automation,
            and large-scale distributed platforms.
          </p>
        </header>

        {/* Contact Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="group bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-gray-800 to-black rounded-xl border border-white/10 group-hover:shadow-cyan-500/20 transition-all">
                  <c.icon className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold">{c.label}</h3>
              </div>
              <p className="text-cyan-400 font-mono mb-2">{c.value}</p>
              <p className="text-sm text-gray-400">{c.description}</p>
            </a>
          ))}
        </section>

        {/* Location */}
        <section className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">
          <div className="flex items-start gap-4">
            <MapPin className="text-cyan-400 mt-1" size={26} />
            <div>
              <h3 className="text-2xl font-bold mb-3">Location</h3>
              <p className="text-gray-400">Originally from Palestine</p>
              <p className="text-gray-400">Currently based in Cairo, Egypt</p>
              <p className="text-sm text-gray-500 mt-2">
                Open to remote opportunities and relocation
              </p>
            </div>
          </div>
        </section>

        {/* What I’m Looking For */}
        <section className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">
          <div className="flex items-start gap-4">
            <Briefcase className="text-cyan-400 mt-1" size={26} />
            <div>
              <h3 className="text-2xl font-bold mb-6">What I’m Looking For</h3>
              <ul className="space-y-3">
                {[
                  'Senior systems-focused software engineering roles',
                  'Cloud-native infrastructure & container orchestration teams',
                  'Operating system or kernel-adjacent development',
                  'Organizations requiring deep Linux & DevOps expertise',
                  'Scale-focused engineering teams (Big Tech / Enterprise)',
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-gray-400">
                    <span className="text-cyan-400">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <footer className="text-center">
          <p className="text-gray-500 text-sm">
            I usually respond within 24 hours. For urgent matters, email is the fastest channel.
          </p>
        </footer>
      </div>
    </div>
  );
}
