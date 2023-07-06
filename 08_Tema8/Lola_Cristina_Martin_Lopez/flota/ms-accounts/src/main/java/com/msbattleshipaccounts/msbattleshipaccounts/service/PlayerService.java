package com.msbattleshipaccounts.msbattleshipaccounts.service;

import java.util.List;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import com.msbattleshipaccounts.msbattleshipaccounts.data.Player;
import com.msbattleshipaccounts.msbattleshipaccounts.data.request.CreatePlayerRequest;

import lombok.*;


public interface PlayerService {
	
	List<Player> getPlayers();

	public Boolean removePlayer(int id);

	public Player createPlayer(CreatePlayerRequest player);

	public Player getPlayer(int id);
	
	public Player postPlayer(int id);
}
