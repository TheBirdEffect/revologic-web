import { t, Instance } from 'mobx-state-tree';
import { Card } from '../models/Card';

export const CardStore = t.model('CardStore', {
    cards: t.array(Card)
})

export type ICardStore = Instance<typeof CardStore>;