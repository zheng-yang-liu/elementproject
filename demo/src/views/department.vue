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

                        
                        <el-menu-item index="/" style="margin-left: 20px;">人才养成管理系统</el-menu-item>
                        
                        <el-menu-item index="/"><i class="el-icon-s-home"></i>首页</el-menu-item>
                        <el-submenu index="2">
                            <template slot="title" ><i class="el-icon-s-tools"></i>系统管理</template>
                            <el-menu-item index="department">部门管理</el-menu-item>
                            <el-menu-item index="department2">科室管理</el-menu-item>
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
                            <template slot="title" ><i class="el-icon-user-solid"></i>设置</template>
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
                            <div style="padding-top: 17px;">
                                <i class="el-icon-s-fold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
                            </div>
                            <div style="padding-top: 20px;">
                                <el-breadcrumb separator="/">
                                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item>系统管理</el-breadcrumb-item>
                                    <el-breadcrumb-item>部门管理</el-breadcrumb-item>
                                    
                                </el-breadcrumb>
                            </div>
                        </div>
                        
                    
                    </el-header>
                    
                    
                    
                    
                    
                    <!-- 中间(客服添加和显示信息) -->
                    
                    <el-main style="background-color:white">
                        <div style="margin-top: -20px;width:1183.33px;height:50px;background-color:white;display: flex;margin-left:-25px">
                            <div style="width:250px;height:50px;background-color:white">
                                <el-form :rules="rule" >
                                    <el-form-item label="部门名称"  label-width="90px" >
                                        <el-input size="mini" v-model="sousuo" placeholder="请输入部门名称"></el-input>
                                    </el-form-item>
                                </el-form>
                            </div>
                            <div style="width:200px;height:50px;background-color:white">
                                <el-button 
                                    type="primary" 
                                    icon="el-icon-search" 
                                    style="margin-top: 4px;margin-left: 10px;" 
                                    size="small"
                                    >搜索
                                </el-button>
                                    <el-button size="small" icon="el-icon-refresh" >重置</el-button>
                            </div>
                        </div>
                        
                        


                        <!-- 按钮 -->
                        
                        
                            <div >
                                <el-button 
                                    @click="changedialog" 
                                    size="mini" 
                                    type="primary" 
                                    plain
                                    icon="el-icon-plus"
                                    >
                                    新增
                                </el-button>
                                <el-button size="mini" type="danger" plain icon="el-icon-delete" @click="del2()">删除</el-button>
                                <el-button size="mini" type="info" plain icon="el-icon-download">导入</el-button>
                                <el-button size="mini" type="warning" plain icon="el-icon-upload2">导出</el-button>
                                
                                
                            </div>
                            
                        
                        
                        <div style="margin:0  0 10px 0">
                            



                            <el-dialog title="新增部门管理" :visible.sync="showdialog"> 
                                <el-form ref="form" :model="form" :rules="rule"   >
                                    <el-form-item 
                                        label="部门ID" 
                                        prop="id" 
                                        label-width="100px" 
                                        
                                        >
                                        <el-input 
                                            v-model="form.id" 
                                            placeholder="请输入部门ID" 
                                            >
                                        </el-input>
                                    </el-form-item>

                                    <el-form-item 
                                        label="部门名称" 
                                        prop="name" 
                                        label-width="100px" 
                                        
                                        >
                                        <el-input 
                                            v-model="form.name" 
                                            placeholder="请输入部门名称" 
                                            >
                                        </el-input>
                                    </el-form-item>

                                    <el-form-item 
                                        label="现地" 
                                        prop="dizhi" 
                                        label-width="100px" 
                                        
                                        >
                                        <el-input 
                                            v-model="form.dizhi" 
                                            placeholder="请输入现地" 
                                            >
                                        </el-input>
                                    </el-form-item>


                                    <el-form-item 
                                        label="备注" 
                                        prop="beizhu" 
                                        label-width="100px" 
                                        
                                        >
                                        <el-input 
                                            v-model="form.beizhu" 
                                            placeholder="备注" 
                                            type="textarea"
                                            :rows="2"
                                            >
                                        </el-input>
                                    </el-form-item>

                                    <el-form-item 
                                        label="部门管理者" 
                                        prop="bmname" 
                                        label-width="100px" 
                                        
                                        >
                                        <template>
                                            <el-select 
                                                v-model="form.bmname" 
                                                style="width: 100%;" 
                                                
                                                :multiple-limit="1" 
                                                placeholder="请选择选择部门管理者"> 
                                            <el-option v-for="(item,index) in bmlist" :value="item.name" :label="item.name"></el-option>
                                        </el-select>
                                        </template>
                                    </el-form-item>

                                    
                                    
                                    <el-form-item prop="bmzt"  label="客服状态" label-width="100px">
                                        <template>
                                            <el-radio-group v-model="form.bmzt">
                                                <el-radio label="正常">正常</el-radio>
                                                <el-radio label="关闭">关闭</el-radio>
                                            </el-radio-group>
                                        </template>
                                    
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
                            <el-table 
                                
                                :data="list.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                                header-cell-style="background-color:#f8f6f8;text-align:center" 
                                :header-cell-style="{'background-color':'#f8f6f8','text-align':'center'}" 
                                
                                :cell-style="{'text-align':'center'}"
                                >

                                <el-table-column  label="部门ID" prop="id"   ></el-table-column>
                                <el-table-column label="部门名称" prop="name"   ></el-table-column>
                                        
                                

                                <el-table-column label="现地" prop="dizhi"   ></el-table-column>
                                <el-table-column label="部门负责人" prop="bmname"   ></el-table-column>
                                <el-table-column label="备注" prop="beizhu"   ></el-table-column>

                                <el-table-column label="部门状态" prop="bmzt"   ></el-table-column>
                                
                                
                                <el-table-column label="操作" >
                                    <!-- 插槽 (按钮)-->
                                    <template slot-scope="scope">
                                        <el-button type="text" style="color:#338ef2" icon="el-icon-edit">修改</el-button>
                                        
                                        <el-button type="text" style="color:#338ef2" @click="del(scope.$index)" icon="el-icon-delete">删除</el-button>
                                        
                                    
                                    </template>
                                </el-table-column>

                            </el-table>
                            <!-- 分页器 -->
                            <div style="width:450px;height: 35px;background-color: white;margin:15px 0 0  700px">
                                <el-pagination  
                                @size-change="handleSizeChange" 
                                @current-change="handleCurrentChange" 
                                :current-page="currentPage" 
                                :page-sizes="[4,8,100,400]" 
                                :page-size="pageSize" 
                                layout="total, sizes, prev, pager, next, jumper" 
                                :total="list.length">
                                </el-pagination>
                            </div>

                            
                        </div>
                    </el-main>
                



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
                    {id:180121141,name:"UI设计部",dizhi:"B6",bmname:"刘部长",beizhu:"123",bmzt:"正常"},
                    {id:180121142,name:"CF技术部",dizhi:"B6",bmname:"王部长",beizhu:"",bmzt:"正常"},
                    {id:180121143,name:"UI设计部",dizhi:"B6",bmname:"张部长",beizhu:"",bmzt:"正常"},
                    {id:180121144,name:"Call技术部",dizhi:"B6",bmname:"李部长",beizhu:"",bmzt:"正常"},
                    {id:180121146,name:"Call技术部",dizhi:"B6",bmname:"赵部长",beizhu:"",bmzt:"关闭"},
                    {id:180121147,name:"Call技术部",dizhi:"B6",bmname:"赵部长",beizhu:"",bmzt:"关闭"},
                    {id:180121148,name:"Call技术部",dizhi:"B6",bmname:"赵部长",beizhu:"",bmzt:"关闭"},
                    {id:180121149,name:"Call技术部",dizhi:"B6",bmname:"赵部长",beizhu:"",bmzt:"关闭"},
                    {id:180121150,name:"Call技术部",dizhi:"B6",bmname:"赵部长",beizhu:"",bmzt:"关闭"},
                    {id:180121151,name:"CF技术部",dizhi:"B6",bmname:"赵部长",beizhu:"",bmzt:"关闭"},
                    
                    
                ],
                bmlist:[
                    {id:1,name:"张三"},
                    {id:2,name:"张三2"},
                    {id:3,name:"张三3"},
                    {id:4,name:"张三4"},
                    {id:5,name:"张三5"},
                    {id:6,name:"张三6"},
                    {id:7,name:"张三7"},
                    {id:8,name:"张三8"}
                ],
                sousuo:"",
                showdialog:false,    
                MenuSearch:'',
                value:true,
                value2:false,
                value3:false,
                form:{id:"",name:"",dizhi:"",bmname:"",beizhu:"",bmzt:"正常"},

                rule:{
                        //键名：键值
                        // model的贱名：验证
                        //必填
                        id:[{required:true,message:'请输入部门ID'},],
                        name:[{required:true,message:'请输入部门名称'}],
                },
                //分页数据
                currentPage: 1, // 当前页码
                pageSize: 4 // 每页的数据条数
                
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
                            
                            var bm= {id:this.form.id,name:this.form.name,dizhi:this.form.dizhi,bmname:this.form.bmname,beizhu:this.form.beizhu,bmzt:this.form.bmzt}
                            this.list.push(bm);
                            this.form.id=""
                            this.form.name=""
                            this.form.dizhi=""
                            this.form.bmname=""
                            this.form.beizhu=""
                            this.form.bmzt="正常"
                            this.$message.success("填写成功")

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
            },
            
            //删除全部数组
            del2(){
                this.list.splice(0,this.list.length);
                
            },
            //删除不需要搜索的内容

            //分页
             //每页条数改变时触发 选择一页显示多少行
                handleSizeChange(val) {
                    console.log(`每页 ${val} 条`);
                    this.currentPage = 1;
                    this.pageSize = val;
                },
                //当前页改变时触发 跳转其他页
                handleCurrentChange(val) {
                    console.log(`当前页: ${val}`);
                    this.currentPage = val;
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