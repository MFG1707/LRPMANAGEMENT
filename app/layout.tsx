"use client";

import * as React from 'react';
import { Drawer, AppBar, Toolbar, List, ListItem, ListItemText, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

// Importer les icônes
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

const Layout = ({ children }) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleNavigation = (path) => {
    router.push(path);
    setOpen(false); // Fermer le menu après la navigation
  };

  const menuItems = [
    { text: 'Accueil', path: '/', icon: <HomeIcon /> },
    { text: 'Influenceurs', path: '/influencers', icon: <PersonIcon /> },
    { text: 'Contact', path: '/contact', icon: <ContactMailIcon /> },
  ];

  return (
    <html lang="fr">
      <body>
        <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f5f5f5' }}>
          {/* AppBar en haut avec éléments du menu */}
          <AppBar
            position="fixed"
            style={{
              zIndex: 1201,
              backgroundColor: '#333', // Fond noir pour l'AppBar
              color: '#fff', // Texte blanc
              boxShadow: 'none',
            }}
          >
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Button onClick={toggleDrawer} color="inherit">
                <MenuIcon />
              </Button>
              <Typography variant="h6" noWrap style={{ flexGrow: 1, textAlign: 'center' }}>
                LE ROND POINT
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
                backgroundColor: '#222', // Fond noir pour le Drawer
                color: '#fff', // Texte en blanc
                paddingTop: '10px',
                display: 'flex',
                flexDirection: 'column', // Affichage vertical
                justifyContent: 'flex-start',
                marginTop: '64px',
                borderRight: '2px solid #ddd', // Bordure subtile
              },
            }}
          >
            <List>
              {menuItems.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    textAlign: 'center',
                    marginBottom: '12px',
                    padding: '12px 0',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'transparent', // Pas de fond au départ
                    color: '#fff', // Texte blanc
                    '&:hover': {
                      backgroundColor: '#555', // Couleur gris clair au survol
                      transform: 'scale(1.03)',
                      transition: 'transform 0.2s ease-in-out, background-color 0.3s ease', // Transition fluide
                    },
                    '&.Mui-selected': {
                      backgroundColor: '#444', // Fond plus sombre pour l'élément sélectionné
                      color: '#fff',
                    },
                  }}
                >
                  <div style={{ marginRight: '12px' }}>{item.icon}</div>
                  <ListItemText primary={item.text} sx={{ fontSize: '16px', fontWeight: '500' }} />
                </ListItem>
              ))}
            </List>
          </Drawer>

          {/* Contenu principal */}
          <main style={{
            flexGrow: 1,
            padding: '20px',
            marginTop: '80px',
            backgroundColor: '#fff', // Fond blanc pour le contenu
            borderRadius: '12px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Ombre subtile pour le contenu
          }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default Layout;
