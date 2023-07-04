<template>
    <div style="margin:0 auto;width:600px" class="d"> 
        <div>
            <h3>表格</h3>
            <h4>有表头表格</h4>
            <!-- :data属性 -->
            <!-- 高度（height）(如果表头固定式只能这样设置)
            height="calc(100vh - 100px)"使用运算值
            -->
            <!-- max-height最大高度min-height最小高度 
            没有超过最大高度时按实际高度显示

            -->
            <!-- 是否为斑马纹 :stripe -->
            <!-- :border	是否带有纵向边框 -->
            <!-- :show-header	是否显示表头 -->
            <el-table :data="list" height="400px" :stripe="true" :border="true">
                <el-table-column label="编号" prop="id"></el-table-column>
                <el-table-column label="姓名" prop="name"></el-table-column>
                <el-table-column label="性别" prop="sex"></el-table-column>
                <el-table-column label="年龄" prop="age"></el-table-column>
            </el-table>
            
        </div>
        
        <div>
        <h4>无表头表格</h4>
            <el-table :data="list" height="400px" :stripe="true" :border="true" :show-header="false">
                <el-table-column label="编号" prop="id"></el-table-column>
                <el-table-column label="姓名" prop="name"></el-table-column>
                <el-table-column label="性别" prop="sex"></el-table-column>
                <el-table-column label="年龄" prop="age"></el-table-column>
            </el-table>
        </div>
        
        
        
        
        <div>
            <h3>样式</h3>
            <!-- row-class-name	行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。 -->
            <h4>css 获取样式</h4>
            <el-table :data="list" row-class-name="bg">
                <el-table-column label="编号" prop="id"></el-table-column>
                <el-table-column label="姓名" prop="name"></el-table-column>
                <el-table-column label="性别" prop="sex"></el-table-column>
                <el-table-column label="年龄" prop="age"></el-table-column>
            </el-table>
        </div>
        <div>
            <h4>函数方式获取样式</h4>
            <!-- 函数方式 -->
            <el-table :data="list" :row-class-name="setbg">
                <el-table-column label="编号" prop="id"></el-table-column>
                <el-table-column label="姓名" prop="name"></el-table-column>
                <el-table-column label="性别" prop="sex"></el-table-column>
                <el-table-column label="年龄" prop="age"></el-table-column>
            </el-table>
        </div>
        
        

        
        <div>
            <h3>自定义（固定列）</h3>
            <!-- fixed="left" -->
            <el-table :data="list">
                <el-table-column label="编号" prop="id" width="200px"></el-table-column>
                <el-table-column label="姓名" prop="name" width="200px" fixed="left"></el-table-column>
                <el-table-column label="性别" prop="sex" width="200px"></el-table-column>
                <el-table-column label="年龄" prop="age" width="200px"></el-table-column>
                <el-table-column label="编号" prop="id" width="200px"></el-table-column>
                <el-table-column label="性别" prop="sex" width="200px"></el-table-column>
                <el-table-column label="操作" width="200px" fixed="right"></el-table-column>
            </el-table>
        </div>
        
        
        <div>
            <h3>自定义(列模板按钮，开关，头像)</h3>
            <el-table :data="list">
                <el-table-column label="编号" prop="id" width="200px"></el-table-column>
                <el-table-column label="头像"  width="200px">
                    <template slot-scope="scope">
                        <img :src="scope.row.avatar" style="width:60px;height:60px;border-radius:100%"/>
                    </template>
                </el-table-column>
                <el-table-column label="姓名" prop="name" width="200px" ></el-table-column>
                <el-table-column label="性别" prop="sex" width="200px"></el-table-column>
                <el-table-column label="年龄" prop="age" width="200px"></el-table-column>
                <el-table-column label="状态" prop="status" width="200px">
                <!-- 插槽 -->
                <template slot-scope="scope">
                    <span v-if="scope.row.status=='在职'" style="color:red">{{ scope.row.status }}</span>
                    <span v-if="scope.row.status=='离职'" style="color:black">{{ scope.row.status }}</span>
                </template>
                </el-table-column>
                <el-table-column label="状态" prop="status" width="200px">
                <!-- 插槽 (按钮)-->
                <template slot-scope="scope">
                    <el-tag v-if="scope.row.status=='在职'" style="color:green">{{ scope.row.status }}</el-tag>
                        <el-tag v-if="scope.row.status=='离职'" style="color:red">{{ scope.row.status }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="200px">
                <!-- 插槽 (按钮)-->
                <template slot-scope="scope">
                    <el-button style="background-color:green">修改</el-button>
                    <el-button style="background-color:red">删除</el-button>
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
                {id:1,avatar:"https://cdn.pixabay.com/photo/2022/12/06/05/57/branch-7638340_1280.jpg",name:"张三",sex:"女",age:12,status:"在职"},
                {id:2,avatar:"https://cdn.pixabay.com/photo/2022/12/06/05/57/branch-7638340_1280.jpg",name:"李四",sex:"男",age:12,status:"在职"},
                {id:3,avatar:"https://cdn.pixabay.com/photo/2022/12/06/05/57/branch-7638340_1280.jpg",name:"王五",sex:"女",age:12,status:"在职"},
                {id:4,avatar:"https://cdn.pixabay.com/photo/2022/12/06/05/57/branch-7638340_1280.jpg",name:"赵六",sex:"男",age:12,status:"在职"},
                {id:5,avatar:"https://cdn.pixabay.com/photo/2022/12/06/05/57/branch-7638340_1280.jpg",name:"煦炎",sex:"女",age:12,status:"在职"},
                {id:6,avatar:"https://cdn.pixabay.com/photo/2022/12/06/05/57/branch-7638340_1280.jpg",name:"小明",sex:"男",age:12,status:"在职"},
                
                
            ]
        }
        
    },
    methods:{
        setbg({row,rowIndex}){
            //奇数行改变颜色（计算据数组从0开始）
            if(rowIndex%2 == 0){
                return "yellow";
            }
        }
    }
}
</script>

<style scoped>
    ::v-deep .bg{
        background-color: red !important;
        color: rgb(253, 253, 253);
    }
    :deep( .yellow){
        background-color: yellow !important;
    }
    h3{
        color: red;
        /* margin:10px; */
    }
    div{
        margin: 10px 0 0 0;
    }
</style>