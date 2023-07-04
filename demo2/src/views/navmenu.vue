<template>
    <div style="margin:0 auto;width:600px">
        <div>
            <h3>导航菜单</h3>
            <h4>横排显示</h4>
            <!-- mode	模式 -->
            <el-menu mode="horizontal">
                <el-menu-item>首页</el-menu-item>
                <el-menu-item>订单管理</el-menu-item>
            </el-menu>
        </div>
        <div>
            <h4>竖排显示</h4>
            <!-- mode	模式 -->
            <el-menu style="width:300px">
                <el-menu-item>首页</el-menu-item>
                <el-menu-item>订单管理</el-menu-item>
            </el-menu>
        </div>
        <div>
            <h3>多级导航</h3>
            <!-- :router="true"跳转 -->
            <!-- :unique-opened="true"只显示一个下拉导航 -->
            <el-menu 
                background-color="#000" 
                text-color="red" 
                active-text-color="#fff"
                :unique-opened="true"
                :router="true"
                >
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="time">订单管理</el-menu-item>
                <el-submenu index="3">
                    <template slot="title" >客服管理</template>
                    <el-menu-item index="4">列表</el-menu-item>
                    <el-menu-item index="5">话术</el-menu-item>
                    <el-menu-item index="6">留言</el-menu-item>
                </el-submenu>
                <el-submenu index="7">
                    <template slot="title" >客服管理</template>
                    <el-menu-item index="8">列表</el-menu-item>
                    <el-menu-item index="9">话术</el-menu-item>
                    <el-menu-item index="10">留言</el-menu-item>
                </el-submenu>
                
            </el-menu>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>