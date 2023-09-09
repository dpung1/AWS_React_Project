package entity;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class NaverPlaceLoginUser {
	private int userId;
	private String username;
	private String password;
}
