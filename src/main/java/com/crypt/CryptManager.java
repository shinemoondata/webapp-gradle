package com.crypt;

import java.security.Key;



public class CryptManager {

	public static Crypt getCrypt()
	{
		return new EncryptImpl();
	}
	public static Crypt getCrypt(String public_key)
	{
		return new EncryptImpl(public_key);
	}
	public static Crypt getCrypt(Key public_key)
	{
		return new EncryptImpl(public_key);
	}

	
	public static Crypt getHash()
	{
		return new HashEncryptImpl();
	}

	public static Crypt getHash(String cryptType)
	{
		return new HashEncryptImpl(cryptType);
	}

}
