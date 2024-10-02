import { observer } from "mobx-react-lite";
import { IDrawerProps } from "./IDrawerProps";
import { theme } from "../../../styles/Theme";
import {
  Home,
  CloudDone,
  RocketLaunch,
  SupportAgent,
  AccountCircle,
  VerifiedUser,
  Assignment,
} from "@mui/icons-material";

import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import styled from "styled-components";

const CustomDrawer = styled(SwipeableDrawer)`
  .MuiDrawer-paper {
    background-color: ${theme.colors.headerFooterBg};
  }
`;

export const Drawer: React.FC<IDrawerProps> = ( props ) => {
  const iconColor = theme.colors.backgroundRich;

  const NavItemList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => props.toggleDrawer(false)}
      onKeyDown={() => props.toggleDrawer(false)}
    >
      <List>
        {["Home", "Services", "Projects"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {text === "Home" ? (
                  <Home sx={{ color: iconColor }} />
                ) : text === "Services" ? (
                  <RocketLaunch sx={{ color: iconColor }} />
                ) : (
                  <CloudDone sx={{ color: iconColor }} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["About", "Contact"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {text === "About" ? (
                  <AccountCircle sx={{ color: iconColor }} />
                ) : text === "Contact" ? (
                  <SupportAgent sx={{ color: iconColor }} />
                ) : null}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Imprint", "Privacy"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {text === "Imprint" ? (
                  <Assignment sx={{ color: iconColor }} />
                ) : (
                  <VerifiedUser sx={{ color: iconColor }} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <CustomDrawer
    anchor="right"
    open={props.drawerOpen}
    onClose={() => props.toggleDrawer(false)}
    onOpen={() => props.toggleDrawer(true)}
  >
    <NavItemList />
  </CustomDrawer>
  );
};

export default observer(Drawer);
