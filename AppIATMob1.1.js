define(['pipAPI', 'https://cdn.jsdelivr.net/gh/boliangzhu/iat@main/BaseIATMob1.1.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Chinese American', //Will appear in the data.
			title : {
				media : {word : 'Chinese American'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'chi1.jpg'}, 
    			{image : 'chi2.jpg'}, 
    			{image : 'chi3.jpg'}, 
    			{image : 'chi4.jpg'}, 
    			{image : 'chi5.jpg'}, 
    			{image : 'chi6.jpg'},
          {image : 'chi7.jpg'},
          {image : 'chi8.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'European American', //Will appear in the data.
			title : {
				media : {word : 'European American'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'euro1.jpg'}, 
    			{image : 'euro2.jpg'}, 
    			{image : 'euro3.jpg'}, 
    			{image : 'euro4.jpg'}, 
    			{image : 'euro5.jpg'}, 
    			{image : 'euro6.jpg'},
        	{image : 'euro7.jpg'},
        	{image : 'euro8.jpg'},
      ], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://boliangzhu.github.io/iat/'
		} 
	});
});
