import { t, Instance } from 'mobx-state-tree'
import { SectionStore } from './SectionStore'
import { ContentStore } from './ContentStore'


export const RootStore = t.model('RootStore', {
    ContentStore: t.optional(ContentStore, {}),
    sectionStore: t.optional(SectionStore, {})
})

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IRootStore extends Instance<typeof RootStore> { }
