import { GlobalStyles } from "./components/styles/GlobalStyles";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";

export default function WineNotStart() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <h1>Hello world!</h1>
      </Container>
    </>
  );
}
