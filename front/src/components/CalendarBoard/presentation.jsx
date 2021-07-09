//**メインとなるカレンダーを作成し、表示するコンポーネントです**/

import React from "react";
//materialUI
import { GridList, Typography } from "@material-ui/core";
//style
import * as styles from "./style.css";
//components
import CalendarElement from "../CalendarElement";

const days = ["日", "月", "火", "水", "木", "金", "土"];

const CalendarBoard = ({
  calendar,
  month,
  openAddScheduleDialog,
  schedules,
  openCurrentScheduleDialog,
}) => {
  // console.log(schedules);
  // console.log(calendar);
  // //dayjsの配列
  // console.log(schedules);
  return (
    <div className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {days.map((day) => (
          <li key={day}>
            <Typography
              className={styles.days}
              color="textSecondary"
              align="center"
              variant="caption"
              component="div"
            >
              {day}
            </Typography>
          </li>
        ))}
        {/* dateはdayjsインスタンスで日付を1つずつ表示します */}
        {calendar.map(({ date, schedules }) => (
          <li
            key={date.toISOString()}
            onClick={() => openAddScheduleDialog(date)}
          >
            <CalendarElement
              day={date}
              month={month}
              schedules={schedules}
              openCurrentScheduleDialog={openCurrentScheduleDialog}
            />
          </li>
        ))}
      </GridList>
    </div>
  );
};

export default CalendarBoard;
