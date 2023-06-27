package com.example.T8.ms.data.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.T8.ms.data.Shoot;

public interface ShootRepository extends JpaRepository <Shoot, Long>{
	
	List<Shoot> findById(String playId);
}

