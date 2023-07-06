package com.example.T8.ms.data.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class PatchPlayRequest {
	
	private String status; 
	
	private Long idGanador; 

}
