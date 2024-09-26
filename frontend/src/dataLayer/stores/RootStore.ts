import { t, Instance, onSnapshot } from 'mobx-state-tree'
import { ContentStore } from './ContentStore'
import { ImageStore } from './ImageStore'

export const RootStore = t.model('RootStore', {
    contentStore: t.optional(ContentStore, {}),
    ImageStore: t.optional(ImageStore, {})
})

const contentStoreInstance = ContentStore.create()
const imageStoreInstance = ImageStore.create()

onSnapshot(contentStoreInstance, snapshot => {
    console.log('Snapshot: ', snapshot)
})

onSnapshot(imageStoreInstance, snapshot => {
    console.log('Snapshot: ', snapshot)
})

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IRootStore extends Instance<typeof RootStore> { }

