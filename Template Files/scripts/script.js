/*******************
VARIABLES
*******************/
var creativeId = "Banner"; //Use anything that uniquely identifies this creative
var creativeVersion = "1.0.18"; // Please, do not modify
var lastModified = "2017-08-02"; // Please, do not modify
var lastUploaded = "2017-08-02"; // Please, do not modify
var templateVersion = "2.0.24"; // Please, do not modify

var bannerDiv;
var adId, rnd, uid;

var clickBtn;

/*******************
INITIALIZATION
*******************/
function checkIfAdKitReady(event) {
	adkit.onReady(initializeCreative);
}

function initializeCreative(event) {
	try { //try/catch just in case localPreview.js is not included, this try and catch can be removed for production
		if (window.localPreview) {
			window.initializeLocalPreview();
		}
	}
	catch (e) {}

	//Workaround (from QB6573) for Async EB Load where Modernizr isn't properly initialized
	typeof Modernizr === "object" && (Modernizr.touch = Modernizr.touch || "ontouchstart" in window);
	window.registerInteraction = function() {};
	initializeGlobalVariables();
	handleSVData(event);
}

function initializeGlobalVariables() {
	adId = EB._adConfig.adId;
	rnd = EB._adConfig.rnd;
	uid = EB._adConfig.uid;

	bannerDiv = document.getElementById("banner");
	clickBtn = document.getElementById("clickBtn");

	clickBtn.addEventListener('click',function(){
		EB.clickthrough();
	});

}

function handleSVData(data) {
    var dataHtmlCode = adkit.getSVData("htmlCode");
    var dataImageUrl = adkit.getSVData("imgURL");
    var dataImageAdditionalAssets = adkit.getSVData("imgAdditionalAssets");
    var dataVarString = adkit.getSVData("Animation");

    switch(dataVarString){
    	case 'fadeIn':
    	console.log('fadeIn');
			bannerDiv.style.webkitTransition = 'opacity 1s linear';
    		bannerDiv.style.transition = 'opacity 1s linear';
    		bannerDiv.style.opacity = 1;
    		break;
    	case 'none':
    	default:
    		bannerDiv.style.opacity = 1;
    		break;

    }
    var dataVarHtml = adkit.getSVData("varHtml");
    document.getElementById("htmlVar").innerHTML = dataVarHtml;

    //var urlAdditional = EB.getAssetUrl('',dataImageAdditionalAssets);  // Esto nos daria la URL a una imagen que tengamos como additional asset en caso de que queramos utilizarla en el codigo.
    //document.querySelector("#imageAdditionalAssets img").src = urlAdditional;
}
 

window.addEventListener("load", checkIfAdKitReady);