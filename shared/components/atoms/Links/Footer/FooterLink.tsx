import Link from 'next/link'
import React, { FunctionComponent } from 'react'

interface FooterLinkProps {
    children: string;
    href: string
} 

const FooterLink: FunctionComponent<FooterLinkProps> = props => {
  return (
    <Link href={props.href}>{props.children}</Link>
  )
}

export default FooterLink