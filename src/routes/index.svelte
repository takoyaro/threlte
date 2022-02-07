<script lang="ts">
  import GLTF from '$lib/objects/GLTF.svelte'
  import {
    CircleBufferGeometry,
    MeshStandardMaterial,
    SphereBufferGeometry,
    Mesh as ThreeMesh
  } from 'three'
  import { Canvas, DirectionalLight, HemisphereLight, Mesh } from 'threlte'
  import OrthographicCamera from '../lib/cameras/OrthographicCamera.svelte'
  import { useRaf } from '../lib/hooks/useRaf'
  import Group from '../lib/objects/Group.svelte'

  let url = 'models/flower.glb'

  let spherePosX = 0

  useRaf(() => {
    spherePosX = Math.sin(Date.now() / 1000) * 5
  })
</script>

<div class="p-4">
  <h1>Threlte</h1>

  <p>
    Threlte is a component library for svelte to build and render three.js scenes declaratively and
    state-driven in Svelte apps.<br />
    Threlte is inspired by the sensible defaults of
    <a href="https://github.com/pmndrs/react-three-fiber">react-three-fiber</a>, the simplicity and
    effectiveness of <a href="https://svelte.dev/">Sveltes reactivity model</a> and
    <a href="https://svelte-cubed.vercel.app/">Svelte Cubed</a>.<br />
    It provides strictly typed components to quickly and easily build three.js scenes with deep reactivity
    and interactivity out-of-the-box.<br />
    It also aims to provide the building blocks to quickly extend threlte when it's needed.
  </p>

  <div class="flex flex-row justify-center items-center">
    <Canvas size={{ width: 600, height: 600 }}>
      <OrthographicCamera
        position={{ z: 50, x: 50, y: 50 }}
        lookAt={{ x: 0, y: 0, z: 0 }}
        zoom={100}
      />

      <DirectionalLight shadow color={'#EDBD9C'} position={{ y: 4.5 }} target={{ z: spherePosX }} />

      <HemisphereLight skyColor={0x4c8eac} groundColor={0xac844c} intensity={0.9} />

      <Group>
        <Mesh
          receiveShadow
          castShadow
          geometry={new SphereBufferGeometry(1, 40, 40)}
          material={new MeshStandardMaterial({ color: '#dddddd' })}
        />

        <Mesh
          receiveShadow
          position={{ y: -1.5 }}
          rotation={{ x: -90 * (Math.PI / 180) }}
          geometry={new CircleBufferGeometry(3, 72)}
          material={new MeshStandardMaterial({ color: 'white' })}
        />

        <GLTF castShadow receiveShadow {url} position={{ y: 1 }} scale={3} />
      </Group>
    </Canvas>
  </div>
</div>
