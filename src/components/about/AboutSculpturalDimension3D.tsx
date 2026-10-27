import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface AboutSculpturalDimension3DProps {
  className?: string;
}

export const AboutSculpturalDimension3D: React.FC<AboutSculpturalDimension3DProps> = ({
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(motionQuery.matches);

    const handleMotion = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    motionQuery.addEventListener('change', handleMotion);
    return () => motionQuery.removeEventListener('change', handleMotion);
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

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.2);

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
    renderer.setClearColor(0x000000, 0);

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';

    const isDark = document.documentElement.classList.contains('dark');

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.9 : 1.3);
    scene.add(ambientLight);

    const coralLight = new THREE.PointLight(isDark ? 0xff8e82 : 0xe65d59, isDark ? 2.2 : 1.8, 12);
    coralLight.position.set(3.5, 3.0, 3.0);
    scene.add(coralLight);

    const skyLight = new THREE.PointLight(isDark ? 0x78a6ff : 0x315eeb, isDark ? 2.0 : 1.6, 12);
    skyLight.position.set(-3.5, -2.5, 2.5);
    scene.add(skyLight);

    const amberLight = new THREE.PointLight(isDark ? 0xf4cf72 : 0xc38b18, isDark ? 1.6 : 1.4, 10);
    amberLight.position.set(0, 4.0, -2.0);
    scene.add(amberLight);

    // Master Sculptural Group
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // 1. Central Intersecting Torus Knot (Curiosity & Dimension)
    const torusKnotGeo = new THREE.TorusKnotGeometry(1.2, 0.22, 128, 32, 2, 3);
    const torusKnotMat = new THREE.MeshPhysicalMaterial({
      color: isDark ? 0x1e2a4a : 0xf0f4ff,
      roughness: 0.15,
      metalness: 0.2,
      transmission: 0.65,
      transparent: true,
      opacity: 0.9,
      ior: 1.45,
      wireframe: false
    });
    const torusKnotMesh = new THREE.Mesh(torusKnotGeo, torusKnotMat);
    sculptureGroup.add(torusKnotMesh);

    // 2. Outer Concentric Perspective Ring
    const ringGeo = new THREE.TorusGeometry(2.1, 0.04, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x78a6ff : 0x315eeb,
      roughness: 0.3,
      metalness: 0.8,
      transparent: true,
      opacity: 0.65
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    sculptureGroup.add(ringMesh);

    // 3. Secondary Slanted Orbital Ring
    const ring2Geo = new THREE.TorusGeometry(2.35, 0.03, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: isDark ? 0xff8e82 : 0xe65d59,
      roughness: 0.3,
      metalness: 0.8,
      transparent: true,
      opacity: 0.55
    });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2Mesh.rotation.y = Math.PI / 4;
    ring2Mesh.rotation.x = -Math.PI / 5;
    sculptureGroup.add(ring2Mesh);

    // 4. Subtle Floating Prismatic Nodes (Faceted Diamonds)
    const nodesGroup = new THREE.Group();
    sculptureGroup.add(nodesGroup);

    const diamondGeo = new THREE.OctahedronGeometry(0.16, 0);
    const diamondMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0xf4cf72 : 0xc38b18,
      metalness: 0.9,
      roughness: 0.2
    });

    const nodeOffsets = [
      { x: 1.8, y: 1.2, z: 0.4 },
      { x: -1.9, y: 0.8, z: -0.6 },
      { x: 0.5, y: -2.0, z: 0.8 },
      { x: -1.2, y: -1.5, z: -0.9 }
    ];

    nodeOffsets.forEach((pos) => {
      const node = new THREE.Mesh(diamondGeo, diamondMat);
      node.position.set(pos.x, pos.y, pos.z);
      nodesGroup.add(node);
    });

    // Mouse Interaction
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = x * 0.8;
      targetRotX = y * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // IntersectionObserver for offscreen pausing
    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.1 });
    observer.observe(container);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 320;
      const h = container.clientHeight || 320;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      // Continuous subtle dimensional drift
      torusKnotMesh.rotation.x = elapsed * 0.18;
      torusKnotMesh.rotation.y = elapsed * 0.24;

      ringMesh.rotation.z = elapsed * 0.12;
      ring2Mesh.rotation.z = -elapsed * 0.10;

      nodesGroup.rotation.y = elapsed * 0.15;
      nodesGroup.children.forEach((child, i) => {
        child.rotation.x = elapsed * (1 + i * 0.2);
        child.rotation.y = elapsed * (1.2 + i * 0.2);
      });

      // Smooth mouse follow interpolation
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      sculptureGroup.rotation.x = currentRotX;
      sculptureGroup.rotation.y = currentRotY;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();

      // Disposal
      torusKnotGeo.dispose();
      torusKnotMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      diamondGeo.dispose();
      diamondMat.dispose();
      renderer.dispose();

      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, [isReducedMotion]);

  if (isReducedMotion || !hasWebGL) {
    return (
      <div className={`relative flex items-center justify-center p-6 ${className}`}>
        <div className="w-56 h-56 rounded-full border border-coral/30 dark:border-coral/20 bg-gradient-to-tr from-coral/10 via-cobalt/10 to-amber-400/10 flex items-center justify-center shadow-lg relative overflow-hidden">
          <div className="w-40 h-40 rounded-full border border-cobalt/30 dark:border-cobalt/20 bg-white/40 dark:bg-card/40 backdrop-blur-md flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border border-amber-400/40 bg-coral/10 animate-pulse" />
          </div>
          <span className="absolute bottom-4 font-mono text-[10px] text-muted tracking-widest uppercase">
            Curiosity &bull; Dimension
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[300px] select-none ${className}`}
      aria-label="Interactive 3D Abstract Sculpture representing Curiosity and Creative Dimension"
    />
  );
};
