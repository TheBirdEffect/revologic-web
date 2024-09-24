import { t, Instance } from 'mobx-state-tree';
import { CardBase } from './CardBase';

// export const TeaserCard = t.model({
//     id: t.identifier,
//     descriptionImg: t.string,
//     imgAlt: t.optional(t.string, ''),
//     headline: t.string,
//     descriptor: t.maybeNull(t.string),
//     destLink: t.string,
//     type: t.literal('TeaserCard'),
//     isRoundImage: t.optional(t.boolean, false),
//     section: t.maybeNull(t.reference(Section))
// })
//     .actions(self => ({
//         getCard() {
//             return {
//                 id: self.id,
//                 descriptionImg: self.descriptionImg,
//                 headline: self.headline,
//                 descriptor: self.descriptor,
//                 destLink: self.destLink,
//                 isRoundImage: self.isRoundImage
//             }
//         }
//     }));

export const TeaserCardModel = CardBase.named('TeaserCard').props({
    descriptionImg: t.string,
    imgAlt: t.optional(t.string, ''),
    headline: t.string,
    descriptor: t.maybeNull(t.string),
    type: t.literal('TeaserCard'),
    isRoundImage: t.optional(t.boolean, false),
});

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
// export interface ITeaserCard extends Instance<typeof TeaserCardModel> { };
export type ITeaserCardModel = Instance<typeof TeaserCardModel>;