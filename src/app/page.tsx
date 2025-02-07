import { Container } from "../components/container";
import { Hero } from "../components/hero";
import { About } from "../components/about";
export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <main className="mt-4">
          <About />
        </main>
      </Container>
    </>
  );
}
