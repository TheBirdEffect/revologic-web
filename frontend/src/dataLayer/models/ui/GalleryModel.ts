import { Instance, t } from "mobx-state-tree";

export const GalleryModel = t.model('Gallery', {
    id: t.identifier,
    imageIds: t.array(t.string)
});


GalleryModel.create({
    id: 'techStack',
    imageIds: ['1', '2', '3', '4', '5']
});

export type IGalleryModel = Instance<typeof GalleryModel>