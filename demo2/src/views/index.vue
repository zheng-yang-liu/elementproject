<template id="user">
    <div>
        <div>
            <!-- 整体 -->
            <el-container style="background-color:white;height: 100vh;">
                <!-- 左边导航 -->
                <el-aside style="background-color:#01152b;width: 220px;">
                
                
                
                    
                        
                    
                    <el-menu 
                        background-color="#01152b" 
                        text-color="white" 
                        active-text-color="grey"
                        :unique-opened="true"
                        :router="true"
                        style="height: 100vh"
                        class="el-submenu_title"
                        >

                        <el-menu-item index="0" >
                            <img style="width:200px;height:74px;margin-left: -20px;" src="@/assets/images/logo.png">
                        </el-menu-item>
                        <el-menu-item index="1"><i class="el-icon-s-home"></i>主页</el-menu-item>
                        <el-submenu index="2">
                            <template slot="title" ><i class="el-icon-user-solid"></i>用户</template>
                            <el-menu-item index="3">列表</el-menu-item>
                            <el-menu-item index="4">话术</el-menu-item>
                            <el-menu-item index="5">留言</el-menu-item>
                        </el-submenu>
                        <el-submenu index="6">
                            <template slot="title" ><i class="el-icon-shopping-cart-full"></i>订单</template>
                            <el-menu-item index="7">列表</el-menu-item>
                            <el-menu-item index="8">话术</el-menu-item>
                            <el-menu-item index="9">留言</el-menu-item>
                        </el-submenu>
                        <el-submenu index="10">
                            <template slot="title" ><i class="el-icon-sell"></i>营销</template>
                            <el-menu-item index="11">列表</el-menu-item>
                            <el-menu-item index="12">话术</el-menu-item>
                            <el-menu-item index="13">留言</el-menu-item>
                        </el-submenu>
                        <el-submenu index="14">
                            <template slot="title" ><i class="el-icon-edit-outline"></i>统计</template>
                            <el-menu-item index="15">列表</el-menu-item>
                            <el-menu-item index="16">话术</el-menu-item>
                            <el-menu-item index="17">留言</el-menu-item>
                        </el-submenu>
                        <el-submenu index="18">
                            <template slot="title" ><i class="el-icon-s-promotion"></i>分销</template>
                            <el-menu-item index="19">列表</el-menu-item>
                            <el-menu-item index="20">话术</el-menu-item>
                            <el-menu-item index="21">留言</el-menu-item>
                        </el-submenu>

                        <el-submenu index="22">
                            <template slot="title" ><i class="el-icon-tickets"></i>客服</template>
                            <el-menu-item index="23">列表</el-menu-item>
                            <el-menu-item index="24">话术</el-menu-item>
                            <el-menu-item index="25">留言</el-menu-item>
                        </el-submenu>
                        <el-submenu index="26">
                            <template slot="title" ><i class="el-icon-bank-card"></i>财务</template>
                            <el-menu-item index="27">列表</el-menu-item>
                            <el-menu-item index="28">话术</el-menu-item>
                            <el-menu-item index="29">留言</el-menu-item>
                        </el-submenu>
                        <el-submenu index="30">
                            <template slot="title" ><i class="el-icon-data-analysis"></i>内容</template>
                            <el-menu-item index="31">列表</el-menu-item>
                            <el-menu-item index="32">话术</el-menu-item>
                            <el-menu-item index="33">留言</el-menu-item>
                        </el-submenu>

                        <el-submenu index="34">
                            <template slot="title" ><i class="el-icon-ice-cream-square"></i>装修</template>
                            <el-menu-item index="35">列表</el-menu-item>
                            <el-menu-item index="36">话术</el-menu-item>
                            <el-menu-item index="37">留言</el-menu-item>
                        </el-submenu>
                        <el-submenu index="38">
                            <template slot="title" ><i class="el-icon-s-shop"></i>应用</template>
                            <el-menu-item index="39">列表</el-menu-item>
                            <el-menu-item index="40">话术</el-menu-item>
                            <el-menu-item index="41">留言</el-menu-item>
                        </el-submenu>
                        <el-submenu index="42">
                            <template slot="title" ><i class="el-icon-s-tools"></i>设置</template>
                            <el-menu-item index="43">列表</el-menu-item>
                            <el-menu-item index="44">话术</el-menu-item>
                            <el-menu-item index="45">留言</el-menu-item>
                        </el-submenu>
                        <el-submenu index="46">
                            <template slot="title" ><i class="el-icon-scissors"></i>维护</template>
                            <el-menu-item index="47">列表</el-menu-item>
                            <el-menu-item index="48">话术</el-menu-item>
                            <el-menu-item index="49">留言</el-menu-item>
                        </el-submenu>
                        
                    </el-menu>
                
                
                
                
                
                
                
                
                
                </el-aside>
                <!-- 右边 内容-->
                <el-container style="background-color:white;height: 100vh;">
                    
                    
                    
                    
                    <!-- 顶部 -->
                    <el-header style="background-color:white">
                        <div style="display: flex;">
                            <div style="padding-top: 20px;">
                                <i class="el-icon-s-fold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
                                <i class="el-icon-refresh-right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
                                <i class="el-icon-tickets">&nbsp;&nbsp;客服 &nbsp;&nbsp;/ <span style="font-weight:bold">客服列表</span></i>
                            </div>

                            <div style="padding-top: 15px;padding-left: 580px;">

                                
                                <el-input size="mini" placeholder="菜单搜索" v-model="MenuSearch" ></el-input>
                                
                                
                            </div>
                            <div  style="padding-top: 18px;padding-left: 20px;">
                                <i class="el-icon-bell">&nbsp;&nbsp;&nbsp;</i>
                                <i class="el-icon-notebook-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.$route.params.key}}</i>
                            </div>
                        </div>
                        
                    
                    </el-header>
                    
                    
                    
                    
                    
                    <!-- 中间(客服添加和显示信息) -->
                    
                    <el-main style="background-color:#f8f9fb">
                        

                        <div style="
                            width: 1300;
                            height: 60px;
                            margin-left: -24px;
                            margin-right: -19px;
                            margin-bottom: 20px;
                            background-color: white;
                            
                            ">
                            <h1 style="
                                padding-top: 15px;
                                padding-left: 60px;
                                    
                                ">
                                客服管理
                            </h1>
                            
                            
                            
                        </div>
                        <!-- 按钮 -->
                        <div style="
                            width: 1183.33;
                            height: 70px;
                            margin-bottom: -9px;
                            background-color: white;
                            
                            ">
                        </div>
                        <div>
                            <div style="
                                margin-top: -48px;
                                margin-left: 10px;
                                ">
                                <el-button 
                                    style="background-color:#2e8df3;
                                            color:white
                                            width:200px
                                            " 
                                        @click="changedialog"
                                        type="primary" 
                                        >
                                        +添加客服
                                </el-button>
                            </div>
                            
                        </div>
                        
                        <div style="margin:0  0 10px 0">
                            



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




                        <div>
                            <el-table :data="list">
                                <el-table-column label="ID" prop="id" width=60px></el-table-column>
                                <el-table-column label="微信用户名称" prop="name" width=200px></el-table-column>
                                        
                                <el-table-column label="客服头像" prop="touxiang" width=120px>
                                    <template slot-scope="scope">
                                        <img :src="scope.row.touxiang" style="width:60px;height:60px;border-radius:100%"/>
                                    </template>
                                </el-table-column>

                                <el-table-column label="客服名称" prop="kfname" width=200px></el-table-column>

                                <el-table-column label="客服状态" width=200px>
                                    <template slot-scope="scope">
                                        <el-switch
                                            class="switch"
                                            :width=60
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
                                        <el-button type="text" style="color:#338ef2">编辑</el-button>
                                        <span> | </span>
                                        <el-button type="text" style="color:#338ef2" @click="del(scope.$index)">删除</el-button>
                                        <span> | </span>
                                        <el-button type="text" style="color:#338ef2;width:60px;height:30px">进入工作台</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                    </el-main>

                    <div style="width=1200px;height:60px;background-color:#f6f7fa;text-align:center;">
                        <div style="margin:2px auto">
                            <a href="#">官网&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                            <a  href="#">社区&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                            <a  href="#">文档</a>
                            <p style="font-size:12px">Copyight@2012-2022CRME-BZ v4.6.0</p>
                        </div>
                    </div>
                </el-container>
                

            </el-container>
            
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
                    {switch:1,id:6,name:"煦炎",touxiang:"https://tse1-mm.cn.bing.net/th/id/OIP-C.owpbNjuu23xkyc4yrX9BDQHaEo?pid=ImgDet&rs=1",kfname:"dfg",tjtiem:"2002-02-02"},
                    {switch:1,id:7,name:"煦炎",touxiang:"https://tse1-mm.cn.bing.net/th/id/OIP-C.owpbNjuu23xkyc4yrX9BDQHaEo?pid=ImgDet&rs=1",kfname:"dfg",tjtiem:"2002-02-02"},
                    {switch:1,id:8,name:"煦炎",touxiang:"https://tse1-mm.cn.bing.net/th/id/OIP-C.owpbNjuu23xkyc4yrX9BDQHaEo?pid=ImgDet&rs=1",kfname:"dfg",tjtiem:"2002-02-02"},
                    {switch:1,id:9,name:"煦炎",touxiang:"https://tse1-mm.cn.bing.net/th/id/OIP-C.owpbNjuu23xkyc4yrX9BDQHaEo?pid=ImgDet&rs=1",kfname:"dfg",tjtiem:"2002-02-02"},
                    {switch:1,id:10,name:"煦炎",touxiang:"https://tse1-mm.cn.bing.net/th/id/OIP-C.owpbNjuu23xkyc4yrX9BDQHaEo?pid=ImgDet&rs=1",kfname:"dfg",tjtiem:"2002-02-02"},
                    
                ],
                showdialog:false,    
                MenuSearch:'',
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
            // 删除单个行
            del(i){
                    this.list.splice(i,1)
                }



            
        },
        
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


/* //父级的类名 */
    .el-submenu_title /deep/ :hover{
        background-color: #01152b !important; 
    }
    a{
        text-decoration:none;
        color:#000000;
        font-size: 12px;
    }
</style>