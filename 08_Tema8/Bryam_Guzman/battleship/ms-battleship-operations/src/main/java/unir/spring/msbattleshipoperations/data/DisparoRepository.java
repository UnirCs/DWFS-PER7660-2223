package unir.spring.msbattleshipoperations.data;

import org.springframework.data.jpa.repository.JpaRepository;
import unir.spring.msbattleshipoperations.model.pojo.Disparo;

public interface DisparoRepository extends JpaRepository<Disparo, Long> {
}
