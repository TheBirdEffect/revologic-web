import { Instance, t } from "mobx-state-tree";
import { CardBase } from "./CardBase";
import { ImageModel } from "../ui/Image";

export const ContentCardModel = CardBase.named('ContentCard').props({
    headline: t.string,
    content: t.string,
    images: t.maybeNull(t.array(t.reference(ImageModel))),
    type: t.literal('ContentCard')
}).views(self => ({
    hasGallery: () => self.images !== null && self.images.length > 0
}));

export type IContentCardModel = Instance<typeof ContentCardModel>;