import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Chip,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';

import { images } from '../constants';

const Post = ({ name, date, content }) => {
  return (
    <>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'red' }} aria-label="attraction">
              {name.split(' ')[0][0]}
            </Avatar>
          }
          action={
            <IconButton aria-label="setting">
              <MoreVert />
            </IconButton>
          }
          title={name}
          subheader={date}
        />
        <CardMedia
          component="img"
          image={images.attractions07}
          alt="zoo"
          sx={{ height: { xs: '200px', sm: '320px' } }}
        />
        <CardContent>
          <Typography>{content}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: 'red' }} />}
            />
            {/* <Favorite /> */}
          </IconButton>
          <IconButton aria-label="favorites">
            <Share />
          </IconButton>
        </CardActions>
      </Card>

      <Divider sx={{ margin: '16px 0' }}>
        <Chip label={`${name.split(' ')[0]}'s Post`} />
      </Divider>
    </>
  );
};

export default Post;
