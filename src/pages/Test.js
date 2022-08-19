import React, { useState } from 'react'
import '../css/test.css'
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ViewListIcon from "@mui/icons-material/ViewList";
import Drawer from "@mui/material/Drawer";

function Test() {
    const [level, setLevel] = useState(0);
    const logOut = () => {
        localStorage.setItem("loginItem", "false");
        window.location.reload();
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

    const test1234 = () => {
        if (level === 0) return (
            <>
                <hr />
                <div class="title">자격 선택</div>
                <hr />
                <table>
                    <thead>
                        <tr>
                            <th class="tablestyle">
                                응시계열명
                            </th>
                            <th>
                                정보처리기사
                            </th>
                        </tr>
                        <tr>
                            <th class="tablestyle">
                                응시종목명
                            </th>
                            <th>
                                <select>
                                    <option value="it1">정보처리기사</option>
                                    <option value="it2">정보처리기사2</option>
                                </select>
                            </th>
                        </tr>
                    </thead>
                </table>
                <button class="button1" type="button" onClick={() => setLevel(1)}>다음</button>
            </>
        )
        if (level === 1) return (
            <>
                <hr />
                <div class="title">학력정보입력</div>
                <hr />
                <table>
                    <thead>
                        <tr>
                            <th class="tablestyle">
                                학력구분
                            </th>
                            <th colspan="4">
                                <select>
                                    <option value="it1">고졸이하</option>
                                    <option value="it1">2년제대학</option>
                                    <option value="it2">3년제대학</option>
                                    <option value="it2">4년제대학</option>
                                    <option value="it1">5년제대학</option>
                                    <option value="it1">6년제대학</option>
                                    <option value="it1">석사학위 취득자</option>
                                </select>
                            </th>
                        </tr>
                        <tr>
                            <th class="tablestyle">
                                학교(기관)명
                            </th>
                            <th>
                                <button class="button2">검색</button>
                            </th>
                        </tr>
                        <tr>
                            <th class="tablestyle">
                                학과/전공명
                            </th>
                            <th>
                                <button class="button2">검색</button>
                            </th>
                        </tr>
                        <tr>
                            <th class="tablestyle">
                                학적상태
                            </th>
                            <th>
                                <select>
                                    <option value="it1">졸업예정</option>
                                    <option value="it2">졸업</option>
                                    <option value="it2">재학중</option>
                                </select>
                            </th>
                        </tr>
                        <tr>
                            <th class="tablestyle">
                                중퇴/졸업일자
                            </th>
                            <th>
                                <input type="date" />
                            </th>
                        </tr>
                    </thead>
                </table>
                <button class="button1" type="button" onClick={() => setLevel(2)}>다음</button>
            </>
        )
        if (level === 2) return (
            <>
                <hr />
                <div class="title">경력정보입력</div>
                <hr />
                <table>
                    <thead>
                        <tr>
                            <th class="tablestyle">
                                산업분야
                            </th>
                            <th>
                                <select>
                                    <option value="it1">공공/보건서비스</option>
                                    <option value="it1">디자인공예</option>
                                    <option value="it2">건설</option>
                                    <option value="it2">운송</option>
                                    <option value="it1">정보통신</option>
                                    <option value="it1">전기전자</option>
                                    <option value="it1">무직</option>
                                    <option value="it1">기타</option>
                                </select>
                            </th>
                        </tr>
                        <tr>
                            <th class="tablestyle">
                                업체명(기관명)
                            </th>
                            <th>
                                <input />
                            </th>
                        </tr>
                        <tr>
                            <th class="tablestyle">
                                경력증명서구분
                            </th>
                            <th>
                                <button class="button2">검색</button>
                            </th>
                        </tr>
                        <tr>
                            <th class="tablestyle">
                                직무분야
                            </th>
                            <th>
                                <select>
                                    <option value="it1" selected="selected">직무분야</option>
                                    <option value="it2">건축</option>
                                    <option value="it2">조리</option>
                                    <option value="it2">축산</option>
                                    <option value="it2">통신</option>
                                    <option value="it2">회계</option>
                                </select>
                            </th>
                        </tr>
                        <tr>
                            <th class="tablestyle">
                                근무내용
                            </th>
                            <th>
                                <textarea placeholder="근무내용"></textarea>
                            </th>
                        </tr>
                        <tr>
                            <th class="tablestyle">
                                근무시작
                            </th>
                            <th>
                                <input type="date" />
                            </th>
                        </tr>
                        <th class="tablestyle">
                            근무종료
                        </th>
                        <th>
                            <input type="date" />
                        </th>>

                    </thead>
                </table>
                <button class="button1" type="button" onClick={() => setLevel(3)}>다음</button>
            </>
        )
        if (level === 3) return (
            <>
                <hr />
                <div class="title">수상경력입력</div>
                <hr />
                <table>
                    <thead>
                        <tr>
                            <th class="tablestyle">
                                대회구분
                            </th>
                            <th>
                                <select>
                                    <option value="it1" selected="selected">대회구분</option>
                                    <option value="it1">국제</option>
                                    <option value="it1">국외</option>
                                </select>
                                <select>
                                    <option value="it1">금</option>
                                    <option value="it1" selected="selected">순위</option>


                                </select>
                            </th>
                        </tr>
                        <tr>
                            <th class="tablestyle">
                                대회명
                            </th>
                            <th>
                                <input />
                            </th>
                        </tr>
                        <tr>
                            <th class="tablestyle">
                                수상일자
                            </th>
                            <th>
                                <input />
                            </th>
                        </tr>
                    </thead>
                </table>
                <button class="button1" type="button" onClick={() => setLevel(4)}>다음</button>
            </>
        )
    }

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
            {test1234()}
        </>
    )
}

export default Test