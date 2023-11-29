import {
  ExpandLessOutlined,
  ExpandMoreOutlined,
  LocationOnOutlined,
  PersonOutlineOutlined,
  SortSharp,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

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

// const Form = styled('form')(() => ({
//   display: 'flex',
//   flexDirection: 'column',
//   '& .search-icon': {
//     marginRight: '3px',
//     fontSize: '25px',
//     height: '100%',
//   },
// }));

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
  border: '1px solid #003580',
  width: '145px',
  padding: '9.5px',
  borderRadius: '3px',
  fontSize: '17px',
  color: 'white',
  cursor: 'pointer',
  transition: 'all 0.1s ease-in',
}));

const SortFilterContainer = styled('div')(() => ({
  position: 'relative',
}));
const SortFilterButton = styled('button')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'flex-start',
  backgroundColor: theme.palette.background.paper,
  border: '1px solid #0083cc',
  color: theme.palette.text.secondary,
  // fontSize: '15px',
  fontWeight: 500,
  cursor: 'pointer',
  '&:active': {
    boxShadow: '0 2px #666',
    transform: 'translateY(1px)',
  },
}));

const IconContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '10px',
  '&.expand-icon': {
    /* border: 1px solid black; */
    fontSize: '16px',
    marginTop: '-10px',
  },
}));
const OptionsListContainer = styled('div')(() => ({
  boxShadow: '0px 0px 3px -2px black',
  border: '1px solid #cbcbcb',
  borderRadius: ' 3px',
  backgroundColor: 'white',
  padding: '10px 0px',
  position: 'absolute',
  top: '43px',
  left: '0px',
  zIndex: 1,

  '& > ul': {
    listStyleType: 'none',
    '& li': {
      '& > option': {
        fontSize: '15px',
        color: '#4c4747',
        padding: '10px 25px',
        cursor: 'pointer',

        '&:hover': {
          backgroundColor: '#efefef',
        },
      },
    },
  },
}));

const FilterControl = () => {
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 2,
  });
  const [openList, setOpenList] = useState(false);
  const [sortBy, setSortBy] = useState('Lowest price');

  const handleSortByAndOpenList = (e) => {
    setSortBy(e.target.value);
    setOpenList(false);
  };
  const handleCount = (name, operation) => {
    // console.log(options["room"], name, options[name]); // Accessing room key's value by Square Bracket method from "options" Object. We are using options[name] because here name variable is String that is "room". We can't use it like options.name bcoz it means options."room" which is undefined.

    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'inc' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <Container>
      {/* Search the hotels via name */}
      <h2>Filters</h2>
      <>
        <LocationContainer>
          <label htmlFor="name">Name:</label>
          <Wrapper>
            <LocationOnOutlined className="search-icon" />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Search hotels by name"
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
          <SortFilterButton onClick={() => setOpenList(!openList)}>
            <SortSharp className="search-icon" />
            {sortBy}
            <IconContainer>
              <ExpandLessOutlined className="expand-icon" />
              <ExpandMoreOutlined className="expand-icon" />
            </IconContainer>
          </SortFilterButton>
          {openList === true && (
            <OptionsListContainer>
              <ul>
                <li>
                  <option onClick={handleSortByAndOpenList}>
                    Lowest price
                  </option>
                </li>

                <li>
                  <option onClick={handleSortByAndOpenList}>
                    Highest price
                  </option>
                </li>

                <li>
                  <option onClick={handleSortByAndOpenList}>
                    Stars (highest first)
                  </option>
                </li>

                <li>
                  <option onClick={handleSortByAndOpenList}>
                    Stars (lowest first)
                  </option>
                </li>
              </ul>
            </OptionsListContainer>
          )}
        </SortFilterContainer>
        <Button type="button">Search</Button>
      </>
    </Container>
  );
};

export default FilterControl;
