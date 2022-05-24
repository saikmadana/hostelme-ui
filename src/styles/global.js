import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  :root {
    --primary-bg: #3b4a4d;
    --secondary-bg: #ffffff;
    --primary-text: #f7f8fa;
    --secondary-text: #3b4a4d;
    --highlight-bg: #e9ecef;
    --highlight-text: #ff9393;
  }
  body {
    // align-items: center;
    // background: ${({ theme }) => theme.primaryDark};
    // color: ${({ theme }) => theme.primaryLight};
    // display: flex;
    // font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    // height: 100vh;
    // justify-content: center;
    // text-rendering: optimizeLegibility;
  }
  .restrict-width-inner {
    margin: 0 auto;
    max-width: 1366px;
    padding-left: 10px;
    padding-right: 10px;
  }
  `