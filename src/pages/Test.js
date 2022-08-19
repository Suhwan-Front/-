import React from 'react';
import styled from 'styled-components';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";

const TitleDiv = styled.div`
    font-size : 20px;
    font-weight : 700;
    
`;

const Hr = styled.hr`
`;

const TextField = styled.div`
    font-weight : 700;
`;

const OPTIONS = [
    { value: "IT1", name: "정보처리기사" },
    { value: "IT2", name: "정보처리기사2" },
];

const InputField = styled.div`
    color : grey;
`;

const SeletBox = (props) => {
    return (
        <select>
            {props.option.map((option) => (
                <option
                value={option.value}
                defaultValue={props.defaultValue === option.value}
                >
                    {option.name}
                </option>
            ))}
        </select>
    );
};


function Test({props}) {
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
        <Hr/>
        <TextField>응시계열명</TextField>
        <InputField>정보처리기사</InputField>
        <TextField>응시종목명</TextField>
    </>
  )
}

export default Test
