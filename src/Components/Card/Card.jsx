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
  width: 'inherit',
  padding: '100px 50px',
  textAlign: 'left',
  borderRadius: '3px',
  background: 'white',
  opacity: 0.7,
  zIndex: 10,
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
}));

const Line = styled('div')(({ theme }) => ({
  display: 'inline-block',
  height: '6px',
  width: '100px',
  background: 'firebrick',
}));
const Text = styled('div')(({ theme }) => ({
  paddingTop: '1.5rem',
}));

const ImageContainer = styled('div')(({ theme }) => ({
  '& .food-right': {
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
      [theme.breakpoints.down('xl')]: {
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
            <Line></Line>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              pariatur illum inventore at quo ullam doloribus esse repudiandae
              vitae recusandae accusamus est blanditiis.
            </Text>
            <button class="btn btn-primary pt-3 pb-3 mt-5">Read more..</button>
          </TextLeft>
        </Box>
      </Col>

      <Col>
        <ImageContainer>
          <div className="food-right">
            <img src={hotel.heroImage} alt="bike" />
          </div>
        </ImageContainer>
      </Col>
    </>
  );
};

export default Card;
