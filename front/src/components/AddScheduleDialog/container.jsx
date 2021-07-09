import AddScheduleDialog from "./presentation";

import { connect } from "react-redux";

//action
import {
  addScheduleCloseDialog,
  addScheduleSetValue,
} from "../../redux/addSchedule/actions";
import { schedulesAddItem } from "../../redux/schedules/actions";

const mapStateToProps = (state) => {
  return { schedule: state.addSchedule };
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);

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
      dispatch(schedulesAddItem(schedule));
      dispatch(addScheduleCloseDialog());
    },
  };
};

const mergeProps = (stateProps, dispatchProps) => {
  return {
    ...stateProps,
    ...dispatchProps,

    //saveScheduleをカスタムしています
    saveSchedule: () => {
      const {
        schedule: { form: schedule },
      } = stateProps;
      dispatchProps.saveSchedule(schedule);
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AddScheduleDialog);
