import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface CyberMatrix3DArtworkProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const CyberMatrix3DArtwork: React.FC<CyberMatrix3DArtworkProps> = ({
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

    const width = container.clientWidth || 340;
    const height = container.clientHeight || 340;

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

    // Theme color palettes
    const primaryColor = isDark ? 0x78a6ff : 0x315eeb; // Cobalt
    const secondaryColor = isDark ? 0xb39aff : 0x7953d6; // Violet
    const mintColor = isDark ? 0x78e2c0 : 0x15866b; // Mint / Emerald
    const goldColor = isDark ? 0xf4cf72 : 0xc38b18; // Amber / Gold

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.9 : 1.2);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(primaryColor, isDark ? 2.5 : 2.0, 15);
    pointLight1.position.set(3, 4, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(secondaryColor, isDark ? 2.0 : 1.8, 15);
    pointLight2.position.set(-3, -3, 2);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(mintColor, isDark ? 1.5 : 1.2, 10);
    pointLight3.position.set(0, 3, -2);
    scene.add(pointLight3);

    // Main Group
    const matrixGroup = new THREE.Group();
    scene.add(matrixGroup);

    // 1. Faceted Cryptographic Core (Icosahedron)
    const coreGeo = new THREE.IcosahedronGeometry(1.0, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: primaryColor,
      roughness: 0.18,
      metalness: 0.85,
      wireframe: false,
      emissive: secondaryColor,
      emissiveIntensity: isDark ? 0.35 : 0.15
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    matrixGroup.add(coreMesh);

    // 2. Outer Wireframe Matrix Cage
    const cageGeo = new THREE.IcosahedronGeometry(1.5, 0);
    const cageMat = new THREE.MeshBasicMaterial({
      color: primaryColor,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.45 : 0.35
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    matrixGroup.add(cageMesh);

    // 3. Orbiting Holographic Data Rings
    const ringGeo1 = new THREE.TorusGeometry(1.95, 0.016, 16, 90);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: secondaryColor,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.5 : 0.38
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3.5;
    ring1.rotation.y = Math.PI / 5;
    matrixGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.35, 0.012, 16, 90);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: mintColor,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.4 : 0.28
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 6;
    matrixGroup.add(ring2);

    // 4. Floating Neural Node Satellites (6 Nodes)
    const nodeCount = 6;
    const nodeMeshes: THREE.Mesh[] = [];
    const nodeAngles = [0, 1.05, 2.1, 3.14, 4.2, 5.25];
    const nodeRadii = [1.8, 2.1, 1.9, 2.2, 1.85, 2.15];
    const nodeHeights = [0.6, -0.7, 0.9, -0.5, 0.3, -0.8];
    const nodeColors = [primaryColor, secondaryColor, mintColor, goldColor, primaryColor, secondaryColor];

    for (let i = 0; i < nodeCount; i++) {
      const nodeGeo = new THREE.SphereGeometry(0.12, 20, 20);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: nodeColors[i],
        roughness: 0.2,
        metalness: 0.8,
        emissive: nodeColors[i],
        emissiveIntensity: isDark ? 0.4 : 0.25
      });
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.set(
        Math.cos(nodeAngles[i]) * nodeRadii[i],
        nodeHeights[i],
        Math.sin(nodeAngles[i]) * nodeRadii[i]
      );
      matrixGroup.add(node);
      nodeMeshes.push(node);
    }

    // 5. Connecting Neural Strands
    const linePositions = new Float32Array(nodeCount * 3 * 2);
    for (let i = 0; i < nodeCount; i++) {
      const nextIdx = (i + 1) % nodeCount;
      const pos1 = nodeMeshes[i].position;
      const pos2 = nodeMeshes[nextIdx].position;

      linePositions[i * 6] = pos1.x;
      linePositions[i * 6 + 1] = pos1.y;
      linePositions[i * 6 + 2] = pos1.z;

      linePositions[i * 6 + 3] = pos2.x;
      linePositions[i * 6 + 4] = pos2.y;
      linePositions[i * 6 + 5] = pos2.z;
    }

    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const linesMat = new THREE.LineBasicMaterial({
      color: primaryColor,
      transparent: true,
      opacity: isDark ? 0.35 : 0.22
    });
    const linesMesh = new THREE.LineSegments(linesGeo, linesMat);
    matrixGroup.add(linesMesh);

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
      targetX = y * 0.8;
      targetY = x * 0.9;
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

      // Inertial damping towards pointer
      mouseX += (targetX - mouseX) * 0.06;
      mouseY += (targetY - mouseY) * 0.06;

      // Rotate whole sculpture
      matrixGroup.rotation.y = (elapsedTime * 0.22) + mouseY;
      matrixGroup.rotation.x = (Math.sin(elapsedTime * 0.3) * 0.1) + mouseX;

      // Rotate core separately
      coreMesh.rotation.y -= delta * 0.4;
      coreMesh.rotation.z += delta * 0.2;

      // Counter-rotate rings
      ring1.rotation.z += delta * 0.25;
      ring2.rotation.z -= delta * 0.18;

      // Pulse nodes
      nodeMeshes.forEach((n, idx) => {
        const pulse = 1 + Math.sin(elapsedTime * 2.5 + idx * 1.2) * 0.12;
        n.scale.set(pulse, pulse, pulse);
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

      coreGeo.dispose();
      coreMat.dispose();
      cageGeo.dispose();
      cageMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      linesGeo.dispose();
      linesMat.dispose();
      nodeMeshes.forEach((n) => {
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

  const heightClasses = {
    sm: 'h-[220px]',
    md: 'h-[300px] sm:h-[340px]',
    lg: 'h-[360px] sm:h-[420px]'
  }[size];

  if (!hasWebGL || isReducedMotion) {
    return (
      <div className={`relative flex items-center justify-center select-none ${heightClasses} ${className}`}>
        <div className="relative w-56 h-56 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cobalt/25 via-violet/20 to-mint/20 blur-2xl" />
          <div className="absolute inset-2 rounded-full border border-dashed border-cobalt/40 animate-spin [animation-duration:35s]" />
          <div className="absolute inset-6 rounded-full border border-violet/30 animate-spin [animation-duration:25s] [animation-direction:reverse]" />
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cobalt via-violet to-mint p-0.5 shadow-xl rotate-45 flex items-center justify-center">
            <div className="w-full h-full rounded-2xl bg-paper dark:bg-card flex items-center justify-center -rotate-45">
              <span className="text-[10px] font-mono font-bold text-cobalt uppercase">MATRIX</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${heightClasses} flex items-center justify-center ${className}`}
      aria-label="Interactive 3D Cybernetic Cryptography Matrix Artwork"
    />
  );
};
