import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const Col = styled('div')(({ theme }) => ({
  position: 'relative',
  minHeight: '1px',
  paddingRight: '15px',
  paddingLeft: '15px',
  [theme.breakpoints.up('lg')]: {
    width: '50%',
    float: 'left',
  },
  '&:first-child': {
    [theme.breakpoints.down('sm')]: {
      order: 1,
    },
  },
}));
const TextLeft = styled('div')(({ theme }) => ({
  position: 'relative',
  boxShadow: '2px 2px 34px -6px rgba(0, 0, 0, 0.66)',
  width: '450px',
  overflowY: 'auto',
  padding: '100px 50px',
  textAlign: 'left',
  borderRadius: '3px',
  background: 'white',
  opacity: 0.7,
  zIndex: 10,
  maxHeight: '350px',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    order: 1,
  },
  '& > h1': {
    marginTop: 0,
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
    // fontWeight: 500,
    lineHeight: 1.2,
  },
  [theme.breakpoints.down('sm')]: {
    width: 'inherit',
  },
}));

const Line = styled('div')(({ theme }) => ({
  display: 'inline-block',
  height: '6px',
  width: '100px',
  background: 'firebrick',
}));
const OfferContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '2px',
  flexWrap: 'wrap',
}));

const OfferInfo = styled('div')(({ theme }) => ({
  borderRadius: '10px 0px 10px 0px',
  backgroundColor: theme.palette.secondary.main,
  color: 'white',
  fontSize: '12.5px',
  padding: '2px',
  width: '125px',
  textAlign: 'center',
  margin: '20px 0px',
}));

const ImageContainer = styled('div')(({ theme }) => ({
  '& .img-right': {
    '& > img': {
      position: 'absolute',
      top: '2vmin',
      left: '-10vmin',
      width: '100%',
      opacity: '0.7',
      borderRadius: '0.2em',
      boxShadow: '2px 2px 34px -6px rgba(0, 0, 0, 0.66)',
      zIndex: 1,
      [theme.breakpoints.down('sm')]: {
        position: 'initial',
        height: 'initial',
        width: '100%',
      },
    },
  },
}));
const Card = ({ hotel }) => {
  return (
    <>
      <Col>
        <Box display={'flex'}>
          <TextLeft>
            <h1 class="text-black">{hotel.name}</h1>
            <span>
              {hotel.location.city},{hotel.location.country}
            </span>
            <Line></Line>
            <OfferContainer display={'flex'}>
              {hotel.inclusions.map((offer) => (
                <OfferInfo>{offer}</OfferInfo>
              ))}
            </OfferContainer>
          </TextLeft>
        </Box>
      </Col>

      <Col>
        <ImageContainer>
          <div className="img-right">
            <img src={hotel.heroImage} alt="bike" />
          </div>
        </ImageContainer>
      </Col>
    </>
  );
};

export default Card;
