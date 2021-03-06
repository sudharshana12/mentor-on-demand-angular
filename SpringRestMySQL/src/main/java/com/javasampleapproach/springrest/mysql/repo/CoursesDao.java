package com.javasampleapproach.springrest.mysql.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.javasampleapproach.springrest.mysql.model.Courses;


public interface CoursesDao extends JpaRepository<Courses, Integer>{
	
	public Courses findBycourseid(int cid);
	
	@Query(value="Select course_name from courses",nativeQuery=true)
	public List<String> getCoursename();

}
