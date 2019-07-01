<template>
    <div class="home-wrapper">
        <h6 class="page-title" @click="showPageTitleHandler"> {{title}} </h6>
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
}
</style>


