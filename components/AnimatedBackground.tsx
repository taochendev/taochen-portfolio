"use client";

import { useEffect, useRef } from "react";

const STAR_COUNT = 50;
const MAX_RADIUS = 3.6; /* 3× previous 1.2 */
const BASE_OPACITY = 0.06;
const MAX_OPACITY = 0.12;
const MAX_SPEED = 0.15;

type Star = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  baseOpacity: number;
};

function initStars(width: number, height: number): Star[] {
  const stars: Star[] = [];
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 1.2 + Math.random() * (MAX_RADIUS - 1.2),
      vx: (Math.random() - 0.5) * 2 * MAX_SPEED,
      vy: (Math.random() - 0.5) * 2 * MAX_SPEED,
      baseOpacity: BASE_OPACITY + Math.random() * (MAX_OPACITY - BASE_OPACITY),
    });
  }
  return stars;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let stars = initStars(width, height);

    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      stars = initStars(width, height);
    };

    setSize();
    window.addEventListener("resize", setSize);

    const tick = () => {
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0 || s.x > w) s.vx *= -1;
        if (s.y < 0 || s.y > h) s.vy *= -1;
        s.x = Math.max(0, Math.min(w, s.x));
        s.y = Math.max(0, Math.min(h, s.y));

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 236, 241, ${s.baseOpacity})`;
        ctx.fill();
      }

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frameRef.current);
      } else {
        frameRef.current = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("resize", setSize);
      document.removeEventListener("visibilitychange", handleVisibility);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden
    />
  );
}
