import React, { Fragment, useState } from 'react';
import QUERY from '../mutations';
import { useMutation } from '@apollo/react-hooks';
const CREAR_CLIENTE = QUERY.Cliente.crearCliente;

const NuevoCliente = () => {

	const [cliente, setCliente] = useState({
		nombre: '',
		apellido: '',
		empresa: '',
		edad: '',
		correo: '',
		tipo: ''
	});

	const [error, updateError] = useState(false);

	const [addCliente, { data }] = useMutation(CREAR_CLIENTE);

	const addData = e => {
		setCliente({
			...cliente,
			[e.target.name]: e.target.value
		});

	}

	const saveData = e => {
		e.preventDefault();
		if ( checkFields('nombre') || checkFields('apellido') || checkFields('empresa') || checkFields('edad') || checkFields('tipo')) {
			updateError(true);
			return;
		}
		cliente.edad = Number(cliente.edad);
		addCliente({variables: { input: cliente }});
	}

	const checkFields = (campo) => {
		let res;
		(cliente[campo] === '' ) ? res = true : res = false;
		return res;
	}

	let respuesta = (error) ? <p className="alert alert-danger p-3 text-center"> Todos los campos son obligatorios </p> : '';

	/*

	# Otra opcion funcional

	const addData = (campo, valor) => {
		setCliente({
			...cliente,
			[campo]: valor
		});
	}

	# En el return

	onChange{ e => addData("nombre", e.target.value)}

	*/

	return (
		<Fragment>
			<h1 className="text-center">Nuevo Cliente</h1>

			{respuesta}

			<div className="row justify-content-center">
				<form className="col-md-8 m-3" onSubmit={saveData}>
					<div className="form-row">
						<div className="form-group col-md-6">
							<label>Nombre</label>
							<input type="text" className="form-control" name="nombre" placeholder="Nombre"
							onChange={addData}/>
						</div>
						<div className="form-group col-md-6">
							<label>Apellido</label>
							<input type="text" className="form-control" name="apellido" placeholder="Apellido"
							onChange={addData}/>
						</div>
					</div>
					<div className="form-row">
						<div className="form-group col-md-6">
							<label>Empresa</label>
							<input type="text" className="form-control" name="empresa" placeholder="Empresa" 
							onChange={addData}/>
						</div>
						<div className="form-group col-md-6">
							<label>Email</label>
							<input type="email" className="form-control" name="correo" placeholder="Correo" 
							onChange={addData}/>
						</div>
					</div>
					<div className="form-row">
						<div className="form-group col-md-6">
							<label>Edad</label>
							<input type="text" className="form-control" name="edad" placeholder="Edad" 
							onChange={addData}/>
						</div>
						<div className="form-group col-md-6">
							<label>Tipo Cliente</label>
							<select className="form-control" name="tipo"
							onChange={addData}>
								<option value="">Elegir...</option>
								<option value="PREMIUM">PREMIUM</option>
								<option value="BASICO">BÁSICO</option>
							</select>
						</div>
					</div>
					<button type="submit" className="btn btn-success float-right">
						Guardar Cambios
					</button>
				</form>

			</div>
		</Fragment>
	);
};

export default NuevoCliente;
