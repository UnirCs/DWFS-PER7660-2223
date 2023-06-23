package unir.spring.msbattleshipoperations.facade;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import unir.spring.msbattleshipoperations.model.response.UsuarioResponse;

@Component
@RequiredArgsConstructor
@Slf4j
public class UsuariosFacade {

    @Value("${getUsuario.url}")
    private String getUsuarioUrl;

    private final RestTemplate restTemplate;

    public UsuarioResponse getUsuario(String id) {

        try {
            String url = String.format(getUsuarioUrl, id);
            return restTemplate.getForObject(url, UsuarioResponse.class);
        } catch (HttpClientErrorException e) {
            log.error("Client Error: {}, Usuario with ID {}", e.getStatusCode(), id);
            return null;
        }

    }

}
