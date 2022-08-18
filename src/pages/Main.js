import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 100%;
  height: 70px;
`;

const ImgTag = styled.img`
  width: 100px;
`;

export default function Main() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              자격증 목록
            </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <br />

      <Stack spacing={2}>
        <FlexDiv></FlexDiv>
        <Button variant="contained">+</Button>
      </Stack>
    </>
  );
}
