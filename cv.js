import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Portfolio3D() {
  const model = useGLTF("/portfolio_scene.glb");

  return (
    <div className="relative h-screen w-full bg-gray-900 text-white">
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <primitive object={model.scene} scale={1} />
        <OrbitControls />
      </Canvas>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-10 left-10"
      >
        <h1 className="text-4xl font-bold">Md. Towhidul Alam</h1>
        <p className="text-lg">Electrical and Computer Engineering Student</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-10 flex gap-4"
      >
        <Link href="https://linkedin.com/in/md-towhidul-alam-59b5b8302/" className="bg-blue-500 px-4 py-2 rounded">LinkedIn</Link>
        <Link href="https://github.com/DevManTowhid/" className="bg-gray-800 px-4 py-2 rounded">GitHub</Link>
      </motion.div>
    </div>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
