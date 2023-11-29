import { alpha, styled } from '@mui/material/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

const OfferTextBannerStyled = styled('div')(({ theme }) => ({
  backgroundColor: alpha(theme.palette.background.paper, 0.2),
  borderRadius: '15px',
  marginTop: '50px',
  padding: '20px 10px',
  textAlign: 'center',
  display: 'flex',
  height: '60vh',
  flexDirection: 'column',
  justifyContent: 'center',
  [theme.breakpoints.down('lg')]: {
    marginTop: '5px',
    padding: '10px',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '0px',
    padding: '2px',
    height: '18vh',
  },
  '& > h2': {
    fontSize: '30px',
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down('md')]: {
      fontSize: '22px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px',
      fontWeight: 500,
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  '& > h1': {
    fontSize: '65px',
    margin: '0px 0px 20px',
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down('lg')]: {
      margin: '0px 0px 15px',
      fontSize: '55px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
      margin: '0px 0px 5px',
    },
    [theme.breakpoints.down('xs')]: {
      fontWeight: 500,
      fontSize: '13px',
    },
  },
}));

const OfferTextBanner = ({ primaryText, secondaryText }) => {
  return (
    <OfferTextBannerStyled>
      <h2> {secondaryText}</h2>
      <h1>{primaryText}</h1>
      <Link to="/hotels">
        <Button text={'Explore Offers'} size="large" variant="outlined" />
      </Link>
    </OfferTextBannerStyled>
  );
};

export default OfferTextBanner;
