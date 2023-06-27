package com.example.T8.ms.service.implementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.T8.ms.data.Play;
import com.example.T8.ms.data.repository.PlayRepository;
import com.example.T8.ms.data.request.CreatePlayRequest;
import com.example.T8.ms.data.request.PatchPlayRequest;
import com.example.T8.ms.service.PlayService;



@Service
public class PlayServiceImpl implements PlayService {
	@Autowired
	private PlayRepository repository;

	@Override
	public List<Play> getPlays() {
	List<Play> plays = repository.findAll();
	return plays.isEmpty() ? null : plays;
	}
	@Override
	public Play getPlay(int playId) {
	return repository.findById(Long.valueOf(playId)).orElse(null);
	}
	@Override
	public Boolean removePlay(int id) {
		Play play = repository.findById(Long.valueOf(id)).orElse(null);
	if (play != null) {repository.delete(play);
	return Boolean.TRUE;
	} else {return Boolean.FALSE;}
	}

	@Override
	public Play createPlay (CreatePlayRequest request) {

		Play play = new Play();
		
		play.setId_player_1(request.getId_player_1());
		play.setId_player_2(request.getId_player_2());
		play.setCurrentStatus(request.getCurrentStatus());
		play.setWinner(Long.valueOf(request.getWinner()));
		play.setStartDate(request.getStartDate());
		play.setEndDate(request.getEndDate());
		
		
		
		play.setId(request.getId_play()); 
			
			return repository.save(play);

		}
	
	@Override 
	public Play partialModifyPlay (PatchPlayRequest request, int id_partida) 
	{
		Play play = repository.findById(Long.valueOf(Long.valueOf(id_partida))).orElse(null); 
		
		if (play == null)
            return null;

		play.setCurrentStatus(request.getStatus());
		
        if (request.getStatus().equals("FINISHED"))
        	

        play.setWinner(Long.valueOf(request.getIdGanador()));
        repository.save(play);
        return play;
		
	}
	
	@Override
	public Play postPlay(int id) {
		// TODO Auto-generated method stub
		return null;
	}


}
