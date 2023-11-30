import { LocationOnOutlined, PersonOutlineOutlined } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FILTER_CONSTANTS } from '../../Constants/constants';

const Container = styled('div')(({ theme }) => ({
  backgroundImage: 'linear-gradient(120deg, #2874f0 20%, #1958b2)',
  border: '1px solid #003580',
  borderRadius: '3px',
  minWidth: '300px',
  padding: '15px',
  color: 'white',
  margin: '15px 0px',
  [theme.breakpoints.down('sm')]: {
    minWidth: '250px',
  },
  '& > h2': {
    fontSize: '22px',
    fontWeight: 500,
    marginBottom: '10px',
  },
}));

const LocationContainer = styled('div')(() => ({
  color: '#424d5f',
  marginBottom: '10px',
  '& > label': {
    fontSize: '13px',
    color: 'white',
  },
}));

const Wrapper = styled('div')(() => ({
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  height: '40px',
  padding: '5px 5px 5px 2px',
  borderRadius: '3px',

  '& > input': {
    border: 'none',
    outline: 'none',
    width: '100%',
    height: '100%',
    fontSize: '14px',
    cursor: 'pointer',
  },
}));

const PersonContainer = styled(LocationContainer)(() => ({
  position: 'relative',
  '& .person-span': {
    /* border: 1px solid black, */
    fontSize: '14px',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
}));

const PersonQuantityContainer = styled('div')(({ theme }) => ({
  boxShadow: '0px 0px 3px -2px black',
  border: '1px solid #cbcbcb',
  borderRadius: '3px',
  position: 'absolute',
  top: '63px',
  left: '0px',
  zIndex: 10,
  backgroundColor: 'white',
  padding: '10px 5px',
  [theme.breakpoints.down('sm')]: {
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '5px',
  },
}));

const QuantityItem = styled('div')(({ theme }) => ({
  width: '280px',
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    width: '215px',
    fontSize: '13px',
  },
}));

const QuantityBtnContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const CounterBtn = styled('button')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '26px',
  width: '40px',
  fontSize: '20px',
  borderRadius: '20px',
  backgroundColor: '#3d91ff',
  color: 'white',
  border: '1px solid #347ede',
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    width: '35px',
    fontSize: '18px',
    height: '21px',
  },
  '&:disabled': {
    cursor: 'default',
    '&:hover': {
      backgroundColor: '#3d91ff',
      color: 'white',
    },
  },
  '&:hover': {
    backgroundColor: 'white',
    color: '#3d91ff',
  },
}));

const Quantity = styled('span')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '45px',
  width: '45px',
  fontSize: '20px',
  fontWeight: 600,
  border: '1px solid #3d91ff',
  borderRadius: '50%',
  margin: '0px 10px',
  backgroundColor: 'white',
  color: '#3d91ff',
  cursor: 'default',
  [theme.breakpoints.down('sm')]: {
    width: '35px',
    fontSize: '18px',
    height: '35px',
  },
}));

const Button = styled('button')(() => ({
  backgroundColor: '#003580',
  margin: '25px auto 10px',
  width: '145px',
  padding: '9.5px',
  borderRadius: '3px',
  fontSize: '17px',
  color: 'white',
  cursor: 'pointer',
  transition: 'all 0.1s ease-in',
}));

const SortFilterContainer = styled('div')(({ theme }) => ({
  display: 'flex',

  '& .MuiFormControl-root': {
    width: '100%',
    background: theme.palette.background.default,
    borderRadius: '5px',
    border: 'none',
    '& .MuiSelect-select': {},
  },
}));
const ButtonContainer = styled('div')(() => ({
  display: 'flex',
}));

const FilterControl = ({ setfilterOptions, defaultFilterOptions }) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState(defaultFilterOptions.people);
  const [sortBy, setSortBy] = useState(defaultFilterOptions.sortBy);
  const [search, setSearch] = useState('');

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };
  const handleCount = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'inc' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const onFilterClick = () => {
    setfilterOptions({ people: options, sortBy, search });
  };
  const onFilterClear = () => {
    // reset all the options
    setOptions({
      adult: 2,
    });
    setSortBy(FILTER_CONSTANTS.ASC);
    setSearch('');
    setfilterOptions(defaultFilterOptions);
  };

  const onChangeText = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Container>
      {/* Search the hotels via name */}
      <h2>Filters</h2>
      <>
        <LocationContainer>
          <label htmlFor="name">Search:</label>
          <Wrapper>
            <LocationOnOutlined className="search-icon" />
            <input
              type="text"
              name="search"
              placeholder="Search hotels by name,location and facilities"
              onChange={onChangeText}
              value={search}
            />
          </Wrapper>
        </LocationContainer>
        {/* No of people in a room */}
        <PersonContainer>
          <label>People :</label>

          <Wrapper>
            <PersonOutlineOutlined className="search-icon" />

            <span
              className="person-span"
              onClick={() => setOpenOptions(!openOptions)}
            >
              {`${options.adult} ${options.adult <= 1 ? 'Adult' : 'Adults'}`}
            </span>
            {openOptions && (
              <PersonQuantityContainer>
                <QuantityItem>
                  <span>Adult</span>
                  <QuantityBtnContainer>
                    <CounterBtn
                      type="button"
                      disabled={options.adult <= 1}
                      onClick={() => handleCount('adult', 'dec')}
                    >
                      -
                    </CounterBtn>
                    <Quantity>{options.adult}</Quantity>
                    <CounterBtn
                      type="button"
                      onClick={() => handleCount('adult', 'inc')}
                    >
                      +
                    </CounterBtn>
                  </QuantityBtnContainer>
                </QuantityItem>
              </PersonQuantityContainer>
            )}
          </Wrapper>
        </PersonContainer>
        <label htmlFor="sort">Sort:</label>
        <SortFilterContainer>
          <FormControl>
            <Select
              sx={{
                boxShadow: 'none',
                '.MuiOutlinedInput-notchedOutline': { border: 0 },
                '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
                  {
                    border: 0,
                  },
                '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                  {
                    border: 0,
                  },
              }}
              value={sortBy}
              onChange={handleSortBy}
              displayEmpty
            >
              <MenuItem value={FILTER_CONSTANTS.ASC}>
                Price: Low to high
              </MenuItem>
              <MenuItem value={FILTER_CONSTANTS.DESC}>
                Price: High to low
              </MenuItem>
              <MenuItem value={FILTER_CONSTANTS.ASCSTAR}>
                Rating (Lowest first)
              </MenuItem>
              <MenuItem value={FILTER_CONSTANTS.DESCSTAR}>
                Rating (Highest first)
              </MenuItem>
            </Select>
          </FormControl>
        </SortFilterContainer>

        <ButtonContainer>
          <Button type="button" onClick={onFilterClick}>
            Go
          </Button>
          <Button type="button" onClick={onFilterClear}>
            Clear
          </Button>
        </ButtonContainer>
      </>
    </Container>
  );
};

export default FilterControl;
