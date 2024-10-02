import { observer } from "mobx-react-lite";
import { IContentCardProps } from "./IContentCardProps";
import { StackLayout } from "../../styles/core/ui/StackLayout";
import { ContentCardHeadline } from "../../styles/core/Headings";
import { Text } from "../../styles/Text";
import Gallery from "../ui/Galery/Gallery";
import { theme } from "../../styles/Theme";

export const ContentCard: React.FC<IContentCardProps> = ({ data }) => {
  return (
    <StackLayout
      borderRadius
      width100
      backgroundColor={theme.colors.cardPrimary}
      paddingTop="40px"
      paddingBottom="40px"
      >
      <ContentCardHeadline>{data.headline}</ContentCardHeadline>
      <StackLayout width="90%">
        <Text align="center">{data.content}</Text>
      </StackLayout>
      {data.gallery ? <Gallery galleryData={data.gallery} /> : null}
    </StackLayout>
  );
};

export default observer(ContentCard);
