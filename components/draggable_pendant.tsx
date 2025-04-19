"use client";
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useEffect, useRef, useState, useMemo, JSX } from 'react';
import { Physics, RigidBody } from '@react-three/rapier';

function Cord({ startPoint, endPoint }: { startPoint: THREE.Vector3; endPoint: THREE.Vector3 }) {
  const curve = useMemo(() => {
    // Create control points for natural cord droop
    const midPoint = new THREE.Vector3().addVectors(startPoint, endPoint).multiplyScalar(0.5);
    // Add some droop by lowering the mid point
    midPoint.y -= Math.abs(startPoint.x - endPoint.x) * 0.5;

    return new THREE.CatmullRomCurve3([
      startPoint,
      midPoint,
      endPoint
    ], false, 'catmullrom', 0.5);
  }, [startPoint, endPoint]);

  const points = useMemo(() => curve.getPoints(50), [curve]);

  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#666" linewidth={2} />
    </line>
  );
}

function Pendant(props: JSX.IntrinsicElements['group']) {
  const { scene } = useGLTF('/models/pendant.gltf');
  const rigidBodyRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [pendantPosition, setPendantPosition] = useState(new THREE.Vector3(0, 2, 0));
  const fixedPoint = useMemo(() => new THREE.Vector3(0, 5, 0), []); // Fixed point at the top

  // Set material
  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({
        color: '#111',
        metalness: 0.2,
        roughness: 0.3,
      });
    }
  });

  // Handle cursor
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : '';
    return () => { document.body.style.cursor = ''; };
  }, [hovered]);

  // Handle dragging and update cord
  useFrame((state) => {
    if (rigidBodyRef.current) {
      // @ts-ignore - Rapier types are not complete
      const position = rigidBodyRef.current.translation();
      setPendantPosition(new THREE.Vector3(position.x, position.y, position.z));
    }

    if (hovered) {
      const { x, y } = state.mouse;
      const worldX = x * 5;
      const worldY = -y * 5;
      
      if (rigidBodyRef.current) {
        // @ts-ignore
        rigidBodyRef.current.setTranslation(
          { x: worldX, y: worldY + 2, z: 0 },
          true
        );
        // @ts-ignore
        rigidBodyRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
      }
    }
  });

  return (
    <>
      <Cord startPoint={fixedPoint} endPoint={pendantPosition} />
      <RigidBody
        ref={rigidBodyRef}
        position={[0, 2, 0]}
        mass={1}
        colliders="cuboid"
      >
        <group
          scale={100}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          {...props}
        >
          <primitive object={scene} />
        </group>
      </RigidBody>
    </>
  );
}

export default function DraggablePendant() {
  return (
    <Canvas
      camera={{ position: [0, 0, 20], fov: 50 }}
      style={{ width: "500px", height: "500px" }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[1, 1, 5]} intensity={1} />
      <directionalLight position={[1, -1, -3]} intensity={1} />
      
      <Physics gravity={[0, -9.81, 0]}>
        <Pendant />
      </Physics>
    </Canvas>
  );
}

useGLTF.preload('/models/pendant.gltf');
