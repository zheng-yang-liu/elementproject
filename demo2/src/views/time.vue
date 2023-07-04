<template>
    <div style="margin:0 auto;width:600px">
    
        <div>
            <h3>TimePicker 时间选择器</h3>
            <h4>固定时间点</h4>
            <el-time-select 
                v-model="onetime" 
                :picker-options="{start:'09:00',end:'18:00',step:'01:00',minTime:'12:00'}">
            </el-time-select>
            <div>当前时间:{{ onetime }}</div>
        </div>
        <div>
            <h4>选择开始时间和结束时间</h4>
            <el-time-select 
                placeholder="请选择开始时间"
                v-model="syarttime" 
                :picker-options="{start:'09:00',end:'18:00',step:'01:00',maxTime:endtime}"
                >
            </el-time-select>

            <el-time-select 
                placeholder="请选择结束时间"
                v-model="endtime" 
                :picker-options="{start:'09:00',end:'18:00',step:'01:00',minTime:syarttime}"
                >
            </el-time-select>
            <div>选择的时间间距{{ syarttime }}到{{ endtime }}</div>
        </div>

        <div>
            <h3>任意时间选择</h3>
            <!-- value-format	可选，绑定值的格式。不指定则绑定值为 Date 对象 -->
            <!-- selectableRange	可选时间段，例如'18:30:00 - 20:30:00'或者传入数组['09:30:00 - 12:00:00', '14:30:00 - 18:30:00'] -->
            <el-time-picker
                v-model="twotime"
                value-format="HH时mm分ss秒"
                >
            </el-time-picker>
            <div>选择的时间为:{{ twotime }}</div>
            <h4>时间区间选择</h4>
            <!-- placeholder	非范围选择时的占位内容	string	—	— -->
            <!-- start-placeholder	范围选择时开始日期的占位内容	string	—	— -->
            <!-- end-placeholder	范围选择时开始日期的占位内容  -->
            <!-- range-separator="至" 连接符 -->
            <!-- :arrow-control	是否使用箭头进行时间选择，仅对<el-time-picker>有效 -->
            <el-time-picker
                v-model="threetime"
                :is-range="true"
                range-separator="至"
                start-placeholder="请选择结束时间"
                end-placeholder="请选择结束时间"
                value-format="HH:mm:ss"
                >
            </el-time-picker>
                <div>{{ threetime }}</div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                onetime:"",
                syarttime:'',
                endtime:'',
                twotime:'',
                threetime:["12:00:00","15:00:00"]
            }
        }
    }
    
</script>

<style scoped>
    h3{
        color: red;
    }
</style>