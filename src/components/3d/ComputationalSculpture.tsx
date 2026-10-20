import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Compass, Cpu } from 'lucide-react';

interface ComputationalSculptureProps {
  onNodeSelect?: (nodeId: string) => void;
  className?: string;
}

export const ComputationalSculpture: React.FC<ComputationalSculptureProps> = ({
  onNodeSelect,
  className = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [webGLSupported, setWebGLSupported] = useState<boolean>(true);

  useEffect(() => {
    // Check WebGL support safely
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLSupported(false);
        return;
      }
    } catch {
      setWebGLSupported(false);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.04);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 3. Central Master Group
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 4. Core Geometry: Translucent Complex Polyhedron
    const coreGeometry = new THREE.IcosahedronGeometry(1.4, 1);
    const coreWireframe = new THREE.WireframeGeometry(coreGeometry);
    const coreLine = new THREE.LineSegments(
      coreWireframe,
      new THREE.LineBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.65,
        linewidth: 1.5
      })
    );
    masterGroup.add(coreLine);

    // Inner glowing solid core
    const innerCoreGeo = new THREE.OctahedronGeometry(0.8, 0);
    const innerCoreMat = new THREE.MeshPhongMaterial({
      color: 0x1e1b4b,
      emissive: 0x3b82f6,
      emissiveIntensity: 0.5,
      shininess: 90,
      transparent: true,
      opacity: 0.75,
      wireframe: false
    });
    const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    masterGroup.add(innerCoreMesh);

    // 5. Nested Dual Orbital Rings with Euler tilts
    const ring1Geo = new THREE.TorusGeometry(2.3, 0.02, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.55
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    masterGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.8, 0.015, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.45
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 3;
    masterGroup.add(ring2);

    const ring3Geo = new THREE.TorusGeometry(3.3, 0.01, 16, 100);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.35
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.z = Math.PI / 2.5;
    masterGroup.add(ring3);

    // 6. Luminous Particle Field
    const particleCount = isMobile ? 350 : 800;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x00f0ff);
    const color2 = new THREE.Color(0x8b5cf6);
    const color3 = new THREE.Color(0x3b82f6);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.0 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = color1.clone().lerp(
        Math.random() > 0.5 ? color2 : color3,
        Math.random()
      );
      particleColors[i * 3] = mixedColor.r;
      particleColors[i * 3 + 1] = mixedColor.g;
      particleColors[i * 3 + 2] = mixedColor.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particleGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(particleColors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.035 : 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    masterGroup.add(particles);

    // 7. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00f0ff, 2.5, 15);
    pointLight1.position.set(4, 3, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x8b5cf6, 2.0, 15);
    pointLight2.position.set(-4, -3, 3);
    scene.add(pointLight2);

    // 8. Interactive Pointer Handling with Smooth Damping
    const targetRotation = { x: 0, y: 0 };
    const currentRotation = { x: 0, y: 0 };

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotation.y = x * 0.45;
      targetRotation.x = -y * 0.35;
    };

    window.addEventListener('mousemove', handlePointerMove);

    // 9. Resize Handling
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // 10. Pause when inactive or offscreen
    let isVisible = true;
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // 11. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Continuous organic rotation
        coreLine.rotation.x += delta * 0.15;
        coreLine.rotation.y += delta * 0.22;

        innerCoreMesh.rotation.x -= delta * 0.25;
        innerCoreMesh.rotation.y += delta * 0.35;

        ring1.rotation.z += delta * 0.18;
        ring2.rotation.z -= delta * 0.14;
        ring3.rotation.y += delta * 0.1;

        particles.rotation.y += delta * 0.05;

        // Subtle pulsing
        const scalePulse = 1 + Math.sin(time * 1.5) * 0.03;
        innerCoreMesh.scale.set(scalePulse, scalePulse, scalePulse);

        // Smooth pointer interpolation
        currentRotation.x += (targetRotation.x - currentRotation.x) * 0.05;
        currentRotation.y += (targetRotation.y - currentRotation.y) * 0.05;

        masterGroup.rotation.x = currentRotation.x;
        masterGroup.rotation.y = currentRotation.y;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Three.js objects
      coreGeometry.dispose();
      coreWireframe.dispose();
      innerCoreGeo.dispose();
      ring1Geo.dispose();
      ring2Geo.dispose();
      ring3Geo.dispose();
      particleGeometry.dispose();
      renderer.dispose();
    };
  }, []);

  const dimensions = [
    {
      id: "engineer",
      label: "The Engineer",
      subtitle: "AI & Software Systems",
      icon: Cpu,
      color: "border-cyan-500/40 text-cyan-400 bg-cyan-950/40 hover:border-cyan-400",
      description: "Practical engineering, client-side OCR, and rapid AI-assisted development."
    },
    {
      id: "cybersecurity",
      label: "Cybersecurity",
      subtitle: "Screening & DevSecOps",
      icon: Shield,
      color: "border-blue-500/40 text-blue-400 bg-blue-950/40 hover:border-blue-400",
      description: "Document integrity screening, network fundamentals, and defensive architectures."
    },
    {
      id: "creator",
      label: "The Creator",
      subtitle: "shiv.premi_1630",
      icon: Sparkles,
      color: "border-purple-500/40 text-purple-400 bg-purple-950/40 hover:border-purple-400",
      description: "Cinematography, photography, vertical reels, and creative visual storytelling."
    },
    {
      id: "explorer",
      label: "The Explorer",
      subtitle: "Nature & Expeditions",
      icon: Compass,
      color: "border-emerald-500/40 text-emerald-400 bg-emerald-950/40 hover:border-emerald-400",
      description: "Motorcycle travel ambitions, discovering untouched locations, and documenting life."
    }
  ];

  return (
    <div className={`relative w-full h-[520px] md:h-[620px] flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background ambient glow circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] md:w-[480px] h-[340px] md:h-[480px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[400px] h-[280px] md:h-[400px] rounded-full bg-violet-600/10 blur-[90px] pointer-events-none" />

      {/* 3D Canvas Container or Fallback */}
      {webGLSupported ? (
        <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 rounded-full border border-cyan-500/30 bg-slate-900/60 backdrop-blur-xl flex items-center justify-center relative animate-pulse">
            <div className="w-48 h-48 rounded-full border border-dashed border-violet-500/40 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border border-blue-500/50 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-cyan-400 animate-spin" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Foreground Interactive Dimensional Nodes */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3">
          {dimensions.map((dim) => {
            const Icon = dim.icon;
            const isSelected = activeNode === dim.id;

            return (
              <motion.button
                key={dim.id}
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setActiveNode(dim.id);
                  onNodeSelect?.(dim.id);
                }}
                className={`p-2.5 md:p-3 rounded-xl border backdrop-blur-md text-left transition-all duration-200 cursor-pointer ${dim.color} ${
                  isSelected ? 'ring-2 ring-cyan-400 shadow-lg shadow-cyan-500/20' : ''
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="text-xs md:text-sm font-semibold truncate text-white">{dim.label}</span>
                </div>
                <p className="text-[10px] md:text-xs text-slate-400 mt-1 truncate">{dim.subtitle}</p>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Node Preview Drawer */}
        {activeNode && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto mt-2 p-3 rounded-lg bg-slate-900/90 border border-slate-700/60 backdrop-blur-lg text-center"
          >
            <p className="text-xs text-slate-300">
              {dimensions.find(d => d.id === activeNode)?.description}
            </p>
          </motion.div>
        )}
      </div>

      {/* Floating Status Badge */}
      <div className="absolute top-4 left-4 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[11px] font-mono tracking-wider text-cyan-300 uppercase font-semibold">
            Interactive Computational Sculpture
          </span>
        </div>
      </div>
    </div>
  );
};
