<template>
    <div class="app">
        <h3 class="logo-text-link"><a href="javascript: void 0">{{msg}}</a></h3>
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
@width: 200px;
@height: 200px + 20px;
@bgColor: #99c24e;
@logo-selector: logo;
@text-logo: logo-text-link;
.app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .@{text-logo} {
        font-size: 20px;
        a {
            color: #0092d7;
        }
    }
    .@{logo-selector} {
        width: @width;
        height: @height;
        border-radius: 8px;
        border: 1px solid #efefef;
        margin: 10px 20px;
        background: @bgColor;
    }
}

</style>


