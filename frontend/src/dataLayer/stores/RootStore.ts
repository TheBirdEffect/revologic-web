import { t, Instance } from 'mobx-state-tree'
import { ContentStore } from './ContentStore'
import { ImageStore } from './ImageStore'

export const RootStore = t.model('RootStore', {
    contentStore: t.optional(ContentStore, {}),
    imageStore: t.optional(ImageStore, {})
})

// ContentStore.create()


// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IRootStore extends Instance<typeof RootStore> { }

