import styled from '@emotion/styled';
const Etiqueta = styled.span`
  text-transform: uppercase;
  background: ${props => props.importante ? 'yellow' : 'gray'};
  padding: 5px;
  border-radius: 4px; 
  font-weight: bold; 
  color: black;
`;

export default Etiqueta;