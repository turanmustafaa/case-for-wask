<template>
  <div class=" flex justify-center align-middle gap-6">
    <div class=" flex items-center gap-2">
        <span>{{title}}</span>
        <span><img class=" w-4 h-4 object-contain " src="/assets/images/arrow-right-line.png" alt=""></span>
    </div>
    <div class="flex gap-3">
        <button 
        @click="$emit('triggerEvent',i)"
         v-for="i in list" :key="i.id" 
         :class="`rounded-full py-3 px-8 ${current.id == i.id ? 'bg-black text-white' : 'bg-slate-200 text-gray-400' }`"
         >
         {{i.title}}
         </button>
    </div>
  </div>
</template>

<script>
import { onMounted, watch,computed } from 'vue'
export default {
    props : {
        current : {
            required : true
        },
        list : {
            required : true
        },
        title : {
            required :true
        }
    },
    setup(props) {
        const currentItem = computed(() => props.current)
        return {
            currentItem
        }
    }
}
</script>

<style>

</style>