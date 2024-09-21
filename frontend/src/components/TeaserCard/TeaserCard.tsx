import { observer } from "mobx-react-lite";
import { ITeaserCardProps } from "./ITeaserCardProps";
import { StackLayout } from "../../styles/core/ui/StackLayout";
import { Image, RoundImage } from "../../styles/core/Image";
import { theme } from "../../styles/Theme";

const TeaserCard: React.FC<ITeaserCardProps> = ({
    descriptionImg, 
    headline, 
    hasRoundImage,
    descriptor
}) => {

    return (
        <StackLayout 
        backgroundColor={theme.colors.teaserPrimary}
        borderRadius
        >
            {hasRoundImage ? (
                <RoundImage src={descriptionImg} alt={headline}/>
            ) : (
                <Image src={descriptionImg} alt={headline}/>
            )}
            <StackLayout id="Footer">
            <h3>{headline}</h3>
            {descriptor && <h3>{descriptor}</h3>}
            </StackLayout>
        </StackLayout>
    );

};

export default observer(TeaserCard) ;