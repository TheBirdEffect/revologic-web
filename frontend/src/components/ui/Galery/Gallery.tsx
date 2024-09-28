import { observer } from "mobx-react-lite";
import { StackLayout } from "../../../styles/core/ui/StackLayout";
import { IGalleryProps } from "./IGalleryProps";
import { GalleryImage } from "../../../styles/core/Image";
import { useRootStore } from "../../../context/RootStoreContext";

export const Gallery: React.FC<IGalleryProps> = ({ galleryData }) => {

    const { imageStore } = useRootStore();
    const gallery = galleryData? imageStore.getImagesByGallery(galleryData.id) : null;


    return (
        <StackLayout flexDirection="row" justifyContent="space-around" wrap>
            {gallery?.map((image, index) => (
                <GalleryImage key={index} src={image.url} alt={image.alt} />
            ))}
        </StackLayout>
    );
}

export default observer(Gallery);