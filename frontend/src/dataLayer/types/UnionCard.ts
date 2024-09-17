import { t } from "mobx-state-tree";
import { TeaserCard } from "../models/TeaserCard";
import { ContentCard } from "../models/ContentCard";

export const UnionCard = t.union({
    dispatcher: (snapshot) => {
        if (snapshot.type === 'TeaserCard') {
            return TeaserCard;
        } else {
            return ContentCard;
        }
    }
}, TeaserCard, ContentCard
);
