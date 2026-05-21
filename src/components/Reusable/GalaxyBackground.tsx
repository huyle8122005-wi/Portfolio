'use client';

import { useEffect, useRef } from 'react';

export default function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Star properties
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      color: string;
      speedX: number;
      speedY: number;
      baseOpacity: number;
      opacitySpeed: number;
      angle: number;
      isFlare?: boolean;
    }> = [];

    // Stellar color palette matching the user's purple-blue space screenshot
    const starColors = [
      '#FFFFFF', // Pure bright white
      '#D6F4FF', // Celestial soft cyan
      '#FFF9D6', // Cosmic golden yellow
      '#FFE5F9', // Nebula magenta/pink
      '#A5BFCF', // Slate blue star
    ];

    // Generate stars
    const generateStars = (count: number) => {
      stars.length = 0;
      for (let i = 0; i < count; i++) {
        const isFlare = Math.random() < 0.04; // 4% of stars are large shining lens flares
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: isFlare ? Math.random() * 2.2 + 1.2 : Math.random() * 1.3 + 0.2,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          speedX: (Math.random() - 0.5) * 0.04,
          speedY: (Math.random() - 0.5) * 0.04,
          baseOpacity: Math.random() * 0.6 + 0.3,
          opacitySpeed: Math.random() * 0.008 + 0.003,
          angle: Math.random() * Math.PI * 2,
          isFlare
        });
      }
    };

    // Mouse interactive coordinates
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    // Scroll parallax effect variables
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = (currentScrollY - lastScrollY) * 0.2;
      lastScrollY = currentScrollY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      // High density star count matching user's rich star screenshot
      generateStars(Math.floor((width * height) / 2200));
    };
    window.addEventListener('resize', handleResize);

    // Initial adaptive star count
    handleResize();

    // Loop
    const animate = () => {
      // Ease mouse coordinates
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      // Draw rich, deep purple space base color
      ctx.fillStyle = '#06020c';
      ctx.fillRect(0, 0, width, height);

      // Nebula 1 (Vibrant Purple/Violet Cloud - Top Left/Center)
      const gradientPurple = ctx.createRadialGradient(
        width * 0.35 + (mouse.x - width / 2) * 0.12,
        height * 0.4 + (mouse.y - height / 2) * 0.12,
        0,
        width * 0.35 + (mouse.x - width / 2) * 0.12,
        height * 0.4 + (mouse.y - height / 2) * 0.12,
        Math.max(width, height) * 0.65
      );
      gradientPurple.addColorStop(0, 'rgba(114, 9, 183, 0.32)');
      gradientPurple.addColorStop(0.4, 'rgba(72, 12, 168, 0.15)');
      gradientPurple.addColorStop(0.8, 'rgba(28, 10, 48, 0.05)');
      gradientPurple.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradientPurple;
      ctx.fillRect(0, 0, width, height);

      // Nebula 2 (Vibrant Royal Cyan/Blue Cloud - Right/Center)
      const gradientBlue = ctx.createRadialGradient(
        width * 0.75 + (mouse.x - width / 2) * 0.08,
        height * 0.6 + (mouse.y - height / 2) * 0.08,
        0,
        width * 0.75 + (mouse.x - width / 2) * 0.08,
        height * 0.6 + (mouse.y - height / 2) * 0.08,
        Math.max(width, height) * 0.55
      );
      gradientBlue.addColorStop(0, 'rgba(0, 150, 199, 0.28)');
      gradientBlue.addColorStop(0.5, 'rgba(3, 83, 164, 0.12)');
      gradientBlue.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradientBlue;
      ctx.fillRect(0, 0, width, height);

      // Nebula 3 (Vibrant Magenta Accent Cloud - Bottom Left)
      const gradientMagenta = ctx.createRadialGradient(
        width * 0.15 + (mouse.x - width / 2) * 0.05,
        height * 0.75 + (mouse.y - height / 2) * 0.05,
        0,
        width * 0.15 + (mouse.x - width / 2) * 0.05,
        height * 0.75 + (mouse.y - height / 2) * 0.05,
        Math.max(width, height) * 0.45
      );
      gradientMagenta.addColorStop(0, 'rgba(181, 23, 158, 0.22)');
      gradientMagenta.addColorStop(0.6, 'rgba(72, 12, 168, 0.06)');
      gradientMagenta.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradientMagenta;
      ctx.fillRect(0, 0, width, height);

      // Nebula 4 (Bright Cosmic Indigo Core Cloud - Center)
      const gradientIndigo = ctx.createRadialGradient(
        width * 0.5 + (mouse.x - width / 2) * 0.07,
        height * 0.2 + (mouse.y - height / 2) * 0.07,
        0,
        width * 0.5 + (mouse.x - width / 2) * 0.07,
        height * 0.2 + (mouse.y - height / 2) * 0.07,
        Math.max(width, height) * 0.5
      );
      gradientIndigo.addColorStop(0, 'rgba(67, 97, 238, 0.18)');
      gradientIndigo.addColorStop(0.5, 'rgba(76, 201, 240, 0.06)');
      gradientIndigo.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradientIndigo;
      ctx.fillRect(0, 0, width, height);

      // Draw and update stars
      stars.forEach((star) => {
        // Star breathing twinkle
        star.angle += star.opacitySpeed;
        const currentOpacity = star.baseOpacity + Math.sin(star.angle) * 0.25;

        // Apply mouse interaction (parallax star movement)
        const depth = star.size * 0.6; // Closer/larger stars shift more
        const mouseShiftX = (mouse.x - width / 2) * 0.012 * depth;
        const mouseShiftY = (mouse.y - height / 2) * 0.012 * depth;

        // Apply scroll shift
        star.y -= scrollVelocity * depth * 0.5;

        // Base drift speed
        star.x += star.speedX;
        star.y += star.speedY;

        // Wraparound edge checking with margins
        const drawX = star.x + mouseShiftX;
        const drawY = star.y + mouseShiftY;

        if (star.x < -30) star.x = width + 30;
        if (star.x > width + 30) star.x = -30;
        if (star.y < -30) star.y = height + 30;
        if (star.y > height + 30) star.y = -30;

        ctx.globalAlpha = Math.max(0.15, Math.min(1, currentOpacity));

        if (star.isFlare) {
          // Draw bright circular core
          ctx.beginPath();
          ctx.arc(drawX, drawY, star.size, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.fill();

          // Draw soft radial outer glow
          const glowGrad = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, star.size * 4);
          glowGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
          glowGrad.addColorStop(0.3, star.color + '99');
          glowGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(drawX, drawY, star.size * 4, 0, Math.PI * 2);
          ctx.fill();

          // Draw vertical & horizontal cross flares
          ctx.strokeStyle = 'rgba(255, 255, 255, ' + (currentOpacity * 0.6) + ')';
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          // Horizontal line
          ctx.moveTo(drawX - star.size * 6, drawY);
          ctx.lineTo(drawX + star.size * 6, drawY);
          // Vertical line
          ctx.moveTo(drawX, drawY - star.size * 6);
          ctx.lineTo(drawX, drawY + star.size * 6);
          ctx.stroke();
        } else {
          // Draw standard twinkling star
          ctx.beginPath();
          ctx.arc(drawX, drawY, star.size, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.fill();
        }
      });

      ctx.globalAlpha = 1.0;

      // Slow decay of scroll velocity
      scrollVelocity *= 0.95;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-50 h-screen w-screen pointer-events-none"
      style={{ background: '#06020c' }}
    />
  );
}
