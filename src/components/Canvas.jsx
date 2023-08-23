import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
  MeshDistortMaterial,
  Sphere,
  Stage,
} from "@react-three/drei";
import Design1 from "../models/Design1";
import SocialMedia from "../models/Social";
import Lyric from "../models/Lyric";
import TheFuture from "../models/Future";
import Develop from "../models/Development";
// import Jamjar from "../models/Jamjar";
// import SukunaFinger from "../models/SukunaFinger";
import LogoThreejs from "../models/Threejs";


export const CanvasScene = ({ item }) => {
  return (
    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} />
      {item}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={5} />
    </Canvas>
  );
};

export const Wrap = ({item}) => {
  return(
    <Canvas>
      <Stage environment="city" intensity={0.6} >
        {item}
      </Stage>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={5}/>
    </Canvas>
  )
}

export function Cube() {
  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#dc9dcd"]} />
          <Text ref={textRef} fontSize={3} color="#555">
            hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
}

export const MySphere = () => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} />
      <Sphere args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color= "#220736"
        attach= "material"
        distort= {0.5}
        speed={4}
      />
      </Sphere>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};




export const WebDesign = () =>{
  return (
    <Wrap item={<Design1 />}/>
  )
}

export const Development = () =>{
  return (
    <Wrap item={<Develop />}/>
  )
}

export const Illustration = () =>{
  return (
    <Wrap item={<TheFuture />}/>
  )
}

export const ProductDesign = () =>{
  return (
    <Wrap item={<Lyric />}/>
  )
}

export const Socials = () =>{
  return (
    <Wrap item={<SocialMedia />}/>
  )
}

export const ThreeLogo = () =>{
  return (
    <Wrap item={<LogoThreejs />}/>
  )
}
