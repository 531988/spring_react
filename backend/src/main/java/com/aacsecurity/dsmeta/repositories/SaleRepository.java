package com.aacsecurity.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aacsecurity.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	
}
