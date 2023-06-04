package unir.guzman.operaciones.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import unir.guzman.operaciones.model.pojo.Operacion;

@Service
public interface OperacionRepository extends JpaRepository<Operacion, Long> {

}
