import { t, Instance } from 'mobx-state-tree'
import { SectionStore } from './SectionStore'
<<<<<<< HEAD
import { ContentStore } from './ContentStore'


export const RootStore = t.model('RootStore', {
    ContentStore: t.optional(ContentStore, {}),
    sectionStore: t.optional(SectionStore, {})
=======
import { ContentCardStore } from './ContentCardStore'


export const RootStore = t.model('RootStore', {
    sections: t.optional(SectionStore, {}),
    contentCards: t.optional(ContentCardStore, {})
>>>>>>> eb20b826eee05cb9e36ecd2709af1f4694ea508c
})

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IRootStore extends Instance<typeof RootStore> { }

