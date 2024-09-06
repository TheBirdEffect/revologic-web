import { t, Instance } from 'mobx-state-tree';
import { Section } from './models/Section'; // Fix the import path
import { CardStore } from './CardStore';

export const SectionStore = t.model('SectionStore', {
    section: t.array(Section), // Fix the property name
    cardStore: t.maybeNull(CardStore,
    )
});

export type ISectionStore = Instance<typeof SectionStore>; // Fix the interface name