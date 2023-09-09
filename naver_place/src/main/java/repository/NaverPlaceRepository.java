package repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

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
		
		return true;
	}
	
	// ProductColorResitory 참조 
	public NaverPlaceUser duplicateUsername(String username) {
		
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		NaverPlaceUser naverPlaceUser = null;
		
		try {
			con = pool.getConnection();
			
			String sql = "select "
							+ "username "
						+ "from "
							+ "naverplace_tb "
							+ "where "
							+ "username = ?";
			
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, username);
			rs = pstmt.executeQuery();
			
			if(rs.next()) {
				naverPlaceUser = NaverPlaceUser.builder()
						.username(rs.getString(1))
						.build();
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			
		} finally {
			pool.freeConnection(con, pstmt, rs);
		}
		
		return naverPlaceUser;
	}
	
}












