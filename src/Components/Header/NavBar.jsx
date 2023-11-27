import React from 'react';
import { styled } from '@mui/material/styles';
import { LOGO_CSS } from '../../Constants/CssConstants';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

const NavContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '60px',
}));

const LogoContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flex: '1',
  '& > span': {
    width: LOGO_CSS.width,
    fontSize: LOGO_CSS.fontSize,
    fontWeight: LOGO_CSS.fontWeight,
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down('md')]: {
      width: LOGO_CSS.md.width,
      fontSize: LOGO_CSS.md.fontSize,
    },
  },
}));

const BtnContainer = styled('div')(({ theme }) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  color: theme.palette.primary.contrastText,
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
  '& > span': {
    fontSize: '17px',
    margin: '0px 20px',
    cursor: 'pointer',
  },
  '& > img': {
    width: '26px',
    height: '26px',
    borderRadius: '50%',
    marginRight: '20px',
    cursor: 'pointer',
  },
  '&.help-icon': {
    fontSize: '28px',
    marginRight: '20px',
    cursor: 'pointer',
  },
}));

const NavBar = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <span>Qantas Hotels</span>
      </LogoContainer>
      <BtnContainer>
        <span>AUD</span>
        <img src="/images/flag.png" alt="Australia" />
        <Link to="/register">
          <Button text={'Register'}></Button>
        </Link>
        <Link to="/login">
          <Button text={'Login'}></Button>
        </Link>
      </BtnContainer>
    </NavContainer>
  );
};

export default NavBar;
