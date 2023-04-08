import styled from 'styled-components'

export const ContainerArea = styled.section`
  padding: 76px 0 0 166.5px;
  max-width: 1440px;
  margin: 0 auto;

  @media (min-width: 1441px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80vh;
  }

  @media (max-width: 768px) {
    padding-left: 0;

    .pageTitle {
      margin-left: 40px;
    }
  }

  @media (max-width: 375px) {
    padding-top: 24px;

    .pageTitle {
      margin-left: 0;
    }
  }
`

export const ContainerData = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ContainerInfo = styled.div`
  display: flex;
  gap: 80px;
  margin-top: 137px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 44px;
    margin-top: 56px;
    order: 2;
  }

  @media (max-width: 375px) {
    margin-top: 32px;
    gap: 26px;
  }
`

export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 16px;
  }
`

interface isSelectedProps {
  isSelected: boolean
}

export const LinkCircle = styled.div<isSelectedProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: var(
    ${props => props.isSelected ? '--white-color' : '--dark-color'}
  );
  border-radius: 50%;
  border: 1px solid #4D4D56;

  span {
    font-family: var(--font-bellefair);
    font-size: 32px;
    font-weight: 400;
    line-height: 36px;
    color: var(
      ${props => props.isSelected ? '--dark-color' : '--light-color'}
    );
  }

  &:hover {
    cursor: pointer;
    ${({ isSelected }) => {
      if (!isSelected) return 'border-color: var(--white-color);'
    }}
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    
    span {
      font-size: 24px;
      line-height: 27.5px;
    }
  }

  @media (max-width: 375px) {
    width: 40px;
    height: 40px;

    span {
      font-size: 16px;
      line-height: 18px;
    }
  }
`

export const ContainerContent = styled.div`
`

export const Subtitle = styled.div`
  margin-bottom: 11px;

  h4 {
    font-family: var(--font-barlow-condensed);
    font-weight: 400;
    font-size: 16px;
    line-height: 19.2px;
    letter-spacing: 2.7px;
    color: var(--light-color);
  }

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 375px) {
    margin-bottom: 6px;

    h4 {
      font-size: 14px;
      line-height: 16.8px;
      letter-spacing: 2.36px;
    }
  }
`

export const Title = styled.div`
  margin-bottom: 17px;

  h1 {
    font-family: var(--font-bellefair);
    font-weight: 400;
    font-size: 56px;
    line-height: 64.18px;
    color: var(--white-color);
  }

  @media (max-width: 768px) {
    margin-bottom: 16px;
    text-align: center;

    h1 {
      font-size: 40px;
      line-height: 45.84px;
    }
  }

  @media (max-width: 375px) {
    h1 {
      font-size: 24px;
      line-height: 27.5px;
    }
  }
`

export const Description = styled.div`
  width: 444px;

  p {
    font-family: var(--font-barlow-condensed);
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: var(--light-color);
  }

  @media (max-width: 768px) {
    width: 458px;
    text-align: center;
    
    p {
      font-size: 16px;
      line-height: 28px;
    }
  }

  @media (max-width: 375px) {
    width: 327px;
    
    p {
      font-size: 15px;
      line-height: 25px;
    }
  }
`

export const ContainerImage = styled.div`
  width: 515px;
  height: 527px;
  padding-top: 26px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-top: 60px;
  }

  @media (max-width: 375px) {
    margin-top: 32px;
    
    img {
      width: 375px;
    }
  }
`
