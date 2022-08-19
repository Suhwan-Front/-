import React from 'react';
import styled from 'styled-components';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { useNavigate } from 'react-router-dom';

const Table = styled.table`
    border: 1px solid black;
    border-collapse: collapse;
    font-size: 15px;
    width: 100%;
    margin-top: 20px;
`;

const Th = styled.th`
    border: 1px solid black;
    padding: 7px;
    font-weight: 400;
`;

const Tr = styled.tr`
    border: 1px solid black;
    padding: 7px;
    font-weight: 400;
`;

const TitleDiv = styled.div`
    font-size: 20px;
    text-align: center;
    font-weight: 700;
    margin-top : 10px;
`;

const Button1 = styled.button`
    width: 50px;
    height: 30px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 40px;
`;

const Button2 = styled.button`
    width: 50px;
    height: 30px;
    // position: relative;
    // left: 50%;
    // transform: translateX(-50%);
`;

const StyleTable = styled.th`
    background-color: rgb(230, 230, 230);
    font-weight: 700;
    height : 40px;
`;

const Input = styled.input`
    width: 130px;
    margin-right: 15px;
`;

const Textarea = styled.textarea`
    width: 260px;
    height: 60px;
`;



function Test4() {
    const navigate = useNavigate();
    const goNext = () => {
        navigate('/Result');
    };
  return (
    <>
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
              응시자격테스트
            </Typography>
          </Toolbar>
        </AppBar>
        <TitleDiv>수상경력입력</TitleDiv>
        <hr></hr>
        <Table>
            <thead>
                <StyleTable>
                    대회구분
                </StyleTable>
                <Th>
                    <select>
                        <option value="it1" selected="selected">대회구분</option>
                        <option value="it1">국제</option>
                        <option value="it1">국외</option>
                    </select>
                    <select>
                        <option value="it1">금</option>
                        <option value="it1" selected="selected">순위</option>
                    </select>
                </Th>
                <Tr>
                    <StyleTable>
                        대회명
                    </StyleTable>
                    <Th>
                        <form action='#'>
                            <Input type="text" name=''></Input>
                        </form>
                    </Th>
                </Tr>
                <Tr>
                    <StyleTable>
                        수상일자
                    </StyleTable>
                    <Th>
                        <form action='#'>
                            <Input type="date" name=''></Input>
                        </form>
                    </Th>
                </Tr>
            </thead>
        </Table>

        <Button1 onClick={goNext}>다음</Button1>
    </>
  )
}

export default Test4