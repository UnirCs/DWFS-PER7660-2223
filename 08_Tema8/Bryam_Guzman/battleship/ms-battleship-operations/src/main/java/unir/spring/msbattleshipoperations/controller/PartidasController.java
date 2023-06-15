package unir.spring.msbattleshipoperations.controller;

import jakarta.servlet.http.Part;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import unir.spring.msbattleshipoperations.model.pojo.Partida;
import unir.spring.msbattleshipoperations.model.request.PartidaRequest;
import unir.spring.msbattleshipoperations.model.request.PatchPartidaRequest;
import unir.spring.msbattleshipoperations.service.PartidaService;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class PartidasController {

    private final PartidaService service;

    @PostMapping("/partidas")
    public ResponseEntity<Partida> createPartida(@RequestBody PartidaRequest request) {

        try {

            Partida result = service.savePartida(request);
            return result.getId() != null ? ResponseEntity.status(HttpStatus.CREATED).body(result) : ResponseEntity.badRequest().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }

    }

    @GetMapping("/partidas/{partidaId}")
    public ResponseEntity<Partida> getPartidaById(@PathVariable String partidaId) {

        Partida partida = service.getPartidaById(partidaId);
        return partida.getId() != null ? ResponseEntity.ok(partida) : ResponseEntity.notFound().build();

    }

    @DeleteMapping("/partidas/{partidaId}")
    public ResponseEntity<Void> deletePartida(@PathVariable String partidaId) {

        Boolean removed = service.removePartida(partidaId);

        if (Boolean.TRUE.equals(removed)) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @PatchMapping("/partidas/{partidaId}")
    public ResponseEntity<Partida> partiallyUpdatePartida(@RequestBody PatchPartidaRequest request, @PathVariable String partidaId) {

        Partida result = service.partiallyUpdatePartida(request, partidaId);

        if (result != null) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}
