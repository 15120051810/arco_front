<template>
    <a-card title="根据不同的选择，呈现不同的选择器">
        <div>
            <a-radio-group type="button" v-model="radioType" @change="radioChange">
                <a-radio value="before_yesterday">前天</a-radio>
                <a-radio value="yesterday">昨天</a-radio>
                <a-radio value="last_week">上周</a-radio>
                <a-radio value="this_week">本周</a-radio>
                <a-radio value="last_month">上月</a-radio>
                <a-radio value="this_month">本月</a-radio>
                <a-radio value="this_quarter">本季度</a-radio>
            </a-radio-group>

            <span v-if="['before_yesterday', 'yesterday'].includes(radioType)">
                <a-date-picker v-model="dateValue" :day-start-of-week="1" @change="(v) => onSelectd('day', v)"
                    :allow-clear="false" />
            </span>

            <span v-if="['this_week', 'last_week'].includes(radioType)">
                <a-week-picker :day-start-of-week="1" v-model="dateValue" @change="(v) => onSelectd('week', v)"
                    :allow-clear="false" />
            </span>


            <span v-if="['this_month', 'last_month'].includes(radioType)">
                <a-month-picker v-model="dateValue" @change="(v) => onSelectd('month', v)" :allow-clear="false"
                    value-format="YYYY-MM-DD" />
            </span>

            <span v-if="radioType === 'this_quarter'">
                <a-quarter-picker v-model="dateValue" @change="(v) => onSelectd('quarter', v)" :allow-clear="false"
                    value-format="YYYY-MM-DD" style="width: 200px;" />
            </span>
        </div>
    </a-card>

</template>

<script setup>
import { ref } from 'vue';
import dayjs from 'dayjs';
import { getIndexWeek, RadioDict } from '@/utils/date-handle.ts'

// 当前选择的 radio 类型
const radioType = ref('this_month'); // 默认选择日期范围

// 日期和时间范围的响应式数据
const dateValue = ref();
const singleDate = ref(null);
const dateTimeRange = ref([]);


const onSelectd = (radioType, dateStr) => {
    console.log(radioType, dateStr)
}

const radioChange = (v) => {
    console.log("日期tab改变", v)

    let fun = RadioDict[v]
    dateValue.value = fun()[0]
    console.log(v, '开始时间', dateValue.value)

}

</script>

<style scoped>
/* 添加样式以控制布局和间距 */
</style>