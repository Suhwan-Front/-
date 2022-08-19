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
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Card from '../components/Card'

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
`;

const style = {
  display: 'flex',
  flexWrap: 'wrap',
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
  const [image, setImage] = useState([]);
  const [images, setImages] = useState([]);
  const [certificate, setCertificate] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [value, setValue] = React.useState(new Date());
  const [name, setName] = useState('');

  const complete = () => {
    setCertificate(certificate.concat({ name: name, imageURL: URL.createObjectURL(image[0]), date: value }))
  }

  const imageUpload = (e) => {
    setImage([...e.target.files]);
  }

  // useEffect(() => {
  //   if (images.length < 1) return;
  //   const newImageURLs = [...imageURLs];
  //   image.forEach(image => newImageURLs.push(URL.createObjectURL(image)));
  //   console.log(newImageURLs)
  //   setImageURLs(newImageURLs);
  // }, [images]);

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

        {certificate.map(cer => <Card certificate={cer} />)}
        <Button variant="contained" onClick={handleOpen}>+</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <TextField id="outlined-basic" label="자격증 이름" variant="outlined" onChange={e => setName(e.target.value)} />
            <IconButton color="primary" aria-label="upload picture" component="label">
              <input hidden accept="image/*" type="file" onChange={imageUpload} />
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
            <Button variant="contained" onClick={complete}>완료</Button>
          </Box>
        </Modal>
      </Stack>
    </>
  );
}
