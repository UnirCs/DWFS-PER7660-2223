package unir.spring.msbattleshipoperations.data;

import org.springframework.data.jpa.repository.JpaRepository;
import unir.spring.msbattleshipoperations.model.pojo.Partida;

public interface PartidaRepository  extends JpaRepository<Partida, Long> {

}
