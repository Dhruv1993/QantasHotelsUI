import * as React from 'react';
import { CssBaseline, Grid, ThemeProvider, Pagination } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ColorModeContext, useMode } from '../Themes/Theme';
import Header from '../Components/Header/Header';
import Offers from '../Components/OfferCards/OfferCard';
import Subscribe from '../Components/Subscribe/Subscribe';
import Footer from '../Components/Footer/Footer';
import FilterControl from '../Components/FilterControls/Filtercontrols';
import { API } from '../Services/Api';
import Card from '../Components/Card/Card';
import FeaturedCountries from '../Components/FeaturedCountries/FeaturedCountries';
import { FILTER_CONSTANTS } from '../Constants/constants';
import {
  sortByLow,
  isEmpty,
  sortByHigh,
  filterByNumerOfAdults,
  sortAscByNumerOfStars,
  sortDescByNumerOfStars,
  filterByText,
} from '../helpers';
import { extraImages } from '../dummyData';

const Container = styled('div')(({ theme }) => ({
  margin: '20px 120px',
  [theme.breakpoints.down('lg')]: {
    margin: '20px 30px',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '20px',
  },
}));

const MiddleSection = styled('section')(({ theme }) => ({
  // margin: '0px 150px',
  [theme.breakpoints.down('lg')]: {
    margin: '0px 30px',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '0px 20px',
  },
}));
const SideContainer = styled('div')(({ theme }) => ({
  margin: '0px 8px 15px 0px',
  flex: 1,
  [theme.breakpoints.down('md')]: {
    margin: '5px 0px 15px',
  },
  '& #sticky-container': {
    position: 'sticky',
    top: '17px',
    zIndex: 999,
    [theme.breakpoints.down('md')]: {
      position: 'static',
      zIndex: 'auto',
    },
  },
}));

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const HotelContainer = styled('div')(({ theme }) => ({
  marginBottom: '2em',
  flex: 4,
  [theme.breakpoints.down('md')]: {
    flex: 1,
  },
}));
const PaginationContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
}));

const Main = styled('div')(({ theme }) => ({
  marginBottom: '5em',
  [theme.breakpoints.down('sm')]: {
    margin: '1em',
  },
  '& .row': {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));
const defaultFilterOptions = {
  people: {
    adult: 2,
  },
  sortBy: FILTER_CONSTANTS.ASC,
  search: '',
};
function App() {
  const [theme, colorMode] = useMode();
  const [data, setData] = React.useState([]);

  const [filterOptions, setfilterOptions] =
    React.useState(defaultFilterOptions);

  //---------used for pagination--------------------------
  const [currentPage, setCurrentPage] = React.useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);

  const nPage = Math.ceil(data.length / recordsPerPage);
  //----------------
  React.useEffect(() => {
    // The AbortController interface represents a controller object that allows you to abort one or
    // more Web requests as and when desired.
    const controller = new AbortController();
    const fetchData = async (controller) => {
      try {
        // make api call here to get the list of hotels
        const signal = controller.signal;
        const { hotels: data } = await API.getHotels(signal);
        // everytime filtering is set, it should make the api call and filter the data and set accordinly
        const filteredData = filtersBasedOnOptions(data, filterOptions);
        setData(filteredData);
      } catch (error) {
        console.error('error: ', error);
      }
    };
    fetchData(controller);
    return () => {
      controller.abort();
    };
  }, [filterOptions]);

  const filtersBasedOnOptions = (data, filterOptions) => {
    if (isEmpty(filterOptions)) {
      // if no options are set then return the data from the api
      return data;
    }

    let sortedHotels = [...data];
    //search via text
    if (filterOptions.search !== '') {
      sortedHotels = filterByText(sortedHotels, filterOptions.search);
    }
    // filter people
    if (filterOptions.people) {
      sortedHotels = filterByNumerOfAdults(
        sortedHotels,
        filterOptions.people.adult
      );
    }
    // sorting
    if (filterOptions.sortBy === FILTER_CONSTANTS.ASC) {
      sortedHotels = sortByLow(sortedHotels);
    } else if (filterOptions.sortBy === FILTER_CONSTANTS.DESC) {
      sortedHotels = sortByHigh(sortedHotels);
    } else if (filterOptions.sortBy === FILTER_CONSTANTS.ASCSTAR) {
      sortedHotels = sortAscByNumerOfStars(sortedHotels);
    } else if (filterOptions.sortBy === FILTER_CONSTANTS.DESCSTAR) {
      sortedHotels = sortDescByNumerOfStars(sortedHotels);
    }

    return sortedHotels;
  };

  const paginationChanged = (_, page) => {
    setCurrentPage(page);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Header />
        <Container>
          <Offers />
          <FeaturedCountries />
          <MiddleSection>
            <Wrapper>
              <SideContainer>
                <div id="sticky-container">
                  <div id="hide-search-box">
                    {/* filter controls */}
                    <FilterControl
                      setfilterOptions={setfilterOptions}
                      defaultFilterOptions={defaultFilterOptions}
                    />
                  </div>
                </div>
              </SideContainer>

              <HotelContainer>
                {/* list of hotels */}

                <Main>
                  <h2>
                    Australia: {data?.length ? data.length : 0} Properties Found
                  </h2>

                  <Grid
                    container
                    spacing={{ xs: 2, md: 6 }}
                    columns={{ xs: 1, sm: 8, md: 12 }}
                    rowGap={'50px'}
                  >
                    {records &&
                      records.map((hotel, index) => (
                        <Grid
                          item
                          xs={1}
                          sm={6}
                          md={6}
                          key={index}
                          className="row"
                        >
                          {/* These are extra images for the purpose of UI demo. In real app, this array of images can be extrapolated with hotel data for different hotels */}
                          <Card hotel={hotel} extraImages={extraImages} />
                        </Grid>
                      ))}
                  </Grid>
                </Main>
                <PaginationContainer>
                  <Pagination
                    count={nPage} // total no of items per page
                    page={currentPage}
                    onChange={paginationChanged}
                    variant="outlined"
                    shape="rounded"
                    size="large"
                  />
                </PaginationContainer>
              </HotelContainer>
            </Wrapper>
          </MiddleSection>
          <Subscribe />
        </Container>
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
