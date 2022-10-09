import React from 'react'
import {useRef} from 'react'
import { useGLTF} from '@react-three/drei'
function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('../../nftverse.glb')
    return (
      <group {...props} dispose={null} scale={0.2}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0, -0.86]}>
            <mesh geometry={nodes.Tube001.geometry} material={materials['Material #25']} />
          </group>
        </group>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0, -0.86]}>
            <mesh geometry={nodes.Tube012.geometry} material={materials['Material #25']} />
          </group>
        </group>
      </group>
      <group position={[-2.71, 10.11, -1.03]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[-0.17, -0.17, 2.09]}>
            <mesh geometry={nodes['25mm003'].geometry} material={materials['21 - Default']} />
          </group>
        </group>
      </group>
      <group position={[-2.71, 10.11, -1.03]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[-0.17, -0.17, -2.62]}>
            <group position={[-1.83, 0, -3.47]}>
              <mesh geometry={nodes.Capsule033.geometry} material={materials['Material #25']} />
            </group>
          </group>
        </group>
      </group>
      <group position={[-2.62, 9.6, -0.94]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[2.97, 0.17, -Math.PI / 6]}>
            <mesh geometry={nodes.Tube014.geometry} material={materials['Material #25']} />
          </group>
        </group>
      </group>
      <group position={[-2.71, 10.11, -1.03]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[-0.17, -0.17, 2.09]}>
            <group position={[-1.83, 0, -3.47]}>
              <mesh geometry={nodes.Capsule034.geometry} material={materials['Material #25']} />
            </group>
          </group>
        </group>
      </group>
      <group position={[-2.71, 10.11, -1.03]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[-0.17, -0.17, Math.PI / 6]}>
            <group position={[-1.83, 0, -3.47]}>
              <mesh geometry={nodes.Capsule035.geometry} material={materials['Material #25']} />
            </group>
          </group>
        </group>
      </group>
      <group position={[-2.71, 10.11, -1.03]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[-0.17, -0.17, -Math.PI / 3]}>
            <group position={[-1.83, 0, -3.47]}>
              <mesh geometry={nodes.Capsule036.geometry} material={materials['Material #25']} />
            </group>
          </group>
        </group>
      </group>
      <group position={[0, 10.47, 0]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[0, 0, Math.PI / 6]}>
            <group position={[-1.83, 0, -3.47]}>
              <mesh geometry={nodes.Capsule025.geometry} material={materials['Material #25']} />
            </group>
          </group>
        </group>
      </group>
      <group position={[0, 9.95, 0]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI, 0, 2.62]}>
            <mesh geometry={nodes.Tube011.geometry} material={materials['Material #25']} />
          </group>
        </group>
      </group>
      <group position={[0, 10.47, 0]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[0, 0, -Math.PI / 3]}>
            <group position={[-1.83, 0, -3.47]}>
              <mesh geometry={nodes.Capsule026.geometry} material={materials['Material #25']} />
            </group>
          </group>
        </group>
      </group>
      <group position={[0, 10.47, 0]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[0, 0, -2.62]}>
            <group position={[-1.83, 0, -3.47]}>
              <mesh geometry={nodes.Capsule027.geometry} material={materials['Material #25']} />
            </group>
          </group>
        </group>
      </group>
      <group position={[0, 10.47, 0]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[0, 0, 2.09]}>
            <group position={[-1.83, 0, -3.47]}>
              <mesh geometry={nodes.Capsule028.geometry} material={materials['Material #25']} />
            </group>
          </group>
        </group>
      </group>
      <group position={[0, 10.47, 0]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[0, 0, -Math.PI / 3]}>
            <mesh geometry={nodes['25mm001'].geometry} material={materials['21 - Default']} material-color= {props.customColors.stone}/>
          </group>
        </group>
      </group>
      <group position={[2.71, 10.11, 1.03]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[0.17, 0.17, -Math.PI / 3]}>
            <mesh geometry={nodes['25mm002'].geometry} material={materials['21 - Default']} />
          </group>
        </group>
      </group>
      <group position={[2.71, 10.11, 1.03]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[0.17, 0.17, Math.PI / 6]}>
            <group position={[-1.83, 0, -3.47]}>
              <mesh geometry={nodes.Capsule029.geometry} material={materials['Material #25']} />
            </group>
          </group>
        </group>
      </group>
      <group position={[2.62, 9.6, 0.94]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[-2.97, -0.17, 2.62]}>
            <mesh geometry={nodes.Tube013.geometry} material={materials['Material #25']} />
          </group>
        </group>
      </group>
      <group position={[2.71, 10.11, 1.03]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[0.17, 0.17, -Math.PI / 3]}>
            <group position={[-1.83, 0, -3.47]}>
              <mesh geometry={nodes.Capsule030.geometry} material={materials['Material #25']} />
            </group>
          </group>
        </group>
      </group>
      <group position={[2.71, 10.11, 1.03]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[0.17, 0.17, -2.62]}>
            <group position={[-1.83, 0, -3.47]}>
              <mesh geometry={nodes.Capsule031.geometry} material={materials['Material #25']} />
            </group>
          </group>
        </group>
      </group>
      <group position={[2.71, 10.11, 1.03]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[0.17, 0.17, 2.09]}>
            <group position={[-1.83, 0, -3.47]}>
              <mesh geometry={nodes.Capsule032.geometry} material={materials['Material #25']} material-color= {props.customColors.tube} />
            </group>
          </group>
        </group>
      </group>
    </group>
    )
  }
   
  export default Model;