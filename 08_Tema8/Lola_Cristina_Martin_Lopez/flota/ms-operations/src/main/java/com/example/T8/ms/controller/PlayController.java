package com.example.T8.ms.controller;


import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.T8.ms.data.Play;
import com.example.T8.ms.data.request.CreatePlayRequest;
import com.example.T8.ms.data.request.PatchPlayRequest;
import com.example.T8.ms.service.implementation.PlayServiceImpl;





@RestController
public class PlayController {
	
	@Qualifier("Servicio play controller")
	private PlayServiceImpl servicePlay;
	@Autowired 
	public void PlayController(PlayServiceImpl service) {this.servicePlay = service;}

	//First endpoint
	@GetMapping("/partidas")
	public ResponseEntity<List<Play>> getPlays() {
		List<Play> plays = servicePlay.getPlays(); 

		if (plays != null) {
			return ResponseEntity.ok(plays); 
		} else { 
			return ResponseEntity.ok(Collections.emptyList());
		} 
	}
	
	//Second endpoint
	@GetMapping("/partidas/{id_partida}")
	
	public ResponseEntity<Play> getPlay(@PathVariable int playId) { 
		Play play = servicePlay.getPlay(playId); 

		if (play != null) {
			return ResponseEntity.ok(play); 
		} else { 
			return ResponseEntity.notFound().build();
		} 
	} 
	
	
	//Third endpoint
	@PostMapping("/partida")
	public ResponseEntity<Play> createPlay(@RequestBody CreatePlayRequest request){
		Play createdPlay = servicePlay.createPlay(request);
		
		if(createdPlay != null) {
			
			return ResponseEntity.status(HttpStatus.CREATED).body(createdPlay);
		}else {
			return ResponseEntity.badRequest().build();
		}
		
	}
	
	
	//Fourth endpoint
	@PatchMapping("/partidas/{id_partida}")
	public ResponseEntity<Play> partialModifyPlay(@RequestBody PatchPlayRequest request, @PathVariable int id_partida){
		
		Play modifiedPlay = servicePlay.partialModifyPlay(request, id_partida);
		
		if(modifiedPlay != null) {
			
			return ResponseEntity.status(HttpStatus.CREATED).body(modifiedPlay);
		}else {
			return ResponseEntity.badRequest().build();
		}
		
	}
	
	//Fifth endpoint
	@DeleteMapping("/partidas/{id_partida}")
	public ResponseEntity<Void> deleteInvoice(@PathVariable int playId) { 
		Boolean removed = servicePlay.removePlay(playId); 

		if (Boolean.TRUE.equals(removed)) { 
			return ResponseEntity.ok().build(); 
		} else { 
			return ResponseEntity.notFound().build();
		} 
	}

	

	
}
