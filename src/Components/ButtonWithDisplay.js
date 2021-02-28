import { Button, Grid, Typography } from "@material-ui/core";

export default function ButtonWithDisplay() {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <Grid
        item
        xs={12}
      >
        <Typography
          variant="h6"
          color="primary"
        >
          TODO number
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
      >
        <Button
          variant="contained"
          color="secondary"
        >
          Increment Counter
        </Button>
      </Grid>
    </Grid>
  );
}
