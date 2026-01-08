import React, { useEffect, useState } from 'react';
import { Package, Github, Terminal, Server, Shield, Zap, ExternalLink } from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  desc: string;
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  icon: string; // هنتعامل مع icon كاسم
  link: string;
  description: string;
  problem: string;
  solution: string;
  codeSnippet: string;
  tags: string[];
  features: Feature[];
}

// Map icon names to actual components
const iconMap: Record<string, React.ElementType> = {
  Package,
  Terminal,
  Server,
  Shield,
  Zap,
  Github,
  ExternalLink,
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/omar9devx/my-projects/main/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error('Failed to fetch projects:', err));
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-20 text-center sm:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Projects
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Systems engineering and infrastructure tooling built for <span className="text-cyan-400 font-medium">reliability</span>, <span className="text-cyan-400 font-medium">performance</span>, and developer experience.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map(project => {
            const ProjectIcon = iconMap[project.icon] || Package;
            return (
              <div key={project.id} className="group relative bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 shadow-2xl shadow-black/50">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10 border-b border-white/5 pb-8">
                    <div className="flex items-center gap-6">
                      <div className="p-4 bg-gradient-to-br from-gray-800 to-black rounded-2xl border border-white/10 shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300">
                        <ProjectIcon className="text-cyan-400" size={40} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h2>
                        <p className="text-cyan-400/80 font-mono text-sm tracking-wide uppercase">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-xl transition-all duration-300"
                    >
                      <Github size={20} className="text-gray-300 transition-colors" />
                      <span className="text-gray-200 font-medium">Source Code</span>
                      <ExternalLink size={16} className="text-gray-500 opacity-0 -ml-2 transition-all group-hover:opacity-100 group-hover:ml-0" />
                    </a>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-7 space-y-8">
                      <div>
                        <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-3">
                          <span className="w-1 h-6 bg-cyan-500 rounded-full"></span>
                          Overview
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-lg">{project.description}</p>
                      </div>

                      <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                        <h3 className="text-lg font-semibold text-white mb-3">The Challenge & Solution</h3>
                        <div className="space-y-4">
                          <p className="text-gray-400 leading-relaxed text-sm">
                            <span className="text-red-400 font-medium block mb-1">Problem:</span> {project.problem}
                          </p>
                          <p className="text-gray-400 leading-relaxed text-sm">
                            <span className="text-green-400 font-medium block mb-1">Solution:</span> {project.solution}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-cyan-950/30 text-cyan-300 rounded-lg text-sm border border-cyan-500/20 font-medium">{tag}</span>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-5 space-y-8">
                      <div className="bg-[#0f1117] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                        <div className="flex items-center gap-1.5 px-4 py-3 bg-white/5 border-b border-white/5">
                          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                          <div className="ml-auto text-xs text-gray-500 font-mono">bash</div>
                        </div>
                        <div className="p-4 overflow-x-auto">
                          <pre className="font-mono text-sm leading-relaxed">
                            <code className="text-gray-300">
                              {project.codeSnippet.split('\n').map((line, i) => (
                                <div key={i} className={line.startsWith('#') ? 'text-gray-500 italic' : line.startsWith('$') ? 'text-cyan-400 font-bold' : 'text-gray-300'}>
                                  {line}
                                </div>
                              ))}
                            </code>
                          </pre>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {project.features.map((feature, idx) => {
                          const FeatureIcon = iconMap[feature.icon] || Terminal;
                          return (
                            <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                              <FeatureIcon className="text-cyan-400 mb-3" size={24} />
                              <h4 className="text-white font-semibold mb-1 text-sm">{feature.title}</h4>
                              <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
