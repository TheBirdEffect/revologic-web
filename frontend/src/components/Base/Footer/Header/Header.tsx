import { observer } from "mobx-react-lite";
import React, { useMemo } from "react";
import { StackLayout } from "../../../../styles/core/ui/StackLayout";
import { CorpLogo, MenuIcon } from "../../../../styles/core/Image";
import { useRootStore } from "../../../../context/RootStoreContext";
import { theme } from "../../../../styles/Theme";
import { LanguageButton } from "../../../../styles/core/Button";

export const Header: React.FC = () => {
  const [language, setLanguage] = React.useState("EN");
  const { imageStore } = useRootStore();
  const corpLogo = imageStore.getImageById("CorpLogoMobile");
  const burgerIcon = imageStore.getImageById("BurgerIcon");
  const screen = window.screen.height;

  const handleLanguageChange = useMemo(() => {
    return () => {
      setLanguage(language === "EN" ? "DE" : "EN");
    };
  }, [language]);


  return (
    <StackLayout backgroundColor={theme.colors.backgroundRich} width100 noPadding>
      <StackLayout
        backgroundColor={theme.colors.headerFooterBg}
        width100
        height="60px"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
        hasShadow="down"
      >
        <LanguageButton onClick={handleLanguageChange}>{language}</LanguageButton>
        <MenuIcon src={burgerIcon?.url} alt={burgerIcon?.alt} />
      </StackLayout>
      <StackLayout paddingTop={`${screen*0.13}px`} paddingBottom={`${screen*0.13}px`}>
        <CorpLogo src={corpLogo?.url} alt={corpLogo?.alt} />
      </StackLayout>
    </StackLayout>
  );
};

export default observer(Header);
