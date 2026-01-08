import { useEffect, useRef, useState } from 'react';

export default function Scribbles() {
  const [clicks, setClicks] = useState(0);
  const [shake, setShake] = useState(false);
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<'normal' | 'inverted' | 'glitch'>('normal');

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<AudioContext | null>(null);

  /* ---------------- Canvas ---------------- */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: any[] = [];

    const spawn = (x: number, y: number) => {
      for (let i = 0; i < 6; i++) {
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3,
          life: 1,
        });
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.015;

        ctx.fillStyle = `rgba(6,182,212,${p.life})`;
        ctx.fillRect(p.x, p.y, 2, 2);

        if (p.life <= 0) particles.splice(i, 1);
      });

      requestAnimationFrame(animate);
    };

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      spawn(e.clientX - r.left, e.clientY - r.top);
    };

    canvas.addEventListener('mousemove', onMove);
    animate();

    return () => canvas.removeEventListener('mousemove', onMove);
  }, []);

  /* ---------------- Button Chaos ---------------- */
  const dangerClick = () => {
    setClicks((c) => c + 1);
    setShake(true);
    setTimeout(() => setShake(false), 400);

    if (!audioRef.current) audioRef.current = new AudioContext();
    const ctx = audioRef.current;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.frequency.value = 180 + clicks * 40;
    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  };

  /* ---------------- Utils ---------------- */
  const cycleMode = () =>
    setMode((m) => (m === 'normal' ? 'inverted' : m === 'inverted' ? 'glitch' : 'normal'));

  const pageEffect =
    mode === 'inverted' ? 'invert' : mode === 'glitch' ? 'animate-pulse' : '';

  return (
    <div
      className={`min-h-screen bg-[#0a0a0a] text-white selection:bg-cyan-500/30 ${pageEffect}`}
    >
      {/* Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-16">
        {/* Header */}
        <header>
          <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Scribbles
          </h1>
          <p className="text-gray-400 max-w-3xl">
            Controlled chaos to demonstrate deep understanding of browser internals, DOM events,
            Canvas, Audio APIs, semantic HTML, and CSS behavior.
          </p>
        </header>

        {/* Canvas */}
        <section className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Canvas API</h2>
          <canvas
            ref={canvasRef}
            className="w-full h-64 bg-black rounded-xl border border-cyan-500/30 cursor-crosshair"
          />
        </section>

        {/* Button */}
        <section
          className={`bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 ${
            shake ? 'animate-shake' : ''
          }`}
        >
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Event Chaos</h2>
          <button
            onClick={dangerClick}
            style={{ transform: `rotate(${clicks * 4}deg)` }}
            className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-xl transition-all"
          >
            {clicks < 5 ? 'Do Not Click' : clicks < 10 ? 'Seriously Stop' : 'You Like Pain'}
          </button>
        </section>

        {/* Input */}
        <section className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Live Input Mutation</h2>
          <input
            className="w-full px-4 py-2 bg-black border border-cyan-500/30 rounded-lg"
            onChange={(e) => setInput(e.target.value.split('').reverse().join(''))}
          />
          <p className="mt-4 font-mono text-cyan-400">
            {input || 'waiting for entropy...'}
          </p>
        </section>

        {/* Mode */}
        <section className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">CSS Filters</h2>
          <button
            onClick={cycleMode}
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-xl"
          >
            Mode: {mode.toUpperCase()}
          </button>
        </section>

        {/* Semantics */}
        <section className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          <article>
            <header>
              <h3 className="text-xl font-semibold">Semantic HTML</h3>
              <time className="text-sm text-gray-500">2026-01-08</time>
            </header>
            <details className="mt-4 bg-black/40 p-4 rounded-lg">
              <summary className="cursor-pointer text-cyan-400">
                Native disclosure widget
              </summary>
              <p className="mt-3 text-gray-400">
                No JS. Just proper HTML5 semantics.
              </p>
            </details>
          </article>
        </section>
      </div>

      <style>{`
        @keyframes shake {
          0%,100%{transform:translateX(0)}
          25%{transform:translateX(-8px)}
          75%{transform:translateX(8px)}
        }
        .animate-shake{animation:shake .4s}
      `}</style>
    </div>
  );
}
