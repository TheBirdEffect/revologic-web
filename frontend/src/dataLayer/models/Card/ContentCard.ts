import { t } from "mobx-state-tree";
import { CardBase } from "./CardBase";

// export const ContentCard = t.model({
//     id: t.identifier,
//     headline: t.string,
//     content: t.string,
//     images: t.maybeNull(t.array(t.string)),
//     type: t.literal('ContentCard')
// });

export const ContentCard = CardBase.named('ContentCard').props({
    headline: t.string,
    content: t.string,
    images: t.maybeNull(t.array(t.string)),
    type: t.literal('ContentCard')
});