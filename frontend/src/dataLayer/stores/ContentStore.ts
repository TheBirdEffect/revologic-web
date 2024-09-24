import { t, Instance } from 'mobx-state-tree';
import { Section } from '../models/Section'; // Fix the import path
import { CardBase } from '../models/Card/CardBase';
import { newDemo } from '../demoData/demoDataSections';

export const ContentStore = t.model('SectionStore', {
    sections: t.array(Section),
    cards: t.array(CardBase)
}).views(self => ({
    getSection(id: string) {
        return self.sections.find(section => section.id === id);
    }
}));

ContentStore.create({
    sections: newDemo.sections,
    cards: newDemo.cards
});

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ISectionStore extends Instance<typeof ContentStore> { }