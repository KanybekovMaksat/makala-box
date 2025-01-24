import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { userQueries } from '~entities/user';
import { WriterArticlesList } from '~widgets/articles-list';
import { ProfileCard } from '~widgets/profile-card';
import WidgetsIcon from '@mui/icons-material/Widgets';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import { useNavigate } from 'react-router-dom';
import { pathKeys } from '~shared/lib/react-router';
import { articleQueries } from '~entities/article';
import { useState } from 'react';
import { BoxesList } from '~widgets/boxes-list';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function ProfilePage() {
  const navigate = useNavigate();

  const {
    data: userData,
    isLoading,
    isError,
  } = userQueries.useLoginUserQuery();
  const {
    data: boxesData,
    isLoading: isBoxLoading,
    isError: isBoxError,
  } = articleQueries.useGetBoxes();

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  let content;

  // Проверка загрузки данных
  if (isLoading || isBoxLoading) {
    content = <div>Loading...</div>;
  } 
  // Проверка ошибок
  else if (isError || isBoxError || (!userData && !boxesData)) {
    content = <div>Error fetching data.</div>;
  } 
  // Основной контент
  else {
    content = (
      <>
        <ProfileCard />

        <div className="w-full my-4 flex flex-col gap-3 md:hidden">
          <Button
            onClick={() => navigate(pathKeys.editor.root())}
            endIcon={<WidgetsIcon />}
            className="shadow-none font-bold"
            variant="contained"
            size="large"
          >
            Создать коробку
          </Button>
          <Button
            onClick={() => navigate(pathKeys.rating())}
            endIcon={<FeaturedPlayListIcon />}
            className="shadow-none font-bold"
            variant="contained"
            size="large"
          >
            Место в рейтинге
          </Button>
          <Button
            onClick={() => navigate(pathKeys.favorites())}
            endIcon={<BookmarksIcon />}
            className="shadow-none font-bold"
            variant="contained"
            size="large"
          >
            Мои избранные
          </Button>
        </div>

        <Box
          sx={{ borderBottom: 1, borderColor: 'divider' }}
          className="max-w-[650px] md:w-[650px] bg-[white] border-2 border-sc-100 rounded flex justify-center my-4"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Мои статьи" {...a11yProps(0)} />
            <Tab label="Мои коробки" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <WriterArticlesList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <BoxesList boxesData={boxesData} />
        </CustomTabPanel>
      </>
    );
  }

  return (
    <Container maxWidth="md" className="my-10 flex flex-col items-center">
      {content}
    </Container>
  );
}
