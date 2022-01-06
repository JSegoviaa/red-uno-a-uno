import React from 'react'
import MisUsuarios from '../../components/paginas/perfil/usuarios/MisUsuarios'
import Titulo from '../../components/ui/titulo/Titulo'

const MisUsuariosPage = () => {
    return (
        <div>
          <Titulo titulo='Mis usuarios'/>
          <br />
          <MisUsuarios/>
        </div>
    )
}

export default MisUsuariosPage
