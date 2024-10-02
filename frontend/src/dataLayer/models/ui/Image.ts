import { Instance, t } from "mobx-state-tree";

export const ImageModel = t.model('Image', {
    id: t.identifier,
    url: t.string,
    alt: t.string,
})

export type IImageModel = Instance<typeof ImageModel>