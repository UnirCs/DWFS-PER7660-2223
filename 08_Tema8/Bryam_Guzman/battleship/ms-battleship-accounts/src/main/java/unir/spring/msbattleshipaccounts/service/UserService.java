package unir.spring.msbattleshipaccounts.service;

import org.apache.catalina.User;
import unir.spring.msbattleshipaccounts.model.pojo.Usuario;
import unir.spring.msbattleshipaccounts.model.request.UserRequest;

public interface UserService {

    Usuario getUserById(String idUser);

    Usuario crearUsuario(UserRequest userRequest );

    Boolean removeUsuario(String idUsuario);

}
