package unir.spring.msbattleshipaccounts.data;

import org.springframework.data.jpa.repository.JpaRepository;
import unir.spring.msbattleshipaccounts.model.pojo.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {


}
