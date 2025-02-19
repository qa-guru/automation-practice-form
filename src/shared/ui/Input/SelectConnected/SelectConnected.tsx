import React, { ChangeEvent, useEffect, useState } from "react";
import {
    FormControl,
    Select,
    MenuItem,
    SelectChangeEvent,
    InputLabel,
    Stack,
    Box
} from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { IFormInputProps } from "../Input.types";
import { Controller } from "react-hook-form";
import "./SelectConnected.css";

interface Option {
    value: string;
    label: string;
    children?: Option[];
}

const InputSelectConnected: React.FC<IFormInputProps> = ({
    name,
    setValue,
    content,
    control,
}) => {
    const [selectedState, setSelectedState] = useState<string>("");
    const [selectedCity, setSelectedCity] = useState<string>("");
    const [isCityDisabled, setIsCityDisabled] = useState<boolean>(true);

    function convertLocationSchema(): Option[] {
        return (content || []).map((option) => {
            if (typeof option === "string") {
                return {
                    value: option,
                    label: option,
                };
            }
            return {
                value: option.state,
                label: option.state,
                children: option.cities.map((city) => ({
                    value: city,
                    label: city,
                })),
            };
        });
    }

    useEffect(() => {
        if (selectedState && selectedCity && setValue) {
            setValue(name, `${selectedState}, ${selectedCity}`);
        }
    }, [selectedState, selectedCity, setValue]);

    const handleStateChange = (event: SelectChangeEvent<string>) => {
        setSelectedState(event.target.value);
        setIsCityDisabled(false);
    };

    const handleCityChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCity(event.target.value);
    };

    const renderStateOptions = () =>
        convertLocationSchema().map((option: Option) => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
        ));

    const renderCityOptions = () =>
        convertLocationSchema()
            .find((option: Option) => option.value === selectedState)
            ?.children?.map((option: Option) => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        ));

    return (
        <Box className="box-container">
            <Controller
                control={control}
                name={name}
                render={() => (
                    <Stack direction="row" spacing={2}>
                        <FormControl fullWidth>
                            <InputLabel>State</InputLabel>
                            <Select
                                value={selectedState}
                                onChange={handleStateChange}
                                inputProps={{ "data-testid": `${name}` }}
                            >
                                <MenuItem value="" />
                                {renderStateOptions()}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <label
                                htmlFor="city-select"
                                className={`city-label ${selectedCity ? "active" : ""}`}
                            >
                                City
                            </label>
                            <select
                                id="city-select"
                                className="city-select"
                                data-testid={name}
                                value={selectedCity}
                                onChange={handleCityChange}
                                disabled={isCityDisabled}
                            >
                                <option />
                                {renderCityOptions()}
                            </select>
                            <ArrowDropDown className="arrow-icon" />
                        </FormControl>
                    </Stack>
                )}
            />
        </Box>
    );
};

export default InputSelectConnected;