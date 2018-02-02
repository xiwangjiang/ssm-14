package com.service.impl;

import java.util.List;

import com.dao.AttachmentMapper;
import com.entity.po.Attachment;
import com.service.IAttachmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;


@Service("attachmentService")
public class AttachmentServiceImpl implements IAttachmentService {
	
	@Autowired
    AttachmentMapper attachmentMapper;
	
	public  void insertAttachment(Attachment t) throws Exception{
		attachmentMapper.insert(t);
	};
	
	public PageInfo<Attachment> findAttachment(int page, int rows) throws Exception{
		PageHelper.startPage(page, rows);
		List<Attachment> attachmentList = attachmentMapper.selectAll();
        PageInfo<Attachment> pageInfo = new PageInfo<Attachment>(attachmentList);
        return pageInfo;
		
	};
	
	public int countAttachment(Attachment t) throws Exception{
		return attachmentMapper.selectCount(t);
	};
	
}
