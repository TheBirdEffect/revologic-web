import { t, Instance } from 'mobx-state-tree';

export const TeaserCard = t.model({
    id: t.identifier,
    descriptionImg: t.string,
    headline: t.string,
    descriptor: t.maybeNull(t.string),
    destLink: t.string,
    type: t.literal('TeaserCard')
})
    .actions(self => ({
        getCard() {
            return {
                id: self.id,
                descriptionImg: self.descriptionImg,
                headline: self.headline,
                descriptor: self.descriptor,
                destLink: self.destLink
            }
        }
    }));

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ITeaserCard extends Instance<typeof TeaserCard> { };