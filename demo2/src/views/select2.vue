<template>
	<div style="width: 600px;margin: 0 auto;">
		<div>
			<h3>radio:单选框</h3>
			<el-radio v-model="radio" label="读书">读书</el-radio>
			<el-radio v-model="radio" label="写字" :border="true">写字</el-radio>
			<el-radio v-model="radio" label="画画" :disabled="true">画画</el-radio>
			<div>选择的值：{{radio}}</div>
			<div>单选框组</div>
			<el-radio-group v-model="radiotwo">
				<el-radio label="读书">读书</el-radio>
				<el-radio label="写字" :border="true">写字</el-radio>
				<el-radio label="画画" >画画</el-radio>
			</el-radio-group>
			<div>选择的值:{{radiotwo}}</div>
			<div>单选框组的按钮形式</div>
			<el-radio-group v-model="radiotwo" text-color="red" fill="yellow">
				<el-radio-button label="读书">读书</el-radio-button>
				<el-radio-button label="写字">写字</el-radio-button>
				<el-radio-button label="画画" >画画</el-radio-button>
			</el-radio-group>
		</div>

		<div>
			<h3>select:选项框</h3>
			<!-- clearable	是否可以清空选项 -->
            <!-- filterable	是否可搜索 -->
            <!-- allow-create	是否允许用户创建新条目，需配合 filterable 使用 -->
            <!-- :value 提交的值 -->
            <!-- :label 显示的值-->
			<el-select v-model="select" :clearable="true" :filterable="true" :allow-create="true" @change="changevalue">
				<el-option value="选项的值" label="显示的值"></el-option>
				<el-option value="选项的值1" label="显示的值1"></el-option>
				<el-option value="选项的值2" label="显示的值2"></el-option>
				<el-option value="选项的值3" label="显示的值3"></el-option>
			</el-select>
			<div>输出绑定的值：{{select}}</div>

			<h4>select:多选</h4>
			<!-- multiple	是否多选 -->
            <!-- collapse-tags	多选时是否将选中值按文字的形式展示 -->
            <!-- multiple-limit	多选时用户最多可以选择的项目数，为 0 则不限制 -->
			<el-select v-model="selecttwo" style="width: 100%;" :multiple="true" :multiple-limit="3">
				<el-option value="选项的值" label="显示的值"></el-option>
				<el-option value="选项的值1" label="显示的值1"></el-option>
				<el-option value="选项的值2" label="显示的值2"></el-option>
				<el-option value="选项的值3" label="显示的值3"></el-option>
				<el-option value="跑步" label="跑步"></el-option>
			</el-select>
			<div>输出绑定的值：{{selecttwo}}</div>
			
			<h4>数据从数组中来</h4>
			<el-select v-model="selecttwo" style="width: 100%;" :multiple="true" :multiple-limit="3">
				<el-option v-for="(item,index) in list" :value="item.id" :label="item.name"></el-option>
			</el-select>
			
			
			<h4>分组1</h4>
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
			<h4>分组2(函数中的数据)</h4>
			<div>选择最美城市</div>
			<el-select v-model="selecttwo" style="width: 100%;" :multiple="true" :multiple-limit="3">
				<el-option-group v-for="item in listtwo" :label="item.name">
					<el-option v-for="value in item.child" :value="value.id" :label="value.name"></el-option>
				</el-option-group>
			</el-select>
			<h4>嵌套循环</h4>
			<div>选择最美城市</div>
			<el-select v-model="selecttwo" style="width: 100%;" :multiple="true" :multiple-limit="3">
				<el-option-group v-for="item in listthree" :label="item.name">
					<el-option v-for="value in listfour" :value="value.id" :label="value.name" v-if="item.id==value.pid"></el-option>
				</el-option-group>
			</el-select>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				radio:"",
				radiotwo:"",
				select:"",
				selecttwo:[],
				list:[
					{id:1,name:"张三"},
					{id:2,name:"张三2"},
					{id:3,name:"张三3"},
					{id:4,name:"张三4"},
					{id:5,name:"张三5"},
					{id:6,name:"张三6"},
					{id:7,name:"张三7"},
					{id:8,name:"张三8"}
				],
				listtwo:[
					{id:1,name:"河北省",child:[
						{id:11,name:"保定市"},
						{id:12,name:"石家庄市"}
					]},
					{id:2,name:"河南省",child:[
						{id:21,name:"郑州市"},
						{id:22,name:"洛阳市"}
					]},
					{id:3,name:"山东省",child:[
						{id:31,name:"济南市"},
						{id:32,name:"青岛市"}
					]},
					{id:4,name:"山西省",child:[
						{id:41,name:"太原市"},
						{id:42,name:"大同市"}
					]},
					{id:5,name:"北京市",child:[
						{id:51,name:"海淀区"},
						{id:52,name:"朝阳区"}
					]}
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
		},
		methods:{
			changevalue(){
				console.log("select的选项的值发生了改变");
				console.log(this.select);
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