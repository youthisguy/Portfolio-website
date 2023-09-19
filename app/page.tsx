import {
  Hero,
  MySkills,
  MyServices,
  FeaturedProjects,
  GetInTouchCard,
} from "./components/homepage-components";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center overflow-hidden bg-white800 dark:bg-black300">
      <Hero />
      <MySkills />
      <MyServices />
      <FeaturedProjects />
      <GetInTouchCard />
    </main>
  );
}
