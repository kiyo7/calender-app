//**ヘッダー的ポジションのコンポーネントです**/

import React from "react";

//materialUI
import { DatePicker } from "@material-ui/pickers";
import {
  IconButton,
  Toolbar,
  Typography,
  withStyles,
  Tooltip,
} from "@material-ui/core";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";

const StyledToolbar = withStyles({ root: { padding: "0" } })(Toolbar);
const StyledTypography = withStyles({ root: { margin: "0 30px 0 10px" } })(
  Typography
  //Typographyにcssを追加している
);

const StyledDatePicker = withStyles({ root: { marginLeft: 30 } })(DatePicker);

const Navigation = ({ month, setNextMonth, setPreviousMonth, setMonth }) => {
  return (
    <StyledToolbar>
      <Toolbar>
        <Tooltip title="メニュー" placement="bottom">
          <IconButton>
            <DehazeIcon />
          </IconButton>
        </Tooltip>
        <img src="/images/calendar_icon.png" width="40" height="40" />
        <StyledTypography color="textSecondary" variant="h5" component="h1">
          Calendar
        </StyledTypography>
        <Tooltip title="前の月" placement="bottom">
          <IconButton size="small">
            <ArrowBackIos onClick={setPreviousMonth} />
          </IconButton>
        </Tooltip>
        <Tooltip title="次の月" placement="bottom">
          <IconButton size="small">
            <ArrowForwardIos onClick={setNextMonth} />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <Tooltip title="カレンダーを見る" placement="bottom">
        <StyledDatePicker
          value={month}
          onChange={setMonth}
          variant="inline"
          format="YYYY年 M月"
          animateYearScrolling
          disableToolbar
        />
      </Tooltip>
    </StyledToolbar>
  );
};

export default Navigation;
