import { useState } from "react";
import { Box, Grid } from "@mui/material";
import FormMain from "../features/PracticeForm/model/FormMain/FormMain";
import FormResult from "../features/PracticeForm/ui/FormResult/FormResult";
import ContainerLeft from "../shared/ui/Containers/ContainerLeft/ContainerLeft";
import ContainerRight from "../shared/ui/Containers/ContainerRight/ContainerRight";
import { IFormPracticeInput } from "../features/PracticeForm/model/FormMain/FormMain.types";

const PracticeForm: React.FC = () => {
  const [data, setData] = useState<IFormPracticeInput>();

  return (
    <Grid container>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <ContainerLeft>
          <FormMain setData={setData} />
        </ContainerLeft>
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}
        sx={{
          backgroundColor: "primaryDark.main"
        }}>
        <ContainerRight>
          <Box>{data && <FormResult data={data} />}</Box>
        </ContainerRight>
      </Grid>
    </Grid>
  );
};

export default PracticeForm;
