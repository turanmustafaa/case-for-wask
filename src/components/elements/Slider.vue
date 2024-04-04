<template>
  <div class="overflow-hidden w-full h-full">
    <div class="relative">
      <div
        :class="`whitespace-nowrap
        ${fromWhere ? 'animate-upper' : 'animate-lower'}`"
        ref="slider"
      >
      <SlideItem v-for="(i,index) in 10" :key="i" :item="index" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import SlideItem from '../particles/SlideItem.vue';

export default {
  components: { SlideItem },
  props: {
    fromWhere: {
      required: false,
      type: Boolean,
    },
  },
  name: "Slider",

  setup() {
    const slider = ref(null);

    onMounted(() => {
       //slider'i kendim yazdım, ve bu kısımda slider'a ekstra infinite gorunumu kazandırmak için clone'luyorum 
      const copy = slider.value.cloneNode(true);
      slider.value.parentElement.appendChild(copy);
    });
    return {
      slider,
    };
  },
};
</script>

<style scoped>
@keyframes slideupper {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slidelower {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}
.animate-upper {
  animation: 5s slideupper infinite linear;
}
.animate-lower {
  animation: 5s slidelower infinite linear;
}
</style>
