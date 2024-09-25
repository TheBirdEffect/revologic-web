import { observer } from "mobx-react-lite";
import SectionCard from "../../components/SectionCard/SectionCard";
import TeaserCard from "../../components/TeaserCard/TeaserCard";
import { useRootStore } from "../../context/RootStoreContext";
import { ITeaserCardModel } from "../../dataLayer/models/Card/TeaserCard";
import { StackLayout } from "../../styles/core/ui/StackLayout";
import { theme } from "../../styles/Theme";
import { IHomeProps } from "./IHomeProps";

export const Home: React.FC<IHomeProps> = () => {
  const { contentStore } = useRootStore();

  console.log(contentStore.sections);
  

  return (
    <StackLayout backgroundColor={theme.colors.backgroundRich}>
      {contentStore.sections.map((section) => (
        <SectionCard 
          key={section.id}
          data={section}
          >
            {section.cards.map((card) => 
              card.type === "TeaserCard" ? (
                console.log(section.cards),
                <TeaserCard data={card as ITeaserCardModel} key={card.id} />
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

export default observer(Home);