package com.example.T8.ms.data.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.T8.ms.data.Play;


//here will be declarated the differents filter to search in the DDBB. 

public interface PlayRepository extends JpaRepository<Play, Long> {
	List<Play> findById(String playId);
}
