import theme from "constants/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/globalStyles";

export default function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
}
