<template>
    <div class="app">
        <nav class="app-menu">
            <h3 class="logo-text-link"><a href="javascript: void 0">{{msg}}</a></h3>
            <img class="logo" src="./assets/img/logo.png"/>
        </nav>
        <section class="main-container">
            <home-page></home-page>
        </section>
    </div>
</template>
<script>
import HomePage from './views/home'
export default {
    components: {
        HomePage
    },
    data() {
        return {
            msg: '美居'
        }
    }
}
</script>
<style lang='less' scoped>
@width: 60px;
@height: @width + 5px;
@bgColor: #99c24e;
@logo-selector: logo;
@text-logo: logo-text-link;
.app {
    .app-menu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .@{text-logo} {
        font-size: 20px;
        a {
            color: #0092d7;
        }
    }
    .@{logo-selector} {
        width: @width;
        height: @height;
        border-radius: 4px;
        border: 1px solid #efefef;
        margin: 10px 20px;
        background: @bgColor;
    }
}

</style>


