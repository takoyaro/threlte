<script>
  import Header from '$components/Header.svelte/Header.svelte'
  import MenuComponent from '$components/Menu/Menu.svelte'
  import '../app.css'
  import { menuItems } from '$misc/Menu/menu'
</script>

<Header />

<div class="flex flex-col md:flex-row h-[calc(100vh-65px)]">
  <div class="p-4 h-full bg-[#676778] text-white overflow-y-scroll">
    <MenuComponent {menuItems} expanded />
    <div class="h-0 overflow-hidden">
      <MenuComponent {menuItems} expanded forceExpansion />
    </div>
  </div>

  <div class="h-full bg-[#676778] flex-1">
    <slot />
  </div>
</div>
