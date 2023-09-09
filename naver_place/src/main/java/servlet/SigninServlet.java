package servlet;


import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import entity.NaverPlaceLoginUser;
import repository.NaverPlaceRepository;
import utils.JsonParseUtil;



@WebServlet("/auth/signin")
public class SigninServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Map<String, Object> signinUser = JsonParseUtil.toMap(request.getInputStream());
		
		NaverPlaceLoginUser naverPlaceLoginUser = NaverPlaceLoginUser.builder()
													.userId(signinUser.size())
													.username((String) signinUser.get("username"))
													.password((String) signinUser.get("password"))
													.build();
		
		if(NaverPlaceRepository.getInstance().naverSigninUser(naverPlaceLoginUser) != null) {
			
		}
	}
}
