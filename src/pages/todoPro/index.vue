<template>
<div class="todo-box">
    <ul class="tabs">
        <li v-for="(item , index) in tabsList" :class="item.checked?'active':''" @click="changeActive(item)">
            {{item.name}}
        </li>
    </ul>

    <template>
    <el-radio disabled v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
    </template>
</div>
    
</template>
<script>
export default {
    data () {
        return{
            tabsList:[
                {name: '首页',checked:true},
                {name: '商城',checked:false},
                {name: 'TODO',checked:false},
            ],
            radio: '1',
        }
    },

    methods: {
        changeActive: function(index){
            let self = this;
            self.tabsList.forEach((item,index) => {
                item.checked = false;
            });
            index.checked = !index.checked;
        }
    }
}
</script>
<style lang="scss" scoped>
.todo-box{
    .tabs{
        width: 280px;
        display: flex;
        padding: 0px 10px;
        li{
            flex: 1;
            background: #cccccc;
            &.active{
                background: #ff4a00;
                color: #ffffff;
            }
        }
    }
}
</style>
