package unir.guzman.operaciones.model.pojo;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "operaciones")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Operacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "tipo_operacion")
    private String tipoOperacion;

    @ElementCollection
    @CollectionTable(name = "numeros", joinColumns = @JoinColumn(name = "operacion_id"))
    private List<Double> numeros;

    @Column(name = "resultado")
    private double resultado;

}
