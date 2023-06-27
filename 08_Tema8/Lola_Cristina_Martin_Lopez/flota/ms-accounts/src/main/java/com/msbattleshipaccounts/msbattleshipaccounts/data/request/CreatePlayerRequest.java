package com.msbattleshipaccounts.msbattleshipaccounts.data.request;

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
public class CreatePlayerRequest {
	
	

	@JsonProperty( "id_player")
	private Integer id_player;

	@JsonProperty( "name")
	private String name;

	@JsonProperty("email")
	private String email;

	@JsonProperty( "password")
	private String password;

	@JsonProperty("shoot_numbers")
	private Integer shoot_numbers;

	@JsonProperty("number_winner_plays")
	private Integer number_winner_plays;

	@JsonProperty("number_total_plays")
	private Integer number_total_plays;

		
}
