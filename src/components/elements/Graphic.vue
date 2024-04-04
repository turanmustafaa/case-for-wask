<template>
  <div id="chart">
    <apexchart height="420" class="h-full" type="line" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import { computed } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

export default {
  props: {
    values: {
      required: true
    },
    currentVal : {
        required : true
    }
  },
  components: {
    apexchart: VueApexCharts,
  },
  setup(props) {
    const valuesChart = computed(() => props.values)
    const series = computed(() => [{
      name: "value",
      data: valuesChart.value
    }]);

    const chartOptions = computed(() => ({
      chart: {
        type: 'line',
        zoom: {
          enabled: false
        },
        background: '#ffffff', // Arka plan rengi beyaz
      },
      dataLabels: {
        enabled: false,
        labels : ['data 1','data 2', 'data 3']
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: props.currentVal.title,
        align: 'left'
      },
      fill: {
        type: 'solid',
        color: '#000', // Grafiğin altındaki alanın rengi gri olarak ayarlandı
      },
    }));

    return {
      series,
      chartOptions
    };
  }
};
</script>
