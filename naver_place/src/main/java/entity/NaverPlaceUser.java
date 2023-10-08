package entity;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class NaverPlaceUser {
	private	int userId; 
	private String username;
	private String password;
	private String email;
	private String name;
	private String birthday;
	private String cellPhone;
}