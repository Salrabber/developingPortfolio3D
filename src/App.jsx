import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function createBoxGrid() {
  const boxPositions = [-1.2, 1.2, 0]; // Possible box positions
  const boxes = []; // Array to store the generated boxes

  for (let x of boxPositions) {
    for (let y of boxPositions) {
      for (let z of boxPositions) {
        const position = [x, y, z]; // Set the position of each box

        // Create a unique key for each box based on its position
        const key = `box-${position.join('-')}`;

        // Create the box component with the given position and key
        const boxComponent = <Box key={key} position={position} />;

        // Push the box component to the boxes array
        boxes.push(boxComponent);
      }
    }
  }

  return boxes;
}


export default function App() {
  const boxes = createBoxGrid();
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      {boxes}
      <OrbitControls />
    </Canvas>
  )
}
