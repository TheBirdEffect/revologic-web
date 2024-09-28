import { observer } from "mobx-react-lite";
import { IContentCardProps } from "./IContentCardProps";
import { StackLayout } from "../../styles/core/ui/StackLayout";
import { ContentCardHeadline } from "../../styles/core/Headings";
import { Text } from "../../styles/Text";
import Gallery from "../ui/Galery/Gallery";

export const ContentCard: React.FC<IContentCardProps> = ({ data }) => {

  return (
    <StackLayout borderRadius backgroundColor={"rgb(248, 248, 248, 0.7)"}>
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
