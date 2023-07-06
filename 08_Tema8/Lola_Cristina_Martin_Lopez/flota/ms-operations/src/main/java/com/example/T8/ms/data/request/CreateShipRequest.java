package com.example.T8.ms.data.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class CreateShipRequest {
	
	@JsonProperty("id_ship")
	private Integer id_ship;

	@JsonProperty("id_owner_player")
	private Integer id_owner_player;

	@JsonProperty("id_player_1")
	private Integer id_player_1;

	@JsonProperty("id_play")
	private Integer id_play;

	@JsonProperty("type")
	private Integer shipType;

	@JsonProperty("initial_position")
	private String initial_position;

	@JsonProperty("end_position")
	private String end_position;
}