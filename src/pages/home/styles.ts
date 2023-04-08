import styled from "styled-components"

export const ContainerHome = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  margin: 200px auto 0;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 106px auto 0;
    gap: 106px;
  }

  @media (max-width: 375px) {
    gap: 81px;
    margin: 48px auto 0;
  }
`

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 450px;
  height: 382px;

  @media (max-width: 375px) {
    width: 327px;
    height: 276px;
  }
`

export const Subtitle = styled.div`
  font-family: var(--font-barlow-condensed);
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 4.75px;
  color: var(--light-color);

  @media (max-width: 768px) {
    font-size: 20px;
    letter-spacing: 3.38px;
    text-align: center;
  }

  @media (max-width: 375px) {
    font-size: 16px;
    letter-spacing: 2.7px;
  }
`

export const Title = styled.div`
  height: 172px;
  width: 445px;

  h1 {
    font-family: var(--font-bellefair);
    font-size: 9rem;
    font-weight: 400;
    color: var(--white-color);
  }

  @media (max-width: 375px) {
    width: 327px;
    height: 100px;
    
    h1 {
      font-size: 80px;
      text-align: center;
    }
  }
`

export const TextInfo = styled.div`
  width: 444px;
  height: 128px;

  p {
    font-family: var(--font-barlow-condensed);
    font-weight: 400;
    font-size: 18px;
    color: var(--light-color);
    line-height: 32px;
  }

  @media (max-width: 768px) {
    p {
      font-size: 16px;
      line-height: 28px;
      text-align: center;
    }
  }

  @media (max-width: 375px) {
    width: 327px;
    height: 125px;

    p {
      font-size: 15px;
      line-height: 25px;
    }
  }
`

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white-color);
  width: 274px;
  height: 274px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  .content {
    font-family: var(--font-bellefair);
    font-weight: 400;
    font-size: 32px;
    letter-spacing: 2px;
    color: var(--dark-color);
  }

  &::before {
    transition: scale 0.7s ease-in-out;
    content: "";
    width: 274px;
    height: 274px;
    background-color: rgba(255, 255, 255, 0.2);
    position: absolute;
    border-radius: 100%;
  }

  &:hover::before {
    scale: 1.5;
  }

  @media (max-width: 768px) {
    width: 242px;
    height: 242px;
    margin-bottom: 90px;
    
    &::before {
      width: 242px;
      height: 242px;
    }
  }

  @media (max-width: 375px) {
    width: 150px;
    height: 150px;
    margin-bottom: 48px;

    .content {
      line-height: 1.25px;
      font-size: 20px;
    }

    &::before {
      width: 150px;
      height: 150px;
    }
  }
`
