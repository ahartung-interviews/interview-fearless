import { Button, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { baseUrl, endpoints, keys } from "../Config/api";

export async function fetchCounterData(setResult) {
    await axios
        .get(`${baseUrl}/${endpoints.default}/${keys.default}`)
        .then(response => response.data)
        .then(({ value }) => setResult(value))
        .catch(_ => _);
}

export default function ButtonWithDisplay() {
  const [result, setResult] = React.useState(null);

  useEffect(() => {
    fetchCounterData(setResult);
  }, []);

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
          {result}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={() => fetchCounterData(setResult)}
        >
          Increment Counter
        </Button>
      </Grid>
    </Grid>
  );
}
