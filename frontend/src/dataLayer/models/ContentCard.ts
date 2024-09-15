import { t } from "mobx-state-tree";

export const ContentCard = t.model({
    id: t.identifier,
    headline: t.string,
    content: t.string,
    images: t.maybeNull(t.array(t.string))
});