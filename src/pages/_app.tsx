import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@mui/material";

import Layout from "@/components/layout/layout";
import { Provider } from "react-redux";
import store from "../store/index";
import { SnackbarProvider } from "notistack";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <Layout>
          <CssBaseline />
          <Component {...pageProps} />
        </Layout>
      </SnackbarProvider>
    </Provider>
  );
}
