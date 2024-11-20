"use client";

import * as React from 'react';
import { AppBar, Toolbar, Button, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useRouter } from 'next/navigation';

// Importer les icônes
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MenuIcon from '@mui/icons-material/Menu';

// Drawer width for sidebar
const drawerWidth = 240;

// Layout component with explicit typing for 'children'
const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  // Toggle drawer visibility
  const toggleDrawer = () => {
    setOpen(!open);
  };

  // Handle navigation and close drawer
  const handleNavigation = (path: string) => {
    router.push(path);
    setOpen(false); // Close the menu after navigating
  };

  // Menu items for the drawer
  const menuItems = [
    { text: 'Accueil', path: '/', icon: <HomeIcon /> },
    { text: 'Influenceurs', path: '/influencers', icon: <PersonIcon /> },
    { text: 'Contact', path: '/contact', icon: <ContactMailIcon /> },
  ];

  return (
    <html lang="fr">
      <body>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#fff' }}>
          {/* AppBar with menu items */}
          <AppBar
            position="fixed"
            style={{
              zIndex: 1201,
              backgroundColor: 'black',
              color: 'white',
              boxShadow: 'none',
            }}
          >
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Button onClick={toggleDrawer} color="inherit">
                <MenuIcon />
              </Button>
              <Typography variant="h6" noWrap style={{ flexGrow: 1, textAlign: 'center' }}>
                LE ROND POINT MANAGEMENT
              </Typography>
              <div style={{ width: '64px' }} />
            </Toolbar>
          </AppBar>

          {/* Drawer with menu items aligned horizontally */}
          <Drawer
            variant="temporary"
            open={open}
            onClose={toggleDrawer}
            style={{
              width: drawerWidth,
              flexShrink: 0,
              zIndex: 1200,
            }}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              '& .MuiDrawer-paper': {
                width: '100%',
                backgroundColor: 'black',
                display: 'flex',
                flexDirection: 'row', // Horizontal layout
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px 0',
                marginTop: '64px',
              },
            }}
          >
            <List style={{ display: 'flex' }}>
              {menuItems.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    textAlign: 'center',
                    margin: '0 12px',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#ADD8E6',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#00008B',
                      transform: 'scale(1.03)',
                      transition: 'transform 0.2s ease-in-out',
                    },
                  }}
                >
                  <div style={{ marginRight: '8px' }}>{item.icon}</div>
                  <ListItemText primary={item.text} sx={{ fontSize: '16px', fontWeight: '500' }} />
                </ListItem>
              ))}
            </List>
          </Drawer>

          {/* Main content section */}
          <main style={{ flexGrow: 1, padding: '20px', marginTop: '80px', backgroundColor: '#f5f5f5', borderRadius: '12px' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default Layout;
