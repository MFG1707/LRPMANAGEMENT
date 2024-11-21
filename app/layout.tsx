"use client";

import * as React from 'react';
import { AppBar, Toolbar, Button, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useRouter } from 'next/navigation';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Importer l'icône WhatsApp
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setOpen(false);
  };

  const menuItems = [
    { text: 'Accueil', path: '/', icon: <HomeIcon /> },
    { text: 'Influenceurs', path: '/influenceurs', icon: <PersonIcon /> },
    { text: 'Contact', path: '/contact', icon: <ContactMailIcon /> },
  ];

  return (
    <html lang="fr">
      <body>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#f5f5f5' }}>
          <AppBar
            position="fixed"
            style={{
              zIndex: 1201,
              backgroundColor: '#000',
              color: '#fff',
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
                width: drawerWidth,
                backgroundColor: '#333',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                paddingTop: '80px',
              },
            }}
          >
            <List style={{ width: '100%' }}>
              {menuItems.map((item, index) => (
                <ListItem
                  component="div"
                  key={index}
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    cursor: 'pointer',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    margin: '10px 0',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    width: '100%',
                    '&:hover': {
                      backgroundColor: '#444',
                      transform: 'scale(1.05)',
                      transition: 'transform 0.2s ease-in-out',
                    },
                  }}
                >
                  {item.icon}
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      style: {
                        color: '#FFFFFF',
                        fontFamily: `'Open Sans', sans-serif`,
                        fontSize: '16px',
                        fontWeight: '500',
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Drawer>

          <main style={{ flexGrow: 1, padding: '20px', marginTop: '80px', backgroundColor: '#f5f5f5', borderRadius: '12px' }}>
            {children}
          </main>

          {/* Bouton flottant WhatsApp */}
          <Button
            href="https://wa.me/22941120412"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              backgroundColor: '#25D366', // Couleur officielle WhatsApp
              color: '#fff',
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <WhatsAppIcon style={{ fontSize: '30px' }} />
          </Button>
        </div>
      </body>
    </html>
  );
};

export default Layout;
