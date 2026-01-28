"use client";

import React, { useEffect, useRef } from "react";

export function WarpBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Aumentei um pouco a quantidade para preencher melhor o espaço
    const starCount = 400; 
    const stars: { x: number; y: number; z: number; o: number }[] = [];
    
    let scrollY = window.scrollY;
    let velocity = 0;
    let lastScrollY = scrollY;
    let time = 0;

    // Inicializa as estrelas
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * 2, 
        o: Math.random(), 
      });
    }

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", resize);
    resize();

    const animate = () => {
      time += 0.05;
      
      // 1. Limpa o canvas (Fundo escuro translúcido para rastro suave)
      ctx.fillStyle = "rgba(3, 0, 20, 0.2)"; 
      ctx.fillRect(0, 0, width, height);

      // 2. Cálculo da Física (AJUSTADO PARA SUAVIZE)
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      
      // AJUSTE 1: Sensibilidade drasticamente reduzida
      // Antes era delta * 0.5, agora é delta * 0.05 (10x menos sensível)
      // O fator 0.05 (lerp) faz a transição ser bem lenta e fluida
      velocity += (delta * 0.05 - velocity) * 0.05; 
      
      lastScrollY = currentScrollY;

      ctx.fillStyle = "white";
      
      stars.forEach((star) => {
        // AJUSTE 2: Velocidade Base mais lenta (0.2 em vez de 0.5)
        // Isso faz o idle ser bem calmo
        star.y -= (0.2 + velocity * 1.5) * star.z; 

        if (star.y < -height / 2) star.y = height / 2;
        if (star.y > height / 2) star.y = -height / 2;

        const size = (1.5 * star.z);
        
        // AJUSTE 3: "Clamp" no esticamento (Max 15px)
        // Isso impede que as estrelas virem riscos gigantescos
        const stretch = Math.min(Math.abs(velocity) * 10, 15); 
        const starHeight = size + stretch;

        ctx.globalAlpha = star.o;
        ctx.beginPath();
        
        const cx = width / 2 + star.x / (star.z * 0.5); 
        const cy = height / 2 + star.y;
        
        if (cx > 0 && cx < width && cy > 0 && cy < height) {
            // Desenha com bordas arredondadas para ficar mais bonito
            ctx.roundRect(cx, cy, size, starHeight, 2);
            ctx.fill();
        }
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 bg-[#030014]">
      {/* Grid Tecnológico Fixo (CSS Global) */}
      <div className="fixed inset-0 bg-grid-tech pointer-events-none z-0 opacity-40" />
      
      {/* Gradiente sutil para dar profundidade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-[#030014]/50 pointer-events-none z-10" />
      
      <canvas 
        ref={canvasRef} 
        className="block w-full h-full opacity-60"
      />
    </div>
  );
}