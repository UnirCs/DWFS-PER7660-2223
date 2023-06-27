package request;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CreateOperacionRequest {
	
	@JsonProperty( "id_operacion")
	private Integer id_operacion;
	

	@JsonProperty( "tipo")
	private String tipo;

	@JsonProperty( "elemento_1")
	private Long elemento_1;

	@JsonProperty("elemento_2")
	private Long elemento_2;
	
}
