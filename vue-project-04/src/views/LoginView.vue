<template>
  <div id="app">
    <el-row type="flex" justify="center">
      <el-col :span="8">
        <h3>用户登录</h3>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <!--          <el-form-item label="确认密码" prop="checkPass">-->
          <!--            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>-->
          <!--          </el-form-item>-->
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>

      </el-col>
    </el-row>
    <router-view/>
  </div>
</template>
<script>
  export default {
    data() {
      var checkUsername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        callback();
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }
        callback();
      };
      /* else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };*/
      /* else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };*/
      return {
        ruleForm: {
          pass: '',
          username: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          username: [
            { validator: checkUsername, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            let url = '/user/login';
            let data = {
              "password":this.ruleForm.pass,
              username:this.ruleForm.username

            }
            console.log("请求路径:"+url);
            console.log("请求参数:"+data.password+data.username);
            this.axios.post('http://localhost:18080'+url,data).then((response )=>{
              let responseBody = response.data;
              console.log(responseBody);
              console.log("响应的state:"+responseBody.state);
              console.log("响应的data:" );
              console.log(responseBody.data);
              if(responseBody.state == 200){
                  console.log(responseBody.data);
                  this.$message({
                    message: '登录成功',
                    type: 'success'
                  });
                  this.$router.push('/home');
              }else{
                console.log("响应的message:"+responseBody.message);
                this.$message.error(responseBody.message);
              }
            }).catch(function (error) {
              console.log(error);
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
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
