import React from 'react'
import modProductos from './modProductos'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

const ModificarProducto = () => {


    return (    
           
           <div className="row">
                <div className="col-12 col-md-2">
                
                </div>

                <div className="col-12 col-md-10">
                 
                        <div className="wrapper my-5">
                            <form className="shadow-lg"  encType='multipart/form-data'>
                                <h1 className="mb-4">Producto</h1>

                                <div className="form-group">
                                    <label htmlFor="name_field">Nombre</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                
                                    />
                                </div>                              
                                <div className="form-group">
                                    <label htmlFor="description_field">Descripcion</label>
                                    <textarea className="form-control" id="description_field" rows="8"></textarea>
                                </div>
                              
                                <div className="form-group">
                                    <label htmlFor="stock_field">Unidades disponibles</label>
                                    <input
                                        type="number"
                                        id="stock_field"
                                        className="form-control"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="seller_field">Precio</label>
                                    <input
                                        type="text"
                                        id="seller_field"
                                        className="form-control"
                                    
                                    />
                                </div>

                                <div className='form-group'>
                                    <label>Imagenes</label>

                                    <div className='custom-file'>
                                        <input
                                            type='file'
                                            name='product_images'
                                            className='custom-file-input'
                                            id='customFile'
                                            multiple
                                        />
                                        <label className='custom-file-label' htmlFor='customFile'>
                                            Seleccione Imagen
                                     </label>
                                    </div>

                                </div>


                                <button
                                    id="login_button"
                                    type="submit"
                                    className="btn btn-block py-3"
                                >
                                 Modificar
                                </button>

                            </form>
                        </div>
                   
                </div>
            </div>

       
    )
}

export default ModificarProducto