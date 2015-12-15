package com.crypt;

import java.security.MessageDigest;


public class HashEncryptImpl implements Crypt{

	
	private String cryptType = "SHA-512";
	
	public HashEncryptImpl(){	}

	public HashEncryptImpl(String cryptType){
		this.cryptType= cryptType;
	}
	/**
	 *  암호화 처리하기
	 */
	public String encode(String value) throws  Exception
	{
		StringBuffer sb=new StringBuffer();
		try {
			MessageDigest md = MessageDigest.getInstance(this.cryptType);
	        byte[] pb = md.digest(value.getBytes());
	        sb = new StringBuffer(pb.length << 1);
	        for (int i=0, iend=pb.length; i<iend ; i++)
	        {
	            int val = (pb[i] + 256) & 0xff;
	            sb.append(Integer.toHexString(val>>4)).append(Integer.toHexString(val & 0xf));
	        }
		}catch(Exception nsae ){
		}
		return sb.toString();
	}
	/**
	 *  복호화 처리하기
	 */
	public String decode(String value) throws Exception
	{
		return null;
	}
	
	
}
