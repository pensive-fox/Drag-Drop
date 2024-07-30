import styled from "styled-components";

export const PlaceholderContentStyled = styled.div`
  width: 150px;
  height: 66px;

  max-width: 150px;
  max-height: 66px;
`;

export const PlaceholderContentColHeaderStyled = styled.div`
  width: 150px;
  box-shadow: 4px 4px 9px rgba(198, 198, 198, 0.36);
  border-radius: 20px;
  padding: 0.8rem 1rem;
  color: #fff;

  background: ${({ variant }) => {
    switch (variant) {
      case "start":
        return "linear-gradient(90deg, #ff85e4 0%, #229efd 179.25%)";

      case "progress":
        return "linear-gradient(90deg, #209cff 0%, #68e0cf 100%)";

      case "done":
        return "linear-gradient(90deg, #84fab0 0%, #8fd3f4 100%)";

      default:
        return "transparent";
    }
  }};
`;
