import styled from "styled-components";

import resolutions from "../../../styles/resolutions";

export const StyledHeader = styled.header`
  background: #00416d;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;

  button {
    img {
      height: 30px;
    }
  }

  @media ${resolutions.tablet} {
    padding: 0 30px;
  }

  @media ${resolutions.laptop} {
    height: 80px;
    padding: 0 40px;
  }
`;

export default { StyledHeader };
