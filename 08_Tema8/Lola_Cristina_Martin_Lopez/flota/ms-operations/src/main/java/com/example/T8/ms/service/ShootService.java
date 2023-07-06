package com.example.T8.ms.service;

import java.util.List;

import com.example.T8.ms.data.Shoot;
import com.example.T8.ms.data.request.CreateShootRequest;

public interface ShootService {

	List<Shoot> getShoots();

	public Boolean removeShoots(int id);

	public Shoot createShoots(CreateShootRequest shoots);

	public Shoot partialModifyShoot(PatchShootRequest request, int id_partida);

	public Shoot getShoots(int id);
	
	public Shoot postShoots(int id);
}
