import styled from 'styled-components'

export const ContainerArea = styled.section`
  width: 80%;
  margin: 72px auto 118px;
  max-width: 1440px;

  @media (min-width: 1441px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60vh;
  }

  @media (max-width: 768px) {
    margin: 40px auto 60px;
  }

  @media (max-width: 375px) {
    margin: 24px auto 32px;
  }
`

export const PageMenu = styled.div`
  margin: 64px auto 0;
  grid-column: 2;

  width: 100%;
  height: 34px;

  ul {
    display: flex;
    gap: 35px;

    @media (max-width: 375px) {
      gap: 26px;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    order: 2;
    margin: 53px auto 0;
  }

  @media (max-width: 375px) {
    width: 237px;
    height: 28px;
    margin-top: 24px;
  }
`
interface isSelectedProps {
  isSelected: boolean
}

export const LiItem = styled.li<isSelectedProps>`
  font-family: var(--font-barlow-condensed);
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 2.7px;
  color: var(--light-color);
  font-style: normal;
  line-height: 19.2px;
  cursor: pointer;
  padding: 4px;
  position: relative;

  &::before {
    content: '';
    background-color: var(--white-color);
    color: var(--white-color);
    width: calc(100% - 10px);
    top: 40px;
    height: 3px;
    position: absolute;
    visibility: ${props => props.isSelected ? 'visible' : 'hidden'};
  }

  &:hover:before {
    opacity: ${props => props.isSelected ? 'none' : '0.20'};
    visibility: visible;
  }

  @media (max-width: 375px) {
    font-size: 14px;
    line-height: 16.8px;
    letter-spacing: 2.36px;
  }
`

export const ContainerData = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0px 157px;
  width: 80%;
  margin: 0 auto;


  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 60px;
  }
`

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  
  img {
    width: 445px;
    height: 445px;

    @media (max-width: 768px) {
      width: 300px;
      height: 300px;
    }

    @media (max-width: 375px) {
      width: 170px;
      height: 170px;
    }
  }
`

export const ContainerInfo = styled.div`
  margin-top: 37px;

  @media (max-width: 768px) {
    order: 3;
  }
`

export const Title = styled.div`
  width: 333px;
  height: 115px;
  
  h2 {
    font-family: var(--font-bellefair);
    font-weight: 400;
    font-size: 100px;
    line-height: 114px;
    color: var(--white-color);
  }

  @media (max-width: 768px) {
    width: 266px;
    height: 92px;
    margin: 0 auto;

    h2 {
      font-size: 80px;
      line-height: 91px;
      text-align: center;
    }
    
  }

  @media (max-width: 375px) {
    width: 187px;
    height: 64px;

    h2 {
      font-size: 56px;
      line-height: 64px;
    }
  }
`
export const Description = styled.div`
  margin-top: 14px;
  margin-bottom: 54px;
  width: 444px;
  height: 128px;

  p {
    font-family: var(--font-barlow-condensed);
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: var(--light-color);
  }

  @media (max-width: 768px) {
    width: 573px;
    height: 84px;
    margin-top: 8px;
    margin-bottom: 49px;


    p {
      font-size: 16px;
      line-height: 28px;
      text-align: center;
    }
  }

  @media (max-width: 375px) {
    width: 327px;
    height: 125px;
    margin: 1px auto 0;

    p {
      font-size: 15px;
      line-height: 25px;
      text-align: center;
    }
  }
`

export const InfoText = styled.div`
  hr {
    color: #383B4B;
    border-width: 1px;
    margin-bottom: 28px;
    opacity: 0.65;
  }

  .content {
    display: flex;
    gap: 80px;
    
    span {
      font-family: var(--font-barlow-condensed);
      font-weight: 400;
      font-size: 14px;
      letter-spacing: 2.36px;
      color: var(--light-color);
    }

    p {
      font-family: var(--font-bellefair);
      color: var(--white-color);
      font-weight: 400;
      font-size: 28px;
      margin-top: 12px;
    }
  }

  @media (max-width: 768px) {
    width: 573px;

    .content {
      justify-content: center;
    }
  }

  @media (max-width: 375px) {
    width: auto;

    hr {
      width: 327px;
    }

    .content {
      flex-direction: column;
      align-items: center;
      gap: 32px;

      .infoItem {
        text-align: center;
      }
    }
  }
`

