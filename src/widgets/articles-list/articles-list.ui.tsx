import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Divider,
  IconButton,
} from '@mui/material';

import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

export function ArticleCard() {
  return (
    <Card sx={{ maxWidth: { xs: '90%', md: '60%' }, boxShadow: 'none' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          bgcolor: '#00443ccc',
          color: 'white',
          px: 1,
        }}
      >
        <CardHeader
          avatar={<Avatar aria-label="recipe">R</Avatar>}
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <IconButton style={{ color: 'white' }} color="inherit">
          <BookmarkAddIcon />
        </IconButton>
      </Box>
      <Divider component="div" className="bg-zinc-400" />
      <CardActionArea>
        <Box
          sx={{
            display: 'flex',
            padding: 1,
            flexDirection: { xs: 'column-reverse', md: 'row' },
          }}
        >
          <CardContent>
            <h4 className="font-bold text-xl pb-3">
              4 Custom React Hooks Every Developer Should Know
            </h4>
            <p className="text-md text-default-100 pb-2">
              4 Custom React Hooks to Improve Your Efficiency — My friends, if I
              had learned these 4 React hooks earlier, maybe I could have
              written more beautiful code. They greatly improved my work
              efficiency and the...
            </p>
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              <Chip
                label="Programming"
                size="small"
                color="default"
                variant="outlined"
              />
              <Chip
                label="Tech"
                size="small"
                color="default"
                variant="outlined"
              />
              <Chip
                label="Innovation"
                size="small"
                color="default"
                variant="outlined"
              />
            </Box>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              width: { xs: '100%', md: '450px' },
              height: { xs: '200px' },
              borderRadius: { xs: 0, md: 1 },
            }}
            image="https://i.pinimg.com/564x/b4/1a/8a/b41a8acccf85813efcddf1d93061ecc6.jpg"
            alt="Live from space album cover"
          />
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default function ArticlesList() {
  return (
    <div className="flex flex-col items-center  gap-5">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  );
}
