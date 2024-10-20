import { observer } from "mobx-react-lite";
import SectionCard from "../../components/SectionCard/SectionCard";
import { useRootStore } from "../../context/RootStoreContext";
import { StackLayout } from "../../styles/core/ui/StackLayout";
import { theme } from "../../styles/Theme";
import { IHomeProps } from "./IHomeProps";
import { ISectionModel } from "../../dataLayer/models/Section";
import { CorpLogo } from "../../styles/core/Image";
import CardTypeResolver from "../../components/ui/CardResolver/CardTypeResolver";

export const Home: React.FC<IHomeProps> = () => {
  const { contentStore } = useRootStore();

  const { imageStore } = useRootStore();
  const corpLogo = imageStore.getImageById("CorpLogoMobile");
  const screen = window.screen.height;

  return (
    <StackLayout backgroundColor={theme.colors.backgroundRich}>
      <StackLayout
        paddingTop={`${screen * 0.13}px`}
        paddingBottom={`${screen * 0.13}px`}
      >
        <CorpLogo src={corpLogo?.url} alt={corpLogo?.alt} />
      </StackLayout>
      {contentStore.sections.map((section) => (
        <SectionCard key={section.id} data={section as ISectionModel}>
          {section.cards.map((card) =>
            <CardTypeResolver data={card} key={card.id} />
          )}
        </SectionCard>
      ))}
    </StackLayout>
  );
};

export default observer(Home);
