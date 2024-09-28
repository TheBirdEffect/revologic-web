import { Instance, t } from "mobx-state-tree";

export const GalleryModel = t.model('Gallery', {
    id: t.identifier,
    imageIds: t.array(t.string)
});

export type IGalleryModel = Instance<typeof GalleryModel>