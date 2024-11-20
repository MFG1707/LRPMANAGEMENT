"use client";

import * as React from 'react';
import { AppBar, Toolbar, Button, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useRouter } from 'next/navigation';

// Importer les icônes
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MenuIcon from '@mui/icons-material/Menu';

// Largeur du drawer (menu latéral)
const drawerWidth = 240;

// Composant Layout avec typage explicite pour 'children'
const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  // Fonction pour afficher/masquer le drawer
  const toggleDrawer = () => {
    setOpen(!open);
  };

  // Fonction de navigation et de fermeture du drawer
  const handleNavigation = (path: string) => {
    router.push(path);
    setOpen(false); // Ferme le menu après la navigation
  };

  // Menu items pour le drawer
  const menuItems = [
    { text: 'Accueil', path: '/', icon: <HomeIcon /> },
    { text: 'Influenceurs', path: '/influencers', icon: <PersonIcon /> },
    { text: 'Contact', path: '/contact', icon: <ContactMailIcon /> },
  ];

  return (
    <html lang="fr">
      <body>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#f5f5f5' }}>
          {/* AppBar avec les éléments du menu */}
          <AppBar
            position="fixed"
            style={{
              zIndex: 1201,
              backgroundColor: '#000', // Fond noir pour l'AppBar
              color: '#fff', // Texte blanc
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

          {/* Drawer avec les éléments du menu alignés verticalement */}
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
                backgroundColor: '#333', // Fond gris foncé pour le menu
                display: 'flex',
                flexDirection: 'column', // Disposition verticale
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                paddingTop: '80px', // Espacement avec l'AppBar
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
                      backgroundColor: '#444', // Gris plus clair au survol
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

          {/* Section principale du contenu */}
          <main style={{ flexGrow: 1, padding: '20px', marginTop: '80px', backgroundColor: '#f5f5f5', borderRadius: '12px' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default Layout;
