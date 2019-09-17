package com.javasampleapproach.springrest.mysql.controller;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.javasampleapproach.springrest.mysql.model.Customer;
import com.javasampleapproach.springrest.mysql.model.Login;
import com.javasampleapproach.springrest.mysql.model.RequestTable;
import com.javasampleapproach.springrest.mysql.model.User;
import com.javasampleapproach.springrest.mysql.repo.UserDao;
import com.javasampleapproach.springrest.mysql.repo.requestTableDao;
import com.javasampleapproach.springrest.mysql.service.LoginService;




@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {
	
	@Autowired
	UserDao userdao;
	@Autowired
	requestTableDao requesttabledao;
	
	
	@GetMapping(value="/search/{searchvalue}")
	public List<User> viewCourses(@PathVariable String searchvalue)
	{
		//System.out.println(searchvalue);
		
		List<User> mentorlist = userdao.mentorsList(searchvalue);
		return mentorlist;
		
		
	}
	@GetMapping(value="/sendRequest/{userid}/{mentorid}")
	public void sendRequest(@PathVariable int userid,@PathVariable int mentorid)
	{
		
		RequestTable rt = new RequestTable();
		String mentorname = userdao.getMentorName(mentorid);
		
		rt.setUserId(userid);
		rt.setMentorid(mentorid);
		rt.setStatus("requested");
		rt.setMentorName(mentorname);
		requesttabledao.save(rt);
		
	}
	
	@PostMapping(value = "/register")
	public User postCustomer(@RequestBody User user) {

		User user1 = new User();
		user1.setName(user.getName());
		user1.setPassword(user.getPassword());
		user1.setEmail(user.getEmail());
		user1.setMobileno(user.getMobileno());
		user1.setBlockStatus("unblocked");
		user1.setUserType("User");
		userdao.save(user1);
		return user1;
	}

	

	@GetMapping("/getUsers")
	public List<User>getUsers()
	{   	
	List <User> userlist = userdao.findAll();
	return userlist;
	}
	
	@GetMapping("/requestlist/{userid}")
	public List<RequestTable>getReqList(@PathVariable("userid") int userid)
	{   	
	List <RequestTable> rtlist = requesttabledao.findByuserId(userid);
	return rtlist;
	}
}

	