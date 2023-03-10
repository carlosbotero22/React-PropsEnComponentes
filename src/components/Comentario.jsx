import React, { Fragment } from 'react';

const Comentario = ({ sujeto }) => {
  return (
    <Fragment>
      <h1>Comentario</h1>
      <div className="media">
        <img src={sujeto.urlImagen} alt="img"></img>
        <div className="media-body">
          <h5 className="mt-0">{sujeto.nombre}</h5>
          {sujeto.Texto}
        </div>
      </div>
    </Fragment>
  );
};

export default Comentario;
