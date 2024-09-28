import { Instance, t } from "mobx-state-tree";
import { CardBase } from "./CardBase";
import { GalleryModel } from "../ui/GalleryModel";

export const ContentCardModel = CardBase.named('ContentCard').props({
    headline: t.string,
    content: t.string,
    gallery: t.maybeNull(t.reference(GalleryModel)),
    type: t.literal('ContentCard')
});

export type IContentCardModel = Instance<typeof ContentCardModel>;