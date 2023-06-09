package unir.spring.msbattleshipoperations.service;

import unir.spring.msbattleshipoperations.model.pojo.Disparo;
import unir.spring.msbattleshipoperations.model.pojo.Partida;
import unir.spring.msbattleshipoperations.model.request.DisparoRequest;

import java.util.List;

public interface DisparosService {

    Disparo saveDisparo(String idPartida, String idJugador, DisparoRequest disparoRequest);

}
