import React from "react";
import ReactDOM from "react-dom";

//store関係
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import rootReducer from "./redux/rootReducer";

//コンポーネント
import Navigation from "./components/Navigation/container";
import CalendarBoard from "./components/CalendarBoard/container";
import AddScheduleDialog from "./components/AddScheduleDialog/container";
import CurrentScheduleDialog from "./components/CurrentScheduleDialog/container";

//dayjs関係
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

const store = createStore(
  rootReducer,
  compose(
    process.env.NODE_ENV === "development" && window.devToolsExtension
      ? window.devToolsExtension()
      : (f) => f
  )
);

const App = () => (
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalendarBoard />
      <AddScheduleDialog />
      <CurrentScheduleDialog />
    </MuiPickersUtilsProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
