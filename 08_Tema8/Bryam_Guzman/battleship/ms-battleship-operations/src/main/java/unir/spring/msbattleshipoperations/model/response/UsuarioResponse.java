package unir.spring.msbattleshipoperations.model.response;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioResponse {

    private Long id;

    private String nombre;

    private String correoElectronico;

    private String contrasena;

    private Integer partidasJugadas;

    private Integer partidasGanadas;

    private String estado;

}
