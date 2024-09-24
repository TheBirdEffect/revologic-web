import { t } from "mobx-state-tree";

export const CardBase = t.model('CardBase', {
    id: t.identifier,
    target: t.string,
    // type: t.enumeration(['TeaserCard', 'ProfileCard, ContentCard']),
    type: t.union(t.literal('TeaserCard'), t.literal('ProfileCard'), t.literal('ContentCard')),
});