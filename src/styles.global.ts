import { createGlobalStyle, css } from "styled-components"

import homeDesktop from './assets/home/background-home-desktop.jpg'
import homeTablet from './assets/home/background-home-tablet.jpg'
import homeMobile from './assets/home/background-home-mobile.jpg'
import crewDesktop from './assets/crew/background-crew-desktop.jpg'
import crewTablet from './assets/crew/background-crew-tablet.jpg'
import crewMobile from './assets/crew/background-crew-mobile.jpg'
import destinationDesktop from './assets/destination/background-destination-desktop.jpg'
import destinationTablet from './assets/destination/background-destination-tablet.jpg'
import destinationMobile from './assets/destination/background-destination-mobile.jpg'
import technologyDesktop from './assets/technology/background-technology-desktop.jpg'
import technologyTablet from './assets/technology/background-technology-tablet.jpg'
import technologyMobile from './assets/technology/background-technology-mobile.jpg'

interface BackgroundImage {
  routeSelected: 'Home' | 'Crew' | 'Destination' | 'Technology'
}

const backgroundVariants = {
  Home: {
    desktop: homeDesktop,
    tablet: homeTablet,
    mobile: homeMobile
  },
  Crew: {
    desktop: crewDesktop,
    tablet: crewTablet,
    mobile: crewMobile
  },
  Destination: {
    desktop: destinationDesktop,
    tablet: destinationTablet,
    mobile: destinationMobile
  },
  Technology: {
    desktop: technologyDesktop,
    tablet: technologyTablet,
    mobile: technologyMobile
  }
}

export const GlobalStyle = createGlobalStyle<BackgroundImage>`
  :root {
    --dark-color: #0B0D17;
    --light-color:#D0D6F9;
    --white-color:#FFFFFF;

    --font-bellefair: 'Bellefair';
    --font-barlow-condensed: 'Barlow Condensed';
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--white-color);
  }

  body {
    ${({ routeSelected }) => {
      const selected = backgroundVariants[routeSelected]
        || backgroundVariants.Home
      
      return css`
        background-image: url(${selected.desktop});
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;

        @media (max-width: 768px) {
          background-image: url(${selected.tablet});
        }

        @media (max-width: 375px) {
          background-image: url(${selected.mobile});
        }
      `;
      }
    }
  }
`
