import React, { useCallback } from "react";
import { IFooterProps } from "./IFooterProps";
import { StackLayout } from "../../../styles/core/ui/StackLayout";
import { TextButton } from "../../../styles/core/Button";
import { theme } from "../../../styles/Theme";
import { observer } from "mobx-react-lite";

export const Footer: React.FC<IFooterProps> = () => {
  const handlePrivacyClick = useCallback(() => {
    console.log("opensPrivacyPopup");
  }, []);

  const handleImpressClick = useCallback(() => {
    console.log("openImpressPopup");
  }, []);

  return (
    <>
    <StackLayout
      width100
      height="60px"
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
      backgroundColor={theme.colors.headerFooterBg}
      hasShadow="up"
      marginTop="20px"
    >
      <TextButton onClick={handlePrivacyClick}>Privacy</TextButton>
      <StackLayout
        noGap
        noPadding
        width="2px"
        borderRadius
        height="20px"
        backgroundColor={theme.colors.secondaryTextColor}
      />
      <TextButton onClick={handleImpressClick}>Impress</TextButton>
    </StackLayout>
    </>
  );
};

export default observer(Footer);
