import styles from "./home.module.css";
import {
  homeCallToActions,
  homeHero,
  homeSocialLinks,
} from "@/data/home";
import HomeHeatmap from "@/components/home/HomeHeatmap";
import HomeHero from "@/components/home/HomeHero";
import HomeTechStack from "@/components/home/HomeTechStack";

export default function Home() {
  return (
    <>
      <HomeHero
        {...homeHero}
        actions={homeCallToActions}
        socialLinks={homeSocialLinks}
      />

      <div className={styles.container}>
        <HomeHeatmap />
        <HomeTechStack />
      </div>
    </>
  );
}
