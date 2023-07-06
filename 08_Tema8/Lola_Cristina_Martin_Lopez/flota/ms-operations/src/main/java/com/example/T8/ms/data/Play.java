package com.example.T8.ms.data;


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
@Table(name = "plays")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString

public class Play {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;


	@Column(name = "id_player_1")
	private Integer id_player_1;

	@Column(name = "id_player_2")
	private Integer id_player_2;

	@Column(name = "id_winner")
	private Long winner;

	@Column(name = "currentStatus")
	private String currentStatus;

	@Column(name = "startDate")
	private String startDate;

	@Column(name = "endDate")
	private String endDate;


	public static Play builder(Play juego) {

		return new Play();
	}
}
