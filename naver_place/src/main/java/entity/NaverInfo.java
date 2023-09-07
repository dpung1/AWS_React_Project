package entity;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class NaverInfo {
	private int naverId;
	private String naverUsername;
	private String naverPassword;
	private String naverEmail;
	private String naverName;
	private String naverBirthday;
	private String naverCellPhone;
}