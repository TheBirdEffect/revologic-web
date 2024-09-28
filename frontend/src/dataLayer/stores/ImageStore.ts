import { Instance, t } from "mobx-state-tree";
import { ImageModel } from "../models/ui/Image";
import { GalleryModel } from "../models/ui/GalleryModel";

export const ImageStore = t.model('ImageStore', {
    images: t.array(ImageModel),
    galleryModel: t.maybeNull((GalleryModel))
}).actions(self => ({
    addImage(image: Instance<typeof ImageModel>) {
        self.images.push(image);
    },
    loadImages() {
        // Logik zum Laden von Bildern, z.B. aus einer API
    }
})).views(self => ({
    getImageById(id: string) {
        return self.images.find(image => image.id === id)
    },
    getAllImages() {
        return self.images;
    },
    getImagesByGallery(modelId: string) {
        const gallery = self.galleryModel;
        console.log(gallery);
        if (gallery && gallery.id === modelId) {
            return gallery.imageIds.map(imageId => self.images.find(image => image.id === imageId)).filter(image => image !== undefined);
        }
        return [];
    }
}));


export type IImageStore = Instance<typeof ImageStore>;