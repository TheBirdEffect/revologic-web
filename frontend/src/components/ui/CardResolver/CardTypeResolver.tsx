import { observer } from "mobx-react-lite";
import { ICardTypeResolverProps } from "./ICardTypeResolverProps";
import TeaserCard from "../../TeaserCard/TeaserCard";
import ProfileContentCard from "../../ProfileContentCard/ProfileContentCard";
import ContentCard from "../../ContentCard/ContentCard";
import { ITeaserCardModel } from "../../../dataLayer/models/Card/TeaserCard";
import { IProfileContentCardModel } from "../../../dataLayer/models/Card/ProfileContentCard";
import { IContentCardModel } from "../../../dataLayer/models/Card/ContentCard";
import { StackLayout } from "../../../styles/core/ui/StackLayout";

export const CardTypeResolver: React.FC<ICardTypeResolverProps> = ({ data }) => {
  return (
    <StackLayout width100>
      {data.isTeaserCard() ? (
        <TeaserCard data={data as ITeaserCardModel} key={data.id} />
      ) : data.isProfileContentCard() ? (
        <ProfileContentCard
          data={data as IProfileContentCardModel}
          key={data.id}
        />
      ) : data.isContentCard() ? (
        <ContentCard data={data as IContentCardModel} key={data.id} />
      ) : null}
    </StackLayout>
  );
};

export default observer(CardTypeResolver);
