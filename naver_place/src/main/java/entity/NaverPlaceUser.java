package entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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