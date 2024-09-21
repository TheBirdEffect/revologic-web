import SectionCard from "../../components/SectionCard/SectionCard";
import TeaserCard from "../../components/TeaserCard/TeaserCard";
import { useRootStore } from "../../context/RootStoreContext";
import { StackLayout } from "../../styles/core/ui/StackLayout";
import { theme } from "../../styles/Theme";
import { IHomeProps } from "./IHomeProps";

export const Home: React.FC<IHomeProps> = () => {
  const { contentStore } = useRootStore();


  return (
    <StackLayout backgroundColor={theme.colors.backgroundRich}>
      {contentStore.sections.map((section) => (
        <SectionCard 
          key={section.id} 
          headline={section.headline} 
          readMoreLink={section.readMoreLink!}
          >
            {section.cards.map((card) => 
              card.type === "TeaserCard" && (
                <TeaserCard
                  key={card.id} 
                  descriptionImg={card.descriptionImg} 
                  headline={card.headline}
                  hasRoundImage={card.isRoundImage} 
                  descriptor={card.descriptor || undefined}
                />
              )
            )}
        </SectionCard>
      ))}
    </StackLayout>
  );
};
