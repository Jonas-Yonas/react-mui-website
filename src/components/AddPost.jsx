import {
  Add,
  DateRange,
  DateRangeOutlined,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

import { images } from '../constants';

const CustomModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '16px',
});

const AddPost = () => {
  //   const CustomButton = styled(Button)({
  //     backgroundColor: 'red',
  //     color: '#888',
  //     margin: 5,
  //     '&:hover': {
  //       backgroundColor: 'lightblue',
  //     },
  //   });

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Tooltip
        title="Add Post"
        sx={{
          position: 'fixed',
          bottom: 20,
          backgroundColor: '#60478a',
          left: { xs: 'calc(50% - 25px)', md: 30 },
          '&:hover': {
            transition: 'all 0.5s ease',
            backgroundColor: '#0c021d',
          },
        }}
        onClick={(e) => setShowModal(true)}
      >
        <Fab color="primary" aria-label="addPost">
          {/* <CustomButton /> */}
          <Add sx={{ color: '#fdfdfd' }} />
        </Fab>
      </Tooltip>

      <CustomModal
        open={showModal}
        onClose={(event) => setShowModal(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
      >
        <Box
          width={400}
          height={260}
          bgcolor={'background.default'}
          color={'text.primary'}
          p={3}
          borderRadius={2}
        >
          <Typography variant="h6" color="#746d6dd6" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src={images.user03}
              alt="user"
              sx={{ width: 32, height: 32 }}
            />
            <Typography variant="span" fontWeight={500}>
              Maria Gomez
            </Typography>
          </UserBox>

          <TextField
            sx={{ width: '100%' }}
            id="post-body"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mb={3} mt={2}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>

          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            style={{
              width: '100%',
              justifyContent: 'space-between',
              borderRadius: '6px',
            }}
          >
            <Button
              sx={{
                width: '100%',
                borderRadius: '6px',
                backgroundColor: '#8f1560',
              }}
            >
              Add Post
            </Button>
            <Button
              sx={{
                borderRadius: '6px',
                backgroundColor: '#8f1560',
              }}
            >
              <DateRangeOutlined />{' '}
            </Button>
          </ButtonGroup>
        </Box>
      </CustomModal>
    </>
  );
};

export default AddPost;
