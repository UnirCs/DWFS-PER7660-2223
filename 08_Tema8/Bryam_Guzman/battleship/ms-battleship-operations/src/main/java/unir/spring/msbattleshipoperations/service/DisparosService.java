package unir.spring.msbattleshipoperations.service;

import unir.spring.msbattleshipoperations.model.pojo.Partida;

import java.util.List;

public interface DisparosService {

    List<Partida> saveDisparo(String idPartida, String idJugador);

}
