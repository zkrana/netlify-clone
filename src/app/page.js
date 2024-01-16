import Header from "./components/Header/Header";
import Hero from "./components/home/Hero";
import Review from "./components/home/Review";
import Solutions from "./components/home/solutions/Solutions";
import Statistics from "./components/home/Statistics/Statistics";
import YoutubeVideo from "./components/home/YoutubeVideo";
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <YoutubeVideo />
      <Solutions />
      <Statistics />
      <Review />
    </main>
  );
}
