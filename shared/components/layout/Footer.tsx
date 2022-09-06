import Link from 'next/link'
import style from '../../../styles/Footer.module.scss'

const Footer = () => {
  return (
    <footer className={style.container}>
        <div>
            <span>© Copyright - Rick & Morty</span>
        </div>
        <div>
            <Link href='/'>Character</Link>
            <small> | </small>
            <Link href='/'>Location</Link>
            <small> | </small>
            <Link href='/'>Episode</Link>
        </div>
    </footer>
  )
}

export default Footer