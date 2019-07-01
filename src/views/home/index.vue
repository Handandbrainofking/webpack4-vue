<template>
    <div class="home-wrapper">
        <h6 class="page-title" @click="showPageTitleHandler"> {{title}} </h6>
        <span class="blue-icon iconfont iconbluetoothoff"></span>
        <span class="blue-icon iconfont iconsettings"></span>
        <span class="blue-icon iconfont iconcancel"></span>
        <span class="blue-icon iconfont iconbrightness"></span>
        <span class="blue-icon iconfont iconmusiclist"></span>
    </div>
</template>
<script>
import ConfigDataJson from './data.json'
console.log('home data', ConfigDataJson)
export default {
    data() {
        return {
            title: 'HOME'
        }
    },
    methods: {
        showPageTitleHandler() {
            console.log('This is page title!!!')
        }
    }
}
</script>
<style lang="scss" scoped>
.home-wrapper {
    height: 300px;
    .page-title {
        color: #0092d7;
        font-size: 20px;
        text-align: center
    }
    .blue-icon {
        font-size: 25px;
    }
}
</style>


