import { observer } from "mobx-react-lite";
import { ITeaserCardProps } from "./ITeaserCardProps";
import { StackLayout } from "../../styles/core/ui/StackLayout";
import { Image, RoundImage } from "../../styles/core/Image";
import { theme } from "../../styles/Theme";
import { CardDescriptor, CardHeadLine } from "../../styles/core/Headings";

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
            <CardHeadLine>{headline}</CardHeadLine>
            {descriptor && 
            <CardDescriptor>{descriptor}</CardDescriptor>
            }
            </StackLayout>
        </StackLayout>
    );

};

export default observer(TeaserCard) ;