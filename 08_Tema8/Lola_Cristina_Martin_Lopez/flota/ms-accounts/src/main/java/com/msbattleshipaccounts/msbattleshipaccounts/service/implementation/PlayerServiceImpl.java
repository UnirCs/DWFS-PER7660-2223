package com.msbattleshipaccounts.msbattleshipaccounts.service.implementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.msbattleshipaccounts.msbattleshipaccounts.data.Player;
import com.msbattleshipaccounts.msbattleshipaccounts.data.repository.PlayerRepository;
import com.msbattleshipaccounts.msbattleshipaccounts.data.request.CreatePlayerRequest;
import com.msbattleshipaccounts.msbattleshipaccounts.service.PlayerService;

@Service
public class PlayerServiceImpl implements PlayerService{
	
	@Autowired
	private PlayerRepository repository;
	
	@Override
	public List<Player> getPlayers(){
		List<Player> players = repository.findAll();
		return players.isEmpty() ? null : players;
	};
	
	@Override
	public Player getPlayer(int id) {
		return repository.findById(Long.valueOf(id)).orElse(null);
	};

	@Override
	public Boolean removePlayer(int id) {
		Player player = repository.findById(Long.valueOf(id)).orElse(null);
		if (player != null) {repository.delete(player);
		return Boolean.TRUE;
		} else {return Boolean.FALSE;}
	};
	
	@Override
	public Player createPlayer(CreatePlayerRequest request)
	{
		Player player = new Player();
		
		player.setId(request.getId_player());
		player.setName(request.getName());
		player.setEmail(request.getEmail());
		player.setPassword(request.getPassword());
		player.setShoot_numbers(request.getShoot_numbers());
		player.setNumber_winner_plays(request.getNumber_winner_plays());
		player.setNumber_total_plays(request.getNumber_total_plays());
		
			return repository.save(player);
	};

	
	
	@Override
	public Player postPlayer(int id)
	{
		//TODO: auto generated 
		return null; 
	};
}
