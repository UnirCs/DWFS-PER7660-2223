package service.implementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import data.Operacion;
import repository.OperacionRepository;
import request.CreateOperacionRequest;


@Service
public class OperacionServiceImpl implements OperacionService{
	
	@Autowired
	private OperacionRepository repository;
	
	@Override
	public List<Operacion> getOperaciones(){
		List<Operacion> operaciones = repository.findAll();
		return operaciones.isEmpty() ? null : operaciones;
	};
	
	@Override
	public Operacion getOperacion(int id) {
		return repository.findById(Long.valueOf(id)).orElse(null);
	};
	
	
	@Override
	public Operacion createOperacion(CreateOperacionRequest request){
		
		Operacion operacion = new Operacion();
		
		operacion.setId(request.getId_operacion());
		operacion.setTipo(request.getTipo());
		operacion.setElemento_1(request.getElemento_1());
		operacion.setElemento_2(request.getElemento_2());
		
		
		return repository.save(operacion);
	};
	
	@Override
	public Boolean removeOperacion(int id) {
		Operacion operacion = repository.findById(Long.valueOf(id)).orElse(null);
		if (operacion != null) {repository.delete(operacion);
		return Boolean.TRUE;
		} else {return Boolean.FALSE;}
	};
	
	
	
	@Override
	public Operacion postOperacion(int id)
	{
		//TODO: auto generated 
		return null; 
	};
}
}
