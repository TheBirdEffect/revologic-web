import { t, Instance } from 'mobx-state-tree';
<<<<<<< HEAD
import { Section } from '../models/Section'; // Fix the import path
import { CardStore } from './CardStore';
import { ContentCard } from '../models/ContentCard';

export const SectionStore = t.model('SectionStore', {
    section: t.array(Section),
    contentCards: t.optional(t.array(ContentCard), []),

=======
import { Section } from './models/Section'; // Fix the import path

export const SectionStore = t.model('SectionStore', {
    sections: t.array(Section), // Fix the property name
    contentCards: t.array(t.array(t.string)) // Fix the property name
>>>>>>> eb20b826eee05cb9e36ecd2709af1f4694ea508c
});

export type ISectionStore = Instance<typeof SectionStore>; // Fix the interface name