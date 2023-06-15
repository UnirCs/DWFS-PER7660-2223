package unir.spring.msbattleshipaccounts.service;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import unir.spring.msbattleshipaccounts.data.UsuarioRepository;
import unir.spring.msbattleshipaccounts.model.pojo.Usuario;
import unir.spring.msbattleshipaccounts.model.request.UserRequest;

import java.time.LocalDate;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public Usuario getUserById(String idUser) {
        return usuarioRepository.findById(Long.valueOf(idUser)).orElse(null);
    }

    @Override
    public Usuario crearUsuario(UserRequest userRequest) {

        Usuario usuario = Usuario.builder().nombre(userRequest.getNombre()).
                correoElectronico(userRequest.getCorreoElectronico()).contrasena(userRequest.getContrasena()).
                estado(userRequest.getEstado()).build();

        return usuarioRepository.save(usuario);
    }

    @Override
    public Boolean removeUsuario(String idUsuario) {

        Usuario usuario = usuarioRepository.findById(Long.valueOf(idUsuario)).orElse(null);

        if (usuario != null) {
            usuarioRepository.delete(usuario);
            return Boolean.TRUE;
        } else {
            return Boolean.FALSE;
        }
    }

}
