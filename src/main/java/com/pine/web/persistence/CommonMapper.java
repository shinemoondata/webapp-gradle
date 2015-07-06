package com.pine.web.persistence;

import java.util.List;

import com.pine.web.domain.CommonVO;


/**
 * The interface Common mapper.
 */
@SuppressWarnings("rawtypes")
public interface CommonMapper {


	/**
	 * Select item list.
	 *
	 * @param to the to
	 * @return the list
     */
	List selectItemList(CommonVO to);

	/**
	 * Insert item.
	 *
	 * @param to the to
     */
	void insertItem(CommonVO to);

}
