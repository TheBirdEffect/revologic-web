import SectionCard from "../../components/SectionCard/SectionCard";
import CardResolver from "../../components/ui/CardResolver/CardTypeResolver";
import { useRootStore } from "../../context/RootStoreContext";
import { ISectionModel } from "../../dataLayer/models/Section";
import { Overline } from "../../styles/core/Headings";
import { StackLayout } from "../../styles/core/ui/StackLayout";
import { IServicesProps } from "./IServicesProps";
import { Text } from "../../styles/Text";

export const Services: React.FC<IServicesProps> = () => {
  const { contentStore } = useRootStore();
  const services = contentStore.getSection("services");

  return (
    <StackLayout noGap>
      <Overline>Services</Overline>
      <SectionCard noOverline noReadMoreButton data={services as ISectionModel}>
        <StackLayout noGap width="90%">
        <Text align="center" weight="bold">Mein Leistungsspektrum</Text>
        <Text align="center">
         umfasst individuelle Lösungen, die gezielt auf Ihre Bedürfnisse abgestimmt sind. Mit langjähriger Erfahrung und hohem Engagement begleite ich Ihr Projekt von der Beratung bis zur Umsetzung. Verlässlichkeit und Qualität stehen dabei stets im Mittelpunkt.
        </Text>
        </StackLayout>
        {services?.cards.map((card) => (
            <CardResolver data={card} key={card.id} />
        ))} 
      </SectionCard>
    </StackLayout>
  );
};
