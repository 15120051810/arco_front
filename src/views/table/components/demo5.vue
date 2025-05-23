<template>
    <!-- 只要a-table里面有注释，表格就不会自动显示了 -->
    <!-- <a-table :columns="columns" :data="mergedData" span-all :pagination="false" :span-method="dataSpanMethod"
        :bordered="{ wrapper: true, cell: true }">
    </a-table> -->


    <!-- 压根不起作用 -->
    <!-- <template #cell="{ column, record,rowIndex }">
            <span v-if="column.dataIndex === 'dname'" @click="onClick">
                1111
            </span>
            <span v-else>
                    {{ record[column.dataIndex]?.toLocaleString() }}
            </span>
        </template> -->


    <!-- 只能渲染td样式,不能修改td的内容 -->
    <!-- <template #td="{ column, record, rowIndex }">
            <td v-if="column.dataIndex === 'pname'" 
                @click="onClick"
                style="background-color: aqua;"
                >
                <span> 1111</span>
            </td>

            <td v-else>
                <span>
                    {{ record[column.dataIndex]?.toLocaleString() + '11111' }}
                </span>
            </td>
        </template> -->


    <!-- 只能渲染td,不能修改td的内容 -->
    <!-- <template #tr="{ record, rowIndex }">
            <tr v-if="rowIndex === 4" 
                @click="onClick"
                style="background-color: aqua;"
                >
                <span> 1111</span>
            </tr>
            <tr v-else style="">
            </tr>
        </template> -->




    <a-table :columns="columns" 
        :data="mergedData" 
        span-all 
        :pagination="false" 
        :span-method="dataSpanMethod"
        :row-class="rowClassName"
        :bordered="{ wrapper: true, cell: true }">

        <template #columns>
            <a-table-column title="药品类型" data-index="dname"></a-table-column>
            <a-table-column title="患者类型" data-index="shop"></a-table-column>
            <a-table-column title="患者类型" data-index="pname">
            </a-table-column>

            <a-table-column title="药品销售数据">
                <a-table-column title="动销SKU数" data-index="dx">
                    <template #cell="{ column, record, rowIndex }">
                        <span>
                            {{ Number(record[column.dataIndex])?.toLocaleString() }}
                        </span>
                    </template>

                </a-table-column>
                <a-table-column title="患者数" data-index="hzs"></a-table-column>
                <a-table-column title="销量" data-index="xl"></a-table-column>
            </a-table-column>


            <!-- <a-table-column title="Optional">
                <template #cell="{ record }">
                    <a-button @click="$modal.info({ title: 'Name', content: record.name })">view</a-button>
                </template>
            </a-table-column> -->
        </template>

    </a-table>

</template>

<script setup>
import { ref, computed } from 'vue';

const mergedData = ref([
    { dname: 'DTP',shop: 'DTP', pname: 'NP', dx: '100' },
    { dname: 'DTP',shop: 'a', pname: 'OP', dx: '200' },
    { dname: 'DTP',shop: 'DTP', pname: 'DP', dx: '300' },
    { dname: 'DTP',shop: 'DTP', pname: '合计', dx: '300000' },
    { dname: '医务品',shop: 'DTP', pname: 'NP', dx: '100' },
    { dname: '医务品',shop: 'DTP', pname: 'OP', dx: '100' },
    { dname: '医务品',shop: 'DTP', pname: 'DP', dx: '100' },
    { dname: '医务品',shop: 'DTP', pname: '合计', dx: '100000' },

]);

const rowClassName = (record, index) => {
  // 指定需要高亮显示的行索引
  console.log('record',record,index)
  const highlightedRows = [3, 7]; // 行索引从 0 开始，所以第 5 行和第 9 行的索引是 4 和 8
  // 检查当前行索引是否在指定数组中
  return highlightedRows.includes(index) ? 'highlight-row' : '';
};

const onClick = () => {
    alert(111)
}

const columns = ref([
    {
        title: '药品类型',
        dataIndex: 'dname',
        fixed: 'left',
        width: 140,
    },

    {
        title: '患者类型',
        dataIndex: 'pname',
        fixed: 'left',
        width: 140,
    },
    {
        title: '药品销售数据',
        children: [
            { title: '动销SKU数', dataIndex: 'dx' },
            { title: '患者数', dataIndex: 'hzs' },
            { title: '销量', dataIndex: 'xl' },
            { title: '销售额', dataIndex: '患者数' },
            { title: '毛利额', dataIndex: '患者数' },
            { title: '毛利率', dataIndex: '患者数' },
            { title: '平均单价', dataIndex: '患者数' },
        ]
    }
]);

