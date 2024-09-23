import { t } from "mobx-state-tree";

export const ProfileContentCard = t.model({
    id: t.identifier,
    profileImg: t.string,
    imgAlt: t.optional(t.string, ''),
    name: t.string,
    degree: t.string,
    position: t.string,
    offers: t.array(t.string),
    interests: t.array(t.string),
    type: t.literal('ProfileContentCard'),
}).actions(self => ({
    getProfileContentCard() {
        return {
            id: self.id,
            profileImg: self.profileImg,
            imgAlt: self.imgAlt,
            name: self.name,
            degree: self.degree,
            position: self.position,
            offers: self.offers,
            interests: self.interests
        }
    }
}));
