import { t } from "mobx-state-tree";
import { Card } from "../models/Card";
import { ContentCard } from "../models/ContentCard";

export const UnionCard = t.union({
    dispatcher: (snapshot) => {
        if (snapshot.type === 'Card') {
            return Card;
        } else {
            return ContentCard;
        }
    }
}, Card, ContentCard
);
