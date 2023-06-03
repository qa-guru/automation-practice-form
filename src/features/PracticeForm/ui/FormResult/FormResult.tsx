import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { Typography, Grid } from "@mui/material";
import { IFormResult } from "./FormResult.types";
import { theme } from "../../../../theme";

export function generateDataPairs(data: FieldValues, linesShown: number) {

  function formatValue(key: string, value: unknown): string {
    switch (true) {
        case Array.isArray(value):
            return (value as unknown[]).join(", ");
        case key === "dateOfBirth":
            return (value as Date)?.toLocaleString();
        case key === "file":
            return JSON.stringify((value as File)?.name);
        default:
            return String(value);
    }
}
  const arrayData: [string, unknown][] = Object.entries(data);

  return arrayData.map(([key, value], index) => {
    return index <= linesShown && value != "" && value != null ? (
      <Grid container key={`${key}-${index}`} wrap="nowrap" columnSpacing={2}>
        <Grid item xl={2} lg={3} md={3} sm={4} xs={4} p={1.5}
              sx={{
                  border: `0.5px dotted ${theme.palette.primary.main}`
              }}>
          <Typography color="primary.main">
            {key}
          </Typography>
        </Grid>
        <Grid item xl={10} lg={7} md={7} sm={8} xs={8} p={1.5}
              sx={{
                  border: `0.5px dotted ${theme.palette.primary.main}`
              }}>
          <Typography color="primaryDark.contrastText">
            {formatValue(key, value)}
          </Typography>
        </Grid>
      </Grid>
    ) : null;
  });
}

const AutoTestsResult: React.FC<IFormResult> = ({ data }) => {
  const [linesShown, setLinesShown] = useState(0);

  useEffect(() => {
    if (linesShown < Object.keys(data).length) {
      const timeoutId = setTimeout(() => setLinesShown(linesShown + 1), 1);
      return () => clearTimeout(timeoutId);
    }
  }, [linesShown, data]);

  return (
    <Grid m={4}>
      <Typography mb={4} variant="h4" color="primaryDark.contrastText">
        Thank you for submitting the form
      </Typography>
        {generateDataPairs(data, linesShown)}
    </Grid>
  );
};

export default AutoTestsResult;