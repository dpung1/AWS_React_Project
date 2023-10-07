package security;

import entity.NaverPlaceUser;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@AllArgsConstructor
@Data
public class Authentication {
	
	private NaverPlaceUser naverPlaceUser;
	private String token;
}