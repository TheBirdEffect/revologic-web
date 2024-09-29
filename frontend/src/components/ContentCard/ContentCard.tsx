import { observer } from "mobx-react-lite";
import { IContentCardProps } from "./IContentCardProps";
import { StackLayout } from "../../styles/core/ui/StackLayout";
import { ContentCardHeadline } from "../../styles/core/Headings";
import { Text } from "../../styles/Text";
import Gallery from "../ui/Galery/Gallery";
import { theme } from "../../styles/Theme";

export const ContentCard: React.FC<IContentCardProps> = ({ data }) => {

  return (
    <StackLayout borderRadius width100 backgroundColor={theme.colors.cardPrimary}>
      <ContentCardHeadline>{data.headline}</ContentCardHeadline>
      <Text align="center">{data.content}</Text>
      {data.gallery ? (
        <Gallery galleryData={data.gallery} />
      ) : null
      }
    </StackLayout>
  );
};

export default observer(ContentCard);
