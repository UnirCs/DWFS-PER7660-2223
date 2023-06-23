package unir.guzman.operaciones.service;

import unir.guzman.operaciones.OperacionesApplication;
import unir.guzman.operaciones.model.pojo.Operacion;
import unir.guzman.operaciones.model.request.OperacionRequest;

import java.util.List;

public interface OperacionService {

    List<Operacion> getOperaciones();

    Operacion getOperacion(String operacionId);

    Operacion createOperacion(OperacionRequest operacionRequest);
}
