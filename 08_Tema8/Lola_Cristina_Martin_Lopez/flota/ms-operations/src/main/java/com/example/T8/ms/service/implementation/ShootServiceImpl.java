package com.example.T8.ms.service.implementation;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.T8.ms.data.Ship;
import com.example.T8.ms.data.Shoot;
import com.example.T8.ms.data.repository.ShootRepository;
import com.example.T8.ms.data.request.CreateShootRequest;
import com.example.T8.ms.service.ShootService;


@Service
public class ShootServiceImpl implements ShootService {	
	
	@Autowired
	private ShootRepository repository; 
	
	@Override
	public List<Shoot> getShoots(){
		List<Shoot> ships = repository.findAll();
		return ships.isEmpty() ? null : ships;
	};
	
	@Override
	public Boolean removeShoots(int id) {
		Shoot shoot = repository.findById(Long.valueOf(id)).orElse(null);
		if (shoot != null) {repository.delete(shoot);
		return Boolean.TRUE;
		} else {return Boolean.FALSE;}
	};
	
	@Override
	public Shoot createShoots(CreateShootRequest request) {
		
		Shoot shoot = new Shoot();
		
		shoot.setId_play(request.getId_shoot());
		shoot.setId_player(request.getId_player());
		shoot.setX_position(request.getX_position());
		shoot.setY_position(request.getY_position());
		shoot.setStatus(request.getStatus());
		
			return repository.save(shoot);

	};

		
	@Override 
	public Shoot partialModifyShoot (PatchShootRequest request, int id_partida) 
	{
		Shoot shoot = repository.findById(Long.valueOf(Long.valueOf(id_partida))).orElse(null); 
		
		if (shoot == null)
            return null;

		shoot.setStatus(request.getStatus());
        if (request.getStatus().equals("FINISHED"))
        	
        shoot.setExitoDisparo(request.isExitoDisparo());
        repository.save(shoot);
        return shoot;
		
	}
	
	@Override
	public Shoot getShoots(int id) {
		return repository.findById(Long.valueOf(id)).orElse(null);
	};
	
	@Override
	public Shoot postShoots(int id) {
		// TODO Auto-generated method stub
				return null;
	};

}
