import './index.css';
import {Suspense, useRef,useState} from 'react'
import { Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei'
import {mesh,stripes,soul} from "./components/Cards"
import Cards from "./components/Cards"
function App() {
  return (
    <div className="App">
       <Cards />
       <Cards />
    </div>
  );
}

export default App;
