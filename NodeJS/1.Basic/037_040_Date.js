console.log('====시간생성====');
//현재 날짜 시근 생성
const today = new Date();
//2017년 9월 2일 0시 0분 0초 //9-1 : 월을 0~11로 카운트함
const date1 = new Date(2017, 9 - 1, 2);
const date2 = new Date(2017, 8, 3);
//시, 분, 초까지 지정 가능
const date3 = new Date(2017, 8, 3, 18);
const date4 = new Date(2017, 8, 3, 18, 20);
const date5 = new Date(2017, 8, 3, 18, 20, 30);

console.log(today.toLocaleString());
console.log(date1.toLocaleString());
console.log(date2.toLocaleString());
console.log(date3.toLocaleString());
console.log(date4.toLocaleString());
console.log(date5.toLocaleString());

console.log('====시간출력====');
//2017.08.03 18:20:30
const date = new Date(2017, 8, 3, 18, 20, 30);
//날짜 출력
console.log('date : %s', date.toLocaleDateString());
//날짜출력
console.log('LocaleDateString : %s', date.toLocaleDateString());
//시간출력
console.log('LocateTimeString : %s', date.toLocaleTimeString());
//년
console.log('year : %s', date.getFullYear());
//월 -> +1 해야한다 (0월부터 시작)
console.log('month :%s', date.getMonth() + 1);
//일
console.log('date : %s', date.getDate());
//시
console.log('hours : %s', date.getHours());
//분
console.log('minutes : %s', date.getMinutes());
//초
console.log('second : %s', date.getSeconds());

console.log('====yyyy-MM-dds 시간===');
//date를 직접 지정할 함수 생성
const getYymmdd = (date) => {
    //년도 지정
    const yyyy = date.getFullYear();
    //월 지정 : 01~09월을 위해 한자리 숫자의 경우 앞에 0을 붙인다 
    //0월~11월까지 있기 때문에 +1을 한다
    const mm = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : (date.getMonth() + 1);
    //일 지정 : 01~09일을 위해 한자리 숫자의 경우 앞에 0을 붙인다 
    const dd = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    //형식 지정
    return `${yyyy}-${mm}-${dd}`;
};

const yymmdd = getYymmdd(new Date());
const yymmdd170909 = getYymmdd(new Date(2017, 11 - 1, 9));
console.log(yymmdd);
console.log(yymmdd170909);

console.log('==== timestamp ====')
//날짜 
const date6 = new Date();
const dateToTimestamp = date6.getTime();
//timestamp : 2019/10/05 11 : 16 : 51 :107 초
const timestampToDate = new Date(1570274211107);
//timestamp 1 -> 최초날짜 : 1970/01/01 0:0:0:001 
const timestampToInit = new Date(1);
const timestampInit = new Date(0000000000001);

console.log('Date : ', date6);
console.log('Date to timestamp : ', dateToTimestamp);
console.log('Timestamp to date : ', timestampToDate);
console.log('Initial timestamp : ', timestampToInit);
console.log('timestampInit : ', timestampInit);