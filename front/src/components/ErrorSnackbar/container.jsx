import { connect } from "react-redux";
import ErrorSnackbar from "./presentation";
import { schedulesResetError } from "../../redux/schedules/actions";

const mapStateToProps = (state) => {
  return { error: state.schedules.error };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //エラー表示が消された時点でエラーは破棄しても問題ないためリセットしています
    handleClose: () => {
      dispatch(schedulesResetError());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorSnackbar);
