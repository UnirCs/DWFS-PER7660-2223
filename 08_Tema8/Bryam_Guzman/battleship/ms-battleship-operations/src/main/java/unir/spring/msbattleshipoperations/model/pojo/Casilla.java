package unir.spring.msbattleshipoperations.model.pojo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "casillas")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class Casilla {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ElementCollection
    @CollectionTable(name = "posiciones", joinColumns = @JoinColumn(name = "posicion_id"))
    private List<Double> posiciones;

    @Column(name = "estado")
    private Boolean estado;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "barco_id")
    private Barco barco;

}
