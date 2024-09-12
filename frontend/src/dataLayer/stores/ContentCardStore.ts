import { Instance, t } from "mobx-state-tree";
import { ContentCard } from "./models/ContentCard";

export const ContentCardStore = t.model('ContentCardStore', {
    contentCards: t.map(ContentCard)
})

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IContentCardStore extends Instance<typeof ContentCardStore> { };
