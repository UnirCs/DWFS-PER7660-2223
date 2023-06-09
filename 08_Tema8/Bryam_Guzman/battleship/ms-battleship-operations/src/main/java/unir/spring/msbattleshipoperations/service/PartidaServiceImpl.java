package unir.spring.msbattleshipoperations.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import unir.spring.msbattleshipoperations.data.PartidaRepository;
import unir.spring.msbattleshipoperations.model.pojo.Barco;
import unir.spring.msbattleshipoperations.model.pojo.Partida;
import unir.spring.msbattleshipoperations.model.request.PartidaRequest;
import unir.spring.msbattleshipoperations.model.request.PatchPartidaRequest;

import java.time.LocalDate;
import java.util.List;

@Service
public class PartidaServiceImpl implements PartidaService {

    @Autowired
    private PartidaRepository partidaRepository;

    @Override
    public Partida getPartidaById(String idPartida) {

        return partidaRepository.findById(Long.valueOf(idPartida)).orElse(null);

    }

    @Override
    public Partida savePartida(PartidaRequest partidaRequest) {

        LocalDate currentDate = LocalDate.now();

        Partida partida = Partida.builder().idJugadorUno(partidaRequest.getIdJugadorUno()).
                idJugadorDos(partidaRequest.getIdJugadorDos()).fechaInicio(currentDate).estado("INICIADA").build();

        return partidaRepository.save(partida);

    }

    @Override
    public Boolean removePartida(String idPartida) {

        Partida partida = partidaRepository.findById(Long.valueOf(idPartida)).orElse(null);

        if (partida != null) {
            partidaRepository.delete(partida);
            return Boolean.TRUE;
        } else {
            return Boolean.FALSE;
        }

    }

    @Override
    public Partida partiallyUpdatePartida(PatchPartidaRequest patchPartidaRequest, String idPartida) {

        LocalDate currentDate = LocalDate.now();

        Partida partida = partidaRepository.findById(Long.valueOf(Long.valueOf(idPartida))).orElse(null);

        if (partida == null)
            return null;

        partida.setEstado(patchPartidaRequest.getEstado());
        if (patchPartidaRequest.getEstado().equals("FINALIZADA"))
            partida.setFechaFin(currentDate);

        partida.setIdVencedor(Long.valueOf(patchPartidaRequest.getIdVencedor()));
        partidaRepository.save(partida);
        return partida;

    }
}
