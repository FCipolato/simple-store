import styled from "styled-components";

import resolutions from "../../styles/resolutions";

export const NotFoundDiv = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 180px;
  }

  @media ${resolutions.mobile} {
    img {
      height: 200px;
    }
  }

  @media ${resolutions.mobileL} {
    img {
      height: 220px;
    }
  }

  @media ${resolutions.tablet} {
    img {
      height: 300px;
    }
  }

  @media ${resolutions.laptop} {
    height: calc(100vh - 80px);

    div {
      width: 100px;
      height: 100px;
    }
  }

  @media ${resolutions.laptopM} {
    div {
      width: 80px;
      height: 80px;
    }
  }
`;

export default { NotFoundDiv };
