package repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import config.DBConnectionMgr;
import entity.NaverInfo;


public class NaverRepository {
	
	private static DBConnectionMgr pool;
	private static NaverRepository instance;
	
	private NaverRepository() {
		pool = DBConnectionMgr.getInstance();
	}
	
	public static NaverRepository getInstance() {
		if(instance == null) {
			instance = new NaverRepository();
		}
		
		return instance;
	}
	
	public List<NaverInfo> naverInfoAllList() {
		
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		
		List<NaverInfo> naverInfoList = null;
		
		try {
			con = pool.getConnection();
			String sql = "SELECT * FROM naver_tb";
			
			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();
			
			naverInfoList = new ArrayList<>();
			
			while(rs.next()) {
				NaverInfo naverInfo = NaverInfo.builder()
						.naverId(rs.getInt(1))
						.naverUsername(rs.getString(2))
						.naverPassword(rs.getString(3))
						.naverEmail(rs.getString(4))
						.naverName(rs.getString(5))
						.naverBirthday(rs.getString(6))
						.naverCellPhone(rs.getString(7))
						.build();
				
				naverInfoList.add(naverInfo);
			}
				
			
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			pool.freeConnection(con, pstmt, rs);
		}
		
		return naverInfoList;
		
	}
	public static boolean naverInfoInsert(NaverInfo naver) {
		
		Connection con = null;
		PreparedStatement pstmt = null;
		
		try {
			con = pool.getConnection();
			String sql = "insert into naver_tb values (0, ?, ?, ?, ?, ?, ?)";
			pstmt = con.prepareStatement(sql);
			
			pstmt.setInt(1, naver.getNaverId());
			pstmt.setString(1, naver.getNaverUsername());
			pstmt.setString(2, naver.getNaverPassword());
			pstmt.setString(3, naver.getNaverEmail());
			pstmt.setString(4, naver.getNaverName());
			pstmt.setString(5, naver.getNaverBirthday());
			pstmt.setString(6, naver.getNaverCellPhone());
			
			int result = pstmt.executeUpdate();
			
			if(result == 1) {
				return true;
			}
		}catch (Exception e) {
			e.printStackTrace();
		} finally {
			pool.freeConnection(con, pstmt);
		}
		return true;
	}
}









