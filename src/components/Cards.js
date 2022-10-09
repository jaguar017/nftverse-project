import React from 'react'
import {Suspense, useRef,useState} from 'react'
import { Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei'
import Model from "./Model"
function Cards(props) {
    const [tube,setTube] = useState("#ffffff")
    const [stone,setStone] = useState("#ffffff")
    return (
      <div className="wrapper">
      <div className="card">
          <div className="product-canvas">
             <Canvas>
                <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight intensity={0.9} 
                               angle={0.1} 
                               penumbra={1} 
                               position={[10,15,10]}
                               castShadow />
                    <Model customColors={{tube :tube,stone:stone}}/>
                    <OrbitControls enablePan={false}
                                   enableZoom={false}
                                   enableRotate={true}/>
                </Suspense>
             </Canvas>
          </div>
          <h2>Color chooser</h2>
          <div className='colors'>
              <div>
                  <input type="color" id="tube" name="tube"
                        value={tube} 
                        onChange={(e) => setTube(e.target.value)}/>
                  <label for="tube">Tube</label>
                </div>
              <div>
                  <input type="color" id="stone" name="stone"
                          value={stone} 
                          onChange={(e) => setStone(e.target.value)}/>
                  <label for="stone">Stone</label>
              </div>
          </div>
      </div>
  </div>
     
    )
  }

  export default Cards;