const mergerItems = [
    {
        columnIndex: 0,
        spanArr: [],
        pos: 0,
        prop: 'dname'
    },
    {
        columnIndex: 1,
        spanArr: [],
        pos: 0,
        prop: 'shop'
    }]


const dataSpanMethod = ({ record, column, rowIndex, columnIndex }) => {//表格合并的方法

    if (columnIndex === 0 || columnIndex === 1) {//这里判断第几列需要合并


        let item = mergerItems.find(item => item.columnIndex === columnIndex)

        console.log('处理', rowIndex, columnIndex, item)

        const _row = item.spanArr[rowIndex];
        const _col = _row > 0 ? 1 : 0;

        console.log('合并', _row, _col)
        return {
            rowspan: _row,
            colspan: _col,
        }
    }
}


const getSpanArr = (data, array) => {//循环数据处理

    // console.log('data',data )
    // console.log('array',array )

    for (let n = 0; n < array.length; n++) {
        array[n].spanArr = []//数据清空(重新调此方法的时候需要清空上一次的数据)
        for (let i = 0; i < data.length; i++) {
            if (i === 0) {
                array[n].spanArr.push(1);
                array[n].pos = 0;
                // console.log('array', i, array)
            } else {
                // 判断当前元素与上一个元素是否相同
                if (data[i][array[n].prop] === data[i - 1][array[n].prop]) {
                    array[n].spanArr[array[n].pos] += 1;
                    array[n].spanArr.push(0);
                } else {
                    array[n].spanArr.push(1);
                    array[n].pos = i;
                }
            }
        }
    }

    console.log('处理完', array)
    console.log('处理完mergerItems', mergerItems)

}

getSpanArr(mergedData.value, mergerItems)

// const mergedData = computed(() => {
//     const result = [];
//     let currentCity = '';
//     let cityRowSpan = 0;
//     let cityStartIndex = 0;

//     data.value.forEach((record, index) => {
//         if (record.city !== currentCity) {
//             if (cityRowSpan > 0) {
//                 result[cityStartIndex].cityRowSpan = cityRowSpan;
//                 result.push({
//                     key: `summary-${currentCity}`,
//                     city: '',
//                     name: `Summary of ${currentCity}`,
//                     age: 'Summary Age',
//                     address: 'Summary Address',
//                     isSummary: true,
//                 });
//             }
//             currentCity = record.city;
//             cityStartIndex = result.length;
//             cityRowSpan = 1;
//             result.push({ ...record, cityRowSpan: 1 });
//         } else {
//             cityRowSpan++;
//             result.push({ ...record, cityRowSpan: 0 });
//         }
//     });

//     if (cityRowSpan > 0) {
//         result[cityStartIndex].cityRowSpan = cityRowSpan;
//         result.push({
//             key: `summary-${currentCity}`,
//             city: '',
//             name: `Summary of ${currentCity}`,
//             age: 'Summary Age',
//             address: 'Summary Address',
//             isSummary: true,
//         });
//     }

//     return result;
// });

// columns.value = columns.value.map(column => {
//     if (column.dataIndex === 'city') {
//         column.customCell = (record, rowIndex) => {
//             if (record.isSummary) {
//                 return { colSpan: 0 };
//             }
//             return { rowSpan: record.cityRowSpan };
//         };
//     } else if (column.dataIndex === 'name' || column.dataIndex === 'age' || column.dataIndex === 'address') {
//         column.customCell = (record, rowIndex) => {
//             if (record.isSummary) {
//                 return { colSpan: 3 };
//             }
//             return {};
//         };
//     }
//     return column;
// });
</script>


<style>
/* 设置红色背景的 CSS 类 */
.highlight-row  {
  background-color: red;
  color: white; /* 确保文本可读 */
}

/* 设置高亮文字的 CSS 类 */
.highlight-row span {
  font-weight: bold; /* 例如，将文字加粗 */
  color:  red; /* 或者设置文字颜色为蓝色 */
}
</style>