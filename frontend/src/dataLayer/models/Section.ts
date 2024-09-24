import { Instance, t } from 'mobx-state-tree';
import { CardBase } from './Card/CardBase';
// import { UnionCard } from '../types/UnionCard';

export const Section = t.model({
    id: t.identifier,
    headline: t.string,
    readMoreLink: t.maybeNull(t.string),
    cards: t.array(t.reference(CardBase))
});

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ISection extends Instance<typeof Section> { };