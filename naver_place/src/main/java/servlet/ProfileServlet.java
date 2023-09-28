package servlet;

import java.io.IOException;
import java.util.Map;

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


@WebServlet("/mypage/profile")
public class ProfileServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String token = request.getHeader("Authorization");
		
		NaverPlaceUser naverPlaceUser = SecurityContextHolder.findAuthenticationByToken(token).getNaverPlaceUser();
		
		ResponseUtil.reponse(response).of(200).body(JsonParseUtil.toJson(naverPlaceUser));
		

	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Map<String, Object> profileMap = JsonParseUtil.toMap(request.getInputStream());
		
		Authentication authentication = SecurityContextHolder.findAuthenticationByToken(request.getHeader("Authorization"));
		
		NaverPlaceUser oldNaverPlaceUser = authentication.getNaverPlaceUser();
		
		NaverPlaceUser naverPlaceUser = NaverPlaceUser.builder()
														.userId(oldNaverPlaceUser.getUserId())
														.username((String) profileMap.get("username"))
														.password((String) profileMap.get("password"))
														.email((String) profileMap.get("email"))
														.name((String) profileMap.get("name"))
														.birthday((String) profileMap.get("birthday"))
														.cellPhone((String) profileMap.get("cellphone"))
														.build();
		
		if(NaverPlaceRepository.getInstance().naverPlaceInfoUpdate(naverPlaceUser)) {
			ResponseUtil.reponse(response).of(201).body(true);
		}
	}

}
