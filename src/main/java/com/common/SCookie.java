package com.common;

import com.crypt.Crypt;
import com.crypt.CryptManager;
import org.apache.log4j.Logger;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class SCookie
{
	protected static Logger logger = Logger.getRootLogger();
	
	private String public_key = "";
	private Crypt crypt;
	private boolean isExistKey = false;


	public SCookie(){}

	/**
	 *  생성자
	 */
	public SCookie(HttpServletRequest request, HttpServletResponse response)
	{
		try {

			for ( Cookie c : request.getCookies() ) {
				if ("orcm".equals(c.getName()) == true){
					Crypt cpt2 = CryptManager.getCrypt(""); // 공개키
					String nonotime = cpt2.decode(c.getValue());
					this.crypt = CryptManager.getCrypt(nonotime);

					this.isExistKey = true;
				}
			}
		}catch (Exception e){
			logger.error("[SCookie orcm ERROR]"+e.getStackTrace());
		}

		try {
			if (this.isExistKey == false){
				this.setPublicKey(response);
			}
		} catch (Exception e) {
			logger.error("[SCookie setPublicKey ERROR]"+e.getStackTrace());
		}
	}


	/**
	 *  쿠키 저장하기
	 */
	public void setCookie(HttpServletRequest request, HttpServletResponse response,String name, String value)
	{
		try {
			if(isExistKey == true){
				// key 가 만들어지고 난후에 처리
				for ( Cookie c : request.getCookies() ) {
					if ("orcm".equals(c.getName()) == true){
						Crypt cpt2 = CryptManager.getCrypt(""); // 공개키
						String nonotime = cpt2.decode(c.getValue());
						this.crypt = CryptManager.getCrypt(nonotime);
					}
				}
			}else{
				// 최초에 키를 가지고 처리
				this.crypt = CryptManager.getCrypt(this.public_key);
			}
		}catch (Exception e){
			logger.error("[isExistKey ERROR]"+e.getStackTrace());
		}	
		
		try {
			String CryptValue = this.crypt.encode(Common.trim(value));
			Cookie coki = new Cookie(name,CryptValue);
			coki.setPath("/");
			coki.setMaxAge(-1); //브라우저를 닫으면 쿠키가 자동소멸

			response.addCookie(coki);
		}catch (Exception e){
			logger.error("[setCookie Key ERROR]"+e.getStackTrace());
		}
	}
	

	/**
	 *  암호키 생성
	 */
	private void setPublicKey(HttpServletResponse response)
	{
		try {
			long l= System.nanoTime();
			this.public_key = Long.toString(l);
			Crypt cpt = CryptManager.getCrypt(""); // 공개키 생성
			String CryptValue = cpt.encode(this.public_key); // 암호화 나노타임
			Cookie coki = new Cookie("orcm",CryptValue);
			coki.setPath("/");
			coki.setMaxAge(-1); //브라우저를 닫으면 쿠키가 자동소멸
			response.addCookie(coki);

		} catch (Exception e) {
			logger.error("[setPublicKey ERROR]"+e.getStackTrace());
		}

	}

	/**
	 *  쿠키 가져오기
	 */
	public static String getCookie(HttpServletRequest request,String name)
	{
		String strRet = "";
		
		try
		{
			Crypt cpt=null;
			for ( Cookie c : request.getCookies() ) {
				if ("orcm".equals(c.getName()) == true){
					Crypt cpt2 = CryptManager.getCrypt(""); // 공개키
					String nonotime = cpt2.decode(c.getValue());
					cpt = CryptManager.getCrypt(nonotime);
				}
			}

			for ( Cookie c : request.getCookies() ) {
				if (name.equals(c.getName()) == true){
					strRet = cpt.decode( c.getValue());
				}
			}

		} catch(Exception e){

		}
		
		return Common.trim(strRet);
		
	}

	/**
	 *  쿠키 전체 삭제
	 */
	public static void DeleteCookie(HttpServletRequest request, HttpServletResponse response)
	{
		try
		{
			
			Cookie delcoki=null;
			for ( Cookie c : request.getCookies() ) {
				delcoki = new Cookie(c.getName(), "");
				delcoki.setValue("");
				delcoki.setPath("/");
				delcoki.setMaxAge(0);
				response.addCookie(delcoki);
			} // end for
			 
			Cookie[] cookies = request.getCookies();

	        for(int i=0;i<cookies.length;i++){

	            //if(!cookies[i].getName().equals("JSESSIONID")){
	                cookies[i].setMaxAge(0);
	                cookies[i].setValue("");
	                cookies[i].setValue(null);
	                response.addCookie(cookies[i]);
	            //}
	        }
			
			
		}catch (Exception e){
			logger.error("[DeleteCookie ERROR]"+e.getStackTrace());
		}

	}



} // end class
