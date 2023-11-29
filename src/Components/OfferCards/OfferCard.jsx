import React from 'react';
import { styled } from '@mui/material/styles';
import { offerData } from './data';

const Container = styled('div')(() => ({}));
const OfferInfo = styled('div')(({ theme }) => ({
  '& > h1': {
    fontSize: '30px',
    fontWeight: 900,
    margin: 0,
    [theme.breakpoints.down('lg')]: {
      fontSize: '25px',
    },
  },
  '& > p': {
    color: theme.palette.text.secondary,
    fontSize: '16px',
    margin: '0px 0px 12px 4px',
    [theme.breakpoints.down('lg')]: {
      fontSize: '15px',
    },
  },
}));
const CardContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '5px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    padding: '0px',
  },
}));
const TextContainer = styled('div')(({ theme }) => ({
  backgroundColor: '#00000021',
  width: '100%',
  height: '100%',
  borderRadius: '10px',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 10px',
  color: 'white',
  [theme.breakpoints.down('md')]: {
    padding: '10px',
  },
  '& > h2': {
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },
  '& > span': {
    fontSize: '16px',
    margin: '5px 0px 0px',
    [theme.breakpoints.down('md')]: {
      fontSize: '15px',
    },
  },
}));

const Card = styled('div')(({ theme }) => ({
  boxShadow: '0px 0px 6px 1px rgba(0, 0, 0, 0.6)',
  position: 'relative',
  flex: 1,
  height: '184px',
  borderRadius: '10px',
  [theme.breakpoints.down('md')]: {
    height: '160px',
  },
  [theme.breakpoints.down('sm')]: {
    flex: 'none',
    width: '100%',
  },
  '&:first-of-type': {
    marginRight: ' 30px',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginBottom: '20px',
    },
  },
  '& > img': {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
  },
}));
const Button = styled('div')(({ theme }) => ({
  border: '1px solid white',
  backgroundColor: '#00000061',
  width: '150px',
  marginTop: '20px',
  padding: '9px 10px',
  fontWeight: 600,
  fontSize: '15px',
  color: 'white',
  cursor: 'pointer',
  [theme.breakpoints.down('lg')]: {
    width: '130px',
    padding: '7px',
    fontSize: '13px',
    marginTop: '12px',
  },

  '& .bigBtn': {
    width: '190px',
    [theme.breakpoints.down('lg')]: {
      width: '160px',
    },
  },
  '&:hover': {
    backgroundColor: 'transparent',
  },
}));

const Offers = () => {
  return (
    <Container>
      <OfferInfo>
        <h1>Offers</h1>
        <p>Promotions, deals and special offers for you</p>

        <CardContainer>
          {offerData.map((offer, index) => (
            <Card key={index}>
              <img src={offer.img} alt="flight" />
              <TextContainer>
                <h2>{offer.title}</h2>
                <span>{offer.description}</span>
                <Button type="button">{offer.buttonText}</Button>
              </TextContainer>
            </Card>
          ))}
        </CardContainer>
      </OfferInfo>
    </Container>
  );
};

export default Offers;
