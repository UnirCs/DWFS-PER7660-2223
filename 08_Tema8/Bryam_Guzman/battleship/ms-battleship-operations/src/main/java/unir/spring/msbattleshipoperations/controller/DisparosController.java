package unir.spring.msbattleshipoperations.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import unir.spring.msbattleshipoperations.model.pojo.Disparo;
import unir.spring.msbattleshipoperations.model.pojo.Partida;
import unir.spring.msbattleshipoperations.model.request.DisparoRequest;
import unir.spring.msbattleshipoperations.model.request.PartidaRequest;
import unir.spring.msbattleshipoperations.service.DisparosService;
import unir.spring.msbattleshipoperations.service.PartidaService;

@RestController
@RequiredArgsConstructor
public class DisparosController {

    private final DisparosService service;

    @PostMapping("/partidas/{partidaId}/jugadores/{jugadorId}/disparos")
    public ResponseEntity<Disparo> createDisparo(@RequestBody DisparoRequest request,
                                               @PathVariable String partidaId,
                                               @PathVariable String jugadorId) {

        try {
            Disparo result = service.saveDisparo(partidaId, jugadorId, request);
            return result.getId() != null ? ResponseEntity.status(HttpStatus.CREATED).body(result) : ResponseEntity.badRequest().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }

    }

}
