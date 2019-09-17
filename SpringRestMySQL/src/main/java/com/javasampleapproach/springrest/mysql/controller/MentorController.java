package com.javasampleapproach.springrest.mysql.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.javasampleapproach.springrest.mysql.model.User;
import com.javasampleapproach.springrest.mysql.repo.MentorDao;
import com.javasampleapproach.springrest.mysql.repo.UserDao;
import com.javasampleapproach.springrest.mysql.repo.requestTableDao;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MentorController {
	@Autowired
	UserController usercontroller;
	@Autowired
	MentorDao mentordao;
	@Autowired
	requestTableDao rtdao;
	@Autowired
	UserDao userdao;

	@GetMapping(value = "/listRequest/{mentorid}")
	public List<User> listRequests(@PathVariable int mentorid) {
		List<String> studentNameList = new ArrayList<>();
		List<Integer> studentIdList = mentordao.studentList(mentorid);
        List<User> students = new ArrayList<>();
		for (int i = 0; i < studentIdList.size(); i++) {
			//String name = mentordao.studentName(studentIdList.get(i));
			//studentNameList.add(name);
			User student =  userdao.findByid(studentIdList.get(i));
			students.add(student);
		}	
		return students;
	}
	
	@GetMapping(value="/accept/{mentorid}/{studentname}")
	public void  acceptRequest(@PathVariable("mentorid") int mentorid,@PathVariable("studentname") String studentName)
	{
		System.out.println("accept");
		int studentId = mentordao.StudentId(studentName);
		rtdao.setAcceptStatus(studentId,mentorid);
		
	}
	
	@GetMapping(value="/reject/{mentorid}/{studentname}")
	public void  rejectRequest(@PathVariable("mentorid") int mentorid,@PathVariable("studentname") String studentName)
	{
		System.out.println("reject");
		int studentId = mentordao.StudentId(studentName);
		rtdao.setIgnoreStatus(studentId,mentorid);
		
	}
	
   
}