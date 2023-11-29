import React from 'react';
import { styled } from '@mui/material/styles';
import { HEADER_CSS } from '../../Constants/CssConstants';
import NavBar from './NavBar';

const Container = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  marginBottom: HEADER_CSS.mb,
  [theme.breakpoints.down('lg')]: {
    // down is matching screen widths less than or equal to set value
    marginBottom: HEADER_CSS.lb_mb,
  },
  [theme.breakpoints.up('sm')]: {
    marginBottom: HEADER_CSS.sm_mb,
  },
}));

const TopContainer = styled('div')(() => ({
  position: 'relative',
}));

const HeroContainer = styled('video')(() => ({
  zIndex: -1,
  width: '100%',
}));

const Wrapper = styled('header')(({ theme }) => ({
  color: theme.palette.primary.main,
  padding: HEADER_CSS.padding,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  position: 'absolute',
  top: '0px',
  zIndex: 11,
  [theme.breakpoints.down('lg')]: {
    padding: HEADER_CSS.lg_padding,
  },
  [theme.breakpoints.down('md')]: {
    padding: HEADER_CSS.md_padding,
  },
}));

const Header = () => {
  return (
    <Container>
      <TopContainer>
        <HeroContainer
          poster="/images/vidposter.png"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hotel.mp4" type="video/mp4" />
        </HeroContainer>
        <Wrapper>
          <NavBar />
        </Wrapper>
      </TopContainer>
    </Container>
  );
};

export default Header;
