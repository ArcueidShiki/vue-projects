<template>
    <div id="app">

        <el-container>
            <el-header><h1>我来组成头部</h1></el-header>
            <el-container>
                <el-aside width="200px"><h2>我来组成侧边</h2></el-aside>
            </el-container>
        </el-container>


        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "AdminView.vue"
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    nav {
        padding: 30px;
    }

    nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
