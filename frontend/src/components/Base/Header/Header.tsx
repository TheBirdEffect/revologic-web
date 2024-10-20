import { observer } from "mobx-react-lite";
import React, { useCallback, useMemo } from "react";
import { StackLayout } from "../../../styles/core/ui/StackLayout";
import { theme } from "../../../styles/Theme";
import { LanguageButton } from "../../../styles/core/Button";
import { Button } from "@mui/material";
import MenuRounded from "@mui/icons-material/MenuRounded";
import Drawer from "../Drawer/Drawer";

export const Header: React.FC = () => {
  const [language, setLanguage] = React.useState("EN");
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleLanguageChange = useMemo(() => {
    return () => {
      setLanguage(language === "EN" ? "DE" : "EN");
    };
  }, [language]);

  const toggleDrawer = useCallback((props: boolean) => {
    setDrawerOpen(props);
  }, []);

  return (
    <StackLayout
      backgroundColor={theme.colors.backgroundRich}
      width100
      noPadding
      marginBottom="20px"
    >
      <StackLayout
        backgroundColor={theme.colors.headerFooterBg}
        width100
        height="60px"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
        hasShadow="down"
      >
        <LanguageButton onClick={handleLanguageChange}>
          {language}
        </LanguageButton>
        <Button onClick={() => toggleDrawer(!drawerOpen)}>
          <MenuRounded sx={{ width: 45, height: 45, color: "black" }} />
        </Button>
        <Drawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      </StackLayout>
    </StackLayout>
  );
};

export default observer(Header);
