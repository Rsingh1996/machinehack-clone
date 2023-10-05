import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
  Divider,
} from "@mui/material";

import styled from "@emotion/styled";

const ButtonBox = styled(Box)(({ theme }) => ({
  ml: "10px",
  mr: "10px",
  background: "#263559",
  borderRadius: "5px",
  padding: 13,
}));

const StylesDivider = styled(Divider)(({ theme }) => ({
  flexGrow: "1",
  marginRight: 8,
  marginLeft: 8,
  height: "1px",
  width: { xs: "auto", sm: "auto", md: "20%" },
  backgroundColor: "#b5c0d3",
  border: ".5px",
}));

const LoginModal = ({ open, onClose }) => {
  const [loginMethod, setLoginMethod] = useState(null);

  const handleLogin = () => {
    if (loginMethod === "email") {
    } else if (loginMethod === "gmail") {
    } else if (loginMethod === "linkedin") {
    }

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Box sx={{ backgroundColor: "#1d2542" }}>
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: 440 },
            bottom: { xs: 0 },
            left: { xs: 0 },
            position: { xs: "fixed", sm: "relative", md: "relative" },
            pl: { xs: 2, sm: 2, m: 3 },
            pr: { xs: 2, sm: 2, m: 3 },
            backgroundColor: "#1d2542",
            borderTopLeftRadius: { xs: 15, sm: 10, md: 10 },
            borderTopRightRadius: { xs: 15, sm: 10, md: 15 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Divider
              sx={{
                flexGrow: 0.1,
                ml: "auto",
                mr: "auto",
                mt: "10px",
                mb: "10px",
                backgroundColor: "#d9d9d9",
                height: "3px",
                width: "60px",
                borderRadius: "50px",
              }}
            />
          </Box>
          <DialogTitle sx={{ color: "white", pl: 0 }}>
            Login to your accocount
          </DialogTitle>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#b5c0d3",
            }}
          >
            <Typography>Continue with</Typography>
            <Divider
              sx={{
                flexGrow: 1,
                ml: 1,
                height: "1px",
                backgroundColor: "#b5c0d3",
              }}
            />
          </Box>
          <DialogContent>
            <Box
              sx={{
                mt: 3,
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <ButtonBox>
                <Button onClick={() => setLoginMethod("email")}>
                  <img
                    src="https://machinehack.com/static/media/mail.835d81bc.svg"
                    className="email"
                  />
                </Button>
              </ButtonBox>
              <ButtonBox>
                <Button onClick={() => setLoginMethod("gmail")}>
                  <img
                    src="https://machinehack.com/static/media/Google.c403bd93.svg"
                    alt="Gmail"
                  />
                </Button>
              </ButtonBox>
              <ButtonBox>
                <Button onClick={() => setLoginMethod("linkedin")}>
                  <img src="https://machinehack.com/static/media/Linkedin.7508c2c4.svg" />
                </Button>
              </ButtonBox>
            </Box>
          </DialogContent>
          <DialogActions sx={{ display: "block" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "white",
                color: "#b5c0d3",
              }}
            >
              <StylesDivider />
              <Typography>Or don’t have an account?</Typography>
              <StylesDivider />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ m: "auto", p: 3, width: "100%" }}>
                <Button
                  sx={{
                    background: "#b5c0d3",
                    color: "#1d2542",
                    width: "100%",
                    fontWeight: "700",
                    height: "50px",
                    borderRadius: 10,
                  }}
                  onClick={handleLogin}
                  variant="contained"
                  color="primary"
                >
                  Register Now
                </Button>
              </Box>
            </Box>
          </DialogActions>
        </Box>
      </Box>
    </Dialog>
  );
};

export default LoginModal;

/*
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import styled from "@emotion/styled";

const useStyles = styled((theme) => ({
  iconButton: {
    marginRight: theme.spacing(1),
  },
}));

const LoginModal = ({ open, onClose }) => {
  const classes = useStyles();
  const [loginMethod, setLoginMethod] = useState(null);

  const handleLogin = () => {
    if (loginMethod === "email") {
    } else if (loginMethod === "gmail") {
    } else if (loginMethod === "linkedin") {
    }

    onClose();
  };

  return (
    <Box>
      <Box>
        <Dialog open={open} onClose={onClose}>
          <DialogTitle>Login to your account</DialogTitle>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body1" gutterBottom>
              Continue with:
            </Typography>
            <Divider
              orientation="horizontal"
              sx={{
                flexGrow: 1,
                ml: 1,
                height: "1px",
                backgroundColor: "#1d2542", // Background color
                borderRadius: "10px", // BorderRadius
              }}
            />
          </Box>
          <DialogContent>
            <Box
              sx={{
                mt: 3,
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <Box sx={{ ml: "10px", mr: "10px" }}>
                <IconButton
                  className={classes.iconButton}
                  onClick={() => setLoginMethod("email")}
                >
                  <img
                    src="https://machinehack.com/static/media/mail.835d81bc.svg"
                    alt="Email"
                  />
                </IconButton>
              </Box>
              <Box sx={{ ml: "10px", mr: "10px" }}>
                <IconButton
                  className={classes.iconButton}
                  onClick={() => setLoginMethod("gmail")}
                >
                  <img
                    src="https://machinehack.com/static/media/Google.c403bd93.svg"
                    alt="Gmail"
                  />
                </IconButton>
              </Box>
              <Box sx={{ ml: "10px", mr: "10px" }}>
                <IconButton
                  className={classes.iconButton}
                  onClick={() => setLoginMethod("linkedin")}
                >
                  <img
                    src="https://machinehack.com/static/media/Linkedin.7508c2c4.svg"
                    alt="LinkedIn"
                  />
                </IconButton>
              </Box>
            </Box>
          </DialogContent>
          <DialogActions sx={{ display: "block", m: 5 }}>
            <Box sx={{}}>
              <Divider
                orientation="horizontal"
                sx={{
                  flexGrow: 1,
                  height: "1px",
                  backgroundColor: "#1d2542", // Background color
                  borderRadius: "10px", // BorderRadius
                }}
              />
              <Box>
                <span class="darkText loginThinText">
                  Or don’t have an account?
                </span>
              </Box>
              <Divider
                orientation="horizontal"
                sx={{
                  flexGrow: 1,
                  height: "1px",
                  backgroundColor: "#1d2542", // Background color
                  borderRadius: "10px", // BorderRadius
                }}
              />
            </Box>
            <Box sx={{}}>
              <Box>
                <Button
                  onClick={handleLogin}
                  variant="contained"
                  color="primary"
                >
                  Register Now
                </Button>
              </Box>
              <Box>
                <Button onClick={onClose} color="secondary">
                  Cancel
                </Button>
              </Box>
            </Box>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default LoginModal;
*/
