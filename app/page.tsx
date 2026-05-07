'use client';
import { useState, useEffect, useRef } from "react";

import Introduction from "./components/intro";
import Community from "./components/community";
import Valedictorian from "./components/whyval";
import ThankYou from "./components/thankyou";

export default function Home() {
  const [pageNumber, setPageNumber] = useState(1);
  const burstRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const canvas = document.getElementById("confetti") as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    const particles: {
      x: number; y: number; size: number;
      speedX: number; speedY: number;
      rotation: number; color: string;
    }[] = [];
    let animationId: number;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function createParticle() {
      particles.push({
        x: Math.random() * canvas.width,
        y: -10,
        size: Math.random() * 6 + 3,
        speedX: (Math.random() - 0.5) * 4,
        speedY: Math.random() * 4 + 2,
        rotation: (Math.random() - 0.5) * 5,
        color: `hsl(${Math.random() * 360}, 80%, 60%)`,
      });
    }

    function updateParticle(p: typeof particles[0]) {
      p.x += p.speedX;
      p.y += p.speedY;
      p.x += Math.sin(p.y * 0.1) * Math.random() * 0.5;
    }

    function drawParticle(p: typeof particles[0]) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      ctx.fillRect(p.size, p.size / 4, p.size * 2, p.size / 2);
      ctx.restore();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        updateParticle(particles[i]);
        drawParticle(particles[i]);
        if (particles[i].y > canvas.height + 20) {
          particles.splice(i, 1); 
        }
      }

      animationId = requestAnimationFrame(animate);
    }

    animate();

    burstRef.current = () => {
      for (let i = 0; i < 150; i++) {
        createParticle();
      }
    };

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="bg-linear-to-r from-white to-highlight min-h-screen font-sniglet flex flex-col items-center justify-center px-4 py-6 md:px-8 md:py-10">
      <canvas id="confetti" className="fixed top-0 left-0 w-full h-full pointer-events-none" />

      <div className="bg-border w-full max-w-4xl mx-auto p-4 md:p-6 rounded-3xl shadow-lg">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-white">
            <p className="text-lg">s_nguyen080</p>
          </div>
          <div className="bg-white rounded-xl overflow-hidden">
            {pageNumber === 1 && <Introduction setPageNumber={setPageNumber} />}
            {pageNumber === 2 && <Community setPageNumber={setPageNumber} />}
            {pageNumber === 3 && <Valedictorian setPageNumber={setPageNumber} />}
            {pageNumber === 4 && <ThankYou setPageNumber={setPageNumber} />}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 p-4 md:p-8 w-full max-w-4xl mx-auto">
        <h1 className="text-base md:text-2xl text-center">
          Please click the button below if you like my work and support my journey!
        </h1>
        <button
          className="bg-border text-white w-full md:w-auto px-6 md:px-10 py-3 rounded-lg hover:scale-105 transition"
          onClick={() => burstRef.current?.()}
        >
          Vote!
        </button>
      </div>
    </div>
  );
}