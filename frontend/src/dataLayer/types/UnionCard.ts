import { t } from "mobx-state-tree";
import { TeaserCard } from "../models/TeaserCard";
import { ContentCard } from "../models/ContentCard";
import { ProfileContentCard } from "../models/ProfileContentCard";

export const UnionCard = t.union({
    dispatcher: (snapshot) => {
        if (snapshot.type === 'TeaserCard') {
            return TeaserCard;
        } else if (snapshot.type === 'ProfileContentCard') {
            return ProfileContentCard;
        } else {
            return ContentCard;
        }
    }
}, TeaserCard, ContentCard
);
