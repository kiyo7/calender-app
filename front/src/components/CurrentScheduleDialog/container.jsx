import { connect } from "react-redux";
//component
import AddScheduleDialog from "./presentation";

//action,effect
import { currentScheduleCloseDialog } from "../../redux/currentSchedule/actions";
import { asyncSchedulesDeleteItem } from "../../redux/schedules/effects";

const mapStateToProps = (state) => {
  return { schedule: state.currentSchedule };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //dialogを閉じます
    closeDialog: () => {
      dispatch(currentScheduleCloseDialog());
    },
    //deleteリクエストを発行し、dialogを閉じます
    deleteItem: (id) => {
      dispatch(asyncSchedulesDeleteItem(id));
      dispatch(currentScheduleCloseDialog());
    },
  };
};

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  deleteItem: () => {
    const { id } = stateProps.schedule.item;
    dispatchProps.deleteItem(id);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AddScheduleDialog);
