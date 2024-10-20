import SectionCard from "../../components/SectionCard/SectionCard";
import CardResolver from "../../components/ui/CardResolver/CardTypeResolver";
import { useRootStore } from "../../context/RootStoreContext";
import { ISectionModel } from "../../dataLayer/models/Section";
import { StackLayout } from "../../styles/core/ui/StackLayout";
import { IServicesProps } from "./IServicesProps";

export const Services: React.FC<IServicesProps> = () => {
  const { contentStore } = useRootStore();
  const services = contentStore.getSection("services");

  return (
    <StackLayout noGap>
      <h1>Services</h1>
      <SectionCard noOverline noReadMoreButton data={services as ISectionModel}>
        {services?.cards.map((card) => (
            <CardResolver data={card} key={card.id} />
        ))} 
      </SectionCard>
    </StackLayout>
  );
};
