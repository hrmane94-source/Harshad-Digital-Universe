import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface PrismaticLens3DArtworkProps {
  className?: string;
  size?: 'sm' | 'md';
}

export const PrismaticLens3DArtwork: React.FC<PrismaticLens3DArtworkProps> = ({
  className = '',
  size = 'md'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  useEffect(() => {
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

    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.8);

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

    // Colors
    const coralColor = isDark ? 0xff8e82 : 0xe65d59;
    const amberColor = isDark ? 0xf4cf72 : 0xc38b18;
    const skyblueColor = isDark ? 0x78a6ff : 0x0ea5e9;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.9 : 1.3);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(coralColor, isDark ? 2.2 : 2.0, 15);
    pointLight1.position.set(3, 3, 4);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(amberColor, isDark ? 1.8 : 1.6, 15);
    pointLight2.position.set(-3, -2, 2);
    scene.add(pointLight2);

    const lensGroup = new THREE.Group();
    scene.add(lensGroup);

    // 1. Concentric Lens Barrel Rings
    const ringGeo1 = new THREE.TorusGeometry(1.55, 0.02, 16, 80);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: coralColor,
      roughness: 0.2,
      metalness: 0.8
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    lensGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(1.85, 0.015, 16, 80);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: amberColor,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.5 : 0.35
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = Math.PI / 8;
    lensGroup.add(ring2);

    const ringGeo3 = new THREE.TorusGeometry(2.15, 0.012, 16, 80);
    const ringMat3 = new THREE.MeshBasicMaterial({
      color: skyblueColor,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.4 : 0.25
    });
    const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
    ring3.rotation.y = -Math.PI / 8;
    lensGroup.add(ring3);

    // 2. Optical Lens Glass Element
    const glassGeo = new THREE.CylinderGeometry(1.2, 1.2, 0.06, 32);
    const glassMat = new THREE.MeshStandardMaterial({
      color: skyblueColor,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: isDark ? 0.4 : 0.3
    });
    const glassDisc = new THREE.Mesh(glassGeo, glassMat);
    glassDisc.rotation.x = Math.PI / 2;
    lensGroup.add(glassDisc);

    // 3. 8 Aperture Iris Blades
    const bladeCount = 8;
    const blades: THREE.Mesh[] = [];
    const bladeGeo = new THREE.BoxGeometry(0.7, 0.15, 0.02);
    const bladeMat = new THREE.MeshStandardMaterial({
      color: coralColor,
      roughness: 0.3,
      metalness: 0.7
    });

    for (let i = 0; i < bladeCount; i++) {
      const angle = (i / bladeCount) * Math.PI * 2;
      const blade = new THREE.Mesh(bladeGeo, bladeMat);
      blade.position.set(Math.cos(angle) * 0.75, Math.sin(angle) * 0.75, 0.04);
      blade.rotation.z = angle + 0.6;
      lensGroup.add(blade);
      blades.push(blade);
    }

    // Pointer Interaction
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
      targetX = y * 0.7;
      targetY = x * 0.8;
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

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

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      mouseX += (targetX - mouseX) * 0.06;
      mouseY += (targetY - mouseY) * 0.06;

      lensGroup.rotation.y = (elapsedTime * 0.15) + mouseY;
      lensGroup.rotation.x = (Math.sin(elapsedTime * 0.2) * 0.08) + mouseX;

      ring1.rotation.z += delta * 0.2;
      ring2.rotation.z -= delta * 0.15;
      ring3.rotation.x += delta * 0.12;

      // Iris breathing effect
      const irisSpread = 0.75 + Math.sin(elapsedTime * 1.8) * 0.08;
      blades.forEach((b, idx) => {
        const angle = (idx / bladeCount) * Math.PI * 2;
        b.position.set(Math.cos(angle) * irisSpread, Math.sin(angle) * irisSpread, 0.04);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      resizeObserver.disconnect();
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);

      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      ringGeo3.dispose();
      ringMat3.dispose();
      glassGeo.dispose();
      glassMat.dispose();
      bladeGeo.dispose();
      bladeMat.dispose();

      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [isReducedMotion]);

  const heightClasses = size === 'sm' ? 'h-[200px]' : 'h-[260px] sm:h-[300px]';

  if (!hasWebGL || isReducedMotion) {
    return (
      <div className={`relative flex items-center justify-center select-none ${heightClasses} ${className}`}>
        <div className="relative w-48 h-48 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-coral/25 via-amber-400/20 to-sky-400/20 blur-xl" />
          <div className="absolute inset-2 rounded-full border border-dashed border-coral/40 animate-spin [animation-duration:30s]" />
          <div className="w-16 h-16 rounded-full bg-paper dark:bg-card border-2 border-coral flex items-center justify-center shadow-lg">
            <span className="text-[10px] font-mono font-bold text-coral uppercase">IRIS</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${heightClasses} flex items-center justify-center ${className}`}
      aria-label="Interactive 3D Prismatic Camera Aperture Lens Artwork"
    />
  );
};
