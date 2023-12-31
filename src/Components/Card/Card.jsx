import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Rating, Stack } from '@mui/material';
import {
  ArrowBackIos,
  ArrowForwardIos,
  Close,
  NavigateNextOutlined,
} from '@mui/icons-material';
import { Button } from '../Button/Button';

const Col = styled('div')(({ theme }) => ({
  position: 'relative',
  minHeight: '1px',
  paddingRight: '15px',
  paddingLeft: '15px',
  [theme.breakpoints.up('lg')]: {
    width: '50%',
    float: 'left',
  },
  '&:first-of-type': {
    [theme.breakpoints.down('sm')]: {
      order: 1,
    },
  },
}));
const TextLeft = styled('div')(({ theme }) => ({
  position: 'relative',
  boxShadow: '2px 2px 34px -6px rgba(0, 0, 0, 0.66)',
  width: '400px',
  overflowY: 'auto',
  padding: '50px 50px',
  textAlign: 'left',
  borderRadius: '3px',
  background: 'white',
  opacity: 0.7,
  zIndex: 10,
  height: '550px',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    height: '250px',
    order: 1,
  },
  '& > h1': {
    marginTop: 0,
    fontSize: '3rem',
    marginBottom: '0.5rem',
    // fontWeight: 500,
    lineHeight: 1.2,
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
  [theme.breakpoints.down('sm')]: {
    width: 'inherit',
  },
}));

const Line = styled('div')(({ theme }) => ({
  display: 'inline-block',
  height: '6px',
  width: '100px',
  background: theme.palette.primary.light,
}));
const OfferContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  // flexWrap: 'wrap',
  [theme.breakpoints.down('sm')]: {
    // fontSize: '20px',
    gap: '10px',
    flexWrap: 'wrap',
  },
}));
const PriceContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  '& .cardButton': {
    background: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: '15px 0 15px 0',
  },
}));
const Price = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  '& > h2': {
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
    },
  },
  '& > span': {
    fontSize: '13px',
    margin: '3px 0px',
  },
}));
const StarIconContainer = styled('div')(({ theme }) => ({
  '& .star-icon': {
    fontSize: '22px',
    color: '#fdbd0c',
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px',
    },
  },
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
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    margin: '0px',
  },
}));

const ImageContainer = styled('div')(({ theme }) => ({
  '& .img-right': {
    cursor: 'pointer',
    '& > img': {
      position: 'absolute',
      top: '2vmin',
      left: '-10vmin',
      width: '105%',
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

// CSS For Slider

const Slider = styled('div')(() => ({
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  position: 'fixed',
  top: '0px',
  left: '0px',
  zIndex: 9999,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Slides = styled('div')(({ theme }) => ({
  boxShadow: '0px 0px 15px 12px rgb(0 0 0 / 45%)',
  width: '82%',
  height: '85vh',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    width: '99vw',
    height: '99vh',
  },
  [theme.breakpoints.down('xs')]: {
    width: '97vw',
  },
  '& > img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  '& .arrow-icon': {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'white',
    fontSize: '40px',
    cursor: 'pointer',

    '&:hover': {
      color: '#2874f0',
    },
  },
  '& .left': {
    left: '-60px',

    [theme.breakpoints.down('sm')]: {
      left: '20px',
    },
  },

  '& .right': {
    right: '-60px',

    [theme.breakpoints.down('sm')]: {
      right: '20px',
    },
  },
  '& .close-icon': {
    boxShadow: '0px 0px 5px 4px rgb(0 0 0 / 25%)',
    backgroundColor: 'white',
    borderRadius: '50%',
    position: 'absolute',
    top: '-25px',
    right: '-25px',
    fontSize: '40px',
    padding: '5px',
    cursor: 'pointer',

    [theme.breakpoints.down('sm')]: {
      top: '10px',
      left: '50%',
      transform: 'translateX(-50%)',
    },

    '&:hover': {
      backgroundColor: '#2874f0',
      color: 'white',
    },
  },
}));

const Card = ({ hotel, extraImages }) => {
  const [openSlider, setOpenSlider] = React.useState(false);
  const [slideNumber, setSlideNumber] = React.useState(0);

  const openImageSlider = (index) => {
    setSlideNumber(index);
    setOpenSlider(true);
  };

  const handleSlide = (direction) => {
    if (direction === 'right') {
      setSlideNumber(slideNumber === 0 ? 7 : slideNumber - 1);
    } else {
      setSlideNumber(slideNumber === 7 ? 0 : slideNumber + 1);
    }
  };
  return (
    <>
      <Col>
        <Box display={'flex'}>
          <TextLeft>
            <h1 className="text-black">{hotel.name}</h1>
            <Line></Line>
            <span>
              {hotel.location.city},{hotel.location.country}
            </span>
            <StarIconContainer>
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  max={5}
                  value={hotel.rating.value}
                  precision={0.5}
                  readOnly
                />
              </Stack>
            </StarIconContainer>
            <OfferContainer display={'flex'}>
              {hotel.inclusions.map((offer, index) => (
                <OfferInfo key={index}>{offer}</OfferInfo>
              ))}
            </OfferContainer>

            <PriceContainer>
              <Price>
                <span>{`Sleeps: ${hotel.sleep}`}</span>
                <span>
                  {hotel.price.stay.adults} Adults,
                  {` ${hotel.price.stay.children} Children`}
                  {` ${hotel.price.stay.infants} Infants`}
                </span>
                <h2>
                  {hotel.price.total.currency} {hotel.price.total.amount}
                </h2>
              </Price>
              <Button
                text={'More photos'}
                className={'cardButton'}
                icon={NavigateNextOutlined}
                onClick={() => openImageSlider(0)}
              />
            </PriceContainer>
          </TextLeft>
        </Box>
      </Col>

      <Col>
        <ImageContainer>
          <div className="img-right">
            <img
              src={hotel.heroImage}
              alt="bike"
              onClick={() => openImageSlider(0)}
            />
          </div>
        </ImageContainer>
      </Col>
      {openSlider && (
        <Slider>
          <Slides>
            <ArrowBackIos
              className="arrow-icon left"
              onClick={() => handleSlide('left')}
            />
            <ArrowForwardIos
              className="arrow-icon right"
              onClick={() => handleSlide('right')}
            />
            <Close
              className="close-icon"
              onClick={() => setOpenSlider(false)}
            />

            <img src={extraImages[slideNumber]} alt="hotel" />
          </Slides>
        </Slider>
      )}
    </>
  );
};

export default Card;
