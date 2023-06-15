package unir.spring.msbattleshipoperations.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import unir.spring.msbattleshipoperations.model.pojo.Barco;
import unir.spring.msbattleshipoperations.model.pojo.Partida;
import unir.spring.msbattleshipoperations.model.request.BarcoRequest;
import unir.spring.msbattleshipoperations.model.request.PartidaRequest;
import unir.spring.msbattleshipoperations.service.BarcosService;
import unir.spring.msbattleshipoperations.service.PartidaService;

import java.util.Collections;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class BarcosController {

    private final BarcosService service;

    @PostMapping("/partidas/{partidaId}/jugadores/{jugadorId}/barcos")
    public ResponseEntity<Barco> createBarco(@PathVariable String partidaId,
                                             @PathVariable String jugadorId,
                                             @RequestBody BarcoRequest request) {

        try {

            Barco result = service.saveBarco(partidaId, jugadorId, request);
            return result.getId() != null ? ResponseEntity.status(HttpStatus.CREATED).body(result) : ResponseEntity.badRequest().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }

    }

    @GetMapping("/partidas/{partidaId}/jugadores/{jugadorId}/barcos")
    public ResponseEntity<List<Barco>> getBarcos(@PathVariable String partidaId,
                                           @PathVariable String jugadorId) {

        List<Barco> barcos = service.getBarcosByIdPartidaAndIdJugador(partidaId, jugadorId);
        return barcos.isEmpty() ? ResponseEntity.ok(Collections.emptyList()) : ResponseEntity.ok(barcos) ;

    }


    @DeleteMapping("/partidas/jugadores/barcos/{barcoId}")
    public ResponseEntity<Void> deleteBarco(@PathVariable String barcoId) {

        Boolean removed = service.removeBarco(barcoId);

        if (Boolean.TRUE.equals(removed)) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
