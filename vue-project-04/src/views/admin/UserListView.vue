<template>
    <div id="app">
        <el-container>
                <el-main>
                    <h3>我来组成身体</h3>

                    <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                        <el-table-column
                                fixed
                                prop="id"
                                label="id"
                                width="150">
                        </el-table-column>
                        <el-table-column
                                prop="username"
                                label="姓名"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="gender"
                                label="性别"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="dayOfBirth"
                                label="生日"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="地址"
                                width="300">
                        </el-table-column>
                        <el-table-column
                                fixed="right"
                                label="操作"
                                width="100">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                                <el-button type="text" size="small">编辑</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <input type="text" value="请求数据" @click="created()">
                </el-main>
        </el-container>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "UserListView.vue",
        data(){
            return{
                tableData:[]
            }
        },
        methods:{
            created:function () {
                this.axios.get("http://localhost:18080/user").then((response)=>{
                    console.log(response.data);
                    this.tableData = response.data.data;
                })
            },handleClick(row) {
                console.log(row);
            }

        }

    };

</script>

<style scoped>

</style>