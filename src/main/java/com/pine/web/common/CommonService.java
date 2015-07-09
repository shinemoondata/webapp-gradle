package com.pine.web.common;

import java.io.File;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartException;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

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

	public String upload(MultipartHttpServletRequest multi) throws MultipartException
	{
		String isSuccess = "";
		try {

			Iterator<String> itr = multi.getFileNames();
			while (itr.hasNext()) { //받은 파일들을 모두 돌린다.
				MultipartFile mpf = multi.getFile(itr.next());
				if( mpf.getSize() > 62914560){
					isSuccess = "File Limit 60MB!";
				}else{
					String originFileName = mpf.getOriginalFilename();

					Long l= System.nanoTime();
					String postfix = "_" +  String.valueOf(l);

					System.out.println("FILE_INFO: " + originFileName); //받은 파일 리스트 출력
					System.out.println("FILE_INFO_SAVED: " + postfix); //받은 파일 리스트 출력

					File f = new File("d:\\temp\\" + postfix);
					mpf.transferTo(f);

					/*
					FileOutputStream fos=null;
					try{
						byte fileData[] = mpf.getBytes();
						fos = new FileOutputStream("d:\\temp\\" + postfix);
						fos.write(fileData);
					}catch(Exception e){
						e.printStackTrace();
					}finally{
						if(fos != null)try{fos.close(); }catch(Exception e){}
					}// try end;
					*/
					isSuccess = "Success";
				}

			}


		} catch(IOException ex){
			isSuccess = "Failed";
		}
		return isSuccess;
	}
}
