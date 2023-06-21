package unir.spring.msbattleshipoperations.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import unir.spring.msbattleshipoperations.data.BarcoRepository;
import unir.spring.msbattleshipoperations.data.DisparoRepository;
import unir.spring.msbattleshipoperations.data.PartidaRepository;
import unir.spring.msbattleshipoperations.model.pojo.Barco;
import unir.spring.msbattleshipoperations.model.pojo.Casilla;
import unir.spring.msbattleshipoperations.model.pojo.Disparo;
import unir.spring.msbattleshipoperations.model.pojo.Partida;
import unir.spring.msbattleshipoperations.model.request.DisparoRequest;

import java.time.LocalDate;
import java.util.List;

@Service
public class DisparosServiceImpl implements DisparosService{

    @Autowired
    private DisparoRepository disparoRepository;

    @Autowired
    private PartidaRepository partidaRepository;

    @Autowired
    private BarcoRepository barcoRepository;

    @Override
    public Disparo saveDisparo(String idPartida, String idJugador, DisparoRequest disparoRequest) {

        Partida partida = partidaRepository.findById(Long.valueOf(idPartida)).orElse(null);

        if (partida.getEstado().equals("FINALIZADA"))
            throw new IllegalArgumentException("Esta partida ya ha sido finalizada");

        Disparo disparo = Disparo.builder().posiciones(disparoRequest.getPosiciones()).resultado(disparoRequest.getResultado()).
                idJugadorObjetivo(Long.valueOf(disparoRequest.getIdJugadorObjetivo())).idJugadorRealiza(Long.valueOf(idJugador)).
                partida(partida).build();

        if (!validarPosicionesDisparo(disparo)){
            throw new IllegalArgumentException("Disparo no válido");
        }

        Barco barcoObjetivo = barcoRepository.findById(disparo.getIdJugadorObjetivo()).orElse(null);

        if (barcoObjetivo != null) {
            Boolean disparoEfectivo = marcarCasillaBarco(barcoObjetivo, disparo.getPosiciones());
            if (disparoEfectivo)
                disparo.setResultado("DISPARO EFECTIVO");
            else
                disparo.setResultado("DISPARO ERRÓNEO");

            if (barcoHundido(barcoObjetivo)) {
                barcoRepository.delete(barcoObjetivo);
                verificarFinPartida(partida, Long.valueOf(idJugador));
            }
        }

        return disparoRepository.save(disparo);
    }

    private void verificarFinPartida(Partida partida, Long idJugadorRealiza) {
        List<Barco> barcos = partida.getBarcos();
        if (barcos == null || barcos.isEmpty()) {
            partida.setEstado("FINALIZADA");
            partida.setFechaFin(LocalDate.now());
            partida.setIdVencedor(idJugadorRealiza);
            partidaRepository.save(partida);
        }
    }

    private boolean marcarCasillaBarco(Barco barco, List<Double> posicionDisparo) {
        for (Casilla casilla : barco.getCasillas()) {
            if (casilla.getPosiciones().equals(posicionDisparo)) {
                casilla.setEstado(Boolean.FALSE);
                return true;
            }
        }
        return false;
    }

    private boolean barcoHundido(Barco barco) {
        for (Casilla casilla : barco.getCasillas()) {
            if (casilla.getEstado().equals(Boolean.TRUE)) {
                return false;
            }
        }
        return true;
    }

    private boolean validarPosicionesDisparo(Disparo disparo) {
        List<Double> posicionDiparo = disparo.getPosiciones();

        if (posicionDiparo.size() != 2) {
            return false;
        }

        double minX = 0.0;
        double maxX = 10.0;
        double minY = 0.0;
        double maxY = 10.0;

        double posX = posicionDiparo.get(0);
        double posY = posicionDiparo.get(1);

        if (posX < minX || posX > maxX || posY < minY || posY > maxY) {
            return false;
        }

        return true;
    }

}
