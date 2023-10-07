package servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import repository.NaverPlaceRepository;
import utils.ResponseUtil;

@WebServlet("/auth/signup/duplicate/username")
public class DuplicateUsername extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String username = request.getParameter("username");
		
//		System.out.println("아이디 : " + username);
		Boolean responseData = NaverPlaceRepository.getInstance().duplicateUsername(username);
		
		// 중복이면 true 아니면 false
//		System.out.println(responseData);
		
		ResponseUtil.reponse(response).of(200).body(responseData);
    }
}







