import { t, Instance } from 'mobx-state-tree'
import { ContentStore } from './ContentStore'
import { ImageStore } from './ImageStore'
import { ImageModel } from '../models/ui/Image'
import { GalleryModel } from '../models/ui/GalleryModel'

export const RootStore = t.model('RootStore', {
    contentStore: t.optional(ContentStore, {}),
    imageStore: t.optional(ImageStore, {})
})

ContentStore.create()
// const imageStoreInstance = ImageStore.create()

// onSnapshot(contentStoreInstance, snapshot => {
//     console.log('Snapshot: ', snapshot)
// })

// onSnapshot(imageStoreInstance, snapshot => {
//     console.log('Snapshot: ', snapshot)
// })

// ImageModel.create({
//     id: '1',
//     url: "/img/tech/html.png",
//     alt: "HTML Logo"
// });

// ImageModel.create({
//     id: '2',
//     url: "/img/tech/react.png",
//     alt: "React Logo"
// });

// ImageModel.create({
//     id: '3',
//     url: "/img/tech/csharp.png",
//     alt: "JavaScript Logo"
// });

// ImageModel.create({
//     id: '4',
//     url: "/img/tech/typescript.png",
//     alt: "Typescript Logo"
// });

// ImageModel.create({
//     id: '5',
//     url: "/img/tech/netcore.png",
//     alt: "Node.js Logo"
// });

// const imageStoreContext = ImageStore.create({
//     images: [
//         ImageModel.create({
//             id: '1',
//             url: "/img/tech/html.png",
//             alt: "HTML Logo"
//         }),
//         ImageModel.create({
//             id: '2',
//             url: "/img/tech/react.png",
//             alt: "React Logo"
//         }),
//         ImageModel.create({
//             id: '3',
//             url: "/img/tech/csharp.png",
//             alt: "JavaScript Logo"
//         }),
//         ImageModel.create({
//             id: '4',
//             url: "/img/tech/typescript.png",
//             alt: "Typescript Logo"
//         }),
//         ImageModel.create({
//             id: '5',
//             url: "/img/tech/netcore.png",
//             alt: "Node.js Logo"
//         }),
//     ],
// });

// GalleryModel.create({
//     id: 'techStack',
//     imageIds: ['1', '2', '3', '4', '5']
// });


// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IRootStore extends Instance<typeof RootStore> { }

