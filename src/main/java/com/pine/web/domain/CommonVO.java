package com.pine.web.domain;

import javax.xml.bind.annotation.XmlRootElement;
import java.io.Serializable;
import java.math.BigDecimal;


/**
 * The type Common vO.
 */
@XmlRootElement(name="result")
public class CommonVO implements Serializable {

	private static final long serialVersionUID = 8751282105532159742L;

	private String m  ;

	private String userid  ;
	private String email  ;
	private String firstname  ;
	private String lastname  ;
	private String status  ;
	private String addr1  ;
	private String addr2  ;
	private String city  ;
	private String state  ;
	private String zip  ;
	private String country  ;
	private String phone  ;

	private String itemid;
	private String productid;
	private BigDecimal listprice;
	private BigDecimal unitcost;
	private BigDecimal supplier;
	private String attr1;

	/**
	 * Gets userid.
	 *
	 * @return the userid
     */
	public String getUserid() {
		return userid;
	}

	/**
	 * Sets userid.
	 *
	 * @param userid the userid
     */
	public void setUserid(String userid) {
		this.userid = userid;
	}

	/**
	 * Gets email.
	 *
	 * @return the email
     */
	public String getEmail() {
		return email;
	}

	/**
	 * Sets email.
	 *
	 * @param email the email
     */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * Gets firstname.
	 *
	 * @return the firstname
     */
	public String getFirstname() {
		return firstname;
	}

	/**
	 * Sets firstname.
	 *
	 * @param firstname the firstname
     */
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	/**
	 * Gets lastname.
	 *
	 * @return the lastname
     */
	public String getLastname() {
		return lastname;
	}

	/**
	 * Sets lastname.
	 *
	 * @param lastname the lastname
     */
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	/**
	 * Gets status.
	 *
	 * @return the status
     */
	public String getStatus() {
		return status;
	}

	/**
	 * Sets status.
	 *
	 * @param status the status
     */
	public void setStatus(String status) {
		this.status = status;
	}

	/**
	 * Gets addr 1.
	 *
	 * @return the addr 1
     */
	public String getAddr1() {
		return addr1;
	}

	/**
	 * Sets addr 1.
	 *
	 * @param addr1 the addr 1
     */
	public void setAddr1(String addr1) {
		this.addr1 = addr1;
	}

	/**
	 * Gets addr 2.
	 *
	 * @return the addr 2
     */
	public String getAddr2() {
		return addr2;
	}

	/**
	 * Sets addr 2.
	 *
	 * @param addr2 the addr 2
     */
	public void setAddr2(String addr2) {
		this.addr2 = addr2;
	}

	/**
	 * Gets city.
	 *
	 * @return the city
     */
	public String getCity() {
		return city;
	}

	/**
	 * Sets city.
	 *
	 * @param city the city
     */
	public void setCity(String city) {
		this.city = city;
	}

	/**
	 * Gets state.
	 *
	 * @return the state
     */
	public String getState() {
		return state;
	}

	/**
	 * Sets state.
	 *
	 * @param state the state
     */
	public void setState(String state) {
		this.state = state;
	}

	/**
	 * Gets zip.
	 *
	 * @return the zip
     */
	public String getZip() {
		return zip;
	}

	/**
	 * Sets zip.
	 *
	 * @param zip the zip
     */
	public void setZip(String zip) {
		this.zip = zip;
	}

	/**
	 * Gets country.
	 *
	 * @return the country
     */
	public String getCountry() {
		return country;
	}

	/**
	 * Sets country.
	 *
	 * @param country the country
     */
	public void setCountry(String country) {
		this.country = country;
	}

	/**
	 * Gets phone.
	 *
	 * @return the phone
     */
	public String getPhone() {
		return phone;
	}

	/**
	 * Sets phone.
	 *
	 * @param phone the phone
     */
	public void setPhone(String phone) {
		this.phone = phone;
	}

	/**
	 * Gets itemid.
	 *
	 * @return the itemid
     */
	public String getItemid() {
		return itemid;
	}

	/**
	 * Sets itemid.
	 *
	 * @param itemid the itemid
     */
	public void setItemid(String itemid) {
		this.itemid = itemid;
	}

	/**
	 * Gets productid.
	 *
	 * @return the productid
     */
	public String getProductid() {
		return productid;
	}

	/**
	 * Sets productid.
	 *
	 * @param productid the productid
     */
	public void setProductid(String productid) {
		this.productid = productid;
	}

	/**
	 * Gets listprice.
	 *
	 * @return the listprice
     */
	public BigDecimal getListprice() {
		return listprice;
	}

	/**
	 * Sets listprice.
	 *
	 * @param listprice the listprice
     */
	public void setListprice(BigDecimal listprice) {
		this.listprice = listprice;
	}

	/**
	 * Gets unitcost.
	 *
	 * @return the unitcost
     */
	public BigDecimal getUnitcost() {
		return unitcost;
	}

	/**
	 * Sets unitcost.
	 *
	 * @param unitcost the unitcost
     */
	public void setUnitcost(BigDecimal unitcost) {
		this.unitcost = unitcost;
	}

	/**
	 * Gets supplier.
	 *
	 * @return the supplier
     */
	public BigDecimal getSupplier() {
		return supplier;
	}

	/**
	 * Sets supplier.
	 *
	 * @param supplier the supplier
     */
	public void setSupplier(BigDecimal supplier) {
		this.supplier = supplier;
	}

	/**
	 * Gets attr 1.
	 *
	 * @return the attr 1
     */
	public String getAttr1() {
		return attr1;
	}

	/**
	 * Sets attr 1.
	 *
	 * @param attr1 the attr 1
     */
	public void setAttr1(String attr1) {
		this.attr1 = attr1;
	}

	/**
	 * Gets serialversionuid.
	 *
	 * @return the serialversionuid
     */
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	/**
	 * Gets m.
	 *
	 * @return the m
     */
	public String getM() {
		return m;
	}

	/**
	 * Sets m.
	 *
	 * @param m the m
     */
	public void setM(String m) {
		this.m = m;
	}

}
