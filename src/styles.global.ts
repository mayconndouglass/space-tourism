import { createGlobalStyle, css } from "styled-components"

import homeDesktop from '../public/assets/home/background-home-desktop.jpg'
import homeTablet from '../public/assets/home/background-home-tablet.jpg'
import homeMobile from '../public/assets/home/background-home-mobile.jpg'
import crewDesktop from '../public/assets/crew/background-crew-desktop.jpg'
import crewTablet from '../public/assets/crew/background-crew-tablet.jpg'
import crewMobile from '../public/assets/crew/background-crew-mobile.jpg'
import destinationDesktop from '../public/assets/destination/background-destination-desktop.jpg'
import destinationTablet from '../public/assets/destination/background-destination-tablet.jpg'
import destinationMobile from '../public/assets/destination/background-destination-mobile.jpg'
import technologyDesktop from '../public/assets/technology/background-technology-desktop.jpg'
import technologyTablet from '../public/assets/technology/background-technology-tablet.jpg'
import technologyMobile from '../public/assets/technology/background-technology-mobile.jpg'

interface BackgroundImage {
  routeSelected: 'home' | 'crew' | 'destination' | 'technology'
}

const backgroundVariants = {
  home: {
    desktop: homeDesktop,
    tablet: homeTablet,
    mobile: homeMobile
  },
  crew: {
    desktop: crewDesktop,
    tablet: crewTablet,
    mobile: crewMobile
  },
  destination: {
    desktop: destinationDesktop,
    tablet: destinationTablet,
    mobile: destinationMobile
  },
  technology: {
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
      || backgroundVariants.home

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
