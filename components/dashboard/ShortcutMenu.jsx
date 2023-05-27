import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";

export default function ShortcutMenu() {
  const menuItems = [
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
    <Box sx={{ width: "100%" }}>
      <List>
        {menuItems.map((item) => (
          <Link
            key={item.key}
            href={item.url}
            passHref
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
}
