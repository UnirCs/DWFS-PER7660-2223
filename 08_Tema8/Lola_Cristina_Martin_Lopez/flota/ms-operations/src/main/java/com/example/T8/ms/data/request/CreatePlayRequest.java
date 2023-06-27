package com.example.T8.ms.data.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class CreatePlayRequest {
	
	@JsonProperty("id_play")
	private Integer id_play;

	
	@JsonProperty("id_player_1")
	private Integer id_player_1;

	@JsonProperty("id_player_2")
	private Integer id_player_2;

	@JsonProperty("id_winner")
	private Integer winner;

	@JsonProperty("currentStatus")
	private String currentStatus;

	@JsonProperty("startDate")
	private String startDate;

	@JsonProperty("endDate")
	private String endDate;
	
}
