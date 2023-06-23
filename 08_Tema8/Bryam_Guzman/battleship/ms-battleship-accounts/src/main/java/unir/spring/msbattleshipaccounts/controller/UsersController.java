package unir.spring.msbattleshipaccounts.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import unir.spring.msbattleshipaccounts.model.pojo.Usuario;
import unir.spring.msbattleshipaccounts.model.request.UserRequest;
import unir.spring.msbattleshipaccounts.service.UserService;

@RestController
@RequiredArgsConstructor
public class UsersController {

    private final UserService service;

    @PostMapping("/usuarios")
    public ResponseEntity<Usuario> createOrder(@RequestBody UserRequest request) {

        try {
            Usuario result = service.crearUsuario(request);
            return result.getId() != null ? ResponseEntity.status(HttpStatus.CREATED).body(result) : ResponseEntity.badRequest().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }

    }

    @GetMapping("/usuarios/{usuarioId}")
    public ResponseEntity<Usuario> getUsuarioById(@PathVariable String usuarioId) {

        Usuario usuario = service.getUserById(usuarioId);
        return usuario.getId() != null ? ResponseEntity.ok(usuario) : ResponseEntity.notFound().build();

    }

    @DeleteMapping("/usuarios/{usuarioId}")
    public ResponseEntity<Void> deletePartida(@PathVariable String usuarioId) {

        Boolean removed = service.removeUsuario(usuarioId);

        if (Boolean.TRUE.equals(removed)) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }

    }

}
