import React, { ReactElement } from "react";
import { Container, Button, Typography } from "@mui/material";

const AppBody = (): ReactElement => {
  return (
    <Container>
      <Typography>Some text in ROBOTO</Typography>
      <Button variant="contained">button</Button>
    </Container>
  );
};

export default AppBody;
