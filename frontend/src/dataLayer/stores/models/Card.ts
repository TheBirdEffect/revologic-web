import { t, Instance } from 'mobx-state-tree';

export const Card = t.model({
    descriptionImg: t.string,
    headline: t.string,
    descriptor: t.maybeNull(t.string),
    destLink: t.string
})
    .views(self => ({
        getCard() {
            return {
                descriptionImg: self.descriptionImg,
                headline: self.headline,
                descriptor: self.descriptor,
                destLink: self.destLink
            }
        }
    }));

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ICardStore extends Instance<typeof Card> { };