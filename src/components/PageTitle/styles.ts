import styled from 'styled-components'

export const PageTitle = styled.div`
  width: 382px;
  height: 34px;

  h4 {
    font-family: var(--font-barlow-condensed);
    font-size: 28px;
    font-weight: 400;
    line-height: 33.6px;
    letter-spacing: 4.72px;
    color: var(--white-color);
    
    span {
      font-weight: 700;
      opacity: 0.20;
    }
  }

  @media (max-width: 768px) {
    width: 272px;
    height: 24px;

    h4 {
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 3.38px;
    }
  }

  @media (max-width: 375px) {
    width: 221px;
    height: 19px;
    margin: 0 auto;
    text-align: center;

    h4 {
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;
    }
  }
`
