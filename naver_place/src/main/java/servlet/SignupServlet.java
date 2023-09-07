package servlet;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.crypto.Data;

import com.google.gson.Gson;

import data.NaverInfoData;
import entity.NaverInfo;
import repository.NaverRepository;
import utils.JsonParseUtil;
import utils.ResponseUtil;

@WebServlet("/auth/signup")
public class SignupServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	/**
	 * 회원가입 -> 사용자 정보 데이터의 추가를 의미 
	 * 추가 -> Create, 데이터 베이스에 정보를 insert -> POST 요청
	 * POST 메소드의 특징
	 * 1. 데이터가 주소창에 표시되지 않는다. 
	 * 	-> GET : http://locarhost:8080/category?categoryName=한식(x)
	 *	-> POST : http://locarhost:8080/category (BODY에 데이터를 담아서 서버로 전송)
	 * 2. 전송 데이터의 크기 제한이 없다.
	*/
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Map<String, Object> useraMap = JsonParseUtil.toMap(request.getInputStream());
		
		List<NaverInfo> naverInfoList = NaverInfoData.naverInfoList;
		
		NaverInfo naverInfo = NaverInfo.builder()
				.naverId(naverInfoList.size() + 1)
				.naverUsername((String) useraMap.get("username"))
				.naverPassword((String) useraMap.get("password"))
				.naverEmail((String) useraMap.get("email"))
				.naverName((String) useraMap.get("name"))
				.naverBirthday((String) useraMap.get("birthday"))
				.naverCellPhone((String) useraMap.get("cellphone"))
				.build();
		
		naverInfoList.add(naverInfo);
		
		if(NaverRepository.naverInfoInsert(naverInfo)) {
			ResponseUtil.reponse(response).of(201).body(true);
		
		}
	}
}








