function(instance, properties, context) {
    ///

    // modificiar a forma como será acionado


    ///
    let elementId = properties.element_id;
    //element colors
    let bgColor = properties.bg_color;
    let borderColor = properties.border_color;
    let fontColor = properties.font_color;
    let hoverTextColor = properties.hover_color_text;
    let hoverGroupColor = properties.hover_group_color;
    
    //conditional
    let changeBackGround = properties.enable_background_color;
    let changeBorder = properties.enable_border_color;
    let changeFontColor = properties.enable_font_color;
	let enableTextHover = properties.enable_text_hover;
    let enableGroupHover = properties.enable_group_hover;
    let applyTo = properties.apply_to;
   
    console.log(enableGroupHover);
		document.querySelectorAll(`#${elementId}`).forEach((item)=>{  
        	if(applyTo == 'Element' || applyTo == 'Both'){
                if(changeBackGround){
                    item.style.background = bgColor;  
                };

                if(changeBorder){
                    item.style.borderColor= borderColor;
                };

                if(changeFontColor){
                    item.style.color = fontColor; 
                    item.querySelectorAll(`#${elementId} > .bubble-element.Text`).forEach((subItem)=>{
                        subItem.style.color = fontColor;            
                    });       
                };

                
                if(!enableTextHover || !enableGroupHover){
                    item.replaceWith(item.cloneNode(true));
   					
                    item.querySelectorAll(`#${elementId} > .bubble-element.Text`).forEach((subItem)=>{

                       subItem.replaceWith(subItem.cloneNode(true));
                    });
                    
                    
                }
                
                if(enableTextHover){
                    item.addEventListener('mouseover',()=>{
                        item.style.color = hoverTextColor;               
                    }); 
                    item.addEventListener('mouseout',()=>{
                        item.style.color = fontColor;                    	
                    });

                    item.querySelectorAll(`#${elementId} > .bubble-element.Text`).forEach((subItem)=>{

                        subItem.addEventListener('mouseover',()=>{
                            subItem.style.color = hoverTextColor;               
                        }); 
                        subItem.addEventListener('mouseout',()=>{
                            subItem.style.color = fontColor;                    	
                        });
                    });
                };

                if(enableGroupHover){
                    item.addEventListener('mouseover',()=>{
                        item.style.background = hoverGroupColor;               
                    }); 
                    item.addEventListener('mouseout',()=>{
                        item.style.background = bgColor;                    	
                    });


                };
        	};
        
        if(applyTo == 'Child' || applyTo == 'Both'){
            
        item.querySelectorAll(`#${elementId} > .bubble-element.Group`).forEach((subItem)=>{
            
                if(changeBackGround){
                    subItem.style.background = bgColor;              
                                       
                };

                if(changeBorder){
                     subItem.style.borderColor= borderColor;              
                                       
                };

                if(changeFontColor){
                    subItem.style.color = fontColor; 
                    subItem.querySelectorAll(`.bubble-element.Text`).forEach((SsubItem)=>{
                        SsubItem.style.color = fontColor;            
                    });       
                };

                if(enableTextHover){
                    
                    subItem.addEventListener('mouseover',()=>{
                            subItem.style.color = hoverTextColor;               
                        }); 
                        subItem.addEventListener('mouseout',()=>{
                            subItem.style.color = fontColor;                    	
                        });
                    
            
                    subItem.querySelectorAll(`.bubble-element.Text`).forEach((SsubItem)=>{

                        SsubItem.addEventListener('mouseover',()=>{
                            SsubItem.style.color = hoverTextColor;               
                        }); 
                        SsubItem.addEventListener('mouseout',()=>{
                            SsubItem.style.color = fontColor;                    	
                        });
                    });
                }else{
                	  subItem.removeEventListener('mouseover',()=>{
                            subItem.style.color = hoverTextColor;               
                        }); 
                        subItem.removeEventListener('mouseout',()=>{
                            subItem.style.color = fontColor;                    	
                        });
                    
            
                    subItem.querySelectorAll(`.bubble-element.Text`).forEach((SsubItem)=>{

                        SsubItem.removeEventListener('mouseover',()=>{
                            SsubItem.style.color = hoverTextColor;               
                        }); 
                        SsubItem.removeEventListener('mouseout',()=>{
                            SsubItem.style.color = fontColor;                    	
                        });
                    });
                
                
                };   
            
           		if(enableGroupHover){
                    
                    	subItem.addEventListener('mouseover',()=>{
                            subItem.style.background = hoverGroupColor;               
                        }); 
                        subItem.addEventListener('mouseout',()=>{
                            subItem.style.background = bgColor;                    	
                        });
                    
            
                    subItem.querySelectorAll(`.bubble-element.Group`).forEach((SsubItem)=>{

                        SsubItem.addEventListener('mouseover',()=>{
                            SsubItem.style.background = hoverGroupColor;               
                        }); 
                        SsubItem.addEventListener('mouseout',()=>{
                            SsubItem.style.background = bgColor;                    	
                        });
                    });
                }else{
                    
                    subItem.removeEventListener('mouseover',()=>{
                            subItem.style.background = hoverGroupColor;               
                        }); 
                        subItem.removeEventListener('mouseout',()=>{
                            subItem.style.background = bgColor;                    	
                        });
                    
            
                    subItem.querySelectorAll(`.bubble-element.Group`).forEach((SsubItem)=>{

                        SsubItem.removeEventListener('mouseover',()=>{
                            SsubItem.style.background = hoverGroupColor;               
                        }); 
                        SsubItem.removeEventListener('mouseout',()=>{
                            SsubItem.style.background = bgColor;                    	
                        });
                    });
                    
                };  
        	});
        };
    });
    
 
}