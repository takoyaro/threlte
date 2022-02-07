<script lang="ts">
  import GitHub from '$components/Logos/GitHub.svelte'
</script>

<header
  class="fixed top-0 left-0 w-full bg-white h-[65px] flex flex-row items-center text-dark-grayish justify-between shadow-md"
>
  <a class="h-full flex flex-row items-center px-4" href="/">
    <img class="h-full pl-0 p-2.5" src="/logo/logo_cubes.png" alt="" />
    <p class="text-2xl">THRELTE</p>
  </a>

  <div class="h-full flex flex-row items-center">
    <a class="p-4 hover:text-orange" target="_blank" href="https://github.com/grischaerbe/threlte">
      <GitHub />
    </a>
  </div>
</header>
