import React from "react";
import { Box, Icon } from "@mui/material";
import { ReactComponent as LogoIcon } from "../assets/logo.svg"

const Footer: React.FC = () => {
    return (
        <Box
            sx={{
                backgroundColor: "secondaryDark.main",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1,
                height: "96px",
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0
            }}
        >
            <Icon
                component={LogoIcon}
                sx={{
                    height: "30px",
                    width: "165px",
                }}
            />
        </Box>
    );
};

export default Footer;
