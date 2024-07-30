import styled from "styled-components";

export const DraggableItemContentStyled = styled.div`
  width: 150px;
  height: 66px;
  border: 1px solid rgb(181, 173, 247);
  box-shadow: 4px 4px 9px rgba(198, 198, 198, 0.36);
  border-radius: 20px;
  background: #f7f6f7;
  padding: 0.8rem 1rem;
  color: #828282;
  text-align: center;
  cursor: grab;

  :active {
    cursor: grabbing;
  }
`;

export const RowContentStyled = styled.div`
  display: flex;
  width: 600px;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
