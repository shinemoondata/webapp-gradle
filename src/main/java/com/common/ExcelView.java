package com.common;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.commons.beanutils.ConvertUtils;
import org.apache.commons.beanutils.Converter;
import org.apache.commons.beanutils.PropertyUtils;
import org.apache.commons.beanutils.converters.DateConverter;
import org.apache.commons.lang.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFFont;
import org.apache.poi.hssf.usermodel.HSSFRichTextString;
import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.ss.usermodel.*;
import org.springframework.util.Assert;
import org.springframework.web.servlet.view.document.AbstractXlsView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.net.URLEncoder;
import java.util.Collection;
import java.util.Date;
import java.util.Map;


/**
 * The type Excel view.
 */
public class ExcelView extends AbstractXlsView {

	/** 디폴트 날짜 패턴 */
	private static final String DEFAULT_DATE_PATTERN = "yyyy-MM-dd HH:mm:ss";

	/** 문건명칭 */
	private String filename;

	/** 표명칭 */
	private String sheetName;

	/** 속성 */
	private String[] properties;

	/** 표제 */
	private String[] titles;

	/** 셀넓이 */
	private Integer[] widths;

	/** 유형전환 */
	private Converter[] converters;

	/** 데이터부 */
	private Collection<?> data;

	/** 부가내용 */
	private String[] contents;

	static {
		DateConverter dateConverter = new DateConverter();
		dateConverter.setPattern(DEFAULT_DATE_PATTERN);
		ConvertUtils.register(dateConverter, Date.class);
	}

	/**
	 * Instantiates a new Excel view.
	 *
	 * @param filename the filename
	 * @param sheetName the sheet name
	 * @param properties the properties
	 * @param titles the titles
	 * @param widths the widths
	 * @param converters the converters
	 * @param data the data
	 * @param contents the contents
	 */
	public ExcelView(String filename, String sheetName, String[] properties, String[] titles, Integer[] widths, Converter[] converters, Collection<?> data, String[] contents) {
		this.filename = filename;
		this.sheetName = sheetName;
		this.properties = properties;
		this.titles = titles;
		this.widths = widths;
		this.converters = converters;
		this.data = data;
		this.contents = contents;
	}

	/**
	 * Instantiates a new Excel view.
	 *
	 * @param properties the properties
	 * @param titles the titles
	 * @param data the data
	 * @param contents the contents
	 */
	public ExcelView(String[] properties, String[] titles, Collection<?> data, String[] contents) {
		this.properties = properties;
		this.titles = titles;
		this.data = data;
		this.contents = contents;
	}

	/**
	 * Instantiates a new Excel view.
	 *
	 * @param properties the properties
	 * @param titles the titles
	 * @param data the data
	 */
	public ExcelView(String[] properties, String[] titles, Collection<?> data) {
		this.properties = properties;
		this.titles = titles;
		this.data = data;
	}

	/**
	 * Instantiates a new Excel view.
	 *
	 * @param filename the filename
	 * @param properties the properties
	 * @param titles the titles
	 * @param data the data
	 */
	public ExcelView(String filename, String[] properties, String[] titles, Collection<?> data) {
		this.filename = filename;
		this.properties = properties;
		this.titles = titles;
		this.data = data;
	}


	/**
	 * Instantiates a new Excel view.
	 *
	 * @param properties the properties
	 * @param data the data
	 */
	public ExcelView(String[] properties, Collection<?> data) {
		this.properties = properties;
		this.data = data;
	}

	/**
	 * 생성 Excel 부분
	 *
	 * @param model Map
	 * @param workbook Workbook
	 * @param request  HttpServletRequest
	 * @param response HttpServletResponse
	 *
	 */

