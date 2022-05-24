<template>
    <div id="app">

        <el-container>
            <el-header class="layout-header">管理页面</el-header>
            <el-container class="layout-body">
            <!--侧边栏开始-->
                <el-container class="layout-aside">
                <el-aside  width="200px" style="background: rgb(238, 241, 246)">
<!--                    <el-menu :default-openeds="['1', '3']" >-->
<!--                        <el-submenu index="1">-->
<!--                            <template slot="title"><i class="el-icon-message"></i>导航一</template>-->
<!--                            <el-menu-item-group>-->
<!--                                <template slot="title">用户管理</template>-->
<!--                                <el-menu-item index="1-1" ><router-link class="link" to="/admin/user/list">用户列表</router-link></el-menu-item>-->
<!--                                <el-menu-item index="1-2" ><router-link class="link" to="/admin/user/add-new">添加用户</router-link></el-menu-item>-->
<!--                            </el-menu-item-group>-->
<!--                            <el-menu-item-group title="分组2">-->
<!--                                <el-menu-item index="1-3">选项3</el-menu-item>-->
<!--                            </el-menu-item-group>-->
<!--                            <el-submenu index="1-4">-->
<!--                                <template slot="title">选项4</template>-->
<!--                                <el-menu-item index="1-4-1">选项4-1</el-menu-item>-->
<!--                            </el-submenu>-->
<!--                        </el-submenu>-->
<!--                        <el-submenu index="2">-->
<!--                            <template slot="title"><i class="el-icon-menu"></i>导航二</template>-->
<!--                            <el-menu-item-group>-->
<!--                                <template slot="title">分组一</template>-->
<!--                                <el-menu-item index="2-1">选项1</el-menu-item>-->
<!--                                <el-menu-item index="2-2">选项2</el-menu-item>-->
<!--                            </el-menu-item-group>-->
<!--                            <el-menu-item-group title="分组2">-->
<!--                                <el-menu-item index="2-3">选项3</el-menu-item>-->
<!--                            </el-menu-item-group>-->
<!--                            <el-submenu index="2-4">-->
<!--                                <template slot="title">选项4</template>-->
<!--                                <el-menu-item index="2-4-1">选项4-1</el-menu-item>-->
<!--                            </el-submenu>-->
<!--                        </el-submenu>-->
<!--                        <el-submenu index="3">-->
<!--                            <template slot="title"><i class="el-icon-setting"></i>导航三</template>-->
<!--                            <el-menu-item-group>-->
<!--                                <template slot="title">分组一</template>-->
<!--                                <el-menu-item index="3-1">选项1</el-menu-item>-->
<!--                                <el-menu-item index="3-2">选项2</el-menu-item>-->
<!--                            </el-menu-item-group>-->
<!--                            <el-menu-item-group title="分组2">-->
<!--                                <el-menu-item index="3-3">选项3</el-menu-item>-->
<!--                            </el-menu-item-group>-->
<!--                            <el-submenu index="3-4">-->
<!--                                <template slot="title">选项4</template>-->
<!--                                <el-menu-item index="3-4-1">选项4-1</el-menu-item>-->
<!--                            </el-submenu>-->
<!--                        </el-submenu>-->
<!--                    </el-menu>-->
                    <el-menu
                            router
                            default-active="2"
                            class="el-menu-vertical-demo"
                            background-color="cornflowerblue"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>导航一</span>
                            </template>
                            <el-menu-item-group>
                                <template slot="title">用户管理</template>
                                <el-menu-item index="/admin/user/list">用户列表</el-menu-item>
                                <el-menu-item index="/admin/user/add-new">添加用户</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="3" disabled>
                            <i class="el-icon-document"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航四</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                </el-container>
            <!--侧边栏结束-->
            <el-main>
                <router-view/>
            </el-main>
            </el-container>
        </el-container>


    </div>
</template>


<script>
    export default {
        name: "AdminView.vue",
        methods:{
            addUser(){
                location.href='/admin/user/add-new'
            },
            userList(){
                location.href='/admin/user/list'
            }
        }
    };

</script>

<style>
    *{
        margin: 0;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
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
    .link{
        text-decoration: none;
    }
    .layout-header{
        background:linear-gradient(90deg,cornflowerblue, #8c7ee2, #deb887);
    }
    .layout-aside{
    }
    .layout-body{
    }
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }

</style>
