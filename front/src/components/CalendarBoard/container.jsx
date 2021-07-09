import { connect } from "react-redux";
//function
import { createCalendar } from "../../services/calendar";
import { setSchedules } from "../../services/schedule";
//presentation
import CalendarBoard from "./presentation";

//action
import {
  addScheduleOpenDialog,
  addScheduleSetValue,
} from "../../redux/addSchedule/actions";
import {
  currentScheduleSetItem,
  currentScheduleOpenDialog,
} from "../../redux/currentSchedule/actions";

const mapStateToProps = (state) => {
  return { calendar: state.calendar, schedules: state.schedules };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //ダイアログを開き、日付の欄に今日の日付が入ります
    openAddScheduleDialog: (day) => {
      // console.log(day);
      dispatch(addScheduleOpenDialog());
      dispatch(addScheduleSetValue({ date: day }));
    },
    //予定の詳細を表示する関数です
    openCurrentScheduleDialog: (schedule, e) => {
      // 他のイベントが発火するのをキャンセルします
      e.stopPropagation();

      dispatch(currentScheduleSetItem(schedule));
      dispatch(currentScheduleOpenDialog());
    },
  };
};

//↓よくわかりませんconsole.logで見てください
const mergeProps = (stateProps, dispatchProps) => {
  const {
    calendar: month,
    schedules: { items: schedules },
  } = stateProps;
  const calendar = setSchedules(createCalendar(month), schedules);
  // console.log(stateProps);
  // console.log(dispatchProps);
  // console.log(month);
  // console.log(calendar);
  return {
    ...stateProps,
    ...dispatchProps,
    month,
    calendar,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CalendarBoard);
