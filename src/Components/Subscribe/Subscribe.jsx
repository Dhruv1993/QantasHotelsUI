import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const Container = styled('div')(({ theme }) => ({
  border: '1px solid #eaeaea',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '320px',
  position: 'relative',
  overflow: 'hidden',
  padding: '0px 20px 0px 120px',

  [theme.breakpoints.down('lg')]: {
    height: '285px',
  },

  [theme.breakpoints.down('md')]: {
    height: '230px',
  },
}));

const BlueCircle = styled('div')(({ theme }) => ({
  width: '80px',
  height: '80px',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '50%',
  position: 'absolute',
  top: '20px',
  left: '20px',
  animation: 'changeBlueCircle 3s infinite',
  '@keyframes changeBlueCircle': {
    '50%': {
      backgroundColor: '#feba02',
    },
    '100%': {
      backgroundColor: '#1675de',
    },
  },
}));
const YellowCircle = styled('div')(({ theme }) => ({
  width: '115px',
  height: '115px',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '50%',
  position: 'absolute',
  bottom: '50px',
  left: '-40px',
  animation: 'changeYellowCircle 3s infinite',
  '@keyframes changeYellowCircle': {
    '50%': {
      backgroundColor: '#1675de',
    },
    '100%': {
      backgroundColor: '#feba02',
    },
  },
}));

const BigBlueCircle = styled('div')(({ theme }) => ({
  backgroundColor: '#1675de',
  borderRadius: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '520px',
  height: '520px',
  [theme.breakpoints.down('lg')]: {
    height: '225px',
    width: '225px',
  },
  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translate(-50%, 0)',
  },
}));

const TextContainer = styled('div')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textAlign: 'center',
  marginBottom: '15px',
  '& > h1': {
    [theme.breakpoints.down('lg')]: {
      fontSize: '20px',
    },
  },
  '& > span': {
    [theme.breakpoints.down('lg')]: {
      fontSize: '13px',
      fontWeight: 500,
    },
  },
}));

const BtnContainer = styled('div')(({ theme }) => ({
  display: 'flex',

  '& .link:first-of-type': {
    marginRight: '15px',
  },

  '& > button': {
    border: '1px solid white',
    backgroundColor: 'white',
    width: '105px',
    padding: '9px 10px',
    color: '#1675de',
    fontWeight: 600,
    fontSize: '16px',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      border: '1px solid #1675de',
      padding: '7px',
      fontSize: '13px',
    },
    '&:hover': {
      color: 'white',
      backgroundColor: 'transparent',
      [theme.breakpoints.down('md')]: {
        color: '#1675de',
        backgroundColor: 'white',
      },
    },
  },
}));

const ImgContainer = styled('div')(({ theme }) => ({
  width: '440px',
  marginLeft: '50px',
  [theme.breakpoints.down('md')]: {
    marginLeft: '25px',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
  '& > img': {
    width: '100%',
    objectFit: 'cover',
  },
}));

const Subscribe = () => {
  return (
    <Container>
      <BlueCircle></BlueCircle>

      <YellowCircle></YellowCircle>

      <BigBlueCircle>
        <TextContainer>
          <h1>Get instant discounts</h1>
          <span>Simply Sign in or Register to get instant discounts.</span>
        </TextContainer>
        <BtnContainer>
          <Link to="/login" className="link">
            <button type="button">Login</button>
          </Link>
          <Link to="/register" className="link">
            <button type="button">Register</button>
          </Link>
        </BtnContainer>
      </BigBlueCircle>

      <ImgContainer>
        <img src="/images/subscribe.png" alt="Subscribe" />
      </ImgContainer>
    </Container>
  );
};

export default Subscribe;
