<template>
    <div class="tabs-box">
        <ul>
           <li><router-link to="/tabs/one">11111</router-link></li>
           <li><router-link to="/tabs/two">22222</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        name: 'tabs',
    }
</script>
