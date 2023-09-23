package filter;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebFilter("*")
public class SecurityFilter extends HttpFilter implements Filter {
       
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse resq = (HttpServletResponse) response;
		
		String rootPath = "/naver_place";
		String[] antMatchers = {"/auth"};
		
		String uri = req.getRequestURI();
		
		for(String antMatcher : antMatchers) {
			if(uri.startsWith(rootPath + antMatcher)) {
				chain.doFilter(request, response);
				return;
			}
		
			String UserInfo = req.getHeader("Authentication");
			System.out.println(UserInfo);
			
		}

	 chain.doFilter(request, response);
	}

}
