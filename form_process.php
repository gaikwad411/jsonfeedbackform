<?php

	// Set Defaults
	
	$name='';
	$email='';
	$comment='';
	
	// Set error array
	$error=array();
	
	$ajax_result=array('request_status'=>'0','issues'=>array('Request is not processed yet!.'));
	
	
	// Check Post Data
	
	// name 
	if(isset($_POST['name'])&&!(empty($_POST['name'])))
	{
		$name=$_POST['name'];
	}else
	{
		$error['name']='Name is required.';
	}
	
	// email
	if(isset($_POST['email'])&&!(empty($_POST['email'])))
	{
		$email=$_POST['email'];
		
		$email_arr=explode('@',$email);
		if(!isset($email_arr[1])||(empty($email_arr[1])))
		{
			$error['email']='Invalid Email.';	
		}else
		{
			$email_arr=explode('.',$email_arr[1]);
			if(!isset($email_arr[1])||(empty($email_arr[1])))
			{
			    $error['email']='Invalid Email.';
			}
		}
		
	}else
	{
		$error['email']='Email is required.';
	}
	
	// comment 
	if(isset($_POST['comment'])&&!(empty($_POST['comment'])))
	{
		$comment=$_POST['comment'];
	}else
	{
		$error['comment']='Comment is required.';
	}
	

	
	
	// set result
	if(empty($error))
	{
		// Validation succeeded
		// Set response
		$ajax_result=array('request_status'=>'1','issues'=>array());
		
	}else
	{
		// Validation failed
		// Set response
		$ajax_result=array('request_status'=>'0','issues'=>$error);
	}
	
	
	// Json Encode the output
	$ajax_result=json_encode($ajax_result);
	
	header('Content-type: text/json');
	echo $ajax_result;
	
