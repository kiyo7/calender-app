export const SCHEDULES_ADD_ITEM = "SCHEDULES_ADD_ITEM";
export const SCHEDULES_FETCH_ITEM = "SCHEDULES_FETCH_ITEM";
export const SCHEDULES_DELETE_ITEM = "SCHEDULES_DELETE_ITEM";
export const SCHEDULES_SET_LOADING = "SCHEDULES_SET_LOADING";
export const SCHEDULES_ASYNC_FAILURE = "SCHEDULES_ASYNC_FAILURE";
export const SCHEDULES_RESET_ERROR = "SCHEDULES_RESET_ERROR";

//schedulesAddItemのpayloadにはdialogから作成したformの値を渡す
//↓こんなの
//form: {
//   title: "",
//   description: "",
//   date: dayjs(),
//   location: "",
// },
export const schedulesAddItem = (payload) => {
  return { type: SCHEDULES_ADD_ITEM, payload };
};

export const schedulesFetchItem = (payload) => {
  return { type: SCHEDULES_FETCH_ITEM, payload };
};

//削除したscheduleを排除した配列をpayloadとして渡している
export const schedulesDeleteItem = (payload) => {
  return {
    type: SCHEDULES_DELETE_ITEM,
    payload,
  };
};

export const schedulesSetLoading = () => {
  return {
    type: SCHEDULES_SET_LOADING,
  };
};

export const schedulesAsyncFailure = (error) => {
  return {
    type: SCHEDULES_ASYNC_FAILURE,
    error,
  };
};

export const schedulesResetError = () => {
  return { type: SCHEDULES_RESET_ERROR };
};
