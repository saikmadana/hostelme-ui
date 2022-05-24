import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styles/global";
import { defaultTheme } from "../../styles/theme";


export const Home = () => {
    return <section className="home__wrapper restrict-width-inner">
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyles />
        <div>
          <h2>Welome to Home</h2>
        </div>
      </>
    </ThemeProvider>
    </section>;
}