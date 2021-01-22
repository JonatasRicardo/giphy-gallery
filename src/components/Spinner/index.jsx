
import React from 'react';
import { useTheme } from "react-jss";
import useStyles from "./spinner.styles";

const Spinner = () => {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
    <div className={classes.spinner}>
      <div className={classes.doubleBounce} />
      <div className={[classes.doubleBounce, classes.doubleBounce2]}  />
    </div>
    );
}

export default Spinner;
