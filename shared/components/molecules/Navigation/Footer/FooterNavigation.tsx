import FooterLink from '@/components/atoms/Links/Footer/FooterLink'
import { Typography } from '@mui/material'
import React, { FunctionComponent } from 'react'


const FooterNavigation = () => {
  return (
    <>
        <FooterLink href='/'>Character</FooterLink>
            <Typography sx={{ display: 'inline' }}> | </Typography>
        <FooterLink href='/'>Location</FooterLink>
            <Typography sx={{ display: 'inline' }}> | </Typography>
        <FooterLink href='/'>Episode</FooterLink>
    </>
  )
}

export default FooterNavigation