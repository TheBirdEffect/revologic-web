import { useCallback } from "react";
import { StackLayout } from "../../styles/core/ui/StackLayout";
import { ISectionCardProps } from "./ISectionCardProps";
import { Button } from "../../styles/core/Button";
import { Overline } from "../../styles/core/Overline";

const SectionCard: React.FC<ISectionCardProps> = ({
  headline,
  readMoreLink,
  children,
}) => {
  const handleReadMore = useCallback(() => {
    console.log(readMoreLink + "Clicked");
  }, []);

  return (
    <StackLayout backgroundColor={"rgb(248, 248, 248, 0.7)"} margin={'50px 0px'}>
      <div style={{ top: '-30px', position: 'relative' }}>
        <Overline>{headline}</Overline>
      </div>
      {children}
      <Button role="button" onClick={handleReadMore}>
        Read More
      </Button>
    </StackLayout>
  );
};

export default SectionCard;
