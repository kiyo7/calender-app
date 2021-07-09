//カレンダーに関する関数をまとめています
import dayjs from "dayjs";

//カレンダーを作成する関数
export const createCalendar = (month) => {
  // console.log(month);
  //今月の最初の日を追加
  const firstDay = getMonth(month); //今月の最初の日を追加

  const firstDayIndex = firstDay.day(); //最初の日の曜日のindexを取得

  return Array(35)
    .fill(0)
    .map((num, i) => {
      const diffFromFirstDay = i - firstDayIndex;
      const day = firstDay.add(diffFromFirstDay, "day");

      return day;
    });
};

export const getMonth = ({ year, month }) => {
  // console.log(year);
  // console.log(month);
  return dayjs(`${year}-${month}`);
};

//同じ日か判定
export const isSameDay = (day1, day2) => {
  const format = "YYYYMMDD";
  return day1.format(format) === day2.format(format);
};

//同じ月か判定
export const isSameMonth = (month1, month2) => {
  const format = "YYYYMM";
  return month1.format(format) === month2.format(format);
};

//1日か判定
export const isFirstDay = (day) => day.date() === 1;

export const formatMonth = (day) => ({
  month: day.month() + 1,
  year: day.year(),
});

export const getNextMonth = (month) => {
  const day = getMonth(month).add(1, "month");
  return formatMonth(day);
};

export const getPreviousMonth = (month) => {
  const day = getMonth(month).add(-1, "month");
  return formatMonth(day);
};
