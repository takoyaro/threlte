<script lang="ts">
  export let menuItem: ExampleMenuItem
</script>

<a href={`/examples/${menuItem.slug}`}>{menuItem.title}</a>
