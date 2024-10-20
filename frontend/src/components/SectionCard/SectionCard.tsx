import { useCallback } from "react";
import { StackLayout } from "../../styles/core/ui/StackLayout";
import { ISectionCardProps } from "./ISectionCardProps";
import { Button } from "../../styles/core/Button";
import { Overline } from "../../styles/core/Headings";
import { SectionHeadlineWrapper } from "../../styles/core/ui/TextLayout";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

export const SectionCard: React.FC<ISectionCardProps> = ({
  data,
  children,
  noOverline,
  noReadMoreButton,
}) => {
  const navigate = useNavigate();

  const handleReadMore = useCallback(() => {
    if (data.readMoreLink) {
      navigate(data.readMoreLink);
    }
  }, [data.readMoreLink, navigate]);

  return (
    <StackLayout
      backgroundColor={"rgb(248, 248, 248, 0.7)"} //TODO: add this color to theme standard colors
      borderRadius
      marginTop="25px"
      marginBottom="25px"
      paddingTop="-50px"
      paddingBottom="20px"
      width100
    >
      <SectionHeadlineWrapper>
        { noOverline ? null : <Overline>{data.headline}</Overline> }
      </SectionHeadlineWrapper>
      <StackLayout wrap flexDirection="row">{children}</StackLayout>
      {noReadMoreButton ? null : (
        <Button role="button" onClick={handleReadMore}>
          Read More
        </Button>
      )}
    </StackLayout>
  );
};

export default observer(SectionCard);
