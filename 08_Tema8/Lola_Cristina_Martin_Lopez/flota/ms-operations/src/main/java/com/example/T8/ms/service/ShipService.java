package com.example.T8.ms.service;

import java.util.List;

import com.example.T8.ms.data.Ship;
import com.example.T8.ms.data.request.CreateShipRequest;



public interface ShipService {
	
	List<Ship> getShips();

	public Boolean removeShips(int id);

	public Ship createShips(CreateShipRequest ships);

	public Ship getShips(int id);
	
	public Ship postShips(int id);

}
