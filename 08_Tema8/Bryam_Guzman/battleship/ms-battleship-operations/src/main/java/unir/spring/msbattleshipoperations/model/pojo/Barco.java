package unir.spring.msbattleshipoperations.model.pojo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name="barcos")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class Barco {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "tipo")
    private String tipo;

    @ElementCollection
    @CollectionTable(name = "pocisiones_inicio", joinColumns = @JoinColumn(name = "posicion_id"))
    private List<Double> posicionesInicio;

    @ElementCollection
    @CollectionTable(name = "pocisiones_fin", joinColumns = @JoinColumn(name = "posicion_id"))
    private List<Double> posicionesFin;

    @Column(name = "orientacion")
    private String orientacion;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "partida_id")
    private Partida partida;

    @Column(name = "idJugadorAsociado")
    private Long idJugadorAsociado;

    @OneToMany(mappedBy = "barco", cascade = CascadeType.ALL)
    private List<Casilla> casillas;


}
