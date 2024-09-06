import { Instance, t } from 'mobx-state-tree';

export const Section = t.model({
    headline: t.string,
    readMoreLink: t.maybeNull(t.string)
});

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ISectionStore extends Instance<typeof Section> { };