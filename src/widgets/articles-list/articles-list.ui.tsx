import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
} from '@mui/material';

import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShareIcon from '@mui/icons-material/Share';

export function ArticleCard() {
  return (
    <Card
      sx={{
        maxWidth: { xs: '90%', md: '100%' },
        boxShadow: 'none',
        border: '1px solid #EFEFEF',
        p: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              pb: 3,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Avatar
                alt="Remy Sharp"
                src="https://comtehno.kg/wp-content/uploads/2019/11/cropped-cropped-1789_oooo.plus_-2-300x300.png"
              />
              <p className="text-md font-bold">Comtehno College</p>
              <p className="text-md">Апрель 2, 2024 16:23</p>
            </Box>
          </Box>
          <Box>
            <h4 className="font-bold text-xl">
              4 Custom React Hooks Every Developer Should Know
            </h4>
            <p className="text-md text-zinc-500 ">
              4 Custom React Hooks to Improve Your Efficiency — My friends, if I
              had learned these 4 React hooks earlier, maybe I could have
              written more beautiful code. They greatly improved my work
              efficiency and the...
            </p>
            <Box sx={{ pt: 2, display: 'flex', alignItems: 'center' }}>
              <Chip variant="outlined" icon={<VisibilityIcon />} label="188" />
              <CardActions>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <BookmarkAddIcon />
                </IconButton>
              </CardActions>
            </Box>
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
    </Card>
  );
}

export function ArticlesList() {
  return (
    <div className="flex flex-col items-center  gap-5">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  );
}
