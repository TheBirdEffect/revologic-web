import { t, Instance } from 'mobx-state-tree';
import { Section } from '../models/Section'; // Fix the import path

export const contentStore = t.model('SectionStore', {
    sections: t.array(Section)
}).views(self => ({
    getSection(id: string) {
        return self.sections.find(section => section.id === id);
    }
}));

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ISectionStore extends Instance<typeof contentStore> { }