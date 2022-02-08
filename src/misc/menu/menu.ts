export const menuItems: Menu = [
  {
    type: 'BasicMenuItem',
    slug: 'home',
    title: 'Home',
    url: '/'
  },

  {
    type: 'SubMenuMenuItem',
    slug: 'reference',
    title: 'Reference',
    menuItems: []
  },

  {
    type: 'SubMenuMenuItem',
    menuItems: [
      {
        type: 'ExampleMenuItem',
        slug: 'basic-example',
        title: 'Basic Example',
        replUrl: 'https://svelte.dev/repl/14f38c03710945b797d0c421f55e4373?version=3.46.2'
      },
      {
        type: 'SubMenuMenuItem',
        title: 'Components',
        slug: 'components',
        menuItems: [
          {
            type: 'ExampleMenuItem',
            slug: 'canvas',
            title: '<Canvas>',
            replUrl: 'https://svelte.dev/repl/d32892a87dfc409c82a392a51308af58?version=3.46.4'
          },
          {
            type: 'SubMenuMenuItem',
            title: 'Objects',
            slug: 'objects',
            menuItems: [
              {
                type: 'ExampleMenuItem',
                slug: 'object3d',
                title: '<Object3D>',
                replUrl: 'https://svelte.dev/repl/7637f848568641e1a054c16e506b57b6?version=3.46.4'
              },
              {
                type: 'ExampleMenuItem',
                slug: 'group',
                title: '<Group>',
                replUrl: 'https://svelte.dev/repl/09fba3d6ea9e41ebb81df433891479d8?version=3.46.4'
              },
              {
                type: 'ExampleMenuItem',
                slug: 'mesh',
                title: '<Mesh>',
                replUrl: 'https://svelte.dev/repl/bec98d218e2842708002b5ba3f4adbf7?version=3.46.4'
              },
              {
                type: 'ExampleMenuItem',
                slug: 'gltf',
                title: '<GLTF>',
                replUrl: ''
              }
            ]
          },
          {
            type: 'SubMenuMenuItem',
            title: 'Object Instances',
            slug: 'object-instances',
            menuItems: [
              {
                type: 'ExampleMenuItem',
                slug: 'object3DInstance',
                title: '<Object3DInstance>',
                replUrl: ''
              },
              {
                type: 'ExampleMenuItem',
                slug: 'meshInstance',
                title: '<MeshInstance>',
                replUrl: ''
              },
              {
                type: 'ExampleMenuItem',
                slug: 'cameraInstance',
                title: '<CameraInstance>',
                replUrl: ''
              },
              {
                type: 'ExampleMenuItem',
                slug: 'lightInstance',
                title: '<LightInstance>',
                replUrl: ''
              }
            ]
          },

          {
            type: 'SubMenuMenuItem',
            title: 'Lights',
            slug: 'lights',
            menuItems: [
              {
                type: 'ExampleMenuItem',
                slug: 'ambientLight',
                title: '<AmbientLight>',
                replUrl: ''
              },
              {
                type: 'ExampleMenuItem',
                slug: 'directionalLight',
                title: '<DirectionalLight>',
                replUrl: ''
              },
              {
                type: 'ExampleMenuItem',
                slug: 'hemisphereLight',
                title: '<HemisphereLight>',
                replUrl: ''
              },
              {
                type: 'ExampleMenuItem',
                slug: 'pointLight',
                title: '<PointLight>',
                replUrl: ''
              },
              {
                type: 'ExampleMenuItem',
                slug: 'spotLight',
                title: '<SpotLight>',
                replUrl: ''
              }
            ]
          },

          {
            type: 'SubMenuMenuItem',
            title: 'Cameras',
            slug: 'cameras',
            menuItems: [
              {
                type: 'ExampleMenuItem',
                slug: 'orthographicCamera',
                title: '<OrthographicCamera>',
                replUrl: ''
              },
              {
                type: 'ExampleMenuItem',
                slug: 'perspectiveCamera',
                title: '<PerspectiveCamera>',
                replUrl: ''
              }
            ]
          },

          {
            type: 'SubMenuMenuItem',
            title: 'Controls',
            slug: 'controls',
            menuItems: [
              {
                type: 'ExampleMenuItem',
                slug: 'orbitControls',
                title: '<OrbitControls>',
                replUrl: ''
              }
            ]
          },

          {
            type: 'SubMenuMenuItem',
            title: 'Post Processing',
            slug: 'post-processing',
            menuItems: [
              {
                type: 'ExampleMenuItem',
                slug: 'pass',
                title: '<Pass>',
                replUrl: ''
              }
            ]
          },

          {
            type: 'SubMenuMenuItem',
            title: 'Misc',
            slug: 'misc',
            menuItems: [
              {
                type: 'ExampleMenuItem',
                slug: 'fog',
                title: '<Fog>',
                replUrl: ''
              },
              {
                type: 'ExampleMenuItem',
                slug: 'fogExp2',
                title: '<FogExp2>',
                replUrl: ''
              },
              {
                type: 'ExampleMenuItem',
                slug: 'layers',
                title: '<Layers>',
                replUrl: ''
              },
              {
                type: 'ExampleMenuItem',
                slug: 'contextBridge',
                title: '<ContextBridge>',
                replUrl: ''
              }
            ]
          }
        ]
      },

      {
        type: 'SubMenuMenuItem',
        title: 'Hooks',
        slug: 'hooks',
        menuItems: [
          {
            type: 'ExampleMenuItem',
            slug: 'useThrelte',
            title: 'useThrelte',
            replUrl: ''
          },
          {
            type: 'ExampleMenuItem',
            slug: 'useThrelteRoot',
            title: 'useThrelteRoot',
            replUrl: ''
          },
          {
            type: 'ExampleMenuItem',
            slug: 'useFrame',
            title: 'useFrame',
            replUrl: ''
          },
          {
            type: 'ExampleMenuItem',
            slug: 'useLoader',
            title: 'useLoader',
            replUrl: ''
          },
          {
            type: 'ExampleMenuItem',
            slug: 'useTexture',
            title: 'useTexture',
            replUrl: ''
          }
        ]
      }
    ],
    slug: 'examples',
    title: 'Examples'
  }
]
