import styled from "styled-components"

export const ContainerArea = styled.section`
  width: 85%;
  margin: 0 auto;
  padding-top: 76px;
  max-width: 1440px;

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80vh;
  }

  @media (max-width: 768px) {
    padding-top: 40px;
  }
`

export const ContainerData = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column; 
    gap: 0;
  }
`

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
  }
  
  @media (max-width: 375px) {
    margin-top: 32px;
    order: 2;
    width: 100%;
  }
`

export const Role = styled.div`
  margin-bottom: 15px;
  margin-top: 154px;

  h4 {
    font-family: var(--font-bellefair);
    font-weight: 400;
    font-size: 32px;
    font-style: normal;
    line-height: 36.67px;
    color: var(--white-color);
    opacity: 0.4;
  }

  @media (max-width: 768px) {
    margin-top: 60px;
    margin-bottom: 8px;
    text-align: center;

    h4 {
      font-size: 24px;
      line-height: 27.5px;
    }
  }

  @media (max-width: 375px) {
    margin-top: 0px;
    order: 2;

    h4 {
      font-size: 24px;
      line-height: 18px;
    }
  }
`

export const Name = styled.div`
  margin-bottom: 27px;

  h4 {
    font-family: var(--font-bellefair);
    font-weight: 400;
    font-size: 56px;
    line-height: 64px;
    color: var(--white-color);
  }

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 16px;

    h4 {
      font-size: 40px;
      line-height: 45.84px;
    }
  }

  @media (max-width: 375px) {
    order: 2;

    h4 {
      font-size: 24px;
      line-height: 27.7px;
    }
  }
`

export const Bio = styled.div`
  width: 444px;
  height: 128px;
  margin-bottom: 120px;
  
  p {
    font-family: var(--font-barlow-condensed);
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: var(--light-color);
  }

  @media (max-width: 768px) {
    text-align: center;
    margin: 0 auto 20px;
    height: 84px;

    p {
      font-size: 16px;
      line-height: 28px;
    }
  }

  @media (max-width: 375px) {
    width: 327px;
    order: 2;
    
    p {
      font-size: 15px;
      line-height: 25px;
    }
  }
`

export const ContainerImage = styled.div`
  
  img {
    width: 568.7px;
    height: 712px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    margin: 0 auto;

    img {
      width: 450px;
      height: 572px;
    }
  }

  @media (max-width: 375px) {
    order: 1;
    margin-top: 32px;
    width: 100%;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 99%;
      height: 1px;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.2)
    }

    img {
      width: 327px;
      height: 223px;
    }
  }
`

export const ContainerLinks = styled.div`
  display: flex;
  gap: 24px;
  
  @media (max-width: 768px) {
    margin: 20px auto 40px;
    gap: 16px;
  }

  @media (max-width: 375px) {
    order: 1;
  }
`

interface isSelectedProps {
  isSelected: boolean
}

export const PointLink = styled.div<isSelectedProps>`
  width: 15px;
  height: 15px;
  background-color: var(--white-color);
  opacity: ${props => props.isSelected ? 'none' : '0.4'};
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    opacity: ${props => props.isSelected ? 'none' : '0.6'};
  }

  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
`
