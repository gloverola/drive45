import theme from "constants/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/globalStyles";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Toaster
          containerStyle={{
            display: "flex",
            margin: 0,
            padding: 0,
            borderRadius: "10px",
            zIndex: 35000,
          }}
          toastOptions={{
            className: "toast",
            duration: 6000,
            style: {
              padding: "10px",
              color: "#000",
              fontSize: "14px",
              fontWeight: "600",
              margin: 0,
              borderRadius: "4px",
              zIndex: 35000,
              width: "100%",
              height: "50px",
            },
            success: {
              style: {
                background: "#000",
                color: "#FFF",
              },
            },
            error: {
              style: {
                background: "#000",
                color: "#FFF",
              },
            },
          }}
          position='top-right'
        />
        <GlobalStyle />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
}
