package unir.spring.msbattleshipoperations.model.request;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
public class BarcoRequest {

    private String tipo;

    private List<Double> posicionesInicio;

    private List<Double> posicionesFin;

    private String orientacion;

}
