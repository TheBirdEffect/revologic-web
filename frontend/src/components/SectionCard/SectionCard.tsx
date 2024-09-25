import { useCallback } from "react";
import { StackLayout } from "../../styles/core/ui/StackLayout";
import { ISectionCardProps } from "./ISectionCardProps";
import { Button } from "../../styles/core/Button";
import { Overline } from "../../styles/core/Headings";
import { SectionHeadlineWrapper } from "../../styles/core/ui/TextLayout";
import { observer } from "mobx-react-lite";

export const SectionCard: React.FC<ISectionCardProps> = ({
  data,
  children,
}) => {
  const handleReadMore = useCallback(() => {
    console.log(data.readMoreLink + "Clicked");
  }, []);

  return (
    <StackLayout 
    backgroundColor={"rgb(248, 248, 248, 0.7)"}
    borderRadius
    marginTop="50px"
    >
      <SectionHeadlineWrapper>
        <Overline>{data.headline}</Overline>
      </SectionHeadlineWrapper>
      {children}
      <Button role="button" onClick={handleReadMore}>
        Read More
      </Button>
    </StackLayout>
  );
};

export default observer(SectionCard);
