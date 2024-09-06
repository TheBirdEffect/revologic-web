import { t, Instance } from 'mobx-state-tree'
import { Content } from './models/Content'
import { Section } from './models/Section'


const RootStore = t.model('RootStore', {
    content: t.optional(t.array(Content), []),
    sections: t.optional(t.array(Section), []),
})
