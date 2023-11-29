import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { featuredCountryData } from '../../dummyData';

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '30px',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '10px',
  },
  '& > h1': {
    fontSize: '30px',
    marginBottom: 0,

    [theme.breakpoints.down('lg')]: {
      fontSize: '25px',
    },
  },
  '& > p': {
    color: theme.palette.text.secondary,
    fontSize: '16px',
    margin: '2px 0px 12px 3px',

    [theme.breakpoints.down('md')]: {
      fontSize: '15px',
    },
  },
}));

const Wrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const BigImgContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const BigImg = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '50%',
  height: '320px',
  overflow: 'hidden',
  borderRadius: '10px',
  boxShadow: '0px 0px 6px 1px rgba(0, 0, 0, 0.6)',
  [theme.breakpoints.down('md')]: {
    height: '275px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
  '&:first-of-type': {
    marginRight: '12px',
    [theme.breakpoints.down('sm')]: {
      marginRight: '0px',
      marginBottom: '12px',
    },
  },
}));

const Image = styled('img')(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'all 0.3s ease-in',
  ' &:hover': {
    transform: 'scale(1.02)',
  },
}));

const SmallImgContainer = styled(BigImgContainer)(() => ({
  marginTop: '12px',
}));

const SmallImg = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '34%',
  height: '320px',
  marginRight: '12px',
  boxShadow: '0px 0px 6px 1px rgba(0, 0, 0, 0.6)',

  overflow: 'hidden',
  '&:last-of-type': {
    marginRight: 0,
  },
  [theme.breakpoints.down('md')]: {
    height: '275px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '230px',
    width: '100%',
    margin: '0px 0px 12px',
  },
  [theme.breakpoints.down('xs')]: {
    width: '100%',
    margin: '0px 0px 12px',
  },
}));

const Text = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: '10px',
  left: '0px',
  padding: '3px 10px',
  color: 'white',
  backgroundColor: '#00000091',
  textShadow: '0px 0px 8px rgba(0, 0, 0, 1)',
  '& > h4': {
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
    },
  },
  '& > span': {
    fontSize: '15px',
    color: '#efeded',
    fontWeight: '500',

    [theme.breakpoints.down('md')]: {
      fontSize: '13px',
    },
  },
}));

const FeaturedCountries = () => {
  return (
    <Container>
      <h1>Explore World</h1>
      <p>Get inspiration for your next trip.</p>
      <Wrapper>
        <BigImgContainer>
          {featuredCountryData.slice(0, 2).map((country) => (
            <BigImg key={country.id}>
              <Link to="/hotels">
                <Image src={country.img} alt="" />
                <Text>
                  <h4>{country.country} :</h4>
                  <span>{country.desc.slice(0, 125)}...</span>
                </Text>
              </Link>
            </BigImg>
          ))}
        </BigImgContainer>

        <SmallImgContainer>
          {featuredCountryData.slice(2, 5).map((country) => (
            <SmallImg key={country.id}>
              <Link to="/hotels">
                <Image src={country.img} alt="" />
                <Text>
                  <h4>{country.country} :</h4>
                  <span>{country.desc.slice(0, 90)}...</span>
                </Text>
              </Link>
            </SmallImg>
          ))}
        </SmallImgContainer>
      </Wrapper>
    </Container>
  );
};

export default FeaturedCountries;
