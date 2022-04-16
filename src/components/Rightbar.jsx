import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

import { images } from '../constants';

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed" width={330}>
        <Typography variant="h6" fontWeight={200} mb="8px">
          Online Friends
        </Typography>

        <AvatarGroup max={5} sx={{ justifyContent: 'left' }}>
          <Avatar src={images.user01} alt="user1" />
          <Avatar src={images.user02} alt="user2" />
          <Avatar src={images.user03} alt="user3" />
          <Avatar src={images.me} alt="me" />
          <Avatar src={images.user04} alt="user4" />
          <Avatar src={images.user05} alt="user5" />
          <Avatar src={images.user06} alt="user6" />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={200} my="8px">
          Most Viewed
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src={images.attractions07}
              alt="photo7"
              style={{ borderRadius: '6px' }}
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={images.attractions02}
              alt="photo2"
              style={{ borderRadius: '6px' }}
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={images.attractions03}
              alt="photo3"
              style={{ borderRadius: '6px' }}
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={images.attractions04}
              alt="photo4"
              style={{ borderRadius: '6px' }}
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={images.attractions05}
              alt="photo5"
              style={{ borderRadius: '6px' }}
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={images.attractions06}
              alt="photo6"
              style={{ borderRadius: '6px' }}
            />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={200} mt="8px">
          Latest Conversations
        </Typography>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={images.me} alt="user" />
            </ListItemAvatar>
            <ListItemText
              primary="Jonas Yonas"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Surprise
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem>
            <ListItemAvatar>
              <Avatar src={images.user01} alt="user" />
            </ListItemAvatar>
            <ListItemText
              primary="Hellen Adams"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Shocking :(
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
