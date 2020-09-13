import styled from "styled-components";

import resolutions from "../../styles/resolutions";

export const StyledMain = styled.main`
  background: #eee;
`;

export const StyledUl = styled.ul`
  padding: 30px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${resolutions.tablet} {
    display: grid;
    justify-items: center;
    padding: 30px calc((100vw - 490px) / 2);
    row-gap: 30px;
    grid-template-columns: 1fr 1fr;
  }

  @media ${resolutions.tabletL} {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 30px calc((100vw - 780px) / 2);
    row-gap: 40px;
  }

  @media ${resolutions.laptop} {
    padding: 30px calc((100vw - 780px) / 2);
    row-gap: 40px;
    column-gap: 0;
  }

  @media ${resolutions.laptopM} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 70px 190px;
    row-gap: 40px;
    column-gap: 40px;
  }

  @media ${resolutions.laptopL} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding: 70px calc((100vw - 1242px) / 2);
    column-gap: 0;
  }

  @media ${resolutions.desktop} {
    padding: 80px calc((100vw - 1442px) / 2);
    row-gap: 60px;
  }
`;

export const StyledLi = styled.li`
  width: 100%;
  height: 180px;
  padding: 12px;
  background: #fff;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  border-radius: 5px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  @media ${resolutions.tablet} {
    max-width: 220px;
    flex-direction: column;
    height: 300px;
    margin-bottom: 0;
  }
`;

export const ImageDiv = styled.div`
  margin-right: 8px;

  img {
    height: 85px;
  }

  @media ${resolutions.mobile} {
    img {
      height: 100px;
    }
  }

  @media ${resolutions.mobileL} {
    img {
      height: 120px;
    }
  }

  @media ${resolutions.tablet} {
    img {
      height: 130px;
    }
  }
`;

export const InfosDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 1.6rem;
    height: 50px;
    text-align: center;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  button {
    color: #fff;
    background-color: #00416d;
    opacity: 0.8;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    border-radius: 4px;
    width: 120px;
    font-size: 1.2rem;
    transition: opacity 0.1s ease-in;

    &:hover {
      opacity: 1;
    }
  }

  @media ${resolutions.mobile} {
    h2 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.4rem;
    }

    button {
      font-size: 1.4rem;
    }
  }

  @media ${resolutions.tablet} {
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.6rem;
    }

    button {
      font-size: 1.6rem;
    }
  }
`;

export default { StyledMain, StyledUl, StyledLi, ImageDiv, InfosDiv };
