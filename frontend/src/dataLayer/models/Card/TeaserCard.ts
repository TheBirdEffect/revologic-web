import { t, Instance } from 'mobx-state-tree';
import { CardBase } from './CardBase';

export const TeaserCardModel = CardBase.named('TeaserCard').props({
    type: t.literal('TeaserCard'),
    descriptionImg: t.string,
    imgAlt: t.optional(t.string, ''),
    headline: t.optional(t.string, ''),
    descriptor: t.maybeNull(t.string),
    isRoundImage: t.optional(t.boolean, false),
}).actions(self => ({
    getTeaserCard() {
        return self;
    }
}));

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
// export interface ITeaserCard extends Instance<typeof TeaserCardModel> { };
export type ITeaserCardModel = Instance<typeof TeaserCardModel>;