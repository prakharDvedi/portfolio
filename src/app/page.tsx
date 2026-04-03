import styles from "./home.module.css";
import {
  homeCallToActions,
  homeHero,
  homeSocialLinks,
} from "@/data/home";
import HomeHeatmap from "@/components/home/HomeHeatmap";
import HomeHero from "@/components/home/HomeHero";
import HomePortrait from "@/components/home/HomePortrait";
import HomeSocialLinks from "@/components/home/HomeSocialLinks";
import HomeTechStack from "@/components/home/HomeTechStack";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.mainSection}>
        <HomeHero {...homeHero} actions={homeCallToActions} />

        <div className={styles.rightColumn}>
          <HomeSocialLinks links={homeSocialLinks} />
          <HomePortrait />
        </div>
      </div>

      <HomeTechStack />
      <HomeHeatmap />
    </div>
  );
}
