import { Box, Button, Card, CardMedia } from '@mui/material';

function NewsCard() {
  return (
    <Card
      sx={{
        maxWidth: 325,
        background: 'none',
        boxShadow: 'none',
        p: 2,
        border: '1px solid  #EFEFEF',
      }}
    >
      <CardMedia
        sx={{ height: 150, borderRadius: 1 }}
        image="https://i.pinimg.com/564x/e2/ef/21/e2ef21f4ef052d2d559371c478100343.jpg"
        title="green iguana"
      />

      <h3 className="text-lg text-zinc-700 font-bold my-3">
        The Impact of Technology on the Workplace: How Technology is Changing
      </h3>
      <Button sx={{ color: 'gray' }} color="inherit" variant="outlined">
        Читать
      </Button>
    </Card>
  );
}
export function NewsList() {
  return (
    <Box>
      <h2 className="text-2xl font-bold my-3">Новости </h2>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          rowGap: '30px',
        }}
      >
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </Box>
    </Box>
  );
}
