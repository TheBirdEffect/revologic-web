import { useRootStore } from "../../context/RootStoreContext";
import { StackLayout } from "../../styles/core/Wrappers";
import { IHomeProps } from "./IHomeProps";

export const Home: React.FC<IHomeProps> = () => {
  const { contentStore } = useRootStore();

  const head = contentStore.getSection("services")?.headline;

  console.log(head);

  return (
    <StackLayout>
      {contentStore.sections.map((section) => (
        <StackLayout key={section.id}>
          <h2>{section.headline}</h2>
          {section.cards.map((card) => (
            <StackLayout key={card.id}>
              <h3>{card.headline}</h3>
              { card.type === "TeaserCard" && 
                <img src={card.descriptionImg} alt={card.headline} />
              }
            </StackLayout>
          ))}
        </StackLayout>
      ))}
    </StackLayout>
  );
};
