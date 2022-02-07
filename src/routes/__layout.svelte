<script>
  import Header from '$components/Header.svelte/Header.svelte'
  import MenuComponent from '$components/Menu/Menu.svelte'
  import '../app.css'
  import { menuItems } from '$misc/Menu/menu'
</script>

<Header />

<div class="mt-[65px] flex flex-col md:flex-row">
  <div
    class="fixed top-[65px] left-0 p-4 text-white h-[calc(100vh-65px)] overflow-scroll bg-[#676778] border-r border-[#767686]"
  >
    <MenuComponent {menuItems} expanded />
    <div class="h-0 overflow-hidden">
      <MenuComponent {menuItems} expanded forceExpansion />
    </div>
  </div>

  <div class="p-4">
    <div class="h-0 overflow-hidden">
      <MenuComponent {menuItems} expanded forceExpansion />
    </div>
  </div>

  <div class="h-full flex-1 content">
    <slot />
  </div>
</div>
