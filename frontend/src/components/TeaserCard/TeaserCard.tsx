import { observer } from "mobx-react-lite";
import { ITeaserCardProps } from "./ITeaserCardProps";
import { StackLayout } from "../../styles/core/ui/StackLayout";
import { Image, RoundImage } from "../../styles/core/Image";
import { theme } from "../../styles/Theme";
import { CardDescriptor, CardHeadLine } from "../../styles/core/Headings";

const TeaserCard: React.FC<ITeaserCardProps> = ({
    // descriptionImg, 
    // headline, 
    // hasRoundImage,
    // descriptor
    data
}) => {

    return (
        <StackLayout 
        backgroundColor={theme.colors.teaserPrimary}
        borderRadius
        >
            {data.isRoundImage ? (
                <RoundImage src={data.descriptionImg} alt={data.imgAlt}/>
            ) : (
                <Image src={data.descriptionImg} alt={data.headline}/>
            )}
            <StackLayout id="Footer">
            <CardHeadLine>{data.headline}</CardHeadLine>
            {data.descriptor && 
            <CardDescriptor>{data.descriptor}</CardDescriptor>
            }
            </StackLayout>
        </StackLayout>
    );

};

export default observer(TeaserCard) ;