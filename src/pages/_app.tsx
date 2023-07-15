import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../theme";
import Layout from "@/components/layout/layout";
import { Provider } from "react-redux";
import store from "../store/index";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Layout>
          <CssBaseline />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}
