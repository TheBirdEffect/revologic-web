import { t, Instance } from 'mobx-state-tree'
import { contentStore } from './SectionStore'

export const RootStore = t.model('RootStore', {
    contentStore: t.optional(contentStore, {})
})

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IRootStore extends Instance<typeof RootStore> { }

