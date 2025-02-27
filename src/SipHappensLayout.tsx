import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

const theme = {
  colors: {
    header: "#eab2bb",
    body: "#fffcf6",
    green: "#5eb090",
    blueText: "#3c6ca8",
    creme: "#efe7dd",
  },
};

export default function SipHappensLayout() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
