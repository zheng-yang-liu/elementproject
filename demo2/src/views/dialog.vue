<template>
    <div >
        <div style="margin:20px">
            <el-button style="background-color:blue;color:white" @click="changedialog">+添加客服</el-button>
            <el-dialog title="编辑客服" :visible.sync="showdialog" width="1000px"> 
                <el-form ref="form" :model="form" :rules="rule"   >
                    <el-form-item 
                        label="客服名称" 
                        prop="kf" 
                        label-width="100px" 
                        
                        >
                        <el-input 
                            v-model="form.kf" 
                            placeholder="请输入客服名称" 
                            >
                        </el-input>
                    </el-form-item>

                    <el-form-item 
                        label="手机号码" 
                        prop="sj" 
                        label-width="100px" 
                        
                        >
                        <el-input 
                            v-model="form.sj" 
                            placeholder="请输入手机号码" 
                            >
                        </el-input>
                    </el-form-item>

                    <el-form-item 
                        label="登录账号" 
                        prop="admin" 
                        label-width="100px" 
                        
                        >
                        <el-input 
                            v-model="form.admin" 
                            placeholder="请输入登录账号" 
                            readonly 
                            onfocus="this.removeAttribute('readonly')"
                            >
                        </el-input>
                    </el-form-item>

                    <el-form-item label="登录密码" prop="password" label-width="100px"  >
                        <el-input v-model="form.password" placeholder="请输入登录密码" show-password ></el-input>
                    </el-form-item>

                    <el-form-item 
                        label="确认密码" 
                        prop="password2" 
                        label-width="100px" 
                        
                        >
                        <el-input 
                            v-model="form.password2" 
                            placeholder="请输入确认密码" 
                            show-password 
                            >
                        </el-input>
                    </el-form-item>
                    
                    <el-form-item label="客服状态" label-width="100px">
                        <el-switch
                            class="switch"
                            :width=60
                            v-model="value"
                            inactive-color="gray"
                            active-text="开启"
                            inactive-text="关闭">
                        </el-switch>
                    
                    </el-form-item>
                    <el-form-item label="手机订单管理" label-width="100px">
                        <el-switch
                            class="switch"
                            :width=60
                            v-model="value2"
                            inactive-color="gray"
                            active-text="开启"
                            inactive-text="关闭">
                        </el-switch>
                    </el-form-item>
                    <el-form-item label="订单通知" label-width="100px">
                        <el-switch
                            class="switch"
                            :width=60
                            v-model="value3"
                            inactive-color="gray"
                            active-text="开启"
                            inactive-text="关闭">
                        </el-switch>
                    </el-form-item>

                    <el-form-item label="">
                        <el-button 
                            @click="submitform" 
                            type="primary" 
                            style="width:100%"
                            >提交
                        </el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>
        </div>

        <div style="width:1250px;margin:0 auto">
            <el-table :data="list" header-cell-style="background-color:lightgrey">
                <el-table-column label="ID" prop="id" width=100px></el-table-column>
                <el-table-column label="微信用户名称" prop="name" width=200px></el-table-column>
                        
                <el-table-column label="客服头像" prop="touxiang" width=200px>
                    <template slot-scope="scope">
                        <img :src="scope.row.touxiang" style="width:60px;height:60px;border-radius:100%"/>
                    </template>
                </el-table-column>

                <el-table-column label="客服名称" prop="kfname" width=200px></el-table-column>

                <el-table-column label="客服状态" width=200px>
                    <template slot-scope="scope">
                        <el-switch
                            class="switch"
                            width='60'
                            v-model="scope.row.switch"
                            :active-value="1" 
                            :inactive-value="0" 
                            inactive-color="red"
                            active-text="开启"
                            inactive-text="关闭"
                            >
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="添加时间" prop="tjtiem" width=200px></el-table-column>
                <el-table-column label="操作" width="200px" fixed="right" >
                    <!-- 插槽 (按钮)-->
                    <template slot-scope="scope">
                        <span style="color:blue">编辑</span>
                        <span> | </span>
                        <span style="color:blue">删除</span>
                        <span> | </span>
                        <span style="color:blue;width:60px;height:30px">进入工作台</span>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {switch:1,id:1,name:"张三",touxiang:"https://tse1-mm.cn.bing.net/th/id/OIP-C.owpbNjuu23xkyc4yrX9BDQHaEo?pid=ImgDet&rs=1",kfname:"lay",tjtiem:"2002-02-02"},
                {switch:1,id:2,name:"李四",touxiang:"https://scpic.chinaz.net/files/pic/pic9/202009/apic27858.jpg",kfname:"tt",tjtiem:"2002-02-02"},
                {switch:1,id:3,name:"王五",touxiang:"https://tse1-mm.cn.bing.net/th/id/OIP-C.owpbNjuu23xkyc4yrX9BDQHaEo?pid=ImgDet&rs=1",kfname:"hdf",tjtiem:"2002-02-02"},
                {switch:1,id:4,name:"赵六",touxiang:"https://tse1-mm.cn.bing.net/th/id/OIP-C.owpbNjuu23xkyc4yrX9BDQHaEo?pid=ImgDet&rs=1",kfname:"sdg",tjtiem:"2002-02-02"},
                {switch:1,id:5,name:"煦炎",touxiang:"https://tse1-mm.cn.bing.net/th/id/OIP-C.owpbNjuu23xkyc4yrX9BDQHaEo?pid=ImgDet&rs=1",kfname:"dfg",tjtiem:"2002-02-02"},
                
            ],
            showdialog:false,
            

            value:true,
            value2:false,
            value3:false,
            form:{},
            rule:{
                    //键名：键值
                    // model的贱名：验证
                    //必填
                    admin:[{required:true,message:'请输入用户名'},
                            {min:3,message:'最少输入3个字符'}
                            ],
                    password:[{required:true,message:'请输入密码'}],
                    kf:[{required:true,message:'请输入客服姓名'}],
                    password2:[{required:true,message:'请输入密码'}],
                    sj:[{required:true,message:'请输入手机号'},
                        {min:11,message:'请输入正确的手机号'}]
                },
        }
    },
    methods:{
        changedialog(){
            this.showdialog = true;
        },
        submitform(){
                this.$refs.form.validate((res)=>{
                    console.log(res);
                    if(res==true){
                        this.$message.success("填写成功")
                        var student= {switch:1,id:2,name:"微信",touxiang:"https://scpic.chinaz.net/files/pic/pic9/202009/apic27858.jpg",kfname:this.form.kf,tjtiem:"2022-2-2"}
                        this.list.push(student);
                        this.showdialog = false;
                    }else{
                        this.$message.error("请填写完整")
                    }
                });
                console.log(this.form);
            },
    }
}
</script>

<style scoped>
    .switch /deep/.el-switch__label {
        position: absolute;
        color: #fff !important;
        z-index: 1;
        display: none;
    }
    .switch /deep/ .is-active{
        display: block;
    }
    .switch /deep/ .el-switch__label--left span{
        margin-left: 20px;
    }
</style>