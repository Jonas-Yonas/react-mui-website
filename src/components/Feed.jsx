import { Box, Skeleton, Stack } from '@mui/material';
import React, { useState } from 'react';
import Post from './Post';

const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box flex={4} p={{ xs: 2, md: 2 }} pl={{ xs: 0 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="rectangular" height={300} />
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={30} />
        </Stack>
      ) : (
        <>
          <Post
            name={'Jonas Yonas'}
            date={'April 15, 2022'}
            content={'Lorem ipsum dolor, sit amet'}
          />
          {/* <Divider>
        <Chip label="CHIP" />
      </Divider> */}
          <Post
            name={'Kalkidan Alexander'}
            date={'March 05, 2022'}
            content={'Second content Lorem ipsum dolor, sit amet'}
          />
          {/* <Divider>
        <Chip label="CHIP" />
      </Divider> */}
          <Post
            name={'David Omar'}
            date={'March 01 , 2022'}
            content={'Third content Lorem ipsum dolor, sit amet'}
          />
          <Post
            name={'Alex Max'}
            date={'February 15, 2022'}
            content={'Forth content Lorem ipsum dolor, sit amet'}
          />
          <Post
            name={'Martha Simon'}
            date={'January 22, 2022'}
            content={'Fifth content Lorem ipsum dolor, sit amet'}
          />
        </>
      )}
    </Box>
  );
};

export default Feed;
