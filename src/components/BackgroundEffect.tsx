import { useEffect, useRef } from "react";

export default function BackgroundEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const orbs = [
      { x: 0.2, y: 0.3, r: 350, speedX: 0.0003, speedY: 0.0002, phase: 0 },
      { x: 0.8, y: 0.5, r: 300, speedX: 0.0002, speedY: 0.0003, phase: 2 },
      { x: 0.5, y: 0.8, r: 280, speedX: 0.00025, speedY: 0.00015, phase: 4 },
      { x: 0.3, y: 0.6, r: 250, speedX: 0.0002, speedY: 0.00025, phase: 6 },
    ];

    const animate = () => {
      time += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = document.documentElement.classList.contains("dark");

      orbs.forEach((orb) => {
        const cx = canvas.width * orb.x + Math.sin(time * orb.speedX + orb.phase) * canvas.width * 0.2;
        const cy = canvas.height * orb.y + Math.cos(time * orb.speedY + orb.phase) * canvas.height * 0.2;

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, orb.r);
        if (isDark) {
          grad.addColorStop(0, "rgba(255,255,255,0.07)");
          grad.addColorStop(0.4, "rgba(255,255,255,0.03)");
          grad.addColorStop(1, "rgba(255,255,255,0)");
        } else {
          grad.addColorStop(0, "rgba(0,0,0,0.07)");
          grad.addColorStop(0.4, "rgba(0,0,0,0.03)");
          grad.addColorStop(1, "rgba(0,0,0,0)");
        }
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
