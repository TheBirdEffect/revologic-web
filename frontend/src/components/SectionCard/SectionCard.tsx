import { useCallback } from "react";
import { StackLayout } from "../../styles/core/ui/StackLayout";
import { ISectionCardProps } from "./ISectionCardProps";

const SectionCard: React.FC<ISectionCardProps> = ({headline, readMoreLink, children}) => {
    const handleReadMore = useCallback( () => {
        console.log(readMoreLink + "Clicked");
    }, []);

    return (
        <StackLayout backgroundColor={'rgb(248, 248, 248, 0.7)'}>
            <h2>{headline}</h2>
            {children}
            <button role="button" onClick={handleReadMore}>Read More</button>
        </StackLayout>
    )
}

export default SectionCard;