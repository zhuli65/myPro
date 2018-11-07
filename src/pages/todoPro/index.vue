<template>
  <div class="todo-box">

    <ul class="tabs">

      <li v-for="(item , index) in tabsList" :key="index" :class="item.checked?'active':''" @click="changeActive(item)">

        {{item.name}}

      </li>

    </ul>



    <template>

        <el-radio disabled v-model="radio" label="1">备选项</el-radio>

        <el-radio v-model="radio" label="2">备选项</el-radio>
</template>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
</div>

</template>

<script>
  export default {

    data() {

      return {

        tabsList: [{

            name: '首页',

            checked: true

          },

          {

            name: '商城',

            checked: false

          },

          {

            name: 'TODO',

            checked: false

          },

        ],

        radio: '1',

      }

    },

    mounted() {

      this.drawLine();

    },

    methods: {

      changeActive: function(index) {

        let self = this;

        self.tabsList.forEach((item, index) => {

          item.checked = false;

        });

        index.checked = !index.checked;

      },

      drawLine() {

        // 基于准备好的dom，初始化echarts实例

        let myChart = this.$echarts.init(document.getElementById('myChart'))

        // 绘制图表

        myChart.setOption({

          title: '',

          tooltip: {},

          legend: {

            data: [{

              name: '销量',

              icon: 'path:// M825.148 677.339H198.396c-24.184 0-43.979-18.026-43.979-39.422v-108.733h715.308V637.917c0.001 21.396-20.391 39.422-44.577 39.422zM740.09 93.979h85.059c24.186 0 44.577 16.275 44.577 37.676v366.28H740.09v-403.956zM154.418 131.655c0-21.4 19.794-37.676 43.979-37.676h86.813V497.936H154.418v-366.281zM360.444 93.979h304.414V497.936H360.444v-403.957z m62.504 354.183h178.249v-174.775H422.948V448.162zM526.076 361.262c9.459 5.126 15.889 15.14 15.889 26.656 0 16.733-13.566 30.297-30.299 30.297-16.734 0-30.295-13.564-30.295-30.297 0-11.517 6.423-21.53 15.882-26.656l-18.451-47.291c-3.788-9.768-0.69-17.436 6.882-17.436h51.962c7.576 0 10.67 7.668 6.885 17.436l-18.455 47.291z'

            }]

          },

          xAxis: {

            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]

          },

          yAxis: {},

          series: [{

            name: '销量',

            type: 'bar',

            data: [5, 20, 36, 10, 10, 20]

          }]

        });

      }

    }

  }
</script>

<style lang="scss" scoped>
  .todo-box {
    .tabs {
      width: 280px;
      display: flex;
      padding: 0px 10px;
      li {
        flex: 1;
        background: #cccccc;
        &.active {
          background: #ff4a00;
          color: #ffffff;
        }
      }
    }
  }
</style>
