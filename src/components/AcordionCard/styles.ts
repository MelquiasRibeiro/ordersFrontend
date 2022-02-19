import styled from 'styled-components';




export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 16px;
  margin: 8px 0;
  border-radius: 12px;

`;


export const MainInfo = styled.div`
  width: 100%;
  table {
  color: #191920;
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #dddddd;

}

td, th {
  text-align: center;
  padding: 8px;

}

tr:nth-child(even) {
  background-color: #dddddd;
}
   button {
    background-color: transparent;
    border: none;
    transition: opacity 0.2s;
    &:hover {
    opacity: 0.7;
  }
  }


`

export const Details = styled.div`
  width: 100%;
>p{
    align-self:center;
    font-size:16px;
    color: #191920;

  }
  table {
color: #191920;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  text-align: center;
  padding: 8px;
}


`;
