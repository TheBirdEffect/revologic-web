import { t, Instance, onSnapshot } from 'mobx-state-tree'
import { ContentStore } from './ContentStore'

export const RootStore = t.model('RootStore', {
    contentStore: t.optional(ContentStore, {})
})

const contentStoreInstance = ContentStore.create()

onSnapshot(contentStoreInstance, snapshot => {
    console.log('Snapshot: ', snapshot)
})

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IRootStore extends Instance<typeof RootStore> { }

