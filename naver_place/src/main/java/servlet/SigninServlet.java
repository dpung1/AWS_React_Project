package servlet;


import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import entity.NaverPlaceUser;
import repository.NaverPlaceRepository;
import security.Authentication;
import security.SecurityContextHolder;
import utils.JsonParseUtil;
import utils.ResponseUtil;



@WebServlet("/auth/signin")
public class SigninServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 객체로 가져와서 확인하는 방법 
//		Map<String, Object> signinUser = JsonParseUtil.toMap(request.getInputStream());
//		
//		NaverPlaceLoginUser naverPlaceLoginUser = NaverPlaceLoginUser.builder()
//													.userId(signinUser.size())
//													.username((String) signinUser.get("username"))
//													.password((String) signinUser.get("password"))
//													.build();
//		
//		// 같으면 User 가져오고 다르면 null을 가져옴 
//		System.out.println(NaverPlaceRepository.getInstance().naverSigninUser(naverPlaceLoginUser));
//		
//		if(NaverPlaceRepository.getInstance().naverSigninUser(naverPlaceLoginUser) == null) {
//			ResponseUtil.reponse(response).of(200).body(null);
//			return;
//		}
//		
//		ResponseUtil.reponse(response).of(200).body(naverPlaceLoginUser);
		
		// T, F로 가져와서 확인하는 방법
		
		Map<String, Object> signinUser = JsonParseUtil.toMap(request.getInputStream());
		Map<String, String> responseData = new HashMap<>();
		
		// String으로 값을 받아서 Json 형태로 
		// Stirng 변수명 = request.getParameter("");
		
		String username = (String)signinUser.get("username");
		String password = (String)signinUser.get("password");
		
		
//		System.out.println("아이디 : " + username);
//		System.out.println("패스워드 : " + password);
		
		// 
		Boolean SigninCheck = NaverPlaceRepository.getInstance().naverSigninUser(username, password);
		
		//
//		if(SigninCheck) {
//			String token = UUID.randomUUID().toString();
//			NaverPlaceUser naverplaceuser = null;
//			Authentication authentication = new Authentication(naverplaceuser, token);
//			SecurityContextHolder.addAuth(authentication);
//			responseData.put("token", token);
//		} 
		
		// 갑자기 왜 전부다 로그인이 되는가? 
		ResponseUtil.reponse(response).of(200).body(SigninCheck);
	}
}
