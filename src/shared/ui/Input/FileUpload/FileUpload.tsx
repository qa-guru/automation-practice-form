import { useEffect, useState } from "react";
import { IFormInputProps } from "../Input.types";
import { Controller } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import Dropzone from "react-dropzone";
import { IconButton, Button, Box, Grid, Typography } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ClearIcon from "@mui/icons-material/Clear";
import { theme } from "../../../../theme";

type ExtendedFile = File & { reason?: string };

const acceptedImageTypes = ["image/jpg", "image/png", "image/svg", "image/gif"];
const maxFileSize = 3000000;

const InputFileUpload: React.FC<IFormInputProps> = ({
  control,
  name,
  setValue
}) => {
  const [fileValue, setFileValue] = useState<ExtendedFile[]>([]);
  const [invalidFiles, setInvalidFiles] = useState<ExtendedFile[]>([]);

  useEffect(() => {
    if (fileValue.length > 0) {
      const fileNames = fileValue.map((file) => file.name);
      if (setValue)
        setValue(name, fileNames);
    }
  }, [fileValue, name, setValue]);

  const handleFileDelete = (index: number, isInvalidFile: boolean) => {
    const files = isInvalidFile ? invalidFiles : fileValue;
    const newFiles = [...files];
    newFiles.splice(index, 1);
    if (isInvalidFile) {
      setInvalidFiles(newFiles);
    } else {
      setFileValue(newFiles);
    }
  };

  const handleChange = (acceptedFiles: File[]) => {
    const filteredFiles = acceptedFiles.filter((file) =>
      acceptedImageTypes.includes(file.type) && file.size <= maxFileSize
    );
    const invalidFiles = acceptedFiles.filter(
      (file) =>
        !acceptedImageTypes.includes(file.type) || file.size > maxFileSize
    ).map(file => ({
      ...file,
      reason: !acceptedImageTypes.includes(file.type)
        ? "Invalid extension"
        : "File is too large"
    })) as ExtendedFile[];

    setFileValue(prevFiles => [...prevFiles, ...filteredFiles]);
    setInvalidFiles(prevFiles => [...prevFiles, ...invalidFiles]);
  };

  return (
    <FormControl fullWidth>
      <Controller
        control={control}
        name={name}
        render={() => (
          <div>
            <Dropzone onDrop={(acceptedFiles) => handleChange(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <Grid container direction="column" {...getRootProps()}
                  sx={{
                    border: `1px dashed ${theme.palette.secondary.main}`,
                    padding: "30px",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box {...getInputProps()} />
                  <Button fullWidth disableTouchRipple
                    sx={{
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    <Grid container direction="column">
                      <Grid item>
                        <UploadFileIcon />
                      </Grid>
                      <Typography>
                        Click to upload{" "}
                        <Typography component={"span"} color={"black"}>
                          or drag and drop
                        </Typography>
                      </Typography>
                    </Grid>
                  </Button>
                  <Grid>
                    <Typography variant="caption" sx={{ alignSelf: "center" }}>
                      SVG, PNG, JPG OR GIF (MAX. 3MB)
                    </Typography>
                  </Grid>
                </Grid>
              )}
            </Dropzone>
            <Grid p={2}>
              {fileValue.length > 0 && (
                <Grid mt={2}>
                  {fileValue.map((file, index) => (
                    <Grid container wrap="nowrap" p={1} key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Grid item
                        sx={{
                          display: "flex",
                          alignItems: "center"
                        }}
                      >
                        <UploadFileIcon
                          sx={{
                            marginRight: "10px",
                            color: "primary.main"
                          }}
                        />
                        <Box>
                          <Typography>{file.name}</Typography>
                          <Typography variant="caption">
                            {`${(file.size / (1024 * 1024)).toFixed(2)} MB`}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item>
                        <IconButton onClick={() => handleFileDelete(index, false)}>
                          <ClearIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              )}
              {invalidFiles.length > 0 && (
                <Grid>
                  {invalidFiles.map((file, index) => (
                    <Grid container p={1} key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                      }}
                    >
                      <Grid item
                        sx={{
                          display: "flex",
                          alignItems: "center"
                        }}
                      >
                        <UploadFileIcon
                          sx={{
                            marginRight: "10px",
                            color: "error.main"
                          }}
                        />
                        <Box>
                          <Typography sx={{ color: "error.main" }}>
                            Upload failed
                          </Typography>
                          <Typography variant="caption" sx={{ color: "error.main" }}>
                            {file.reason}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item>
                        <IconButton onClick={() => handleFileDelete(index, true)}>
                          <ClearIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Grid>
          </div>
        )}
      />
    </FormControl>
  );
};

export default InputFileUpload;


