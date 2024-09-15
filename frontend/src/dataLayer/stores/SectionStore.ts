import { t, Instance } from 'mobx-state-tree';
import { Section } from '../models/Section'; // Fix the import path

export const SectionStore = t.model('SectionStore', {
    sections: t.array(Section), // Fix the property name
    contentCards: t.array(t.array(t.string)) // Fix the property name
});

// export type ISectionStore = Instance<typeof SectionStore>; // Fix the interface name

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ISectionStore extends Instance<typeof SectionStore> { } // Fix the interface name