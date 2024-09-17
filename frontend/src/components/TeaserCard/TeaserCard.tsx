import { observer } from "mobx-react-lite";
import { ITeaserCardProps } from "./ITeaserCardProps";
import { StackLayout } from "../../styles/core/ui/StackLayout";
import { Image } from "../../styles/core/Image";
import { theme } from "../../styles/Theme";

const TeaserCard: React.FC<ITeaserCardProps> = ({descriptionImg, headline}) => {

    return (
        <StackLayout backgroundColor={theme.colors.teaserPrimary} >
            <Image src={descriptionImg} alt={headline} />
            <h3>{headline}</h3>
        </StackLayout>
    );

};

export default observer(TeaserCard) ;