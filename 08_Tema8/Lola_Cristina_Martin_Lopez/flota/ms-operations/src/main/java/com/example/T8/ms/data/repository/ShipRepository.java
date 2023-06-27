package com.example.T8.ms.data.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.T8.ms.data.Ship;
import com.example.T8.ms.data.Play;

public interface ShipRepository extends JpaRepository <Ship, Long>{
	
	List<Ship> findById(String playId);
}
