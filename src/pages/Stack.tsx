import React from 'react';

const techStack = {
  environment: {
    os: "Arch Linux (Custom Kernel)",
    shell: "zsh + oh-my-zsh",
    editor: "Neovim / VS Code",
    terminal: "Alacritty"
  },
  languages: [
    "TypeScript", "Rust", "Python", 
    "Go", "C++", "Assembly"
  ],
  devops: {
    containerization: "Docker & Podman",
    orchestration: "Kubernetes",
    iac: "Terraform",
    ci_cd: "GitHub Actions"
  },
  hardware: {
    cpu: "AMD Ryzen 9",
    ram: "64GB DDR5",
    gpu: "NVIDIA RTX 4080",
    keyboard: "Keychron Q1 Pro (Brown Switch)"
  }
};

export default function Stack() {
  return (
    <div className="min-h-screen pt-20 pb-10 px-4 max-w-5xl mx-auto">
      <div className="border border-cyan-800/50 rounded-lg bg-black/50 p-6 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
        <div className="flex items-center gap-2 mb-6 border-b border-cyan-900/50 pb-4">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          <span className="ml-auto text-xs text-cyan-700">config.json</span>
        </div>
        
        <pre className="text-sm md:text-base overflow-x-auto text-gray-300 font-mono">
          <code>
            {JSON.stringify(techStack, null, 2).split('\n').map((line, i) => (
              <div key={i} className="hover:bg-cyan-900/10 px-2 rounded">
                <span className="text-gray-600 select-none w-8 inline-block text-right mr-4">{i + 1}</span>
                <span dangerouslySetInnerHTML={{
                  __html: line
                    .replace(/"([^"]+)":/g, '<span class="text-cyan-400">"$1"</span>:')
                    .replace(/: "([^"]+)"/g, ': <span class="text-green-400">"$1"</span>')
                    .replace(/\[/g, '<span class="text-yellow-500">[</span>')
                    .replace(/\]/g, '<span class="text-yellow-500">]</span>')
                    .replace(/\{/g, '<span class="text-purple-500">{</span>')
                    .replace(/\}/g, '<span class="text-purple-500">}</span>')
                }} />
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}