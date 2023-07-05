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
import com.example.T8.ms.data.Ship;
import com.example.T8.ms.service.implementation.PlayServiceImpl;
import com.example.T8.ms.service.implementation.ShipServiceImpl;

//Annotations

@RestController
@RequestMapping("/partidas") //Hace que los endpoints declarados en la clase de abajo comiencen por partidas

//Class
public class ShipController {
	
	@Qualifier("Servicio ship controller")
	private ShipServiceImpl serviceShip;
	@Autowired 
	public void ShipController(ShipServiceImpl service) {this.serviceShip = service;}

	@Autowired 
	@GetMapping("/{partida_id}/{jugador_id}/barcos")
	public ResponseEntity<List<Ship>> getShipsFromUser(@PathVariable String userId) { 
		
		//**TO DO: Aqui añadir que el barco sea de una persona **
		
		List <Ship> ships = serviceShip.getShips(); 

		if (ships != null) {
			return ResponseEntity.ok(ships); 
		} else { 
			return ResponseEntity.notFound().build();
		} 
		
	} 
	}

