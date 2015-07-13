package com.pine.web.common;

import com.pine.web.domain.CommonVO;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;


/**
 * The type Common controller.
 */
@SuppressWarnings({ "rawtypes", "unchecked" })
@Controller
public class CommonController implements HandlerExceptionResolver
{
	private static final Logger logger = Logger.getLogger(CommonController.class);

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
	 * @param model the model
	 * @return the model and view
	 */
	@RequestMapping("/fileUpload")
	public ModelAndView fileUpload(Model model) {
		return new ModelAndView();
	}

	/**
	 * Upload model and view.
	 *
	 * @param multi the multi
	 * @return the model and view
	 */
	@RequestMapping("/fileUpload/post")
	public ModelAndView upload(MultipartHttpServletRequest multi)
	{
		ModelAndView view = new ModelAndView();
		try {
			view.addObject("result",svc.upload(multi));
		}catch(Exception e){
			System.out.println("익셉션 성공!!!!!");
		}

		return view;
	}

	/**
	 * File download.
	 *
	 * @param request the request
	 * @param response the response
	 */
	@RequestMapping("/fileDownload")
	public void fileDownload(HttpServletRequest request, HttpServletResponse response) {
		try {
			svc.download(response);
		}catch(Exception e) {
			e.printStackTrace();
		}
	}


	/**
	 * Excel download.
	 *
	 * @param vo the vo
	 * @return the model and view
	 */
	@RequestMapping("/excelDownload")
	public ModelAndView excelDownload(@ModelAttribute CommonVO vo) {
		vo.setHeaderColumns("아이템아이디`제품아이디`가격`단위`제고`상태`속성");
		vo.setProperties("itemid`productid`listprice`unitcost`supplier`status`attr1");

		vo.setHeaderArray(vo.getHeaderColumns().split("`"));
		vo.setDataArray(vo.getProperties().split("`"));

		return new ModelAndView(svc.buildExcelView(vo));
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

	/**
	 * Xml obj.
	 *
	 * @param vo the vo
	 * @return the model and view
	 */
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



	public ModelAndView resolveException(HttpServletRequest request, HttpServletResponse response, Object handler,Exception e)
	{
		if (e instanceof MaxUploadSizeExceededException) {
			System.out.println("익셉션 성공");
			request.setAttribute("result", "Maximum upload file size is up to 60MB");
		}
		return new ModelAndView();
	}

}
