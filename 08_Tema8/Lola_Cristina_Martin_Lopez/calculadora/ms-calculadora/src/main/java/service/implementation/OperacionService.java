package service.implementation;

import java.util.List;

import data.Operacion;
import request.CreateOperacionRequest;



public interface OperacionService {
	List<Operacion> getOperaciones();

	public Operacion getOperacion(int id);

	public Operacion createOperacion(CreateOperacionRequest request);

	public Boolean removeOperacion(int id);
	
	public Operacion postOperacion(int id);
}
