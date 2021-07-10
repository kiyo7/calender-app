import AddScheduleDialog from "./presentation";

import { connect } from "react-redux";

//action, effect
import {
  addScheduleCloseDialog,
  addScheduleSetValue,
  addScheduleStartEdit,
} from "../../redux/addSchedule/actions";
import { asyncSchedulesAddItem } from "../../redux/schedules/effects";

import { isCloseDialog } from "../../services/schedule";

const mapStateToProps = (state) => {
  return { schedule: state.addSchedule };
};

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch);

  return {
    //dialogを閉じます
    closeDialog: () => {
      dispatch(addScheduleCloseDialog());
    },
    //scheduleの入力欄に値をセットします
    setSchedule: (value) => {
      dispatch(addScheduleSetValue(value));
    },
    //scheduleを保存し、dialogを閉じます
    saveSchedule: (schedule) => {
      dispatch(asyncSchedulesAddItem(schedule));
      dispatch(addScheduleCloseDialog());
    },
    setIsEditStart: () => {
      dispatch(addScheduleStartEdit());
    },
  };
};

const mergeProps = (stateProps, dispatchProps) => {
  const {
    schedule: { form: schedule },
  } = stateProps;
  const { saveSchedule, closeDialog } = dispatchProps;
  return {
    ...stateProps,
    ...dispatchProps,

    //saveScheduleをカスタムしています
    saveSchedule: () => {
      saveSchedule(schedule);
    },
    closeDialog: () => {
      if (isCloseDialog(schedule)) {
        closeDialog();
      }
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AddScheduleDialog);
