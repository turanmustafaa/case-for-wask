<template>

  <div class="grid grid-cols-12 container mx-auto py-20 h-[90vh] gap-10 overflow-hidden">
    <div class="col-span-2 pt-16">
      <Slider :fromWhere="true" />
    </div>

    <div class="col-span-8 flex flex-col gap-10">
      <Head />
      <div>
        <div class="flex justify-between items-center">
          <Tab
            :current="currentAcc"
            :list="listAcc"
            :title="'Select Ad Account'"
            @triggerEvent="(i) => (currentAcc = i)"
          />
          <Tab
            :current="currentVal"
            :list="listVal"
            :title="'Select Metric'"
            @triggerEvent="(i) => (currentVal = i)"
          />
        </div>
      </div>
      <div class="flex-1">
        <Graphic :currentVal="currentVal" :values="values" />
      </div>
    </div>

    <div class="col-span-2 pt-16">
      <Slider />
    </div>
  </div>
  
</template>

<script>
import Graphic from "../components/elements/Graphic.vue";
import Slider from "../components/elements/Slider.vue";
import Tab from "../components/elements/Tab.vue";
import Head from "../components/elements/Head.vue";
import { computed, onMounted, reactive, ref, watch } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Tab,
    Slider,
    Graphic,
    Head,
  },
  setup() {
    const store = useStore();

    const accounts = computed(() =>
      store.getters["accounts/accountsGetter"].sort((a, b) => a.sort - b.sort)
    );
    const currentAcc = ref({});
    const currentVal = ref({});

    const listAcc = computed(() =>
      accounts.value.map((acc, index) => {
        return {
          id: acc.id,
          title: `Account ${index + 1}`,
          key: index,
        };
      })
    );
    const listVal = reactive([
      {
        id: 1,
        title: `Clicks`,
        key: "clicks",
      },
      {
        id: 2,
        title: `Impressions`,
        key: "impressions",
      },
      {
        id: 3,
        title: `Spend`,
        key: "spend",
      },
    ]);

    const values = computed(() =>
      accounts.value[currentAcc.value?.key]?.insights?.data?.map((item) => {
        return item[currentVal.value?.key];
      })
    );

    onMounted(async () => {
      await store.dispatch("accounts/getData");
    });

    watch([listAcc, listVal], (newValue) => {
      currentAcc.value = newValue[0][0];
      currentVal.value = newValue[1][0];
    });

    return {
      currentAcc,
      currentVal,
      listAcc,
      listVal,
      values,
    };
  },
};
</script>
