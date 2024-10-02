import { observer } from "mobx-react-lite";
import { ITeaserCardProps } from "./ITeaserCardProps";
import { StackLayout } from "../../styles/core/ui/StackLayout";
import { Image, RoundImage } from "../../styles/core/Image";
import { theme } from "../../styles/Theme";
import { CardDescriptor, CardHeadLine } from "../../styles/core/Headings";
import { useCallback } from "react";

const TeaserCard: React.FC<ITeaserCardProps> = ({
    data
}) => {
    const handleClick = useCallback(() => {
        console.log(data.target);
    }, []);

    return (
        <StackLayout 
        backgroundColor={theme.colors.cardPrimary}
        borderRadius
        width100
        onClick={handleClick}
        paddingTop="10px"
        paddingBottom="20px"
        //Flex must be set in any way
        minWidth="260px"
        maxWidth="500px"
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