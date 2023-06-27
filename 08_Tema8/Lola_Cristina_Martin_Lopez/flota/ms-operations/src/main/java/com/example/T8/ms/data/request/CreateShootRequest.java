package com.example.T8.ms.data.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class CreateShootRequest {
	

	@JsonProperty("id_shoot")
	private Integer id_shoot;

	@JsonProperty("id_player")
	private Integer id_player;

	@JsonProperty("x_position")
	private Integer x_position;

	@JsonProperty("y_position")
	private Integer y_position;

	@JsonProperty("status")
	private String status;
}
