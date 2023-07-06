package com.example.T8.ms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.T8.ms.data.Shoot;
import com.example.T8.ms.data.request.PatchShootRequest;
import com.example.T8.ms.service.implementation.ShootServiceImpl;




@RestController
public class ShootController {

	
	@Qualifier("Servicio shoot controller")
	private ShootServiceImpl serviceShoot;
	@Autowired 
	public void ShootController(ShootServiceImpl service) {this.serviceShoot = service;}

	//Fourth endpoint
	//| PATCH	| /partidas/{id_partida}/{id_jugador}/matricesPosiciones| 201 Created, 400BR, 500ISE. 
	@PatchMapping("/partidas/{id_partida}/{id_jugador}/matricesPosiciones")
	public ResponseEntity<Shoot> partialModifyShoot(@RequestBody PatchShootRequest request, @PathVariable int id_partida){
		
		Shoot modifiedMatrix = serviceShoot.partialModifyShoot(request, id_partida);
		
		if(modifiedMatrix != null) {
			
			return ResponseEntity.status(HttpStatus.CREATED).body(modifiedMatrix);
		}else {
			return ResponseEntity.badRequest().build();
		}
		
	}
}
