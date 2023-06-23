package unir.spring.msbattleshipaccounts.model.request;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserRequest {

    private String nombre;

    private String correoElectronico;

    private String contrasena;

    private String estado;

}
