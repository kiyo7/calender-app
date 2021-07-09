//**追加された予定のタイトルを表示するコンポーネントです**/

import React from "react";
//style
import * as styles from "./style.css";

const Schedule = ({ schedule, openCurrentScheduleDialog }) => {
  return (
    <div
      className={styles.schedule}
      onClick={(e) => openCurrentScheduleDialog(schedule, e)}
    >
      {schedule.title}
    </div>
  );
};

export default Schedule;
