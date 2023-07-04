<template>
    <div style="margin:0 auto;width:600px">
        <div>
            <h3>select选择器</h3>
            <!-- clearable	是否可以清空选项 -->
            <!-- filterable	是否可搜索 -->
            <!-- allow-create	是否允许用户创建新条目，需配合 filterable 使用 -->
            <!-- :value 提交的值 -->
            <!-- :label 显示的值-->
            <el-select v-model="select" :clearable="true" :filterable="true" :allow-create="true" >
                <el-option value="选项的值1" label="显示的值1"></el-option>
                <el-option value="选项的值2" label="显示的值2"></el-option>
                <el-option value="选项的值3" label="显示的值3"></el-option>
            </el-select>
            <div>显示value的值:{{ select }}</div>
        </div>
        <div>
            <!-- multiple	是否多选 -->
            <!-- collapse-tags	多选时是否将选中值按文字的形式展示 -->
            <!-- multiple-limit	多选时用户最多可以选择的项目数，为 0 则不限制 -->
            <el-select :multiple-limit="2" style="width:300px" v-model="selecttwo" :multiple="true" >
                <el-option value="选项的值1" label="显示的值1"></el-option>
                <el-option value="选项的值2" label="显示的值2"></el-option>
                <el-option value="跑步" label="显示的值3"></el-option>
            </el-select>
            <div>显示value的值:{{ selecttwo }}</div>
            <h3>循环</h3>
            <el-select v-model="selecttwo" :multiple="true">
                <el-option v-for="(item,index) in list" :value="item.id" :label="item.name"  ></el-option>
            </el-select>
        </div>
        
        <div>
            <h3>分组</h3>
            <el-select style="width:300px" v-model="selecttwo" :multiple="true" >
                <el-option-group label="选项的值">
                    <el-option value="选项的值1" label="显示的值1"></el-option>
                    <el-option value="选项的值2" label="显示的值2"></el-option>
                    <el-option-group label="运动">
                        <el-option value="跑步" label="跑步"></el-option>
                        <el-option value="跑步" label="跳绳"></el-option>
                    </el-option-group>
                </el-option-group>
            </el-select>
        </div>
        
        <div>
            <h3>循环嵌套</h3>
            <div>选择最美城市</div>
            <!-- :value 提交的值 -->
            <el-select v-model="selecttwo" style="width: 100%;" :multiple="true" :multiple-limit="3">
                <el-option-group v-for="item in listtwo" :label="item.name">
                    <el-option v-for="value in item.chid" :value="value.id" :label="value.name"></el-option>
                </el-option-group>
            </el-select>


            <div>选择最美城市</div>
                <el-select v-model="selecttwo" style="width: 100%;" :multiple="true" :multiple-limit="3">
                    <el-option-group v-for="item in listthree" :label="item.name">
                        <el-option v-for="value in listfour" :value="value.id" :label="value.name" v-if="item.id == value.pid"></el-option>
                    </el-option-group>
                </el-select>
            
        </div>


    </div>
</template>

<script>
    export default{
        data(){
        return{
            select:'',
            selecttwo:[],
            list:[
                {id:1,name:"张三1"},
                {id:2,name:"张三2"},
                {id:3,name:"张三3"},
                {id:4,name:"张三4"},
                {id:5,name:"张三5"},
                {id:6,name:"张三6"},
                {id:7,name:"张三7"},
            ],
            listtwo:[
                {id:1,name:"河北省",chid:[
                    {id:11,name:"保定"},
                    {id:12,name:"石家庄"}
                ]},
                {id:2,name:"河南省",chid:[
                    {id:21,name:"保定"},
                    {id:22,name:"石家庄"}
                ]},
                {id:3,name:"北京市",chid:[
                    {id:31,name:"保定"},
                    {id:32,name:"石家庄"}
                ]},
                {id:4,name:"台湾省",chid:[
                    {id:41,name:"保定"},
                    {id:42,name:"石家庄"}
                ]},
            ],
            listthree:[
					{id:1,name:"河北省"},
					{id:2,name:"河南省"},
					{id:3,name:"山东省"},
					{id:4,name:"山西省"},
					{id:5,name:"北京市"}
			],
			listfour:[
					{id:11,name:"保定市",pid:1},
					{id:12,name:"石家庄市",pid:1},

					{id:21,name:"郑州市",pid:2},
					{id:22,name:"洛阳市",pid:2},

					{id:31,name:"济南市",pid:3},
					{id:32,name:"青岛市",pid:3},

					{id:41,name:"太原市",pid:4},
					{id:42,name:"大同市",pid:4},

                    {id:51,name:"朝阳",pid:5},
					{id:52,name:"海淀",pid:5}
			]
        }
    }
    }
    
</script>

<style scoped>
    h3{
        color: red;
        /* margin:10px; */
    }
    div{
        margin: 10px 0 0 0;
    }
</style>