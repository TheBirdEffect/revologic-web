import { Instance, t } from 'mobx-state-tree';
import { ProfileContentCardModel } from './Card/ProfileContentCard';
import { TeaserCardModel } from './Card/TeaserCard';

export const Section = t.model({
    id: t.identifier,
    headline: t.string,
    readMoreLink: t.maybeNull(t.string),
    cards: t.array(t.reference(t.union(TeaserCardModel, ProfileContentCardModel))),
});

export type ISectionModel = Instance<typeof Section>;