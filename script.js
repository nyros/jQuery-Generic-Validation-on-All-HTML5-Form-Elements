

$(document).ready(function(){
						 
	$.validator.addMethod('regexp', function(value, element, param)
										{
   						 					return this.optional(element) || value.match(param);
										},
		'This value doesn\'t match the acceptable pattern.'
						
						 );

						   
		
	$('#contact-form').validate({
								
		
	   
	   rules: {
	      
		  isAlphaNumaric: {
	        	
				regexp: /^[0-9a-zA-Z]+$/,		/*AlphaNumaric validation*/
		        
				
		     	 },
				 
		isAlphabet: {
	        	
				regexp: /^[a-zA-Z]+$/,			/*Alphabet validation*/
		        
		     	
				},
		  
		  
	     		  
		  
		  isfileInput: {
				accept:"jpg|gif|png",			/*upload file type validation*/
				 
			  	},
		  
	      		  
	      isphone: {
		        
				regexp: /^(?:\+?91[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,		/*phone validation*/
		        
		    	  },
				  
				  
		isSelect:{
						required:true,			/*selectbox validation*/
						
					},
					
		isMultiSelect:{			
						min: 2,
						required:true,			/*Multi Selectbox validation*/
						
						},
					
		isChecked:{
					required:true,			/*Checkbox validation*/
						
					},
					
		isMultiCheck:{			
						min: 2,
						required:true,			/*Multi Checkbox validation*/
						
					},
			  
		    
			  
		    },
	    
	
		highlight: function(label) {
	    				$(label).closest('.control-group').addClass('error');
	    				},
	    
		success: function(label) {
			
	    			label
	    				.text('OK!').addClass('valid')
	    				.closest('.control-group').addClass('success');
				
	    			},
					
		submitHandler: function(form) {
   						document.getElementById('alert').style.visibility="visible";
						document.getElementById('bar').style.width="100%";
						alert("Your application is successfully submited")
						
						
											
 					}
	  });
	  
}); // end document.ready

  