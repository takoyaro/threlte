<script lang="ts">
  import { page } from '$app/stores'
  import { findMenuItemBySlug } from '$misc/Menu/findBySlugInMenuItems'

  let ex = findMenuItemBySlug($page.params.slug)
  $: ex = findMenuItemBySlug($page.params.slug)

  const isExampleMenuItem = (mi: MenuItem): mi is ExampleMenuItem => {
    return 'replUrl' in mi
  }

  console.log(ex && isExampleMenuItem(ex))
</script>

{#if ex && isExampleMenuItem(ex) && ex.replUrl.length > 0}
  {#key $page.params.slug}
    <div class="w-full h-full">
      <div class="w-full h-full overflow-hidden">
        <iframe
          class="w-full h-[calc(100%+61px)] mt-[-61px] block"
          title={ex.title}
          src={ex.replUrl}
          frameborder="0"
        />
      </div>
    </div>
  {/key}
{:else}
  <p class="p-4 text-white">No example yet.</p>
{/if}
