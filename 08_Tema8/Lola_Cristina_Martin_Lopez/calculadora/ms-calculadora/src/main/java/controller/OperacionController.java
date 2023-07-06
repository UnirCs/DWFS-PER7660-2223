package controller;

import java.util.Collections;
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


import data.Operacion;
import request.CreateOperacionRequest;
import service.implementation.OperacionServiceImpl;


@RestController
public class OperacionController {
	
	//se usa Qualifier cuando hay varios beans. 
	@Qualifier("Servicio player controller")
	private OperacionServiceImpl serviceOperacion;
	@Autowired 
	public void ShipController(OperacionServiceImpl service) {this.serviceOperacion = service;}

	//First endpoint
		@GetMapping("/operaciones")
		public ResponseEntity<List<Operacion>> getPlays() {
			List<Operacion> operaciones = serviceOperacion.getOperaciones(); 

			if (operaciones != null) {
				return ResponseEntity.ok(operaciones); 
			} else { 
				return ResponseEntity.badRequest().build();
			} 
		}
		
	//Second endpoint
		@GetMapping("/operaciones/{id_operacion}")
		public ResponseEntity<Operacion> getOperation(@PathVariable Integer id) { 
			
			
			Operacion operacion = serviceOperacion.getOperacion(id); 

			if (operacion != null) {
				return ResponseEntity.ok(operacion); 
			} else { 
				return ResponseEntity.notFound().build();
			} 
			
		} 
		
	//Third endpoint
		@PostMapping("/operaciones")
		public ResponseEntity<Operacion> createPlay(@RequestBody CreateOperacionRequest request){
			Operacion createdOperacion = serviceOperacion.createOperacion(request);
			
			if(createdOperacion != null) {
				
				return ResponseEntity.status(HttpStatus.CREATED).body(createdOperacion);
			}else {
				return ResponseEntity.badRequest().build();
			}
			
		}
		
	
	
	//Fourth endpoint
		@DeleteMapping("/operaciones/{id_operacion}")
		public ResponseEntity<Void> deleteInvoice(@PathVariable int id) { 
			Boolean removed = serviceOperacion.removeOperacion(id); 
	
			if (Boolean.TRUE.equals(removed)) { 
				return ResponseEntity.ok().build(); 
			} else { 
				return ResponseEntity.notFound().build();
			} 
		}
}
