import { Box, Icon, IconButton, Link, useMediaQuery, useTheme } from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('xl'));

    return (
        <Box
            component = "footer"
            display = "flex"
            justifyContent = { isDesktop ? 'flex-end' : 'center' }
            padding = "1rem"
            position = { isDesktop ? 'fixed' : 'static' }
            bottom = { isDesktop ? 0 : 'auto' }
            left = { isDesktop ? 0 : 'auto' }
            right = { isDesktop ? 0 : 'auto' }
        >
            <IconButton href = "https://www.instagram.com/jongjeh/">
                <InstagramIcon></InstagramIcon>
            </IconButton>
        </Box>
    );
}

export default Footer;