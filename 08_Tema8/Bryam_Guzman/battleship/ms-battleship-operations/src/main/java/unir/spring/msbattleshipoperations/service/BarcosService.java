package unir.spring.msbattleshipoperations.service;

import unir.spring.msbattleshipoperations.model.pojo.Barco;
import unir.spring.msbattleshipoperations.model.pojo.Partida;
import unir.spring.msbattleshipoperations.model.request.BarcoRequest;

import java.util.List;

public interface BarcosService {

    List<Barco> getBarcosByIdPartidaAndIdJugador(String idPartida, String idJugador);

    Barco saveBarco(String idPartida, String idJugador, BarcoRequest barcoRequest);

    Boolean removeBarco(String idBarco);

}
