import React from "react";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";

export default function SimpleMenuList({ open, currentMenu }) {
  const menuItems = [
    { key: "dashboard", icon: <TripOriginIcon />, text: "Dashboard", url: "/" },
    {
      key: "kelurahan",
      icon: <ContentPasteIcon />,
      text: "Menu Kelurahan",
      url: "/kelurahan",
    },
    {
      key: "pasien",
      icon: <PersonIcon />,
      text: "Menu Pasien",
      url: "/pasien",
    },
  ];

  return (
    <List>
      {menuItems.map((item) => (
        <Link
          href={item.url}
          key={item.key}
          passHref
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              selected={item.key === currentMenu}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 3,
                  justifyContent: "center",
                  color: item.key === currentMenu ? "primary.main" : "",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  );
}
