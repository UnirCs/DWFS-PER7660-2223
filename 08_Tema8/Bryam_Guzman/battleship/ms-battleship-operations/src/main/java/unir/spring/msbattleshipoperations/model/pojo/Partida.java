package unir.spring.msbattleshipoperations.model.pojo;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "partidas")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class Partida {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="estado")
    private String estado;

    @Column(name = "id_jugador_uno")
    private Long idJugadorUno;

    @Column(name = "id_jugador_dos")
    private Long idJugadorDos;

    @Column(name = "id_vencedor")
    private Long idVencedor;

    @Column(name = "fecha_inicio")
    private LocalDate fechaInicio;

    @Column(name = "fecha_fin")
    private LocalDate fechaFin;

    @OneToMany(mappedBy = "partida", cascade = CascadeType.ALL)
    private List<Disparo> disparos;

    @OneToMany(mappedBy = "partida", cascade = CascadeType.ALL)
    private List<Barco> barcos;

}
