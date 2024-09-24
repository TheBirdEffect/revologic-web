import { t } from "mobx-state-tree";
import { TeaserCard } from "../models/Card/TeaserCard";
import { ContentCard } from "../models/Card/ContentCard";
import { ProfileContentCard } from "../models/Card/ProfileContentCard";

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
