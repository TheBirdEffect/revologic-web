// export interface ITeaserCardProps {
//     id?: string;
//     descriptionImg: string;
//     headline: string;
//     descriptor?: string;
//     hasRoundImage?: boolean;
// }

import { ITeaserCardModel } from "../../dataLayer/models/Card/TeaserCard";

export interface ITeaserCardProps {
    data: ITeaserCardModel;
}