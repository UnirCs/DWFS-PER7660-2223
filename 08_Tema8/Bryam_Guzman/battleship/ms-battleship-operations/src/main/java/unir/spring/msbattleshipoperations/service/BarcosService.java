package unir.spring.msbattleshipoperations.service;

import unir.spring.msbattleshipoperations.model.pojo.Barco;
import unir.spring.msbattleshipoperations.model.pojo.Partida;

import java.util.List;

public interface BarcosService {

    List<Barco> getBarcosByIdPartidaAndIdJugador(String idPartida, String idJugador);

    Barco saveBarco(String idPartida, String idJugador);

    Boolean removeBarco(String idPartida, String idJugador, String idBarco);

}
