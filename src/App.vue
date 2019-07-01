<template>
    <div class="app">
        <nav class="app-menu">
            <h3 class="logo-text-link">
                <img class="logo" src="./assets/img/logo.png"/>
                <a href="javascript: void 0">{{msg}}</a>
            </h3>
            
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
            msg: 'Dolphin weex ui'
        }
    }
}
</script>
<style lang='less' scoped>
@width: 60px;
@height: @width + 5px;
@bgColor: #fff;
@logo-selector: logo;
@text-logo: logo-text-link;
.app {
    .app-menu {
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #e2e2e2;
        margin-bottom: 15px;
        // justify-content: center;
        // align-items: center;
    }
    .@{text-logo} {
        font-size: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
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


