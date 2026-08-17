import React, { useEffect, useRef } from 'react';

export default function DustParticles({ litCount = 0 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const isAllLit = litCount === 4;
    const particleCount = 50 + litCount * 30;

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2.2 + 0.5,
      vx: (Math.random() - 0.5) * 0.5,
      vy: -Math.random() * 0.6 - 0.2,
      alpha: Math.random() * 0.5 + 0.2,
      baseAlpha: Math.random() * 0.4 + 0.2,
      pulseSpeed: Math.random() * 0.03 + 0.01,
      angle: Math.random() * Math.PI * 2,
      isEmber: Math.random() < 0.25 + litCount * 0.12,
      isGoldSpark: isAllLit && Math.random() < 0.4,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.angle += p.pulseSpeed;
        p.alpha = p.baseAlpha + Math.sin(p.angle) * 0.25;
        p.x += p.vx + Math.sin(p.angle * 0.5) * 0.35;
        p.y += p.vy;

        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (p.isGoldSpark) {
          ctx.fillStyle = `rgba(255, 225, 130, ${Math.max(0, p.alpha)})`;
          ctx.shadowBlur = 12;
          ctx.shadowColor = 'rgba(255, 215, 0, 0.95)';
        } else if (p.isEmber && litCount > 0) {
          ctx.fillStyle = `rgba(255, 175, 60, ${Math.max(0, p.alpha * 0.85)})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = 'rgba(255, 120, 0, 0.8)';
        } else {
          ctx.fillStyle = `rgba(235, 215, 180, ${Math.max(0, p.alpha * 0.35)})`;
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [litCount]);

  return <canvas ref={canvasRef} className="dust-particles-canvas" />;
}
