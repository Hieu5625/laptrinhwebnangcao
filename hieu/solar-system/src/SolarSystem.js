import React, { useRef, useEffect } from 'react';

const SolarSystem = () => {
  const canvasRef = useRef(null);
  const planets = [
    { name: 'Mercury', radius: 5, distance: 60, speed: 0.05, color: '#8B8B83', satellites: [] },
    { name: 'Venus', radius: 10, distance: 90, speed: 0.04, color: '#FFD700', satellites: [] },
    { name: 'Earth', radius: 10, distance: 120, speed: 0.03, color: '#1E90FF', satellites: [{ name: 'Moon', radius: 3, distance: 20, speed: 0.2, color: '#C0C0C0' }] },
    { name: 'Mars', radius: 8, distance: 150, speed: 0.02, color: '#FF4500', satellites: [{ name: 'Phobos', radius: 2, distance: 15, speed: 0.3, color: '#A9A9A9' }] },
    { name: 'Jupiter', radius: 20, distance: 190, speed: 0.015, color: '#D2691E', satellites: [] },
    { name: 'Saturn', radius: 18, distance: 230, speed: 0.01, color: '#DAA520', satellites: [] },
    { name: 'Uranus', radius: 15, distance: 270, speed: 0.008, color: '#00CED1', satellites: [] },
    { name: 'Neptune', radius: 15, distance: 310, speed: 0.007, color: '#0000FF', satellites: [] },
  ];

  const angles = new Array(planets.length).fill(0);
  const meteors = []; // Danh sách thiên thạch
  const fishes = []; // Danh sách con hà

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const createMeteors = () => {
      if (Math.random() < 0.02) {
        meteors.push({
          x: Math.random() * canvas.width,
          y: 0,
          size: Math.random() * 2 + 2,
          speed: Math.random() * 2 + 1,
          angle: Math.random() * Math.PI / 4 - Math.PI / 8,
        });
      }
    };

    const createFishes = () => {
      if (Math.random() < 0.02) { // Tạo con hà với xác suất nhất định
        fishes.push({
          x: Math.random() * canvas.width,
          y: 0,
          size: Math.random() * 5 + 5,
          speed: Math.random() * 2 + 1,
          angle: Math.random() * Math.PI / 4 - Math.PI / 8, // Di chuyển xéo
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Vẽ ngôi sao
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fillRect(x, y, 2, 2);
      }

      // Vẽ mặt trời
      const sunX = canvas.width / 2;
      const sunY = canvas.height / 2;

      const glowRadius = 60;
      const gradient = ctx.createRadialGradient(sunX, sunY, 30, sunX, sunY, glowRadius);
      gradient.addColorStop(0, 'rgba(255, 255, 0, 1)');
      gradient.addColorStop(1, 'rgba(255, 255, 0, 0)');

      ctx.beginPath();
      ctx.arc(sunX, sunY, glowRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.closePath();

      // Mặt trời
      ctx.beginPath();
      ctx.arc(sunX, sunY, 40, 0, Math.PI * 2);
      ctx.fillStyle = 'yellow';
      ctx.fill();
      ctx.closePath();

      planets.forEach((planet, index) => {
        angles[index] += planet.speed;
        const x = sunX + (planet.distance * Math.cos(angles[index]));
        const y = sunY + (planet.distance * Math.sin(angles[index]));

        ctx.beginPath();
        ctx.arc(x, y, planet.radius, 0, Math.PI * 2);
        ctx.fillStyle = planet.color;
        ctx.fill();
        ctx.closePath();

        // Vẽ tên hành tinh
        ctx.fillStyle = 'white';
        ctx.fillText(planet.name, x, y - planet.radius - 5);

        // Vẽ vệ tinh
        planet.satellites.forEach(satellite => {
          satellite.angle = (satellite.angle || 0) + satellite.speed;
          const sx = x + (satellite.distance) * Math.cos(satellite.angle);
          const sy = y + (satellite.distance) * Math.sin(satellite.angle);

          ctx.beginPath();
          ctx.arc(sx, sy, satellite.radius, 0, Math.PI * 2);
          ctx.fillStyle = satellite.color;
          ctx.fill();
          ctx.closePath();

          ctx.fillStyle = 'white';
          ctx.fillText(satellite.name, sx, sy - satellite.radius - 5);
        });
      });

      // Vẽ thiên thạch
      meteors.forEach((meteor, index) => {
        ctx.fillStyle = 'orange';
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, meteor.size, 0, Math.PI * 2);
        ctx.fill();
        meteor.x += Math.cos(meteor.angle) * meteor.speed;
        meteor.y += meteor.speed;

        // Tạo hiệu ứng tia lửa
        const sparkCount = 5; 
        for (let i = 0; i < sparkCount; i++) {
          ctx.fillStyle = 'rgba(255, 255, 0, 0.7)';
          ctx.beginPath();
          ctx.arc(meteor.x + (Math.random() - 0.5) * 5, meteor.y + (Math.random() - 0.5) * 5, 1, 0, Math.PI * 2);
          ctx.fill();
        }

        if (meteor.y > canvas.height) {
          meteors.splice(index, 1);
        }
      });

      createMeteors();

      // Vẽ con hà
      fishes.forEach((fish, index) => {
        ctx.fillStyle = 'cyan';
        ctx.beginPath();
        ctx.arc(fish.x, fish.y, fish.size, 0, Math.PI * 2);
        ctx.fill();

        // Vẽ chữ "con hà" gần con hà
        ctx.fillStyle = 'white';
        ctx.font = '12px Arial';
        ctx.fillText('duy ngu', fish.x - fish.size, fish.y - fish.size - 5);

        fish.x += Math.cos(fish.angle) * fish.speed; // Di chuyển theo góc
        fish.y += fish.speed; // Di chuyển xuống dưới

        if (fish.y > canvas.height) {
          fishes.splice(index, 1); // Xóa con hà nếu ra ngoài canvas
        }
      });

      createFishes(); // Tạo con hà mới

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: 'block', height: '100vh', width: '100vw', margin: 0, padding: 0 }}
    />
  );
};

export default SolarSystem;
