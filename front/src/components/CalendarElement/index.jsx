//**日付1つ1つに対して見た目などを調整するコンポーネントです**/

import React from "react";

//style
import * as styles from "./style.css";
//dayjs
import dayjs from "dayjs";
//materialUI
import { Typography } from "@material-ui/core";

import {
  isSameDay,
  getMonth,
  isSameMonth,
  isFirstDay,
} from "../../services/calendar";
//components
import Schedule from "../Schedule";

const CalendarElement = ({
  day,
  month,
  schedules,
  openCurrentScheduleDialog,
}) => {
  const today = dayjs();
  //今日の日付を見つける
  const isToday = isSameDay(day, today);

  //今月以外の日付の色をグレーにする
  const currentMonth = getMonth(month);
  const isCurrentMonth = isSameMonth(day, currentMonth);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

  // 月の最初だけ月情報をつける
  const format = isFirstDay(day) ? "M月D日" : "D";

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        color={textColor}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday ? styles.today : ""}>
          {day.format(format)}
        </span>
      </Typography>
      <div className={styles.schedules}>
        {schedules.map((schedule) => (
          <Schedule
            key={schedule.id}
            schedule={schedule}
            openCurrentScheduleDialog={openCurrentScheduleDialog}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarElement;
