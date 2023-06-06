package unir.spring.msbattleshipoperations.data;

import org.springframework.data.jpa.repository.JpaRepository;
import unir.spring.msbattleshipoperations.model.pojo.Barco;

public interface BarcoRepository extends JpaRepository<Barco, Long> {
}
