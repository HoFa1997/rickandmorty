import BannerText from "@/components/atoms/Texts/Banner/BannerText";
import BannerContainer from "@/components/molecules/Banner/BannerContainer";
import { FunctionComponent } from "react";

interface HeaderHomePageProps {}

const MainBanner: FunctionComponent<HeaderHomePageProps> = () => {
  return (
    <BannerContainer>
      <BannerText>Rick and Morty by HoFa & Shayan</BannerText>
    </BannerContainer>
  );
};

export default MainBanner;
