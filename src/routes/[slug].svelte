<script context="module" lang="ts">
  const docs = import.meta.glob('../pages/**/*.md')

  const postfix = '.svelte.md'

  export const load: Load = async ({ params }) => {
    for (const key in docs) {
      const fileSlug = key.replace(postfix, '').split('/').pop()
      if (fileSlug === params.slug) {
        return {
          props: {
            module: await docs[key]()
          }
        }
      }
    }

    return {
      status: 404
    }
  }
</script>

<script lang="ts">
  import { page } from '$app/stores'
  import type { Load } from '@sveltejs/kit'

  export let module: any
</script>

<div class="p-4">
  <svelte:component this={module && module.default} />
</div>
