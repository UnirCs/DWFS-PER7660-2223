package unir.spring.msbattleshipoperations.service;

import unir.spring.msbattleshipoperations.model.pojo.Barco;
import unir.spring.msbattleshipoperations.model.pojo.Partida;

import java.util.List;

public class BarcosServiceImpl implements BarcosService{
    @Override
    public List<Barco> getBarcosByIdPartidaAndIdJugador(String idPartida, String idJugador) {
        return null;
    }

    @Override
    public Barco saveBarco(String idPartida, String idJugador) {
        return null;
    }

    @Override
    public Boolean removeBarco(String idPartida, String idJugador, String idBarco) {
        return null;
    }
}
