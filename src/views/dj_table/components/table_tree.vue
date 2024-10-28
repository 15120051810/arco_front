<template>
    <a-space>
        <span>checkStrictly:</span>
        <a-switch v-model="rowSelection.checkStrictly" />
    </a-space>
    <a-table :columns="columns" :data="data" v-model:expandedKeys="expandedKeys" :row-selection="rowSelection" :default-expanded-keys="2" default-expand-all-rows
         style="margin-top: 20px" />
</template>

<script>
import { ref, reactive } from 'vue';

export default {
    setup() {
        const expandedKeys = ref([]);


        const rowSelection = reactive({
            type: 'checkbox',
            showCheckedAll: true,
            checkStrictly: true
        });

        const columns = [
            { title: '组织名称', dataIndex: 'org_name' },
            { title: '机构id', dataIndex: 'org_id' },
            { title: '组织类型', dataIndex: 'org_type' },
            { title: '序号', dataIndex: 'order_index' },
            { title: '状态', dataIndex: 'state' },
            { title: '是否电商', dataIndex: 'is_ds' },
            { title: '是否商业', dataIndex: '' },
            { title: '操作', slotName: 'cz' }
        ];

        const data = [
            {
                "id": 1,
                "children": [
                    {
                        "id": 865,
                        "children": [
                            {
                                "id": 770,
                                "children": [
                                    {
                                        "id": 167,
                                        "children": [
                                            {
                                                "id": 468,
                                                "children": [],
                                                "org_id": "67938174a2f811e9a58a0242ac110002",
                                                "org_name": "广州妙手大药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000466",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 438,
                                                "children": [],
                                                "org_id": "fa031ee55ce411ecad415254007fd0df",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司韶关市分公司",
                                                "org_type": 6,
                                                "org_code": "0000001162",
                                                "order_index": 2,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 170,
                                                "children": [],
                                                "org_id": "8e313e0972cb11e9b4ef0242ac110003",
                                                "org_name": "广东恒金堂医药连锁有限公司鹤山人民路分店",
                                                "org_type": 6,
                                                "org_code": "0000000400",
                                                "order_index": 3,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 891,
                                                "children": [],
                                                "org_id": "f52396b1e03611eeb0bace7732f98195",
                                                "org_name": "韶关市圆心大药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000001780",
                                                "order_index": 4,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 209,
                                                "children": [],
                                                "org_id": "3292ed5e69374baa8cc5bd881b68bb10",
                                                "org_name": "广州妙手门诊有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000564",
                                                "order_index": 5,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 224,
                                                "children": [],
                                                "org_id": "b466aeed72c611e9b4ef0242ac110003",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司佛山顺德凤山分店",
                                                "org_type": 6,
                                                "org_code": "0000000380",
                                                "order_index": 6,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 255,
                                                "children": [],
                                                "org_id": "a6a3737ca85f11e98f3a0242ac110002",
                                                "org_name": "广州市园心大药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000472",
                                                "order_index": 7,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 270,
                                                "children": [],
                                                "org_id": "c75a761e72cc11e9b4ef0242ac110003",
                                                "org_name": "广东恒金堂医药连锁有限公司中山东凤分店",
                                                "org_type": 6,
                                                "org_code": "0000000406",
                                                "order_index": 8,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 285,
                                                "children": [],
                                                "org_id": "1a3378c572c711e9b47b0242ac110003",
                                                "org_name": "广东恒金堂医药连锁有限公司中山西区中医院分店",
                                                "org_type": 6,
                                                "org_code": "0000000381",
                                                "order_index": 9,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 306,
                                                "children": [],
                                                "org_id": "845b80691cda11eca49352540072d236",
                                                "org_name": "广州市圆心大药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000001090",
                                                "order_index": 10,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 316,
                                                "children": [],
                                                "org_id": "e8f3e65bf0b011eab9940242ac110002",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司东莞东城分店",
                                                "org_type": 6,
                                                "org_code": "0000000829",
                                                "order_index": 11,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 339,
                                                "children": [],
                                                "org_id": "378b2183140b43be88cd4e965552ee4c",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司清远市清城分店",
                                                "org_type": 6,
                                                "org_code": "0000000618",
                                                "order_index": 12,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 347,
                                                "children": [],
                                                "org_id": "546d2c7372c711e998fd0242ac110002",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司龙溪店",
                                                "org_type": 6,
                                                "org_code": "0000000382",
                                                "order_index": 13,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 359,
                                                "children": [],
                                                "org_id": "9280e59272c711e9b47b0242ac110003",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司番禺福愉分店",
                                                "org_type": 6,
                                                "org_code": "0000000383",
                                                "order_index": 14,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 368,
                                                "children": [],
                                                "org_id": "dbb6818d72c711e9b47b0242ac110003",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司盈丰路分店",
                                                "org_type": 6,
                                                "org_code": "0000000384",
                                                "order_index": 15,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 376,
                                                "children": [],
                                                "org_id": "164ad78272c811e998fd0242ac110002",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司新华第一分店",
                                                "org_type": 6,
                                                "org_code": "0000000385",
                                                "order_index": 16,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 380,
                                                "children": [],
                                                "org_id": "42121e6272c811e9b47b0242ac110003",
                                                "org_name": "广东恒金堂医药连锁有限公司新华第二分店",
                                                "org_type": 6,
                                                "org_code": "0000000386",
                                                "order_index": 17,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 382,
                                                "children": [],
                                                "org_id": "966863e672c811e9b4ef0242ac110003",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司大德路分店",
                                                "org_type": 6,
                                                "org_code": "0000000388",
                                                "order_index": 18,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 384,
                                                "children": [],
                                                "org_id": "4401010372c911e9b47b0242ac110003",
                                                "org_name": "广东恒金堂医药连锁有限公司卫国路分店",
                                                "org_type": 6,
                                                "org_code": "0000000390",
                                                "order_index": 19,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 387,
                                                "children": [],
                                                "org_id": "a336c86f72c911e9b4ef0242ac110003",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司四会前进路分店",
                                                "org_type": 6,
                                                "org_code": "0000000391",
                                                "order_index": 20,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 389,
                                                "children": [],
                                                "org_id": "cafb991c72c911e9b4ef0242ac110003",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司市红会分店",
                                                "org_type": 6,
                                                "org_code": "0000000392",
                                                "order_index": 21,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 391,
                                                "children": [],
                                                "org_id": "fba79eb072c911e998fd0242ac110002",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司鼎湖区民兴路分公司",
                                                "org_type": 6,
                                                "org_code": "0000000393",
                                                "order_index": 22,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 393,
                                                "children": [],
                                                "org_id": "6016388972ca11e9b4ef0242ac110003",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司荔湾路分店",
                                                "org_type": 6,
                                                "org_code": "0000000394",
                                                "order_index": 23,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 395,
                                                "children": [],
                                                "org_id": "a0a8fc2672ca11e9b47b0242ac110003",
                                                "org_name": "广东恒金堂医药连锁有限公司小榄分店",
                                                "org_type": 6,
                                                "org_code": "0000000395",
                                                "order_index": 24,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 396,
                                                "children": [],
                                                "org_id": "cc7c502c72ca11e9b47b0242ac110003",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司市一分店",
                                                "org_type": 6,
                                                "org_code": "0000000396",
                                                "order_index": 25,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 397,
                                                "children": [],
                                                "org_id": "f4bd07d572ca11e9b47b0242ac110003",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司江门建设店",
                                                "org_type": 6,
                                                "org_code": "0000000397",
                                                "order_index": 26,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 398,
                                                "children": [],
                                                "org_id": "19e890e672cb11e9b4ef0242ac110003",
                                                "org_name": "广东恒金堂医药连锁有限公司鹤洞分店停业",
                                                "org_type": 6,
                                                "org_code": "0000000398",
                                                "order_index": 27,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 399,
                                                "children": [],
                                                "org_id": "53f62af672cb11e9b4ef0242ac110003",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司石龙分店",
                                                "org_type": 6,
                                                "org_code": "0000000399",
                                                "order_index": 28,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 400,
                                                "children": [],
                                                "org_id": "b3f2ec1e72cb11e9b47b0242ac110003",
                                                "org_name": "广东恒金堂医药连锁有限公司东莞樟木头分店",
                                                "org_type": 6,
                                                "org_code": "0000000401",
                                                "order_index": 29,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 401,
                                                "children": [],
                                                "org_id": "fb12523d72cb11e998fd0242ac110002",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司岭南大道北分店",
                                                "org_type": 6,
                                                "org_code": "0000000402",
                                                "order_index": 30,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 402,
                                                "children": [],
                                                "org_id": "397b2f6c72cc11e998fd0242ac110002",
                                                "org_name": "广东恒金堂医药连锁有限公司人民中路分店",
                                                "org_type": 6,
                                                "org_code": "0000000403",
                                                "order_index": 31,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 403,
                                                "children": [],
                                                "org_id": "5dd7333a72cc11e9b4ef0242ac110003",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司南沙海滨分店",
                                                "org_type": 6,
                                                "org_code": "0000000404",
                                                "order_index": 32,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 404,
                                                "children": [],
                                                "org_id": "5d65da76dac111e9ad0d0242ac110003",
                                                "org_name": "广东恒金堂医药连锁有限公司开平新华路分店",
                                                "org_type": 6,
                                                "org_code": "0000000508",
                                                "order_index": 33,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 405,
                                                "children": [],
                                                "org_id": "a804755d72cc11e9b47b0242ac110003",
                                                "org_name": "广东恒金堂医药连锁有限公司开平新华路分店-旧",
                                                "org_type": 6,
                                                "org_code": "0000000405",
                                                "order_index": 34,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 406,
                                                "children": [],
                                                "org_id": "fd5f0b0972cc11e998fd0242ac110002",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司南沙岭南分店",
                                                "org_type": 6,
                                                "org_code": "0000000407",
                                                "order_index": 35,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 407,
                                                "children": [],
                                                "org_id": "29d88aff72cd11e9b4ef0242ac110003",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司太阳城分店",
                                                "org_type": 6,
                                                "org_code": "0000000408",
                                                "order_index": 36,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 408,
                                                "children": [],
                                                "org_id": "5a9e0bd972cd11e998fd0242ac110002",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司高要湖西路分店",
                                                "org_type": 6,
                                                "org_code": "0000000409",
                                                "order_index": 37,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 409,
                                                "children": [],
                                                "org_id": "9904ab237b0b4651b3721fe9fc3ba440",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司多宝路分店",
                                                "org_type": 6,
                                                "org_code": "0000000556",
                                                "order_index": 38,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 410,
                                                "children": [],
                                                "org_id": "c21450fa637b11eaaa620242ac110002",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司肇庆端州分店",
                                                "org_type": 6,
                                                "org_code": "0000000641",
                                                "order_index": 39,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 411,
                                                "children": [],
                                                "org_id": "3420b81f637e11ea89720242ac110004",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司惠州市启康分店",
                                                "org_type": 6,
                                                "org_code": "0000000642",
                                                "order_index": 40,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 412,
                                                "children": [],
                                                "org_id": "c8c8b72f72cd11e9b47b0242ac110003",
                                                "org_name": "深圳市圆心大药房有限责任公司龙岗大道分店",
                                                "org_type": 6,
                                                "org_code": "0000000412",
                                                "order_index": 41,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 413,
                                                "children": [],
                                                "org_id": "fe56016a730911e9b4ef0242ac110003",
                                                "org_name": "惠州市药之源大药房有限公司下角便民分店",
                                                "org_type": 6,
                                                "org_code": "0000000424",
                                                "order_index": 42,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 414,
                                                "children": [],
                                                "org_id": "39ef454c730a11e987850242ac110003",
                                                "org_name": "惠州市药之源大药房有限公司江北便民分店",
                                                "org_type": 6,
                                                "org_code": "0000000425",
                                                "order_index": 43,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 415,
                                                "children": [],
                                                "org_id": "7c6bd6da730a11e987850242ac110003",
                                                "org_name": "惠州市药之源大药房有限公司河南岸便民分店",
                                                "org_type": 6,
                                                "org_code": "0000000426",
                                                "order_index": 44,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 416,
                                                "children": [],
                                                "org_id": "ddff8b45730a11e998fd0242ac110002",
                                                "org_name": "惠州市药之源大药房有限公司惠城鹿江分店",
                                                "org_type": 6,
                                                "org_code": "0000000428",
                                                "order_index": 45,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 417,
                                                "children": [],
                                                "org_id": "953201ec8cf111e9a03f0242ac110002",
                                                "org_name": "禁用深圳市圆心大药房有限责任公司龙岗大道分店",
                                                "org_type": 6,
                                                "org_code": "0000000448",
                                                "order_index": 46,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 418,
                                                "children": [],
                                                "org_id": "e89f3649933111ea8eba0242ac110003",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司深圳龙岗分店",
                                                "org_type": 6,
                                                "org_code": "0000000729",
                                                "order_index": 47,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 419,
                                                "children": [],
                                                "org_id": "3fdcc96ae11811eaafae0242ac110002",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司云浮市云城分店",
                                                "org_type": 6,
                                                "org_code": "0000000813",
                                                "order_index": 48,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 420,
                                                "children": [],
                                                "org_id": "927d8773b50711eaa0490242ac110002",
                                                "org_name": "恒金堂大药房龙溪仓E",
                                                "org_type": 6,
                                                "org_code": "0000000776",
                                                "order_index": 49,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 421,
                                                "children": [],
                                                "org_id": "16acbf5b72ce11e998fd0242ac110002",
                                                "org_name": "开平市圆心医药有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000414",
                                                "order_index": 50,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 422,
                                                "children": [],
                                                "org_id": "171a592c72cf11e9b4ef0242ac110003",
                                                "org_name": "佛山市顺德区大良宝参堂药店",
                                                "org_type": 6,
                                                "org_code": "0000000418",
                                                "order_index": 51,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 423,
                                                "children": [],
                                                "org_id": "832542ba72cd11e998fd0242ac110002",
                                                "org_name": "佛山高明佳信康药房",
                                                "org_type": 6,
                                                "org_code": "0000000410",
                                                "order_index": 52,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 424,
                                                "children": [],
                                                "org_id": "a4b973a172cd11e9b4ef0242ac110003",
                                                "org_name": "中山市三乡镇德红堂药房",
                                                "org_type": 6,
                                                "org_code": "0000000411",
                                                "order_index": 53,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 425,
                                                "children": [],
                                                "org_id": "38b6473e72ce11e998fd0242ac110002",
                                                "org_name": "江门市江济大药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000415",
                                                "order_index": 54,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 426,
                                                "children": [],
                                                "org_id": "0c51c2bd730b11e998fd0242ac110002",
                                                "org_name": "惠州市惠城区启康大药房",
                                                "org_type": 6,
                                                "org_code": "0000000429",
                                                "order_index": 55,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 427,
                                                "children": [],
                                                "org_id": "fbd7dc88785211e9b9290242ac110003",
                                                "org_name": "中山市圆心大药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000433",
                                                "order_index": 56,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 428,
                                                "children": [],
                                                "org_id": "2756d08ab42211eaa7c10242ac110002",
                                                "org_name": "中山市圆心医疗器械有限公司旧",
                                                "org_type": 6,
                                                "org_code": "0000000775",
                                                "order_index": 57,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 429,
                                                "children": [],
                                                "org_id": "59653fd2f95711ea927c0242ac110004",
                                                "org_name": "深圳明元堂惠民中医诊所",
                                                "org_type": 6,
                                                "org_code": "0000000831",
                                                "order_index": 58,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 430,
                                                "children": [],
                                                "org_id": "a56aae71730a11e998fd0242ac110002",
                                                "org_name": "惠州市药之源大药房有限公司上排便民分店",
                                                "org_type": 6,
                                                "org_code": "0000000427",
                                                "order_index": 59,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 431,
                                                "children": [],
                                                "org_id": "eef637f772c811e9b4ef0242ac110003",
                                                "org_name": "深圳圆心龙岗大道分店",
                                                "org_type": 6,
                                                "org_code": "0000000389",
                                                "order_index": 60,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 432,
                                                "children": [],
                                                "org_id": "0c06f5429fed11ebb7e552540072d236",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司黄埔分店",
                                                "org_type": 6,
                                                "org_code": "0000000933",
                                                "order_index": 61,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 433,
                                                "children": [],
                                                "org_id": "bebe12faaeea11eb89e952540072d236",
                                                "org_name": "中山市圆心医疗器械有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000941",
                                                "order_index": 62,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 434,
                                                "children": [],
                                                "org_id": "465b79b63abe11ec8a605254007fd0df",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司青龙坊分店",
                                                "org_type": 6,
                                                "org_code": "0000001119",
                                                "order_index": 63,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 435,
                                                "children": [],
                                                "org_id": "ef136ac972cd11e9b4ef0242ac110003",
                                                "org_name": "广州市恒金堂大药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000413",
                                                "order_index": 64,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 436,
                                                "children": [],
                                                "org_id": "4a489d684d0911ec925c5254009b39e4",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司大坦沙分店",
                                                "org_type": 6,
                                                "org_code": "0000001132",
                                                "order_index": 65,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 437,
                                                "children": [],
                                                "org_id": "edc1f8c85bc511ec9eed5254007fd0df",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司珠海香洲分店",
                                                "org_type": 6,
                                                "org_code": "0000001155",
                                                "order_index": 66,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 439,
                                                "children": [],
                                                "org_id": "b52e4cc15d5011ec958a5254007fd0df",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司汕头市分公司",
                                                "org_type": 6,
                                                "org_code": "0000001166",
                                                "order_index": 67,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 440,
                                                "children": [],
                                                "org_id": "bc97e5d25d5411ecad6c52540072d236",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司中山市石岐分店",
                                                "org_type": 6,
                                                "org_code": "0000001169",
                                                "order_index": 68,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 441,
                                                "children": [],
                                                "org_id": "198a77c3780411ecb1235254009b39e4",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司梅州市分店",
                                                "org_type": 6,
                                                "org_code": "0000001226",
                                                "order_index": 69,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 442,
                                                "children": [],
                                                "org_id": "8deb30b0790911ec8d985254007fd0df",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司揭阳市分公司",
                                                "org_type": 6,
                                                "org_code": "0000001227",
                                                "order_index": 70,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 443,
                                                "children": [],
                                                "org_id": "b73ef515af2511ecb98a52540072d236",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司潮州市分店",
                                                "org_type": 6,
                                                "org_code": "0000001272",
                                                "order_index": 71,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 582,
                                                "children": [],
                                                "org_id": "7e525cf5db0c11ecbd565254007c9edd",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司佛一分店",
                                                "org_type": 6,
                                                "org_code": "0000001302",
                                                "order_index": 72,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 632,
                                                "children": [],
                                                "org_id": "4b51e799388811edb1ca5254007fd0df",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司(大坦沙分店)",
                                                "org_type": 6,
                                                "org_code": "0000001401",
                                                "order_index": 73,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 821,
                                                "children": [],
                                                "org_id": "94492ee8205f11ee8cf35254007fd0df",
                                                "org_name": "广东圆心恒金堂医药连锁有限公司翠华分店",
                                                "org_type": 6,
                                                "org_code": "0000001657",
                                                "order_index": 74,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 859,
                                                "children": [],
                                                "org_id": "240a74598d0d11eeac9e525400f6496b",
                                                "org_name": "中山市圆心大药房有限公司（连锁门店）",
                                                "org_type": 6,
                                                "org_code": "0000001734",
                                                "order_index": 75,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "6236568c72c611e9b47b0242ac110003",
                                        "org_name": "广东圆心恒金堂医药连锁有限公司",
                                        "org_type": 9,
                                        "org_code": "0000000379",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 366,
                                        "children": [],
                                        "org_id": "c765484353e211eb9d750242ac110003",
                                        "org_name": "广东瑞美润天医药连锁有限公司黄埔分店",
                                        "org_type": 6,
                                        "org_code": "0000000881",
                                        "order_index": 2,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 152,
                                        "children": [
                                            {
                                                "id": 469,
                                                "children": [],
                                                "org_id": "b54fcae0dc1511e9b29c0242ac110003",
                                                "org_name": "广东圆心瑞美医药连锁有限公司横陂分店",
                                                "org_type": 6,
                                                "org_code": "0000000510",
                                                "order_index": 1,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 164,
                                                "children": [],
                                                "org_id": "e8f65c88650a11ebbe170242ac110002",
                                                "org_name": "广东瑞美润天医药连锁有限公司中山东凤分店",
                                                "org_type": 6,
                                                "org_code": "0000000906",
                                                "order_index": 2,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 207,
                                                "children": [],
                                                "org_id": "3df733e4dc1711e99f490242ac110003",
                                                "org_name": "广东圆心瑞美医药连锁有限公司郭田分店",
                                                "org_type": 6,
                                                "org_code": "0000000513",
                                                "order_index": 3,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 221,
                                                "children": [],
                                                "org_id": "65d654c461fc11eb8bc20242ac110004",
                                                "org_name": "广东瑞美润天医药连锁有限公司中山西区中医院分店",
                                                "org_type": 6,
                                                "org_code": "0000000904",
                                                "order_index": 4,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 256,
                                                "children": [],
                                                "org_id": "2c9c3b60dc1911e9b29c0242ac110003",
                                                "org_name": "广东圆心瑞美医药连锁有限公司潭下分店",
                                                "org_type": 6,
                                                "org_code": "0000000515",
                                                "order_index": 5,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 275,
                                                "children": [],
                                                "org_id": "f2cc0214dc1911e99f490242ac110003",
                                                "org_name": "广东圆心瑞美医药连锁有限公司河东分店",
                                                "org_type": 6,
                                                "org_code": "0000000516",
                                                "order_index": 6,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 289,
                                                "children": [],
                                                "org_id": "d18a41bcdc1a11e99f490242ac110003",
                                                "org_name": "广东圆心瑞美医药连锁有限公司转水分店",
                                                "org_type": 6,
                                                "org_code": "0000000517",
                                                "order_index": 7,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 307,
                                                "children": [],
                                                "org_id": "4d4653266d7f11eaa0f30242ac110003",
                                                "org_name": "广东瑞美润天医药连锁有限公司惠州市下角分店",
                                                "org_type": 6,
                                                "org_code": "0000000651",
                                                "order_index": 8,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 323,
                                                "children": [],
                                                "org_id": "e961b5d96d7411eaa0f30242ac110003",
                                                "org_name": "广东瑞美润天医药连锁有限公司惠州市鹿江分店",
                                                "org_type": 6,
                                                "org_code": "0000000646",
                                                "order_index": 9,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 337,
                                                "children": [],
                                                "org_id": "0363e7fc6d7d11eaa0f30242ac110003",
                                                "org_name": "广东瑞美润天医药连锁有限公司惠州市江北分店",
                                                "org_type": 6,
                                                "org_code": "0000000650",
                                                "order_index": 10,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 352,
                                                "children": [],
                                                "org_id": "e5537bbfa18411ea8eaa0242ac110002",
                                                "org_name": "广东瑞美润天医药连锁有限公司龙溪分店",
                                                "org_type": 6,
                                                "org_code": "0000000765",
                                                "order_index": 11,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 362,
                                                "children": [],
                                                "org_id": "af4ad297a18511ea8eaa0242ac110002",
                                                "org_name": "广东瑞美润天医药连锁有限公司海北分店",
                                                "org_type": 6,
                                                "org_code": "0000000767",
                                                "order_index": 12,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 374,
                                                "children": [],
                                                "org_id": "a59f79e9564b11eb8ab90242ac110003",
                                                "org_name": "广东瑞美润天医药连锁有限公司中山市禁用",
                                                "org_type": 6,
                                                "org_code": "0000000884",
                                                "order_index": 13,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 377,
                                                "children": [],
                                                "org_id": "9c27849456ca11ebb06b0242ac110003",
                                                "org_name": "广东瑞美润天医药连锁有限公司中山市石岐分店",
                                                "org_type": 6,
                                                "org_code": "0000000889",
                                                "order_index": 14,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 381,
                                                "children": [],
                                                "org_id": "9f32948b647711eb9d4c0242ac110002",
                                                "org_name": "广东瑞美润天医药连锁有限公司鹤山人民路分店",
                                                "org_type": 6,
                                                "org_code": "0000000905",
                                                "order_index": 15,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 386,
                                                "children": [],
                                                "org_id": "f892d258af3211ecb98a52540072d236",
                                                "org_name": "广东瑞美润天医药连锁有限公司黄埔雍景湾分店",
                                                "org_type": 6,
                                                "org_code": "0000001274",
                                                "order_index": 16,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "30d5611f78dc11ea9a810242ac110002",
                                        "org_name": "广东瑞美润天医药连锁有限公司",
                                        "org_type": 9,
                                        "org_code": "0000000655",
                                        "order_index": 3,
                                        "state": 0,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 305,
                                        "children": [
                                            {
                                                "id": 459,
                                                "children": [],
                                                "org_id": "ce5f89ba46c511e997b20242ac110003",
                                                "org_name": "阳江市泰吉圆心大药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000301",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 492,
                                                "children": [],
                                                "org_id": "79e4894f46c611e9b26f0242ac110004",
                                                "org_name": "茂名圆心大药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000302",
                                                "order_index": 2,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 513,
                                                "children": [],
                                                "org_id": "4c4bd33d46c511e9b26f0242ac110004",
                                                "org_name": "阳江市江城区圆心大药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000300",
                                                "order_index": 3,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 524,
                                                "children": [],
                                                "org_id": "a0d8393546c411e997b20242ac110003",
                                                "org_name": "湛江圆心大药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000299",
                                                "order_index": 4,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "5b27d379ce2111e983550242ac110002",
                                        "org_name": "粤西",
                                        "org_type": 8,
                                        "org_code": "0000000491",
                                        "order_index": 4,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 258,
                                        "children": [],
                                        "org_id": "0a9bf3f3dc1411e99f490242ac110003",
                                        "org_name": "广东春晖园大药房连锁有限公司",
                                        "org_type": 9,
                                        "org_code": "0000000509",
                                        "order_index": 5,
                                        "state": 0,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 237,
                                        "children": [
                                            {
                                                "id": 474,
                                                "children": [],
                                                "org_id": "56d6d6126d7611eaa12b0242ac110004",
                                                "org_name": "广东圆心瑞美医药连锁有限公司惠州市启康分店-禁用",
                                                "org_type": 7,
                                                "org_code": "0000000647",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "53196585283c48dc91a2c2ec631faf08",
                                        "org_name": "广东圆心瑞美医药连锁有限公司-禁用",
                                        "org_type": 6,
                                        "org_code": "0000000583",
                                        "order_index": 6,
                                        "state": 0,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 929,
                                        "children": [],
                                        "org_id": "d454f27947c911ef96edba6936edc966",
                                        "org_name": "广东圆心药业有限公司华创分店",
                                        "org_type": null,
                                        "org_code": "0000001839",
                                        "order_index": 7,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "15f4b67ce1c111edb0615254007fd0df",
                                "org_name": "广东省",
                                "org_type": 2,
                                "org_code": "0000001569",
                                "order_index": 1,
                                "state": 1,
                                "is_ds": 0
                            },
                            {
                                "id": 119,
                                "children": [
                                    {
                                        "id": 126,
                                        "children": [],
                                        "org_id": "4c01dd31418f11e9b4070242ac110003",
                                        "org_name": "海口千水圆心大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000280",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 162,
                                        "children": [],
                                        "org_id": "6f5c1d36418e11e9b3e50242ac110004",
                                        "org_name": "海口格物圆心大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000275",
                                        "order_index": 2,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 193,
                                        "children": [],
                                        "org_id": "d6a8db8c418f11e9b4070242ac110003",
                                        "org_name": "海口仁慈圆心大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000282",
                                        "order_index": 3,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 222,
                                        "children": [],
                                        "org_id": "83cf4bce418f11e9b4070242ac110003",
                                        "org_name": "海口农垦圆心大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000281",
                                        "order_index": 4,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 243,
                                        "children": [],
                                        "org_id": "18d67f70418f11e9b4070242ac110003",
                                        "org_name": "海口孟山圆心大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000278",
                                        "order_index": 5,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 267,
                                        "children": [],
                                        "org_id": "e169f5f2418e11e9b4070242ac110003",
                                        "org_name": "海南圆心大药房有限公司",
                                        "org_type": 9,
                                        "org_code": "0000000277",
                                        "order_index": 6,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 284,
                                        "children": [],
                                        "org_id": "06bd35e2419011e9b6690242ac110003",
                                        "org_name": "文昌诺卫耀立德大药房有限公司（闭店）",
                                        "org_type": 6,
                                        "org_code": "0000000283",
                                        "order_index": 7,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 302,
                                        "children": [],
                                        "org_id": "021e7f3f46c711e99d110242ac110003",
                                        "org_name": "三亚圆心大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000303",
                                        "order_index": 8,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 320,
                                        "children": [
                                            {
                                                "id": 481,
                                                "children": [],
                                                "org_id": "2737676ef00f11ebaeac5254007fd0df",
                                                "org_name": "海南圆心大药房连锁有限公司秀华店",
                                                "org_type": 6,
                                                "org_code": "0000001022",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 504,
                                                "children": [],
                                                "org_id": "2e4c5783f01011ebaeac5254007fd0df",
                                                "org_name": "海南圆心大药房有限公司琼海市医店",
                                                "org_type": 6,
                                                "org_code": "0000001024",
                                                "order_index": 2,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 505,
                                                "children": [],
                                                "org_id": "98000398f01111ebaeac5254007fd0df",
                                                "org_name": "海南圆心大药房连锁有限公司圆义店",
                                                "org_type": 6,
                                                "org_code": "0000001026",
                                                "order_index": 3,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 525,
                                                "children": [],
                                                "org_id": "cfab10d603d311ec98c45254007fd0df",
                                                "org_name": "海南圆心大药房有限公司农垦店",
                                                "org_type": 6,
                                                "org_code": "0000001051",
                                                "order_index": 4,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 534,
                                                "children": [],
                                                "org_id": "f0643eb1143b11ec8f9d5254007fd0df",
                                                "org_name": "海南圆心大药房有限公司秀英店",
                                                "org_type": 6,
                                                "org_code": "0000001064",
                                                "order_index": 5,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 541,
                                                "children": [],
                                                "org_id": "1c56c880143e11ec8f9d5254007fd0df",
                                                "org_name": "海南圆心大药房有限公司市医店",
                                                "org_type": 6,
                                                "org_code": "0000001065",
                                                "order_index": 6,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 549,
                                                "children": [],
                                                "org_id": "d964a6d0143f11ec8f9d5254007fd0df",
                                                "org_name": "海南圆心大药房有限公司海医店",
                                                "org_type": 6,
                                                "org_code": "0000001066",
                                                "order_index": 7,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 553,
                                                "children": [],
                                                "org_id": "bf83a1c9144011ec8f9d5254007fd0df",
                                                "org_name": "海南圆心大药房连锁有限公司建国店",
                                                "org_type": 6,
                                                "org_code": "0000001067",
                                                "order_index": 8,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 321,
                                                "children": [],
                                                "org_id": "15d2b491144211ec8f9d5254007fd0df",
                                                "org_name": "海南圆心大药房连锁有限公司宗伯里店",
                                                "org_type": 6,
                                                "org_code": "0000001068",
                                                "order_index": 9,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 335,
                                                "children": [],
                                                "org_id": "aa91b524144411ec8f9d5254007fd0df",
                                                "org_name": "海南圆心大药房有限公司三亚店",
                                                "org_type": 6,
                                                "org_code": "0000001069",
                                                "order_index": 10,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "c3cb166df8f311eb93285254009b39e4",
                                        "org_name": "海南圆心大药房有限公司",
                                        "org_type": 9,
                                        "org_code": "0000001030",
                                        "order_index": 9,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "7d7304684ab011e9b8da0242ac110004",
                                "org_name": "海南省",
                                "org_type": 2,
                                "org_code": "0000000304",
                                "order_index": 2,
                                "state": 1,
                                "is_ds": 0
                            },
                            {
                                "id": 772,
                                "children": [
                                    {
                                        "id": 268,
                                        "children": [],
                                        "org_id": "53b5e802a66511ebbdc452540072d236",
                                        "org_name": "广西南宁市圆心大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000938",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "f5fc3ea1e1c111eda1465254009b39e4",
                                "org_name": "广西省",
                                "org_type": 2,
                                "org_code": "0000001571",
                                "order_index": 3,
                                "state": 1,
                                "is_ds": 0
                            }
                        ],
                        "org_id": "d0718557aba811eebdd05254007fd0df",
                        "org_name": "广东区",
                        "org_type": 1,
                        "org_code": "0000001742",
                        "order_index": 1,
                        "state": 1,
                        "is_ds": 0
                    },
                    {
                        "id": 926,
                        "children": [
                            {
                                "id": 848,
                                "children": [
                                    {
                                        "id": 286,
                                        "children": [
                                            {
                                                "id": 797,
                                                "children": [],
                                                "org_id": "028c79cb197611eea5cf525400f6496b",
                                                "org_name": "深圳市圆心友和医药大药房有限公司嘉宝田药店",
                                                "org_type": 6,
                                                "org_code": "0000001622",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 798,
                                                "children": [],
                                                "org_id": "1a7e4710197711eea5cf525400f6496b",
                                                "org_name": "深圳市圆心友和医药大药房有限公司美丽家园药店",
                                                "org_type": 6,
                                                "org_code": "0000001623",
                                                "order_index": 2,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 799,
                                                "children": [],
                                                "org_id": "0873ca57197811eeb6a452540072d236",
                                                "org_name": "深圳市圆心友和医药大药房有限公司鹏兴店",
                                                "org_type": 6,
                                                "org_code": "0000001628",
                                                "order_index": 3,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 800,
                                                "children": [],
                                                "org_id": "4900b6b7197711eeb6a452540072d236",
                                                "org_name": "深圳市圆心友和医药大药房有限公司田贝药店",
                                                "org_type": 6,
                                                "org_code": "0000001624",
                                                "order_index": 4,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 801,
                                                "children": [],
                                                "org_id": "b8ee1fb9197711eea5cf525400f6496b",
                                                "org_name": "深圳市圆心友和医药大药房有限公司福华药店",
                                                "org_type": 6,
                                                "org_code": "0000001625",
                                                "order_index": 5,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 802,
                                                "children": [],
                                                "org_id": "0db17f47197811eeb6f45254007fd0df",
                                                "org_name": "深圳市圆心友和医药大药房有限公司二十分店",
                                                "org_type": 6,
                                                "org_code": "0000001626",
                                                "order_index": 6,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 803,
                                                "children": [],
                                                "org_id": "5372dbaa197811eeb6f45254007fd0df",
                                                "org_name": "深圳市圆心友和医药大药房有限公司银华店",
                                                "org_type": 6,
                                                "org_code": "0000001629",
                                                "order_index": 7,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 804,
                                                "children": [],
                                                "org_id": "aab89fa4197811eeb6a452540072d236",
                                                "org_name": "深圳市圆心友和医药大药房有限公司景龙店",
                                                "org_type": 6,
                                                "org_code": "0000001631",
                                                "order_index": 8,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 805,
                                                "children": [],
                                                "org_id": "cf0894dc197811eea5cf525400f6496b",
                                                "org_name": "深圳市圆心友和医药大药房有限公司沙河东路药店",
                                                "org_type": 6,
                                                "org_code": "0000001630",
                                                "order_index": 9,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 806,
                                                "children": [],
                                                "org_id": "0f75809b197911eeb6f45254007fd0df",
                                                "org_name": "深圳市圆心友和医药大药房有限公司宝城药店",
                                                "org_type": 6,
                                                "org_code": "0000001632",
                                                "order_index": 10,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 807,
                                                "children": [],
                                                "org_id": "67dc1e55197911eeb6a452540072d236",
                                                "org_name": "深圳市圆心友和医药大药房有限公司爱联店",
                                                "org_type": 6,
                                                "org_code": "0000001635",
                                                "order_index": 11,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 808,
                                                "children": [],
                                                "org_id": "bcb83513197911eeb6f45254007fd0df",
                                                "org_name": "深圳市圆心友和医药大药房有限公司凤凰药店",
                                                "org_type": 6,
                                                "org_code": "0000001637",
                                                "order_index": 12,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 809,
                                                "children": [],
                                                "org_id": "f74eae48197911eeb6f45254007fd0df",
                                                "org_name": "深圳市圆心友和医药大药房有限公司信义药店",
                                                "org_type": 6,
                                                "org_code": "0000001638",
                                                "order_index": 13,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 810,
                                                "children": [],
                                                "org_id": "0a0c5938197a11eeb6f45254007fd0df",
                                                "org_name": "深圳市圆心友和医药大药房有限公司东昌药店",
                                                "org_type": 6,
                                                "org_code": "0000001636",
                                                "order_index": 14,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 811,
                                                "children": [],
                                                "org_id": "28515fd7197a11eeb6a452540072d236",
                                                "org_name": "深圳市圆心友和医药大药房有限公司翠竹药店",
                                                "org_type": 6,
                                                "org_code": "0000001639",
                                                "order_index": 15,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 812,
                                                "children": [],
                                                "org_id": "ae6bd1d9197a11eeb6a452540072d236",
                                                "org_name": "深圳市圆心友和医药大药房有限公司前进药店",
                                                "org_type": 6,
                                                "org_code": "0000001640",
                                                "order_index": 16,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 813,
                                                "children": [],
                                                "org_id": "eaf7160c197a11eea5cf525400f6496b",
                                                "org_name": "深圳市圆心友和医药大药房有限公司莲塘药店",
                                                "org_type": 6,
                                                "org_code": "0000001641",
                                                "order_index": 17,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 815,
                                                "children": [],
                                                "org_id": "1dfe22c1197b11eeb6a452540072d236",
                                                "org_name": "深圳市圆心友和医药大药房有限公司龙岗中心药店",
                                                "org_type": 6,
                                                "org_code": "0000001642",
                                                "order_index": 18,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 814,
                                                "children": [],
                                                "org_id": "863d89e4199711eeb6f45254007fd0df",
                                                "org_name": "深圳市圆心友和医药大药房有限公司南头药店",
                                                "org_type": 6,
                                                "org_code": "0000001649",
                                                "order_index": 19,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 819,
                                                "children": [],
                                                "org_id": "9982d9b31cbd11eea5cf525400f6496b",
                                                "org_name": "深圳市圆心友和医药大药房有限公司二十一分店",
                                                "org_type": 6,
                                                "org_code": "0000001653",
                                                "order_index": 20,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 862,
                                                "children": [],
                                                "org_id": "53132b8b94c411ee9ed95254009b39e4",
                                                "org_name": "深圳市圆心友和医药大药房有限公司吉祥药店",
                                                "org_type": 6,
                                                "org_code": "0000001739",
                                                "order_index": 21,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 887,
                                                "children": [],
                                                "org_id": "1eb9f5dabbf111eebdd05254007fd0df",
                                                "org_name": "深圳市圆心友和医药大药房有限公司梅山药店",
                                                "org_type": 6,
                                                "org_code": "0000001775",
                                                "order_index": 22,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "e6f332b6d97911eba9f95254007fd0df",
                                        "org_name": "深圳市圆心友和医药大药房有限公司",
                                        "org_type": 9,
                                        "org_code": "0000000982",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 911,
                                        "children": [],
                                        "org_id": "5303febf17fd11ef89352adcf763c22a",
                                        "org_name": "深圳市圆心友和医药大药房有限公司翠竹便利店",
                                        "org_type": 6,
                                        "org_code": "0000001813",
                                        "order_index": 2,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 904,
                                        "children": [],
                                        "org_id": "4db948690ec111ef89352adcf763c22a",
                                        "org_name": "深圳翠都门诊部",
                                        "org_type": 6,
                                        "org_code": "0000001802",
                                        "order_index": 3,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 906,
                                        "children": [
                                            {
                                                "id": 907,
                                                "children": [],
                                                "org_id": "a6f11fdf141a11ef89352adcf763c22a",
                                                "org_name": "深圳市培园健康科技有限公司东湖分店",
                                                "org_type": 6,
                                                "org_code": "0000001807",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 908,
                                                "children": [],
                                                "org_id": "d5a59b91141a11ef89352adcf763c22a",
                                                "org_name": "深圳市培园健康科技有限公司莲塘分店",
                                                "org_type": 6,
                                                "org_code": "0000001809",
                                                "order_index": 2,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 909,
                                                "children": [],
                                                "org_id": "e6141d4517fc11ef89352adcf763c22a",
                                                "org_name": "深圳市培园健康科技有限公司凤凰分店",
                                                "org_type": 6,
                                                "org_code": "0000001810",
                                                "order_index": 3,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 910,
                                                "children": [],
                                                "org_id": "2635f67417fd11ef89352adcf763c22a",
                                                "org_name": "深圳市培园健康科技有限公司嘉宝田分店",
                                                "org_type": 6,
                                                "org_code": "0000001812",
                                                "order_index": 4,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 914,
                                                "children": [],
                                                "org_id": "5a4baab41d8c11ef89352adcf763c22a",
                                                "org_name": "深圳市培园健康科技有限公司鹏兴分店",
                                                "org_type": 6,
                                                "org_code": "0000001817",
                                                "order_index": 5,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 915,
                                                "children": [],
                                                "org_id": "82ac1fa51d8c11ef89352adcf763c22a",
                                                "org_name": "深圳市培园健康科技有限公司田贝分店",
                                                "org_type": 6,
                                                "org_code": "0000001818",
                                                "order_index": 6,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 916,
                                                "children": [],
                                                "org_id": "f9d027a01d8c11ef89352adcf763c22a",
                                                "org_name": "深圳市培园健康科技有限公司福华分店",
                                                "org_type": 6,
                                                "org_code": "0000001819",
                                                "order_index": 7,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 917,
                                                "children": [],
                                                "org_id": "c5bf30181d8d11ef89352adcf763c22a",
                                                "org_name": "深圳市培园健康科技有限公司景龙分店",
                                                "org_type": 6,
                                                "org_code": "0000001821",
                                                "order_index": 8,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 918,
                                                "children": [],
                                                "org_id": "f1666b001d8d11ef89352adcf763c22a",
                                                "org_name": "深圳市培园健康科技有限公司梅山分店",
                                                "org_type": 6,
                                                "org_code": "0000001823",
                                                "order_index": 9,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 920,
                                                "children": [],
                                                "org_id": "234a4b242a2611ef8b9efa544c79cbbf",
                                                "org_name": "深圳市培园健康科技有限公司二十分店",
                                                "org_type": 6,
                                                "org_code": "0000001828",
                                                "order_index": 10,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 921,
                                                "children": [],
                                                "org_id": "bd370b7c2a3111ef8b9efa544c79cbbf",
                                                "org_name": "深圳市培园健康科技有限公司二十一分店",
                                                "org_type": 6,
                                                "org_code": "0000001829",
                                                "order_index": 11,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 923,
                                                "children": [],
                                                "org_id": "38d98f3d2f9111ef8b9efa544c79cbbf",
                                                "org_name": "深圳市培园健康科技有限公司南头分店",
                                                "org_type": null,
                                                "org_code": "0000001831",
                                                "order_index": 12,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 924,
                                                "children": [],
                                                "org_id": "62e78c572f9111ef8b9efa544c79cbbf",
                                                "org_name": "深圳市培园健康科技有限公司沙河东路分店",
                                                "org_type": null,
                                                "org_code": "0000001832",
                                                "order_index": 13,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "67935028141911ef89352adcf763c22a",
                                        "org_name": "深圳市培园健康科技有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001804",
                                        "order_index": 4,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "580834a276f211eeaa315254009b39e4",
                                "org_name": "深圳市",
                                "org_type": 2,
                                "org_code": "0000001717",
                                "order_index": 1,
                                "state": 1,
                                "is_ds": 0
                            }
                        ],
                        "org_id": "19b68aac3f7d11ef96edba6936edc966",
                        "org_name": "深圳友和区",
                        "org_type": 1,
                        "org_code": "0000001835",
                        "order_index": 1,
                        "state": 1,
                        "is_ds": 0
                    },
                    {
                        "id": 866,
                        "children": [
                            {
                                "id": 472,
                                "children": [
                                    {
                                        "id": 565,
                                        "children": [],
                                        "org_id": "f0f480805ccc11e996270242ac110002",
                                        "org_name": "黑龙江圆心大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000353",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 494,
                                        "children": [],
                                        "org_id": "27aaff56fef211eab6d80242ac110002",
                                        "org_name": "黑龙江圆心大药房有限公司卫星路分公司",
                                        "org_type": 6,
                                        "org_code": "0000000838",
                                        "order_index": 2,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 518,
                                        "children": [],
                                        "org_id": "79acf9dfb3d411eb9cb952540072d236",
                                        "org_name": "黑龙江圆心大药房有限公司铁岭街分公司",
                                        "org_type": 6,
                                        "org_code": "0000000949",
                                        "order_index": 3,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "615a1cdb5a2411eba2430242ac110003",
                                "org_name": "黑龙江省",
                                "org_type": 2,
                                "org_code": "0000000892",
                                "order_index": 1,
                                "state": 1,
                                "is_ds": 0
                            },
                            {
                                "id": 184,
                                "children": [
                                    {
                                        "id": 478,
                                        "children": [
                                            {
                                                "id": 479,
                                                "children": [],
                                                "org_id": "3120b8c9deca11eb966a52540072d236",
                                                "org_name": "吉林省大格新特药连锁有限公司东盛店",
                                                "org_type": 6,
                                                "org_code": "0000000989",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 502,
                                                "children": [],
                                                "org_id": "e3ad5a41dece11eb966a52540072d236",
                                                "org_name": "吉林省大格新特药连锁有限公司繁荣店",
                                                "org_type": 6,
                                                "org_code": "0000000990",
                                                "order_index": 2,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 520,
                                                "children": [],
                                                "org_id": "57162e0bdecf11eb966a52540072d236",
                                                "org_name": "吉林省大格新特药连锁有限公司平治店",
                                                "org_type": 6,
                                                "org_code": "0000000991",
                                                "order_index": 3,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 529,
                                                "children": [],
                                                "org_id": "2e82e55eded611eb966a52540072d236",
                                                "org_name": "吉林省大格新特药连锁有限公司亚泰店",
                                                "org_type": 6,
                                                "org_code": "0000000993",
                                                "order_index": 4,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 834,
                                                "children": [],
                                                "org_id": "a63bf2ea504b11eeb1ee5254007fd0df",
                                                "org_name": "吉林省大格新特药连锁有限公司桦甸街店",
                                                "org_type": 6,
                                                "org_code": "0000001685",
                                                "order_index": 5,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "e036868cdec711eb966a52540072d236",
                                        "org_name": "吉林省大格新特药连锁有限公司",
                                        "org_type": 9,
                                        "org_code": "0000000988",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 185,
                                        "children": [],
                                        "org_id": "1ab51a31dee711eb966a52540072d236",
                                        "org_name": "长春大格大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000998",
                                        "order_index": 2,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 215,
                                        "children": [],
                                        "org_id": "0ce8468cdee811eb966a52540072d236",
                                        "org_name": "长春大格大药房有限公司红旗店",
                                        "org_type": 6,
                                        "org_code": "0000001000",
                                        "order_index": 3,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 240,
                                        "children": [],
                                        "org_id": "8645c3aedee811eb966a52540072d236",
                                        "org_name": "长春大格大药房有限公司吉林市分公司",
                                        "org_type": 6,
                                        "org_code": "0000001001",
                                        "order_index": 4,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "010d86c4dec111eb966a52540072d236",
                                "org_name": "吉林省",
                                "org_type": 2,
                                "org_code": "0000000986",
                                "order_index": 2,
                                "state": 1,
                                "is_ds": 0
                            }
                        ],
                        "org_id": "f5483718aba811eebdd05254007fd0df",
                        "org_name": "吉林区",
                        "org_type": 1,
                        "org_code": "0000001743",
                        "order_index": 2,
                        "state": 1,
                        "is_ds": 0
                    },
                    {
                        "id": 136,
                        "children": [
                            {
                                "id": 754,
                                "children": [
                                    {
                                        "id": 444,
                                        "children": [
                                            {
                                                "id": 445,
                                                "children": [
                                                    {
                                                        "id": 446,
                                                        "children": [],
                                                        "org_id": "3aed677930bd11e9a82c0242ac110004",
                                                        "org_name": "山东圆心大药房有限公司济兖路店",
                                                        "org_type": 6,
                                                        "org_code": "0000000209",
                                                        "order_index": 1,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 482,
                                                        "children": [],
                                                        "org_id": "6c1ad22830bd11e9a82c0242ac110004",
                                                        "org_name": "山东圆心大药房有限公司经十路店",
                                                        "org_type": 6,
                                                        "org_code": "0000000211",
                                                        "order_index": 2,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 506,
                                                        "children": [],
                                                        "org_id": "c9204c5a30bd11e9b9240242ac110003",
                                                        "org_name": "山东圆心大药房有限公司文化东路店",
                                                        "org_type": 6,
                                                        "org_code": "0000000212",
                                                        "order_index": 3,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 521,
                                                        "children": [],
                                                        "org_id": "1e74a0f530be11e9be340242ac110003",
                                                        "org_name": "山东圆心大药房有限公司经六路店",
                                                        "org_type": 6,
                                                        "org_code": "0000000214",
                                                        "order_index": 4,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 530,
                                                        "children": [],
                                                        "org_id": "5683f9cb30be11e9b9240242ac110003",
                                                        "org_name": "山东圆心大药房有限公司王舍人店",
                                                        "org_type": 6,
                                                        "org_code": "0000000215",
                                                        "order_index": 5,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 537,
                                                        "children": [],
                                                        "org_id": "7441154a30ca11e9b9240242ac110003",
                                                        "org_name": "山东圆心大药房有限公司保税区店",
                                                        "org_type": 6,
                                                        "org_code": "0000000217",
                                                        "order_index": 6,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 548,
                                                        "children": [],
                                                        "org_id": "5ac71d1fa9d411e9bf520242ac110003",
                                                        "org_name": "山东圆心大药房有限公司文化西路店",
                                                        "org_type": 6,
                                                        "org_code": "0000000475",
                                                        "order_index": 7,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 579,
                                                        "children": [],
                                                        "org_id": "154546b3e7d311ecb5095254007fd0df",
                                                        "org_name": "山东圆心大药房有限公司济宁店",
                                                        "org_type": 6,
                                                        "org_code": "0000001311",
                                                        "order_index": 8,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 781,
                                                        "children": [],
                                                        "org_id": "60bbddaff89a11edb4805254009b39e4",
                                                        "org_name": "山东圆心大药房有限公司香溢华庭店",
                                                        "org_type": 6,
                                                        "org_code": "0000001591",
                                                        "order_index": 9,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 782,
                                                        "children": [],
                                                        "org_id": "39b5e8aef89d11edb4805254009b39e4",
                                                        "org_name": "山东圆心大药房有限公司保税区二店",
                                                        "org_type": 6,
                                                        "org_code": "0000001594",
                                                        "order_index": 10,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 860,
                                                        "children": [],
                                                        "org_id": "fd22d7c18f6211eeaff752540072d236",
                                                        "org_name": "山东圆心大药房有限公司莱山店",
                                                        "org_type": 6,
                                                        "org_code": "0000001735",
                                                        "order_index": 11,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    }
                                                ],
                                                "org_id": "f40a962030bc11e9be340242ac110003",
                                                "org_name": "山东圆心大药房有限公司",
                                                "org_type": 9,
                                                "org_code": "0000000208",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 486,
                                                "children": [],
                                                "org_id": "1f03b3903fb411e9aec10242ac110003",
                                                "org_name": "济南金益大药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000269",
                                                "order_index": 2,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "a533a1fa30bc11e9be340242ac110003",
                                        "org_name": "济南市",
                                        "org_type": 3,
                                        "org_code": "0000000207",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 173,
                                        "children": [
                                            {
                                                "id": 475,
                                                "children": [],
                                                "org_id": "8d8bdd89c28311eb858452540072d236",
                                                "org_name": "山东圆心大药房有限公司临沂店",
                                                "org_type": 6,
                                                "org_code": "0000000962",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "ec390007eeb211ebb6d85254009b39e4",
                                        "org_name": "临沂市",
                                        "org_type": 3,
                                        "org_code": "0000001013",
                                        "order_index": 2,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 201,
                                        "children": [
                                            {
                                                "id": 477,
                                                "children": [],
                                                "org_id": "6305e629d3be11eb920d5254007fd0df",
                                                "org_name": "聊城润药大药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000976",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "69fac211eeb311ebb6d85254009b39e4",
                                        "org_name": "聊城市",
                                        "org_type": 3,
                                        "org_code": "0000001014",
                                        "order_index": 3,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 231,
                                        "children": [
                                            {
                                                "id": 476,
                                                "children": [],
                                                "org_id": "71665ea8cfd511ebbc5e5254007fd0df",
                                                "org_name": "菏泽润药医药有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000968",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 580,
                                                "children": [],
                                                "org_id": "3ba0b7e7d7df11ec897052540072d236",
                                                "org_name": "菏泽润药医药有限公司单县分公司",
                                                "org_type": 6,
                                                "org_code": "0000001301",
                                                "order_index": 2,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "b48ae44feeb311ebb6d85254009b39e4",
                                        "org_name": "菏泽市",
                                        "org_type": 3,
                                        "org_code": "0000001015",
                                        "order_index": 4,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 250,
                                        "children": [
                                            {
                                                "id": 480,
                                                "children": [],
                                                "org_id": "17628c8bee7911eba53352540072d236",
                                                "org_name": "山东圆心大药房有限公司烟台店",
                                                "org_type": 6,
                                                "org_code": "0000001011",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 503,
                                                "children": [],
                                                "org_id": "836706aeee7a11eba53352540072d236",
                                                "org_name": "山东圆心大药房有限公司龙口店",
                                                "org_type": 6,
                                                "org_code": "0000001012",
                                                "order_index": 2,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 517,
                                                "children": [],
                                                "org_id": "62d5288787e511ecb44f52540072d236",
                                                "org_name": "山东圆心大药房有限公司莱山店.",
                                                "org_type": 6,
                                                "org_code": "0000001237",
                                                "order_index": 3,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "d66baec3eeb311ebb6d85254009b39e4",
                                        "org_name": "烟台市",
                                        "org_type": 3,
                                        "org_code": "0000001016",
                                        "order_index": 5,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 271,
                                        "children": [
                                            {
                                                "id": 465,
                                                "children": [],
                                                "org_id": "cc4e5246659811e9984c0242ac110003",
                                                "org_name": "济宁市康康药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000364",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "1837194feeb411ebb6d85254009b39e4",
                                        "org_name": "济宁市",
                                        "org_type": 3,
                                        "org_code": "0000001017",
                                        "order_index": 6,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 627,
                                        "children": [],
                                        "org_id": "48948e501f8511ed9e305254009b39e4",
                                        "org_name": "潍坊圆心大药房有限责任公司",
                                        "org_type": 6,
                                        "org_code": "0000001393",
                                        "order_index": 7,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 733,
                                        "children": [
                                            {
                                                "id": 736,
                                                "children": [],
                                                "org_id": "ca3c5e5dcd6811edb5a35254009b39e4",
                                                "org_name": "德州利民医药有限公司",
                                                "org_type": 6,
                                                "org_code": "0000001512",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "4912e0a7cd6811ed9ff8525400f6496b",
                                        "org_name": "德州市",
                                        "org_type": 3,
                                        "org_code": "0000001511",
                                        "order_index": 8,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 826,
                                        "children": [],
                                        "org_id": "c6b2b4622ac811eea28b5254007fd0df",
                                        "org_name": "威海圆心大药房有限责任公司",
                                        "org_type": 6,
                                        "org_code": "0000001673",
                                        "order_index": 9,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 829,
                                        "children": [],
                                        "org_id": "b3e219cd2c2711ee9bf152540072d236",
                                        "org_name": "威海市",
                                        "org_type": null,
                                        "org_code": "0000001676",
                                        "order_index": 10,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 839,
                                        "children": [],
                                        "org_id": "b23bcb79697411eeaa315254009b39e4",
                                        "org_name": "潍坊圆心大药房有限责任公司奎文圆心诊所",
                                        "org_type": 6,
                                        "org_code": "0000001701",
                                        "order_index": 11,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 840,
                                        "children": [],
                                        "org_id": "0285bb9c699b11ee868d525400f6496b",
                                        "org_name": "青岛邻客智慧大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001704",
                                        "order_index": 12,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "960a9b59d44611eda79f5254007e4c80",
                                "org_name": "山东省",
                                "org_type": 2,
                                "org_code": "0000001540",
                                "order_index": 1,
                                "state": 1,
                                "is_ds": 0
                            }
                        ],
                        "org_id": "0992cef372f911e998fd0242ac110002",
                        "org_name": "山东区",
                        "org_type": 1,
                        "org_code": "0000000421",
                        "order_index": 3,
                        "state": 1,
                        "is_ds": 0
                    },
                    {
                        "id": 867,
                        "children": [
                            {
                                "id": 13,
                                "children": [
                                    {
                                        "id": 161,
                                        "children": [],
                                        "org_id": "ea3273f35f9611eb8d920242ac110004",
                                        "org_name": "江苏云钥医疗科技有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000902",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 188,
                                        "children": [
                                            {
                                                "id": 470,
                                                "children": [
                                                    {
                                                        "id": 471,
                                                        "children": [],
                                                        "org_id": "47338138e80c11e98b900242ac110002",
                                                        "org_name": "江苏圆心医药科技有限公司八百大道店",
                                                        "org_type": 6,
                                                        "org_code": "0000000529",
                                                        "order_index": 1,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 495,
                                                        "children": [],
                                                        "org_id": "eb564fdbe80a11e994e90242ac110003",
                                                        "org_name": "江苏圆心医药科技有限公司南京第八药店",
                                                        "org_type": 6,
                                                        "org_code": "0000000527",
                                                        "order_index": 2,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 515,
                                                        "children": [],
                                                        "org_id": "f147c77ee80e11e994e90242ac110003",
                                                        "org_name": "江苏圆心医药科技有限公司广州路店",
                                                        "org_type": 6,
                                                        "org_code": "0000000530",
                                                        "order_index": 3,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 526,
                                                        "children": [],
                                                        "org_id": "43fe58d4e80a11e9a6cd0242ac110003",
                                                        "org_name": "江苏圆心医药科技有限公司文化名园店",
                                                        "org_type": 6,
                                                        "org_code": "0000000525",
                                                        "order_index": 4,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 535,
                                                        "children": [],
                                                        "org_id": "39a1a901e80f11e9a6cd0242ac110003",
                                                        "org_name": "江苏圆心医药科技有限公司文春路店",
                                                        "org_type": 6,
                                                        "org_code": "0000000531",
                                                        "order_index": 5,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 542,
                                                        "children": [],
                                                        "org_id": "48c19e0ae81011e994e90242ac110003",
                                                        "org_name": "江苏圆心医药科技有限公司姜家园店",
                                                        "org_type": 6,
                                                        "org_code": "0000000532",
                                                        "order_index": 6,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 546,
                                                        "children": [],
                                                        "org_id": "fd652b114b8511e9ab750242ac110003",
                                                        "org_name": "江苏圆心医药科技有限公司长乐路店",
                                                        "org_type": 6,
                                                        "org_code": "0000000309",
                                                        "order_index": 7,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 552,
                                                        "children": [],
                                                        "org_id": "29896e61511b11e9a1260242ac110003",
                                                        "org_name": "江苏圆心医药科技有限公司泰山路店",
                                                        "org_type": 6,
                                                        "org_code": "0000000329",
                                                        "order_index": 8,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 556,
                                                        "children": [],
                                                        "org_id": "bebfaf994eae11e9884c0242ac110003",
                                                        "org_name": "江苏圆心医药科技有限公司红山路店",
                                                        "org_type": 6,
                                                        "org_code": "0000000319",
                                                        "order_index": 9,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 560,
                                                        "children": [],
                                                        "org_id": "8d6fb9ac633411eaab0a0242ac110003",
                                                        "org_name": "江苏圆心医药科技有限公司长乐路店.",
                                                        "org_type": 6,
                                                        "org_code": "0000000640",
                                                        "order_index": 10,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 561,
                                                        "children": [],
                                                        "org_id": "62dc9d51e0d211e9b2600242ac110003",
                                                        "org_name": "作废江苏圆心医药科技有限公司迈皋桥店",
                                                        "org_type": 7,
                                                        "org_code": "0000000522",
                                                        "order_index": 11,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 562,
                                                        "children": [],
                                                        "org_id": "a11590f1e80b11e994e90242ac110003",
                                                        "org_name": "江苏圆心医药科技有限公司龙湖半岛店",
                                                        "org_type": 6,
                                                        "org_code": "0000000528",
                                                        "order_index": 12,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 563,
                                                        "children": [],
                                                        "org_id": "358e24ed4eac11e9884c0242ac110003",
                                                        "org_name": "作废江苏圆心医药科技有限公司郁金香店",
                                                        "org_type": 7,
                                                        "org_code": "0000000317",
                                                        "order_index": 13,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 602,
                                                        "children": [],
                                                        "org_id": "df3afcbaf81111ec85f15254007fd0df",
                                                        "org_name": "江苏圆心医药科技有限公司苏州市立医院东区店",
                                                        "org_type": 6,
                                                        "org_code": "0000001346",
                                                        "order_index": 14,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 585,
                                                        "children": [],
                                                        "org_id": "2c0805bceaeb11ecb21f5254007fd0df",
                                                        "org_name": "江苏圆心医药科技有限公司溧阳建设路店",
                                                        "org_type": 6,
                                                        "org_code": "0000001312",
                                                        "order_index": 15,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 635,
                                                        "children": [],
                                                        "org_id": "a450e00763fe11edb4f05254009b39e4",
                                                        "org_name": "江苏圆心医药科技有限公司钟阜路店",
                                                        "org_type": 6,
                                                        "org_code": "0000001441",
                                                        "order_index": 16,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 735,
                                                        "children": [],
                                                        "org_id": "b70e0620cd2f11eda1b752540072d236",
                                                        "org_name": "江苏圆心医药科技有限公司万民店",
                                                        "org_type": 6,
                                                        "org_code": "0000001508",
                                                        "order_index": 17,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 732,
                                                        "children": [],
                                                        "org_id": "38fab82ccd3111ed943e525400994832",
                                                        "org_name": "江苏圆心医药科技有限公司无锡人医店",
                                                        "org_type": 6,
                                                        "org_code": "0000001510",
                                                        "order_index": 18,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 246,
                                                        "children": [],
                                                        "org_id": "4ef5db544eab11e990b90242ac110002",
                                                        "org_name": "江苏圆心医药科技有限公司南京秦淮店",
                                                        "org_type": 6,
                                                        "org_code": "0000000316",
                                                        "order_index": 19,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 734,
                                                        "children": [],
                                                        "org_id": "64be4a6acd3011ed943e525400994832",
                                                        "org_name": "江苏圆心医药科技有限公司无锡二院店",
                                                        "org_type": 6,
                                                        "org_code": "0000001509",
                                                        "order_index": 20,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 850,
                                                        "children": [],
                                                        "org_id": "9ae1635081e511eeaa315254009b39e4",
                                                        "org_name": "江苏圆心医药科技有限公司南京莫愁路店",
                                                        "org_type": 6,
                                                        "org_code": "0000001719",
                                                        "order_index": 21,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    }
                                                ],
                                                "org_id": "28beaf39e0d211e9aa8a0242ac110003",
                                                "org_name": "江苏圆心医药科技有限公司",
                                                "org_type": 9,
                                                "org_code": "0000000521",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 498,
                                                "children": [],
                                                "org_id": "4163cf3783a311eb96025254007fd0df",
                                                "org_name": "南京圆心门诊部有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000911",
                                                "order_index": 2,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 199,
                                                "children": [],
                                                "org_id": "25135a14511c11e9a1260242ac110003",
                                                "org_name": "南京聚医堂中医诊所有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000330",
                                                "order_index": 3,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 227,
                                                "children": [],
                                                "org_id": "0281848c4eaa11e9884c0242ac110003",
                                                "org_name": "南京天一中信药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000315",
                                                "order_index": 4,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 269,
                                                "children": [],
                                                "org_id": "c1e265344ea911e981d90242ac110002",
                                                "org_name": "南京静和药业有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000314",
                                                "order_index": 5,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 294,
                                                "children": [],
                                                "org_id": "0c817fdb32fd11eb97890242ac110004",
                                                "org_name": "南京康昱夫药店有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000860",
                                                "order_index": 6,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 303,
                                                "children": [],
                                                "org_id": "48ab89e94eb111e981d90242ac110002",
                                                "org_name": "南京康世药店",
                                                "org_type": 6,
                                                "org_code": "0000000322",
                                                "order_index": 7,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 318,
                                                "children": [],
                                                "org_id": "2ab2a6ec4b8711e9b8da0242ac110004",
                                                "org_name": "南京天一中信圆心药店有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000311",
                                                "order_index": 8,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 334,
                                                "children": [],
                                                "org_id": "d6efef5c4eb011e981d90242ac110002",
                                                "org_name": "南京圆心康瑞药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000321",
                                                "order_index": 9,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 348,
                                                "children": [],
                                                "org_id": "50ad825d4b8611e9b8da0242ac110004",
                                                "org_name": "南京圆心天悦药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000310",
                                                "order_index": 10,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 355,
                                                "children": [],
                                                "org_id": "1a3cd23f72a011ec8c875254009b39e4",
                                                "org_name": "南京康昱浦药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000001205",
                                                "order_index": 11,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 370,
                                                "children": [
                                                    {
                                                        "id": 460,
                                                        "children": [],
                                                        "org_id": "b2f24656506211e9975f0242ac110002",
                                                        "org_name": "作废江苏圆心医药有限公司中圣南街店",
                                                        "org_type": 7,
                                                        "org_code": "0000000325",
                                                        "order_index": 1,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 501,
                                                        "children": [],
                                                        "org_id": "8e61bc2ed94611ebb77752540072d236",
                                                        "org_name": "南京院边",
                                                        "org_type": 8,
                                                        "org_code": "0000000979",
                                                        "order_index": 2,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 519,
                                                        "children": [],
                                                        "org_id": "b542841cd94811ebb77752540072d236",
                                                        "org_name": "南京电商",
                                                        "org_type": 6,
                                                        "org_code": "0000000980",
                                                        "order_index": 3,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 528,
                                                        "children": [],
                                                        "org_id": "0803aa62d94911ebb77752540072d236",
                                                        "org_name": "南京社区",
                                                        "org_type": 8,
                                                        "org_code": "0000000981",
                                                        "order_index": 4,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 533,
                                                        "children": [],
                                                        "org_id": "3baa4a7f4eaf11e981d90242ac110002",
                                                        "org_name": "作废南京圆心放心人药房有限公司",
                                                        "org_type": 7,
                                                        "org_code": "0000000320",
                                                        "order_index": 5,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 540,
                                                        "children": [],
                                                        "org_id": "c800972f4ec011e990b90242ac110002",
                                                        "org_name": "作废南京康世药店二店",
                                                        "org_type": 7,
                                                        "org_code": "0000000324",
                                                        "order_index": 6,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 547,
                                                        "children": [],
                                                        "org_id": "2b9f4ad84ea911e9884c0242ac110003",
                                                        "org_name": "作废南京圆心诚诚药房有限公司",
                                                        "org_type": 7,
                                                        "org_code": "0000000313",
                                                        "order_index": 7,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 554,
                                                        "children": [],
                                                        "org_id": "520e2ec8e05311eabb360242ac110002",
                                                        "org_name": "测试店",
                                                        "org_type": 6,
                                                        "org_code": "0000000808",
                                                        "order_index": 8,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    }
                                                ],
                                                "org_id": "0cbebfbcc57e11eab9e60242ac110002",
                                                "org_name": "停用中",
                                                "org_type": 8,
                                                "org_code": "0000000794",
                                                "order_index": 12,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 636,
                                                "children": [
                                                    {
                                                        "id": 638,
                                                        "children": [],
                                                        "org_id": "987a463d707811eda139525400f6496b",
                                                        "org_name": "禁用江苏圆心医药科技有限公司长乐路店.",
                                                        "org_type": 6,
                                                        "org_code": "0000001446",
                                                        "order_index": 1,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    }
                                                ],
                                                "org_id": "1332058f706011edb2775254009b39e4",
                                                "org_name": "江苏圆心医药科技有限公司-1",
                                                "org_type": 3,
                                                "org_code": "0000001445",
                                                "order_index": 13,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 890,
                                                "children": [],
                                                "org_id": "979e4a89df5d11eeb0bace7732f98195",
                                                "org_name": "江苏圆心医药科技有限公司圆边生活常州店",
                                                "org_type": 6,
                                                "org_code": "0000001779",
                                                "order_index": 14,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 896,
                                                "children": [],
                                                "org_id": "7fa5a600fab911ee89352adcf763c22a",
                                                "org_name": "禁用",
                                                "org_type": 6,
                                                "org_code": "0000001787",
                                                "order_index": 15,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 897,
                                                "children": [],
                                                "org_id": "2144769ffaba11ee89352adcf763c22a",
                                                "org_name": "苏州市圆边便利店有限公司",
                                                "org_type": 6,
                                                "org_code": "0000001788",
                                                "order_index": 16,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "21d3fc773fb211e980b10242ac110003",
                                        "org_name": "南京",
                                        "org_type": 3,
                                        "org_code": "0000000259",
                                        "order_index": 2,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 21,
                                        "children": [
                                            {
                                                "id": 120,
                                                "children": [
                                                    {
                                                        "id": 121,
                                                        "children": [],
                                                        "org_id": "cd0f6eda3fb211e980b10242ac110003",
                                                        "org_name": "南通圆心大药房有限公司",
                                                        "org_type": 6,
                                                        "org_code": "0000000262",
                                                        "order_index": 1,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 159,
                                                        "children": [],
                                                        "org_id": "e599ef223fb211e980b10242ac110003",
                                                        "org_name": "作废南通同济门诊部有限公司",
                                                        "org_type": 7,
                                                        "org_code": "0000000263",
                                                        "order_index": 2,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 189,
                                                        "children": [],
                                                        "org_id": "fe619f783fb211e98c5b0242ac110004",
                                                        "org_name": "作废南通圆心大药房有限公司端平桥店",
                                                        "org_type": 7,
                                                        "org_code": "0000000264",
                                                        "order_index": 3,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 219,
                                                        "children": [],
                                                        "org_id": "2127c12b3fb311e980b10242ac110003",
                                                        "org_name": "南通市富贵大药房有限公司",
                                                        "org_type": 6,
                                                        "org_code": "0000000265",
                                                        "order_index": 4,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 242,
                                                        "children": [],
                                                        "org_id": "33ebadc73fb311e980b10242ac110003",
                                                        "org_name": "作废南通圆心大药房有限公司青年西路店",
                                                        "org_type": 7,
                                                        "org_code": "0000000266",
                                                        "order_index": 5,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    }
                                                ],
                                                "org_id": "00870d633fb211e9aec10242ac110003",
                                                "org_name": "南通",
                                                "org_type": 3,
                                                "org_code": "0000000258",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 158,
                                                "children": [
                                                    {
                                                        "id": 450,
                                                        "children": [],
                                                        "org_id": "ac29ff233fb311e9aec10242ac110003",
                                                        "org_name": "溧阳市圆心大药房有限公司",
                                                        "org_type": 6,
                                                        "org_code": "0000000268",
                                                        "order_index": 1,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 166,
                                                        "children": [],
                                                        "org_id": "aa24cea0453611e9ad3c0242ac110003",
                                                        "org_name": "常州圆心大药房有限公司",
                                                        "org_type": 6,
                                                        "org_code": "0000000291",
                                                        "order_index": 2,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 195,
                                                        "children": [],
                                                        "org_id": "e707cf75453611e980120242ac110004",
                                                        "org_name": "常州市万民大药房有限公司",
                                                        "org_type": 6,
                                                        "org_code": "0000000292",
                                                        "order_index": 3,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    }
                                                ],
                                                "org_id": "41ffeaf23fb211e980b10242ac110003",
                                                "org_name": "常州",
                                                "org_type": 3,
                                                "org_code": "0000000260",
                                                "order_index": 2,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 190,
                                                "children": [
                                                    {
                                                        "id": 453,
                                                        "children": [],
                                                        "org_id": "39e9ad06448711e9bdf90242ac110003",
                                                        "org_name": "苏州市百家姓医药有限公司",
                                                        "org_type": 6,
                                                        "org_code": "0000000285",
                                                        "order_index": 1,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 489,
                                                        "children": [],
                                                        "org_id": "f496fc11448711e9bf0e0242ac110004",
                                                        "org_name": "苏州瑞麟医药商店有限公司",
                                                        "org_type": 6,
                                                        "org_code": "0000000286",
                                                        "order_index": 2,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 194,
                                                        "children": [],
                                                        "org_id": "baf7c1c5448c11e9bec20242ac110003",
                                                        "org_name": "作废苏州市百家姓医药有限公司第三分店",
                                                        "org_type": 7,
                                                        "org_code": "0000000288",
                                                        "order_index": 3,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 239,
                                                        "children": [],
                                                        "org_id": "746601cede3f11eba3015254009b39e4",
                                                        "org_name": "苏州市天明大药房有限公司",
                                                        "org_type": 6,
                                                        "org_code": "0000000984",
                                                        "order_index": 4,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 773,
                                                        "children": [],
                                                        "org_id": "bff5e838dffc11ed8eaa5254007e4c80",
                                                        "org_name": "苏州市百顺药房有限公司",
                                                        "org_type": 6,
                                                        "org_code": "0000001563",
                                                        "order_index": 5,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 778,
                                                        "children": [],
                                                        "org_id": "2e79168dee0811edaa92525400f6496b",
                                                        "org_name": "苏州市百顺药房有限公司东桥药店",
                                                        "org_type": 6,
                                                        "org_code": "0000001580",
                                                        "order_index": 6,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 817,
                                                        "children": [],
                                                        "org_id": "8c4767441a1111eeb6f45254007fd0df",
                                                        "org_name": "苏州市圆心医疗器械有限公司",
                                                        "org_type": 6,
                                                        "org_code": "0000001650",
                                                        "order_index": 7,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    }
                                                ],
                                                "org_id": "4edf65f33fb311e980b10242ac110003",
                                                "org_name": "苏州",
                                                "org_type": 3,
                                                "org_code": "0000000267",
                                                "order_index": 3,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 220,
                                                "children": [
                                                    {
                                                        "id": 456,
                                                        "children": [],
                                                        "org_id": "a02fc8e9453511e980120242ac110004",
                                                        "org_name": "扬州市圆心大药房有限公司",
                                                        "org_type": 6,
                                                        "org_code": "0000000289",
                                                        "order_index": 1,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 490,
                                                        "children": [],
                                                        "org_id": "cf533236453511e9ad3c0242ac110003",
                                                        "org_name": "扬州市圆心大药房有限公司苏北店",
                                                        "org_type": 6,
                                                        "org_code": "0000000290",
                                                        "order_index": 2,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    }
                                                ],
                                                "org_id": "aea018e0414411e9b3e50242ac110004",
                                                "org_name": "扬州",
                                                "org_type": 3,
                                                "org_code": "0000000272",
                                                "order_index": 4,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 24,
                                                "children": [
                                                    {
                                                        "id": 131,
                                                        "children": [],
                                                        "org_id": "e0aa14b951d411e9a1260242ac110003",
                                                        "org_name": "作废兴化市圆心大药房有限公司",
                                                        "org_type": 7,
                                                        "org_code": "0000000333",
                                                        "order_index": 1,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    }
                                                ],
                                                "org_id": "3bff1017453711e9ad3c0242ac110003",
                                                "org_name": "泰州",
                                                "org_type": 8,
                                                "org_code": "0000000295",
                                                "order_index": 5,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 29,
                                                "children": [
                                                    {
                                                        "id": 133,
                                                        "children": [],
                                                        "org_id": "700b9b0e5a9011e9bc3a0242ac110003",
                                                        "org_name": "无锡圆心大药房有限公司",
                                                        "org_type": 6,
                                                        "org_code": "0000000342",
                                                        "order_index": 1,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 171,
                                                        "children": [],
                                                        "org_id": "e02b11b15a9011e9bc3a0242ac110003",
                                                        "org_name": "无锡圆心大药房有限公司兴源北路店",
                                                        "org_type": 6,
                                                        "org_code": "0000000343",
                                                        "order_index": 2,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 203,
                                                        "children": [],
                                                        "org_id": "42936a00b1a811e9bda10242ac110005",
                                                        "org_name": "宜兴圆心大药房有限公司",
                                                        "org_type": 6,
                                                        "org_code": "0000000480",
                                                        "order_index": 3,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    }
                                                ],
                                                "org_id": "1282b036541d11e9bf9a0242ac110003",
                                                "org_name": "无锡",
                                                "org_type": 3,
                                                "org_code": "0000000335",
                                                "order_index": 6,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 33,
                                                "children": [
                                                    {
                                                        "id": 132,
                                                        "children": [],
                                                        "org_id": "83420abe5a8e11e996270242ac110002",
                                                        "org_name": "江苏圆心医药有限公司解放路店",
                                                        "org_type": 6,
                                                        "org_code": "0000000340",
                                                        "order_index": 1,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    }
                                                ],
                                                "org_id": "d825df875a8d11e998460242ac110003",
                                                "org_name": "镇江",
                                                "org_type": 3,
                                                "org_code": "0000000339",
                                                "order_index": 7,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 37,
                                                "children": [
                                                    {
                                                        "id": 146,
                                                        "children": [],
                                                        "org_id": "ca1f584afb8311e9bb040242ac110003",
                                                        "org_name": "徐州彭客医药零售有限公司",
                                                        "org_type": 6,
                                                        "org_code": "0000000553",
                                                        "order_index": 1,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 599,
                                                        "children": [],
                                                        "org_id": "c697f919f68e11ec8e2d5254007fd0df",
                                                        "org_name": "徐州圆心大药房有限责任公司",
                                                        "org_type": 6,
                                                        "org_code": "0000001338",
                                                        "order_index": 2,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    }
                                                ],
                                                "org_id": "99e21962fb8311e980090242ac110002",
                                                "org_name": "徐州",
                                                "org_type": 3,
                                                "org_code": "0000000552",
                                                "order_index": 8,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 44,
                                                "children": [
                                                    {
                                                        "id": 148,
                                                        "children": [],
                                                        "org_id": "fdf5874539c24238b3ac8ade1f6ea40e",
                                                        "org_name": "作废宿迁国慈药房有限公司",
                                                        "org_type": 7,
                                                        "org_code": "0000000601",
                                                        "order_index": 1,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 596,
                                                        "children": [],
                                                        "org_id": "661e6b37f28e11ec997152540072d236",
                                                        "org_name": "宿迁国慈药房有限公司",
                                                        "org_type": 6,
                                                        "org_code": "0000001327",
                                                        "order_index": 2,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    }
                                                ],
                                                "org_id": "9aca473851d241958162923b6934f2fb",
                                                "org_name": "宿迁",
                                                "org_type": 3,
                                                "org_code": "0000000600",
                                                "order_index": 9,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 835,
                                                "children": [],
                                                "org_id": "764c42b0520411eea66852540072d236",
                                                "org_name": "盐城市康佑大药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000001690",
                                                "order_index": 10,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "be76fac9752c11e99cfe0242ac110003",
                                        "org_name": "非南京",
                                        "org_type": 8,
                                        "org_code": "0000000430",
                                        "order_index": 3,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "cff88fa972f811e998fd0242ac110002",
                                "org_name": "江苏省",
                                "org_type": 2,
                                "org_code": "0000000420",
                                "order_index": 1,
                                "state": 1,
                                "is_ds": 0
                            }
                        ],
                        "org_id": "21089fc7aba911eebdd05254007fd0df",
                        "org_name": "江苏区",
                        "org_type": 1,
                        "org_code": "0000001744",
                        "order_index": 4,
                        "state": 1,
                        "is_ds": 0
                    },
                    {
                        "id": 118,
                        "children": [
                            {
                                "id": 144,
                                "children": [
                                    {
                                        "id": 451,
                                        "children": [],
                                        "org_id": "5e2d831c0f2811e994a00242ac110004",
                                        "org_name": "成都市京卫药业有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000095",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 168,
                                        "children": [],
                                        "org_id": "75e2e15035b011e9876e0242ac110003",
                                        "org_name": "成都圆心华康大药房有限责任公司",
                                        "org_type": 6,
                                        "org_code": "0000000245",
                                        "order_index": 2,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 200,
                                        "children": [],
                                        "org_id": "180066bbdebf11e9b29c0242ac110003",
                                        "org_name": "四川圆心妙手大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000518",
                                        "order_index": 3,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 225,
                                        "children": [],
                                        "org_id": "a5d485e035b211e9b3f00242ac110003",
                                        "org_name": "成都圆心华艾大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000246",
                                        "order_index": 4,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 261,
                                        "children": [],
                                        "org_id": "6edf3f2f82d911eaa6d80242ac110002",
                                        "org_name": "成都华康药店",
                                        "org_type": 6,
                                        "org_code": "0000000716",
                                        "order_index": 5,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 277,
                                        "children": [],
                                        "org_id": "aa9debf0d19511eaa8390242ac110004",
                                        "org_name": "成都武侯圆心诊所有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000797",
                                        "order_index": 6,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 295,
                                        "children": [],
                                        "org_id": "dbcae3a7515c11eb8d3a0242ac110002",
                                        "org_name": "成都温江永辉圆心大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000869",
                                        "order_index": 7,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 310,
                                        "children": [],
                                        "org_id": "621781678d3611ebbc065254007fd0df",
                                        "org_name": "四川圆心简医大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000914",
                                        "order_index": 8,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 328,
                                        "children": [],
                                        "org_id": "256335fce83d11eb9bc25254009b39e4",
                                        "org_name": "成都市温江区益生堂大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001010",
                                        "order_index": 9,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 332,
                                        "children": [],
                                        "org_id": "db46bc2c5cd811ecad415254007fd0df",
                                        "org_name": "四川圆心华愈大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001160",
                                        "order_index": 10,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 346,
                                        "children": [],
                                        "org_id": "1172ff198a4811ecb69e5254007fd0df",
                                        "org_name": "四川圆心华升大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001244",
                                        "order_index": 11,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 356,
                                        "children": [],
                                        "org_id": "9c4521908a4711ecb69e5254007fd0df",
                                        "org_name": "成都武侯圆心华愈诊所有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001243",
                                        "order_index": 12,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 367,
                                        "children": [],
                                        "org_id": "b22a44dfb54811eca3f75254007fd0df",
                                        "org_name": "四川圆心妙手店",
                                        "org_type": 6,
                                        "org_code": "0000001278",
                                        "order_index": 13,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 610,
                                        "children": [],
                                        "org_id": "6d1ed399fc0711ecb7d05254009b39e4",
                                        "org_name": "四川人福吉康大药房有限责任公司",
                                        "org_type": 6,
                                        "org_code": "0000001349",
                                        "order_index": 14,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 614,
                                        "children": [],
                                        "org_id": "f9850dfafc0711ecb7d05254009b39e4",
                                        "org_name": "四川兴禾益大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001350",
                                        "order_index": 15,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 613,
                                        "children": [],
                                        "org_id": "dd8e132dfc3311ecb7d05254009b39e4",
                                        "org_name": "四川人福吉康",
                                        "org_type": 6,
                                        "org_code": "0000001351",
                                        "order_index": 16,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 611,
                                        "children": [],
                                        "org_id": "926982e8fc3411ecb7d05254009b39e4",
                                        "org_name": "四川兴禾益大药房",
                                        "org_type": 6,
                                        "org_code": "0000001352",
                                        "order_index": 17,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 792,
                                        "children": [
                                            {
                                                "id": 793,
                                                "children": [],
                                                "org_id": "6220f64b06a211eeae66525400f6496b",
                                                "org_name": "四川百家仁健康大药房连锁有限公司新都区学院路店",
                                                "org_type": 6,
                                                "org_code": "0000001617",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 794,
                                                "children": [],
                                                "org_id": "a9e6605406a211ee95545254007fd0df",
                                                "org_name": "四川百家仁健康大药房连锁有限公司新都区外南街店",
                                                "org_type": 6,
                                                "org_code": "0000001618",
                                                "order_index": 2,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 795,
                                                "children": [],
                                                "org_id": "20456a6506a311ee8c4b52540072d236",
                                                "org_name": "四川百家仁健康大药房连锁有限公司新都区桂湖街道桂湖东路店",
                                                "org_type": 6,
                                                "org_code": "0000001619",
                                                "order_index": 3,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "f8ca90a106a111eeae66525400f6496b",
                                        "org_name": "四川百家仁健康大药房连锁有限公司",
                                        "org_type": 9,
                                        "org_code": "0000001616",
                                        "order_index": 18,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 824,
                                        "children": [],
                                        "org_id": "67be1037250411ee8cf35254007fd0df",
                                        "org_name": "四川圆心永友大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001659",
                                        "order_index": 19,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 842,
                                        "children": [
                                            {
                                                "id": 843,
                                                "children": [],
                                                "org_id": "1f1ad64d6e5211eeaa315254009b39e4",
                                                "org_name": "四川圆心大药房连锁有限公司青羊区草市街药店",
                                                "org_type": 6,
                                                "org_code": "0000001711",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 844,
                                                "children": [],
                                                "org_id": "5bcbcaae6e5211eeaa315254009b39e4",
                                                "org_name": "四川圆心大药房连锁有限公司武侯区致民路药店",
                                                "org_type": 6,
                                                "org_code": "0000001712",
                                                "order_index": 2,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 845,
                                                "children": [],
                                                "org_id": "b3ac016a76e011eeaa315254009b39e4",
                                                "org_name": "四川圆心大药房连锁有限公司温江区柳城镇药店",
                                                "org_type": 6,
                                                "org_code": "0000001713",
                                                "order_index": 3,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 846,
                                                "children": [],
                                                "org_id": "2100be8076e111ee868d525400f6496b",
                                                "org_name": "四川圆心大药房连锁有限公司锦江区静明路药店",
                                                "org_type": 6,
                                                "org_code": "0000001714",
                                                "order_index": 4,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 847,
                                                "children": [],
                                                "org_id": "af23b24e76e311eeaa315254009b39e4",
                                                "org_name": "四川圆心大药房连锁有限公司武侯区浆洗街药店",
                                                "org_type": 6,
                                                "org_code": "0000001716",
                                                "order_index": 5,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 851,
                                                "children": [],
                                                "org_id": "1323956481ef11ee94fe5254007fd0df",
                                                "org_name": "四川圆心大药房连锁有限公司天府新区海昌路药店",
                                                "org_type": 6,
                                                "org_code": "0000001721",
                                                "order_index": 6,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 853,
                                                "children": [],
                                                "org_id": "6e3708d2847311eebdd05254007fd0df",
                                                "org_name": "四川圆心大药房连锁有限公司都江堰市永友路药店",
                                                "org_type": 6,
                                                "org_code": "0000001726",
                                                "order_index": 7,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 854,
                                                "children": [],
                                                "org_id": "b3df387a847311eebdd05254007fd0df",
                                                "org_name": "四川圆心大药房连锁有限公司高新区尚锦路药店",
                                                "org_type": 6,
                                                "org_code": "0000001727",
                                                "order_index": 8,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 855,
                                                "children": [],
                                                "org_id": "f9350122847311eeaff752540072d236",
                                                "org_name": "四川圆心大药房连锁有限公司简阳市利民街药店",
                                                "org_type": 6,
                                                "org_code": "0000001728",
                                                "order_index": 9,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 856,
                                                "children": [],
                                                "org_id": "2d5dd168847411ee9ed95254009b39e4",
                                                "org_name": "四川圆心大药房连锁有限公司温江区八一路药店",
                                                "org_type": 6,
                                                "org_code": "0000001729",
                                                "order_index": 10,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "179d11d76e5111ee868d525400f6496b",
                                        "org_name": "四川圆心大药房连锁有限公司",
                                        "org_type": 9,
                                        "org_code": "0000001708",
                                        "order_index": 20,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 884,
                                        "children": [],
                                        "org_id": "48b9c0a0b38111eebdd05254007fd0df",
                                        "org_name": "四川兴禾益大药房有限公司(作废)",
                                        "org_type": 6,
                                        "org_code": "0000001768",
                                        "order_index": 21,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 905,
                                        "children": [],
                                        "org_id": "ae1f4b570f3e11ef89352adcf763c22a",
                                        "org_name": "成都圆边便利店管理有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001803",
                                        "order_index": 22,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "cdd3a9ed238a4fe1ba2289cff202d474",
                                "org_name": "四川省",
                                "org_type": 2,
                                "org_code": "0000000608",
                                "order_index": 1,
                                "state": 1,
                                "is_ds": 0
                            },
                            {
                                "id": 178,
                                "children": [
                                    {
                                        "id": 458,
                                        "children": [],
                                        "org_id": "018ea96935b511e9876e0242ac110003",
                                        "org_name": "重庆沙坪坝公信网门特药店",
                                        "org_type": 6,
                                        "org_code": "0000000248",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 491,
                                        "children": [],
                                        "org_id": "eac51d0f35b511e9b3f00242ac110003",
                                        "org_name": "重庆圆心大药房有限公司渝中区医学院路店",
                                        "org_type": 6,
                                        "org_code": "0000000249",
                                        "order_index": 2,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 196,
                                        "children": [],
                                        "org_id": "535092db35b611e9876e0242ac110003",
                                        "org_name": "重庆圆心大药房有限公司大足区棠香街道药店",
                                        "org_type": 6,
                                        "org_code": "0000000250",
                                        "order_index": 3,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 226,
                                        "children": [],
                                        "org_id": "3669eee735b711e9ac260242ac110004",
                                        "org_name": "重庆圆心大药房有限公司新桥店",
                                        "org_type": 6,
                                        "org_code": "0000000251",
                                        "order_index": 4,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 247,
                                        "children": [],
                                        "org_id": "c5442d8bdebf11e99f490242ac110003",
                                        "org_name": "重庆圆心妙手大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000519",
                                        "order_index": 5,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 278,
                                        "children": [],
                                        "org_id": "4ffb2d53e11711ea8a460242ac110004",
                                        "org_name": "重庆巧医邻诊所管理有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000810",
                                        "order_index": 6,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 297,
                                        "children": [],
                                        "org_id": "4669ae12d32a11eb8bac5254009b39e4",
                                        "org_name": "重庆新加特大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000970",
                                        "order_index": 7,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 300,
                                        "children": [],
                                        "org_id": "992a4b6220c311ec8bef5254009b39e4",
                                        "org_name": "重庆新加特大药房",
                                        "org_type": 6,
                                        "org_code": "0000001096",
                                        "order_index": 8,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 326,
                                        "children": [],
                                        "org_id": "ae64d006de5911eba3015254009b39e4",
                                        "org_name": "重庆圆心大药房有限公司公卫店",
                                        "org_type": 6,
                                        "org_code": "0000000985",
                                        "order_index": 9,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 331,
                                        "children": [],
                                        "org_id": "7bf77093300b11ec911f5254007fd0df",
                                        "org_name": "重庆圆心大药房有限公司高滩岩店",
                                        "org_type": 6,
                                        "org_code": "0000001117",
                                        "order_index": 10,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 775,
                                        "children": [
                                            {
                                                "id": 776,
                                                "children": [],
                                                "org_id": "196b0a67eb1111edaa92525400f6496b",
                                                "org_name": "重庆圆心大药房连锁有限公司茶园店",
                                                "org_type": 6,
                                                "org_code": "0000001576",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 783,
                                                "children": [],
                                                "org_id": "89f61775f93611eda7f75254007fd0df",
                                                "org_name": "重庆圆心大药房连锁有限公司新桥店",
                                                "org_type": 6,
                                                "org_code": "0000001595",
                                                "order_index": 2,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 784,
                                                "children": [],
                                                "org_id": "e7576ce4f93611ed8ab4525400f6496b",
                                                "org_name": "重庆圆心大药房连锁有限公司高滩岩店",
                                                "org_type": 6,
                                                "org_code": "0000001596",
                                                "order_index": 3,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 785,
                                                "children": [],
                                                "org_id": "2e1f6402f93711edb4805254009b39e4",
                                                "org_name": "重庆圆心大药房连锁有限公司医学院路店",
                                                "org_type": 6,
                                                "org_code": "0000001598",
                                                "order_index": 4,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 786,
                                                "children": [],
                                                "org_id": "ae78e821f93711ed967c52540072d236",
                                                "org_name": "重庆圆心大药房连锁有限公司公卫店",
                                                "org_type": 6,
                                                "org_code": "0000001600",
                                                "order_index": 5,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "5f05c17eeb1011edbc3452540072d236",
                                        "org_name": "重庆圆心大药房连锁有限公司",
                                        "org_type": 9,
                                        "org_code": "0000001575",
                                        "order_index": 11,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "1252aa6267a7463eb866a5beab5f6abc",
                                "org_name": "重庆市",
                                "org_type": 2,
                                "org_code": "0000000609",
                                "order_index": 2,
                                "state": 1,
                                "is_ds": 0
                            }
                        ],
                        "org_id": "5c70da331d3611e9874a0242ac110003",
                        "org_name": "川渝区",
                        "org_type": 1,
                        "org_code": "0000000113",
                        "order_index": 5,
                        "state": 1,
                        "is_ds": 0
                    },
                    {
                        "id": 36,
                        "children": [
                            {
                                "id": 753,
                                "children": [
                                    {
                                        "id": 756,
                                        "children": [
                                            {
                                                "id": 757,
                                                "children": [],
                                                "org_id": "f26ee959d10511ed943f5254009b39e4",
                                                "org_name": "上海圆心云智大药房连锁有限公司鹤庆路店",
                                                "org_type": 6,
                                                "org_code": "0000001517",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 758,
                                                "children": [],
                                                "org_id": "7658f1bed10711eda083525400994832",
                                                "org_name": "上海圆心云智大药房连锁有限公司剑川路店",
                                                "org_type": 6,
                                                "org_code": "0000001519",
                                                "order_index": 2,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 759,
                                                "children": [],
                                                "org_id": "d8e7cee8d10711ed95c352540072d236",
                                                "org_name": "上海圆心云智大药房连锁有限公司瑞丽路店",
                                                "org_type": 6,
                                                "org_code": "0000001520",
                                                "order_index": 3,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 760,
                                                "children": [],
                                                "org_id": "5d9039ded10811eda79f5254007e4c80",
                                                "org_name": "上海圆心云智大药房连锁有限公司新金桥路店",
                                                "org_type": 6,
                                                "org_code": "0000001522",
                                                "order_index": 4,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 761,
                                                "children": [],
                                                "org_id": "b0f0fb8ad10811ed943f5254009b39e4",
                                                "org_name": "上海圆心云智大药房连锁有限公司成山路一店",
                                                "org_type": 6,
                                                "org_code": "0000001523",
                                                "order_index": 5,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 762,
                                                "children": [],
                                                "org_id": "fa2f441ad2ad11ed943f5254009b39e4",
                                                "org_name": "上海圆心云智大药房连锁有限公司剑川路二店",
                                                "org_type": 6,
                                                "org_code": "0000001531",
                                                "order_index": 6,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 763,
                                                "children": [],
                                                "org_id": "beda1893d2ae11edb5705254007fd0df",
                                                "org_name": "上海圆心云智大药房连锁有限公司海宁路店",
                                                "org_type": 6,
                                                "org_code": "0000001533",
                                                "order_index": 7,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 764,
                                                "children": [],
                                                "org_id": "644158e4d2ae11edb5705254007fd0df",
                                                "org_name": "上海圆心云智大药房连锁有限公司铜川路店",
                                                "org_type": 6,
                                                "org_code": "0000001532",
                                                "order_index": 8,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 765,
                                                "children": [],
                                                "org_id": "152c06d8d2af11ed95c352540072d236",
                                                "org_name": "上海圆心云智大药房连锁有限公司影视路店",
                                                "org_type": 6,
                                                "org_code": "0000001534",
                                                "order_index": 9,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 766,
                                                "children": [],
                                                "org_id": "54825221d2af11ed943f5254009b39e4",
                                                "org_name": "上海圆心云智大药房连锁有限公司川周公路店",
                                                "org_type": 6,
                                                "org_code": "0000001535",
                                                "order_index": 10,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 767,
                                                "children": [],
                                                "org_id": "ada2b02ed2bf11ed99d1525400f6496b",
                                                "org_name": "上海圆心云智大药房连锁有限公司鹤庆路店(医保柜)",
                                                "org_type": 6,
                                                "org_code": "0000001536",
                                                "order_index": 11,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 768,
                                                "children": [],
                                                "org_id": "48769c56d2c011ed95c352540072d236",
                                                "org_name": "上海圆心云智大药房连锁有限公司剑川路二店(医保柜)",
                                                "org_type": 6,
                                                "org_code": "0000001537",
                                                "order_index": 12,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 893,
                                                "children": [],
                                                "org_id": "09b903d8e4f311eeb1c3229b69b81cb2",
                                                "org_name": "上海圆心云智大药房连锁有限公司川周公路店(医保柜)",
                                                "org_type": 6,
                                                "org_code": "0000001784",
                                                "order_index": 13,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 825,
                                                "children": [],
                                                "org_id": "258f28ef261d11eeb7fb5254009b39e4",
                                                "org_name": "上海圆心云智大药房连锁有限公司延长中路店",
                                                "org_type": 6,
                                                "org_code": "0000001664",
                                                "order_index": 14,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 852,
                                                "children": [],
                                                "org_id": "8e507d80829d11eeaead52540072d236",
                                                "org_name": "上海圆心云智大药房连锁有限公司梅川路店",
                                                "org_type": 6,
                                                "org_code": "0000001722",
                                                "order_index": 15,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 861,
                                                "children": [],
                                                "org_id": "0b2e8149949c11ee9ed95254009b39e4",
                                                "org_name": "上海圆心云智大药房连锁有限公司枫林路店",
                                                "org_type": 6,
                                                "org_code": "0000001738",
                                                "order_index": 16,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 885,
                                                "children": [],
                                                "org_id": "a8af775db67e11eebdd05254007fd0df",
                                                "org_name": "上海圆心云智大药房连锁有限公司希望路店",
                                                "org_type": 6,
                                                "org_code": "0000001772",
                                                "order_index": 17,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 903,
                                                "children": [],
                                                "org_id": "55c2a2190c1511ef89352adcf763c22a",
                                                "org_name": "上海圆心云智大药房连锁有限公司梅川路店(医保柜)",
                                                "org_type": 6,
                                                "org_code": "0000001799",
                                                "order_index": 18,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "c91ee504d10511eda083525400994832",
                                        "org_name": "上海圆心云智大药房连锁有限公司",
                                        "org_type": 9,
                                        "org_code": "0000001516",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 134,
                                        "children": [],
                                        "org_id": "fac369de5a9811e996270242ac110002",
                                        "org_name": "上海市圆心大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000346",
                                        "order_index": 2,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 176,
                                        "children": [],
                                        "org_id": "fd682034d43711e9a0d70242ac110003",
                                        "org_name": "上海圆心顺康大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000503",
                                        "order_index": 3,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 618,
                                        "children": [],
                                        "org_id": "6182e8df08b711eda9965254007fd0df",
                                        "org_name": "上海圆心云智万生堂大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001375",
                                        "order_index": 4,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 619,
                                        "children": [],
                                        "org_id": "42758e8d099911ed91c35254007fd0df",
                                        "org_name": "上海双丁大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001380",
                                        "order_index": 5,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 204,
                                        "children": [],
                                        "org_id": "42cadcccf41a11eb9b4d5254007fd0df",
                                        "org_name": "上海跃信药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001028",
                                        "order_index": 6,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 774,
                                        "children": [],
                                        "org_id": "594f536ce01111eda1465254009b39e4",
                                        "org_name": "上海安虹大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001567",
                                        "order_index": 7,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 919,
                                        "children": [],
                                        "org_id": "ecacfaf123a511ef89352adcf763c22a",
                                        "org_name": "上海圆心圆边便利店有限责任公司",
                                        "org_type": 6,
                                        "org_code": "0000001826",
                                        "order_index": 8,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "68610a79d44711ed89535254009b39e4",
                                "org_name": "上海市",
                                "org_type": 2,
                                "org_code": "0000001541",
                                "order_index": 1,
                                "state": 1,
                                "is_ds": 0
                            }
                        ],
                        "org_id": "95c2d2ac5a9911e998460242ac110003",
                        "org_name": "上海区",
                        "org_type": 1,
                        "org_code": "0000000347",
                        "order_index": 6,
                        "state": 1,
                        "is_ds": 0
                    },
                    {
                        "id": 40,
                        "children": [
                            {
                                "id": 147,
                                "children": [
                                    {
                                        "id": 464,
                                        "children": [],
                                        "org_id": "74b8ae7764b111e9b4420242ac110003",
                                        "org_name": "爱倍生共享药房（温州）有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000363",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 172,
                                        "children": [],
                                        "org_id": "3092b2e064b111e98ded0242ac110002",
                                        "org_name": "温州爱倍生谢池大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000362",
                                        "order_index": 2,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 160,
                                        "children": [],
                                        "org_id": "a2a1dd2f5b3211e9bc3a0242ac110003",
                                        "org_name": "宁波普利大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000349",
                                        "order_index": 3,
                                        "state": 0,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 202,
                                        "children": [],
                                        "org_id": "da5ffe848c2a11e99d530242ac110002",
                                        "org_name": "杭州妙手大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000437",
                                        "order_index": 4,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 232,
                                        "children": [],
                                        "org_id": "71827c4b8c2b11e99d530242ac110002",
                                        "org_name": "浙江圆心医药有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000438",
                                        "order_index": 5,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 252,
                                        "children": [],
                                        "org_id": "d003b2ff93ce11e9989a0242ac110002",
                                        "org_name": "湖州圆心大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000452",
                                        "order_index": 6,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 273,
                                        "children": [],
                                        "org_id": "6568f0d093e911e9aab20242ac110002",
                                        "org_name": "嘉兴爱倍生大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000453",
                                        "order_index": 7,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 288,
                                        "children": [],
                                        "org_id": "a7743c1fa46711e986760242ac110003",
                                        "org_name": "爱倍生共享药房（杭州）有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000470",
                                        "order_index": 8,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 304,
                                        "children": [],
                                        "org_id": "83343896b43311e99fd10242ac110003",
                                        "org_name": "台州爱倍生大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000482",
                                        "order_index": 9,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 42,
                                        "children": [],
                                        "org_id": "063bdb8eb77a11e981f30242ac110003",
                                        "org_name": "长兴圆心大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000483",
                                        "order_index": 10,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 46,
                                        "children": [],
                                        "org_id": "53787b69b8ca11e988e40242ac110003",
                                        "org_name": "宁波圆心大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000484",
                                        "order_index": 11,
                                        "state": 0,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 49,
                                        "children": [],
                                        "org_id": "f5a1b72df15911e98cc50242ac110003",
                                        "org_name": "宁波圆心益民大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000539",
                                        "order_index": 12,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 51,
                                        "children": [],
                                        "org_id": "28206ceeee6211e980080242ac110003",
                                        "org_name": "杭州爱倍生大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000537",
                                        "order_index": 13,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 53,
                                        "children": [],
                                        "org_id": "6ca0e3d9f4b211e990d10242ac110003",
                                        "org_name": "宁波爱倍生大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000540",
                                        "order_index": 14,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 55,
                                        "children": [],
                                        "org_id": "ec8aa06c4b1011ebb5050242ac110004",
                                        "org_name": "金华爱倍生大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000865",
                                        "order_index": 15,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 642,
                                        "children": [],
                                        "org_id": "dd2b2b64a54a11ed858a52540072d236",
                                        "org_name": "宁波圆心爱宁大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001461",
                                        "order_index": 16,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "984661d39f4e485298c695b20dae65c2",
                                "org_name": "浙江省",
                                "org_type": 2,
                                "org_code": "0000000598",
                                "order_index": 1,
                                "state": 1,
                                "is_ds": 0
                            }
                        ],
                        "org_id": "e7381c135b3111e998460242ac110003",
                        "org_name": "浙江区",
                        "org_type": 1,
                        "org_code": "0000000348",
                        "order_index": 7,
                        "state": 1,
                        "is_ds": 0
                    },
                    {
                        "id": 868,
                        "children": [
                            {
                                "id": 151,
                                "children": [
                                    {
                                        "id": 586,
                                        "children": [
                                            {
                                                "id": 587,
                                                "children": [],
                                                "org_id": "1cd65653f03e11ec8000525400f6496b",
                                                "org_name": "北京圆心大药房连锁有限公司安贞店",
                                                "org_type": 6,
                                                "org_code": "0000001315",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 590,
                                                "children": [],
                                                "org_id": "4edd3831f03b11ec8000525400f6496b",
                                                "org_name": "北京圆心大药房连锁有限公司安乐林路店",
                                                "org_type": 6,
                                                "org_code": "0000001314",
                                                "order_index": 2,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 594,
                                                "children": [],
                                                "org_id": "e1b1b0a4f03e11ec8000525400f6496b",
                                                "org_name": "北京圆心大药房连锁有限公司四惠陈家林店",
                                                "org_type": 6,
                                                "org_code": "0000001316",
                                                "order_index": 3,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 593,
                                                "children": [],
                                                "org_id": "91ff4959f04111ec8000525400f6496b",
                                                "org_name": "北京圆心大药房连锁有限公司丰葆路店",
                                                "org_type": 6,
                                                "org_code": "0000001317",
                                                "order_index": 4,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 595,
                                                "children": [],
                                                "org_id": "fbcb7c31f04111ec8000525400f6496b",
                                                "org_name": "北京圆心大药房连锁有限公司古城西路店",
                                                "org_type": 6,
                                                "org_code": "0000001318",
                                                "order_index": 5,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 592,
                                                "children": [],
                                                "org_id": "8aff60e8f04311ec8000525400f6496b",
                                                "org_name": "北京圆心大药房连锁有限公司嘉悦店",
                                                "org_type": 6,
                                                "org_code": "0000001320",
                                                "order_index": 6,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 589,
                                                "children": [],
                                                "org_id": "4b51350df04711ec8000525400f6496b",
                                                "org_name": "北京圆心大药房连锁有限公司十万平店",
                                                "org_type": 6,
                                                "org_code": "0000001321",
                                                "order_index": 7,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 591,
                                                "children": [],
                                                "org_id": "58efe116f04811ec8000525400f6496b",
                                                "org_name": "北京圆心大药房连锁有限公司双井店",
                                                "org_type": 6,
                                                "org_code": "0000001322",
                                                "order_index": 8,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 588,
                                                "children": [],
                                                "org_id": "34ab8838f04c11ec8000525400f6496b",
                                                "org_name": "北京圆心大药房连锁有限公司亦庄店",
                                                "org_type": 6,
                                                "org_code": "0000001323",
                                                "order_index": 9,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 598,
                                                "children": [],
                                                "org_id": "5b5c315df5ef11ec8e2d5254007fd0df",
                                                "org_name": "北京圆心大药房连锁有限公司潞苑东路店",
                                                "org_type": 6,
                                                "org_code": "0000001337",
                                                "order_index": 10,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 788,
                                                "children": [],
                                                "org_id": "0bed2e32038911ee99d75254009b39e4",
                                                "org_name": "北京圆心大药房连锁有限公司(丰葆路店)",
                                                "org_type": 6,
                                                "org_code": "0000001609",
                                                "order_index": 11,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "0d88935bf03511ec8000525400f6496b",
                                        "org_name": "北京圆心大药房连锁有限公司",
                                        "org_type": 9,
                                        "org_code": "0000001313",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 455,
                                        "children": [],
                                        "org_id": "9af498dc331d11e9b5a10242ac110004",
                                        "org_name": "北京祥安堂大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000232",
                                        "order_index": 2,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 165,
                                        "children": [],
                                        "org_id": "c8f3ffd5331e11e9a8440242ac110003",
                                        "org_name": "北京圆心妙手大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000233",
                                        "order_index": 3,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 198,
                                        "children": [],
                                        "org_id": "90a2ac5d5c0611e998460242ac110003",
                                        "org_name": "北京圆心新特大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000350",
                                        "order_index": 4,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 228,
                                        "children": [],
                                        "org_id": "1d94085bfaeb11e9be040242ac110003",
                                        "org_name": "金和",
                                        "org_type": 6,
                                        "org_code": "0000000549",
                                        "order_index": 5,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 248,
                                        "children": [],
                                        "org_id": "1b4ef7e944274eb7814b926f090a80ea",
                                        "org_name": "北京圆心康健大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000599",
                                        "order_index": 6,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 281,
                                        "children": [],
                                        "org_id": "17acf8ccdec411eb966a52540072d236",
                                        "org_name": "北京恒仁安康医药有限责任公司",
                                        "org_type": 6,
                                        "org_code": "0000000987",
                                        "order_index": 7,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 298,
                                        "children": [],
                                        "org_id": "ef2e4a5edee411eb966a52540072d236",
                                        "org_name": "北京嘉润安康医药有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000994",
                                        "order_index": 8,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 313,
                                        "children": [],
                                        "org_id": "b81e1bfcdee511eb966a52540072d236",
                                        "org_name": "北京嘉润福康医药有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000996",
                                        "order_index": 9,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 327,
                                        "children": [],
                                        "org_id": "3f680cdddee611eb966a52540072d236",
                                        "org_name": "北京健安仁和医药有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000997",
                                        "order_index": 10,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 341,
                                        "children": [],
                                        "org_id": "a67e470adee611eb966a52540072d236",
                                        "org_name": "北京圆心北三药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000999",
                                        "order_index": 11,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 357,
                                        "children": [],
                                        "org_id": "1577402b9ec711ec9f4a5254009b39e4",
                                        "org_name": "北京朝阳圆心大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001259",
                                        "order_index": 12,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 575,
                                        "children": [],
                                        "org_id": "afd4b88ec23d11eca38152540072d236",
                                        "org_name": "北京圆心阜成大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001280",
                                        "order_index": 13,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 616,
                                        "children": [],
                                        "org_id": "9f4f6beb070011eda9965254007fd0df",
                                        "org_name": "北京圆心潞河大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001360",
                                        "order_index": 14,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 737,
                                        "children": [],
                                        "org_id": "c645e604721611ed8e9852540072d236",
                                        "org_name": "北京百洋汇康智慧药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001448",
                                        "order_index": 15,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 837,
                                        "children": [],
                                        "org_id": "bdfbbbe3677511eeaa315254009b39e4",
                                        "org_name": "北京圆心恩济大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001694",
                                        "order_index": 16,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 838,
                                        "children": [],
                                        "org_id": "e8b77fb068a011eeaa315254009b39e4",
                                        "org_name": "方寸泉香（北京）科技有限公司大药房分店（停用）",
                                        "org_type": 6,
                                        "org_code": "0000001695",
                                        "order_index": 17,
                                        "state": 0,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 849,
                                        "children": [],
                                        "org_id": "7fdff72a795111ee94fe5254007fd0df",
                                        "org_name": "北京圆心航天药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001718",
                                        "order_index": 18,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 886,
                                        "children": [],
                                        "org_id": "276f5f64bbe111ee9ed95254009b39e4",
                                        "org_name": "北京京盛达医疗器械有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001774",
                                        "order_index": 19,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 892,
                                        "children": [],
                                        "org_id": "bd24fe76e19c11eeb0bace7732f98195",
                                        "org_name": "北京市.",
                                        "org_type": 6,
                                        "org_code": "0000001781",
                                        "order_index": 20,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 902,
                                        "children": [],
                                        "org_id": "9dd3ab94037011ef89352adcf763c22a",
                                        "org_name": "北京圆边便利店有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001798",
                                        "order_index": 21,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "d3365e2b5a2411eba2430242ac110003",
                                "org_name": "北京市",
                                "org_type": 2,
                                "org_code": "0000000893",
                                "order_index": 1,
                                "state": 1,
                                "is_ds": 0
                            }
                        ],
                        "org_id": "9e522480aba911eeaff752540072d236",
                        "org_name": "北京区",
                        "org_type": 1,
                        "org_code": "0000001747",
                        "order_index": 8,
                        "state": 1,
                        "is_ds": 0
                    },
                    {
                        "id": 869,
                        "children": [
                            {
                                "id": 771,
                                "children": [
                                    {
                                        "id": 145,
                                        "children": [
                                            {
                                                "id": 466,
                                                "children": [],
                                                "org_id": "625b480d8bed11e98bb00242ac110004",
                                                "org_name": "湖南圆心大药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000436",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 179,
                                                "children": [],
                                                "org_id": "bc2ddc39f55811e9bd9d0242ac110003",
                                                "org_name": "湖南圆心大药房有限公司(电商旗舰店)",
                                                "org_type": 6,
                                                "org_code": "0000000542",
                                                "order_index": 2,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 211,
                                                "children": [],
                                                "org_id": "a51b2d33793211ec8386525400f6496b",
                                                "org_name": "湖南圆心大药房有限公司益阳分店",
                                                "org_type": 6,
                                                "org_code": "0000001228",
                                                "order_index": 3,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 217,
                                                "children": [],
                                                "org_id": "8460a24b1b4911eba6970242ac110004",
                                                "org_name": "湘潭市岳塘蒲永海中医综合诊所",
                                                "org_type": 6,
                                                "org_code": "0000000852",
                                                "order_index": 4,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 257,
                                                "children": [],
                                                "org_id": "6c0a3235eb2711e988e40242ac110002",
                                                "org_name": "湖南圆心大药房有限公司湘雅分店",
                                                "org_type": 6,
                                                "org_code": "0000000536",
                                                "order_index": 5,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 279,
                                                "children": [],
                                                "org_id": "1fb4b4356409445f8532ab2a0ec9948a",
                                                "org_name": "湖南圆心大药房有限公司解放大道分店",
                                                "org_type": 6,
                                                "org_code": "0000000613",
                                                "order_index": 6,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 287,
                                                "children": [],
                                                "org_id": "9fa9671a730911e998fd0242ac110002",
                                                "org_name": "长沙市德雅大药房有限责任公司",
                                                "org_type": 6,
                                                "org_code": "0000000423",
                                                "order_index": 7,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 312,
                                                "children": [],
                                                "org_id": "1d5798fb8ac211eaaf9f0242ac110002",
                                                "org_name": "湖南圆心大药房有限公司人民中路分店",
                                                "org_type": 6,
                                                "org_code": "0000000725",
                                                "order_index": 8,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 314,
                                                "children": [],
                                                "org_id": "ac9f60dac56b11eab1890242ac110002",
                                                "org_name": "湖南圆心大药房有限公司郴州青年大道分店",
                                                "org_type": 6,
                                                "org_code": "0000000793",
                                                "order_index": 9,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 329,
                                                "children": [],
                                                "org_id": "a475f19ec64411eaa9d80242ac110002",
                                                "org_name": "湘潭市一圆心大药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000795",
                                                "order_index": 10,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 344,
                                                "children": [],
                                                "org_id": "9d966b5de29011ea86820242ac110004",
                                                "org_name": "醴陵醴中国药堂有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000822",
                                                "order_index": 11,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 354,
                                                "children": [],
                                                "org_id": "537e25a5e29211ea86820242ac110004",
                                                "org_name": "醴陵醴中国药堂有限公司分公司",
                                                "org_type": 6,
                                                "org_code": "0000000824",
                                                "order_index": 12,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 365,
                                                "children": [],
                                                "org_id": "ccb4ced6e29411eabb290242ac110002",
                                                "org_name": "天元区湘亚圆心健康大药房",
                                                "org_type": 6,
                                                "org_code": "0000000825",
                                                "order_index": 13,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 373,
                                                "children": [],
                                                "org_id": "0bacf6e350a611ebb3d50242ac110003",
                                                "org_name": "怀化德雅药品有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000867",
                                                "order_index": 14,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 379,
                                                "children": [],
                                                "org_id": "4f7e519487b911ebbd315254007fd0df",
                                                "org_name": "益阳圆心药品有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000913",
                                                "order_index": 15,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 383,
                                                "children": [],
                                                "org_id": "bd6ee494bcf611ebb5ce5254009b39e4",
                                                "org_name": "湖南圆心大药房有限公司浏阳人民医院分店",
                                                "org_type": 6,
                                                "org_code": "0000000951",
                                                "order_index": 16,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 385,
                                                "children": [],
                                                "org_id": "17ac93c3ce5511eb8fce52540072d236",
                                                "org_name": "岳阳圆心药品有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000967",
                                                "order_index": 17,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 388,
                                                "children": [],
                                                "org_id": "bbcd3a84d48511eb9fc05254007fd0df",
                                                "org_name": "湖南圆心大药房有限公司人民中路分店（特门）",
                                                "org_type": 6,
                                                "org_code": "0000000977",
                                                "order_index": 18,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 390,
                                                "children": [],
                                                "org_id": "603d1fe820c411ec97fb5254007fd0df",
                                                "org_name": "湖南圆心大药房有限公司韶山路分店",
                                                "org_type": 6,
                                                "org_code": "0000001098",
                                                "order_index": 19,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 392,
                                                "children": [],
                                                "org_id": "5900900e6a1111ec92895254009b39e4",
                                                "org_name": "湖南圆心大药房有限公司（湘雅店）",
                                                "org_type": 6,
                                                "org_code": "0000001191",
                                                "order_index": 20,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 394,
                                                "children": [],
                                                "org_id": "fc6634609ab411ec84345254007c9edd",
                                                "org_name": "湖南圆心大药房有限公司常德分店",
                                                "org_type": 6,
                                                "org_code": "0000001254",
                                                "order_index": 21,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 578,
                                                "children": [],
                                                "org_id": "067045fad65811ecb5015254007fd0df",
                                                "org_name": "湖南圆心大药房有限公司株洲分店",
                                                "org_type": 6,
                                                "org_code": "0000001298",
                                                "order_index": 22,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 597,
                                                "children": [],
                                                "org_id": "091e65d9f39011ec8e2d5254007fd0df",
                                                "org_name": "湖南圆心大药房有限公司娄底分店",
                                                "org_type": 6,
                                                "org_code": "0000001332",
                                                "order_index": 23,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 822,
                                                "children": [],
                                                "org_id": "c891fa3d252d11ee8cf35254007fd0df",
                                                "org_name": "湖南圆心大药房有限公司湘雅分店(特门)",
                                                "org_type": 6,
                                                "org_code": "0000001661",
                                                "order_index": 24,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 823,
                                                "children": [],
                                                "org_id": "ff358e99252d11eeb97c52540072d236",
                                                "org_name": "湖南圆心大药房有限公司湘雅分店(双通道)",
                                                "org_type": 6,
                                                "org_code": "0000001662",
                                                "order_index": 25,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 836,
                                                "children": [],
                                                "org_id": "938a9f3456c711eeb862525400f6496b",
                                                "org_name": "湖南圆心大药房有限公司留芳分店",
                                                "org_type": 6,
                                                "org_code": "0000001691",
                                                "order_index": 26,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 912,
                                                "children": [],
                                                "org_id": "5ae48d0418cb11ef89352adcf763c22a",
                                                "org_name": "湖南圆心大药房有限公司人民中路分店(兴盛优选)",
                                                "org_type": 6,
                                                "org_code": "0000001814",
                                                "order_index": 27,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 913,
                                                "children": [],
                                                "org_id": "defee7e0197511ef89352adcf763c22a",
                                                "org_name": "湖南圆心大药房有限公司德雅分店",
                                                "org_type": 6,
                                                "org_code": "0000001815",
                                                "order_index": 28,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "94c6bb89f53311e9bd9d0242ac110003",
                                        "org_name": "湖南圆心大药房有限公司",
                                        "org_type": 9,
                                        "org_code": "0000000541",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "ab7ae98fe1c111edb858525400994832",
                                "org_name": "湖南省",
                                "org_type": 2,
                                "org_code": "0000001570",
                                "order_index": 1,
                                "state": 1,
                                "is_ds": 0
                            }
                        ],
                        "org_id": "b07b57dfaba911ee9ed95254009b39e4",
                        "org_name": "湖南区",
                        "org_type": 1,
                        "org_code": "0000001748",
                        "order_index": 9,
                        "state": 1,
                        "is_ds": 0
                    },
                    {
                        "id": 870,
                        "children": [
                            {
                                "id": 117,
                                "children": [
                                    {
                                        "id": 139,
                                        "children": [
                                            {
                                                "id": 149,
                                                "children": [],
                                                "org_id": "61851527776011ec86065254007c9edd",
                                                "org_name": "河南圆心医药科技有限公司儿童医院店",
                                                "org_type": 6,
                                                "org_code": "0000001216",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 181,
                                                "children": [],
                                                "org_id": "b2b864f5775f11ec86065254007c9edd",
                                                "org_name": "河南圆心医药科技有限公司红旗路店",
                                                "org_type": 6,
                                                "org_code": "0000001215",
                                                "order_index": 2,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 210,
                                                "children": [],
                                                "org_id": "05c4c90e775911ecb6f25254007c9edd",
                                                "org_name": "河南圆心医药科技有限公司中医一附院店",
                                                "org_type": 6,
                                                "org_code": "0000001208",
                                                "order_index": 3,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 617,
                                                "children": [],
                                                "org_id": "e3ce4b5607eb11edb3f25254009b39e4",
                                                "org_name": "河南圆心医药科技有限公司卫辉健康路店",
                                                "org_type": 6,
                                                "org_code": "0000001363",
                                                "order_index": 4,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "1980d1ddf32e11eb8bc75254009b39e4",
                                        "org_name": "河南圆心医药科技有限公司",
                                        "org_type": 9,
                                        "org_code": "0000001027",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 175,
                                        "children": [],
                                        "org_id": "c942872c177711ecb0ef52540072d236",
                                        "org_name": "河南圆心门诊有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001081",
                                        "order_index": 2,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 265,
                                        "children": [],
                                        "org_id": "261ed2c2d7c311eaa1660242ac110002",
                                        "org_name": "河南银星大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000802",
                                        "order_index": 3,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 631,
                                        "children": [],
                                        "org_id": "7823e461280c11edb6ff525400f6496b",
                                        "org_name": "郑州普庆万禧堂药店有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001397",
                                        "order_index": 4,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 900,
                                        "children": [],
                                        "org_id": "8a113b27fdef11ee89352adcf763c22a",
                                        "org_name": "河南圆心中西医门诊有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001795",
                                        "order_index": 5,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 351,
                                        "children": [
                                            {
                                                "id": 467,
                                                "children": [],
                                                "org_id": "682107c0c56311e9b1af0242ac110003",
                                                "org_name": "(作废)河南圆心邦健大药房有限公司",
                                                "org_type": 7,
                                                "org_code": "0000000486",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 484,
                                                "children": [],
                                                "org_id": "678073c2645211ecbe4f5254007fd0df",
                                                "org_name": "(作废)郑州圆心智联大药房有限公司",
                                                "org_type": 7,
                                                "org_code": "0000001190",
                                                "order_index": 2,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 693,
                                                "children": [],
                                                "org_id": "23d2319777f611eb8c2752540072d236",
                                                "org_name": "(作废)商丘圆心国健医药有限公司",
                                                "org_type": 7,
                                                "org_code": "0000000907",
                                                "order_index": 3,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 690,
                                                "children": [],
                                                "org_id": "acd47800141b11eb9eea0242ac110004",
                                                "org_name": "(作废)开封圆心新特药房有限公司",
                                                "org_type": 7,
                                                "org_code": "0000000849",
                                                "order_index": 4,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 688,
                                                "children": [],
                                                "org_id": "42c919de141b11eb9eea0242ac110004",
                                                "org_name": "(作废)开封圆心便民大药房有限公司",
                                                "org_type": 7,
                                                "org_code": "0000000848",
                                                "order_index": 5,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 218,
                                                "children": [],
                                                "org_id": "7ffa61e6233b11eba7720242ac110003",
                                                "org_name": "鄭州圆心智联大药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000853",
                                                "order_index": 6,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 317,
                                                "children": [],
                                                "org_id": "8f97f8697cb811eb9b3752540072d236",
                                                "org_name": "卫辉市圆心医药有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000908",
                                                "order_index": 7,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 244,
                                                "children": [],
                                                "org_id": "ec783ca4999d11ebaf895254007fd0df",
                                                "org_name": "郑州圆心大药房金水区分公司",
                                                "org_type": 6,
                                                "org_code": "0000000928",
                                                "order_index": 8,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 186,
                                                "children": [],
                                                "org_id": "b6dad42e135e11ebb1720242ac110003",
                                                "org_name": "郑州圆心大药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000846",
                                                "order_index": 9,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "190b72cd7cdd11ec8b74525400f6496b",
                                        "org_name": "作废",
                                        "org_type": 7,
                                        "org_code": "0000001230",
                                        "order_index": 6,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 898,
                                        "children": [],
                                        "org_id": "2218635bfbb511ee89352adcf763c22a",
                                        "org_name": "河南圆心中西医门诊有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001792",
                                        "order_index": 10,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "9ff6a561d7c211eaa1660242ac110002",
                                "org_name": "河南省",
                                "org_type": 2,
                                "org_code": "0000000801",
                                "order_index": 1,
                                "state": 1,
                                "is_ds": 0
                            },
                            {
                                "id": 123,
                                "children": [
                                    {
                                        "id": 449,
                                        "children": [],
                                        "org_id": "d9e4880731c211e985770242ac110003",
                                        "org_name": "西安圆心大药房有限公司(作废)",
                                        "org_type": 6,
                                        "org_code": "0000000227",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 156,
                                        "children": [],
                                        "org_id": "3433bbee31c311e9b5a10242ac110004",
                                        "org_name": "西安德善堂医药有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000228",
                                        "order_index": 2,
                                        "state": 0,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 187,
                                        "children": [],
                                        "org_id": "b3d9a862335a11e9b5a10242ac110004",
                                        "org_name": "西安嘉禾堂医药有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000236",
                                        "order_index": 3,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 236,
                                        "children": [],
                                        "org_id": "dc0a4fcf6e4a11eab1990242ac110002",
                                        "org_name": "西安市新城区云智门诊部有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000653",
                                        "order_index": 4,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 260,
                                        "children": [],
                                        "org_id": "e34c2aa8807511ea948d0242ac110002",
                                        "org_name": "西安圆心大药房有限公司西五路店",
                                        "org_type": 6,
                                        "org_code": "0000000714",
                                        "order_index": 5,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 266,
                                        "children": [],
                                        "org_id": "0df8082a335b11e985770242ac110003",
                                        "org_name": "陕西圆心医药有限公司（迁址）",
                                        "org_type": 6,
                                        "org_code": "0000000237",
                                        "order_index": 6,
                                        "state": 0,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 293,
                                        "children": [],
                                        "org_id": "3fde558b2a1411eb92af0242ac110003",
                                        "org_name": "西安圆心大药房有限公司长乐西路店",
                                        "org_type": 6,
                                        "org_code": "0000000859",
                                        "order_index": 7,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 622,
                                        "children": [],
                                        "org_id": "540384ac16e211edbc195254007fd0df",
                                        "org_name": "西安圆心医疗科技有限公司雁塔诊所",
                                        "org_type": 6,
                                        "org_code": "0000001385",
                                        "order_index": 8,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 624,
                                        "children": [],
                                        "org_id": "594af0df1dd011edbbf25254007fd0df",
                                        "org_name": "西安圆心大药房有限公司双鱼花园广场店",
                                        "org_type": 6,
                                        "org_code": "0000001389",
                                        "order_index": 9,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 769,
                                        "children": [],
                                        "org_id": "e846fdfaddbc11edbceb5254007fd0df",
                                        "org_name": "西安圆心大药房有限公司凤城三路店",
                                        "org_type": 6,
                                        "org_code": "0000001560",
                                        "order_index": 10,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 789,
                                        "children": [],
                                        "org_id": "71d489e704da11ee827552540072d236",
                                        "org_name": "西安圆心大药房有限公司朱雀路店",
                                        "org_type": 6,
                                        "org_code": "0000001610",
                                        "order_index": 11,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 790,
                                        "children": [],
                                        "org_id": "1b6010a804e011ee827552540072d236",
                                        "org_name": "西安圆心大药房有限公司新医路店",
                                        "org_type": 6,
                                        "org_code": "0000001612",
                                        "order_index": 12,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 816,
                                        "children": [],
                                        "org_id": "a9501dab199711eea5cf525400f6496b",
                                        "org_name": "西安圆心大药房有限公司新医路店",
                                        "org_type": 6,
                                        "org_code": "0000001648",
                                        "order_index": 13,
                                        "state": 0,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 827,
                                        "children": [],
                                        "org_id": "b1464c062b7b11eea28b5254007fd0df",
                                        "org_name": "西安圆心大药房有限公司科技路店",
                                        "org_type": 6,
                                        "org_code": "0000001674",
                                        "order_index": 14,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 841,
                                        "children": [],
                                        "org_id": "27c9363e6c9c11ee868d525400f6496b",
                                        "org_name": "西安圆心大药房有限公司丈八三路店",
                                        "org_type": 6,
                                        "org_code": "0000001705",
                                        "order_index": 15,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 857,
                                        "children": [],
                                        "org_id": "00407868851011eebdd05254007fd0df",
                                        "org_name": "西安圆心大药房有限公司大兴路店",
                                        "org_type": 6,
                                        "org_code": "0000001731",
                                        "order_index": 16,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 889,
                                        "children": [],
                                        "org_id": "b069f146db5511eeb0bace7732f98195",
                                        "org_name": "西安圆心大药房有限公司长乐西路总店",
                                        "org_type": 6,
                                        "org_code": "0000001777",
                                        "order_index": 17,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 894,
                                        "children": [],
                                        "org_id": "9a174124ee3011ee89352adcf763c22a",
                                        "org_name": "西安圆心大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001785",
                                        "order_index": 18,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "c9afbfdb5a2511eba2430242ac110003",
                                "org_name": "陕西省",
                                "org_type": 2,
                                "org_code": "0000000898",
                                "order_index": 2,
                                "state": 1,
                                "is_ds": 0
                            },
                            {
                                "id": 124,
                                "children": [
                                    {
                                        "id": 448,
                                        "children": [],
                                        "org_id": "a0d1bdb731c111e9a8440242ac110003",
                                        "org_name": "银川市圆心大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000225",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 155,
                                        "children": [],
                                        "org_id": "40465c4e31c211e9b5a10242ac110004",
                                        "org_name": "银川市圆心大药房有限公司利群西街店",
                                        "org_type": 6,
                                        "org_code": "0000000226",
                                        "order_index": 2,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 205,
                                        "children": [],
                                        "org_id": "56002f2db35711e99e620242ac110003",
                                        "org_name": "银川市百瑞诊所有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000481",
                                        "order_index": 3,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 262,
                                        "children": [],
                                        "org_id": "33b6b7946e0f11ec978d5254007fd0df",
                                        "org_name": "银川市圆心大药房有限公司阅文路店",
                                        "org_type": 6,
                                        "org_code": "0000001194",
                                        "order_index": 4,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 280,
                                        "children": [],
                                        "org_id": "4cced4c29ac911eca3d55254007fd0df",
                                        "org_name": "银川市金凤区圆心诊所有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001258",
                                        "order_index": 5,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 603,
                                        "children": [],
                                        "org_id": "0eae9bba5e1911ec88f3525400f6496b",
                                        "org_name": "宁夏圆心益可思大药房连锁有限公司济世店",
                                        "org_type": 6,
                                        "org_code": "0000001173",
                                        "order_index": 6,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 606,
                                        "children": [],
                                        "org_id": "8953b3115e1911eca03952540072d236",
                                        "org_name": "宁夏圆心益可思大药房连锁有限公司附院店",
                                        "org_type": 6,
                                        "org_code": "0000001175",
                                        "order_index": 7,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 604,
                                        "children": [],
                                        "org_id": "4fda9bf55e1a11eca03952540072d236",
                                        "org_name": "宁夏圆心益可思大药房连锁有限公司盐池店",
                                        "org_type": 6,
                                        "org_code": "0000001177",
                                        "order_index": 8,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 608,
                                        "children": [],
                                        "org_id": "c468650a5e1611eca03952540072d236",
                                        "org_name": "益可思大药房连锁有限公司",
                                        "org_type": 9,
                                        "org_code": "0000001172",
                                        "order_index": 9,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "ea8ad9875a2511eba2430242ac110003",
                                "org_name": "宁夏回族自治区",
                                "org_type": 2,
                                "org_code": "0000000900",
                                "order_index": 3,
                                "state": 1,
                                "is_ds": 0
                            },
                            {
                                "id": 20,
                                "children": [
                                    {
                                        "id": 138,
                                        "children": [],
                                        "org_id": "d7cbe15beee011ebb6d85254009b39e4",
                                        "org_name": "乌鲁木齐圆心大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001021",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "3025f175eee011ebb6d85254009b39e4",
                                "org_name": "新疆维吾尔自治区",
                                "org_type": 2,
                                "org_code": "0000001020",
                                "order_index": 4,
                                "state": 1,
                                "is_ds": 0
                            }
                        ],
                        "org_id": "ce001b0baba911ee9ed95254009b39e4",
                        "org_name": "豫陕区",
                        "org_type": 1,
                        "org_code": "0000001749",
                        "order_index": 10,
                        "state": 1,
                        "is_ds": 0
                    },
                    {
                        "id": 871,
                        "children": [
                            {
                                "id": 19,
                                "children": [
                                    {
                                        "id": 129,
                                        "children": [
                                            {
                                                "id": 130,
                                                "children": [],
                                                "org_id": "f86bf49051d111e9b1940242ac110002",
                                                "org_name": "合肥市静和大药房有限责任公司",
                                                "org_type": 6,
                                                "org_code": "0000000332",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 169,
                                                "children": [],
                                                "org_id": "5512f7123fb411e9aec10242ac110003",
                                                "org_name": "作废安徽圆心大药房有限责任公司",
                                                "org_type": 7,
                                                "org_code": "0000000270",
                                                "order_index": 2,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 197,
                                                "children": [],
                                                "org_id": "f5dfb93f50f511e9b1940242ac110002",
                                                "org_name": "作废安徽圆心大药房有限责任公司裕溪路店",
                                                "org_type": 7,
                                                "org_code": "0000000327",
                                                "order_index": 3,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 229,
                                                "children": [],
                                                "org_id": "ed5ff25d59a311e998460242ac110003",
                                                "org_name": "作废安徽圆心大药房有限责任公司望江路店",
                                                "org_type": 7,
                                                "org_code": "0000000336",
                                                "order_index": 4,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 251,
                                                "children": [],
                                                "org_id": "e40ff56790cc11e9b6cb0242ac110004",
                                                "org_name": "作废安徽圆心大药房有限责任公司宿松路店",
                                                "org_type": 7,
                                                "org_code": "0000000451",
                                                "order_index": 5,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 272,
                                                "children": [],
                                                "org_id": "161af7e3ca3e11e9a51f0242ac110002",
                                                "org_name": "安徽圆心医药有限公司绩溪路店",
                                                "org_type": 6,
                                                "org_code": "0000000488",
                                                "order_index": 6,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 290,
                                                "children": [
                                                    {
                                                        "id": 461,
                                                        "children": [],
                                                        "org_id": "2393fa8e56ef43ed8344617cbfe2365e",
                                                        "org_name": "安徽圆心大药房连锁有限公司宿州路店",
                                                        "org_type": 6,
                                                        "org_code": "0000000573",
                                                        "order_index": 1,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 496,
                                                        "children": [],
                                                        "org_id": "52bd169fec63466ab71282697138fc92",
                                                        "org_name": "安徽圆心大药房连锁有限公司庐江路店",
                                                        "org_type": 6,
                                                        "org_code": "0000000591",
                                                        "order_index": 2,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 516,
                                                        "children": [],
                                                        "org_id": "223a5cc1ae01419dbdecc3bf50358fc9",
                                                        "org_name": "作废安徽圆心大药房连锁有限公司明光路店",
                                                        "org_type": 7,
                                                        "org_code": "0000000592",
                                                        "order_index": 3,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 527,
                                                        "children": [],
                                                        "org_id": "f9f08b439ff84f6c910b11d37286dee5",
                                                        "org_name": "安徽圆心大药房连锁有限公司长江路店",
                                                        "org_type": 6,
                                                        "org_code": "0000000593",
                                                        "order_index": 4,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 536,
                                                        "children": [],
                                                        "org_id": "2adb99c1263242d1bff88ff630ef78e3",
                                                        "org_name": "作废安徽大药房连锁有限公司圣联时代广场店",
                                                        "org_type": 7,
                                                        "org_code": "0000000594",
                                                        "order_index": 5,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 543,
                                                        "children": [],
                                                        "org_id": "5ca023971b7f4c2e8c297028e81d549e",
                                                        "org_name": "安徽圆心大药房连锁有限公司天健二店",
                                                        "org_type": 6,
                                                        "org_code": "0000000595",
                                                        "order_index": 6,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 291,
                                                        "children": [],
                                                        "org_id": "690cc5f2891311eaa5180242ac110002",
                                                        "org_name": "安徽圆心大药房连锁有限公司望江路店",
                                                        "org_type": 6,
                                                        "org_code": "0000000721",
                                                        "order_index": 7,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 308,
                                                        "children": [],
                                                        "org_id": "96e0d703891411ea916e0242ac110003",
                                                        "org_name": "安徽圆心大药房连锁有限公司淮河路三店",
                                                        "org_type": 6,
                                                        "org_code": "0000000722",
                                                        "order_index": 8,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 324,
                                                        "children": [],
                                                        "org_id": "bdeb3c19925f11eaa3fa0242ac110003",
                                                        "org_name": "作废安徽圆心大药房连锁有限公司淮河路店",
                                                        "org_type": 7,
                                                        "org_code": "0000000727",
                                                        "order_index": 9,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 338,
                                                        "children": [],
                                                        "org_id": "f64621d595b211ea90100242ac110002",
                                                        "org_name": "安徽圆心大药房连锁有限公司裕溪路店",
                                                        "org_type": 6,
                                                        "org_code": "0000000734",
                                                        "order_index": 10,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 350,
                                                        "children": [],
                                                        "org_id": "066bf372d30011eaa4f40242ac110002",
                                                        "org_name": "安徽圆心大药房连锁有限公司宿松路一店",
                                                        "org_type": 6,
                                                        "org_code": "0000000798",
                                                        "order_index": 11,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 361,
                                                        "children": [],
                                                        "org_id": "d38bf190ffc711ea86d60242ac110004",
                                                        "org_name": "安徽圆心大药房连锁有限公司省立西区店",
                                                        "org_type": 6,
                                                        "org_code": "0000000839",
                                                        "order_index": 12,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 363,
                                                        "children": [],
                                                        "org_id": "bc3fe1bf0ac911ec92375254007fd0df",
                                                        "org_name": "安徽圆心大药房连锁有限公司阜阳颍州红堡城店",
                                                        "org_type": 6,
                                                        "org_code": "0000001057",
                                                        "order_index": 13,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 371,
                                                        "children": [],
                                                        "org_id": "5d0c935a103c11ec896952540072d236",
                                                        "org_name": "安徽圆心大药房连锁有限公司安医高新院区店",
                                                        "org_type": 6,
                                                        "org_code": "0000001060",
                                                        "order_index": 14,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 633,
                                                        "children": [],
                                                        "org_id": "8c49483a3bb711eda99d5254007fd0df",
                                                        "org_name": "安徽圆心大药房连锁有限公司蚌医店",
                                                        "org_type": 6,
                                                        "org_code": "0000001405",
                                                        "order_index": 15,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    }
                                                ],
                                                "org_id": "7d952470d0ed4e0195c1349ddd8bfeb7",
                                                "org_name": "安徽圆心大药房连锁有限公司",
                                                "org_type": 9,
                                                "org_code": "0000000588",
                                                "order_index": 7,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 309,
                                                "children": [],
                                                "org_id": "b37f9682e83711ea856a0242ac110002",
                                                "org_name": "黄山新稀特医药零售有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000826",
                                                "order_index": 8,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 325,
                                                "children": [],
                                                "org_id": "613b3354816d11ebae0452540072d236",
                                                "org_name": "合肥市杏苑大药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000910",
                                                "order_index": 9,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 340,
                                                "children": [],
                                                "org_id": "8cf999b1d55011eb863752540072d236",
                                                "org_name": "六安市普仁大药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000978",
                                                "order_index": 10,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 342,
                                                "children": [],
                                                "org_id": "757b9ee2015011eca95a5254007fd0df",
                                                "org_name": "阜阳圆心大药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000001039",
                                                "order_index": 11,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 358,
                                                "children": [],
                                                "org_id": "acbd4a88af0011ecb98a52540072d236",
                                                "org_name": "安徽圆心医疗器械有限公司",
                                                "org_type": 6,
                                                "org_code": "0000001270",
                                                "order_index": 12,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 581,
                                                "children": [],
                                                "org_id": "488174a8e6e711ecb5095254007fd0df",
                                                "org_name": "安徽圆心医疗器械有限公司省立西区店",
                                                "org_type": 6,
                                                "org_code": "0000001309",
                                                "order_index": 13,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 796,
                                                "children": [],
                                                "org_id": "9d047d9a16db11ee95545254007fd0df",
                                                "org_name": "合肥邻客大药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000001621",
                                                "order_index": 14,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 888,
                                                "children": [],
                                                "org_id": "754a43ebc32d11eebdd05254007fd0df",
                                                "org_name": "合肥圆边生活有限公司",
                                                "org_type": 6,
                                                "org_code": "0000001776",
                                                "order_index": 15,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "d7a48a3351d111e9bf9a0242ac110003",
                                        "org_name": "安徽",
                                        "org_type": 3,
                                        "org_code": "0000000331",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "2858019f72f911e998fd0242ac110002",
                                "org_name": "安徽省",
                                "org_type": 2,
                                "org_code": "0000000422",
                                "order_index": 1,
                                "state": 1,
                                "is_ds": 0
                            }
                        ],
                        "org_id": "04584e9dabaa11eeaff752540072d236",
                        "org_name": "安徽区",
                        "org_type": 1,
                        "org_code": "0000001750",
                        "order_index": 11,
                        "state": 1,
                        "is_ds": 0
                    },
                    {
                        "id": 872,
                        "children": [
                            {
                                "id": 183,
                                "children": [
                                    {
                                        "id": 497,
                                        "children": [
                                            {
                                                "id": 564,
                                                "children": [],
                                                "org_id": "916a5b0b0efa11e98ffe0242ac110003",
                                                "org_name": "武汉圆心华健大药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000044",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 567,
                                                "children": [],
                                                "org_id": "d416cb9b0ef911e9be640242ac110002",
                                                "org_name": "武汉圆心华富大药房有限公司（闭店）",
                                                "org_type": 6,
                                                "org_code": "0000000038",
                                                "order_index": 2,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 511,
                                                "children": [],
                                                "org_id": "4a379ec10efb11e988760242ac110004",
                                                "org_name": "武汉圆心华仁大药房有限公司（闭店）",
                                                "org_type": 6,
                                                "org_code": "0000000045",
                                                "order_index": 3,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 523,
                                                "children": [],
                                                "org_id": "d559e85e0efb11e988760242ac110004",
                                                "org_name": "武汉圆心华振大药房有限公司（闭店）",
                                                "org_type": 6,
                                                "org_code": "0000000047",
                                                "order_index": 4,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 532,
                                                "children": [],
                                                "org_id": "4181be4a0efc11e99f330242ac110003",
                                                "org_name": "武汉圆心华汉大药房有限公司（闭店）",
                                                "org_type": 6,
                                                "org_code": "0000000049",
                                                "order_index": 5,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 539,
                                                "children": [],
                                                "org_id": "adc0c54b0efc11e988760242ac110004",
                                                "org_name": "武汉圆心华发大药房有限公司（闭店）",
                                                "org_type": 6,
                                                "org_code": "0000000050",
                                                "order_index": 6,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 545,
                                                "children": [],
                                                "org_id": "acab2d2f30f911e9a82c0242ac110004",
                                                "org_name": "武汉圆心华爱大药房有限公司（闭店）",
                                                "org_type": 6,
                                                "org_code": "0000000223",
                                                "order_index": 7,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 551,
                                                "children": [],
                                                "org_id": "9cfbb2a540e511e98c5b0242ac110004",
                                                "org_name": "武汉圆心华岳大药房有限公司（闭店）",
                                                "org_type": 6,
                                                "org_code": "0000000271",
                                                "order_index": 8,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 557,
                                                "children": [],
                                                "org_id": "0a27f24abcd411eaba4e0242ac110002",
                                                "org_name": "武汉圆心妙手门诊部有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000785",
                                                "order_index": 9,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 601,
                                                "children": [],
                                                "org_id": "63cf3445f78411eca305525400f6496b",
                                                "org_name": "武汉圆心妙手门诊部",
                                                "org_type": 6,
                                                "org_code": "0000001345",
                                                "order_index": 10,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 621,
                                                "children": [],
                                                "org_id": "b34a829b120311eda0bd5254009b39e4",
                                                "org_name": "武汉圆心妙仁门诊部有限公司",
                                                "org_type": 6,
                                                "org_code": "0000001383",
                                                "order_index": 11,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 901,
                                                "children": [],
                                                "org_id": "da2f60a8fe2f11ee89352adcf763c22a",
                                                "org_name": "武汉圆心圆边便利店有限公司",
                                                "org_type": 6,
                                                "org_code": "0000001797",
                                                "order_index": 12,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 928,
                                                "children": [],
                                                "org_id": "2edcd003427311ef96edba6936edc966",
                                                "org_name": "武汉圆边便利医疗器械有限公司",
                                                "org_type": null,
                                                "org_code": "0000001838",
                                                "order_index": 13,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "409078c50e9f4e55b015226dcb2d47b7",
                                        "org_name": "武汉区域",
                                        "org_type": 8,
                                        "org_code": "0000000606",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 559,
                                        "children": [
                                            {
                                                "id": 566,
                                                "children": [],
                                                "org_id": "6fb48354666211e9ad660242ac110003",
                                                "org_name": "武汉圆心大药房有限公司岱山分店",
                                                "org_type": 6,
                                                "org_code": "0000000368",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 568,
                                                "children": [],
                                                "org_id": "5537b364666311e9a3b50242ac110002",
                                                "org_name": "武汉圆心大药房有限公司康福分店（作废）",
                                                "org_type": 7,
                                                "org_code": "0000000369",
                                                "order_index": 2,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 569,
                                                "children": [],
                                                "org_id": "01ba1cb0fe0f11eab5710242ac110004",
                                                "org_name": "武汉圆心大药房有限公司二雅分店（闭店）",
                                                "org_type": 6,
                                                "org_code": "0000000835",
                                                "order_index": 3,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 570,
                                                "children": [],
                                                "org_id": "0ddaefe3a27411eb9f845254009b39e4",
                                                "org_name": "武汉圆心大药房有限公司常青分店（闭店）",
                                                "org_type": 6,
                                                "org_code": "0000000935",
                                                "order_index": 4,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 571,
                                                "children": [],
                                                "org_id": "301627f4a95311eb88255254007fd0df",
                                                "org_name": "武汉圆心大药房有限公司青山分店（闭店）",
                                                "org_type": 6,
                                                "org_code": "0000000940",
                                                "order_index": 5,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 573,
                                                "children": [],
                                                "org_id": "284e2a9accde11ec882e5254007fd0df",
                                                "org_name": "武汉圆心大药房连锁有限公司梅园分店",
                                                "org_type": 6,
                                                "org_code": "0000001288",
                                                "order_index": 6,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 572,
                                                "children": [],
                                                "org_id": "1296d1d5ccdf11ec882e5254007fd0df",
                                                "org_name": "武汉圆心大药房连锁有限公司体育馆分店",
                                                "org_type": 6,
                                                "org_code": "0000001290",
                                                "order_index": 7,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 600,
                                                "children": [],
                                                "org_id": "025d2763f77b11eca305525400f6496b",
                                                "org_name": "武汉圆心大药房连锁有限公司康福分店",
                                                "org_type": 6,
                                                "org_code": "0000001344",
                                                "order_index": 8,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 615,
                                                "children": [],
                                                "org_id": "6ab16f9200e411ed8c355254009b39e4",
                                                "org_name": "武汉圆心大药房连锁有限公司武展分店",
                                                "org_type": 6,
                                                "org_code": "0000001357",
                                                "order_index": 9,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 620,
                                                "children": [],
                                                "org_id": "a32720cd0be511ed8386525400f6496b",
                                                "org_name": "武汉圆心大药房连锁有限公司岱山分店（作废）",
                                                "org_type": 7,
                                                "org_code": "0000001382",
                                                "order_index": 10,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 623,
                                                "children": [],
                                                "org_id": "9c4a83721d3311edbeb2525400f6496b",
                                                "org_name": "武汉圆心大药房连锁有限公司荆州江汉分店",
                                                "org_type": 6,
                                                "org_code": "0000001388",
                                                "order_index": 11,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 791,
                                                "children": [],
                                                "org_id": "d177163d05c611eea5385254007fd0df",
                                                "org_name": "武汉圆心大药房连锁有限公司解放路分店",
                                                "org_type": 6,
                                                "org_code": "0000001613",
                                                "order_index": 12,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 820,
                                                "children": [],
                                                "org_id": "f7b8b4651fb611ee8cf35254007fd0df",
                                                "org_name": "武汉圆心大药房连锁有限公司富商分店",
                                                "org_type": 6,
                                                "org_code": "0000001655",
                                                "order_index": 13,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 863,
                                                "children": [],
                                                "org_id": "bffe6694a91211eebdd05254007fd0df",
                                                "org_name": "武汉圆心大药房武展便利店",
                                                "org_type": 6,
                                                "org_code": "0000001740",
                                                "order_index": 14,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "d3324a2f666111e98e140242ac110002",
                                        "org_name": "武汉圆心大药房连锁有限公司",
                                        "org_type": 9,
                                        "org_code": "0000000366",
                                        "order_index": 2,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 208,
                                        "children": [
                                            {
                                                "id": 452,
                                                "children": [],
                                                "org_id": "dc83e0bc13d611e9b8af0242ac110004",
                                                "org_name": "荆州圆心大药房有限公司古城店",
                                                "org_type": 6,
                                                "org_code": "0000000102",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 487,
                                                "children": [],
                                                "org_id": "8dadd8e20f5811e981360242ac110003",
                                                "org_name": "荆州圆心大药房有限公司航空路店",
                                                "org_type": 6,
                                                "org_code": "0000000099",
                                                "order_index": 2,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 512,
                                                "children": [],
                                                "org_id": "ffd65a1a0f5711e984490242ac110004",
                                                "org_name": "汉川市圆心大药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000098",
                                                "order_index": 3,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 223,
                                                "children": [],
                                                "org_id": "f8edc2e716f911e9b0190242ac110004",
                                                "org_name": "宜昌圆心大药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000106",
                                                "order_index": 4,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 245,
                                                "children": [],
                                                "org_id": "409c5fc63b4611e98f7a0242ac110004",
                                                "org_name": "仙桃智慧大药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000255",
                                                "order_index": 5,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 895,
                                                "children": [],
                                                "org_id": "e2566a17f19111ee89352adcf763c22a",
                                                "org_name": "宜昌圆心华城大药房有限公司",
                                                "org_type": 6,
                                                "org_code": "0000001786",
                                                "order_index": 6,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 922,
                                                "children": [],
                                                "org_id": "9ab9c0432d2111ef8b9efa544c79cbbf",
                                                "org_name": "仙桃圆边便利店有限公司",
                                                "org_type": 6,
                                                "org_code": "0000001830",
                                                "order_index": 7,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 925,
                                                "children": [],
                                                "org_id": "f65041943cfa11ef96edba6936edc966",
                                                "org_name": "荆州市圆边便利店有限公司",
                                                "org_type": null,
                                                "org_code": "0000001833",
                                                "order_index": 8,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "58fa761310ae4479b7e871fd0415bd6f",
                                        "org_name": "鄂西区域",
                                        "org_type": 8,
                                        "org_code": "0000000607",
                                        "order_index": 3,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "9261783a0eed11e98aec0242ac110004",
                                "org_name": "湖北省",
                                "org_type": 2,
                                "org_code": "0000000034",
                                "order_index": 1,
                                "state": 1,
                                "is_ds": 0
                            }
                        ],
                        "org_id": "2e2090a0abaa11ee9ed95254009b39e4",
                        "org_name": "湖北区",
                        "org_type": 1,
                        "org_code": "0000001751",
                        "order_index": 12,
                        "state": 1,
                        "is_ds": 0
                    },
                    {
                        "id": 873,
                        "children": [
                            {
                                "id": 182,
                                "children": [
                                    {
                                        "id": 830,
                                        "children": [],
                                        "org_id": "beb2375f34f011eea61152540072d236",
                                        "org_name": "天津圆心仁医大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001677",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 454,
                                        "children": [],
                                        "org_id": "0c330918331d11e9a8440242ac110003",
                                        "org_name": "天津圆心新特大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000231",
                                        "order_index": 2,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 493,
                                        "children": [],
                                        "org_id": "271848de6fd911e983060242ac110003",
                                        "org_name": "天津圆心大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000374",
                                        "order_index": 3,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 214,
                                        "children": [],
                                        "org_id": "90cd248d91ea11eb82ca52540072d236",
                                        "org_name": "天津圆心顺天大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000922",
                                        "order_index": 4,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 216,
                                        "children": [],
                                        "org_id": "b109d27f000511ec815052540072d236",
                                        "org_name": "天津圆心康健大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001038",
                                        "order_index": 5,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 241,
                                        "children": [],
                                        "org_id": "09b30e8403bb11ec8c0e52540072d236",
                                        "org_name": "天津市武清圆心妙手大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001049",
                                        "order_index": 6,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 264,
                                        "children": [],
                                        "org_id": "829bf396048611ec9a3a52540072d236",
                                        "org_name": "天津市北辰圆心康康大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001054",
                                        "order_index": 7,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 282,
                                        "children": [],
                                        "org_id": "f9a45f07145411ecb0d552540072d236",
                                        "org_name": "天津市瑞松堂大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001072",
                                        "order_index": 8,
                                        "state": 0,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 299,
                                        "children": [],
                                        "org_id": "9bcd33b715d011ec824c52540072d236",
                                        "org_name": "天津敬心一堂药店有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001073",
                                        "order_index": 9,
                                        "state": 0,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 315,
                                        "children": [],
                                        "org_id": "b3e429bb169711ec959452540072d236",
                                        "org_name": "天津市静娟堂药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001074",
                                        "order_index": 10,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 330,
                                        "children": [],
                                        "org_id": "0d561e1816d711ec959452540072d236",
                                        "org_name": "天津市一正药品销售有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001075",
                                        "order_index": 11,
                                        "state": 0,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 343,
                                        "children": [],
                                        "org_id": "b612add62b0911eca1fb52540072d236",
                                        "org_name": "天津圆心妙手门诊部有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001111",
                                        "order_index": 12,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 353,
                                        "children": [
                                            {
                                                "id": 447,
                                                "children": [],
                                                "org_id": "5a4cc039567e11ec9b4452540072d236",
                                                "org_name": "天津圆心医药连锁有限公司武清雍阳西道分公司",
                                                "org_type": 6,
                                                "org_code": "0000001154",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 485,
                                                "children": [],
                                                "org_id": "09e2a17471fb11ec8e305254007fd0df",
                                                "org_name": "天津圆心医药连锁有限公司北辰都旺新城分公司",
                                                "org_type": 6,
                                                "org_code": "0000001196",
                                                "order_index": 2,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 510,
                                                "children": [],
                                                "org_id": "8e0bf10771fb11ec8e305254007fd0df",
                                                "org_name": "天津圆心医药连锁有限公司北辰温泉花园分公司",
                                                "org_type": 6,
                                                "org_code": "0000001197",
                                                "order_index": 3,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 522,
                                                "children": [],
                                                "org_id": "f672ef0371fb11ec8e305254007fd0df",
                                                "org_name": "天津圆心医药连锁有限公司四纬路分公司",
                                                "org_type": 6,
                                                "org_code": "0000001198",
                                                "order_index": 4,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 531,
                                                "children": [],
                                                "org_id": "4871fd7271fc11ec8e305254007fd0df",
                                                "org_name": "天津圆心医药连锁有限公司北辰新家园分公司",
                                                "org_type": 6,
                                                "org_code": "0000001199",
                                                "order_index": 5,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 538,
                                                "children": [],
                                                "org_id": "b322008171fc11ec8e305254007fd0df",
                                                "org_name": "天津圆心医药连锁有限公司河北何兴庄分公司",
                                                "org_type": 6,
                                                "org_code": "0000001200",
                                                "order_index": 6,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 544,
                                                "children": [],
                                                "org_id": "170ee76c71fd11ec8e305254007fd0df",
                                                "org_name": "天津圆心医药连锁有限公司红桥洪湖东路分公司",
                                                "org_type": 6,
                                                "org_code": "0000001201",
                                                "order_index": 7,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 550,
                                                "children": [],
                                                "org_id": "5ee0adf871fd11ec8e305254007fd0df",
                                                "org_name": "天津圆心医药连锁有限公司滨海分公司",
                                                "org_type": 6,
                                                "org_code": "0000001202",
                                                "order_index": 8,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 555,
                                                "children": [],
                                                "org_id": "0e85471571fe11ec8e305254007fd0df",
                                                "org_name": "天津圆心医药连锁有限公司昌凌路分公司",
                                                "org_type": 6,
                                                "org_code": "0000001203",
                                                "order_index": 9,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 558,
                                                "children": [],
                                                "org_id": "61ffabb171fe11ec8e305254007fd0df",
                                                "org_name": "天津圆心医药连锁有限公司南开航天道分公司",
                                                "org_type": 6,
                                                "org_code": "0000001204",
                                                "order_index": 10,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 634,
                                                "children": [],
                                                "org_id": "02a9857a5fef11edbe71525400f6496b",
                                                "org_name": "天津圆心医药连锁有限公司榕苑路分公司",
                                                "org_type": 6,
                                                "org_code": "0000001437",
                                                "order_index": 11,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 818,
                                                "children": [],
                                                "org_id": "acb1a9e71af811eea5cf525400f6496b",
                                                "org_name": "天津圆心医药连锁有限公司何庄子分公司",
                                                "org_type": 6,
                                                "org_code": "0000001652",
                                                "order_index": 12,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "131ad54b3ac011ec957552540072d236",
                                        "org_name": "天津圆心医药连锁有限公司",
                                        "org_type": 9,
                                        "org_code": "0000001123",
                                        "order_index": 13,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 364,
                                        "children": [],
                                        "org_id": "2527f51b3ae511ec9f4a52540072d236",
                                        "org_name": "天津市温仁堂大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001124",
                                        "order_index": 14,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 372,
                                        "children": [],
                                        "org_id": "f0cef7af3ae511ec9f4a52540072d236",
                                        "org_name": "天津市北辰区敬百堂大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001125",
                                        "order_index": 15,
                                        "state": 0,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 605,
                                        "children": [],
                                        "org_id": "885728b14e5611ecac0352540072d236",
                                        "org_name": "天津隆昇合宾水药品销售有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001146",
                                        "order_index": 16,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 607,
                                        "children": [],
                                        "org_id": "b70f1b584e5511ecac0352540072d236",
                                        "org_name": "天津隆昇合药品销售有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001145",
                                        "order_index": 17,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 883,
                                        "children": [],
                                        "org_id": "25c8ca4eae9511ee9ed95254009b39e4",
                                        "org_name": "天津圆心隆昇合大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001767",
                                        "order_index": 18,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "e44c73695a2411eba2430242ac110003",
                                "org_name": "天津市",
                                "org_type": 2,
                                "org_code": "0000000894",
                                "order_index": 1,
                                "state": 1,
                                "is_ds": 0
                            },
                            {
                                "id": 213,
                                "children": [
                                    {
                                        "id": 457,
                                        "children": [],
                                        "org_id": "8023bff6331f11e985770242ac110003",
                                        "org_name": "河北德泉药品销售有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000235",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 499,
                                        "children": [],
                                        "org_id": "e38064da939311ebaac252540072d236",
                                        "org_name": "河北圆心医药有限公司长安分公司",
                                        "org_type": 6,
                                        "org_code": "0000000924",
                                        "order_index": 2,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 507,
                                        "children": [],
                                        "org_id": "b9803d05563411ec9d9252540072d236",
                                        "org_name": "河北圆心医药有限公司沧州分公司",
                                        "org_type": 6,
                                        "org_code": "0000001153",
                                        "order_index": 3,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "f2659c725a2411eba2430242ac110003",
                                "org_name": "河北省",
                                "org_type": 2,
                                "org_code": "0000000895",
                                "order_index": 2,
                                "state": 1,
                                "is_ds": 0
                            }
                        ],
                        "org_id": "6a66dc43abaa11eebdd05254007fd0df",
                        "org_name": "津冀区",
                        "org_type": 1,
                        "org_code": "0000001752",
                        "order_index": 13,
                        "state": 1,
                        "is_ds": 0
                    },
                    {
                        "id": 45,
                        "children": [
                            {
                                "id": 651,
                                "children": [
                                    {
                                        "id": 652,
                                        "children": [
                                            {
                                                "id": 701,
                                                "children": [],
                                                "org_id": "0c985fe2a94a11ed8e78525400f6496b",
                                                "org_name": "福建省圆心逸仙医药连锁有限公司福州第一分店（华侨）",
                                                "org_type": 6,
                                                "org_code": "0000001481",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 705,
                                                "children": [],
                                                "org_id": "55666b37a94b11edbfd852540072d236",
                                                "org_name": "福建省圆心逸仙医药连锁有限公司福州第二分店（省立）",
                                                "org_type": 6,
                                                "org_code": "0000001482",
                                                "order_index": 2,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 704,
                                                "children": [],
                                                "org_id": "50855f4ea94c11edbfd852540072d236",
                                                "org_name": "福建省圆心逸仙医药连锁有限公司福州第五分店（康复）",
                                                "org_type": 6,
                                                "org_code": "0000001483",
                                                "order_index": 3,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 656,
                                                "children": [],
                                                "org_id": "f77fcdc9a94c11edbfd852540072d236",
                                                "org_name": "福建省圆心逸仙医药连锁有限公司福州第七分店（市皮）",
                                                "org_type": 6,
                                                "org_code": "0000001484",
                                                "order_index": 4,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 708,
                                                "children": [],
                                                "org_id": "71883135a94d11ed87d65254009b39e4",
                                                "org_name": "福建省圆心逸仙医药连锁有限公司福州第八分店（省妇幼）",
                                                "org_type": 6,
                                                "org_code": "0000001485",
                                                "order_index": 5,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 654,
                                                "children": [],
                                                "org_id": "b6573e5aa94d11ed87d65254009b39e4",
                                                "org_name": "福建省圆心逸仙医药连锁有限公司福州第九分店（软件园）",
                                                "org_type": 6,
                                                "org_code": "0000001486",
                                                "order_index": 6,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 702,
                                                "children": [],
                                                "org_id": "11c7e732a94e11ed87d65254009b39e4",
                                                "org_name": "福建省圆心逸仙医药连锁有限公司福州第十分店（省人民）",
                                                "org_type": 6,
                                                "org_code": "0000001487",
                                                "order_index": 7,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 706,
                                                "children": [],
                                                "org_id": "5595ff12a94e11ed922d5254007fd0df",
                                                "org_name": "福建省圆心逸仙医药连锁有限公司福州第十一分店（省皮）",
                                                "org_type": 6,
                                                "org_code": "0000001488",
                                                "order_index": 8,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 655,
                                                "children": [],
                                                "org_id": "d503c2eba94e11ed922d5254007fd0df",
                                                "org_name": "福建省圆心逸仙医药连锁有限公司福州第十三分店（九00）",
                                                "org_type": 6,
                                                "org_code": "0000001489",
                                                "order_index": 9,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 703,
                                                "children": [],
                                                "org_id": "17ee0aa2a94f11edbfd852540072d236",
                                                "org_name": "福建省圆心逸仙医药连锁有限公司福州第十六分店（协和）",
                                                "org_type": 6,
                                                "org_code": "0000001490",
                                                "order_index": 10,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 707,
                                                "children": [],
                                                "org_id": "665fd37fa94f11ed87d65254009b39e4",
                                                "org_name": "福建省圆心逸仙医药连锁有限公司福州第十七分店（附一）",
                                                "org_type": 6,
                                                "org_code": "0000001491",
                                                "order_index": 11,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 653,
                                                "children": [],
                                                "org_id": "a6cd0dd5a94f11ed87d65254009b39e4",
                                                "org_name": "福建省圆心逸仙医药连锁有限公司福州第二十分店（东湖）",
                                                "org_type": 6,
                                                "org_code": "0000001492",
                                                "order_index": 12,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 787,
                                                "children": [],
                                                "org_id": "813599a0f9df11eda7f75254007fd0df",
                                                "org_name": "福建省圆心逸仙医药连锁有限公司福州第十九分店",
                                                "org_type": 6,
                                                "org_code": "0000001605",
                                                "order_index": 13,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "a685d3aba91c11edbfd852540072d236",
                                        "org_name": "福建省圆心逸仙医药连锁有限公司",
                                        "org_type": 9,
                                        "org_code": "0000001468",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 125,
                                        "children": [],
                                        "org_id": "b15e3c4a60de11e98d300242ac110003",
                                        "org_name": "福州市宏利药店有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000358",
                                        "order_index": 2,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 296,
                                        "children": [],
                                        "org_id": "51befea7908e11ec9aa75254007fd0df",
                                        "org_name": "福州市圆心大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001247",
                                        "order_index": 3,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 274,
                                        "children": [],
                                        "org_id": "5caf4efb063c11ec93de52540072d236",
                                        "org_name": "泉州市鲤城区众协药业有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001055",
                                        "order_index": 4,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 163,
                                        "children": [],
                                        "org_id": "22dfe54b60e011e981bf0242ac110002",
                                        "org_name": "厦门市圆心大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000360",
                                        "order_index": 5,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 192,
                                        "children": [],
                                        "org_id": "126938eb60df11e9b71c0242ac110003",
                                        "org_name": "厦门市颐安大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000359",
                                        "order_index": 6,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 780,
                                        "children": [],
                                        "org_id": "ce4278aff51e11eda4275254009b39e4",
                                        "org_name": "圆心（厦门）大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001586",
                                        "order_index": 7,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "759857d6a91c11ed922d5254007fd0df",
                                "org_name": "福建省",
                                "org_type": 2,
                                "org_code": "0000001467",
                                "order_index": 1,
                                "state": 1,
                                "is_ds": 0
                            },
                            {
                                "id": 752,
                                "children": [
                                    {
                                        "id": 233,
                                        "children": [],
                                        "org_id": "d64ce1ebfd9111ebb0fc52540072d236",
                                        "org_name": "萍乡邻客智慧药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001035",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 583,
                                        "children": [],
                                        "org_id": "dbfd5583e55b11ec914152540072d236",
                                        "org_name": "南昌市圆心大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001307",
                                        "order_index": 2,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 253,
                                        "children": [],
                                        "org_id": "437cffeefd9211ebb0fc52540072d236",
                                        "org_name": "赣州邻客智慧药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001036",
                                        "order_index": 3,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "e110f281d8f311edbceb5254007fd0df",
                                "org_name": "江西省",
                                "org_type": 2,
                                "org_code": "0000001558",
                                "order_index": 2,
                                "state": 1,
                                "is_ds": 0
                            }
                        ],
                        "org_id": "321cb88e60de11e98d300242ac110003",
                        "org_name": "福建区",
                        "org_type": 1,
                        "org_code": "0000000357",
                        "order_index": 14,
                        "state": 1,
                        "is_ds": 0
                    },
                    {
                        "id": 875,
                        "children": [
                            {
                                "id": 212,
                                "children": [
                                    {
                                        "id": 473,
                                        "children": [],
                                        "org_id": "8053ceab912711eb94ae5254007fd0df",
                                        "org_name": "沈阳麦若可连锁",
                                        "org_type": 9,
                                        "org_code": "0000000918",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 488,
                                        "children": [],
                                        "org_id": "f843ad34164511e9b0190242ac110004",
                                        "org_name": "沈阳麦若可药房有限责任公司",
                                        "org_type": 6,
                                        "org_code": "0000000105",
                                        "order_index": 2,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 514,
                                        "children": [],
                                        "org_id": "b0a7407db5f411ea96f20242ac110002",
                                        "org_name": "沈阳麦若可药房有限责任公司文萃店",
                                        "org_type": 6,
                                        "org_code": "0000000777",
                                        "order_index": 3,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 230,
                                        "children": [],
                                        "org_id": "1e7d7ced8a0b4e439dd2155be19bd55c",
                                        "org_name": "沈阳麦若可药房有限责任公司大东路店",
                                        "org_type": 6,
                                        "org_code": "0000000611",
                                        "order_index": 4,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 249,
                                        "children": [],
                                        "org_id": "4f00e1b5ea074a8fbe84e56743fc7056",
                                        "org_name": "沈阳麦若可药房有限责任公司联合路分店",
                                        "org_type": 6,
                                        "org_code": "0000000610",
                                        "order_index": 5,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 657,
                                        "children": [],
                                        "org_id": "2e38d0dab70811ed94f25254007fd0df",
                                        "org_name": "锦州麦若可药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001498",
                                        "order_index": 6,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "4be5408c5a2411eba2430242ac110003",
                                "org_name": "辽宁省",
                                "org_type": 2,
                                "org_code": "0000000891",
                                "order_index": 1,
                                "state": 1,
                                "is_ds": 0
                            }
                        ],
                        "org_id": "c53244d4abaa11eebdd05254007fd0df",
                        "org_name": "辽宁区",
                        "org_type": 1,
                        "org_code": "0000001754",
                        "order_index": 15,
                        "state": 1,
                        "is_ds": 0
                    },
                    {
                        "id": 2,
                        "children": [
                            {
                                "id": 4,
                                "children": [
                                    {
                                        "id": 113,
                                        "children": [],
                                        "org_id": "ce1642ae0f2611e994a00242ac110004",
                                        "org_name": "昆钢分店中医坐堂医诊所（已作废）",
                                        "org_type": 7,
                                        "org_code": "0000000089",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 17,
                                        "children": [],
                                        "org_id": "5b361c3d0f2511e9b1950242ac110002",
                                        "org_name": "云南圆心妙手医药有限公司昆钢分店（已作废）",
                                        "org_type": 7,
                                        "org_code": "0000000086",
                                        "order_index": 2,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 23,
                                        "children": [],
                                        "org_id": "ae8e23790f0311e988760242ac110004",
                                        "org_name": "玉溪市尚康医药有限公司五店（已作废）",
                                        "org_type": 7,
                                        "org_code": "0000000064",
                                        "order_index": 3,
                                        "state": 0,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 28,
                                        "children": [],
                                        "org_id": "e5fe90300f0111e99f330242ac110003",
                                        "org_name": "玉溪市尚康医药有限公司三店（已作废）",
                                        "org_type": 7,
                                        "org_code": "0000000061",
                                        "order_index": 4,
                                        "state": 0,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 30,
                                        "children": [],
                                        "org_id": "030d07090f0111e99f330242ac110003",
                                        "org_name": "玉溪市尚康医药有限公司（已作废）",
                                        "org_type": 7,
                                        "org_code": "0000000058",
                                        "order_index": 5,
                                        "state": 0,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 35,
                                        "children": [],
                                        "org_id": "7e0325c40f0111e988760242ac110004",
                                        "org_name": "玉溪市尚康医药有限公司北城二店（已作废）",
                                        "org_type": 7,
                                        "org_code": "0000000059",
                                        "order_index": 6,
                                        "state": 0,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 38,
                                        "children": [],
                                        "org_id": "dcccab550f0311e9b1950242ac110002",
                                        "org_name": "玉溪市尚康医药有限公司六店（已作废）",
                                        "org_type": 7,
                                        "org_code": "0000000065",
                                        "order_index": 7,
                                        "state": 0,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 43,
                                        "children": [],
                                        "org_id": "42e2b35eceb011e987af0242ac110003",
                                        "org_name": "玉溪市尚康医药有限公司六店(已闭店)",
                                        "org_type": 6,
                                        "org_code": "0000000497",
                                        "order_index": 8,
                                        "state": 0,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 47,
                                        "children": [],
                                        "org_id": "b5ec8afa0f0211e99f330242ac110003",
                                        "org_name": "玉溪市尚康医药有限公司玉兴路店（已作废）",
                                        "org_type": 7,
                                        "org_code": "0000000062",
                                        "order_index": 9,
                                        "state": 0,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 48,
                                        "children": [],
                                        "org_id": "96033139179811e9b0190242ac110004",
                                        "org_name": "建水县欣盛源大药房（已闭店）",
                                        "org_type": 6,
                                        "org_code": "0000000107",
                                        "order_index": 10,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 52,
                                        "children": [
                                            {
                                                "id": 140,
                                                "children": [],
                                                "org_id": "3e487536ceb111e98e930242ac110003",
                                                "org_name": "玉溪市尚康医药有限公司玉兴路店(仅退货)",
                                                "org_type": 6,
                                                "org_code": "0000000499",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 174,
                                                "children": [],
                                                "org_id": "cfbf4ce6ceaf11e983550242ac110002",
                                                "org_name": "玉溪市尚康医药有限公司北城二店(仅退货)",
                                                "org_type": 6,
                                                "org_code": "0000000496",
                                                "order_index": 2,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 206,
                                                "children": [],
                                                "org_id": "64d17d66ceaf11e987af0242ac110003",
                                                "org_name": "玉溪市尚康医药有限公司(仅退货)",
                                                "org_type": 6,
                                                "org_code": "0000000495",
                                                "order_index": 3,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 234,
                                                "children": [],
                                                "org_id": "f7f5c04dceae11e987af0242ac110003",
                                                "org_name": "玉溪市尚康医药有限公司三店（仅退货）",
                                                "org_type": 6,
                                                "org_code": "0000000494",
                                                "order_index": 4,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 254,
                                                "children": [],
                                                "org_id": "78878747ceae11e987af0242ac110003",
                                                "org_name": "玉溪市尚康医药有限公司五店(仅退货)",
                                                "org_type": 6,
                                                "org_code": "0000000493",
                                                "order_index": 5,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "1af89820919711ea8f2d0242ac110002",
                                        "org_name": "玉溪片区(单体)",
                                        "org_type": 6,
                                        "org_code": "0000000726",
                                        "order_index": 11,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 56,
                                        "children": [],
                                        "org_id": "59e5bf865dee11ea8e2d0242ac110003",
                                        "org_name": "*云南圆心妙手医药有限公司玉溪紫艺路二店",
                                        "org_type": 6,
                                        "org_code": "0000000637",
                                        "order_index": 12,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 57,
                                        "children": [
                                            {
                                                "id": 141,
                                                "children": [],
                                                "org_id": "c41dda8fd42511e98f6f0242ac110002",
                                                "org_name": "安宁市金方街道黎明创业园社区卫生服务站(已作废)",
                                                "org_type": 7,
                                                "org_code": "0000000502",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "4a893dbc0f2711e9a7a00242ac110002",
                                        "org_name": "安宁市金方街道黎明社区卫生服务站(已作废)",
                                        "org_type": 7,
                                        "org_code": "0000000091",
                                        "order_index": 13,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 58,
                                        "children": [],
                                        "org_id": "434113d1fb7e11e9bb040242ac110003",
                                        "org_name": "安宁市金方街道黎明创业园社区卫生服务站药房部(已作废)",
                                        "org_type": 7,
                                        "org_code": "0000000551",
                                        "order_index": 14,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 61,
                                        "children": [],
                                        "org_id": "59dad8e54b1d11e9b8da0242ac110004",
                                        "org_name": "昆明工众药房(普通合伙）西山金碧店(仅退货)",
                                        "org_type": 6,
                                        "org_code": "0000000308",
                                        "order_index": 15,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 62,
                                        "children": [],
                                        "org_id": "cec093f80efe11e9b1950242ac110002",
                                        "org_name": "昆明工众药房(普通合伙）(仅退货)",
                                        "org_type": 6,
                                        "org_code": "0000000054",
                                        "order_index": 16,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 63,
                                        "children": [],
                                        "org_id": "4b7887160eff11e9b1950242ac110002",
                                        "org_name": "昆明工众药房(普通合伙）春苑店(仅退货)",
                                        "org_type": 6,
                                        "org_code": "0000000055",
                                        "order_index": 17,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 64,
                                        "children": [],
                                        "org_id": "0ee7fdbe8f2411e9a59d0242ac110003",
                                        "org_name": "贵阳圆心妙手医药有限公司枣山路分公司（闭店）",
                                        "org_type": 6,
                                        "org_code": "0000000450",
                                        "order_index": 18,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 65,
                                        "children": [],
                                        "org_id": "dd8fff760efc11e9b1950242ac110002",
                                        "org_name": "贵阳圆心妙手医药有限公司博爱路分公司（闭店）",
                                        "org_type": 6,
                                        "org_code": "0000000051",
                                        "order_index": 19,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 66,
                                        "children": [],
                                        "org_id": "0a23886c0f2811e994a00242ac110004",
                                        "org_name": "开远市源生药业有限公司二店(已闭店)",
                                        "org_type": 6,
                                        "org_code": "0000000093",
                                        "order_index": 20,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 67,
                                        "children": [],
                                        "org_id": "3a63de930f0411e9b1950242ac110002",
                                        "org_name": "昆明工众药房(普通合伙）虹山南路店*(仅退货)",
                                        "org_type": 6,
                                        "org_code": "0000000066",
                                        "order_index": 21,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 68,
                                        "children": [],
                                        "org_id": "179652320efe11e988760242ac110004",
                                        "org_name": "昆明工众药房(普通合伙）虹山南路店(仅退货)",
                                        "org_type": 6,
                                        "org_code": "0000000052",
                                        "order_index": 22,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 69,
                                        "children": [],
                                        "org_id": "e20704da22b011e9a9010242ac110002",
                                        "org_name": "贵阳云岩圆心朝阳诊所(已闭店)",
                                        "org_type": 6,
                                        "org_code": "0000000204",
                                        "order_index": 23,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 70,
                                        "children": [],
                                        "org_id": "ebc5a7520f2011e99f330242ac110003",
                                        "org_name": "安宁市金方街道黎明蓝天城社区卫生服务站**",
                                        "org_type": 6,
                                        "org_code": "0000000084",
                                        "order_index": 24,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 71,
                                        "children": [],
                                        "org_id": "a8fe9b100f2711e9a7a00242ac110002",
                                        "org_name": "蒙自康之源健康药房二店*",
                                        "org_type": 6,
                                        "org_code": "0000000092",
                                        "order_index": 25,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 72,
                                        "children": [],
                                        "org_id": "389476770f1e11e99f330242ac110003",
                                        "org_name": "蒙自康之源健康药房*(已闭店)",
                                        "org_type": 6,
                                        "org_code": "0000000080",
                                        "order_index": 26,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 74,
                                        "children": [],
                                        "org_id": "6c802cf4d52b11e9859a0242ac110003",
                                        "org_name": "红河州圆心大药房有限公司(已闭店)",
                                        "org_type": 6,
                                        "org_code": "0000000504",
                                        "order_index": 27,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 75,
                                        "children": [],
                                        "org_id": "b29a68e10f1e11e99f330242ac110003",
                                        "org_name": "开远市源生药业有限公司(已闭店)",
                                        "org_type": 6,
                                        "org_code": "0000000081",
                                        "order_index": 28,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 26,
                                        "children": [],
                                        "org_id": "b84f236706fc4cf5aaa17a2bd31de772",
                                        "org_name": "红河片区",
                                        "org_type": 4,
                                        "org_code": "0000000562",
                                        "order_index": 29,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 674,
                                        "children": [],
                                        "org_id": "757effa60efe11e9b1950242ac110002",
                                        "org_name": "昆明工众药房黑林铺店*",
                                        "org_type": 6,
                                        "org_code": "0000000053",
                                        "order_index": 30,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 612,
                                        "children": [],
                                        "org_id": "c404ad76fcdf11ec92945254007fd0df",
                                        "org_name": "云贵连锁及单体药店",
                                        "org_type": 9,
                                        "org_code": "0000001354",
                                        "order_index": 31,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "20e85ae11a3811e9874a0242ac110003",
                                "org_name": "作废、闭店机构",
                                "org_type": 7,
                                "org_code": "0000000111",
                                "order_index": 1,
                                "state": 1,
                                "is_ds": 0
                            },
                            {
                                "id": 672,
                                "children": [
                                    {
                                        "id": 680,
                                        "children": [
                                            {
                                                "id": 681,
                                                "children": [],
                                                "org_id": "80ae449f53c111eb98f90242ac110003",
                                                "org_name": "云南圆心妙手医药有限公司大理人民北路分公司",
                                                "org_type": 6,
                                                "org_code": "0000000872",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 689,
                                                "children": [],
                                                "org_id": "b865efcffbd711eabea90242ac110004",
                                                "org_name": "云南圆心妙手医药有限公司西昌路分公司",
                                                "org_type": 6,
                                                "org_code": "0000000832",
                                                "order_index": 2,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 699,
                                                "children": [],
                                                "org_id": "0947a7b5a4fb11ec97915254007c9edd",
                                                "org_name": "云南圆心妙手医药有限公司曲靖一分店",
                                                "org_type": 6,
                                                "org_code": "0000001263",
                                                "order_index": 3,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 698,
                                                "children": [
                                                    {
                                                        "id": 724,
                                                        "children": [],
                                                        "org_id": "3df0454bb49711ebbd2752540072d236",
                                                        "org_name": "云南圆心妙手医药有限公司虹山南路分店",
                                                        "org_type": 6,
                                                        "org_code": "0000000950",
                                                        "order_index": 1,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 723,
                                                        "children": [],
                                                        "org_id": "0d9497b05de411eaa1a90242ac110003",
                                                        "org_name": "云南圆心妙手医药有限公司金碧分店",
                                                        "org_type": 6,
                                                        "org_code": "0000000626",
                                                        "order_index": 2,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 722,
                                                        "children": [],
                                                        "org_id": "de9139b65de311ea91510242ac110004",
                                                        "org_name": "云南圆心妙手医药有限公司光华街分店",
                                                        "org_type": 6,
                                                        "org_code": "0000000625",
                                                        "order_index": 3,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 721,
                                                        "children": [],
                                                        "org_id": "b2fff6635de311ea91510242ac110004",
                                                        "org_name": "云南圆心妙手医药有限公司巡津街分店",
                                                        "org_type": 6,
                                                        "org_code": "0000000624",
                                                        "order_index": 4,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 720,
                                                        "children": [],
                                                        "org_id": "db6b8ddd0f0611e9b1950242ac110002",
                                                        "org_name": "云南圆心妙手医药有限公司北京路分店",
                                                        "org_type": 6,
                                                        "org_code": "0000000072",
                                                        "order_index": 5,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    }
                                                ],
                                                "org_id": "5fad37920f1811e988760242ac110004",
                                                "org_name": "昆明片区",
                                                "org_type": 4,
                                                "org_code": "0000000076",
                                                "order_index": 4,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 719,
                                                "children": [
                                                    {
                                                        "id": 728,
                                                        "children": [],
                                                        "org_id": "7d1c79c65dea11eaa7440242ac110002",
                                                        "org_name": "云南圆心妙手医药有限公司玉溪荣昌街一店",
                                                        "org_type": 6,
                                                        "org_code": "0000000633",
                                                        "order_index": 1,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 727,
                                                        "children": [],
                                                        "org_id": "f62d2fa15ded11eaa7440242ac110002",
                                                        "org_name": "云南圆心妙手医药有限公司玉溪荣昌街二店",
                                                        "org_type": 6,
                                                        "org_code": "0000000635",
                                                        "order_index": 2,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 726,
                                                        "children": [],
                                                        "org_id": "215799205dee11eaa7440242ac110002",
                                                        "org_name": "云南圆心妙手医药有限公司玉溪紫艺路一店",
                                                        "org_type": 6,
                                                        "org_code": "0000000636",
                                                        "order_index": 3,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    },
                                                    {
                                                        "id": 725,
                                                        "children": [],
                                                        "org_id": "093219d55dea11eaa7440242ac110002",
                                                        "org_name": "云南圆心妙手医药有限公司玉溪书院路店",
                                                        "org_type": 6,
                                                        "org_code": "0000000629",
                                                        "order_index": 4,
                                                        "state": 1,
                                                        "is_ds": 0
                                                    }
                                                ],
                                                "org_id": "a32203cc0f0111e988760242ac110004",
                                                "org_name": "玉溪片区",
                                                "org_type": 4,
                                                "org_code": "0000000060",
                                                "order_index": 5,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 678,
                                                "children": [],
                                                "org_id": "0c24cdc634ee11e98d900242ac110004",
                                                "org_name": "云南圆心妙手医药有限公司大理市人民北路诊所",
                                                "org_type": 6,
                                                "org_code": "0000000241",
                                                "order_index": 6,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 675,
                                                "children": [],
                                                "org_id": "184cb0850f2011e988760242ac110004",
                                                "org_name": "云南圆心妙手医药有限公司五华光华街诊所",
                                                "org_type": 6,
                                                "org_code": "0000000083",
                                                "order_index": 7,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 10,
                                                "children": [],
                                                "org_id": "b33a01fa34ec11e9b4490242ac110003",
                                                "org_name": "云南圆心妙手医药有限公司大理圆心诊所（已作废）",
                                                "org_type": 7,
                                                "org_code": "0000000240",
                                                "order_index": 8,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 54,
                                                "children": [],
                                                "org_id": "5a4d8e555de411ea91510242ac110004",
                                                "org_name": "云南圆心妙手医药有限公司虹山南路分店(作废)",
                                                "org_type": 7,
                                                "org_code": "0000000628",
                                                "order_index": 9,
                                                "state": 0,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 59,
                                                "children": [],
                                                "org_id": "84b67b0b17bd11e9b0190242ac110004",
                                                "org_name": "云南圆心妙手医药有限公司大理古城店(仅退货)",
                                                "org_type": 6,
                                                "org_code": "0000000109",
                                                "order_index": 10,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 60,
                                                "children": [],
                                                "org_id": "cecd5252522911e9bf9a0242ac110003",
                                                "org_name": "云南圆心妙手医药有限公司下关关平路店(仅退货)",
                                                "org_type": 6,
                                                "org_code": "0000000334",
                                                "order_index": 11,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 154,
                                                "children": [],
                                                "org_id": "fe27ce30388511ec8f3a52540072d236",
                                                "org_name": "云南圆心妙手医药有限公司开远健民路分公司(已闭店)",
                                                "org_type": 6,
                                                "org_code": "0000001118",
                                                "order_index": 12,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 729,
                                                "children": [],
                                                "org_id": "4c9143355dea11ea8e2d0242ac110003",
                                                "org_name": "云南圆心妙手医药有限公司玉溪玉兴路店(已闭店)",
                                                "org_type": 6,
                                                "org_code": "0000000632",
                                                "order_index": 13,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "33b51345fc96488f8689cfc3b7bf1771",
                                        "org_name": "云南圆心妙手医药有限公司",
                                        "org_type": 9,
                                        "org_code": "0000000565",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 670,
                                        "children": [
                                            {
                                                "id": 679,
                                                "children": [],
                                                "org_id": "dc8d0936706c11e9b10f0242ac110003",
                                                "org_name": "安宁景天药业有限公司",
                                                "org_type": 6,
                                                "org_code": "0000000376",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 683,
                                                "children": [],
                                                "org_id": "bbec0c5d98d011ea83720242ac110002",
                                                "org_name": "安宁市金方街道黎明蓝天城社区卫生服务站",
                                                "org_type": 6,
                                                "org_code": "0000000735",
                                                "order_index": 2,
                                                "state": 1,
                                                "is_ds": 0
                                            },
                                            {
                                                "id": 671,
                                                "children": [],
                                                "org_id": "fda74a6998d011ea83720242ac110002",
                                                "org_name": "安宁市金方街道黎明蓝天城社区卫生服务站门诊",
                                                "org_type": 6,
                                                "org_code": "0000000737",
                                                "order_index": 3,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "587f0944706c11e9a32b0242ac110002",
                                        "org_name": "安宁片区",
                                        "org_type": 6,
                                        "org_code": "0000000375",
                                        "order_index": 2,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 673,
                                        "children": [],
                                        "org_id": "829360140f1f11e988760242ac110004",
                                        "org_name": "昆明仁泽药业有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000082",
                                        "order_index": 3,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 41,
                                        "children": [
                                            {
                                                "id": 114,
                                                "children": [],
                                                "org_id": "1966e2b503c011ec98c45254007fd0df",
                                                "org_name": "云南信慧康达医药有限公司(代储代配)",
                                                "org_type": 6,
                                                "org_code": "0000001050",
                                                "order_index": 1,
                                                "state": 1,
                                                "is_ds": 0
                                            }
                                        ],
                                        "org_id": "7db86b8b5f3e11e998460242ac110003",
                                        "org_name": "云南信慧康达医药有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000355",
                                        "order_index": 4,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 858,
                                        "children": [],
                                        "org_id": "76ac98f78a9f11eebdd05254007fd0df",
                                        "org_name": "云南圆心妙手医药有限公司西山秀苑路诊所",
                                        "org_type": 6,
                                        "org_code": "0000001733",
                                        "order_index": 5,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 899,
                                        "children": [],
                                        "org_id": "a380be49fd6d11ee89352adcf763c22a",
                                        "org_name": "云南圆边便利店有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001794",
                                        "order_index": 6,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "1db721529ce04c7b9478b9bf6de9e5d5",
                                "org_name": "云南省",
                                "org_type": 2,
                                "org_code": "0000000561",
                                "order_index": 2,
                                "state": 1,
                                "is_ds": 0
                            },
                            {
                                "id": 668,
                                "children": [
                                    {
                                        "id": 677,
                                        "children": [],
                                        "org_id": "a968dcc60efc11e988760242ac110004",
                                        "org_name": "贵阳圆心妙手医药有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000048",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 682,
                                        "children": [],
                                        "org_id": "8fe248beeb0b11e9a6cd0242ac110003",
                                        "org_name": "贵阳云岩妙联诊所有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000533",
                                        "order_index": 2,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 669,
                                        "children": [],
                                        "org_id": "f20d3b2862c711ec931352540072d236",
                                        "org_name": "贵阳圆心妙手医药有限公司遵义分公司",
                                        "org_type": 6,
                                        "org_code": "0000001184",
                                        "order_index": 3,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 700,
                                        "children": [],
                                        "org_id": "6971abe1c21d11ec8c8f525400f6496b",
                                        "org_name": "贵阳圆心妙手医药有限公司中山东路分公司",
                                        "org_type": 6,
                                        "org_code": "0000001279",
                                        "order_index": 4,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "da4139ab0f1811e988760242ac110004",
                                "org_name": "贵州省",
                                "org_type": 2,
                                "org_code": "0000000077",
                                "order_index": 3,
                                "state": 1,
                                "is_ds": 0
                            },
                            {
                                "id": 9,
                                "children": [],
                                "org_id": "f39a3c865dd511ea9dd10242ac110002",
                                "org_name": "云贵区运营中机构",
                                "org_type": 7,
                                "org_code": "0000000621",
                                "order_index": 4,
                                "state": 1,
                                "is_ds": 0
                            }
                        ],
                        "org_id": "284550980eed11e98aec0242ac110004",
                        "org_name": "云贵区",
                        "org_type": 1,
                        "org_code": "0000000032",
                        "order_index": 16,
                        "state": 1,
                        "is_ds": 0
                    },
                    {
                        "id": 876,
                        "children": [
                            {
                                "id": 7,
                                "children": [
                                    {
                                        "id": 135,
                                        "children": [],
                                        "org_id": "5fb287775ccc11e996270242ac110002",
                                        "org_name": "兰州仁友医药有限责任公司",
                                        "org_type": 6,
                                        "org_code": "0000000351",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 8,
                                        "children": [],
                                        "org_id": "5983764cf92311e990a60242ac110003",
                                        "org_name": "兰州仁友医药有限责任公司兰大一院店",
                                        "org_type": 6,
                                        "org_code": "0000000543",
                                        "order_index": 2,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 15,
                                        "children": [],
                                        "org_id": "a86797d0617211ec98e452540072d236",
                                        "org_name": "甘肃圆心云智医疗科技有限公司七里河诊所",
                                        "org_type": 6,
                                        "org_code": "0000001180",
                                        "order_index": 3,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 730,
                                        "children": [],
                                        "org_id": "1702b8e2ca1d11edaebc5254009b39e4",
                                        "org_name": "兰州仁友医药有限责任公司兰大二院店",
                                        "org_type": 6,
                                        "org_code": "0000001505",
                                        "order_index": 4,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "db76d5e25a2511eba2430242ac110003",
                                "org_name": "甘肃省",
                                "org_type": 2,
                                "org_code": "0000000899",
                                "order_index": 1,
                                "state": 1,
                                "is_ds": 0
                            },
                            {
                                "id": 25,
                                "children": [
                                    {
                                        "id": 142,
                                        "children": [],
                                        "org_id": "f8e7a55e27e411ec808b52540072d236",
                                        "org_name": "西宁圆心大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001102",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "f4b279ff27d411ec808b52540072d236",
                                "org_name": "青海省",
                                "org_type": 2,
                                "org_code": "0000001100",
                                "order_index": 2,
                                "state": 1,
                                "is_ds": 0
                            }
                        ],
                        "org_id": "9bffe4d1abab11eeaff752540072d236",
                        "org_name": "甘青区",
                        "org_type": 1,
                        "org_code": "0000001757",
                        "order_index": 17,
                        "state": 1,
                        "is_ds": 0
                    },
                    {
                        "id": 238,
                        "children": [
                            {
                                "id": 881,
                                "children": [
                                    {
                                        "id": 463,
                                        "children": [],
                                        "org_id": "a7269cc13b7511ebacad0242ac110003",
                                        "org_name": "呼和浩特市圆心大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000861",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 508,
                                        "children": [],
                                        "org_id": "6ae5a31c5e0e11ec927e5254009b39e4",
                                        "org_name": "包头市圆心大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001170",
                                        "order_index": 2,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 483,
                                        "children": [],
                                        "org_id": "be44e651563311ec9d9252540072d236",
                                        "org_name": "赤峰市圆心大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001152",
                                        "order_index": 3,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 777,
                                        "children": [],
                                        "org_id": "863aa88eecaa11ed8af05254007fd0df",
                                        "org_name": "呼和浩特市圆心妙手大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001579",
                                        "order_index": 4,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "4e441d77abae11eebdd05254007fd0df",
                                "org_name": "内蒙古自治区",
                                "org_type": 2,
                                "org_code": "0000001765",
                                "order_index": 1,
                                "state": 1,
                                "is_ds": 0
                            },
                            {
                                "id": 882,
                                "children": [
                                    {
                                        "id": 609,
                                        "children": [],
                                        "org_id": "f65a5b44c5d711ec9e515254007c9edd",
                                        "org_name": "太原市凯旋街九康大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001282",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 509,
                                        "children": [],
                                        "org_id": "39a5c3566d3d11ec9b665254007fd0df",
                                        "org_name": "太原市凯旋街九康大药房有限公司作废",
                                        "org_type": 7,
                                        "org_code": "0000001193",
                                        "order_index": 2,
                                        "state": 0,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 500,
                                        "children": [],
                                        "org_id": "57b32b0ebd3811eba9db52540072d236",
                                        "org_name": "山西妙手圆心大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000959",
                                        "order_index": 3,
                                        "state": 1,
                                        "is_ds": 0
                                    },
                                    {
                                        "id": 462,
                                        "children": [],
                                        "org_id": "2bdf0b4a254911ebaeb60242ac110003",
                                        "org_name": "山西圆心求恩大药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000854",
                                        "order_index": 4,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "e6a84dc0abaf11eeaff752540072d236",
                                "org_name": "山西省",
                                "org_type": 2,
                                "org_code": "0000001766",
                                "order_index": 2,
                                "state": 1,
                                "is_ds": 0
                            }
                        ],
                        "org_id": "04192b1e5a2511eba2430242ac110003",
                        "org_name": "蒙晋区",
                        "org_type": 1,
                        "org_code": "0000000896",
                        "order_index": 18,
                        "state": 1,
                        "is_ds": 0
                    },
                    {
                        "id": 877,
                        "children": [
                            {
                                "id": 878,
                                "children": [
                                    {
                                        "id": 345,
                                        "children": [],
                                        "org_id": "1e94633e5bfc11ec8ac15254009b39e4",
                                        "org_name": "北京圆心医药有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001158",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "5b58ec2eabad11eebdd05254007fd0df",
                                "org_name": "商业北京市",
                                "org_type": 2,
                                "org_code": "0000001761",
                                "order_index": 1,
                                "state": 1,
                                "is_ds": 0
                            },
                            {
                                "id": 879,
                                "children": [
                                    {
                                        "id": 115,
                                        "children": [],
                                        "org_id": "d1309a580f3411e9859c0242ac110002",
                                        "org_name": "江苏朗润药业有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000096",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "6dd26161abad11eeaff752540072d236",
                                "org_name": "商业江苏省",
                                "org_type": 2,
                                "org_code": "0000001762",
                                "order_index": 2,
                                "state": 1,
                                "is_ds": 0
                            },
                            {
                                "id": 880,
                                "children": [
                                    {
                                        "id": 319,
                                        "children": [],
                                        "org_id": "c6df7a8872f111e9b4ef0242ac110003",
                                        "org_name": "广东圆心药业有限公司",
                                        "org_type": 6,
                                        "org_code": "0000000419",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "bdf054faabad11ee9ed95254009b39e4",
                                "org_name": "商业广东省",
                                "org_type": 2,
                                "org_code": "0000001764",
                                "order_index": 3,
                                "state": 1,
                                "is_ds": 0
                            }
                        ],
                        "org_id": "13a534bcabad11ee9ed95254009b39e4",
                        "org_name": "商业公司区",
                        "org_type": 1,
                        "org_code": "0000001760",
                        "order_index": 19,
                        "state": 1,
                        "is_ds": 0
                    },
                    {
                        "id": 640,
                        "children": [
                            {
                                "id": 779,
                                "children": [
                                    {
                                        "id": 641,
                                        "children": [],
                                        "org_id": "f0b491387cdf11edb23b5254009b39e4",
                                        "org_name": "阳泉市圆心慢病管理药房有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001455",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "016ab57bf2eb11eda4275254009b39e4",
                                "org_name": "惠保区域",
                                "org_type": 8,
                                "org_code": "0000001581",
                                "order_index": 1,
                                "state": 1,
                                "is_ds": 0
                            }
                        ],
                        "org_id": "28537c857cdd11ed95f952540072d236",
                        "org_name": "惠保大区",
                        "org_type": 8,
                        "org_code": "0000001454",
                        "order_index": 20,
                        "state": 1,
                        "is_ds": 0
                    },
                    {
                        "id": 832,
                        "children": [
                            {
                                "id": 833,
                                "children": [
                                    {
                                        "id": 828,
                                        "children": [],
                                        "org_id": "2f28b4d72b7c11eeb7fb5254009b39e4",
                                        "org_name": "北京京杏堂中医诊所有限公司",
                                        "org_type": 6,
                                        "org_code": "0000001675",
                                        "order_index": 1,
                                        "state": 1,
                                        "is_ds": 0
                                    }
                                ],
                                "org_id": "e525ca833caa11eeb0c15254007fd0df",
                                "org_name": "医生运营中心",
                                "org_type": 6,
                                "org_code": "0000001679",
                                "order_index": 1,
                                "state": 1,
                                "is_ds": 0
                            }
                        ],
                        "org_id": "6e159cfd3ca311eeb0c15254007fd0df",
                        "org_name": "医生运营中心",
                        "org_type": 8,
                        "org_code": "0000001678",
                        "order_index": 21,
                        "state": 1,
                        "is_ds": 0
                    },
                    {
                        "id": 50,
                        "children": [
                            {
                                "id": 153,
                                "children": [],
                                "org_id": "0f62f9be3e2411e9a7e20242ac110004",
                                "org_name": "厂家流向",
                                "org_type": 10,
                                "org_code": "0000000257",
                                "order_index": 1,
                                "state": 1,
                                "is_ds": 0
                            }
                        ],
                        "org_id": "fd2071653e2311e98cf70242ac110003",
                        "org_name": "其他机构",
                        "org_type": 8,
                        "org_code": "0000000256",
                        "order_index": 22,
                        "state": 1,
                        "is_ds": 0
                    },
                    {
                        "id": 637,
                        "children": [],
                        "org_id": "4a178795761511ed99275254009b39e4",
                        "org_name": "北京圆心医疗科技有限公司",
                        "org_type": 6,
                        "org_code": "0000001451",
                        "order_index": 23,
                        "state": 1,
                        "is_ds": 0
                    },
                    {
                        "id": 639,
                        "children": [],
                        "org_id": "c9af8f08761511ed99275254009b39e4",
                        "org_name": "北京圆心医疗科技有限公司",
                        "org_type": 6,
                        "org_code": "0000001452",
                        "order_index": 24,
                        "state": 1,
                        "is_ds": 0
                    },
                    {
                        "id": 874,
                        "children": [],
                        "org_id": "98086149abaa11eeaff752540072d236",
                        "org_name": "宁新区",
                        "org_type": 1,
                        "org_code": "0000001753",
                        "order_index": 25,
                        "state": 1,
                        "is_ds": 0
                    },
                    {
                        "id": 76,
                        "children": [
                            {
                                "id": 77,
                                "children": [],
                                "org_id": "xiantaozhihuidayaofang",
                                "org_name": "仙桃智慧大药房有限公司",
                                "org_type": 6,
                                "org_code": "1000",
                                "order_index": 1000,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 630,
                                "children": [],
                                "org_id": "dalishirenminbeiluzhensuo",
                                "org_name": "云南圆心妙手医药有限公司大理市人民北路诊所",
                                "org_type": 6,
                                "org_code": "10002",
                                "order_index": 1000,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 629,
                                "children": [],
                                "org_id": "chongxingqiaoyilinzhensuo",
                                "org_name": "重庆巧医邻诊所管理有限公司",
                                "org_type": 6,
                                "org_code": "10001",
                                "order_index": 1000,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 628,
                                "children": [],
                                "org_id": "chongqingyuanxindayaofangxinqiaodian",
                                "org_name": "重庆圆心大药房有限公司新桥店",
                                "org_type": 6,
                                "org_code": "10000",
                                "order_index": 1000,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 78,
                                "children": [],
                                "org_id": "foshanshundefengshan",
                                "org_name": "广东圆心恒金堂医药连锁有限公司佛山顺德凤山分店",
                                "org_type": 6,
                                "org_code": "1001",
                                "order_index": 1001,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 79,
                                "children": [],
                                "org_id": "henanyuanxinmenzhen",
                                "org_name": "河南圆心门诊有限公司",
                                "org_type": 6,
                                "org_code": "1002",
                                "order_index": 1002,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 80,
                                "children": [],
                                "org_id": "wuhanyuanxindayaofangliansuo",
                                "org_name": "武汉圆心大药房连锁有限公司",
                                "org_type": 6,
                                "org_code": "1003",
                                "order_index": 1003,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 81,
                                "children": [],
                                "org_id": "wuhanyuanxindayaofang",
                                "org_name": "武汉圆心大药房有限公司",
                                "org_type": 6,
                                "org_code": "1004",
                                "order_index": 1004,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 82,
                                "children": [],
                                "org_id": "chengduwenjiangyonghui",
                                "org_name": "成都温江永辉圆心大药房有限公司",
                                "org_type": 6,
                                "org_code": "1005",
                                "order_index": 1005,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 83,
                                "children": [],
                                "org_id": "xingzhouhangkongludian",
                                "org_name": "荆州圆心大药房有限公司航空路店",
                                "org_type": 6,
                                "org_code": "1006",
                                "order_index": 1006,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 84,
                                "children": [],
                                "org_id": "yunanbeijinglufendian",
                                "org_name": "云南圆心妙手医药有限公司北京路分店",
                                "org_type": 6,
                                "org_code": "1007",
                                "order_index": 1007,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 85,
                                "children": [],
                                "org_id": "sichuanyuanxinjianyi",
                                "org_name": "四川圆心简医大药房有限公司",
                                "org_type": 6,
                                "org_code": "1008",
                                "order_index": 1008,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 86,
                                "children": [],
                                "org_id": "wuhanyuanxinmiaoshou",
                                "org_name": "武汉圆心妙手门诊部有限公司",
                                "org_type": 6,
                                "org_code": "1009",
                                "order_index": 1009,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 87,
                                "children": [],
                                "org_id": "guangdongyuanxinyaoye",
                                "org_name": "广东圆心药业有限公司",
                                "org_type": 6,
                                "org_code": "1010",
                                "order_index": 1010,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 88,
                                "children": [],
                                "org_id": "guangdongruimeiyaoye",
                                "org_name": "广东瑞美药业有限公司",
                                "org_type": 6,
                                "org_code": "1011",
                                "order_index": 1011,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 89,
                                "children": [],
                                "org_id": "guangdongmiaoshoumenzhen",
                                "org_name": "广州妙手门诊有限公司",
                                "org_type": 6,
                                "org_code": "1012",
                                "order_index": 1012,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 90,
                                "children": [],
                                "org_id": "guangzhoutongjiankang",
                                "org_name": "广州昶通健康门诊部有限公司",
                                "org_type": 6,
                                "org_code": "1013",
                                "order_index": 1013,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 91,
                                "children": [],
                                "org_id": "shandongbaosuiqu",
                                "org_name": "山东圆心大药房有限公司保税区店",
                                "org_type": 6,
                                "org_code": "1013",
                                "order_index": 1013,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 93,
                                "children": [],
                                "org_id": "nantongyuanxindayaofang",
                                "org_name": "南通圆心大药房有限公司",
                                "org_type": 6,
                                "org_code": "1014",
                                "order_index": 1014,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 92,
                                "children": [],
                                "org_id": "anhuijixiludian",
                                "org_name": "安徽圆心医药有限公司绩溪路店",
                                "org_type": 6,
                                "org_code": "1014",
                                "order_index": 1014,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 94,
                                "children": [],
                                "org_id": "nanjingyuanxinmenzhen",
                                "org_name": "南京圆心门诊部有限公司",
                                "org_type": 6,
                                "org_code": "1015",
                                "order_index": 1015,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 95,
                                "children": [],
                                "org_id": "shandongwenhuadongludian",
                                "org_name": "山东圆心大药房有限公司文化东路店",
                                "org_type": 6,
                                "org_code": "1016",
                                "order_index": 1016,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 96,
                                "children": [],
                                "org_id": "hefeishijinghedayaofang",
                                "org_name": "合肥市静和大药房有限责任公司",
                                "org_type": 6,
                                "org_code": "1017",
                                "order_index": 1017,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 97,
                                "children": [],
                                "org_id": "huangshanxinxiteyiyao",
                                "org_name": "黄山新稀特医药零售有限公司",
                                "org_type": 6,
                                "org_code": "1018",
                                "order_index": 1018,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 98,
                                "children": [],
                                "org_id": "nanjingtianyizhongxin",
                                "org_name": "南京天一中信药房有限公司",
                                "org_type": 6,
                                "org_code": "2000",
                                "order_index": 2000,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 99,
                                "children": [],
                                "org_id": "jiangsujiefanglu",
                                "org_name": "江苏圆心医药有限公司解放路店",
                                "org_type": 6,
                                "org_code": "2100",
                                "order_index": 2100,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 100,
                                "children": [],
                                "org_id": "jingzhoubeijingluyaodian",
                                "org_name": "荆州圆心大药房有限公司北京路药店",
                                "org_type": 6,
                                "org_code": "2200",
                                "order_index": 2200,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 101,
                                "children": [],
                                "org_id": "yunnanyuanxinmiaoshou",
                                "org_name": "云南圆心妙手医药有限公司五华光华街诊所",
                                "org_type": 6,
                                "org_code": "2300",
                                "order_index": 2300,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 102,
                                "children": [],
                                "org_id": "gaugndonghengjintangyifen",
                                "org_name": "广东恒金堂医药连锁有限公司市一分店",
                                "org_type": 6,
                                "org_code": "2600",
                                "order_index": 2600,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 103,
                                "children": [],
                                "org_id": "guangdongduobaolufen",
                                "org_name": "广东恒金堂医药连锁有限公司多宝路分店",
                                "org_type": 6,
                                "org_code": "2700",
                                "order_index": 2700,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 104,
                                "children": [],
                                "org_id": "guangdonglihuanlufendian",
                                "org_name": "广东恒金堂医药连锁有限公司荔湾路分店",
                                "org_type": 6,
                                "org_code": "2800",
                                "order_index": 2800,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 105,
                                "children": [],
                                "org_id": "guangdongnandadao",
                                "org_name": "广东恒金堂医药连锁有限公司岭南大道北分店",
                                "org_type": 6,
                                "org_code": "2900",
                                "order_index": 2900,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 106,
                                "children": [],
                                "org_id": "jiangsulangrunyaoye",
                                "org_name": "江苏朗润药业有限公司",
                                "org_type": 6,
                                "org_code": "3000",
                                "order_index": 3000,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 107,
                                "children": [
                                    {
                                        "id": 108,
                                        "children": [],
                                        "org_id": "jiangsugaochunshuanggaolu",
                                        "org_name": "江苏圆心医药科技有限公司长乐路店.",
                                        "org_type": 6,
                                        "org_code": "3400",
                                        "order_index": 3400,
                                        "state": 1,
                                        "is_ds": 1
                                    }
                                ],
                                "org_id": "jiangsuyuanxinyaoye",
                                "org_name": "江苏圆心医药科技有限公司",
                                "org_type": 6,
                                "org_code": "3300",
                                "order_index": 3300,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 109,
                                "children": [
                                    {
                                        "id": 110,
                                        "children": [],
                                        "org_id": "anhuicipengludian",
                                        "org_name": "安徽圆心鑫兴大药房连锁有限公司宿松路一店",
                                        "org_type": 6,
                                        "org_code": "3600",
                                        "order_index": 3600,
                                        "state": 1,
                                        "is_ds": 1
                                    }
                                ],
                                "org_id": "anhuiyuanxinjiaxing",
                                "org_name": "安徽圆心鑫兴大药房连锁有限公司",
                                "org_type": 6,
                                "org_code": "3500",
                                "order_index": 3500,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 111,
                                "children": [
                                    {
                                        "id": 112,
                                        "children": [],
                                        "org_id": "henanyuanxinzhongyiyifuyuan",
                                        "org_name": "河南圆心医药科技有限公司中医一附院店",
                                        "org_type": 6,
                                        "org_code": "4600",
                                        "order_index": 4600,
                                        "state": 1,
                                        "is_ds": 1
                                    }
                                ],
                                "org_id": "henanyuanxinyiyaokeji",
                                "org_name": "河南圆心医药科技有限公司",
                                "org_type": 6,
                                "org_code": "4100",
                                "order_index": 4100,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 576,
                                "children": [],
                                "org_id": "hunanyuanxindayaofangyouxiangongsi",
                                "org_name": "湖南圆心大药房有限公司(电商旗舰店)",
                                "org_type": 6,
                                "org_code": "4700",
                                "order_index": 4700,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 577,
                                "children": [],
                                "org_id": "shandongyuanxindayaofangyouxiangongsi",
                                "org_name": "山东圆心大药房有限公司",
                                "org_type": 6,
                                "org_code": "4800",
                                "order_index": 4800,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 584,
                                "children": [],
                                "org_id": "chongxingxinjiatedayaofang",
                                "org_name": "重庆新加特大药房有限公司",
                                "org_type": 6,
                                "org_code": "4900",
                                "order_index": 4900,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 625,
                                "children": [],
                                "org_id": "4900",
                                "org_name": "广东圆心恒金堂医药连锁有限公司大坦沙分店",
                                "org_type": 6,
                                "org_code": "5000",
                                "order_index": 5000,
                                "state": 1,
                                "is_ds": 1
                            },
                            {
                                "id": 626,
                                "children": [],
                                "org_id": "5100",
                                "org_name": "武汉圆心大药房有限公司岱山分店",
                                "org_type": 6,
                                "org_code": "5100",
                                "order_index": 5100,
                                "state": 1,
                                "is_ds": 1
                            }
                        ],
                        "org_id": "aaaaaaaaaaaaaaaaaaaaaaa",
                        "org_name": "电商",
                        "org_type": 8,
                        "org_code": "0000001023",
                        "order_index": 1000,
                        "state": 1,
                        "is_ds": 1
                    }
                ],
                "org_id": "3f615c8f0dce11e99d340242ac110003",
                "org_name": "圆心科技",
                "org_type": null,
                "org_code": "0000000003",
                "order_index": 1,
                "state": 1,
                "is_ds": 0
            }
        ]

        return {
            columns,
            data,
            expandedKeys,
            rowSelection
        }
    },
}
</script>