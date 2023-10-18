import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline, createTheme, colors } from "@mui/material";
import { purple } from "@mui/material/colors";
import { QueryClientProvider, QueryClient } from "react-query";
import Layout from "@/components/layout/layout";
import { Provider } from "react-redux";
import store from "../store/index";
import { SnackbarProvider } from "notistack";

import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: "#FFE2A7",
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
            <Layout>
              {/* <CssBaseline /> */}
              <Component {...pageProps} />
            </Layout>
          </SnackbarProvider>
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
}
