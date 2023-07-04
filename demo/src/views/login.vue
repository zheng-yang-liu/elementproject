<template>
    <div>
        <div class="bg">
            <div class="content">
                <!-- 行内块元素 -->
                <div class="content-left">
                    <img src="@/assets/images/leftimagr.png">
                </div>
                <div class="content-right">
                    <img src="@/assets/images/logo.png">

                    <div class="loginForm">
                        <el-form 
                            ref="form" 
                            :model="form" 
                            :rules="rule"  
                            label-position="right">
                                <el-form-item  prop="account" >
                                    <el-input  
                                        v-model="form.account" 
                                        placeholder="请输入用户名" 
                                        prefix-icon="el-icon-user-solid" 
                                        readonly onfocus="this.removeAttribute('readonly')"
                                        >
                                    </el-input>
                                </el-form-item>
                                
                                <el-form-item  prop="pwd" >
                                    <el-input 
                                        v-model="form.pwd" 
                                        placeholder="请输入密码" 
                                        prefix-icon="el-icon-key" 
                                        show-password
                                        >
                                    </el-input>
                                </el-form-item>

                                <el-form-item label="">
                                    <el-button 
                                        @click="submitform(form.account)" 
                                        type="primary" 
                                        style="width:100%"
                                        >
                                        登录
                                    </el-button>
                                </el-form-item>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                
                form:{},
                rule:{
                    //键名：键值
                    // model的贱名：验证
                    //必填
                    account:[{required:true,message:'请输入用户名'},
                            {min:3,message:'最少输入3个字符'}
                            ],
                    pwd:[{required:true,message:'请输入密码'}]
                },
            }
        },
        methods: {
            submitform(account){
                this.$refs.form.validate((res)=>{
                    console.log(res);
                    if(res==true){
                        this.$message.success("登录成功")
                        // 
                        this.$router.push({
                            name: "department",           //这个是通过路由跳转页面，跳转到：在router.js里的name为详情的页面
                            params: {   
                                key: account,         //key随便起名，下边对应就行
                            },  
                        });

                    }else{
                        this.$message.error("请填写完整")
                    }
                });
                console.log(this.form);
            },
            
        },
        
    }
    

</script>
<!-- scoped 只作用于当前组件 -->
<style scoped>

    .loginForm{
        width: 200px;
        margin: auto;
    }
    .bg{
        /* 吧body的边框margin和padding都换掉0px */
        width: 100%; 
        height: 100vh;
        background-image: url(../assets/images/bgimage.jpg);
        background-size: cover;
        position: relative;
    }
    .content{
        position: absolute;
        width: 800px;
        height: 300px;
        background-color: #fff;
        /* 宽高为已知的值 */
        /* top: 50%;
        left: 50%;
        margin-left: -200px;
        margin-top: -100px; */
        /* 计算 */
        /* top: calc(50% - 100px);
        left: calc(50% - 200px); */
        /* 宽高未知 */
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        border-radius:10px 10px 10px 10px;
    }
    .content-left{
        /* background-color: red; */
        width: 500px;
        height: 300px;
        
    }
    .content-left img{
        border-radius:10px 0px 0px 10px;
    }
    .content-right{
        /* background-color: blue; */
        width: 300px;
        height: 300px;
        margin-top: 20px;
        
    }
</style>