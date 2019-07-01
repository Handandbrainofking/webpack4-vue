<template>
    <div class="app">
        <span>{{msg}}</span>
        <img class="logo" src="./assets/img/logo.png"/>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: 'tomorrow,morning'
        }
    }
}
</script>
<style lang='less' scoped>
.logo {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    border: 1px solid #efefef;
    margin: 10px 20px;
}
</style>


