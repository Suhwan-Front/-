import React from 'react';
import styled from 'styled-components';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import StyledEngine from '@mui/styled-engine';
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

const StyleTable = styled.th`
    background-color: rgb(230, 230, 230);
    font-weight: 700;
    height : 40px;
`;

function Test() {
    const navigate = useNavigate();
    const goNext = () => {
        navigate('/Test2');
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
        <TitleDiv>자격선택</TitleDiv>
        <hr></hr>
        <Table>
            <thead>
                <Tr>
                    <StyleTable>
                        응시계열명
                    </StyleTable>
                    <Th>
                        정보처리기사
                    </Th>
                </Tr>
                <Tr>
                    <StyleTable>
                        응시종목명
                    </StyleTable>
                    <Th>
                        <select>
                            <option>정보처리기사</option>
                            <option>정보처리기사</option>
                            <option>정보처리기사</option>
                        </select>
                    </Th>
                </Tr>
            </thead>
        </Table>
        <Button1 onClick={goNext}>다음</Button1>
    </>
  )
}

export default Test