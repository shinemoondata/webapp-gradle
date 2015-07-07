package com.pine.web.common;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pine.web.domain.CommonVO;
import com.pine.web.persistence.CommonMapper;


/**
 * The type Common service.
 */
@SuppressWarnings({ "unchecked", "rawtypes" })
@Service
public class CommonService {

	@Autowired
	private CommonMapper mapper;


	/**
	 * Select item list.
	 *
	 * @param to the to
	 * @return the list
     */
	public List<CommonVO> selectItemList(CommonVO to)  {
		return mapper.selectItemList(to);
	}
	/**
	 * Select item list.
	 *
	 * @param to the to
	 * @return the list
	 */
	public CommonVO selectItem(CommonVO to)  {
		return mapper.selectItem(to);
	}

	/**
	 * Insert items.
	 *
	 * @param vo the vo
	 * @return the string
     */
	@Transactional
	public String  insertItems(CommonVO vo) {
		String rtn ="";
		try {
			if("insert".equals(vo.getM()))
			{ // 파라미터 값에 따라 json으로 분기
				mapper.insertItem(vo);
				rtn ="1"; // 성공처리
			}
		} catch (DuplicateKeyException e) {
			rtn = "DB-901";
			//rtn ="중복 키값이 존재합니다.";
		} catch (DataIntegrityViolationException e) {
			rtn = "DB-902";
			//rtn ="필수 값이 빠졌습니다.";
		} catch (Exception e) {
			rtn = "DB-999";
			//rtn = "실패했습니다.";
			e.printStackTrace();
		}

		return rtn;
	}

}
