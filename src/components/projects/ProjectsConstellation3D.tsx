import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ProjectsConstellation3DProps {
  className?: string;
  activeProjectSlug?: string | null;
  onSelectProject?: (slug: string) => void;
}

interface ProjectNodeMeta {
  slug: string;
  name: string;
  color: number;
  lightColor: number;
  geometryType: 'octa' | 'dodeca' | 'box' | 'icosa' | 'tetra' | 'torus' | 'sphere';
  position: [number, number, number];
  scale: number;
}

const PROJECT_NODES: ProjectNodeMeta[] = [
  {
    slug: 'falcon-404',
    name: 'FALCON-404',
    color: 0x315eeb,
    lightColor: 0x00f0ff,
    geometryType: 'octa',
    position: [-2.2, 1.2, 0.4],
    scale: 0.45
  },
  {
    slug: 'arogya-ai',
    name: 'Arogya AI',
    color: 0x087f82,
    lightColor: 0x10b981,
    geometryType: 'dodeca',
    position: [2.1, 1.3, -0.3],
    scale: 0.42
  },
  {
    slug: 'campus-copilot',
    name: 'Campus Copilot',
    color: 0x3b82f6,
    lightColor: 0x60a5fa,
    geometryType: 'icosa',
    position: [-1.8, -1.2, 0.5],
    scale: 0.38
  },
  {
    slug: 'neuroverse-2k26-website',
    name: 'Neuroverse 2K26',
    color: 0x7953d6,
    lightColor: 0xa855f7,
    geometryType: 'octa',
    position: [1.9, -1.1, 0.3],
    scale: 0.36
  },
  {
    slug: 'gada-electronics',
    name: 'GADA Electronics',
    color: 0xe77936,
    lightColor: 0xf59e0b,
    geometryType: 'box',
    position: [0.0, 2.0, -0.4],
    scale: 0.35
  },
  {
    slug: 'artbook-ai',
    name: 'ArtBook AI',
    color: 0xe65d59,
    lightColor: 0xf43f5e,
    geometryType: 'torus',
    position: [2.6, 0.1, -0.5],
    scale: 0.35
  },
  {
    slug: 'eco-friendly-planting-system',
    name: 'Eco-Planting',
    color: 0x15866b,
    lightColor: 0x84cc16,
    geometryType: 'tetra',
    position: [-2.6, -0.1, -0.4],
    scale: 0.34
  }
];

