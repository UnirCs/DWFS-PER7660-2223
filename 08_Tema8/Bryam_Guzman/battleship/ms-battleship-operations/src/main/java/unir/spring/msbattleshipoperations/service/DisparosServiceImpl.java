package unir.spring.msbattleshipoperations.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import unir.spring.msbattleshipoperations.data.DisparoRepository;
import unir.spring.msbattleshipoperations.data.PartidaRepository;
import unir.spring.msbattleshipoperations.model.pojo.Disparo;
import unir.spring.msbattleshipoperations.model.pojo.Partida;
import unir.spring.msbattleshipoperations.model.request.DisparoRequest;

import java.util.List;

@Service
public class DisparosServiceImpl implements DisparosService{

    @Autowired
    private DisparoRepository disparoRepository;

    @Autowired
    private PartidaRepository partidaRepository;

    @Override
    public Disparo saveDisparo(String idPartida, String idJugador, DisparoRequest disparoRequest) {

        Partida partida = partidaRepository.findById(Long.valueOf(idPartida)).orElse(null);

        Disparo disparo = Disparo.builder().posiciones(disparoRequest.getPosiciones()).resultado(disparoRequest.getResultado()).
                idJugadorObjetivo(Long.valueOf(disparoRequest.getIdJugadorObjetivo())).idJugadorRealiza(Long.valueOf(idJugador)).
                partida(partida).build();

        return disparoRepository.save(disparo);
    }

}
