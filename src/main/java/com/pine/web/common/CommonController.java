package com.pine.web.common;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import com.pine.web.domain.CommonVO;


/**
 * The type Common controller.
 */
@SuppressWarnings({ "rawtypes", "unchecked" })
@Controller
public class CommonController
{

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

	@RequestMapping("/fileUpload/post")
	public ModelAndView upload(MultipartHttpServletRequest multi)
	{
		ModelAndView view = new ModelAndView();
		try {
			view.addObject("result",svc.upload(multi));
		}catch(Exception e){

		}

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
