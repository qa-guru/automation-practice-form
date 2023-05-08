import { Grid, Box } from "@mui/material"
import { ContainerProps } from "../Container.types";

const ContainerLeft = ({ children }: ContainerProps) => {
  return (
    <Grid>
      <Box>{children}</Box>
    </Grid>
  );
};

export default ContainerLeft;
