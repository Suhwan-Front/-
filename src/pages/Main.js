import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import styled from "styled-components";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import ViewListIcon from "@mui/icons-material/ViewList";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Card from "../components/Card";

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
`;

const style = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Main(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [image, setImage] = useState([]);
  const [certificate, setCertificate] = useState([]);
  const [value, setValue] = React.useState(new Date());
  const [name, setName] = useState("");

  useEffect(() => {
    const localData = localStorage.getItem("certificate");
    const moveData = JSON.parse(localData);
    //console.log(moveData.name);
    //console.log(moveData.imageURL);
    //console.log(typeof Date.parse(moveData.date));
    setImage(localStorage.getItem("imageValue"));
    setCertificate(
      certificate.concat({
        name: moveData.name,
        imageURL: moveData.imageURL,
        date: new Date(moveData.date),
      })
    );
  }, []);

  const complete = () => {
    setCertificate(
      certificate.concat({
        name: name,
        imageURL: URL.createObjectURL(image[0]),
        date: value,
      })
    );
    localStorage.setItem(
      "certificate",
      JSON.stringify({
        name: name,
        imageURL: URL.createObjectURL(image[0]),
        date: value,
      })
    );
  };

  const [state, setState] = React.useState({
    left: false,
  }); //매뉴판 왼쪽에서 뜨기

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  }; //열고 닫고 하는거 키보드로 할 수있음

  const imageUpload = (e) => {
    setImage([...e.target.files]);
    localStorage("imageValue", ...e.target.files);
  };

  const logOut = () => {
    localStorage.setItem("loginItem", "false");
    window.location.reload();
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={toggleDrawer(anchor, true)}
                >
                  <ViewListIcon />
                </IconButton>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              자격증 목록
            </Typography>
            {localStorage.getItem("loginItem") === "false" ? (
              <Button color="inherit">
                <Link to="Login">Login</Link>
              </Button>
            ) : (
              <Button color="inherit">
                <Link to="/" onClick={logOut}>
                  Logout
                </Link>
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <br />
      {localStorage.getItem("loginItem") === "false" ? (
        <Stack spacing={2}>
          <img alt="x_image" src="../img/multiply.png" />
          <p>로그인 후 이용해주세요</p>
        </Stack>
      ) : (
        <Stack spacing={2}>
          {certificate.map((cer) => (
            <Card certificate={cer} />
          ))}
          <Button variant="contained" onClick={handleOpen}>
            +
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <TextField
                id="outlined-basic"
                label="자격증 이름"
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={imageUpload}
                />
                <PhotoCamera />
              </IconButton>
              <FlexDiv>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <MobileDatePicker
                    label="유효 기간"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </FlexDiv>
              <Button variant="contained" onClick={complete}>
                완료
              </Button>
            </Box>
          </Modal>
        </Stack>
      )}
    </>
  );
}
