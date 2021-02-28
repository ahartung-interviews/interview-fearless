import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  gridItem: {
    textAlign: "center"
  }
});

export default function GridItem({ children }) {
  const classes = useStyles();

  return (
    <Grid
      item
      xs={12}
      className={classes.gridItem}
    >
      {children}
    </Grid>
  );
}