import { t, Instance } from 'mobx-state-tree'
import { ContentStore } from './ContentStore'

export const RootStore = t.model('RootStore', {
    contentStore: t.optional(ContentStore, {})
})

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IRootStore extends Instance<typeof RootStore> { }

