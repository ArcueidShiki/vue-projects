<template>
    <div id="app">
        <h2>用户列表</h2>
        <el-container>
                    <el-table
                            :data="tableData"
                            border
                            style="">
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
                                >
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
            <br>
            <hr>
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
        created:function() {
            this.axios.get("http://localhost:18080/user").then((response)=>{
                console.log(response.data);
                this.tableData = response.data.data;
            })
        } ,
        methods:{
            handleClick(row) {
                console.log(row);
            }

        }

    };

</script>

<style scoped>

</style>