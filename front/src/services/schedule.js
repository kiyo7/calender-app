//スケジュール関係の関数をまとめています

import dayjs from "dayjs";

import { isSameDay } from "./calendar";

export const setSchedules = (calendar, schedules) => {
  // calendarは35個の日付情報
  // console.log(calendar);
  // schedulesは各月のスケジュールを配列にしたもの
  // console.log(schedules);
  return calendar.map((c) => ({
    date: c,
    schedules: schedules.filter((e) => isSameDay(e.date, c)),
  }));
};

//apiから取得したデータをdayjsインスタンスに変換してます
export const formatSchedule = (schedule) => ({
  ...schedule,
  date: dayjs(schedule.date),
});

export const isCloseDialog = (schedule) => {
  const message = "注意❗️保存されていない変更を破棄しますか？";
  //true（予定が空）なら何もしません
  return isScheduleEmpty(schedule) || window.confirm(message);
};

//予定が空かどうかを確認します
const isScheduleEmpty = (schedule) =>
  !schedule.title && !schedule.description && !schedule.location;
