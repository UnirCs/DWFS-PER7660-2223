package com.example.T8.ms.service;

import java.util.List;

import com.example.T8.ms.data.Play;
import com.example.T8.ms.data.request.CreatePlayRequest;
import com.example.T8.ms.data.request.PatchPlayRequest;

public interface PlayService {
	
	List<Play> getPlays();

	public Boolean removePlay(int id);

	public Play createPlay(CreatePlayRequest play);

	public Play getPlay(int id);
	
	public Play postPlay(int id);
	
	public Play partialModifyPlay (PatchPlayRequest request, int id_partida); 

}
