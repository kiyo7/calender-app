//スケジュール関係の関数をまとめています

import { isSameDay } from "./calendar";

export const setSchedules = (calendar, schedules) => {
  // calendarは35個の日付情報
  console.log(calendar);
  // schedulesは各月のスケジュールを配列にしたもの
  console.log(schedules);
  return calendar.map((c) => ({
    date: c,
    schedules: schedules.filter((e) => isSameDay(e.date, c)),
  }));
};
