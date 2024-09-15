import { t, Instance } from 'mobx-state-tree';
import { Section } from '../models/Section'; // Fix the import path
import { CardStore } from './CardStore';
import { ContentCard } from '../models/ContentCard';

export const SectionStore = t.model('SectionStore', {
    section: t.array(Section),
    contentCards: t.optional(t.array(ContentCard), []),

});

export type ISectionStore = Instance<typeof SectionStore>; // Fix the interface name