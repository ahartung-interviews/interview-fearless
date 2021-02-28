import { Button, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { baseUrl, endpoints, keys } from "../Config/api";
import GridItem from "./GridItem";

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
      <GridItem>
        <Typography
          variant="h6"
          color="primary"
        >
          {result}
        </Typography>
      </GridItem>
      <GridItem>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => fetchCounterData(setResult)}
        >
          Increment Counter
        </Button>
      </GridItem>
    </Grid>
  );
}
