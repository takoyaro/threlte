<script lang="ts">
  import { page } from '$app/stores'
  import BasicMenuItem from './MenuItems/BasicMenuItem.svelte'
  import ExampleMenuItem from './MenuItems/ExampleMenuItem.svelte'

  export let menuItems: MenuItem[]
  export let title = ''

  export let depth = 0

  export let expanded = false
  export let forceExpansion = false

  export let menuItemComponents: Record<Exclude<MenuItem['type'], 'SubMenuMenuItem'>, any> = {
    BasicMenuItem: BasicMenuItem,
    ExampleMenuItem: ExampleMenuItem
  }

  const isSelected = (currentSlug: string, menuItem: MenuItem) => {
    return currentSlug === menuItem.slug
  }
</script>

{#if title.length}
  <button on:click={() => (expanded = !expanded)} class="text-gray-300 text-xs">
    <img
      class="inline h-4 transform -translate-y-[2px] mr-1"
      src={expanded ? '/icons/folder-open.svg' : '/icons/folder-closed.svg'}
      alt=""
      srcset=""
    />
    {title}
  </button>
{/if}

{#if expanded || forceExpansion}
  <ul class="text-sm" class:pr-4={depth === 0} class:pl-6={depth > 0}>
    {#each menuItems as menuItem}
      {#if menuItem.type === 'SubMenuMenuItem'}
        <li>
          <svelte:self
            menuItems={menuItem.menuItems}
            depth={depth + 1}
            title={menuItem.title}
            {forceExpansion}
          />
        </li>
      {:else}
        <li class:underline={isSelected($page.params.slug, menuItem)} class="hover:underline">
          <svelte:component this={menuItemComponents[menuItem.type]} {menuItem} />
        </li>
      {/if}
    {/each}
  </ul>
{/if}
