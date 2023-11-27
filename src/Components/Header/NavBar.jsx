import React from 'react';
import { styled } from '@mui/material/styles';
import { LOGO_CSS } from '../../Constants/CssConstants';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import {
  AirportShuttleOutlined,
  AttractionsOutlined,
  BedOutlined,
  ConnectingAirportsOutlined,
  CurrencyExchangeOutlined,
  DirectionsCarOutlined,
  HelpOutlineOutlined,
  HotelOutlined,
  HowToRegOutlined,
  LoginOutlined,
  LogoutOutlined,
  NightShelterOutlined,
  SearchOutlined,
  TranslateOutlined,
} from '@mui/icons-material';
import OfferTextBanner from '../OfferTextBanner/OfferTextBanner';

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
// ----------------Mobile Hamburger Icon Style--------------------
const ImgAndHamburgerContainerIcon = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
  '& > img': {
    backgroundColor: 'whitesmoke',
    borderRadius: '50%',
    width: '38px',
    height: '38px',
    objectFit: 'cover',
  },

  '& .hamburger': {
    width: '32px',
    height: '27px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: '20px',
    cursor: 'pointer',

    '& > span': {
      backgroundColor: 'white',
      width: '100%',
      height: '4px',
      transformOrigin: 'left',
      transition: 'all 0.2s ease',
    },
  },
  '& .close-hamburger': {
    '& > span': {
      '&:first-of-type': {
        transform: 'rotate(45deg)',
      },

      '&:nth-of-type(2)': {
        opacity: 0,
      },

      '&:last-of-type': {
        transform: 'rotate(-45deg)',
      },
    },
  },
}));

const SecondNavContainer = styled('nav')(({ theme, openMenu }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '77px',
  [theme.breakpoints.down('md')]: {
    height: '50px',
  },
  [theme.breakpoints.down('sm')]: {
    backgroundColor: '#00224f',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'fixed',
    top: '60px',
    right: '0px',
    width: '100vw',
    height: 'calc(100vh - 60px)',
    overflowY: 'scroll',
    padding: '10px 30px',
    transform: `translateX(${openMenu ? 0 : 100}vw)`,
    // transform: translateX(${({ openMenu }) => (openMenu ? 0 : 100)}vw),
    transition: 'all 0.2s ease-out',
  },
  '& > h3': {
    padding: '15px 5px',
    borderBottom: '1px solid #4f5874',
    width: '100%',
    color: theme.palette.primary.contrastText,
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  '& > ul': {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    color: theme.palette.primary.contrastText,
    '&.hidden-ul': {
      display: 'none',
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
      },
    },

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      order: 2,
      width: '100%',
      borderBottom: '1px solid #4f5874',
      padding: '5px 0px',
      '&:lastchild': {
        borderBottom: 'none',
      },
    },
    '& .link': {
      textDecoration: 'none',
      color: 'white',
      [theme.breakpoints.down('sm')]: {
        margin: '5px 0px',
      },
    },

    '& li': {
      border: '1px solid transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '15px',
      padding: '10px 14px',
      fontSize: '18px',
      cursor: 'pointer',
      color: theme.palette.primary.contrastText,
      [theme.breakpoints.down('lg')]: {
        marginRight: '5px',
        padding: '6px 12px',
        fontSize: '15px',
      },
      [theme.breakpoints.down('md')]: {
        marginRight: '3px',
        padding: '2px 7px',
        fontSize: '14px',
      },
      [theme.breakpoints.down('sm')]: {
        border: 'none',
        backgroundColor: 'transparent',
      },
      '&:hover': {
        border: '1px solid white',
        borderRadius: '30px',
        [theme.breakpoints.down('sm')]: {
          border: 'none',
          borderRadius: 0,
        },
      },
      '&.active': {
        border: '1px solid white',
        borderRadius: '30px',
        [theme.breakpoints.down('sm')]: {
          border: 'none',
          borderRadius: 0,
        },
      },
      '& .li-icon': {
        marginRight: '8px',

        /* For Mobile Phone */
        [theme.breakpoints.down('sm')]: {
          marginRight: '12px',
        },
      },
    },
  },
}));

const NavBar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <>
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
        <ImgAndHamburgerContainerIcon>
          <img src="/images/boydp.jpg" alt="boydp" />
          <div
            className={`hamburger ${openMenu && 'close-hamburger'}`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </ImgAndHamburgerContainerIcon>
      </NavContainer>
      <SecondNavContainer openMenu={openMenu}>
        <ul>
          <Link to="/hotels" className="link">
            <li className="active">
              <BedOutlined className="li-icon" />
              Stays
            </li>
          </Link>
          <Link to="/hotels" className="link">
            <li>
              <ConnectingAirportsOutlined className="li-icon" />
              Flights
            </li>
          </Link>
          <Link to="/hotels" className="link">
            <li>
              <HotelOutlined className="li-icon" />
              Hotels
            </li>
          </Link>
          <Link to="/hotel/5" className="link">
            <li>
              <DirectionsCarOutlined className="li-icon" />
              Car Rentals
            </li>
          </Link>
          <Link to="/hotels" className="link">
            <li>
              <AttractionsOutlined className="li-icon" />
              Attractions
            </li>
          </Link>
          <Link to="/hotel/4" className="link">
            <li>
              <AirportShuttleOutlined className="li-icon" />
              Airport Taxis
            </li>
          </Link>
        </ul>

        <h3>Hello, HR</h3>

        <ul className="hidden-ul">
          <Link to="/hotels" className="link">
            <li>
              <SearchOutlined className="li-icon" />
              Search Hotels
            </li>
          </Link>
          <Link to="/register" className="link">
            <li className="active">
              <NightShelterOutlined className="li-icon" />
              List Your Property
            </li>
          </Link>
          <Link to="/hotel/3" className="link">
            <li>
              <CurrencyExchangeOutlined className="li-icon" />
              Currency Exchange
            </li>
          </Link>
          <Link to="/hotels" className="link">
            <li>
              <TranslateOutlined className="li-icon" />
              Language
            </li>
          </Link>
          <Link to="/hotel/5" className="link">
            <li>
              <HelpOutlineOutlined className="li-icon" />
              Help
            </li>
          </Link>
        </ul>

        <ul className="hidden-ul">
          <Link to="/register" className="link">
            <li>
              <HowToRegOutlined className="li-icon" />
              Register
            </li>
          </Link>
          <Link to="/login" className="link">
            <li>
              <LoginOutlined className="li-icon" />
              Login
            </li>
          </Link>
          <Link to="/hotel/4" className="link">
            <li>
              <LogoutOutlined className="li-icon" />
              Logout
            </li>
          </Link>
        </ul>
      </SecondNavContainer>
      <OfferTextBanner
        primaryText={'Save 15% with Special Offers'}
        secondaryText={'Available until next month 2023'}
      />
    </>
  );
};

export default NavBar;
