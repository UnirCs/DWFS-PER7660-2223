package unir.spring.msbattleshipoperations.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import unir.spring.msbattleshipoperations.data.BarcoRepository;
import unir.spring.msbattleshipoperations.data.CasillaRepository;
import unir.spring.msbattleshipoperations.data.PartidaRepository;
import unir.spring.msbattleshipoperations.model.pojo.Barco;
import unir.spring.msbattleshipoperations.model.pojo.Casilla;
import unir.spring.msbattleshipoperations.model.pojo.Partida;
import unir.spring.msbattleshipoperations.model.request.BarcoRequest;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class BarcosServiceImpl implements BarcosService {

    @Autowired
    private BarcoRepository barcoRepository;

    @Autowired
    private PartidaRepository partidaRepository;

    @Autowired
    private CasillaRepository casillaRepository;


    @Override
    public List<Barco> getBarcosByIdPartidaAndIdJugador(String idPartida, String idJugador) {
        return barcoRepository.findByIdJugadorAsociadoAndPartidaId(Long.valueOf(idPartida),
                Long.valueOf(idJugador));
    }

    @Override
    public Barco saveBarco(String idPartida, String idJugador, BarcoRequest barcoRequest) {

        Partida partida = partidaRepository.findById(Long.valueOf(idPartida)).orElse(null);

        if (partida.getEstado().equals("FINALIZADA"))
            throw new IllegalArgumentException("Esta partida ya ha sido finalizada");

        Barco barco = Barco.builder().tipo(barcoRequest.getTipo()).posicionesInicio(barcoRequest.getPosicionesInicio()).
                posicionesFin(barcoRequest.getPosicionesFin()).idJugadorAsociado(Long.valueOf(idJugador)).
                partida(partida).orientacion(barcoRequest.getOrientacion()).build();

        if (!validarBarco(barco)) {
            throw new IllegalArgumentException("Barco no válido");
        }

        List<Casilla> casillas = generarCasillasBarco(barco, barcoRequest.getPosicionesInicio(),
                barcoRequest.getPosicionesFin());
        barco.setCasillas(casillas);

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


    private boolean validarBarco(Barco barco) {

        if (!validarTipoBarco(barco)) {
            return false;
        }

        if (!validarPosicionesBarco(barco)) {
            return false;
        }

        return true;
    }

    private boolean validarTipoBarco(Barco barco) {
        String tipo = barco.getTipo();
        return tipo.equals("barco4") || tipo.equals("barco3") || tipo.equals("barco2") || tipo.equals("barco1");
    }

    private boolean validarPosicionesBarco(Barco barco) {
        List<Double> posicionesInicio = barco.getPosicionesInicio();
        List<Double> posicionesFin = barco.getPosicionesFin();

        if (posicionesInicio.size() != 2 || posicionesFin.size() != 2) {
            return false;
        }

        double minX = 0.0;
        double maxX = 10.0;
        double minY = 0.0;
        double maxY = 10.0;

        double posXInicio = posicionesInicio.get(0);
        double posYInicio = posicionesInicio.get(1);
        double posXFin = posicionesFin.get(0);
        double posYFin = posicionesFin.get(1);

        if (posXInicio < minX || posXInicio > maxX || posYInicio < minY || posYInicio > maxY ||
                posXFin < minX || posXFin > maxX || posYFin < minY || posYFin > maxY) {
            return false;
        }

        if (!validarColocacionBarco(barco.getPartida().getId(), barco.getIdJugadorAsociado(),
                posicionesInicio, posicionesFin)) {
            return false;
        }

        return true;
    }


    private boolean validarColocacionBarco(Long idPartida, Long idJugadorAsociado,
                                           List<Double> posicionesInicio, List<Double> posicionesFin) {

        double posXInicio = posicionesInicio.get(0);
        double posYInicio = posicionesInicio.get(1);
        double posXFin = posicionesFin.get(0);
        double posYFin = posicionesFin.get(1);

        boolean esHorizontal = posXInicio != posXFin;
        boolean esVertical = posYInicio != posYFin;

        if (!(esHorizontal || esVertical)) {
            return false;
        }

        int longitudBarco = 0;
        if (esHorizontal) {
            longitudBarco = Math.abs((int) (posXFin - posXInicio));
        } else if (esVertical) {
            longitudBarco = Math.abs((int) (posYFin - posYInicio));
        }

        if (longitudBarco < 1 || longitudBarco > 4) {
            return false;
        }

        List<Barco> barcosEnPartida = barcoRepository.findByIdJugadorAsociadoAndPartidaId(idJugadorAsociado, idPartida);

        for (Barco barcoExistente : barcosEnPartida) {
            if (seSuperponen(posicionesInicio, posicionesFin, barcoExistente.getPosicionesInicio(), barcoExistente.getPosicionesFin())) {
                return false;
            }
        }

        if (!respetaFranjaCuadrosEnBlanco(barcosEnPartida, posicionesInicio, posicionesFin)) {
            return false;
        }

        return true;
    }

    private boolean seSuperponen(List<Double> posicionesInicio1, List<Double> posicionesFin1,
                                 List<Double> posicionesInicio2, List<Double> posicionesFin2) {
        double posXInicio1 = posicionesInicio1.get(0);
        double posYInicio1 = posicionesInicio1.get(1);
        double posXFin1 = posicionesFin1.get(0);
        double posYFin1 = posicionesFin1.get(1);

        double posXInicio2 = posicionesInicio2.get(0);
        double posYInicio2 = posicionesInicio2.get(1);
        double posXFin2 = posicionesFin2.get(0);
        double posYFin2 = posicionesFin2.get(1);

        boolean seSuperponenHorizontalmente = (posYInicio1 == posYInicio2 || posYInicio1 == posYFin2) &&
                ((posXInicio1 >= posXInicio2 && posXInicio1 <= posXFin2) || (posXFin1 >= posXInicio2 && posXFin1 <= posXFin2));

        boolean seSuperponenVerticalmente = (posXInicio1 == posXInicio2 || posXInicio1 == posXFin2) &&
                ((posYInicio1 >= posYInicio2 && posYInicio1 <= posYFin2) || (posYFin1 >= posYInicio2 && posYFin1 <= posYFin2));

        if (seSuperponenHorizontalmente || seSuperponenVerticalmente) {
            return true;
        }

        return false;
    }


    private boolean respetaFranjaCuadrosEnBlanco(List<Barco> barcosEnPartida,List<Double> posicionesInicio,
                                                 List<Double> posicionesFin) {

        double posXInicio = posicionesInicio.get(0);
        double posYInicio = posicionesInicio.get(1);
        double posXFin = posicionesFin.get(0);
        double posYFin = posicionesFin.get(1);

        double minX = posXInicio - 1;
        double maxX = posXFin + 1;
        double minY = posYInicio - 1;
        double maxY = posYFin + 1;

        for (Barco barcoExistente : barcosEnPartida) {
            List<Double> posicionesInicioExistente = barcoExistente.getPosicionesInicio();
            List<Double> posicionesFinExistente = barcoExistente.getPosicionesFin();

            double posXInicioExistente = posicionesInicioExistente.get(0);
            double posYInicioExistente = posicionesInicioExistente.get(1);
            double posXFinExistente = posicionesFinExistente.get(0);
            double posYFinExistente = posicionesFinExistente.get(1);

            if (posXInicioExistente >= minX && posXFinExistente <= maxX && posYInicioExistente >= minY && posYFinExistente <= maxY) {
                return false;
            }
        }

        return true;
    }

    private List<Casilla> generarCasillasBarco(Barco barco, List<Double> posicionesInicio, List<Double> posicionesFin) {
        List<Casilla> casillas = new ArrayList<>();

        double posXInicio = posicionesInicio.get(0);
        double posYInicio = posicionesInicio.get(1);
        double posXFin = posicionesFin.get(0);
        double posYFin = posicionesFin.get(1);

        int minPosX = (int) Math.min(posXInicio, posXFin);
        int maxPosX = (int) Math.max(posXInicio, posXFin);
        int minPosY = (int) Math.min(posYInicio, posYFin);
        int maxPosY = (int) Math.max(posYInicio, posYFin);

        for (int posX = minPosX; posX <= maxPosX; posX++) {
            for (int posY = minPosY; posY <= maxPosY; posY++) {
                Casilla casilla = Casilla.builder()
                        .posiciones(Arrays.asList((double) posX, (double) posY))
                        .estado(Boolean.TRUE)
                        .barco(barco)
                        .build();
                casillas.add(casilla);
            }
        }

        return casillas;
    }

}
