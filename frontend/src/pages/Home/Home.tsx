import { observer } from "mobx-react-lite";
import SectionCard from "../../components/SectionCard/SectionCard";
import TeaserCard from "../../components/TeaserCard/TeaserCard";
import { useRootStore } from "../../context/RootStoreContext";
import { ITeaserCardModel } from "../../dataLayer/models/Card/TeaserCard";
import { StackLayout } from "../../styles/core/ui/StackLayout";
import { theme } from "../../styles/Theme";
import { IHomeProps } from "./IHomeProps";
import { ISectionModel } from "../../dataLayer/models/Section";
import { ProfileContentCard } from "../../components/ProfileContentCard/ProfileContentCard";
import { IProfileContentCardModel } from "../../dataLayer/models/Card/ProfileContentCard";
import ContentCard from "../../components/ContentCard/ContentCard";
import { IContentCardModel } from "../../dataLayer/models/Card/ContentCard";

export const Home: React.FC<IHomeProps> = () => {
  const { contentStore, imageStore } = useRootStore();

  const images = imageStore.getAllImages();
  console.log(images);
  

  return (
    <StackLayout backgroundColor={theme.colors.backgroundRich}>
      {contentStore.sections.map((section) => (
        <SectionCard key={section.id} data={section as ISectionModel}>
          {section.cards.map((card) =>
            card.isTeaserCard() ? (
              <TeaserCard data={card as ITeaserCardModel} key={card.id} />
            ) : card.isProfileContentCard() ? (
              <ProfileContentCard
                data={card as IProfileContentCardModel}
                key={card.id}
              />
            ) : card.isContentCard() ? (
              <ContentCard data={card as IContentCardModel} key={card.id} />
            ) : null
          )}
        </SectionCard>
      ))}
    </StackLayout>
  );
};

export default observer(Home);
