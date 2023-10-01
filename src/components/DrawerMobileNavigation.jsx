import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import Search from '@mui/icons-material/Search';

export default function DrawerMobileNavigation() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <IconButton  variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            ml: 'auto',
            mt: 1,
            mr: 1,
          }}
        >
          <Typography
            component="label"
            htmlFor="close-icon"
            fontSize="sm"
            fontWeight="lg"
            sx={{ cursor: 'pointer' }}
          >
            close
          </Typography>
          <ModalClose id="close-icon" sx={{ position: 'initial' }} />
        </Box>
        <List
          size="lg"
          component="nav"
          sx={{
            flex: 'none',
            mt: 6,
            mb: 5,
            fontSize: 'xl',
            '& > div': { justifyContent: 'center' },
          }}
        >
          <ListItemButton sx={{ fontWeight: 'lg' }}>Home</ListItemButton>
          <ListItemButton>About</ListItemButton>
          <ListItemButton>Team</ListItemButton>
          <ListItemButton>Services</ListItemButton>
          <ListItemButton>Contact</ListItemButton>
        </List>
        <Box sx={{ px: 5, textAlign: 'center' }}>
          
          <Typography level="body-xs" sx={{ mt: 3 }}>
            We made honest design for your business. Check out our works.
          </Typography>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}