export const ProjectsConstellation3D: React.FC<ProjectsConstellation3DProps> = ({
  className = '',
  activeProjectSlug = null,
  onSelectProject
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

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 380;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.2);

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

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.9 : 1.3);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x315eeb, isDark ? 2.8 : 2.2, 20);
    pointLight1.position.set(4, 4, 4);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x7953d6, isDark ? 2.2 : 1.8, 20);
    pointLight2.position.set(-4, -4, 3);
    scene.add(pointLight2);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Central Nexus Core (Idea origin)
    const coreGeo = new THREE.IcosahedronGeometry(0.7, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x93c5fd : 0x315eeb,
      metalness: 0.6,
      roughness: 0.25,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.65 : 0.85
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    rootGroup.add(coreMesh);

    // Inner glowing sphere
    const innerGeo = new THREE.SphereGeometry(0.4, 24, 24);
    const innerMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0x60a5fa : 0x2563eb,
      transparent: true,
      opacity: isDark ? 0.45 : 0.6
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreMesh.add(innerMesh);

    // Central Orbital Ring 1
    const ring1Geo = new THREE.TorusGeometry(1.4, 0.02, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: isDark ? 0x7953d6 : 0x4f46e5,
      transparent: true,
      opacity: 0.55
    });
    const ring1Mesh = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1Mesh.rotation.x = Math.PI / 3;
    ring1Mesh.rotation.y = Math.PI / 6;
    rootGroup.add(ring1Mesh);

    // Central Orbital Ring 2 (Counter-tilted)
    const ring2Geo = new THREE.TorusGeometry(1.6, 0.015, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: isDark ? 0x06b6d4 : 0x087f82,
      transparent: true,
      opacity: 0.5
    });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2Mesh.rotation.x = -Math.PI / 4;
    ring2Mesh.rotation.y = Math.PI / 4;
    rootGroup.add(ring2Mesh);

    // 2. 7 Satellite Project Nodes
    const nodeMeshes: { mesh: THREE.Mesh; meta: ProjectNodeMeta; initialPos: THREE.Vector3 }[] = [];

    PROJECT_NODES.forEach((meta) => {
      let geo: THREE.BufferGeometry;
      switch (meta.geometryType) {
        case 'octa':
          geo = new THREE.OctahedronGeometry(meta.scale);
          break;
        case 'dodeca':
          geo = new THREE.DodecahedronGeometry(meta.scale);
          break;
        case 'box':
          geo = new THREE.BoxGeometry(meta.scale * 1.5, meta.scale * 1.5, meta.scale * 1.5);
          break;
        case 'tetra':
          geo = new THREE.TetrahedronGeometry(meta.scale * 1.2);
          break;
        case 'torus':
          geo = new THREE.TorusGeometry(meta.scale * 0.9, meta.scale * 0.35, 12, 24);
          break;
        case 'icosa':
        default:
          geo = new THREE.IcosahedronGeometry(meta.scale);
          break;
      }

      const mat = new THREE.MeshStandardMaterial({
        color: isDark ? meta.lightColor : meta.color,
        metalness: 0.7,
        roughness: 0.2,
        wireframe: false
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(...meta.position);
      rootGroup.add(mesh);

      // Wireframe aura for each node
      const wireMat = new THREE.MeshBasicMaterial({
        color: isDark ? 0xffffff : meta.color,
        wireframe: true,
        transparent: true,
        opacity: isDark ? 0.35 : 0.5
      });
      const aura = new THREE.Mesh(geo.clone(), wireMat);
      aura.scale.set(1.2, 1.2, 1.2);
      mesh.add(aura);

      nodeMeshes.push({
        mesh,
        meta,
        initialPos: new THREE.Vector3(...meta.position)
      });
    });

    // 3. Constellation Synapse Strands (Connecting nodes to center & peers)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: isDark ? 0x94a3b8 : 0x64748b,
      transparent: true,
      opacity: isDark ? 0.35 : 0.45
    });

    const linesGroup = new THREE.Group();
    rootGroup.add(linesGroup);

    nodeMeshes.forEach((item, idx) => {
      // Line from center to node
      const ptsCenter = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(
          item.initialPos.x * 0.5,
          item.initialPos.y * 0.5 + 0.2,
          item.initialPos.z * 0.5
        ),
        item.initialPos
      ];
      const curveCenter = new THREE.CatmullRomCurve3(ptsCenter);
      const geoLine = new THREE.BufferGeometry().setFromPoints(curveCenter.getPoints(20));
      const line = new THREE.Line(geoLine, lineMaterial);
      linesGroup.add(line);

      // Connect to adjacent node
      const nextItem = nodeMeshes[(idx + 1) % nodeMeshes.length];
      const ptsPeer = [
        item.initialPos,
        new THREE.Vector3(
          (item.initialPos.x + nextItem.initialPos.x) * 0.5,
          (item.initialPos.y + nextItem.initialPos.y) * 0.5 + 0.3,
          (item.initialPos.z + nextItem.initialPos.z) * 0.5
        ),
        nextItem.initialPos
      ];
      const curvePeer = new THREE.CatmullRomCurve3(ptsPeer);
      const geoPeerLine = new THREE.BufferGeometry().setFromPoints(curvePeer.getPoints(20));
      const peerLine = new THREE.Line(geoPeerLine, lineMaterial);
      linesGroup.add(peerLine);
    });

    // Mouse Parallax Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotationY = x * 0.35;
      targetRotationX = -y * 0.3;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    // Click / Raycast Selection
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleContainerClick = (e: MouseEvent) => {
      if (!onSelectProject) return;
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      raycaster.setFromCamera(mouse, camera);
      const meshesToTest = nodeMeshes.map(n => n.mesh);
      const intersects = raycaster.intersectObjects(meshesToTest, true);

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        const matched = nodeMeshes.find(n => n.mesh === hit || n.mesh === hit.parent);
        if (matched) {
          onSelectProject(matched.meta.slug);
        }
      }
    };

    container.addEventListener('click', handleContainerClick);

    // Responsive Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // IntersectionObserver to pause loop when off-screen
    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      // Smooth mouse damping
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;

      rootGroup.rotation.x = currentRotationX + Math.sin(elapsed * 0.3) * 0.04;
      rootGroup.rotation.y = currentRotationY + elapsed * 0.12;

      // Central core breathing
      coreMesh.rotation.y += 0.008;
      coreMesh.rotation.x += 0.005;
      ring1Mesh.rotation.z += 0.006;
      ring2Mesh.rotation.z -= 0.005;

      // Satellite node floating & spinning
      nodeMeshes.forEach((item, idx) => {
        item.mesh.rotation.x += 0.015 * (idx % 2 === 0 ? 1 : -1);
        item.mesh.rotation.y += 0.012 * (idx % 3 === 0 ? 1 : -1);
        
        // Gentle harmonic floating along y/z
        const floatOffset = Math.sin(elapsed * 1.5 + idx * 0.9) * 0.08;
        item.mesh.position.y = item.initialPos.y + floatOffset;

        // Highlight active project if selected
        if (activeProjectSlug && item.meta.slug === activeProjectSlug) {
          item.mesh.scale.setScalar(1.2 + Math.sin(elapsed * 4) * 0.08);
        } else {
          item.mesh.scale.setScalar(1.0);
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('click', handleContainerClick);

      // Clean disposal
      coreGeo.dispose();
      coreMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      lineMaterial.dispose();

      nodeMeshes.forEach(n => {
        n.mesh.geometry.dispose();
        if (Array.isArray(n.mesh.material)) {
          n.mesh.material.forEach(m => m.dispose());
        } else {
          n.mesh.material.dispose();
        }
      });

      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [isReducedMotion, activeProjectSlug, onSelectProject]);

  if (!hasWebGL || isReducedMotion) {
    return (
      <div className={`relative flex items-center justify-center p-6 ${className}`}>
        {/* SVG/CSS 3D Fallback: Elegant Constellation Diagram */}
        <div className="relative w-full max-w-md aspect-[16/10] flex items-center justify-center">
          <svg className="w-full h-full text-cobalt/40" viewBox="0 0 400 250" fill="none">
            {/* Orbital Rings */}
            <ellipse cx="200" cy="125" rx="140" ry="70" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse" />
            <ellipse cx="200" cy="125" rx="90" ry="45" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
            <circle cx="200" cy="125" r="16" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
            
            {/* Radial Lines to Nodes */}
            <line x1="200" y1="125" x2="90" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <line x1="200" y1="125" x2="310" y2="75" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <line x1="200" y1="125" x2="110" y2="185" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <line x1="200" y1="125" x2="295" y2="180" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <line x1="200" y1="125" x2="200" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.5" />

            {/* 7 Project Nodes */}
            <circle cx="90" cy="70" r="10" fill="#315eeb" />
            <circle cx="310" cy="75" r="9" fill="#087f82" />
            <circle cx="110" cy="185" r="8" fill="#3b82f6" />
            <circle cx="295" cy="180" r="8" fill="#7953d6" />
            <circle cx="200" cy="40" r="8" fill="#e77936" />
            <circle cx="330" cy="125" r="7" fill="#e65d59" />
            <circle cx="70" cy="125" r="7" fill="#15866b" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
            <span className="text-[10px] font-mono tracking-widest uppercase text-muted font-bold">
              CONSTELLATION OF 07 BUILDS
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative flex items-center justify-center overflow-hidden ${className}`}>
      <div 
        ref={containerRef} 
        className="w-full h-full min-h-[320px] sm:min-h-[380px] cursor-grab active:cursor-grabbing" 
        title="Interactive Project Constellation — Drag to rotate or explore 7 interconnected systems"
      />
      {/* Subtle interaction cue */}
      <div className="absolute bottom-2 right-3 pointer-events-none flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-muted/70 bg-white/40 dark:bg-card/40 backdrop-blur-xs px-2.5 py-1 rounded-full border border-border-hairline">
        <span className="w-1.5 h-1.5 rounded-full bg-cobalt animate-ping" />
        <span>3D Constellation &bull; Parallax Active</span>
      </div>
    </div>
  );
};
