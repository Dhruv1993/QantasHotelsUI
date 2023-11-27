import React from 'react';
import { styled } from '@mui/material/styles';

const StyledButton = styled('button')(({ theme }) => ({
  border: '1px solid white',
  backgroundColor: 'white',
  width: ' 80px',
  padding: ' 9px 10px',
  marginRight: '10px',
  color: ' #1675de',
  fontWeight: 600,
  fontSize: '15px',
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    padding: '7px',
    marginRight: '7px',
    fontSize: '13px',
    width: '70px',
  },
  '&:hover': {
    color: 'white',
    backgroundColor: 'transparent',
  },
  '&.bigBtn': {
    backgroundColor: 'transparent',
    color: 'white',
    width: '150px',
    [theme.breakpoints.down('md')]: {
      width: '125px',
    },
    '&:hover': {
      backgroundColor: '#00000061',
    },
  },
}));

export const Button = ({ text, ...rest }) => {
  return <StyledButton {...rest}>{text}</StyledButton>;
};
