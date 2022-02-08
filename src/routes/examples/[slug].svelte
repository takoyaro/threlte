<script lang="ts">
  import { page } from '$app/stores'
  import { findMenuItemBySlug } from '$misc/xxx/findBySlugInMenuItems'

  let ex = findMenuItemBySlug($page.params.slug)
  $: ex = findMenuItemBySlug($page.params.slug)

  const isExampleMenuItem = (mi: MenuItem): mi is ExampleMenuItem => {
    return 'replUrl' in mi
  }
</script>

<div class="w-full h-[calc(100vh-65px)] bg-[#676778]">
  {#if ex && isExampleMenuItem(ex) && ex.replUrl.length > 0}
    {#key $page.params.slug}
      <div class="w-full h-full overflow-hidden">
        <iframe
          class="w-full h-[calc(100%+61px)] mt-[-61px] block"
          title={ex.title}
          src={ex.replUrl}
          frameborder="0"
        />
      </div>
    {/key}
  {:else}
    <p class="p-4 text-white m-0">No example yet.</p>
  {/if}
</div>
