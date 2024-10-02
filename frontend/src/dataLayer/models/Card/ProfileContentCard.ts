import { Instance, t } from "mobx-state-tree";
import { CardBase } from "./CardBase";

export const ProfileContentCardModel = CardBase.named('ProfileContentCard').props({
    type: t.literal('ProfileContentCard'),
    profileImg: t.maybe(t.string),
    imgAlt: t.optional(t.string, ''),
    name: t.string,
    degree: t.string,
    position: t.string,
    offers: t.array(t.optional(t.string, '')),
    interests: t.array(t.string)
}).views(self => ({
    getProfileContentCard() {
        return self;
    }
}));

export type IProfileContentCardModel = Instance<typeof ProfileContentCardModel>;