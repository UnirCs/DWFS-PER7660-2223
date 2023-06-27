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
@Table(name = "shoots")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString

public class Shoot {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@Column(name = "id_play")
	private Integer id_play;

	@Column(name = "id_player")
	private Integer id_player;

	@Column(name = "x_position")
	private Integer x_position;

	@Column(name = "y_position")
	private Integer y_position;

	@Column(name = "status")
	private String status;



	public static Shoot builder(Shoot disparo) {

		return new Shoot();
	}
}
