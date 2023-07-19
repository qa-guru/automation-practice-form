import React, { useEffect, useState } from 'react';
import { Modal, Box, Icon, Typography, Button } from "@mui/material";
import { ReactComponent as LogoIconDark } from "../../assets/logoDark.svg";
import ClearIcon from "@mui/icons-material/Clear";

const styles = {
    modal: {
        display: 'flex',
        position: "fixed",
        bottom: "100px",
        alignItems: 'center',
        justifyContent: 'center',
        margin: {xs: "25px"}
    },
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
        position: "relative",
        top: "20px",
        left: "20px",
        display: "flex",
        marginLeft: "auto",
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
        margin: "5px 0",
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
        <Modal sx={styles.modal} open={open} >
            <Box sx={styles.container}>
                <Box sx={styles.closeButton} onClick={handleClose}>
                    <ClearIcon />
                </Box>
                <Box sx={styles.contentBox}>
                    <Icon component={LogoIconDark} sx={styles.darkLogoIcon} />
                    <Typography mb={3} fontSize="24px">
                        Записывайтесь на <br />
                        обучение в QA GURU
                    </Typography>
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
