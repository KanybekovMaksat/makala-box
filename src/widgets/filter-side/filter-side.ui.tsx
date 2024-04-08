import { styled } from '@mui/material/styles';
import { Button, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { FilterSelect } from '~features/filter-bar/filter-select';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: '1px solid gray',
  width: '100%',
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

export function FilterSide() {
  return (
    <div className="md:fixed  w-full md:w-[300px]">
      <Search>
        <SearchIconWrapper>
          <SearchIcon className="text-pc-500" />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      <div className="mt-4">
        <FilterSelect />
        <FilterSelect />
      </div>
      <Button className="w-full bg-[#2C9D62]" variant="contained">
        Применить
      </Button>
    </div>
  );
}
