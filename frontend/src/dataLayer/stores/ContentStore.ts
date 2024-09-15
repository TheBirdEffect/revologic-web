import { t, Instance } from 'mobx-state-tree';
import { Content } from '../models/Content';

export const ContentStore = t.model('ContentStore', {
    content: t.array(Content)
})


export type IContentStore = Instance<typeof ContentStore>;