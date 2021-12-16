import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <Link href="/" scroll>
        Inicio
      </Link>
      <br />
      <br />
      <Link href="/contacto" scroll>
        Contacto
      </Link>
      <br />
      <br />
      <Link href="/nosotros" scroll>
        Nosotros
      </Link>
      <br />
      <br />
      <Link href="/paquetes" scroll>
        Paquetes
      </Link>
      <br />
      <br />
      <Link href="/perfil" scroll>
        Mi perfil
      </Link>
    </>
  );
};

export default Header;
