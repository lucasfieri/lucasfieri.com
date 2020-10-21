import NextApp from "next/app";
import Container from "../components/Container";
import NavBar from '../components/Navbar';

export default class App extends NextApp {
  render() {
    const { pageProps, Component } = this.props;

    return (
      <Container>
        <NavBar />
        <Component {...pageProps} />
      </Container>
    );
  }
}
