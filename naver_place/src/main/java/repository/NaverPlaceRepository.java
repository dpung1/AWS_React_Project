package repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import config.DBConnectionMgr;
import entity.NaverPlaceUser;


public class NaverPlaceRepository {
	
	private static DBConnectionMgr pool;
	private static NaverPlaceRepository instance;
	
	private NaverPlaceRepository() {
		pool = DBConnectionMgr.getInstance();
	}
	
	public static NaverPlaceRepository getInstance() {
		if(instance == null) {
			instance = new NaverPlaceRepository();
		}
		
		return instance;
	}
	
	public boolean naverPlaceInfoInsert(NaverPlaceUser naverPlaceUser) {
		
		Connection con = null;
		PreparedStatement pstmt = null;
		
		String usernmae = naverPlaceUser.getUsername().trim();
		String password = naverPlaceUser.getPassword().trim();
		String name = naverPlaceUser.getName().trim();
		String birthday = naverPlaceUser.getBirthday().trim();
		String cellphone = naverPlaceUser.getCellPhone().trim();
		
		if(usernmae.isEmpty() || password.isEmpty() || name.isEmpty() || birthday.isEmpty() || cellphone.isEmpty()) {
			return false;
		}
		
		try {
			con = pool.getConnection();
			
			String sql = "insert into naverplace_tb "
							+ "values (0, ?, ?, ?, ?, ?, ?)";
			
			pstmt = con.prepareStatement(sql);
			
			pstmt.setString(1, usernmae);
			pstmt.setString(2, password);
			pstmt.setString(3, naverPlaceUser.getEmail());
			pstmt.setString(4, name);
			pstmt.setString(5, birthday);
			pstmt.setString(6, cellphone);
			
			int result = pstmt.executeUpdate();
			
			if(result == 1) {
				return true;
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			
		} finally {
			pool.freeConnection(con, pstmt);
		}
		
		return false;
	}
	
	// T, F로 중복확인
	public Boolean duplicateUsername(String username) {
		
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		
		try {
			con = pool.getConnection();
			
			String sql = "select "
							+ "user_id, "
							+ "username "
						+ "from "
							+ "naverplace_tb "
						+ "where "
							+ "username = ?";
			
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, username);
			rs = pstmt.executeQuery();
			
			// 중복된 값이 있으면 true
			if(rs.next()) {
				return true;
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			
		} finally {
			pool.freeConnection(con, pstmt, rs);
		}
		
		// 중복된 값이 없으면 false
		return false;
	}
	
	// 로그인시 User정보 가져오는 방법 
	public NaverPlaceUser naverSignin(NaverPlaceUser naverPlaceUser) {
		
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		NaverPlaceUser naverInfoData = null;
		
		try {
			con = pool.getConnection();
			
			String sql = "select "
							+ "* "
						+ "from "
							+ "naverplace_tb "
						+ "where "
							+ "username = ? "
							+ "and password = ?";
			
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, naverPlaceUser.getUsername());
			pstmt.setString(2, naverPlaceUser.getPassword());
			rs = pstmt.executeQuery();
			
			if(rs.next()) {
				naverInfoData = NaverPlaceUser.builder()
										.userId(rs.getInt(1))   
										.username(rs.getString(2))
										.password(rs.getString(3))
										.email(rs.getString(4))
										.name(rs.getString(5))
										.birthday(rs.getString(6))
										.cellPhone(rs.getString(7))
										.build();
				return naverInfoData;
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			pool.freeConnection(con, pstmt, rs);
		}	
		return null;
	}
	
//	// 객체를 가져와서 확인하는 방법 
//	public NaverPlaceLoginUser naverSigninUser(NaverPlaceLoginUser naverPlaceLoginUser) {
//		 
//		Connection con = null;
//		PreparedStatement pstmt = null;
//		ResultSet rs = null;
//		NaverPlaceLoginUser idAndPassword = null;
//		
//		try {
//			con = pool.getConnection();
//			
//			String sql = "select "
//							+ "user_id, "
//							+ "username, "
//							+ "password "
//						+ "from "
//							+ "naverplace_tb "
//						+ "where "
//							+ "username = ? "
//							+ "and password = ?";
//			
//			pstmt = con.prepareStatement(sql);
//			pstmt.setString(1, naverPlaceLoginUser.getUsername());
//			pstmt.setString(2, naverPlaceLoginUser.getPassword());
//			rs = pstmt.executeQuery();
//			
//			if(rs.next()) {
//				idAndPassword = NaverPlaceLoginUser.builder()
//						.userId(rs.getInt(1))
//						.username(rs.getString(2))
//						.password(rs.getString(3))
//						.build();
//				
//				return idAndPassword;
//			}
//			
//		} catch (Exception e) {
//			e.printStackTrace();
//			
//		} finally {
//			pool.freeConnection(con, pstmt, rs);
//		}
//		
//		return null;
//	}
	
	// T, F를 가져와서 확인하는 방법 
//	public Boolean naverSigninUser(String username, String password) {
//		 
//		Connection con = null;
//		PreparedStatement pstmt = null;
//		ResultSet rs = null;
//		
//		try {
//			con = pool.getConnection();
//			
//			String sql = "select "
//							+ "username, "
//							+ "password "
//						+ "from "
//							+ "naverplace_tb "
//						+ "where "
//							+ "username = ? "
//							+ "and password = ?";
//			
//			pstmt = con.prepareStatement(sql);
//			pstmt.setString(1, username);
//			pstmt.setString(2, password);
//			rs = pstmt.executeQuery();
//			
//			if(rs.next()) {
//				return true;
//			}
//			
//		} catch (Exception e) {
//			e.printStackTrace();
//			
//		} finally {
//			pool.freeConnection(con, pstmt, rs);
//		}
//		
//		return false;
//	}
	
public boolean naverPlaceInfoUpdate(NaverPlaceUser naverPlaceUser) {
		
		Connection con = null;
		PreparedStatement pstmt = null;
		
		String usernmae = naverPlaceUser.getUsername().trim();
		String password = naverPlaceUser.getPassword().trim();
		String name = naverPlaceUser.getName().trim();
		String birthday = naverPlaceUser.getBirthday().trim();
		String cellphone = naverPlaceUser.getCellPhone().trim();
		
		if(usernmae.isEmpty() || password.isEmpty() || name.isEmpty() || birthday.isEmpty() || cellphone.isEmpty()) {
			return false;
		}
		
		try {
			con = pool.getConnection();
			
			String sql = "update naverplace_tb "
			          + "set "
			            + "username = ?, "
			            + "password = ?, "
			            + "email = ?, "
			            + "name = ?, "
			            + "birthday = ?, "
			            + "cellphone = ? "
			          + "where "
			            + "user_id = ?";
			
			pstmt = con.prepareStatement(sql);
			
			pstmt.setString(1, usernmae);
			pstmt.setString(2, password);
			pstmt.setString(3, naverPlaceUser.getEmail());
			pstmt.setString(4, name);
			pstmt.setString(5, birthday);
			pstmt.setString(6, cellphone);
			pstmt.setInt(7, naverPlaceUser.getUserId()); 
			
			int result = pstmt.executeUpdate();
			
			if(result == 1) {
				return true;
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			
		} finally {
			pool.freeConnection(con, pstmt);
		}
		
		return false;
	} 

}