	public void buildExcelDocument(Map<String, Object> model, Workbook workbook, HttpServletRequest request,HttpServletResponse  response) throws Exception {
		Assert.notEmpty(properties);
		Sheet sheet;
		if (StringUtils.isNotEmpty(sheetName)) {
			sheet = workbook.createSheet(sheetName);
		} else {
			sheet = workbook.createSheet();
		}
		int rowNumber = 0;
		if (titles != null && titles.length > 0) {
			Row header = sheet.createRow(rowNumber);
			header.setHeight((short) 400);
			for (int i = 0; i < properties.length; i++) {
				Cell cell = header.createCell(i);

				CellStyle cellStyle = workbook.createCellStyle();

				cellStyle.setFillForegroundColor(HSSFColor.LIGHT_CORNFLOWER_BLUE.index);
				cellStyle.setFillPattern(HSSFCellStyle.SOLID_FOREGROUND);
				cellStyle.setAlignment(HSSFCellStyle.ALIGN_CENTER);
				cellStyle.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
				Font font = workbook.createFont();
				font.setFontHeightInPoints((short) 11);
				font.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);
				cellStyle.setFont(font);
				cell.setCellStyle(cellStyle);

				/*if (i == 0) {
					HSSFPatriarch patriarch = sheet.createDrawingPatriarch();
					HSSFComment comment = patriarch.createComment(new HSSFClientAnchor(0, 0, 0, 0, (short) 1, 1, (short) 4, 4));
					comment.setString(new HSSFRichTextString("Powered By Hengtian"));
					cell.setCellComment(comment);
				}
				*/
				if (titles.length > i && titles[i] != null) {
					cell.setCellValue(new HSSFRichTextString(titles[i]));
				} else {
					cell.setCellValue(new HSSFRichTextString(properties[i]));
				}
				if (widths != null && widths.length > i && widths[i] != null) {
					sheet.setColumnWidth(i, widths[i]);
				} else {
					sheet.autoSizeColumn(i);
					sheet.setColumnWidth(i, (sheet.getColumnWidth(i)) + 2000);  // 윗줄만으로는 컬럼의 width 가 부족하여 더 늘려야 함.
				}
			}
			rowNumber++;
		}
		if (data != null) {
			for (Object item : data) {
				Row row = sheet.createRow(rowNumber);
				for (int i = 0; i < properties.length; i++) {
					Cell cell = row.createCell(i);
					if (converters != null && converters.length > i && converters[i] != null) {
						Class<?> clazz = PropertyUtils.getPropertyType(item, properties[i]);
						ConvertUtils.register(converters[i], clazz);
						cell.setCellValue(new HSSFRichTextString(BeanUtils.getProperty(item, properties[i])));
						ConvertUtils.deregister(clazz);
						if (clazz.equals(Date.class)) {
							DateConverter dateConverter = new DateConverter();
							dateConverter.setPattern(DEFAULT_DATE_PATTERN);
							ConvertUtils.register(dateConverter, Date.class);
						}
					} else {
						cell.setCellValue(new HSSFRichTextString(BeanUtils.getProperty(item, properties[i])));
					}
					if (rowNumber == 0 || rowNumber == 1) {
						if (widths != null && widths.length > i && widths[i] != null) {
							sheet.setColumnWidth(i, widths[i]);
						} else {
							sheet.autoSizeColumn(i);
							sheet.setColumnWidth(i, (sheet.getColumnWidth(i)) + 2000);  // 윗줄만으로는 컬럼의 width 가 부족하여 더 늘려야 함.
						}
					}
				}
				rowNumber++;
			}
		}
		if (contents != null && contents.length > 0) {
			rowNumber++;
			for (String content : contents) {
				Row row = sheet.createRow(rowNumber);
				Cell cell = row.createCell(0);
				cell.setCellValue(new HSSFRichTextString(content));
				rowNumber++;
			}
		}
		response.setContentType("application/force-download");
		if (StringUtils.isNotEmpty(filename)) {
			if(request.getHeader( "USER-AGENT" ).toLowerCase().indexOf( "firefox")>0){
				response.setHeader("Content-disposition", "attachment; filename=" + new String(filename.getBytes("UTF-8"),"ISO-8859-1"));
			}else{
				response.setHeader("Content-disposition", "attachment; filename=" + URLEncoder.encode(filename, "UTF-8"));
			}

		} else {
			response.setHeader("Content-disposition", "attachment");
		}
	}

	/**
	 * Gets file name.
	 *
	 * @return the file name
	 */
	public String getFileName() {
		return filename;
	}

	/**
	 * Sets file name.
	 *
	 * @param filename the filename
	 */
	public void setFileName(String filename) {
		this.filename = filename;
	}

	/**
	 * Gets sheet name.
	 *
	 * @return the sheet name
	 */
	public String getSheetName() {
		return sheetName;
	}

	/**
	 * Sets sheet name.
	 *
	 * @param sheetName the sheet name
	 */
	public void setSheetName(String sheetName) {
		this.sheetName = sheetName;
	}

	/**
	 * Get properties.
	 *
	 * @return the string [ ]
	 */
	public String[] getProperties() {
		return properties;
	}

	/**
	 * Sets properties.
	 *
	 * @param properties the properties
	 */
	public void setProperties(String[] properties) {
		this.properties = properties;
	}

	/**
	 * Get titles.
	 *
	 * @return the string [ ]
	 */
	public String[] getTitles() {
		return titles;
	}

	/**
	 * Sets titles.
	 *
	 * @param titles the titles
	 */
	public void setTitles(String[] titles) {
		this.titles = titles;
	}

	/**
	 * Get widths.
	 *
	 * @return the integer [ ]
	 */
	public Integer[] getWidths() {
		return widths;
	}

	/**
	 * Sets widths.
	 *
	 * @param widths the widths
	 */
	public void setWidths(Integer[] widths) {
		this.widths = widths;
	}

	/**
	 * Get converters.
	 *
	 * @return the converter [ ]
	 */
	public Converter[] getConverters() {
		return converters;
	}

	/**
	 * Sets converters.
	 *
	 * @param converters the converters
	 */
	public void setConverters(Converter[] converters) {
		this.converters = converters;
	}

	/**
	 * Gets data.
	 *
	 * @return the data
	 */
	public Collection<?> getData() {
		return data;
	}

	/**
	 * Sets data.
	 *
	 * @param data the data
	 */
	public void setData(Collection<?> data) {
		this.data = data;
	}

	/**
	 * Get contents.
	 *
	 * @return the string [ ]
	 */
	public String[] getContents() {
		return contents;
	}

	/**
	 * Sets contents.
	 *
	 * @param contents the contents
	 */
	public void setContents(String[] contents) {
		this.contents = contents;
	}

}

