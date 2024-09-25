import { Instance, t } from "mobx-state-tree";

export const CardBase = t.model('CardBase', {
    id: t.identifier,
    target: t.string,
    // type: t.enumeration(['TeaserCard', 'ProfileCard, ContentCard']),
    type: t.union(t.literal('TeaserCard'), t.literal('ProfileContentCard'), t.literal('ContentCard')),
}).views(self => ({
    isTeaserCard() {
        return self.type === 'TeaserCard';
    },
    isProfileContentCard() {
        return self.type === 'ProfileContentCard';
    },
    isContentCard() {
        return self.type === 'ContentCard';
    }
})).actions(self => ({
    getCard() {
        return self;
    }
}));

export type ICardBaseType = Instance<typeof CardBase>;