import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/Global";
import { theme } from "./styles/Theme";
import { Home } from "./pages/Home/Home";
import ScrollToTopButton from "./components/Base/ScrollToTop/ScrollToTopButton";
import { Router } from "./router/Router";
import { Route } from "react-router-dom";
import { Projects } from "./pages/Projects/Projects";
import { Services } from "./pages/Services/Services";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
      </Router>
      <ScrollToTopButton />
    </ThemeProvider>
  );
}

export default App;
