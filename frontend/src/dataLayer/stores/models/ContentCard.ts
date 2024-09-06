import { t } from "mobx-state-tree";

export const ContentCard = t.model({
    headline: t.string,
    content: t.string,
    images: t.array(t.string)
});