import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 32px;
  > h1 {
    margin-bottom: 32px;
  }
  > a{
    text-decoration: none;
    color:inherit;
    align-self:flex-end;
    display:flex;
    align-items:center;
    @media (max-width: 768px) {
      align-self:center;
    }
  >button{
    background-color:#39823B;
    border:none;
    font-size:16px;
    font-weight:bold;
    padding:8px;
    border-radius:4px;
    &:hover {
    opacity: 0.7;
  }
  }
  }
`;
export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 90%;
  padding: 16px;

  >p{
    align-self:center;
    font-size:16px;
    margin:8px;
  }
`;


