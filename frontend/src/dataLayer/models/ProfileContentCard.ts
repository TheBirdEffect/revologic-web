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
})