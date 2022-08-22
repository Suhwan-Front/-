import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ViewListIcon from "@mui/icons-material/ViewList";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HomeIcon from "@mui/icons-material/Home";

export default function TopNav(props) {
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
    if (localStorage.getItem("loginItem") === "false") {
      alert("로그인 후 이용해주세요");
    } else {
      setState({ ...state, [anchor]: open });
    }
  }; //열고 닫고 하는거 키보드로 할 수있음
  const logOut = () => {
    localStorage.setItem("loginItem", "false");
    window.location.reload();
  };

  const errMessage = () => {
    alert("추가 예정 페이지 입니다");
  };
  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["홈화면"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link to="/" style={{ textDecoration: "none" }}>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
        {["회원정보"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={errMessage}>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        {["지원 자격 검사"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link to="/CheckPage_1" style={{ textDecoration: "none" }}>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
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
              {props.name}
            </Typography>
            {localStorage.getItem("loginItem") === "false" ? (
              <Button color="inherit">
                <Link to="Login" style={{ textDecoration: "none" }}>
                  Login
                </Link>
              </Button>
            ) : (
              <Button color="inherit">
                <Link
                  to="/"
                  onClick={logOut}
                  style={{ textDecoration: "none" }}
                >
                  Logout
                </Link>
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
