package com.msbattleshipaccounts.msbattleshipaccounts.data.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.msbattleshipaccounts.msbattleshipaccounts.data.Player;

public interface PlayerRepository extends JpaRepository <Player, Long> {
	
	List<Player> findById(String playId);
	
}
