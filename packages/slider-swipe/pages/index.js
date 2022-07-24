import Head from "next/head";
import { Container } from "../styles/layoutStyle";
import Caurosel from "../components/caurosel";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Slider Swipe</title>
        <meta name="description" content="Slider Swipe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "scroll",
          }}
        >
          <Caurosel />
        </div>
      </Container>
    </div>
  );
}
