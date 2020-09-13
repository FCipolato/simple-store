import styled from "styled-components";

import resolutions from "../../styles/resolutions";

export const StyledMain = styled.main`
  padding: 30px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  h1 {
    font-size: 1.8rem;
  }

  @media ${resolutions.mobile} {
    h1 {
      font-size: 2rem;
    }
  }

  @media ${resolutions.tablet} {
    padding: 30px;

    h1 {
      font-size: 2.2rem;
    }
  }

  @media ${resolutions.laptop} {
    padding: 50px 140px;
  }

  @media ${resolutions.laptopM} {
    padding: 60px 190px;
  }

  @media ${resolutions.laptopM} {
    padding: 70px 240px;
  }

  @media ${resolutions.desktop} {
    padding: 80px 300px;
  }
`;

export const ProductsUl = styled.ul`
  width: 100%;
  max-width: 800px;
  height: 100%;
  padding: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 12px;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
`;

export const ImageDiv = styled.div`
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

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
    margin-right: 30px;

    img {
      height: 130px;
    }
  }
`;

export const StyledLi = styled.li`
  display: flex;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e9e9e9;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
    border-bottom: unset;
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
    height: 40px;
    text-align: center;
  }

  p {
    font-size: 1.2rem;
  }

  @media ${resolutions.mobile} {
    h2 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.4rem;
    }
  }

  @media ${resolutions.tablet} {
    align-items: flex-start;

    h2 {
      font-size: 2rem;
      margin-bottom: 15px;
    }

    p {
      font-size: 1.6rem;
    }
  }
`;

export const PriceDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${resolutions.tablet} {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
`;

export const OptionsDiv = styled.div`
  width: 105px;
  align-items: center;
  display: flex;
  flex-direction: row;
  border: 2px solid #e3e3e3;
  border-radius: 3px;
  justify-content: space-between;
  padding: 0 8px;
  height: 35px;
  margin: 10px 0;

  button {
    width: 12px;
  }

  p {
    text-align: center;
  }
`;

export const RemoveButton = styled.button`
  color: #fff;
  background-color: #f20000;
  opacity: 0.8;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  width: 130px;
  font-size: 1.2rem;
  transition: opacity 0.1s ease-in;

  &:hover {
    opacity: 1;
  }

  @media ${resolutions.mobile} {
    font-size: 1.4rem;
  }

  @media ${resolutions.tablet} {
    width: 140px;
    font-size: 1.6rem;
  }
`;

export const FinalOptionsDiv = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  background: #eee;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  padding: 12px;
`;

export const TotalDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin-right: 8px;
  }

  p {
    margin-top: 5px;
    font-size: 1.4rem;
  }

  @media ${resolutions.mobile} {
    p {
      margin-top: 3px;
      font-size: 1.6rem;
    }
  }

  @media ${resolutions.tablet} {
    p {
      margin-top: 6px;
    }
  }
`;

export default {
  StyledMain,
  ProductsUl,
  ImageDiv,
  StyledLi,
  InfosDiv,
  PriceDiv,
  OptionsDiv,
  RemoveButton,
  FinalOptionsDiv,
  TotalDiv,
};
