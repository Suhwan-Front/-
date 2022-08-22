import React from "react";
import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import TopNav from "./TopNav";

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

const StyleTable = styled.th`
  background-color: rgb(230, 230, 230);
  font-weight: 700;
  height: 40px;
`;

function CheckPage_1() {
  const navigate = useNavigate();
  const goNext = () => {
    navigate("/CheckPage_2");
  };
  return (
    <>
      <TopNav name="응시자격테스트" />
      <TitleDiv>자격선택</TitleDiv>
      <hr></hr>
      <Table>
        <thead>
          <Tr>
            <StyleTable>응시계열명</StyleTable>
            <Th>정보처리기사</Th>
          </Tr>
          <Tr>
            <StyleTable>응시종목명</StyleTable>
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
  );
}

export default CheckPage_1;
