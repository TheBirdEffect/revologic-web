import { t, Instance } from 'mobx-state-tree'
import { Content } from './models/Content'
import { Section } from './models/Section'


export const RootStore = t.model('RootStore', {
    content: t.optional(t.array(Content), []),
    sections: t.optional(t.array(Section), []),
})

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IRootStore extends Instance<typeof RootStore> { }
