import React, { useEffect, useState } from 'react';
import { Modal, Box, Grid, Icon, Typography, Button } from "@mui/material";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import { ReactComponent as LogoIconDark } from "../../assets/logoDark.svg";
import ClearIcon from "@mui/icons-material/Clear";

const styles = {
    container: {
        outline: "none",
        "&:hover": {
            outline: "none",
        },
        width: "390px",
        height: "251px"
    },
    logoContainer: {
        flexGrow: 1
    },
    logoBox: {
        textAlign: "center"
    },
    logoIcon: {
        height: "38px",
        width: "250px",
    },
    closeButton: {
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "primary.main",
    },
    contentBox: {
        backgroundColor: "primaryDark.contrastText",
        textAlign: "center",
        borderRadius: "12px",
        padding: "40px 30px 20px"
    },
    darkLogoIcon: {
        height: "30px",
        width: "166px",
        margin: "20px 0",
    },
    button: {
        color: "primaryDark.contrastText"
    }
};

const ModalComponent = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    const handleLinkClick = () => {
        setOpen(false);
        window.open("https://qa.guru/", "_blank");
    };

    return (
        <Modal
            open={open}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Box sx={styles.container}>
                <Grid container display="flex" alignItems="center" mb={3}>
                    <Grid item sx={styles.logoContainer}>
                        <Box sx={styles.logoBox}>
                            <Icon component={LogoIcon} sx={styles.logoIcon} />
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box sx={styles.closeButton} onClick={handleClose}>
                            <ClearIcon />
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={styles.contentBox}>
                    <Typography mb={1} fontSize="24px">
                        Записывайтесь<br />
                        на обучение в
                    </Typography>
                    <Icon component={LogoIconDark} sx={styles.darkLogoIcon} />
                    <Box>
                        <Button
                            variant="contained"
                            onClick={handleLinkClick}
                            sx={styles.button}
                        >
                            Записаться
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};

export default ModalComponent;
