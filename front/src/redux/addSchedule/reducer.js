import dayjs from "dayjs";

import {
  ADD_SCHEDULE_SET_VALUE,
  ADD_SCHEDULE_OPEN_DIALOG,
  ADD_SCHEDULE_CLOSE_DIALOG,
} from "./actions";

//initはstoreのstate.addScheduleで取得可能
const init = {
  //formのデータ
  form: {
    title: "",
    description: "",
    date: dayjs(),
    location: "",
  },
  //dialogが開いているか?
  isDialogOpen: false,
};

const addScheduleReducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_SCHEDULE_SET_VALUE:
      //formの中身をpayloadで更新してるよ
      return { ...state, form: { ...state.form, ...payload } };
    case ADD_SCHEDULE_OPEN_DIALOG:
      return { ...state, isDialogOpen: true };
    case ADD_SCHEDULE_CLOSE_DIALOG:
      //dialog閉じた時はformも初期化したいからinitを入れてる
      return init;
    default:
      return state;
  }
};

export default addScheduleReducer;
