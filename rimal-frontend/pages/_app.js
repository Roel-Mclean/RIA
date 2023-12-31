import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/
  css2?family=Oswald:wght@500&display=swap');
  body{
    padding:0;
    margin:0;
    font-family: 'Oswald', sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  return (
      <>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
  );
}
