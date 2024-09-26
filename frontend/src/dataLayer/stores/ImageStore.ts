import { Instance, t } from "mobx-state-tree";
import { ImageModel } from "../models/ui/Image";
import { GalleryModel } from "../models/ui/GalleryModel";

export const ImageStore = t.model('ImageStore', {
    images: t.map(ImageModel),
    galleryModel: t.maybeNull(GalleryModel)
}).actions(self => ({
    addImage(image: Instance<typeof ImageModel>) {
        self.images.set(image.id, image);
    },
    loadImages() {
        // Logik zum Laden von Bildern, z.B. aus einer API
    }
})).views(self => ({
    getImageById(id: string) {
        return self.images.get(id);
    },
    getImagesByGallery() {
        if(self.galleryModel) {
            return self.galleryModel.imageIds.map(imageId => self.images.get(imageId));
        }
    }
}));

ImageStore.create({});

ImageModel.create({
    id: '1',
    url: "/img/tech/html.png",
    alt: "HTML Logo"
});

ImageModel.create({
    id: '2',
    url: "/img/tech/react.png",
    alt: "React Logo"
});

ImageModel.create({
    id: '3',
    url: "/img/tech/csharp.png",
    alt: "JavaScript Logo"
});

ImageModel.create({
    id: '4',
    url: "/img/tech/typescript.png",
    alt: "Typescript Logo"
});

ImageModel.create({
    id: '5',
    url: "/img/tech/netcore.png",
    alt: "Node.js Logo"
});

export type IImageStore = Instance<typeof ImageStore>;