import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import Footer from "./components/Footer";
//import MyFavouritesPage from "./pages/MyFavouritesPage";
import LandingPage from "./pages/LandingPage";

const theme = {
  colors: {
    header: "#eab2bb",
    body: "#fffcf6",
    green: "#5eb090",
    blueText: "#3c6ca8",
    creme: "#efe7dd",
  },
};

export default function WineNotStart() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <LandingPage />
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}
