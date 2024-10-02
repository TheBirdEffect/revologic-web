import { t, Instance } from 'mobx-state-tree';
import { Section } from '../models/Section'; // Fix the import path
import { newCards, newDemo } from '../demoData/demoDataSections';
import { TeaserCardModel } from '../models/Card/TeaserCard';
import { ProfileContentCardModel } from '../models/Card/ProfileContentCard';
import { ContentCardModel } from '../models/Card/ContentCard';

export const ContentStore = t.model('SectionStore', {
    sections: t.array(Section),
    cards: t.optional(t.array(t.union(TeaserCardModel, ProfileContentCardModel, ContentCardModel)), [])
}).views(self => ({
    getSection(id: string) {
        return self.sections.find(section => section.id === id);
    }
}));

ContentStore.create({
    sections: newDemo.sections,
    // cards: newDemo.cards
    cards: newCards
});

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ISectionStore extends Instance<typeof ContentStore> { }