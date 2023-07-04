package unir.spring.msbattleshipoperations.model.request;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import unir.spring.msbattleshipoperations.model.pojo.Partida;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DisparoRequest {

    private List<Double> posiciones;

    private Long idJugadorObjetivo;

    private String resultado;
}
