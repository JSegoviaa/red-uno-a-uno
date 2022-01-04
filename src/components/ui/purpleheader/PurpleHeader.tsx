import styles from './PurpleHeader.module.css'

const PurpleHeader = () => {
    return (
        <div className={styles.purpleNav2}>
            <ul className="nav d-flex justify-content-center">
                <li className="nav-item mt-1">
                    <a className={`${styles.purpleLinks} me-5`} href="#">Mis Propiedades</a>
                </li>
                <li className="nav-item mt-1">
                    <a className={`${styles.purpleLinks} me-5`} href="#">Mis Favoritos</a>
                </li>
                <li className="nav-item mt-1">
                    <a className={`${styles.purpleLinks} me-5`} href="#">Mi Cuenta</a>
                </li>
                <li className="nav-item mt-1">
                    <a className={`${styles.purpleLinks} me-5`} href="#">Historial de Inmuebles</a>
                </li>
                <li className="nav-item">
                    <img className='me-5' src="/images/icons/Notificaciones.png" alt="..." />
                </li>
                <input type="text" className={styles.searchInput} placeholder="Busca aquí..." />
                <button className={styles.searchBtn}><i className="bi bi-search" /></button>
            </ul>
        </div>
    )
}

export default PurpleHeader
