<template>
  <div>

    <h1>{{title}}</h1>

    <div class="list-com">

      <ul>

        <li v-for="(item,index) in number" :key="index">

          <span @click="numberChange(item,-1)">-</span> {{item.val}} <span @click="numberChange(item,1)">+</span>

        </li>

      </ul>

    </div>

  </div>
</template>

<script>
  export default {

    name: 'ShopPro',

    data() {

      return {

        title: '购物车',

        number: [{

            'val': '1',

            'name': 'feng'

          },

          {

            'val': '2',

            'name': 'feng'

          },

          {

            'val': '2',

            'name': 'feng'

          },

          {

            'val': '4',

            'name': 'feng'

          },

        ]

      }

    },

    methods: {

      numberChange: function(val, type) {

        if (type == '-1') {

          val.val--;

          if (val.val < 1) {

            val.val = 1;

          }

        } else {

          val.val++;

        }

      }

    }

}
</script>

<style scoped>
  ul li {

    list-style-type: none;

  }
</style>

