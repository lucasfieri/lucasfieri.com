import NextApp from "next/app";
import Container from "../components/Container";

export default class App extends NextApp {
  render() {
    const { pageProps, Component } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
