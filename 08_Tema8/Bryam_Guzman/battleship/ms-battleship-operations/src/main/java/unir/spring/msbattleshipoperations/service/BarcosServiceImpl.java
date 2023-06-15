package unir.spring.msbattleshipoperations.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import unir.spring.msbattleshipoperations.data.BarcoRepository;
import unir.spring.msbattleshipoperations.data.PartidaRepository;
import unir.spring.msbattleshipoperations.model.pojo.Barco;
import unir.spring.msbattleshipoperations.model.pojo.Partida;
import unir.spring.msbattleshipoperations.model.request.BarcoRequest;

import java.util.List;

@Service
public class BarcosServiceImpl implements BarcosService {

    @Autowired
    private BarcoRepository barcoRepository;

    @Autowired
    private PartidaRepository partidaRepository;

    @Override
    public List<Barco> getBarcosByIdPartidaAndIdJugador(String idPartida, String idJugador) {
        return barcoRepository.findByIdJugadorAsociadoAndPartidaId(Long.valueOf(idPartida),
                Long.valueOf(idJugador));
    }

    @Override
    public Barco saveBarco(String idPartida, String idJugador, BarcoRequest barcoRequest) {

        Partida partida = partidaRepository.findById(Long.valueOf(idPartida)).orElse(null);

        Barco barco = Barco.builder().tipo(barcoRequest.getTipo()).posicionesInicio(barcoRequest.getPosicionesInicio()).
                posicionesFin(barcoRequest.getPosicionesFin()).idJugadorAsociado(Long.valueOf(idJugador)).
                partida(partida).orientacion(barcoRequest.getOrientacion()).build();

        return barcoRepository.save(barco);
    }

    @Override
    public Boolean removeBarco(String idBarco) {

        Barco barco = barcoRepository.findById(Long.valueOf(idBarco)).orElse(null);

        if (barco != null) {
            barcoRepository.delete(barco);
            return Boolean.TRUE;
        } else {
            return Boolean.FALSE;
        }

    }
}
