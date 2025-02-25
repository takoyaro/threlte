<script lang="ts">
  import { spring, tweened } from 'svelte/motion'
  import {
    BoxBufferGeometry,
    CylinderBufferGeometry,
    MeshStandardMaterial,
    PositionalAudio as ThreePositionalAudio
  } from 'three'
  import { DEG2RAD } from 'three/src/math/MathUtils'
  import {
    Group,
    Mesh,
    PositionalAudio,
    useAudioListener,
    useFrame,
    type Position,
    type Rotation,
    type Scale
  } from 'threlte'
  import Button from './Button.svelte'

  export let position: Position | undefined = undefined
  export let rotation: Rotation | undefined = undefined
  export let scale: Scale | undefined = undefined

  let discSpeed = tweened(0, {
    duration: 1e3
  })
  let discRotation = 0
  useFrame(() => {
    discRotation += 0.02 * $discSpeed
  })

  let armPos = spring(0)

  let started = false
  export let isPlaying = false

  export const toggle = async () => {
    if (!started) {
      await context.resume()
      started = true
    }
    if (isPlaying) {
      discSpeed.set(0)
      armPos.set(0)
      isPlaying = false
    } else {
      discSpeed.set(1)
      armPos.set(1)
      isPlaying = true
    }
  }

  let audio: ThreePositionalAudio
  const { context } = useAudioListener()
  const analyser = context.createAnalyser()
  $: if (audio) audio.getOutput().connect(analyser)
  const pcmData = new Float32Array(analyser.fftSize)
  export let volume = 0
  useFrame(() => {
    if (!audio) return
    analyser.getFloatTimeDomainData(pcmData)
    let sumSquares = 0.0
    for (const amplitude of pcmData) {
      sumSquares += amplitude * amplitude
    }
    volume = Math.sqrt(sumSquares / pcmData.length)
  })

  let sideA = '/audio/side_a.mp3'
  let sideB = '/audio/side_b.mp3'
  let source = sideA
  const changeSide = () => {
    source = source === sideA ? sideB : sideA
  }
</script>

<Group {position} {rotation} {scale}>
  <!-- DISC -->
  <Mesh
    receiveShadow
    castShadow
    material={new MeshStandardMaterial({
      color: 0xc62004,
      flatShading: true
    })}
    geometry={new CylinderBufferGeometry(2, 2, 0.1, 10)}
    rotation={{ y: -discRotation }}
    position={{ x: 0.5, y: 1.15 }}
  />

  <!-- CASE -->
  <Mesh
    receiveShadow
    castShadow
    geometry={new BoxBufferGeometry(6, 1, 4.4)}
    material={new MeshStandardMaterial({
      color: 0xeedbcb
    })}
    position={{ y: 0.5 }}
  />

  <!-- SIDE BUTTON -->
  <Button
    position={{ y: 1, z: 0.3, x: -2.3 }}
    on:click={changeSide}
    text={source === sideA ? 'Side B' : 'Side A'}
  />

  <!-- PLAY/PAUSE BUTTON -->
  <Button
    position={{ y: 1, z: 1.5, x: -2.3 }}
    on:click={toggle}
    text={isPlaying ? 'Pause' : 'Play'}
  />

  <!-- ARM -->
  <Group
    position={{ x: 2.5, y: 1.45, z: -1.8 }}
    rotation={{ z: DEG2RAD * 90, y: DEG2RAD * 90 - $armPos * 0.3 }}
  >
    <Mesh
      castShadow
      material={new MeshStandardMaterial({
        color: 0xffffff,
        flatShading: true
      })}
      geometry={new CylinderBufferGeometry(0.1, 0.1, 3, 6)}
      position={{ y: 1.5 }}
    />
  </Group>

  {#if started}
    <PositionalAudio
      autoplay
      bind:audio
      refDistance={10}
      loop
      playbackRate={$discSpeed}
      {source}
      directionalCone={{
        coneInnerAngle: 90,
        coneOuterAngle: 220,
        coneOuterGain: 0.3
      }}
    />
  {/if}
</Group>
