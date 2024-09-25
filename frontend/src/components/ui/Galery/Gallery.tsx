import { observer } from "mobx-react-lite";
import { StackLayout } from "../../../styles/core/ui/StackLayout";
import { IGalleryProps } from "./IGalleryProps";

export const Gallery: React.FC<IGalleryProps> = ({ images }) => {
    return (
        <StackLayout>
            {images.map((image, index) => (
                <img key={index} src={image} alt="Gallery Image" />
            ))}
        </StackLayout>
    );
}

export default observer(Gallery);