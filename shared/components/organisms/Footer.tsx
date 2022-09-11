import styled from '@emotion/styled';
import { Box, Grid, Typography } from '@mui/material'
import { BoxProps, Container, ContainerProps } from '@mui/system';
import Link from 'next/link'
import FooterNavigation from '../molecules/Navigation/Footer/FooterNavigation';

const FooterContainer = styled(Box)<BoxProps>({
  background: 'rgb(245, 245, 245)',
  padding: '2rem 0',
  color: '#202329',
  textAlign: 'center'
});


const Footer = () => {
  return (
    <footer>
          <FooterContainer>
          <Grid container columns={12} margin="auto">
            <Grid md={6} xs={12} item>
                <Typography color="#ff9800" sx={{ fontWeight: 900, cursor: 'default' }}>© Copyright - Rick & Morty</Typography>
            </Grid>
            <Grid md={6} xs={12} item>
              <FooterNavigation />
            </Grid>
          </Grid>
        </FooterContainer>
    </footer>
  )
}

export default Footer