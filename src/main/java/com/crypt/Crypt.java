package com.crypt;


public interface Crypt {
	// 공개 암호키
	//	private String public_key = null;



	/**
	 *  암호화 처리하기
	 */
	public String encode(String value) throws  Exception;

	/**
	 *  복호화 처리하기
	 */
	public String decode(String value) throws  Exception;

	



}
