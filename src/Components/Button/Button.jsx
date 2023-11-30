import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';

const StyledButton = styled(MuiButton)(({ theme, props }) => ({
  ...props,
  border: '1px solid white',
  backgroundColor: theme.palette.background.paper,
  padding: '10px 20px',
  marginRight: '10px',
  fontSize: '1.2em',
  fontWeight: 600,
  cursor: 'pointer',

  [theme.breakpoints.down('sm')]: {
    padding: '7px',
    marginRight: '7px',
    fontSize: '13px',
    // width: '70px',
  },
  '&:hover': {
    color: theme.palette.primary.contrastText,
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
      backgroundColor: alpha(theme.palette.background.paper, 0.2),
    },
  },
}));

export const Button = ({ text, icon: Icon, ...rest }) => {
  return (
    <StyledButton {...rest}>
      {text} {Icon ? <Icon /> : null}
    </StyledButton>
  );
};
