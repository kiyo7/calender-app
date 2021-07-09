import { connect } from "react-redux";
import AddScheduleDialog from "./presentation";

import { currentScheduleCloseDialog } from "../../redux/currentSchedule/actions";

const mapStateToProps = (state) => {
  return { schedule: state.currentSchedule };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //dialogを閉じます
    closeDialog: () => {
      dispatch(currentScheduleCloseDialog());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddScheduleDialog);
