import { styled } from '@mui/material/styles';
import { Button, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { FilterSelect } from '~features/filter-bar/filter-select';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: '2px solid #EFEFEF',
  width: '100%',
  background: 'white',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    height: '40px',
  },
}));

export function FilterSide({ searchQuery, setSearchQuery, getArticle, selectedCategoryIds, setSelectedCategoryIds }) {
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    getArticle(searchQuery, selectedCategoryIds);
  };

  return (
    <div className="md:fixed w-full md:w-[300px]">
      <Search>
        <SearchIconWrapper>
          <SearchIcon className="text-pc-500" />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          value={searchQuery}
          onChange={handleSearchChange}
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      <FilterSelect selectedCategoryIds={selectedCategoryIds} setSelectedCategoryIds={setSelectedCategoryIds} />
      <Button
        className="mt-5 w-full bg-second-100"
        variant="contained"
        onClick={handleSearchSubmit}
      >
        Применить
      </Button>
    </div>
  );
}



  // const handleSearchChange = (event) => {
  //   const query = event.target.value;
  //   setSearchQuery(query);
  //   getArticle(query);
  // };
