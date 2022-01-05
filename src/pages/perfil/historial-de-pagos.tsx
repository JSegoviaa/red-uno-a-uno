import React from 'react'
import HistorialPagos from '../../components/paginas/perfil/historial/HistorialPagos'
import Titulo from '../../components/ui/titulo/Titulo'

const HistorialDePagos = () => {
    return (
        <div>
            <Titulo titulo='Mis pagos'/>
            <br />
            <HistorialPagos/>
        </div>
    )
}

export default HistorialDePagos
