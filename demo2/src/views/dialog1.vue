<template>
    <div style="margin:0 auto;width:600px" >
        <div>
            <h3>dialog弹窗</h3>
            <!-- :visible	是否显示 Dialog，支持 .sync 修饰符 -->
            <el-button @click="changedialog">显示弹窗1</el-button>
            <el-dialog title="普通的弹窗" :visible="showdialog" @close="hidedialog"> </el-dialog>

            <!-- .sync修饰符（不需要写关闭函数） -->
            <!-- :fullscreen	是否为全屏 Dialog -->
            <!-- :modal	是否需要遮罩层 -->
            <!-- lock-scroll	是否在 Dialog 出现时将 body 滚动锁定	boolean(必须有遮罩层) -->
            <!-- 不带冒号解析为字符串 -->

            <el-button @click="changedialogtwo">显示弹窗2</el-button>
            <el-dialog 
                :lock-scroll="true"  
                title="带有修饰付的弹窗" 
                :visible.sync="showdialogtwo"
                width="600px" 
                :fullscreen="fullscreen"
                > 
                <div slot="title">
                    <div class="title">这是插槽的标题</div>
                </div>
                <div>
                    <el-button @click="fullscreen=!fullscreen">切换全屏</el-button>
                </div>
                <div slot="footer">
                    <el-button @click="showdialogtwo=!showdialogtwo">取消</el-button>
                </div>
                
            </el-dialog>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            showdialog:false,
            showdialogtwo:false,
            fullscreen:false,
        }
    },
    methods:{
        changedialog(){
            this.showdialog = true;
        },
        hidedialog(){
            this.showdialog = false;
        },
        changedialogtwo(){
            this.showdialogtwo = true;
        },
        
    }
}
</script>

<style scoped>
    .title{
        color: red;
        font-size:20px;
        font-weight: bold;
    }
    h3{
        color: red;
        /* margin:10px; */
    }
    div{
        margin: 10px 0 0 0;
    }
</style>