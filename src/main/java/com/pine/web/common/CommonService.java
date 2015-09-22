package com.pine.web.common;

import com.common.ExcelView;
import com.pine.web.domain.CommonVO;
import com.pine.web.persistence.CommonMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartException;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;


/**
 * The type Common service.
 */

@Service
public class CommonService {

	private static final Logger logger = Logger.getLogger(CommonService.class);

	@Autowired
	private CommonMapper mapper;


	/**
	 * Select item list.
	 *
	 * @param to the to
	 * @return the list
	 */
	public List selectItemList(CommonVO to)  {
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

	/**
	 * Upload string.
	 *
	 * @param multi the multi
	 * @return the string
	 * @throws MultipartException the multipart exception
	 */
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

	/**
	 * Download void.
	 *
	 * @param response the response
	 * @throws ServletException the servlet exception
	 * @throws IOException the iO exception
	 */
	public void download( HttpServletResponse response) throws ServletException, IOException
	{
		// Set the content type based to zip
		response.setContentType("Content-type: text/zip");
		response.setHeader("Content-Disposition", "attachment; filename=mytest.zip");

		// List of files to be downloaded
		List<File> files = new ArrayList();
		files.add(new File("d:/temp/IBSheet1.chm"));
		files.add(new File("d:/temp/IBSheet2.chm"));
		files.add(new File("d:/temp/IBSheet3.chm"));

		ServletOutputStream out = response.getOutputStream();
		ZipOutputStream zos = new ZipOutputStream(new BufferedOutputStream(out));

		for (File file:files)
		{
			if(logger.isDebugEnabled()){
				logger.debug("Adding file " + file.getName());
			}
			zos.putNextEntry(new ZipEntry(file.getName()));

			// Get the file
			FileInputStream fis;
			try {
				fis = new FileInputStream(file);

			} catch (FileNotFoundException fnfe) {
				// If the file does not exists, write an error entry instead of file contents
				zos.write(("ERROR: Could not find file " + file.getName()).getBytes());
				zos.closeEntry();

				if(logger.isDebugEnabled()){
					logger.debug("Could not find file "+ file.getAbsolutePath());
				}
				continue;
			}

			BufferedInputStream fif = new BufferedInputStream(fis);

			// Write the contents of the file
			int data;
			while ((data = fif.read()) != -1) {
				zos.write(data);
			}
			fif.close();
			fis.close();
			zos.closeEntry();
			if(logger.isDebugEnabled()){
				logger.debug("Finished adding file " + file.getName());
			}
		}

		zos.close();
	}


	/**
	 * Build excel view.
	 *
	 * @param to the to
	 * @return the excel view
	 */
	public ExcelView buildExcelView(CommonVO to) {

		String filename = new SimpleDateFormat("yyyyMMdd").format(new Date()) + ".xls";

		List list = mapper.selectItemList(to);

		ExcelView view = new ExcelView(filename, to.getDataArray(),to.getHeaderArray(), list );

		return view;
	}


	public String xmlSendCharsetTest(String urlStr,String xmlDataStr){
		// xml 형식 전송시에 utf-8 로 전송하는것과 리턴값 utf-8 로 받기
		String rtn="";
		try {
			URL url = new URL(urlStr);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();

			conn.setRequestMethod("POST");				// PUT 또는 POST으로 전송
			conn.setRequestProperty("Content-Type", "application/xml; charset=utf-8");
			conn.setRequestProperty("Pragma", "no-cache");

			conn.setDoOutput(true);
			OutputStream os = conn.getOutputStream();
			os.write(xmlDataStr.getBytes("utf-8"));				// 데이터 전송
			os.flush();
			os.close();

			BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream() ,"utf-8") );
			String resData = "";
			String chunked = "";

			while((chunked = reader.readLine()) != null) {
				resData += chunked;
			}
			reader.close();

			// utf-8 받은 xml의 한글 깨짐 방지와 요소 가져오기
			DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
			factory.setIgnoringElementContentWhitespace(true);
			factory.setValidating(false);
			factory.setNamespaceAware(true);
			DocumentBuilder docBuilder = factory.newDocumentBuilder();//xml parsing
			Document doc = docBuilder.parse(new InputSource(new StringReader(resData.toString()  )  ));

			rtn = getTextValue(doc.getDocumentElement().getElementsByTagName("RESULT"));

		} catch (Exception e) {
			e.printStackTrace();
		}
		return rtn;
	}
	public String getTextValue(NodeList nodeList) {
		String rtn = "";
		for(int i=0; i < nodeList.getLength(); i++){
			Element row = (Element)nodeList.item(i);
			rtn = row.getTextContent();

		}
		return rtn;
	}


}
