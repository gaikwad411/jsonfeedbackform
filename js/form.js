
     	$(document).ready(function(){
          	
          	// Reset all inputs
          	function resetForm()
          	{
		  	$('#name').val('');
	     		$('#email').val('');
	  		$('#comment').val('');
	  	}	
          	
          	
          	
     		$('#comment_form').submit(function(){
     		
     			// On Comment Form Submit
     			
     			// Set error message to null
     			// Fresh submit
     			var errmsg='';
     			$('.error_msg').remove();
     			$('.succses_msg').remove();
     			
     			
     			// Prepare Data to Submit
     			var name=$('#name').val();
     			var email=$('#email').val();
     			var comment=$('#comment').val();
     			
     			// Array to be sent with request
     			var form_data={'name':name,'email':email,'comment':comment};
     			
     			// Make request
     			var ajax={};
     			
     			ajax.type='POST';// Request Method
     			ajax.url='form_process.php'; // Request Url
     			ajax.data=form_data;// form data
     			ajax.dataType='json';// Hey! we want json response
     			
     			
     			// set request functions
     			
     			// on success
     			ajax.success=function(result)
     			{
     				// check request status
     				if(result.request_status=='0')
     				{
     					// Form is not validated
     					// Show form errors
     					// result.issues
     					// Check if there are any issues
     					
     					if(result.issues!=undefined)
     					{
     						// There are some issues
     						
     						for(field in result.issues)
     						{
     							$('#'+field).after('<div class="error_msg">'+result.issues[field]+'<div>');
     						}
     						
     						$('.error_msg').slideDown();
     					}
     					
     				}else if(result.request_status=='1')
     				{
     					
     					// Form is validate
     					$('.fieldset').prepend('<div class="succses_msg">Thanks for your time.<div>');
     					$('.succses_msg').animate({opacity:1},500).animate({opacity:0.5},500).animate({opacity:1},500).delay(5000).slideUp(200,function(){resetForm();});
     					
     					
     				}else
     				{
     					// Wait..
     				}
     			}
     			
     			// on error
     			ajax.error=function(error)
     			{
     				//alert(error.error);
     				//console.log("Error");
     				//console.log(error);
     				$('#top_message').html('Sorry. Could not connect to server at this time.');
     				$('#top_message').slideDown();
     			}     			
     			
     			// make ajax request
     			$.ajax(ajax);
     			
     			
     			
     			// Do not submit this form from here.
     			return false;
     			
     		
     		}); // End of Comment Form Submit
     	
     		
     	
     	}); // End of Document.Ready
        
