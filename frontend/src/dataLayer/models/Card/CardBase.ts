import { t } from "mobx-state-tree";

export const CardBase = t.model('CardBase', {
    id: t.identifier,
    target: t.string,
});