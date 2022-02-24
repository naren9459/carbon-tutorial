import "date-fns";
import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker
} from "material-ui-pickers";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const styles = {
  grid: {
    width: "60%"
  }
};

class MaterialUIPickers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: null,
      checkedB: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(date) {
    this.setState({ selectedDate: date });
  }

  handleChange(event) {
    this.setState({ checkedB: event.target.checked });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedB}
              onChange={this.handleChange}
              value="checkedB"
              color="primary"
            />
          }
          label="Primary"
        />
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Grid container className={classes.grid} justify="space-around">
            <DatePicker
              keyboard
              placeholder="MM/DD/YYYY"
              format={"MM/DD/YYYY"}
              // handle clearing outside => pass plain array if you are not controlling value outside
              mask={value =>
                value
                  ? [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]
                  : []
              }
              value={this.state.selectedDate}
              onChange={this.handleDateChange}
              disableOpenOnEnter
              animateYearScrolling={false}
              autoOk={true}
              clearable
              onInputChange={e => console.log("Keyboard:", e.target.value)}
            />
          </Grid>
          <p>{this.state.selectedDate === null ? "Its null" : "Not Null"}</p>
          <p>{JSON.stringify(this.state.selectedDate)}</p>
        </MuiPickersUtilsProvider>
      </div>
    );
  }
}

MaterialUIPickers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MaterialUIPickers);
