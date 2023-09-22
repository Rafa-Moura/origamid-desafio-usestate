import { styled } from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #5a6e99;
  margin: 30px 0 ;
`;

export const CardImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 3px;
  border-bottom: 1px solid #5a6e99;
  gap: 10px;
  & img {
    width: 100%;
    max-width: 300px;
  }
`;

export const CardDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  & p,
  h3 {
    margin: 10px 0;
  }
`;
