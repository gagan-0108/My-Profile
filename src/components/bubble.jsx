import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const Shape = () => {
  return (
    <>
      <Sphere args={[1, 100, 200]} scale={2.8}>
        <MeshDistortMaterial
          color="#e5e5f0"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.4}
          metalness={0.1}
          opacity={0.9}
          transparent
        />
      </Sphere>
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
    </>
  );
};

export default Shape;