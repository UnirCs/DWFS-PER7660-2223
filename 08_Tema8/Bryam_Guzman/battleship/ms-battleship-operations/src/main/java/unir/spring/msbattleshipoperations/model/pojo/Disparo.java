package unir.spring.msbattleshipoperations.model.pojo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name="disparos")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class Disparo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ElementCollection
    @CollectionTable(name = "pocisiones", joinColumns = @JoinColumn(name = "posicion_id"))
    private List<Double> posiciones;

    @Column(name = "id_jugador_realiza")
    private Long idJugadorRealiza;

    @Column(name = "id_jugador_objetivo")
    private Long idJugadorObjetivo;

    @Column(name="resultado")
    private String resultado;

    @ManyToOne
    @JoinColumn(name = "partida_id")
    private Partida partida;

}
