$(document).ready(function(){

// CUSTOMIZE THESE VARIABLES TO SUIT YOUR LANGUAGES, STYLES, ETC	
	var languageClasses = ".english, .espanol"; // set the language classes you are using; separated by commas
	var defaultLanguage = "english"; // what language should be shown first?
	var languageSelector = "#languageSelect a"; // set the links that will be used to choose the language
	var currentLanguageClass = "currentLanguage"; // set the class for the language selector of the displayed langauge

// DO NOT MODIFY THE CODE BELOW HERE	
	var defaultLanguageClass = "."+defaultLanguage;
	var chosenLanguage = $.cookies.get('language');
	// hide all language elements first	
	$(languageClasses).hide();
	// If no language has been chosen
	if ($.cookies.get('language') === null){ 
		$(defaultLanguageClass).show(); // show the default language
		$(languageSelector+"#choose-"+defaultLanguage).addClass(currentLanguageClass); // add the currentLanguageClass to the for CSS styling
	} else { // otherwise
		$("."+chosenLanguage).show(); // show the language chosen
		$(languageSelector+"#choose-"+chosenLanguage).addClass(currentLanguageClass);
	}
	
	// clicking a language selector does fancy things
	$(languageSelector).click(function(){
		$(languageSelector).removeClass(currentLanguageClass);
		var language = $(this).attr("id").split("-")[1];
		$.cookies.del('language');
		$.cookies.set('language', language);
		var chosenLanguage = $.cookies.get('language');	
		$(languageClasses).not("."+chosenLanguage).hide();
		$("."+chosenLanguage).fadeIn();
		$(this).addClass(currentLanguageClass);
		return false;
	});
});