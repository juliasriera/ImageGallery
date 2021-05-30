import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';


export const GlobalStyle = createGlobalStyle`

    margin: auto;
    padding: auto;
    box-sizing: border-box;

`;

export const WrapperImages = styled.section`
  max-width: 90%;
  margin: 4rem auto;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: auto auto auto auto;


  @media only screen and (max-width: 800px) {
    width: 100%;
    grid-template-columns: auto auto auto;
	}

  @media only screen and (max-width: 450px) {
    width: 100%;
    grid-template-columns: auto auto;
	}

`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


