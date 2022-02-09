Yes, there are already three.js component libraries for svelte, threlte is different in some ways:

- **Sensible defaults**  
  Much like [react-three-fiber](https://github.com/pmndrs/react-three-fiber), threlte will set sensible defaults to three.js `WebGLRenderer`, all colors and textures and more. This makes it easy for you to follow best practices in terms of color reception and accuracy.  
  threlte also makes visibility management a breeze with its `<Layers>` component.
- **Unified frame loop**  
  By default, threlte only renders the scene if there's need for it: If a prop changes that makes rendering the scene necessary, if there are any interactive objects in the scene or if threlte or you use `useFrame` in any of your components.
- **Interactivity**  
  threlte makes it possible to use events on three.js objects as if they were regular DOM elements:  
   `<Mesh … interactive on:click={onClick}>`  
   You can also listen to your object leaving or entering the viewport:  
   `<Mesh … viewportAware on:viewportenter={onViewportEnter}>`
- **TypeScript**  
  All threlte components are written in TypeScript, so type support is a first-class citizen.
- **EffectComposer support**  
  Add a Pass with  
   `<Pass pass={new GlitchPass()} />` and threlte will take care of setting up the default `RenderPass` and render to the `EffectComposer` instead of the `WebGLRenderer`.
- **Text rendering**  
  Render text using the fantastic [troika-three-text](https://github.com/protectwise/troika/tree/master/packages/troika-three-text) library with:
  `<Text text="Hello World" />`
- **Access All Areas**
  - Bind to three.js object instances  
    `<Mesh … bind:mesh>`
  - Access the renderer  
    `const { renderer, invalidate } = useThrelte()`
- **Easily extendable**  
  Build objects that didn't yet make it to threlte yourself by plugging together _functional components_.
- **Tree-shakeble**  
  react-three-fiber is great at making it possible to use three.js classes as JSX components. This means that there is no hard dependency on a certain three.js version and everything that is possible in three.js is covered with react-three-fiber as well. There is however a downside: react-three-fiber looks up three.js classes at runtime. This means that even if your react-three-fiber app only uses a fraction of three.js, you will need to ship three.js in its entirety.  
  threlte does not look up three.js classes at runtime and as such is limited in features compared to three.js itself. It tries however to cover most use cases of three.js and provides _functional components_ to make extending threlte as easy as possible. As such, your bundler is able to tree-shake threlte and limit what parts of three.js get shipped.
- **Does not get in your way**  
  Everything is accessible. Objects are instantiated without any default values, so that threlte will not get in your way of setting up or altering objects manually while also relying on the defaults set by three.js.

### Interactivity

[Open the interactivity example in a Svelte REPL](https://svelte.dev/repl/c2b74dcf88ec4b4681b664e202c54274?version=3.46.2)

Listen to events of a `<Mesh>` and a `<MeshInstance>` as if it would be a regular DOM element:

```jsx
<Mesh … interactive on:click={onClick} />
```

These events are supported:

- `click`
- `contextmenu`
- `pointerup`
- `pointerdown`
- `pointerenter`
- `pointerleave`
- `pointermove`

All events include the raycast Intersection object:

```svelte
<script lang="ts">
  import { Mesh, ThreltePointerEvent } from 'threlte'

  const onClick = (e: CustomEvent<ThreltePointerEvent>) => {
    const distanceToMesh = e.detail.distance
  }
</script>

<Mesh … interactive on:click={onClick}>
```

All events but `pointerleave` and `pointerenter` also include the underlying `PointerEvent` or `MouseEvent`:

```svelte
<script>
  import { Mesh, ThreltePointerEvent } from 'threlte'

  const onPointerMove = (e) => {
    console.log(e.detail.event.clientX, e.detail.event.clientY)
  }
</script>

<Mesh … interactive on:pointermove={onPointerMove}>
```

> :warning: **You must add `interactive` to your component to be able to listen to pointer events**

Be aware that this will make the frameloop render on every frame.

### Viewport Awareness

[Open the viewport awareness example in a Svelte REPL](https://svelte.dev/repl/549eb76e8f994a34b9dd1c0b65540c79?version=3.46.2)

Additionally, most Objects (Lights, Cameras, Meshes, …) can be made _viewport aware_. Use it to lazily load textures, models and more.

```svelte
<script lang="ts">
  import { PointLight } from 'threlte'
  import type { Object3D } from 'three'

  let inViewport

  const onViewportEnter = (e: CustomEvent<Object3D>) => {
    console.log('PointLight entered the viewport.')
  }
  const onViewportLeave = (e: CustomEvent<Object3D>) => {
    console.log('PointLight left the viewport.')
  }
</script>

<PointLight
  viewportAware
  bind:inViewport
  on:viewportenter={onViewportEnter}
  on:viewportleave={onViewportLeave}
/>
```

These events are supported:

- `viewportenter`
- `viewportleave`

Bind `inViewport` if you wish to not use events.

> :warning: **You must add `viewportAware` to your component to make it viewport aware**

### Reactivity

[Open the reactivity example in a Svelte REPL](https://svelte.dev/repl/117298a99a5546e18b08b43c3a121274?version=3.46.2)

Just like [Svelte Cubed](https://github.com/Rich-Harris/svelte-cubed) and much unlike [react-three-fiber](https://docs.pmnd.rs/react-three-fiber/advanced/pitfalls) it is encouraged to use your component state to drive your three.js scene.
By using props instead of manipulating three.js objects directly, the unified render loop is able to tell that your scene needs rerendering and svelte can make use of component optimizations.
