import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/Global";
import { theme } from "./styles/Theme";
import { Home } from "./pages/Home/Home";
import ScrollToTopButton from "./components/Base/ScrollToTop/ScrollToTopButton";
import { Router } from "./router/Router";
import { Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Route path="/" element={<Home />} />
      {/* <Home /> */}
      </Router>
      <ScrollToTopButton />
    </ThemeProvider>
  );
}

export default App;
