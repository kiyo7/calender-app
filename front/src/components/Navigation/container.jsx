//components
import Navigation from "./presentation";
//function
import { connect } from "react-redux";
//actions, effects
import {
  getNextMonth,
  getPreviousMonth,
  getMonth,
  formatMonth,
} from "../../services/calendar";
import { calendarSetMonth } from "../../redux/calendar/actions";
import { asyncSchedulesFetchItem } from "../../redux/schedules/effects";

const mapStateToProps = (state) => {
  return {
    calendar: state.calendar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //月と日にちを取得します
    setMonth: (month) => {
      dispatch(calendarSetMonth(month));
    },
    fetchItem: (month) => {
      dispatch(asyncSchedulesFetchItem(month));
    },
  };
};

const mergeProps = (stateProps, dispatchProps) => {
  return {
    //reduxのstateをdayjsインスタンスに変換
    month: getMonth(stateProps.calendar),
    setNextMonth: () => {
      const nextMonth = getNextMonth(stateProps.calendar);
      dispatchProps.setMonth(nextMonth);
      dispatchProps.fetchItem(nextMonth);
    },
    setPreviousMonth: () => {
      const previousMonth = getPreviousMonth(stateProps.calendar);
      dispatchProps.setMonth(previousMonth);
      dispatchProps.fetchItem(previousMonth);
    },

    setMonth: (dayObj) => {
      //dayjsインスタンスをreduxのstate（フォーマットして）返す
      const month = formatMonth(dayObj);
      //monthの中身は{month: 7, year: 2021}のような値
      dispatchProps.setMonth(month);
      dispatchProps.fetchItem(month);
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Navigation);
