import React, { useState } from 'react';
import styled from 'styled-components';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";

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
    position: relative;
    left: 50%;
    transform: translateX(-50%);
`;

const StyleTable = styled.th`
    background-color: rgb(230, 230, 230);
    font-weight: 700;
    height : 40px;
    border: 1px solid black;
`;

const Possible = styled.div`
    color: rgb(64, 64, 153);
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    margin-top: 10px;
`;

const SmallPossible = styled.div `
    color: rgb(64, 64, 153);
    font-size: 16px;
    font-weight: 700;
    text-align: center;
`;

const Impossible = styled.div`
    color: #9c2a2a;
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    margin-top: 10px;
`;

const SmallImpossible = styled.div`
    color: #9c2a2a;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
`;

function Result() {
    const [possible, setPossible] = useState(true);
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
        <TitleDiv>진단결과</TitleDiv>
        <hr></hr>
        <TitleDiv>정보처리기사</TitleDiv>
        {possible ? (
            <Possible>응시 가능</Possible>
        ) : (
            <Impossible>응시 불가능</Impossible>

        )
        }
        <Table>
            <thead>
                <Tr>
                    <StyleTable>
                        진단결과
                    </StyleTable>
                    <StyleTable>
                        항목
                    </StyleTable>
                </Tr>
                <Tr>
                    <Th>
                        <SmallImpossible>불가능</SmallImpossible>
                    </Th>
                    <Th>
                        4년제 : 졸업 또는 4학년 이상 재학/휴학/제적(학력응시)
                    </Th>
                </Tr>
                <Tr>
                    <Th>
                        <SmallImpossible>불가능</SmallImpossible>
                    </Th>
                    <Th>
                        3년제 : 졸업 후 1년 실무 경력(학력응시)
                    </Th>
                </Tr>
                <Tr>
                    <Th>
                        <SmallImpossible>불가능</SmallImpossible>
                    </Th>
                    <Th>
                        2년제 : 졸업 후 2년 실무 경력(학력응시)
                    </Th>
                </Tr>
                <Tr>
                    <Th>
                        <SmallImpossible>불가능</SmallImpossible>
                    </Th>
                    <Th>
                        동일 직무 분야에서 4년 이상 실무경력(경력응시)
                    </Th>
                </Tr>
                <Tr>
                    <Th>
                        <SmallImpossible>불가능</SmallImpossible>
                    </Th>
                    <Th>
                        기능사 취득 후 3년 실무경력(경력응시)
                    </Th>
                </Tr>
                <Tr>
                    <Th>
                        <SmallImpossible>불가능</SmallImpossible>
                    </Th>
                    <Th>
                        산업기사 취득 후 1년 실무경력(경력응시)
                    </Th>
                </Tr>
                <Tr>
                    <Th>
                        <SmallImpossible>불가능</SmallImpossible>
                    </Th>
                    <Th>
                        학점인정법률의거 106점 이상 취득(기타응시)
                    </Th>
                </Tr>
            </thead>
        </Table>
        <Button1>접수</Button1>
    </>
  )
}

export default Result