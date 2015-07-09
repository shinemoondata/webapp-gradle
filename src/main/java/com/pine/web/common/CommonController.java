package com.pine.web.common;

import java.io.File;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import com.pine.web.domain.CommonVO;


/**
 * The type Common controller.
 */
@SuppressWarnings({ "rawtypes", "unchecked" })
@Controller
public class CommonController {

	@Autowired
	private transient CommonService svc;


	/**
	 * Index model and view.
	 *
	 * @param vo the vo
	 * @return the model and view
	 */
	@RequestMapping("/index")
	public ModelAndView index(@ModelAttribute CommonVO vo) {
		ModelAndView view = new ModelAndView();
		if ("search".equals(vo.getM())) { // 파라미터 값에 따라 json으로 분기
			view.addObject("rows", (List) svc.selectItemList(vo));
		}
		return view;
	}

	/**
	 * Index model and view.
	 *
	 * @return the model and view
	 */
	@RequestMapping("/fileUpload")
	public ModelAndView fileUpload(Model model) {
		return new ModelAndView();
	}

	@RequestMapping("/fileUpload/post") //ajax에서 호출하는 부분
	public ModelAndView upload(MultipartHttpServletRequest multipartRequest) { //Multipart로 받는다.
		ModelAndView view = new ModelAndView();
		Iterator<String> itr = multipartRequest.getFileNames();

		while (itr.hasNext()) { //받은 파일들을 모두 돌린다.
			MultipartFile mpf = multipartRequest.getFile(itr.next());
			String originFileName = mpf.getOriginalFilename();
			System.out.println("FILE_INFO: " + originFileName); //받은 파일 리스트 출력

			Long l= System.nanoTime();
			String postfix = "_" + String.valueOf(l);

			try {
				File f = new File("d:\\temp\\" + postfix);
				mpf.transferTo(f);
			}catch(Exception e){
				e.printStackTrace();
			}

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
		}
		view.addObject("result", "success");

		return view;
	}


	/**
	 * Handlebars model and view.
	 *
	 * @param vo the vo
	 * @return the model and view
     */

	@RequestMapping("/common/handlebars")
	public ModelAndView handlebars(@ModelAttribute CommonVO vo)  {
		ModelAndView view = new ModelAndView();
		if("search".equals(vo.getM()))
		{ // 파라미터 값에 따라 json으로 분기
			view.addObject("rows", (List) svc.selectItemList(vo));
		}
		return view;
	}

	@RequestMapping("/common/xmlObj")
	public ModelAndView xmlObj(@ModelAttribute CommonVO vo)  {
		ModelAndView view = new ModelAndView();
		vo.setItemid("EST-1");
		view.addObject("rows", svc.selectItem(vo));
		return view;
	}


	/**
	 * Jqgrid model and view.
	 *
	 * @param vo the vo
	 * @return the model and view
     */
	@RequestMapping("/common/popup_jqgrid")
	public ModelAndView jqgrid(@ModelAttribute CommonVO vo)  {
		ModelAndView view = new ModelAndView();

		if("search".equals(vo.getM()))
		{ // 파라미터 값에 따라 json으로 분기
			Map m = new HashMap();
			/** The current page number */
			m.put("page", 1);
			/** Total number of pages */
			m.put("total", 399/20);
			/** Total number of records */
			m.put("records", 399);
			/** The actual data */
			m.put("rows", (List) svc.selectItemList(vo));

			view.addAllObjects(m);

		}
		return view;
	}


	/**
	 * Popup _ member.
	 *
	 * @param vo the vo
	 * @return the model and view
     */
	@RequestMapping("/common/popup_member")
	public ModelAndView popup_member(@ModelAttribute CommonVO vo)  {
		ModelAndView view = new ModelAndView();
		if("search".equals(vo.getM()))
		{ // 파라미터 값에 따라 json으로 분기
			Map m = new HashMap();
			/** The current page number */
			m.put("page", 1);
			/** Total number of pages */
			m.put("total", 399/20);
			/** Total number of records */
			m.put("records", 399);
			/** The actual data */
			m.put("rows", (List) svc.selectItemList(vo));

			view.addAllObjects(m);

		}
		return view;
	}


	/**
	 * Insert json.
	 *
	 * @param vo the vo
	 * @return the model and view
     */
	@RequestMapping("/common/insertJson")
	public ModelAndView insertJson(@ModelAttribute CommonVO vo)  {
		ModelAndView view = new ModelAndView();
		String result = svc.insertItems(vo);
		view.addObject("result",result);
		return view;
	}

	/**
	 * Json obj.
	 *
	 * @param vo the vo
	 * @return the list
     */
	@RequestMapping("/common/jsonObj")
	public @ResponseBody List jsonObj(@ModelAttribute CommonVO vo)  {
	    return (List)svc.selectItemList(vo);
	}


	/**
	 * Json map.
	 *
	 * @return the map
     */
	@RequestMapping("/common/jsonMap")
	public @ResponseBody  Map jsonMap()  {
		Map jsonObject = new HashMap();
	    ArrayList jsonList = new ArrayList();

	    //1번째 데이터
		Map jsonSubObject = new HashMap();
	    jsonSubObject.put("idx", 1);
	    jsonSubObject.put("title", "제목입니다");
	    jsonSubObject.put("create_date", new Date());
	    jsonList.add(jsonSubObject);
	    //2번째 데이터
	    jsonSubObject = new HashMap();
	    jsonSubObject.put("idx", 2);
	    jsonSubObject.put("title", "두번째제목입니다");
	    jsonSubObject.put("create_date", new Date());
	    jsonList.add(jsonSubObject);

	    //3번째 데이터
	    jsonSubObject = new HashMap();
	    jsonSubObject.put("idx", 3);
	    jsonSubObject.put("title", "세번째 제목입니다");
	    jsonSubObject.put("create_date", new Date());
	    jsonList.add(jsonSubObject);


	    jsonObject.put("success", true);
	    jsonObject.put("total_count", 20);
	    jsonObject.put("result_list", jsonList);
		return jsonObject;
	}

}
