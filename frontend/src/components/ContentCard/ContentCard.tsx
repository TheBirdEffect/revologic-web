import { observer } from "mobx-react-lite";
import { IContentCardProps } from "./IContentCardProps";
import { StackLayout } from "../../styles/core/ui/StackLayout";
import { ContentCardHeadline } from "../../styles/core/Headings";
import { Text } from "../../styles/Text";
import { useRootStore } from "../../context/RootStoreContext";
import { Image } from "../../styles/core/Image";

export const ContentCard: React.FC<IContentCardProps> = ({ data }) => {

  const { imageStore } = useRootStore();

  // const gallery = data.gallery? imageStore.getImagesByGallery(data.gallery) : null;
  const gallery = data.gallery? imageStore.getImagesByGallery(data.gallery.id) : null;

  console.log(gallery)

  return (
    <StackLayout borderRadius backgroundColor={"rgb(248, 248, 248, 0.7)"}>
      <ContentCardHeadline>{data.headline}</ContentCardHeadline>
      <Text align="center">{data.content}</Text>
      {gallery?.map( (image, key) => (
        <Image src={image.url} key={key} alt={image.alt} />
      ))}
    </StackLayout>
  );
};

export default observer(ContentCard);
