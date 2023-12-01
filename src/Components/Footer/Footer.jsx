import {
  EmailOutlined,
  GitHub,
  LinkedIn,
  LocationOnOutlined,
  Call,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const Container = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.text.primary,
  padding: '15px',
}));

const TopContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '10px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const AboutMe = styled('div')(() => ({
  flex: 1,
}));

const PersonalInfo = styled('div')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: '1.5em',
  '& > h2': {
    [theme.breakpoints.down('lg')]: {
      fontSize: '21px',
    },
  },
}));

const ContactInfo = styled('div')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  margin: '15px 0px',
  [theme.breakpoints.down('lg')]: {
    margin: '8px 0px',
  },
}));

const Details = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  margin: '5px 0px',
  '& > span': {
    marginLeft: '4px',
  },
}));
const SocialMediaInfo = styled('div')(({ theme }) => ({
  '& .social-media-icon': {
    marginRight: '10px',
    color: '#f4bd02',
    fontSize: '32px',
  },
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    marginBottom: '15px',
  },
}));

const ImportantLinks = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  flex: 1,
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  '& .#hide-footer-links': {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  '& > ul': {
    listStyle: 'none',
    padding: '0px 15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('lg')]: {
      padding: '0px 5px',
    },
    '& li': {
      [theme.breakpoints.down('sm')]: {
        margin: '4px 0px',
      },
    },
    '& .link': {
      color: '#f2f2f2',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline 1px',
        textUnderlineOffset: '3px',
        [theme.breakpoints.down('sm')]: {
          textDecoration: 'none',
        },
      },
    },
  },
}));

const BottomContainer = styled('div')(() => ({}));
const CompanyLogoList = styled('ul')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  listStyle: 'none',

  '& > li': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: '5px',
    margin: '5px',
  },
}));

const Footer = () => {
  return (
    <Container>
      <TopContainer>
        <AboutMe>
          <PersonalInfo>
            <h2>Dhruv Khullar</h2>
            <span>
              Hi there ! I'm a React Developer. I love to create Webapps and
              learn new Web Technologies.
            </span>
          </PersonalInfo>

          <ContactInfo>
            <Details>
              <Call />
              <span>0426 381 739</span>
            </Details>
            <Details>
              <EmailOutlined />
              <span> dhruvkhullar25@gmail.com</span>
            </Details>
            <Details>
              <LocationOnOutlined />
              <span>Craigeburn,3064,Melbourne,Australia</span>
            </Details>
          </ContactInfo>

          <SocialMediaInfo>
            <a
              href="https://www.linkedin.com/in/dhruv-khullar"
              title="LinkedIn Profile"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn className="social-media-icon" />
            </a>
            <a
              href="https://www.github.com/Dhruv1993"
              title="GitHub Profile"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub className="social-media-icon" />
            </a>
          </SocialMediaInfo>
        </AboutMe>

        <ImportantLinks id="hide-footer-links">
          <ul>
            <li>
              <Link to="/" className="link">
                Hotels
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Resorts
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Apartments
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Cities
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Countries
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Airports
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/" className="link">
                Hotels
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Resorts
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Apartments
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Cities
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Countries
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Airports
              </Link>
            </li>
          </ul>
        </ImportantLinks>
      </TopContainer>

      <BottomContainer>
        <CompanyLogoList>
          <li>
            <img src="/images/companies/booking.png" alt="" />
          </li>
          <li>
            <img src="/images/companies/priceline.png" alt="" />
          </li>
          <li>
            <img src="/images/companies/kayak.png" alt="" />
          </li>
          <li>
            <img src="/images/companies/agoda.png" alt="" />
          </li>
          <li>
            <img src="/images/companies/rentalcars.png" alt="" />
          </li>
          <li>
            <img src="/images/companies/opentable.png" alt="" />
          </li>
        </CompanyLogoList>
      </BottomContainer>
    </Container>
  );
};

export default Footer;
