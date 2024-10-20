import { ITeaserCardModel } from "../../../dataLayer/models/Card/TeaserCard";
import { IProfileContentCardModel } from "../../../dataLayer/models/Card/ProfileContentCard";
import { IContentCardModel } from "../../../dataLayer/models/Card/ContentCard";


export interface ICardTypeResolverProps {
    data: ITeaserCardModel | IProfileContentCardModel | IContentCardModel;
}