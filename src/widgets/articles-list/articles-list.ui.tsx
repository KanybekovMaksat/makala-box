import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
} from '@mui/material';

const ArticlesList = () => {
  return (
    <div>
      <ArticleCard />
    </div>
  );
};

function ArticleCard() {
  return (
    <Card sx={{ maxWidth: 800, boxShadow: 'none' }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <Divider component="div" className="bg-zinc-400" />
      <CardActionArea>
        <Box className="flex justify-between mt-3">
          <CardContent className="flex flex-col">
            <h4 className="font-bold text-xl pb-3">
              4 Custom React Hooks Every Developer Should Know
            </h4>
            <p className="text-md text-default-100">
              4 Custom React Hooks to Improve Your Efficiency — My friends, if I
              had learned these 4 React hooks earlier, maybe I could have
              written more beautiful code. They greatly improved my work
              efficiency and the...
            </p>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 151, borderRadius: 3 }}
            image="https://miro.medium.com/v2/da:true/resize:fill:140:140/0*oWPJ3CuWUJcgMOo1"
            alt="Live from space album cover"
          />
        </Box>
      </CardActionArea>
    </Card>
  );
}

export { ArticlesList };
