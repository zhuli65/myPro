<template>
  <div class="hello testnum">
      <input type="text" value="valueNumber">
      <div>{{valueNumber | numberChange}}</div>
      <i class="iconfont icon-gerenzhongxin"></i>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '3', 
      valueNumber: '3'
    }
  },
  filters:{
      numberChange:function(value){
            return value + "4";
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.testnum{
  font-size: 32px;
  background: red;
  .hhh{

  } 
}


</style>
