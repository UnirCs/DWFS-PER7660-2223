package unir.spring.msbattleshipoperations.data;

import org.springframework.data.jpa.repository.JpaRepository;
import unir.spring.msbattleshipoperations.model.pojo.Barco;

import java.util.List;

public interface BarcoRepository extends JpaRepository<Barco, Long> {

    List<Barco> findByIdJugadorAsociadoAndPartidaId(Long idJugadorAsociado, Long partidaId);

}
