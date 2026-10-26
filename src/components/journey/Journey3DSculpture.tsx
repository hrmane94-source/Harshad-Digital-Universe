import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Journey3DSculptureProps {
  className?: string;
}

export const Journey3DSculpture: React.FC<Journey3DSculptureProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    motionQuery.addEventListener('change', handleMotionChange);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || isReducedMotion) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    // Three.js Scene Setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
    } catch {
      setHasWebGL(false);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0); // transparent background

    // Append to container
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';

    // Check Theme
    const isDark = document.documentElement.classList.contains('dark');

    // Color definitions
    const primaryColor = isDark ? 0x78a6ff : 0x315eeb;
    const secondaryColor = isDark ? 0xb39aff : 0x7855d6;
    const mintColor = isDark ? 0x78e2c0 : 0x168b78;
    const coralColor = isDark ? 0xff8e82 : 0xe45d51;

    // Ambient and Point Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.9 : 1.2);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(primaryColor, isDark ? 2.5 : 2.0, 20);
    pointLight1.position.set(4, 4, 4);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(secondaryColor, isDark ? 2.0 : 1.6, 20);
    pointLight2.position.set(-4, -3, 2);
    scene.add(pointLight2);

    // Main Group that rotates
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // 1. Central Core Sphere
    const coreGeo = new THREE.SphereGeometry(0.38, 32, 32);
    const coreMat = new THREE.MeshStandardMaterial({
      color: primaryColor,
      roughness: 0.2,
      metalness: 0.8,
      emissive: primaryColor,
      emissiveIntensity: isDark ? 0.35 : 0.15
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    sculptureGroup.add(coreMesh);

    // 2. Concentric Chronology Rings
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: primaryColor,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.45 : 0.35
    });
    const ringGeo1 = new THREE.TorusGeometry(1.65, 0.018, 16, 100);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3.2;
    ring1.rotation.y = Math.PI / 6;
    sculptureGroup.add(ring1);

    const ringMat2 = new THREE.MeshBasicMaterial({
      color: secondaryColor,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.4 : 0.3
    });
    const ringGeo2 = new THREE.TorusGeometry(2.15, 0.015, 16, 100);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 4.5;
    sculptureGroup.add(ring2);

    const ringMat3 = new THREE.MeshBasicMaterial({
      color: mintColor,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.3 : 0.2
    });
    const ringGeo3 = new THREE.TorusGeometry(2.65, 0.012, 16, 100);
    const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
    ring3.rotation.x = Math.PI / 2.2;
    ring3.rotation.z = Math.PI / 5;
    sculptureGroup.add(ring3);

    // 3. Chronological Helix Nodes (representing 7 key journey chapters)
    const nodeCount = 7;
    const nodes: THREE.Mesh[] = [];
    const nodeColors = [coralColor, mintColor, primaryColor, secondaryColor, primaryColor, mintColor, secondaryColor];
    const nodePositions: THREE.Vector3[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const t = (i / (nodeCount - 1)) * Math.PI * 2.2;
      const radius = 1.35 + (i * 0.16);
      const x = Math.cos(t) * radius;
      const y = (i - 3) * 0.42;
      const z = Math.sin(t) * (radius * 0.7);

      const pos = new THREE.Vector3(x, y, z);
      nodePositions.push(pos);

      const nodeGeo = new THREE.SphereGeometry(i === 5 || i === 6 ? 0.14 : 0.11, 24, 24);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: nodeColors[i],
        roughness: 0.25,
        metalness: 0.7,
        emissive: nodeColors[i],
        emissiveIntensity: isDark ? 0.4 : 0.2
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(pos);
      sculptureGroup.add(nodeMesh);
      nodes.push(nodeMesh);
    }

    // 4. Connecting Line Tube (Chronological trajectory curve)
    const curve = new THREE.CatmullRomCurve3(nodePositions);
    const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.016, 8, false);
    const tubeMat = new THREE.MeshBasicMaterial({
      color: primaryColor,
      transparent: true,
      opacity: isDark ? 0.6 : 0.4
    });
    const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
    sculptureGroup.add(tubeMesh);

    // 5. Subtle Dust Particles
    const particleCount = 45;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 6.5;
      particlePositions[i + 1] = (Math.random() - 0.5) * 6.5;
      particlePositions[i + 2] = (Math.random() - 0.5) * 4.5;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: secondaryColor,
      size: 0.045,
      transparent: true,
      opacity: isDark ? 0.45 : 0.25
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    sculptureGroup.add(particles);

    // Pointer Interaction State
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isVisible = true;
    let animationFrameId: number;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      targetX = y * 0.9;
      targetY = x * 1.1;
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // IntersectionObserver to halt rendering when out of viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth > 0 && newHeight > 0) {
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Inertial damping towards pointer
      mouseX += (targetX - mouseX) * 0.06;
      mouseY += (targetY - mouseY) * 0.06;

      // Base gentle idle rotation + pointer parallax
      sculptureGroup.rotation.y = (elapsedTime * 0.18) + mouseY;
      sculptureGroup.rotation.x = (Math.sin(elapsedTime * 0.25) * 0.12) + mouseX;

      // Counter-rotate concentric rings
      ring1.rotation.z += delta * 0.12;
      ring2.rotation.z -= delta * 0.09;
      ring3.rotation.y += delta * 0.07;

      // Pulse node sizes slightly
      nodes.forEach((node, idx) => {
        const pulse = 1 + Math.sin((elapsedTime * 2.2) + idx) * 0.08;
        node.scale.set(pulse, pulse, pulse);
      });

      // Pulse core
      const corePulse = 1 + Math.sin(elapsedTime * 1.6) * 0.04;
      coreMesh.scale.set(corePulse, corePulse, corePulse);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      resizeObserver.disconnect();
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);

      // Dispose Three.js resources
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      ringGeo3.dispose();
      ringMat3.dispose();
      tubeGeo.dispose();
      tubeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      nodes.forEach((n) => {
        n.geometry.dispose();
        if (Array.isArray(n.material)) n.material.forEach((m) => m.dispose());
        else n.material.dispose();
      });

      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [isReducedMotion]);

  // Fallback for No WebGL or Reduced Motion: CSS/SVG 3D Layered Chronometer
  if (!hasWebGL || isReducedMotion) {
    return (
      <div className={`relative flex items-center justify-center select-none ${className}`}>
        <div className="relative w-72 h-72 sm:w-84 sm:h-84 flex items-center justify-center">
          {/* Ambient Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cobalt/25 via-violet/20 to-mint/15 blur-2xl" />

          {/* Layered Rings */}
          <div className="absolute inset-3 rounded-full border border-dashed border-cobalt/35 animate-spin [animation-duration:45s]" />
          <div className="absolute inset-8 rounded-full border border-border-hairline animate-spin [animation-duration:30s] [animation-direction:reverse]" />
          <div className="absolute inset-14 rounded-full border border-violet/30" />

          {/* Central Spatial Core */}
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-cobalt via-violet to-mint p-0.5 shadow-xl shadow-cobalt/20 flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-paper dark:bg-card flex flex-col items-center justify-center text-center p-2">
              <span className="text-[10px] font-mono text-cobalt uppercase font-bold tracking-widest">CHAPTERS</span>
              <span className="text-xl font-serif font-bold text-ink">01 — 07</span>
            </div>
          </div>

          {/* Orbital Milestone Nodes */}
          {[
            { angle: '0deg', color: 'bg-sunny', label: 'NCSC' },
            { angle: '55deg', color: 'bg-mint', label: 'BARC' },
            { angle: '110deg', color: 'bg-coral', label: 'Padua' },
            { angle: '170deg', color: 'bg-cobalt', label: 'SWJC' },
            { angle: '230deg', color: 'bg-mint', label: 'C Lang' },
            { angle: '290deg', color: 'bg-cobalt', label: 'ADCET' },
            { angle: '335deg', color: 'bg-violet', label: '2030' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="absolute w-3.5 h-3.5 rounded-full border-2 border-paper dark:border-card shadow-sm flex items-center justify-center"
              style={{
                transform: `rotate(${item.angle}) translate(120px) rotate(-${item.angle})`
              }}
            >
              <span className={`w-full h-full rounded-full ${item.color} animate-pulse`} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[320px] sm:h-[380px] lg:h-[420px] flex items-center justify-center ${className}`}
      aria-label="Interactive 3D Timeline Chronometer"
    />
  );
};
