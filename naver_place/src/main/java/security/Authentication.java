package security;

import entity.NaverPlaceLoginUser;
import entity.NaverPlaceUser;
import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class Authentication {
	
	private NaverPlaceUser naverPlaceUser;
	private String token;
}