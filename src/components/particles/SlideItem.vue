<template>
  <div class="h-16 w-16 p-4 bg-slate-200 rounded-xl my-3 mx-auto flex items-center justify-center">
    <img :src="`/assets/images/${item + 1}.png`" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    item: {
      required: true,
      type: Number,
    },
  },
};
</script>

<style scoped lang="scss">
</style>