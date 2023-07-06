package com.example.T8.ms.service.implementation;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import lombok.*;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.T8.ms.data.Ship;
import com.example.T8.ms.data.repository.ShipRepository;
import com.example.T8.ms.data.request.CreateShipRequest;
import com.example.T8.ms.service.ShipService;


@Service
public class ShipServiceImpl implements ShipService {
	
	@Autowired
	private ShipRepository repository;

	@Override
	public List<Ship> getShips() {
	List<Ship> ships = repository.findAll();
	return ships.isEmpty() ? null : ships;
	}
	@Override
	public Ship getShips(int id) {
	return repository.findById(Long.valueOf(id)).orElse(null);
	}
	@Override
	public Boolean removeShips(int id) {
		Ship ship = repository.findById(Long.valueOf(id)).orElse(null);
	if (ship != null) {repository.delete(ship);
	return Boolean.TRUE;
	} else {return Boolean.FALSE;}
	}

	@Override
	public Ship createShips (CreateShipRequest request) {

		Ship ship = new Ship();
		
		ship.setId_owner_player(request.getId_owner_player());
		ship.setId_player_1(request.getId_player_1());
		ship.setId_play(request.getId_play());
		ship.setShipType(request.getShipType());
		ship.setInitial_position(request.getInitial_position());
		ship.setEnd_position(request.getEnd_position());
		
		ship.setId(request.getId_play()); 
			
			return repository.save(ship);

		}
	
	@Override
	public Ship postShips(int id) {
		// TODO Auto-generated method stub
		return null;
	}

}
