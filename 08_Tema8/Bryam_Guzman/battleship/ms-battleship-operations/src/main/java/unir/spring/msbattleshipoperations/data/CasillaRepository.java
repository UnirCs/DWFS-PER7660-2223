package unir.spring.msbattleshipoperations.data;
import org.springframework.data.jpa.repository.JpaRepository;
import unir.spring.msbattleshipoperations.model.pojo.Casilla;

public interface CasillaRepository  extends JpaRepository<Casilla, Long> {
    
}
