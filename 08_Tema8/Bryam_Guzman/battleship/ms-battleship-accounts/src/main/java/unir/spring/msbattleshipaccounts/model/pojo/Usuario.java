package unir.spring.msbattleshipaccounts.model.pojo;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "usuarios")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "correo_electronico")
    private String correoElectronico;

    @Column(name = "contrasena")
    private String contrasena;

    @Column(name = "partidas_jugadas")
    private Integer partidasJugadas;

    @Column(name = "partidas_ganadas")
    private Integer partidasGanadas;

    @Column(name = "estado")
    private String estado;

}
