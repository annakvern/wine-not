import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import Footer from "./components/Footer";

const theme = {
  colors: {
    header: "#eab2bb",
    body: "#fffcf6",
    footer: "#5eb090",
  },
};

export default function WineNotStart() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <h1>Hello world!</h1>
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}
