package unir.spring.msbattleshipoperations.service;

import jakarta.servlet.http.Part;
import unir.spring.msbattleshipoperations.model.pojo.Partida;
import unir.spring.msbattleshipoperations.model.request.PartidaRequest;
import unir.spring.msbattleshipoperations.model.request.PatchPartidaRequest;

import java.util.List;

public interface PartidaService {

    Partida getPartidaById(String idPartida);

    Partida savePartida(PartidaRequest partidaRequest);

    Boolean removePartida(String idPartida);

    Partida partiallyUpdatePartida(PatchPartidaRequest patchPartidaRequest, String idPartida);

}
