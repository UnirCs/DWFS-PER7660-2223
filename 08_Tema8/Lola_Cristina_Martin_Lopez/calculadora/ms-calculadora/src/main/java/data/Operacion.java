package data;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "Operaciones")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Operacion {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;


	@Column(name = "tipo")
	private String tipo;

	@Column(name = "elemento_1")
	private Long elemento_1;
	
	@Column(name = "elemento_2")
	private Long elemento_2;
	

	
	public static Operacion builder(Operacion operacion) {

		return new Operacion();
	}

}
