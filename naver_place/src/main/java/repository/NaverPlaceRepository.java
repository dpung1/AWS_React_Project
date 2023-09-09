package repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import config.DBConnectionMgr;
import entity.NaverPlaceUser;
import entity.NaverPlaceLoginUser;


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
		
		try {
			con = pool.getConnection();
			
			String sql = "insert into naverplace_tb "
							+ "values (0, ?, ?, ?, ?, ?, ?)";
			
			pstmt = con.prepareStatement(sql);
			
			pstmt.setString(1, naverPlaceUser.getUsername());
			pstmt.setString(2, naverPlaceUser.getPassword());
			pstmt.setString(3, naverPlaceUser.getEmail());
			pstmt.setString(4, naverPlaceUser.getName());
			pstmt.setString(5, naverPlaceUser.getBirthday());
			pstmt.setString(6, naverPlaceUser.getCellPhone());
			
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
	
	// T, F로 반환하여 리턴값 Boolean
	public Boolean duplicateUsername(String username) {
		
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		
		try {
			con = pool.getConnection();
			
			String sql = "select "
							+ "user_id "
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
		
		// 중복된 같이 없으면 false
		return false;
	}
	
	public NaverPlaceLoginUser naverSigninUser(NaverPlaceLoginUser naverPlaceLoginUser) {
		 
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		NaverPlaceLoginUser idAndPassword = null;
		
		try {
			con = pool.getConnection();
			
			String sql = "select "
							+ "user_id "
							+ "username "
							+ "password"
						+ "from "
							+ "naverplace_tb "
						+ "where "
							+ "username = ? "
							+ "and password = ?";
			
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, naverPlaceLoginUser.getUsername());
			pstmt.setString(2, naverPlaceLoginUser.getPassword());
			rs = pstmt.executeQuery();
			
			if(rs.next()) {
				idAndPassword = NaverPlaceLoginUser.builder()
						.userId(rs.getInt(1))
						.username(rs.getString(2))
						.password(rs.getString(3))
						.build();
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return idAndPassword;
		
	}
	
	
	
}












