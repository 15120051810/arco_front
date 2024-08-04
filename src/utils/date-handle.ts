import dayjs from "dayjs";
import isoWeek from 'dayjs/plugin/isoWeek';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';

dayjs.extend(isoWeek);
dayjs.extend(quarterOfYear);


// 返回当前月往前推几个月
function getIndexMonth(m: number): string {
    return dayjs().subtract(m, 'month').format('YYYY-MM');
}


// 往前推几周，返回周一日期

function getIndexWeek(n: number): string {
    return dayjs().subtract(n, 'week').day(1).format('YYYY-MM-DD');
}


// 获取本月开始时间与结束日期
function getThisMonth() {
    return [
        dayjs().startOf('month').format('YYYY-MM-DD'),
        dayjs().format('YYYY-MM-DD')
    ]
}


// 获取上月 开始时间与结束日期
function getLastMonth() {
    return [
        dayjs().startOf('month').subtract(1, 'month').format('YYYY-MM-DD'),
        dayjs().endOf('month').subtract(1, 'month').format('YYYY-MM-DD')
    ]
}

// 获取本周 开始时间与结束日期
function getThisWeek() {
    return [
        dayjs().startOf('isoWeek').format('YYYY-MM-DD'),
        dayjs().format('YYYY-MM-DD')
    ]
}


// 获取上周 开始时间与结束日期
function getLastWeek() {
    return [
        dayjs().startOf('isoWeek').subtract(1,'week').format('YYYY-MM-DD'), // 如果传递 week开始日期就从周日开始了
        dayjs().endOf('isoWeek').subtract(1,'week').format('YYYY-MM-DD'),
    ]
}
// 获取本年
function getThisYear() {
    return [
        dayjs().startOf('year').format('YYYY-MM-DD'),
        dayjs().format('YYYY-MM-DD')
    ]
}

// 获取前日
function getBeforeYesterday() {
    return [
        dayjs().subtract(2, 'day').format('YYYY-MM-DD'),
        dayjs().subtract(2, 'day').format('YYYY-MM-DD')
    ]
}

// 获取昨日
function getYesterday() {

    return [
        dayjs().subtract(1, 'day').format('YYYY-MM-DD'),
        dayjs().subtract(1, 'day').format('YYYY-MM-DD')
    ]
}

// 获取当前季度
function getThisQuarter() {
    return [
        dayjs().startOf('quarter').format('YYYY-MM-DD'),
        dayjs().endOf('quarter').format('YYYY-MM-DD')
    ]
}


const RadioDict = {
    'this_quarter': getThisQuarter,
    'this_month': getThisMonth,
    'last_month': getLastMonth,
    'this_week': getThisWeek,
    'last_week':getLastWeek,
    'this_year': getThisYear,
    'yesterday': getYesterday,
    'before_yesterday':getBeforeYesterday,
}

export {
    getThisQuarter,
    getIndexMonth,
    getIndexWeek,
    getThisMonth,
    getLastMonth,
    getThisWeek,
    getLastWeek,
    getThisYear,
    RadioDict
};