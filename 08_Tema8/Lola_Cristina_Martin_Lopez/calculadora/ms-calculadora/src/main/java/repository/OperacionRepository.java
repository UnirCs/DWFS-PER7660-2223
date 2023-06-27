package repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import data.Operacion;



public interface OperacionRepository extends JpaRepository <Operacion, Long>{
	List<Operacion> findById(String operacionId);
}
