import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  width: 100%;
  height: 70px;
`;

const ImgTag = styled.img`
  width: 100px;
  margin-left:20px;
`;

const CustomButton = styled(Button)`
  height: 40px;
  margin-left:500px;
`

const style = {
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Main() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  const imageUpload = (e) => {
    setImages([...images, ...e.target.files]);
  }

  useEffect(() => {
    if (images.length < 1) return;
    const newImageURLs = [];
    images.forEach(image => newImageURLs.push(URL.createObjectURL(image)));
    console.log(newImageURLs)
    setImageURLs(newImageURLs);
  }, [images]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
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
              자격증 목록
            </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <br />

      <Stack spacing={2}>

        {imageURLs.map(el => <FlexDiv><ImgTag src={el}></ImgTag></FlexDiv>)}
        <Button variant="contained" onClick={handleOpen}>+</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <TextField id="outlined-basic" label="자격증 이름" variant="outlined" />
            <IconButton color="primary" aria-label="upload picture" component="label">
              <input hidden accept="image/*" type="file" onChange={imageUpload} />
              <PhotoCamera />
            </IconButton>
            <Button variant="contained">완료</Button>
          </Box>
        </Modal>
      </Stack>
    </>
  );
}
