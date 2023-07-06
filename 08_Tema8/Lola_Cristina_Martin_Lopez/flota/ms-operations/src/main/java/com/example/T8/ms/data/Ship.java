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
@Table(name = "ships")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString

public class Ship {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;


	@Column(name = "id_owner_player")
	private Integer id_owner_player;

	@Column(name = "id_player_1")
	private Integer id_player_1;

	@Column(name = "id_play")
	private Integer id_play;

	@Column(name = "type")
	private Integer shipType;

	@Column(name = "initial_position")
	private String initial_position;

	@Column(name = "end_position")
	private String end_position;


	public static Ship builder(Play barco) {

		return new Ship();
	}
}
