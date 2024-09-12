import { t, Instance } from 'mobx-state-tree'
import { SectionStore } from './SectionStore'
import { ContentCardStore } from './ContentCardStore'


export const RootStore = t.model('RootStore', {
    sections: t.optional(SectionStore, {}),
    contentCards: t.optional(ContentCardStore, {})
})

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IRootStore extends Instance<typeof RootStore> { }

