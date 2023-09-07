package servlet;

import java.io.IOException;
import java.util.List;
import java.util.Objects;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import entity.NaverInfo;
import repository.NaverRepository;
import utils.ResponseUtil;

@WebServlet("/auth/signup/duplicate/username")
public class DuplicateUsername extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String username = request.getParameter("username");
		
		Boolean responseData = false;
		
        NaverRepository repository = NaverRepository.getInstance();
        List<NaverInfo> naverInfoList = repository.naverInfoAllList();
//
//        for (NaverInfo naverInfo : naverInfoList) {
//            if (naverInfo.getNaverUsername().equals(username)) {
//                ResponseUtil.reponse(response).of(400).body(true);
//                return;
//            }
//        }
//
//        ResponseUtil.reponse(response).of(200).body(false);
		
		for(NaverInfo naverInfo : naverInfoList) {
			if(naverInfo.getNaverUsername().equals(username)) {
				responseData = true;
				break;
			}
		}
		ResponseUtil.reponse(response).of(200).body(responseData);
    }


}







