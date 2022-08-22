import React from "react";
import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

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
  margin-top: 10px;
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
  height: 40px;
`;

const Input = styled.input`
  width: 130px;
  margin-right: 15px;
`;

const Textarea = styled.textarea`
  width: 260px;
  height: 60px;
`;

function CheckPage_3() {
  const navigate = useNavigate();
  const goNext = () => {
    navigate("/CheckPage_4");
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
      <TitleDiv>경력정보입력</TitleDiv>
      <hr></hr>
      <Table>
        <thead>
          <Tr>
            <StyleTable>산업분야</StyleTable>
            <Th>
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
            </Th>
          </Tr>

          <Tr>
            <StyleTable>업체명(기관명)</StyleTable>
            <Th>
              <form action="#">
                <Input type="text" name=""></Input>
              </form>
            </Th>
          </Tr>
          <Tr>
            <StyleTable>경력증명서구분</StyleTable>
            <Th>
              <form action="#">
                <Input type="text" name=""></Input>
                <Button2>검색</Button2>
              </form>
            </Th>
          </Tr>
          <Tr>
            <StyleTable>직무분야</StyleTable>
            <Th>
              <select>
                <option value="it1" selected="selected">
                  직무분야
                </option>
                <option value="it2">건축</option>
                <option value="it2">조리</option>
                <option value="it2">축산</option>
                <option value="it2">통신</option>
                <option value="it2">회계</option>
              </select>
            </Th>
          </Tr>
          <Tr>
            <StyleTable>근무내용</StyleTable>
            <Th>
              <Textarea></Textarea>
            </Th>
          </Tr>
          <Tr>
            <StyleTable>근무시작일</StyleTable>
            <Th>
              <form action="#">
                <Input type="date" name=""></Input>
              </form>
            </Th>
          </Tr>
          <Tr>
            <StyleTable>근무종료일</StyleTable>
            <Th>
              <form action="#">
                <Input type="date" name=""></Input>
              </form>
            </Th>
          </Tr>
        </thead>
      </Table>

      <Button1 onClick={goNext}>다음</Button1>
    </>
  );
}

export default CheckPage_3;
