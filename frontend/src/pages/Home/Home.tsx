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
          data={section}
          >
            {section.cards.map((card) => 
              card.type === "TeaserCard" ? (
                <TeaserCard data={card} key={card.id} />
              ) : null
            )}
        </SectionCard>
      ))}
    </StackLayout>
    // <StackLayout backgroundColor={theme.colors.backgroundRich}>
    //   {contentStore.sections.map((section) => (
    //     <SectionCard 
    //       key={section.id} 
    //       headline={section.headline} 
    //       readMoreLink={section.readMoreLink!}
    //       >
    //         <></>
    //     </SectionCard>
    //   ))}
    // </StackLayout>
  );
};
