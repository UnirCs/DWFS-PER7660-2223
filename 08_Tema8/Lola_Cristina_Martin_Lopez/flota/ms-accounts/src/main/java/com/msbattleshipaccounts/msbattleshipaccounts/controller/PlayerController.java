package com.msbattleshipaccounts.msbattleshipaccounts.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.msbattleshipaccounts.msbattleshipaccounts.data.Player;
import com.msbattleshipaccounts.msbattleshipaccounts.data.request.CreatePlayerRequest;
import com.msbattleshipaccounts.msbattleshipaccounts.service.implementation.PlayerServiceImpl;

@RestController
public class PlayerController {
	
	@Qualifier("Servicio player controller")
	private PlayerServiceImpl servicePlayer;
	@Autowired 
	public void ShipController(PlayerServiceImpl service) {this.servicePlayer = service;}

	
	
	@PostMapping("/usuarios")
	public ResponseEntity<Player> createPlay(@RequestBody CreatePlayerRequest request){
		Player createdPlayer = servicePlayer.createPlayer(request);
		
		if(createdPlayer != null) {
			
			return ResponseEntity.status(HttpStatus.CREATED).body(createdPlayer);
		}else {
			return ResponseEntity.badRequest().build();
		}
		
	}
	
	
	@GetMapping("/usuarios/{id}")
	public ResponseEntity<List<Player>> getShipsFromUser(@PathVariable String id) { 
		
		
		List <Player> players = servicePlayer.getPlayers(); 

		if (players != null) {
			return ResponseEntity.ok(players); 
		} else { 
			return ResponseEntity.notFound().build();
		} 
		
	} 
	
	
	@DeleteMapping("/usuarios/{id}")
	public ResponseEntity<Void> deleteInvoice(@PathVariable int id) { 
		Boolean removed = servicePlayer.removePlayer(id); 

		if (Boolean.TRUE.equals(removed)) { 
			return ResponseEntity.ok().build(); 
		} else { 
			return ResponseEntity.notFound().build();
		} 
	}
	
	
}
