import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { Typography, Grid } from "@mui/material";
import { IFormResult } from "./FormResult.types";

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
      <Grid container key={`${key}-${index}`} mt={2} wrap="nowrap" columnSpacing={14}>
        <Grid item xs={2}>
          <Typography color="primary.main">
            {key}
          </Typography>
        </Grid>
        <Grid item xs={10}>
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
    <Grid m={3}>
      <Typography mb={4} variant="h4" color="primaryDark.contrastText">
        Thank you for submitting the form
      </Typography>
      {generateDataPairs(data, linesShown)}
    </Grid>
  );
};

export default AutoTestsResult;
