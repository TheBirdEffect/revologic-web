import { observer } from "mobx-react-lite";
import { IContentCardProps } from "./IContentCardProps";
import { StackLayout } from "../../styles/core/ui/StackLayout";
import { ContentCardHeadline } from "../../styles/core/Headings";
import { Text } from "../../styles/Text";

export const ContentCard: React.FC<IContentCardProps> = ({ data }) => {
    return(
        <StackLayout>
            <ContentCardHeadline>{data.headline}</ContentCardHeadline>
            <Text>{data.content}</Text>
            
        </StackLayout>
    )
}

export default observer(ContentCard);