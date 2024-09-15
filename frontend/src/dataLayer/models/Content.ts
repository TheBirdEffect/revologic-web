import { Instance, t } from "mobx-state-tree";

export const Content = t.model({
    headline: t.string,
    textContent: t.string,
    subheading: t.maybeNull(t.string),
});

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IContentStore extends Instance<typeof Content> { };