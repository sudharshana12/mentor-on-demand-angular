package com.javasampleapproach.springrest.mysql.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.javasampleapproach.springrest.mysql.model.Courses;
import com.javasampleapproach.springrest.mysql.model.User;
import com.javasampleapproach.springrest.mysql.repo.CoursesDao;
import com.javasampleapproach.springrest.mysql.repo.UserDao;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AdminController {
	@Autowired
	UserDao userdao;
	@Autowired
	CoursesDao coursesdao;
	
	/*@ModelAttribute("tech")
	public List<String> setValues()
	{
		List<String> tech = new ArrayList<>();
		//List<String> coursename = coursesdao.getCoursename();
		//tech.addAll(coursename);
		tech.add("adobe");
		return tech;
	}
	*/
	
	
	
	
	
	@GetMapping(value="/blockUser")
	public List<User> blockUserlist()
	{
		
	   List<User> userlist = userdao.findAll();
		return userlist;
		
	}
	
	@GetMapping(value="/blockAction/{userid}")
	public void blockUser(@PathVariable("userid")int id)
	{  
		int userId = id;
		userdao.setBlockStatus(userId);
		
	}
	
	@GetMapping(value="/unblockAction/{userid}")
	public void unblockUser(@PathVariable("userid")int id)
	{
		int userId = id;
		userdao.setUnblockStatus(userId);
		
	}
	
	@RequestMapping("/addtech")
	public ModelAndView addtechform(ModelAndView model)
	{
		model = new ModelAndView("add-tech");
		Courses course = new Courses();
		model.addObject("course",course);
		return model;
	}
	

	
	@RequestMapping("/edittech")
	public String edittechform(@RequestParam("id")int cid,Model model)
	{
		Courses course = coursesdao.findBycourseid(cid);
		model.addAttribute("course",course);
		return "edit-tech";
	}
	
	@RequestMapping(value="/edittech",method=RequestMethod.POST)
	public String edittech(@RequestParam("id")int cid,@ModelAttribute("course")Courses course)
	{
		Courses coursedetails = coursesdao.findBycourseid(cid);
		coursedetails.setCourseName(course.getCourseName());
		coursedetails.setRate(course.getRate());
		coursesdao.save(coursedetails);
		return "admin-landing-page";
	}
	
	@GetMapping("/viewtech")
	public List<Courses> viewtech()
	{
		List<Courses>techlist=coursesdao.findAll();
		return techlist;
	}
	


}
