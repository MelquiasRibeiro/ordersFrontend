import styled, { keyframes, css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 32px;
  width: 90%;
  background-color:#ffffff;
  padding: 16px;
  flex-direction: column;
  border-radius: 12px;
  > h1 {
    margin-bottom: 32px;
    color: #191920;
    @media (max-width: 768px) {
      text-align:center;
      margin-top:16px;
    }
  }
  >a{
    align-self:flex-start;
    margin-left:16px;
    transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
  }
`;
export const Content = styled.form`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width: 100%;

`

export const Input = styled.input`
  height: 40px;
  border-radius: 8px;
  padding: 8px 24px;
  color: #191920;
  border: solid 1px #191920;
  margin-top: 16px;
  font-size: 16px;
  width: 100%;
  
`;

export const InfoContainer = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    margin:0 0 0 0;
    }
> p {
    display: flex;
    align-items: center;
    margin: 16px 0 0px 0;
    color: #191920;
    font-size: 14px;
    @media (max-width: 768px) {
    margin:16 0 0 0;
    }
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg)
  }
`;
export const Button = styled.button`
  display:flex;
  align-items:center;
  justify-content:center;
  justify-self:center;
  border-radius: 8px;
  font-weight: bold;
  height: 40px;
  width: 100%;
  align-self:flex-end;
  justify-self:center;
  border-style: none;
  background-color: #191920;
  margin-top: 32px;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
  
`;

export const ItemsContainer = styled.div`
>h1 {
  color:#191920;
  font-size: 16px;
  margin: 16px 0;

}
p {
  color:#191920;
  margin: 16px 0 0 0;
}
`


export const NewProduct = styled.button`
 display: flex;
 background-color:#191920 ;
 padding: 4px;
 border-radius: 4px;
 border: none;
 margin: 16px;

 float:right;

`;

export const ItemRow = styled.div`
  display: flex;
  flex-direction:  row;
  align-items: center;
  justify-content: space-between;

`


export const DeleteButtom = styled.button`
padding: 4px;
display: flex;
background-color:#191920 ;
border: none;
border-radius: 4px;

`;