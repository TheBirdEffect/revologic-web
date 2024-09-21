import { t, Instance } from 'mobx-state-tree';

export const TeaserCard = t.model({
    id: t.identifier,
    descriptionImg: t.string,
    imgAlt: t.optional(t.string, ''),
    headline: t.string,
    descriptor: t.maybeNull(t.string),
    destLink: t.string,
    type: t.literal('TeaserCard'),
    isRoundImage: t.optional(t.boolean, false)
})
    .actions(self => ({
        getCard() {
            return {
                id: self.id,
                descriptionImg: self.descriptionImg,
                headline: self.headline,
                descriptor: self.descriptor,
                destLink: self.destLink,
                isRoundImage: self.isRoundImage
            }
        }
    }));

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ITeaserCard extends Instance<typeof TeaserCard> { };