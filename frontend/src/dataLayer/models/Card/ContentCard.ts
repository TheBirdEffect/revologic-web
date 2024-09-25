import { Instance, t } from "mobx-state-tree";
import { CardBase } from "./CardBase";

export const ContentCardModel = CardBase.named('ContentCard').props({
    headline: t.string,
    content: t.string,
    images: t.maybeNull(t.array(t.string)),
    type: t.literal('ContentCard')
});

export type IContentCardModel = Instance<typeof ContentCardModel>;