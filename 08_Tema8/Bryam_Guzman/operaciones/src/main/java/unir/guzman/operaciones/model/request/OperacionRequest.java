package unir.guzman.operaciones.model.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OperacionRequest {

    @JsonProperty("tipo_operacion")
    private String tipoOperacion;

    private List<Double> numeros;

}
