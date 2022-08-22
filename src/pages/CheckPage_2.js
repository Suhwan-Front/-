import React from "react";
import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import TopNav from "./TopNav";

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
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const StyleTable = styled.th`
  background-color: rgb(230, 230, 230);
  font-weight: 700;
  height: 40px;
`;

function CheckPage_2() {
  const navigate = useNavigate();
  const goNext = () => {
    navigate("/CheckPage_3");
  };
  return (
    <>
      <TopNav name="응시자격테스트" />
      <TitleDiv>학력정보입력</TitleDiv>
      <hr></hr>
      <Table>
        <thead>
          <Tr>
            <StyleTable>학력구분</StyleTable>
            <Th>
              <select>
                <option value="it1">고졸이하</option>
                <option value="it1">2년제대학</option>
                <option value="it2">3년제대학</option>
                <option value="it2">4년제대학</option>
                <option value="it1">5년제대학</option>
                <option value="it1">6년제대학</option>
                <option value="it1">석사학위 취득자</option>
              </select>
            </Th>
          </Tr>
          <Tr>
            <StyleTable>학교(기관)명</StyleTable>
            <Th>
              <Button2>검색</Button2>
            </Th>
          </Tr>
          <Tr>
            <StyleTable>학과/전공명</StyleTable>
            <Th>
              <Button2>검색</Button2>
            </Th>
          </Tr>
          <Tr>
            <StyleTable>학적상태</StyleTable>
            <Th>
              <select>
                <option value="it1">졸업예정</option>
                <option value="it2">졸업</option>
                <option value="it2">재학중</option>
              </select>
            </Th>
          </Tr>
          <Tr>
            <StyleTable>중퇴/졸업일자</StyleTable>
            <Th>
              <input type="date"></input>
            </Th>
          </Tr>
        </thead>
      </Table>
      <Button1 onClick={goNext}>다음</Button1>
    </>
  );
}

export default CheckPage_2;
