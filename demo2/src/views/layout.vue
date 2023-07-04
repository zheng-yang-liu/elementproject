<template>
    <div>
        <div>
            <!-- <div>xl 1920</div>
            <div>lg 1200</div>
            <div>md 992</div>
            <div>xs	768px</div>  -->
            <el-row>
                <!-- 想左移动个数 -->
                <el-col  :lg="3"  :md="3" :sm="6" :xs="8" >
                    <div style="height: 100px; background-color:rosybrown" >
                        <i class="el-icon-star-on"></i>
                    </div>
                </el-col>
                <el-col  :lg="3"  :md="3" :sm="6" :xs="8">
                    <div style="height: 100px; background-color:black" >
                        <i class="el-icon-star-on"></i>
                    </div>
                </el-col>

                <el-col  :lg="3"  :md="3" :sm="6" :xs="8">
                    <div style="height: 100px; background-color:green">
                        <i class="el-icon-star-on"></i>
                    </div>
                
                </el-col>

                <el-col  :lg="3"  :md="3" :sm="6" :xs="8">
                    <div style="height: 100px; background-color:red">
                        <i class="el-icon-star-on"></i>
                    </div>
                </el-col>

                <el-col  :lg="3"  :md="3" :sm="6" :xs="8">
                    <div style="height: 100px; background-color:yellowgreen">
                        <i class="el-icon-star-on"></i>
                    </div>
                
                </el-col>
                
                <el-col  :lg="3"  :md="3" :sm="6" :xs="8">
                    <div style="height: 100px; background-color:teal">
                        <i class="el-icon-star-on"></i>
                    </div>
                </el-col>
                <el-col  :lg="3"  :md="3" :sm="6" :xs="8">
                    <div style="height: 100px; background-color:wheat">
                        <i class="el-icon-star-on"></i>
                    </div>
                
                </el-col>
                
                <el-col  :lg="3"  :md="3" :sm="6" :xs="8">
                    <div style="height: 100px; background-color:olivedrab">
                        <i class="el-icon-star-on"></i>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>


    
</template>

<script>
    export default {
        
    }

</script>

<style scoped>


</style>