import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import styled from "styled-components";
import { styled as styledMUI } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Paper from "@mui/material/Paper";

import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Card from "../components/Card";

import TopNav from "./TopNav";

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

const Item = styledMUI(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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

  const imageUpload = (e) => {
    setImage([...e.target.files]);
    localStorage("imageValue", ...e.target.files);
  };

  return (
    <>
      <TopNav name="자격증 목록" />
      <br />
      {localStorage.getItem("loginItem") === "false" ? (
        <Stack spacing={2}>
          <Item>
            <RemoveCircleOutlineIcon sx={{ color: "red", fontSize: "101px" }} />
          </Item>
          <Item>
            <p>로그인 후 이용해주세요</p>
          </Item>
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
