package com.crypt;

import com.common.Common;
import org.apache.log4j.Logger;

import javax.crypto.Cipher;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.DESedeKeySpec;
import javax.crypto.spec.SecretKeySpec;
import java.security.Key;





public class EncryptImpl implements Crypt {
	protected static Logger logger = Logger.getRootLogger();
	// 	공개 암호키 24이상의 문자열 데이터
	private String public_key = "EncryptImplementsObjectPublicKey";
	private String cryptType = "DESede/ECB/PKCS5Padding";
	private Key sKey;
	/**
	 *  생성자 생성
	 */
	public EncryptImpl(){	}

	/**
	 *  생성자 공개키 설정
	 */
	public EncryptImpl(String p_key){
		try {
			this.public_key = p_key + this.public_key;
			this.setKey();
		}catch(Exception e) {
			logger.error("create ERROR :: "+e.getStackTrace());
		}
	}
	/**
	 *  생성자 공개키 설정
	 */
	public EncryptImpl(Key p_key){
		this.sKey= p_key;
	}
	
	/**
	 *  암호화 처리하기
	 */
	public String encode(String val)
	{
		byte[] outputText=null;
		try
		{
			if(this.sKey.equals(null) || this.sKey == null ){
				this.setKey();
			}
			
			Cipher cipher = Cipher.getInstance(this.cryptType);
			cipher.init(Cipher.ENCRYPT_MODE,this.sKey);
			byte[] inputText = val.getBytes();
			outputText = cipher.doFinal(inputText);
	
		}
		catch(Exception e)
		{
			logger.error("[ENCODE_ERROR]"+e.getStackTrace());
		}
		
		return Common.byte2hex(outputText);
	}
	/**
	 *  복호화 처리하기
	 */
	public String decode(String ret)
	
	{
		byte[] decryptedText=null; 
		try
		{
			byte[] cipherText=Common.hex2byte(ret);

			Cipher cipher = Cipher.getInstance(this.cryptType);
			cipher.init(Cipher.DECRYPT_MODE,this.sKey);
			decryptedText = cipher.doFinal(cipherText);
			
		}
		catch(Exception e)
		{
			logger.error("[DECODE_ERROR]"+e.getStackTrace());
		}

		return new String(decryptedText);
	}

	/**
	 *  공개암호키 저장하기
	 */
	public void setKey()
	{
		try {
			byte[] key = this.public_key.substring(0,24).getBytes();
			
			this.sKey = new SecretKeySpec(key, "DESede");

			DESedeKeySpec desKeySpec = new DESedeKeySpec(key);
			SecretKeyFactory keyFactory = SecretKeyFactory.getInstance("DESede");
			this.sKey = keyFactory.generateSecret(desKeySpec);
			
			
		} catch (Exception e)	{
			logger.error("[setKey]"+e.getStackTrace());
		}
	}

}
