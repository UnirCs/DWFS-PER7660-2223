package unir.spring.msbattleshipoperations.model.request;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PartidaRequest {

    private Long idJugadorUno;

    private Long idJugadorDos;

}
