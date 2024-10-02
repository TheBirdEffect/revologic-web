import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/Global";
import { theme } from "./styles/Theme";
import { Home } from "./pages/Home/Home";
import ScrollToTopButton from "./components/Base/ScrollToTop/ScrollToTopButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter basename="/" future={{v7_startTransition: true}}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Home /> */}
      </BrowserRouter>
      <ScrollToTopButton />
    </ThemeProvider>
  );
}

export default App;
