package unir.guzman.operaciones.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import unir.guzman.operaciones.model.pojo.Operacion;
import unir.guzman.operaciones.model.request.OperacionRequest;
import unir.guzman.operaciones.service.OperacionService;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@Slf4j
public class OperacionController {

    private final OperacionService service;

    @GetMapping("/operaciones")
    public ResponseEntity<List<Operacion>> getProducts(@RequestHeader Map<String, String> headers) {

        List<Operacion> products = service.getOperaciones();

        if (products != null) {
            return ResponseEntity.ok(products);
        } else {
            return ResponseEntity.ok(Collections.emptyList());
        }
    }

    @GetMapping("/operaciones/{operacionId}")
    public ResponseEntity<Operacion> getProduct(@PathVariable String operacionId) {

        Operacion operacion = service.getOperacion(operacionId);

        if (operacion != null) {
            return ResponseEntity.ok(operacion);
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @PostMapping("/operaciones")
    public ResponseEntity<Operacion> saveOperacion(@RequestBody OperacionRequest request) {

        Operacion createdOperacion = service.createOperacion(request);

        if (createdOperacion != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(createdOperacion);
        } else {
            return ResponseEntity.badRequest().build();
        }

    }

}
