package unir.guzman.operaciones.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import unir.guzman.operaciones.data.OperacionRepository;
import unir.guzman.operaciones.model.pojo.Operacion;
import unir.guzman.operaciones.model.request.OperacionRequest;

import java.util.Arrays;
import java.util.List;

@Service
public class OperacionServiceImpl implements OperacionService {

    @Autowired
    public OperacionRepository operacionRepository;

    @Override
    public List<Operacion> getOperaciones() {
        List<Operacion> operaciones = operacionRepository.findAll();
        return operaciones.isEmpty() ? null : operaciones;
    }

    @Override
    public Operacion getOperacion(String operacionId) {
        return operacionRepository.findById(Long.valueOf(operacionId)).orElse(null);
    }

    @Override
    public Operacion createOperacion(OperacionRequest request) {

        String[] operaciones = {"suma", "resta", "multiplicacion", "division", "raiz", "potencia"};


        if (request != null && StringUtils.hasLength(request.getTipoOperacion().trim()) &&
                request.getNumeros() != null) {

            boolean encontrado = Arrays.asList(operaciones).contains(request.getTipoOperacion());

            if ((request.getTipoOperacion().equals("multiplicacion") || request.getTipoOperacion().equals("division") ||
                    request.getTipoOperacion().equals("raiz") || request.getTipoOperacion().equals("potencia"))
                    && request.getNumeros().size()!=2)
                return null;

            if (!encontrado) return null;

            double resultado = 0.0;
            if (request.getTipoOperacion().equals("suma"))
                resultado = request.getNumeros().stream().reduce(0.0, (a, b) -> a + b);

            if (request.getTipoOperacion().equals("resta"))
                resultado = request.getNumeros().stream().reduce(0.0, (a, b) -> a - b);

            if (request.getTipoOperacion().equals("multiplicacion")) {
                double numeroUno = request.getNumeros().get(0);
                double numeroDos = request.getNumeros().get(1);
                resultado = numeroUno * numeroDos;
            }
            if (request.getTipoOperacion().equals("division")) {
                double numeroUno = request.getNumeros().get(0);
                double numeroDos = request.getNumeros().get(1);
                resultado = numeroUno / numeroDos;
            }

            if (request.getTipoOperacion().equals("raiz")) {
                double numero = request.getNumeros().get(0);
                double raiz = request.getNumeros().get(1);
                resultado = Math.pow(numero, 1.0 / raiz);
            }
            if (request.getTipoOperacion().equals("potencia")) {
                double numero = request.getNumeros().get(0);
                double exponente = request.getNumeros().get(1);
                resultado = Math.pow(numero, exponente);
            }

            Operacion operacion = Operacion.builder().tipoOperacion(request.getTipoOperacion()).
                    numeros(request.getNumeros()).resultado(resultado).build();

            return operacionRepository.save(operacion);
        }

        return null;
    }
}
