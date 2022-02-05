(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"GAME_atlas_1", frames: [[0,0,1924,1259]]},
		{name:"GAME_atlas_2", frames: [[0,0,1926,1070]]},
		{name:"GAME_atlas_3", frames: [[0,0,1923,1068]]},
		{name:"GAME_atlas_4", frames: [[0,1083,862,531],[864,1083,862,531],[0,0,1282,1081]]},
		{name:"GAME_atlas_5", frames: [[0,1380,301,94],[730,1406,301,94],[0,0,862,531],[864,0,862,531],[0,533,862,527],[1033,1406,301,94],[1051,1502,155,83],[1597,1494,147,145],[1728,417,310,113],[730,1502,141,136],[0,1062,366,316],[1309,1513,145,82],[873,1584,145,82],[1556,533,464,574],[1960,190,32,32],[1020,1587,145,82],[1336,1406,259,105],[873,1502,176,80],[864,533,690,570],[1309,1597,108,107],[1456,1513,105,112],[0,1476,153,172],[1912,1109,96,164],[1746,1494,147,145],[155,1476,186,134],[1728,0,230,234],[1728,236,223,179],[1720,1109,190,190],[549,1315,179,190],[1031,1214,189,190],[1413,1214,188,187],[1222,1214,189,190],[1603,1301,180,191],[1785,1301,179,191],[1960,121,73,67],[1966,1400,72,67],[1057,1109,661,103],[343,1508,96,126],[651,1507,52,123],[1966,1275,82,123],[1953,236,95,127],[549,1507,100,125],[155,1612,90,125],[1208,1502,99,128],[247,1612,90,122],[441,1508,93,127],[1960,0,86,119],[368,1105,687,103],[1895,1494,147,145],[368,1315,179,191],[1603,1214,73,67],[368,1210,661,103],[1953,365,48,48],[730,1315,249,82],[0,1739,1924,1],[2003,365,45,45]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_8 = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["GAME_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["GAME_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bankofariver = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.BlueFrogi = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.brownborad = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.butterfly_open = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Cards = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.check_active = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.check_notActive = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.clock = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.ComboBox = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib._continue = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.continue_btn = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.EndAnimitonBackground = function() {
	this.initialize(img.EndAnimitonBackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2050,1139);


(lib.endbuttuns = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.finalborad = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.frogiHappy = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.FrogiSideLook = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Game_Name_Subject = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.GameBackground = function() {
	this.initialize(ss["GAME_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.gm1 = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.GreenFrogi = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Homescreenbackground = function() {
	this.initialize(ss["GAME_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Howtoplayborad = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.img_temp_1 = function() {
	this.initialize(img.img_temp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4928,2772);


(lib.img_temp_2 = function() {
	this.initialize(img.img_temp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4000,5000);


(lib.img_temp_3 = function() {
	this.initialize(img.img_temp_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6016,4016);


(lib.img_temp_4 = function() {
	this.initialize(img.img_temp_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5905,4970);


(lib.jump = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.jump2 = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.jumpBlue = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.jumpeGreen = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.jumperGreen = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.jumpingfrogi = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.jumpPink = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.looksideBlue = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.looksidePink = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.music = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.mute = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.namegameH1 = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.num0 = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.num1 = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.num2 = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.num3 = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.num4 = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.num5 = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.num6 = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.num7 = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.num8 = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.num9 = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.OpenanimitonBackground = function() {
	this.initialize(ss["GAME_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.PauseH1 = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.PinkFrogi = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.plant = function() {
	this.initialize(ss["GAME_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.sadfrogi = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.stopbutton = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.TimeoverH1png = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.Viconpng = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.wave = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.whiteline = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.Xicon = function() {
	this.initialize(ss["GAME_atlas_5"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_CSS = function(options) {
	this.initialize();
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.an_ComboBox = function(options) {
	this.initialize();
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.raft_alone = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,431,265.5);


(lib.raft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.plant();
	this.instance.setTransform(142.1,40.1,0.1108,0.1489,0,0,180);

	this.instance_1 = new lib.plant();
	this.instance_1.setTransform(401,20,0.1316,0.1489);

	this.instance_2 = new lib.CachedBmp_2();
	this.instance_2.setTransform(56.4,124.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,20,569.7,368.2);


(lib.GEZA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("בחרו ברפסודה עם התשובה הנכונה באמצעות העכבר", "normal 700 14px 'Heebo'");
	this.text.textAlign = "right";
	this.text.lineHeight = 21;
	this.text.lineWidth = 465;
	this.text.parent = this;
	this.text.setTransform(826.05,18.3);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7D3F16").ss(3,0,1).p("EAmFgCmIAAFNMhMJAAAIAAlNg");
	this.shape.setTransform(587.75,25.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#7D3F16").ss(5,1,1).p("EhCsgFIMCFZAAAIAAKSMiFZAAAg");
	this.shape_1.setTransform(426.875,91.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#7D3F16").ss(5,0,1).p("EBAVAEeIAAo7EhAUAEeIAAo7");
	this.shape_2.setTransform(427.85,28.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EhCsAJCIAAqSMCFZAAAIAAKSgAs7jyIAAlPMBMJAAAIAAFPg");
	this.shape_3.setTransform(426.875,66.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,858.8,129.8);


(lib.btn_continue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.continue_btn();
	this.instance.setTransform(0,0,0.7027,0.7142);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_continue, new cjs.Rectangle(0,0,182,75), null);


(lib.waves = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.wave();
	this.instance.setTransform(0,245.8,1.6614,1.0098,0,180,0);

	this.instance_1 = new lib.wave();
	this.instance_1.setTransform(15,0,1.5353,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.waves, new cjs.Rectangle(0,0,413.7,245.8), null);


(lib.butterfly_open_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.butterfly_open();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.butterfly_open_1, new cjs.Rectangle(0,0,141,136), null);


(lib.questionNumber = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,0,0,0)").s().p("AwBLwIAA3fMAgDAAAIAAXfg");
	this.shape.setTransform(102.6,75.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.questionNumber, new cjs.Rectangle(0,0,205.2,150.4), null);


(lib.mc_raft_MAIN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(12.05,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_raft_MAIN, new cjs.Rectangle(12.1,-0.5,431,265.5), null);


(lib.raft_alone_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.raft_alone_1, new cjs.Rectangle(-0.5,-0.5,431,265.5), null);


(lib.raft_alone_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.raft_alone_2, new cjs.Rectangle(-0.5,-0.5,431,265.5), null);


(lib.MAINSCREEN_IslandB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bankofariver();
	this.instance.setTransform(155,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MAINSCREEN_IslandB, new cjs.Rectangle(0,0,155,83), null);


(lib.MAINSCREEN_IslandA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bankofariver();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MAINSCREEN_IslandA, new cjs.Rectangle(0,0,155,83), null);


(lib.clock_animiton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.clock();
	this.instance.setTransform(-144,0,0.1008,0.1007);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clock_animiton, new cjs.Rectangle(-144,0,46.8,57.8), null);


(lib.brown_borad = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Game_Name_Subject();
	this.instance.setTransform(0,0,0.9752,0.9802);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.brown_borad, new cjs.Rectangle(0,0,149.2,168.6), null);


(lib.ICON_X = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Xicon();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICON_X, new cjs.Rectangle(0,0,45,45), null);


(lib.ICON_V = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Viconpng();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICON_V, new cjs.Rectangle(0,0,48,48), null);


(lib.Game_boradkey = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("בחרו בתשובה הנכונה באמצעות העכבר", "bold 14px 'Heebo'");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 124;
	this.text.parent = this;
	this.text.setTransform(97.75,31.9);

	this.instance = new lib.Howtoplayborad();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Game_boradkey, new cjs.Rectangle(0,0,186,134), null);


(lib.startButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("התחל", "bold 40px 'Heebo ExtraBold'");
	this.text.lineHeight = 61;
	this.text.lineWidth = 105;
	this.text.alpha = 0.61568627;
	this.text.parent = this;
	this.text.setTransform(87.6,26);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(6,1,1).p("Aw8o0MAh5AAAQDqAACmCmQClClAADpQAADqilCmQimCljqAAMgh5AAAQjqAAimilQilimAAjqQAAjpClilQCmimDqAAg");
	this.shape.setTransform(136.5911,45.5954,0.828,0.8067);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(217,219,199,0.616)").s().p("Aw8I1QjqAAimilQilimAAjqQAAjpClimQCmilDqAAMAh5AAAQDqAAClClQCmCmAADpQAADqimCmQilCljqAAg");
	this.shape_1.setTransform(136.5911,45.5954,0.828,0.8067);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(194,248,1,0.616)").s().p("Aw8I1QjqAAimilQilimAAjqQAAjpClimQCmilDqAAMAh5AAAQDqAAClClQCmCmAADpQAADqimCmQilCljqAAg");
	this.shape_2.setTransform(136.5911,45.5954,0.828,0.8067);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,279.2,97.2);


(lib.sad_frogi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sadfrogi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sad_frogi, new cjs.Rectangle(0,0,179,191), null);


(lib.jumperfrogi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.jumpingfrogi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jumperfrogi, new cjs.Rectangle(0,0,188,187), null);


(lib.jumper = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.jump();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jumper, new cjs.Rectangle(0,0,230,234), null);


(lib.frogiwin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.jump2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frogiwin, new cjs.Rectangle(0,0,223,179), null);


(lib.FrogiQuestionBoxY = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.FrogiSideLook();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FrogiQuestionBoxY, new cjs.Rectangle(0,0,105,112), null);


(lib.FrogiQuestionBoxR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FrogiQuestionBoxR, new cjs.Rectangle(0,0,0,0), null);


(lib.HappyFrogi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.frogiHappy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HappyFrogi, new cjs.Rectangle(0,0,108,107), null);


(lib.frogiEnd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.FrogiSideLook();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frogiEnd, new cjs.Rectangle(0,0,105,112), null);


(lib.frgiraft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.FrogiSideLook();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frgiraft, new cjs.Rectangle(0,0,105,112), null);


(lib.lookside_pink = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.looksidePink();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lookside_pink, new cjs.Rectangle(0,0,179,191), null);


(lib.lookside_Green = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.jumpeGreen();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lookside_Green, new cjs.Rectangle(0,0,179,190), null);


(lib.lookside_Blue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.looksideBlue();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lookside_Blue, new cjs.Rectangle(0,0,180,191), null);


(lib.line1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9E5729").ss(6,1,1).p("AiNBOIEbib");
	this.shape.setTransform(14.15,7.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.line1, new cjs.Rectangle(-3,-3,34.3,21.6), null);


(lib.jumperPink = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.jumpPink();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jumperPink, new cjs.Rectangle(0,0,189,190), null);


(lib.jumperGreen_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.jumperGreen();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jumperGreen_1, new cjs.Rectangle(0,0,189,190), null);


(lib.jumperBlue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.jumpBlue();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jumperBlue, new cjs.Rectangle(0,0,190,190), null);


(lib.GreenHappyFrogi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.GreenFrogi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GreenHappyFrogi, new cjs.Rectangle(0,0,147,145), null);


(lib.ENDSCREEN_PinkFrog = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.PinkFrogi();
	this.instance.setTransform(0,0,0.6775,0.6799);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ENDSCREEN_PinkFrog, new cjs.Rectangle(0,0,99.6,98.6), null);


(lib.ENDSCREEN_LOG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.brownborad();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ENDSCREEN_LOG, new cjs.Rectangle(0,0,310,113), null);


(lib.ENDSCREEN_BOARD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.finalborad();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ENDSCREEN_BOARD, new cjs.Rectangle(0,0,690,570), null);


(lib.ENDSCREEN_BlueFrog = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BlueFrogi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ENDSCREEN_BlueFrog, new cjs.Rectangle(0,0,147,145), null);


(lib.green_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("EgiugG8MBFdAAAQBbAABOAbQAQAGAPAGQBLAhA+A6QCMCCAAC4QAAC4iMCCQhGBDhVAgQgHADgGACQhOAbhbAAMhFdAAAQhiAAhUggQhVgghHhDQiLiCAAi4QAAi4CLiCQA/g6BLghQBbgnBtAAg");
	this.shape.setTransform(97.35,-150.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D5E06A").s().p("EgiuAG9QhiAAhUggQhVgghGhCQiMiCAAi5QAAi3CMiDQA+g6BLggQBbgoBtAAMBFdAAAQBbAABOAbIAfANQBLAgA/A6QCLCDAAC3QAAC5iLCCQhHBChVAgIgNAFQhOAbhbAAg");
	this.shape_1.setTransform(97.35,-150.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.green_btn, new cjs.Rectangle(-174.6,-196.6,544,93), null);


(lib.end_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.endbuttuns();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.end_btn, new cjs.Rectangle(0,0,176,80), null);


(lib.stopbutton_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.stopbutton();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stopbutton_1, new cjs.Rectangle(0,0,73,67), null);


(lib.magnify = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAkAdQgbAWgiAAQgpAAgcgcQgXgXgEgcQgCgJAAgIQAAgpAdgcQAcgdApAAQAaAAAXAOQAKAGAJAJQAcAcAAApQAAAmgYAaQgCACgCACQgEADgDADgAB8CQIhYhz");
	this.shape.setTransform(12.375,14.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhEBFQgXgXgEgdIgCgRQABgoAcgcQAcgcAogBQAbAAAXAOQAKAGAJAJQAdAcAAAoQAAAmgZAbIgEAEIgHAGQgbAXgjAAQgoAAgcgdg");
	this.shape_1.setTransform(9.75,9.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.magnify, new cjs.Rectangle(-1,-1,26.8,30.8), null);


(lib.btn_continue_new = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._continue();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_continue_new, new cjs.Rectangle(0,0,145,82), null);


(lib.btn_check_active = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.check_active();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_check_active, new cjs.Rectangle(0,0,145,82), null);


(lib.main_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.instance = new lib.check_notActive();

	this.instance_1 = new lib.check_active();

	this.instance_2 = new lib._continue();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145,82);


(lib.num_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_9, new cjs.Rectangle(0,0,86,119), null);


(lib.num_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num8();
	this.instance.setTransform(0,0,0.9247,0.937);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_8, new cjs.Rectangle(0,0,86,119), null);


(lib.num_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num7();
	this.instance.setTransform(0,0,0.9556,0.9754);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_7, new cjs.Rectangle(0,0,86,119), null);


(lib.num_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num6();
	this.instance.setTransform(0,0,0.8687,0.9297);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_6, new cjs.Rectangle(0,0,86,119), null);


(lib.num_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num5();
	this.instance.setTransform(0,0,0.9556,0.952);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_5, new cjs.Rectangle(0,0,86,119), null);


(lib.num_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num4();
	this.instance.setTransform(0,0,0.86,0.952);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_4, new cjs.Rectangle(0,0,86,119), null);


(lib.num_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num3();
	this.instance.setTransform(0,0,0.9053,0.937);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_3, new cjs.Rectangle(0,0,86,119), null);


(lib.num_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num2();
	this.instance.setTransform(0,0,1.0488,0.9675);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_2, new cjs.Rectangle(0,0,86,119), null);


(lib.num_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_1, new cjs.Rectangle(0,0,52,123), null);


(lib.num_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num0();
	this.instance.setTransform(0,0,0.8958,0.9444);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_0, new cjs.Rectangle(0,0,86,119), null);


(lib.mg_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.gm1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mg_1, new cjs.Rectangle(0,0,96,164), null);


(lib.img_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_temp_4();
	this.instance.setTransform(0,0,0.0586,0.0366);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_4, new cjs.Rectangle(0,0,346,181.8), null);


(lib.img_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_temp_3();
	this.instance.setTransform(0,0,0.0424,0.0339);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_3, new cjs.Rectangle(0,0,255.1,136.1), null);


(lib.img_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_temp_2();
	this.instance.setTransform(0,0,0.0638,0.0272);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_2, new cjs.Rectangle(0,0,255.1,136.1), null);


(lib.img_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_temp_1();
	this.instance.setTransform(0,0,0.0518,0.0491);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_1, new cjs.Rectangle(0,0,255.1,136.1), null);


(lib.Cards_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Cards();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cards_1, new cjs.Rectangle(0,0,366,316), null);


(lib.forCombo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.myCSS = new lib.an_CSS({'id': 'myCSS', 'href':'assets/cssCombo.css'});

	this.myCSS.name = "myCSS";
	this.myCSS.setTransform(208,-11,1,1,0,0,0,50,11);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, בחר נושא, 0, גיאוגרפיה, 1, חשבון, 2', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.name = "mycb";
	this.mycb.setTransform(50.1,11.1,1.5,1.5,0,0,0,33.4,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mycb},{t:this.myCSS}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.forCombo, new cjs.Rectangle(-0.7,-22.5,259.2,56.3), null);


(lib.timeUp_Screen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HappyFrogi();
	this.instance.setTransform(625.3,553.45,1.3241,1.3037,0,0,0,54.1,53.5);

	this.instance_1 = new lib.mc_raft_MAIN();
	this.instance_1.setTransform(625.05,620,0.6792,0.6807,0,0,0,215,132.2);

	this.btn_continueTimeUp = new lib.btn_continue();
	this.btn_continueTimeUp.name = "btn_continueTimeUp";
	this.btn_continueTimeUp.setTransform(158,635.5,1,1,0,0,0,91,37.5);

	this.instance_2 = new lib.TimeoverH1png();
	this.instance_2.setTransform(292,140);

	this.timeovet_txt = new cjs.Text("לא נורא תהיה עוד הזדמנות לענות על השאלה", "normal 400 35px 'Heebo'");
	this.timeovet_txt.name = "timeovet_txt";
	this.timeovet_txt.textAlign = "center";
	this.timeovet_txt.lineHeight = 47;
	this.timeovet_txt.lineWidth = 648;
	this.timeovet_txt.parent = this;
	this.timeovet_txt.setTransform(627.15,337.65);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.timeovet_txt);
	}

	this.instance_3 = new lib.GameBackground();
	this.instance_3.setTransform(0,0,0.6691,0.5812);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.timeovet_txt},{t:this.instance_2},{t:this.btn_continueTimeUp},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.timeUp_Screen, new cjs.Rectangle(0,0,1287.4,731.7), null);


(lib.pause_screen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HappyFrogi();
	this.instance.setTransform(625.3,553.45,1.3241,1.3037,0,0,0,54.1,53.5);

	this.pContinue_btn = new lib.btn_continue();
	this.pContinue_btn.name = "pContinue_btn";
	this.pContinue_btn.setTransform(152,635.5,1,1,0,0,0,91,37.5);

	this.instance_1 = new lib.mc_raft_MAIN();
	this.instance_1.setTransform(619.05,620,0.6792,0.6807,0,0,0,215,132.2);

	this.instance_2 = new lib.PauseH1();
	this.instance_2.setTransform(286,140);

	this.pausetime_txt = new cjs.Text("פרוגי לא אוהב לחכות יותר מידי אז חזרו מהר", "35px 'Heebo'");
	this.pausetime_txt.name = "pausetime_txt";
	this.pausetime_txt.lineHeight = 53;
	this.pausetime_txt.lineWidth = 637;
	this.pausetime_txt.parent = this;
	this.pausetime_txt.setTransform(308.85,363.05);

	this.instance_3 = new lib.GameBackground();
	this.instance_3.setTransform(0,0,0.6691,0.5812);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#55851D").s().p("AgMDfIgBhqQAAgNgEgHQgGgIgNgBIgYAAQgbAAgXgTQgWgTgIgcQgHgZAHgdQAGgaARgYQAcgnA5ggIAAhEIAVgFIALAzQALgKAPABQgCAnAWAgIAOAUQAIAMACAKQABAIgCANIgDAVQAAAMAGAJQAGAJAKABQAGAAAKgEQALgFAFAAQAMAAAHAMQAFALAAAPQABAwgbA3QgMAagQAKQgKAHgSAEIgfAGIgEAlQgKADgJAAQgKAAgKgEgAA/CBIgFAIIgGADIgVAFIAugEIgBgRQgBgKgHgFQAAAFgFAPgAgrhtIgKAJQgDADgQAIQgaANgLAfQgJAYAEAgQAEAeARAGQAFACAKAAIAuAAQAEgMgNgXQgOgUAHgNIAIgLQALgOgCgZIgCgVQAAgMABgJIgDAAQgEAAgEACg");
	this.shape.setTransform(251.2755,176.4315);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_3},{t:this.pausetime_txt},{t:this.instance_2},{t:this.instance_1},{t:this.pContinue_btn},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pause_screen, new cjs.Rectangle(0,0,1287.4,731.7), null);


(lib.frogiProgress = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.FrogiSideLook();
	this.instance.setTransform(-66,80,0.3067,0.3732);

	this.instance_1 = new lib.raft_alone("synched",0);
	this.instance_1.setTransform(-47.6,121,0.1698,0.2012,0,0,0,215,132.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frogiProgress, new cjs.Rectangle(-84.1,80,73.19999999999999,67.6), null);


(lib.frogiraft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.frogiEnd();
	this.instance.setTransform(0,9,0.8095,0.8045);

	this.FROGIGONE = new lib.raft_alone_1();
	this.FROGIGONE.name = "FROGIGONE";
	this.FROGIGONE.setTransform(81.9,81.7,0.6168,0.6181,0,0,0,215.1,132.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.FROGIGONE},{t:this.instance}]}).to({state:[{t:this.FROGIGONE}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-0.3,265.8,164.10000000000002);


(lib.FROGI_START_NEW = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.frogiEnd();
	this.instance.setTransform(0,9,0.8095,0.8045);

	this.FROGIGONE = new lib.raft_alone_1();
	this.FROGIGONE.name = "FROGIGONE";
	this.FROGIGONE.setTransform(74.75,72.5,0.5832,0.5483,0,0,0,215.1,132.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.FROGIGONE},{t:this.instance}]}).to({state:[{t:this.FROGIGONE}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-0.2,251.4,145.5);


(lib.FROGI_START = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.frogiEnd();
	this.instance.setTransform(0,9,0.8095,0.8045);

	this.FROGIGONE = new lib.raft_alone_1();
	this.FROGIGONE.name = "FROGIGONE";
	this.FROGIGONE.setTransform(81.9,81.7,0.6168,0.6181,0,0,0,215.1,132.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.FROGIGONE},{t:this.instance}]}).to({state:[{t:this.FROGIGONE}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-0.3,265.8,164.10000000000002);


(lib.FORGI_ENTER_MAIN_SCREEN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// BUBBLE
	this.instance = new lib.waves();
	this.instance.setTransform(493.4,70.5,1,1.1867,0,0,0,206.8,122.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:122.9,y:71.35},0).wait(1).to({regX:206.9,regY:122.2,x:363.15,y:70.45},0).wait(1).to({regX:206.8,regY:122.9,x:363.05,y:71.3},0).wait(2).to({regY:122.2,x:295.1,y:70.35},0).wait(1).to({regY:122.9,y:71.2},0).wait(2).to({regY:120.9,scaleY:1.1105,skewX:11.2415,x:299.1,y:70},0).wait(1).to({regY:122.9,scaleX:1.0207,scaleY:1.1102,skewX:0.0989,x:283.3,y:72.25},0).to({_off:true},1).wait(2));

	// RAFT
	this.instance_1 = new lib.frogiraft();
	this.instance_1.setTransform(508.05,72.55,0.9455,0.8871,0,0,0,132.1,81.8);

	this.instance_2 = new lib.FROGI_START();
	this.instance_2.setTransform(310.9,72.55,0.9455,0.8871,0,0,0,132.1,81.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:81.9,regY:81.7,x:366.55,y:72.45},0).wait(1).to({x:287.55},0).wait(1).to({x:275.9},0).wait(1).to({x:263.4},0).wait(5).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-74.6,700.3,291.79999999999995);


(lib.end_animiton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_120 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(120).call(this.frame_120).wait(1));

	// main
	this.instance = new lib.butterfly_open_1();
	this.instance.setTransform(-304.85,-134.8,0.2697,0.367,0,58.6522,95.8493);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120).to({_off:false},0).wait(1));

	// Bubbles
	this.instance_1 = new lib.waves();
	this.instance_1.setTransform(176,58.95,1,1.0732,0,0,0,206.8,122.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(1).to({regY:122.9,scaleY:1.0632,skewX:-1.5062,x:155,y:58.05},0).wait(1).to({scaleY:1.0532,skewX:-3.0123,x:133.9,y:56.75},0).wait(1).to({scaleY:1.0431,skewX:-4.5185,x:112.85,y:55.4},0).wait(1).to({scaleY:1.0331,skewX:-6.0247,x:91.8,y:54.05},0).wait(1).to({scaleY:1.023,skewX:-7.5308,x:75.65},0).wait(1).to({scaleY:1.013,skewX:-9.037,x:59.4},0).wait(1).to({scaleY:1.0029,skewX:-10.5432,x:43.2},0).wait(1).to({scaleY:0.9929,skewX:-12.0493,x:26.95},0).wait(1).to({scaleY:0.9829,skewX:-13.5555,x:10.75},0).wait(1).to({scaleY:0.9702,skewX:-8.774,x:-8.65,y:54.55},0).wait(1).to({scaleY:0.9576,skewX:-3.9925,x:-28.05,y:55.05},0).wait(1).to({scaleY:0.9449,skewX:0.789,x:-47.5,y:55.5},0).wait(1).to({scaleY:0.9323,skewX:5.5704,x:-66.9,y:56.05},0).wait(1).to({scaleY:0.9196,skewX:10.3519,x:-86.3,y:56.55},0).wait(1).to({scaleY:0.907,skewX:15.1334,x:-105.75,y:57.05},0).to({_off:true},1).wait(103));

	// frogi
	this.end_animiton = new lib.frogiraft();
	this.end_animiton.name = "end_animiton";
	this.end_animiton.setTransform(132.6,68.8,1,1,0,0,0,132.6,81.7);

	this.timeline.addTween(cjs.Tween.get(this.end_animiton).wait(1).to({regX:81.9,x:81.9},0).wait(2).to({x:67.4},0).wait(1).to({x:52.95},0).wait(1).to({x:38.45},0).wait(1).to({x:24},0).wait(1).to({x:9.5},0).wait(1).to({x:-4.95},0).wait(1).to({x:-19.45},0).wait(1).to({x:-33.95},0).wait(1).to({x:-48.4},0).wait(1).to({x:-62.9},0).wait(1).to({x:-77.35},0).wait(1).to({x:-91.85},0).wait(1).to({x:-106.3},0).wait(1).to({x:-120.8},0).wait(1).to({x:-135.3},0).wait(1).to({_off:true},1).wait(102));

	// jumper
	this.instance_2 = new lib.jumperfrogi();
	this.instance_2.setTransform(-205,22.2,0.4643,0.533,0,0,180,93.9,76.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(1).to({regX:94,regY:93.5,scaleX:0.4579,scaleY:0.5287,skewX:-2.3537,skewY:179.9732,x:-217.05,y:28.8},0).wait(1).to({scaleX:0.4515,scaleY:0.5245,skewX:-4.7075,skewY:179.9464,x:-229.1,y:26.25},0).wait(1).to({scaleX:0.4451,scaleY:0.5202,skewX:-7.0612,skewY:179.9197,x:-241.1,y:23.7},0).wait(1).to({scaleX:0.4387,scaleY:0.516,skewX:-9.4149,skewY:179.8929,x:-253.15,y:21.15},0).wait(1).to({scaleX:0.4323,scaleY:0.5117,skewX:-16.7691,skewY:174.8656,x:-272.2,y:17.45},0).wait(1).to({scaleX:0.4259,scaleY:0.5075,skewX:-24.1233,skewY:169.8384,x:-291.35,y:13.6},0).wait(1).to({scaleX:0.4195,scaleY:0.5033,skewX:-31.4775,skewY:164.8112,x:-310.6,y:9.75},0).wait(1).to({scaleX:0.413,scaleY:0.4717,skewX:-28.9678,skewY:167.321,x:-316.45,y:9.4},0).wait(1).to({scaleX:0.4066,scaleY:0.4402,skewX:-26.4581,skewY:169.8308,x:-322.15,y:9.1},0).wait(1).to({scaleX:0.4002,scaleY:0.4087,skewX:-23.9484,skewY:172.3407,x:-327.95,y:8.75},0).wait(1).to({scaleX:0.4058,scaleY:0.3982,skewX:-19.1932,skewY:170.4723,x:-333.75},0).wait(1).to({scaleX:0.4113,scaleY:0.3877,skewX:-14.4381,skewY:168.604,x:-339.55},0).wait(1).to({scaleX:0.4168,scaleY:0.3771,skewX:-9.6829,skewY:166.7356,x:-345.35,y:8.7},0).wait(1).to({scaleX:0.4224,scaleY:0.3666,skewX:-4.9278,skewY:164.8673,x:-351.15,y:8.6},0).wait(1).to({scaleX:0.4279,scaleY:0.366,skewX:-1.1873,skewY:168.6155,x:-357.35,y:13.95},0).wait(1).to({scaleX:0.4335,scaleY:0.3655,skewX:2.5532,skewY:172.3638,x:-363.45,y:19.3},0).wait(1).to({scaleX:0.439,scaleY:0.365,skewX:6.2937,skewY:176.112,x:-369.6,y:24.55},0).wait(1).to({scaleX:0.4446,scaleY:0.3644,skewX:10.0342,skewY:179.8603,x:-375.75,y:29.85},0).wait(1).to({scaleX:0.4986,scaleY:0.3591,skewX:7.8729,skewY:179.8609,x:-379.1,y:32.4},0).wait(1).to({scaleX:0.5527,scaleY:0.3538,skewX:5.7117,skewY:179.8614,x:-382.5,y:34.85},0).wait(1).to({scaleX:0.6067,scaleY:0.3484,skewX:3.5504,skewY:179.862,x:-385.9,y:37.4},0).wait(1).to({scaleX:0.5991,scaleY:0.372,skewX:15.275,skewY:179.8638,x:-401.1,y:51.55},0).to({_off:true},1).wait(79));

	// raft_finalborad
	this.instance_3 = new lib.raft_alone_2();
	this.instance_3.setTransform(-84.45,68.7,0.6168,0.6181,0,0,0,214.9,132);
	this.instance_3._off = true;

	this.text = new cjs.Text("!כל הכבוד פרוגי", "35px 'Heebo'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 53;
	this.text.lineWidth = 255;
	this.text.parent = this;
	this.text.setTransform(-17.05,-132.7);

	this.instance_4 = new lib.ENDSCREEN_LOG();
	this.instance_4.setTransform(-17.05,-108.45,0.878,0.7168,0,0,0,154.8,56.5);

	this.text_1 = new cjs.Text("שחקו שוב", "bold 20px 'Heebo'");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 31;
	this.text_1.lineWidth = 94;
	this.text_1.parent = this;
	this.text_1.setTransform(-156.35,146.1);

	this.instance_5 = new lib.end_btn();
	this.instance_5.setTransform(-193.8,163.85,1.0005,0.994,0,0,0,87.8,40.1);

	this.text_2 = new cjs.Text("תפריט ראשי", "bold 20px 'Heebo'");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 31;
	this.text_2.lineWidth = 125;
	this.text_2.parent = this;
	this.text_2.setTransform(21.45,146.1);

	this.instance_6 = new lib.end_btn();
	this.instance_6.setTransform(-24.95,163.85,1.0005,0.994,0,0,0,87.8,40.1);

	this.text_3 = new cjs.Text(":ציון סופי", "bold 20px 'Heebo'");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 31;
	this.text_3.lineWidth = 87;
	this.text_3.parent = this;
	this.text_3.setTransform(70.45,82);

	this.text_4 = new cjs.Text(":שגיאות", "bold 20px 'Heebo'");
	this.text_4.textAlign = "right";
	this.text_4.lineHeight = 31;
	this.text_4.lineWidth = 85;
	this.text_4.parent = this;
	this.text_4.setTransform(70.45,22);

	this.text_5 = new cjs.Text(":זמן ", "bold 20px 'Heebo'");
	this.text_5.textAlign = "right";
	this.text_5.lineHeight = 31;
	this.text_5.lineWidth = 37;
	this.text_5.parent = this;
	this.text_5.setTransform(70.45,-38);

	this.instance_7 = new lib.ENDSCREEN_BOARD();
	this.instance_7.setTransform(-119.3,143.3,0.7757,0.8121,0,0,0,344.9,284.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},19).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},23).to({state:[{t:this.instance_7},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.instance_6},{t:this.text_2},{t:this.instance_5},{t:this.text_1},{t:this.instance_4},{t:this.text}]},16).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(33).to({_off:true},16).wait(53));

	// walking_frogi
	this.instance_8 = new lib.jumper();
	this.instance_8.setTransform(-434.85,41.75,0.3878,0.4391,0,-2.8466,-12.8298,98,60.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(42).to({_off:false},0).wait(1).to({regX:115,regY:117,scaleX:0.3774,scaleY:0.41,skewX:-1.3988,skewY:-10.3192,x:-432,y:85.45},0).wait(1).to({scaleX:0.367,scaleY:0.3808,skewX:0.0497,skewY:-7.8056,x:-436.75,y:105.9},0).wait(1).to({scaleX:0.3566,scaleY:0.3517,skewX:1.4983,skewY:-5.2919,x:-441.35,y:126.4},0).wait(1).to({scaleX:0.3462,scaleY:0.3226,skewX:2.9468,skewY:-2.7782,x:-446,y:146.9},0).wait(1).to({scaleX:0.3358,scaleY:0.2934,skewX:4.3954,skewY:-0.2646,x:-450.5,y:167.3},0).wait(1).to({scaleX:0.3254,scaleY:0.2643,skewX:5.8439,skewY:2.2491,x:-454.9,y:187.7},0).wait(1).to({scaleX:0.3199,scaleY:0.2834,skewX:6.2923,skewY:3.7623,x:-457.6,y:191.2},0).wait(1).to({scaleX:0.3143,scaleY:0.3024,skewX:6.7406,skewY:5.2754,x:-460.2,y:194.7},0).wait(1).to({scaleX:0.3087,scaleY:0.3215,skewX:7.189,skewY:6.7886,x:-462.9,y:198.15},0).wait(1).to({scaleX:0.3032,scaleY:0.3405,skewX:7.6373,skewY:8.3017,x:-465.6,y:201.65},0).wait(1).to({scaleX:0.3098,scaleY:0.3375,skewX:8.0777,skewY:9.8071,x:-468.05,y:207.3},0).wait(1).to({scaleX:0.3164,scaleY:0.3345,skewX:8.5181,skewY:11.3124,x:-470.5,y:213},0).wait(1).to({scaleX:0.323,scaleY:0.3315,skewX:8.9585,skewY:12.8178,x:-473,y:218.7},0).wait(1).to({scaleX:0.3297,scaleY:0.3285,skewX:9.3989,skewY:14.3231,x:-475.45,y:224.4},0).wait(1).to({scaleX:0.3363,scaleY:0.3255,skewX:9.8394,skewY:15.8285,x:-477.9,y:230.1},0).wait(1).to({scaleX:0.3429,scaleY:0.3225,skewX:10.2798,skewY:17.3338,x:-480.4,y:235.85},0).wait(1).to({scaleX:0.3397,scaleY:0.3357,skewX:6.2215,skewY:14.3389,x:-482.95,y:240.75},0).wait(1).to({scaleX:0.3365,scaleY:0.349,skewX:2.1632,skewY:11.344,x:-485.45,y:245.6},0).wait(1).to({scaleX:0.3333,scaleY:0.3622,skewX:-1.8951,skewY:8.3491,x:-487.9,y:250.3},0).wait(1).to({scaleX:0.3301,scaleY:0.3754,skewX:-5.9534,skewY:5.3542,x:-490.15,y:255},0).wait(1).to({scaleX:0.3269,scaleY:0.3886,skewX:-10.0117,skewY:2.3593,x:-492.4,y:259.5},0).wait(1).to({scaleX:0.3475,scaleY:0.3887,skewX:1.812,skewY:2.361,x:-496.5,y:259.8},0).wait(1).to({scaleX:0.3681,scaleY:0.3888,skewX:13.6357,skewY:2.3628,x:-500.6,y:259.25},0).wait(1).to({scaleX:0.3886,scaleY:0.4005,skewX:13.6575,skewY:2.3855,x:-500.45,y:259.9},0).wait(1).to({scaleX:0.4092,scaleY:0.4123,skewX:13.6794,skewY:2.4082,x:-500.3,y:260.55},0).wait(1).to({scaleX:0.4298,scaleY:0.4241,skewX:13.7012,skewY:2.431,x:-500.05,y:261.2},0).wait(1).to({_off:true},1).wait(51));

	// happyfrogs
	this.instance_9 = new lib.HappyFrogi();
	this.instance_9.setTransform(-490.6,279.85,0.9222,0.9215,0,0,0,54,79.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(70).to({_off:false},0).wait(51));

	// Pinkfrogi
	this.instance_10 = new lib.lookside_pink();
	this.instance_10.setTransform(-1036.3,240.9,0.2082,0.2299,0,5.159,-173.8073,87.8,141.8);

	this.instance_11 = new lib.ENDSCREEN_PinkFrog();
	this.instance_11.setTransform(-695.8,255.8,1,1,0,0,0,49.8,49.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},48).to({state:[]},3).to({state:[{t:this.instance_11}]},21).wait(49));

	// jumpPink
	this.instance_12 = new lib.jumperPink();
	this.instance_12.setTransform(-1015.2,206.4,0.3756,0.2975,0,0,0,94.2,69);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(51).to({_off:false},0).wait(1).to({regX:94.5,regY:95,scaleX:0.3729,scaleY:0.3262,skewX:-0.0324,skewY:1.9374,x:-998.85,y:204.6},0).wait(1).to({scaleX:0.3702,scaleY:0.3548,skewX:-0.0647,skewY:3.8747,x:-982.55,y:195.1},0).wait(1).to({scaleX:0.3675,scaleY:0.3835,skewX:-0.0971,skewY:5.8121,x:-966.3,y:185.6},0).wait(1).to({scaleX:0.3648,scaleY:0.4121,skewX:-0.1295,skewY:7.7495,x:-950.05,y:176.1},0).wait(1).to({scaleX:0.35,scaleY:0.3115,skewX:-0.1619,skewY:9.6869,x:-924.55,y:169.25},0).wait(1).to({scaleX:0.3352,scaleY:0.2108,skewX:-0.1942,skewY:11.6242,x:-899.05,y:162.4},0).wait(1).to({scaleX:0.3486,scaleY:0.2557,skewX:-0.7485,skewY:13.4389,x:-873.5,y:159.35},0).wait(1).to({scaleX:0.3619,scaleY:0.3006,skewX:-1.3027,skewY:15.2537,x:-847.9,y:156.25},0).wait(1).to({scaleX:0.3752,scaleY:0.3467,skewX:-5.2317,skewY:13.6936,x:-829.6,y:171.05},0).wait(1).to({scaleX:0.3886,scaleY:0.3928,skewX:-9.1608,skewY:12.1336,x:-811.1,y:185.85},0).wait(1).to({scaleX:0.4019,scaleY:0.4389,skewX:-13.0898,skewY:10.5735,x:-792.45,y:200.5},0).wait(1).to({scaleX:0.4102,scaleY:0.4203,skewX:-20.3917,skewY:9.0992,x:-785.6,y:212.55},0).wait(1).to({scaleX:0.4184,scaleY:0.4018,skewX:-27.6937,skewY:7.6249,x:-778.85,y:224.35},0).wait(1).to({scaleX:0.4267,scaleY:0.3832,skewX:-34.9957,skewY:6.1506,x:-772.25,y:236.1},0).wait(1).to({scaleX:0.435,scaleY:0.3646,skewX:-42.2976,skewY:4.6763,x:-765.95,y:247.8},0).wait(1).to({scaleY:0.4021,skewX:-36.0492,skewY:3.1542,x:-761.2,y:251.05},0).wait(1).to({scaleY:0.4395,skewX:-29.8007,skewY:1.6322,x:-756.75,y:254.3},0).wait(1).to({scaleY:0.477,skewX:-23.5523,skewY:0.1102,x:-752.55,y:257.55},0).wait(1).to({scaleY:0.4611,skewX:-6.1818,skewY:0.1093,x:-737.2,y:258.2},0).wait(1).to({scaleY:0.4452,skewX:11.1887,skewY:0.1084,x:-721.7,y:257.75},0).to({_off:true},1).wait(49));

	// Greenfrogi
	this.instance_13 = new lib.lookside_Green();
	this.instance_13.setTransform(-991.6,76.15,0.2658,0.2552,0,0,-172.7314,89.5,95);

	this.instance_14 = new lib.GreenHappyFrogi();
	this.instance_14.setTransform(-596.25,255.8,0.6776,0.68,0,0,0,73.4,72.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},48).to({state:[]},3).to({state:[{t:this.instance_14}]},21).wait(49));

	// jumpGreen
	this.instance_15 = new lib.jumperGreen_1();
	this.instance_15.setTransform(-961.65,86.75,0.3756,0.2976,14.9967,0,0,87.4,90.3);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(51).to({_off:false},0).wait(1).to({regX:94.5,regY:95,scaleX:0.3615,scaleY:0.2584,rotation:0,skewX:10.4136,skewY:17.5431,x:-922.9,y:85.2},0).wait(1).to({scaleX:0.3473,scaleY:0.2191,skewX:5.8291,skewY:20.0881,x:-886.4,y:81.55},0).wait(1).to({scaleX:0.3509,scaleY:0.2175,skewX:1.2446,skewY:22.6332,x:-859.1,y:83.45},0).wait(1).to({scaleX:0.3546,scaleY:0.2158,skewX:-3.3399,skewY:25.1782,x:-831.8,y:85.3},0).wait(1).to({scaleX:0.3582,scaleY:0.2142,skewX:-7.9244,skewY:27.7232,x:-804.5,y:87.15},0).wait(1).to({scaleX:0.3619,scaleY:0.2125,skewX:-12.5089,skewY:30.2682,x:-777.2,y:89},0).wait(1).to({scaleX:0.3655,scaleY:0.2482,skewX:-13.6839,skewY:29.0917,x:-756.55,y:99.1},0).wait(1).to({scaleX:0.3692,scaleY:0.2839,skewX:-14.8589,skewY:27.9152,x:-736,y:109.25},0).wait(1).to({scaleX:0.3728,scaleY:0.3196,skewX:-16.0338,skewY:26.7386,x:-715.4,y:119.4},0).wait(1).to({scaleX:0.3765,scaleY:0.3553,skewX:-17.2088,skewY:25.5621,x:-694.75,y:129.5},0).wait(1).to({scaleX:0.3802,scaleY:0.3495,skewX:-15.9107,skewY:24.4186,x:-677.35,y:151.05},0).wait(1).to({scaleX:0.3838,scaleY:0.3437,skewX:-14.6126,skewY:23.275,x:-659.95,y:172.55},0).wait(1).to({scaleX:0.3875,scaleY:0.3378,skewX:-13.3145,skewY:22.1315,x:-642.55,y:194.1},0).wait(1).to({scaleY:0.3475,skewX:-16.6317,skewY:20.8835,x:-625.05,y:215.65},0).wait(1).to({scaleY:0.3571,skewX:-19.9488,skewY:19.6355,x:-607.5,y:237.2},0).wait(1).to({scaleY:0.3872,skewX:-20.4524,skewY:18.453,x:-608.1,y:238.25},0).wait(1).to({scaleY:0.4173,skewX:-20.9559,skewY:17.2704,x:-608.65,y:239.3},0).wait(1).to({scaleY:0.4475,skewX:-21.4594,skewY:16.0879,x:-609.25,y:240.4},0).wait(1).to({scaleY:0.4776,skewX:-20.7128,skewY:16.1555,x:-595.4,y:247.9},0).wait(1).to({scaleY:0.5077,skewX:-19.9661,skewY:16.2232,x:-581.55,y:255.4},0).to({_off:true},1).wait(49));

	// Bluefrogi
	this.instance_16 = new lib.lookside_Blue();
	this.instance_16.setTransform(-1049.65,346.45,0.2443,0.2354,0,0,159.431,90.1,95.5);

	this.instance_17 = new lib.ENDSCREEN_BlueFrog();
	this.instance_17.setTransform(-790.2,255.8,0.6776,0.68,0,0,0,73.5,72.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16,p:{x:-1049.65}}]},58).to({state:[{t:this.instance_16,p:{x:-1031.65}}]},1).to({state:[]},1).to({state:[{t:this.instance_17}]},10).wait(51));

	// jumpBlue
	this.instance_18 = new lib.jumperBlue();
	this.instance_18.setTransform(-1023.15,318.1,0.4,0.2952,-14.9972,0,0,90.5,91.8);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(61).to({_off:false},0).wait(1).to({regX:95,regY:95,scaleX:0.366,scaleY:0.2882,rotation:0,skewX:-10.377,skewY:-12.5559,x:-992.95,y:303.6},0).wait(1).to({scaleX:0.3319,scaleY:0.2811,skewX:-5.7551,skewY:-10.1129,x:-964.85,y:288.65},0).wait(1).to({scaleX:0.2979,scaleY:0.2739,skewX:-1.1332,skewY:-7.6699,x:-936.75,y:273.7},0).wait(1).to({scaleY:0.2805,skewX:3.5759,skewY:-5.1701,x:-918.15,y:269.05},0).wait(1).to({scaleY:0.2871,skewX:8.2849,skewY:-2.6703,x:-899.6,y:264.35},0).wait(1).to({scaleY:0.2937,skewX:12.9939,skewY:-0.1705,x:-880.95,y:259.6},0).wait(1).to({scaleY:0.3003,skewX:15.2031,skewY:-0.1705,x:-854.7,y:255.6},0).wait(1).to({scaleY:0.3069,skewX:17.4123,x:-828.35,y:251.6},0).to({_off:true},1).wait(51));

	// butterfly_open
	this.instance_19 = new lib.butterfly_open_1();
	this.instance_19.setTransform(-1039.7,-331.75,0.1765,0.3382,0,120.3355,134.979);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({regX:70.5,regY:68,scaleX:0.1854,scaleY:0.3449,skewX:117.8959,skewY:134.3634,x:-1063.7,y:-322.65},0).wait(1).to({scaleX:0.1944,scaleY:0.3515,skewX:115.4528,skewY:133.7469,x:-1059.1,y:-310.7},0).wait(1).to({scaleX:0.2033,scaleY:0.3581,skewX:113.0097,skewY:133.1305,x:-1054.45,y:-298.75},0).wait(1).to({scaleX:0.2122,scaleY:0.3647,skewX:110.5667,skewY:132.5141,x:-1049.7,y:-286.65},0).wait(1).to({scaleX:0.2211,scaleY:0.3714,skewX:108.1236,skewY:131.8976,x:-1045,y:-274.6},0).wait(1).to({scaleX:0.23,scaleY:0.378,skewX:105.6805,skewY:131.2812,x:-1040.25,y:-262.4},0).wait(1).to({scaleX:0.2389,scaleY:0.3846,skewX:103.2375,skewY:130.6648,x:-1035.45,y:-250.2},0).wait(1).to({scaleX:0.242,scaleY:0.3824,skewX:100.6398,skewY:121.724,x:-1025.3,y:-237.9},0).wait(1).to({scaleX:0.245,scaleY:0.3802,skewX:98.0422,skewY:112.7832,x:-1014.9,y:-225.85},0).wait(1).to({scaleX:0.2481,scaleY:0.378,skewX:95.4446,skewY:103.8424,x:-1004.2,y:-214.25},0).wait(1).to({scaleX:0.2511,scaleY:0.3758,skewX:92.847,skewY:94.9016,x:-993.2,y:-203},0).wait(1).to({scaleX:0.2542,scaleY:0.3736,skewX:90.2493,skewY:85.9608,x:-982.15,y:-192.25},0).wait(1).to({scaleX:0.2354,scaleY:0.3713,skewX:83.7298,skewY:70.4603,x:-964.95,y:-187.8},0).wait(1).to({scaleX:0.2166,scaleY:0.3691,skewX:77.2103,skewY:54.9597,x:-948.55,y:-184.35},0).wait(1).to({scaleX:0.2231,scaleY:0.3669,skewX:70.8382,skewY:53.7777,x:-934.45,y:-177.7},0).wait(1).to({scaleX:0.2296,scaleY:0.3647,skewX:64.4661,skewY:52.5956,x:-920.15,y:-171.25},0).wait(1).to({scaleX:0.2361,scaleY:0.3625,skewX:58.094,skewY:51.4135,x:-905.5,y:-164.95},0).wait(1).to({scaleX:0.2426,scaleY:0.3603,skewX:54.7217,skewY:53.2313,x:-886.3,y:-165.5},0).wait(1).to({scaleX:0.2491,scaleY:0.358,skewX:51.3493,skewY:55.049,x:-867.05,y:-166.15},0).wait(1).to({scaleX:0.2556,scaleY:0.3558,skewX:47.977,skewY:56.8667,x:-847.75,y:-166.85},0).wait(1).to({scaleX:0.2621,scaleY:0.3536,skewX:44.6047,skewY:58.6844,x:-828.5,y:-167.65},0).wait(1).to({scaleX:0.2357,scaleY:0.3528,skewX:44.4806,skewY:63.438,x:-814.2,y:-173.9},0).wait(1).to({scaleX:0.2093,scaleY:0.3521,skewX:44.3564,skewY:68.1915,x:-799.75,y:-180.4},0).wait(1).to({scaleX:0.1828,scaleY:0.3513,skewX:44.2323,skewY:72.9451,x:-785.05,y:-187.15},0).wait(1).to({scaleX:0.1737,scaleY:0.3505,skewX:40.6195,skewY:69.4869,x:-763.7,y:-195.65},0).wait(1).to({scaleX:0.1646,scaleY:0.3497,skewX:37.0067,skewY:66.0287,x:-742.45,y:-204.25},0).wait(1).to({scaleX:0.1555,scaleY:0.349,skewX:33.3939,skewY:62.5705,x:-721.2,y:-213},0).wait(1).to({scaleX:0.1904,scaleY:0.3482,skewX:32.8855,skewY:62.2165,x:-709.55,y:-214.05},0).wait(1).to({scaleX:0.2253,scaleY:0.3474,skewX:32.377,skewY:61.8624,x:-697.85,y:-215.1},0).wait(1).to({scaleX:0.2602,scaleY:0.3467,skewX:31.8685,skewY:61.5084,x:-686.15,y:-216.2},0).wait(1).to({scaleX:0.2951,scaleY:0.3459,skewX:31.36,skewY:61.1543,x:-674.4,y:-217.25},0).wait(1).to({scaleX:0.2879,scaleY:0.3451,skewX:38.2721,skewY:70.418,x:-667.7,y:-218.05},0).wait(1).to({scaleX:0.2807,scaleY:0.3443,skewX:45.1842,skewY:79.6817,x:-660.75,y:-219.6},0).wait(1).to({scaleX:0.2736,scaleY:0.3436,skewX:52.0963,skewY:88.9454,x:-653.55,y:-221.9},0).wait(1).to({scaleX:0.2664,scaleY:0.3428,skewX:59.0084,skewY:98.2091,x:-645.9,y:-224.95},0).wait(1).to({scaleX:0.2417,scaleY:0.342,skewX:66.6396,skewY:103.7957,x:-635.2,y:-223.2},0).wait(1).to({scaleX:0.217,scaleY:0.3413,skewX:74.2707,skewY:109.3822,x:-623.9,y:-221.6},0).wait(1).to({scaleX:0.1923,scaleY:0.3405,skewX:81.9019,skewY:114.9688,x:-611.65,y:-220.2},0).wait(1).to({scaleX:0.2795,scaleY:0.3397,skewX:89.5228,skewY:120.554,x:-602.8,y:-212.05},0).wait(1).to({scaleX:0.2676,scaleY:0.3389,skewX:81.9408,skewY:113.8771,x:-588.6,y:-200.6},0).wait(1).to({scaleX:0.2556,scaleY:0.3382,skewX:74.3587,skewY:107.2003,x:-574.15,y:-189.65},0).wait(1).to({scaleX:0.2436,scaleY:0.3374,skewX:66.7767,skewY:100.5234,x:-559.35,y:-179.05},0).wait(1).to({scaleX:0.2316,scaleY:0.3366,skewX:59.1946,skewY:93.8465,x:-544.35,y:-168.95},0).wait(1).to({scaleX:0.1264,scaleY:0.3359,skewX:58.9586,skewY:62.0534,x:-526.45,y:-178.9},0).wait(1).to({scaleX:0.1301,scaleY:0.3351,skewX:59.0063,skewY:64.4284,x:-514.2,y:-180.15},0).wait(1).to({scaleX:0.1338,scaleY:0.3343,skewX:59.0541,skewY:66.8034,x:-501.9,y:-181.4},0).wait(1).to({scaleX:0.1375,scaleY:0.3335,skewX:59.1018,skewY:69.1783,x:-489.6,y:-182.7},0).wait(1).to({scaleX:0.1412,scaleY:0.3328,skewX:47.9003,skewY:60.3041,x:-478.2,y:-192.9},0).wait(1).to({scaleX:0.1448,scaleY:0.332,skewX:36.6988,skewY:51.4299,x:-466.25,y:-203.95},0).wait(1).to({scaleX:0.1758,scaleY:0.3312,skewX:40.5144,skewY:57.5752,x:-459.85,y:-215.8},0).wait(1).to({scaleX:0.2067,scaleY:0.3305,skewX:44.3299,skewY:63.7204,x:-453.85,y:-227.6},0).wait(1).to({scaleX:0.2376,scaleY:0.3297,skewX:39.7302,skewY:61.4504,x:-440.7,y:-229.55},0).wait(1).to({scaleX:0.2446,scaleY:0.3289,skewX:38.8878,skewY:62.9357,x:-430.3,y:-233.55},0).wait(1).to({scaleX:0.2515,scaleY:0.3281,skewX:28.0447,skewY:54.4203,x:-414.05,y:-237},0).wait(1).to({scaleX:0.2585,scaleY:0.3274,skewX:62.2005,skewY:90.9037,x:-423.6,y:-247.3},0).wait(1).to({scaleX:0.2655,scaleY:0.3266,skewX:96.3563,skewY:127.3871,x:-426.75,y:-268.3},0).wait(1).to({scaleX:0.2692,scaleY:0.3274,skewX:83.3876,skewY:114.4187,x:-404.3,y:-258.6},0).wait(1).to({scaleX:0.273,scaleY:0.3283,skewX:70.4189,skewY:101.4503,x:-380.2,y:-249.85},0).wait(1).to({scaleX:0.2768,scaleY:0.3291,skewX:57.4502,skewY:88.4818,x:-354.7,y:-242.4},0).wait(1).to({scaleX:0.2805,scaleY:0.3299,skewX:44.4814,skewY:75.5134,x:-328.1,y:-236.55},0).wait(1).to({scaleX:0.2665,scaleY:0.3307,skewX:56.4625,skewY:87.495,x:-329.9,y:-237.35},0).wait(1).to({scaleX:0.2524,scaleY:0.3316,skewX:68.4436,skewY:99.4766,x:-330.45,y:-239.45},0).wait(1).to({scaleX:0.2384,scaleY:0.3324,skewX:80.4247,skewY:111.4582,x:-329.6,y:-242.7},0).wait(1).to({scaleX:0.2244,scaleY:0.3332,skewX:92.4058,skewY:123.4398,x:-327.1,y:-246.65},0).wait(1).to({scaleX:0.2103,scaleY:0.334,skewX:104.3869,skewY:135.4214,x:-322.9,y:-250.95},0).wait(1).to({scaleX:0.2107,scaleY:0.3348,skewX:107.3506,skewY:138.3843,x:-317,y:-248.45},0).wait(1).to({scaleX:0.2111,scaleY:0.3357,skewX:110.3143,skewY:141.3472,x:-311,y:-245.9},0).wait(1).to({scaleX:0.2115,scaleY:0.3365,skewX:113.2779,skewY:144.3101,x:-304.95,y:-243.45},0).wait(1).to({scaleX:0.2119,scaleY:0.3373,skewX:116.2416,skewY:147.2729,x:-298.8,y:-241},0).wait(1).to({scaleX:0.2123,scaleY:0.3382,skewX:119.2053,skewY:150.2358,x:-292.6,y:-238.45},0).wait(1).to({scaleX:0.2126,scaleY:0.339,skewX:149.1681,skewY:180.1979,x:-286.15,y:-249.2},0).wait(1).to({scaleX:0.186,scaleY:0.3398,skewX:156.6927,skewY:187.7206,x:-281.3,y:-246.95},0).wait(1).to({scaleX:0.1594,scaleY:0.3406,skewX:164.2172,skewY:195.2433,x:-276.15,y:-243.95},0).wait(1).to({scaleX:0.2529,scaleY:0.3415,skewX:179.2096,skewY:210.2184,x:-281.25,y:-241.15},0).wait(1).to({scaleX:0.222,scaleY:0.3423,skewX:194.194,skewY:225.1992,x:-277.45,y:-233},0).wait(1).to({scaleX:0.1912,scaleY:0.3431,skewX:209.1785,skewY:240.1799,x:-274,y:-221.75},0).wait(1).to({scaleX:0.2433,scaleY:0.3439,skewX:227.4536,skewY:258.4536,x:-287.35,y:-214.8},0).wait(1).to({scaleX:0.2118,scaleY:0.3447,skewX:227.6559,skewY:258.6544,x:-309.25,y:-205.15},0).wait(1).to({scaleX:0.1802,scaleY:0.3456,skewX:227.8582,skewY:258.8552,x:-315.7,y:-200.55},0).wait(1).to({scaleX:0.1487,scaleY:0.3464,skewX:228.0606,skewY:259.0559,x:-322.15,y:-196.05},0).wait(1).to({scaleX:0.1172,scaleY:0.3472,skewX:228.2629,skewY:259.2567,x:-328.6,y:-191.5},0).wait(1).to({scaleX:0.1739,scaleY:0.348,skewX:228.4668,skewY:259.4565,x:-346.25,y:-174.7},0).wait(1).to({scaleX:0.2306,scaleY:0.3489,skewX:179.1709,skewY:210.1564,x:-356.15,y:-165.1},0).wait(1).to({scaleX:0.2004,scaleY:0.3497,skewX:156.5889,skewY:175.2691,x:-356.8,y:-150.4},0).wait(1).to({scaleX:0.1702,scaleY:0.3505,skewX:134.0069,skewY:140.3819,x:-351.15,y:-135.15},0).wait(1).to({scaleX:0.1695,scaleY:0.3513,skewX:128.9869,skewY:140.2881,x:-347.5,y:-129.95},0).wait(1).to({scaleX:0.1689,scaleY:0.3522,skewX:123.9668,skewY:140.1943,x:-343.75,y:-124.7},0).wait(1).to({scaleX:0.1682,scaleY:0.353,skewX:118.9468,skewY:140.1005,x:-339.85,y:-119.25},0).wait(1).to({scaleX:0.1411,scaleY:0.3538,skewX:119.0001,skewY:145.0762,x:-338.95,y:-121.2},0).wait(1).to({scaleX:0.1141,scaleY:0.3546,skewX:119.0534,skewY:150.0518,x:-337.8,y:-122.95},0).wait(1).to({scaleX:0.1296,scaleY:0.3555,skewX:119.0522,skewY:150.0498,x:-327.8,y:-115.95},0).wait(1).to({scaleX:0.1451,scaleY:0.3563,skewX:119.0509,skewY:150.0479,x:-317.8,y:-108.9},0).wait(1).to({scaleX:0.1606,scaleY:0.3571,skewX:114.0501,skewY:145.0463,x:-311.25,y:-105.65},0).wait(1).to({scaleX:0.1761,scaleY:0.3579,skewX:109.0492,skewY:140.0446,x:-304.25,y:-102.25},0).wait(1).to({scaleX:0.1916,scaleY:0.3588,skewX:104.0483,skewY:135.043,x:-296.95,y:-98.6},0).wait(1).to({scaleX:0.1859,scaleY:0.3596,skewX:89.025,skewY:120.0186,x:-287.75,y:-100.15},0).wait(1).to({scaleX:0.1802,scaleY:0.3604,skewX:74.0018,skewY:104.9942,x:-276.6,y:-102.55},0).wait(1).to({scaleX:0.1745,scaleY:0.3612,skewX:58.9785,skewY:89.9697,x:-263.8,y:-106.3},0).wait(1).to({scaleX:0.1689,scaleY:0.3621,skewX:36.4555,skewY:67.4456,x:-256.35,y:-112.95},0).wait(1).to({scaleX:0.1632,scaleY:0.3629,skewX:13.9326,skewY:44.9215,x:-247.55,y:-124.2},0).wait(1).to({scaleX:0.1575,scaleY:0.3637,skewX:-1.0903,skewY:29.8975,x:-247.4,y:-126.7},0).wait(1).to({scaleX:0.1518,scaleY:0.3646,skewX:-16.1131,skewY:14.8735,x:-248,y:-131.2},0).wait(1).to({scaleX:0.1659,scaleY:0.3654,skewX:-38.661,skewY:-1.2997,x:-245.8,y:-139.35},0).wait(1).to({scaleX:0.18,scaleY:0.3662,skewX:-61.2088,skewY:-17.473,x:-246.85,y:-151.05},0).wait(1).to({scaleX:0.1727,scaleY:0.367,skewX:-65.3024,skewY:-27.9432,x:-268.6,y:-172},0).wait(1).to({scaleX:0.1655,skewX:-72.082,skewY:-41.1028,x:-288,y:-174.2},0).wait(1).to({scaleX:0.1071,skewX:-96.9956,skewY:-66.0247,x:-319.5,y:-184.2},0).wait(1).to({scaleX:0.1646,skewX:-118.0543,skewY:-87.078,x:-324,y:-184.1},0).wait(1).to({scaleX:0.2221,skewX:-139.113,skewY:-108.1313,x:-334.4,y:-181},0).wait(1).to({scaleX:0.234,skewX:-160.1914,skewY:-127.6546,x:-346.55,y:-184.95},0).wait(1).to({scaleX:0.2459,skewX:-181.2697,skewY:-147.1778,x:-359,y:-183.9},0).wait(1).to({scaleX:0.2578,skewX:-203.8115,skewY:-168.1646,x:-351.8,y:-165.65},0).wait(1).to({scaleX:0.2697,skewX:-226.3533,skewY:-189.1513,x:-340.7,y:-142.8},0).wait(1).to({skewX:-233.8528,skewY:-196.6508,x:-334.7,y:-132.5},0).wait(1).to({skewX:-241.3523,skewY:-204.1503,x:-328.1,y:-122.1},0).wait(1).to({skewX:-248.8518,skewY:-211.6498,x:-331.35,y:-115.5},0).wait(1).to({skewX:-256.3513,skewY:-219.1493,x:-333.85,y:-109},0).wait(1).to({skewX:-278.8503,skewY:-241.6483,x:-333.55,y:-104.35},0).wait(1).to({skewX:-301.3493,skewY:-264.1473,x:-328.1,y:-102.9},0).wait(1).to({regX:0,regY:0,skewX:-301.3478,skewY:-264.1507,x:-304.85,y:-134.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1097,-355,1479.9,731.6);


(lib.mc_raft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.raft("synched",0);
	this.instance.setTransform(277.4,193.5,1,1,0,0,0,277.4,193.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAOgEIgbAJ");
	this.shape.setTransform(533.175,214.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#814229").ss(1,1,1).p("ADMnpIAThgQABgzgEgxQgFg4gMg2QgdgagEAZQg6A5g8A2QghAdgfAbQgLAJgLAJIhYhKIgVgSIgVAEIhTAQIgBAAQg5ALg5ALIgEABIAAAAIgLACIgIgGACyr3IAGAlQAEATADASQAHA1gHArQgCAygKAyQgCAGgBAHQgEASgGASIhQhAIhlhQIAWgZICUB0IAVARACyr3IhUBKIhXBMAiurcIAKgCIAZgFIA4AxIAGAFIAGAFIA7AzAiPq/IgVgSIgKgLIjNApIgHALAhWoQIAAAAIhOA+IhNgzIAAAAIiKhaAgPpIIg/AyAgipjQgtAmguAkQgTAPgUAPIgjgYIAAAAIiyh/ADMnpIAAAAIgBAEQgBAHgCAHIgCALACmm4QAVARAIgYQABgEABgFACqscIAIAlAjnI9IAHASIAHAUAikHSQgZAcgZAbIgXAaIAGAaAACKSIhKA8IhcBJIgphgIAAAAQgFgLgEgKIgFgLIACg0AgWJyIgDAEIgtAvQgSAOgSAOQgFAEgEADQgRANgSANQgBABgBABQgGAFgGAFIgSgwIgBgBIgihaAjbKXIgEgKAC8G/IgEgGIgBgBQgBABAAABQgMALgMAMQgBABgBABQgkAiglAiQgEAEgEADQgBABgBABQglAggkAgAC/G3IAAgBQgDgYALAFIAOAMIChCLADCHHIgFgHAC9G+QgBAAAAABADCHHIgCAGIAEAWIAHAlQAEATACASQAHA1gGArQgDAxgJAwQAAABgBACQgBAGgCAHIACABAC9G+IAAACIgBgBADCHHQgCgKgBgGQgCACAAAFAgVJyIhfhQIgwgpIAAgnIBQBFIBSBHIACACIAAAAQgKAJgLAJIgBAAAAUJzIAGAFICQByIAYAUAADKRIgFgFIAWgZAACKSIABgBAgVJyQAAAAAAAAIgBAAADCHHQAOAlAHArQABAEAAAFQAEAcACAfQADBCgSBAQgFAQgFAQQgBABAAABADEHjIiqCVADAHNIgJAXIijCPADlHlIgjgeAGDJqIgHgGAF+JvIgBAAQgLAJgLAKQgCACgDACQg3Asg3AqQgKAHgKAIIAShaQABgzgEgxQgEglgGgjAGDJqIAAAqAGDJqIgNgwAF8JkIiXh/ADgLrQgMAJgNAIQgBABgCACACzMcQABgDABgDQACgDACgDQAEgFAEgHQABgDACgCAC1MdQABABACADIgBAAQgDACABgEQAAgBAAgBgACzMcQABABABAAAC4MhIgDgCIg2grIgWgRIhnhRAC5MiIgBgBAGDKUIh7BhIghAaIgQAGAC5MiQAUARAJgYIABgGIgeALIgBABAC5MgQAAABAAABACzMcIiwiLAikH5IhDBE");
	this.shape_1.setTransform(502.925,224.9522);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AAAgRIAAAOQAAAKAAAL");
	this.shape_2.setTransform(486.425,144.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("Ai7yLQACgDADgCQAJgNARgMQACgBABgBQAKgGAMgGQALgHAOgGIAZgCIAkgBIA2gDIATAFIA0AMIAeAIQAkAaAPAZQAJAGAIABQAJABAHgIQANgcgGgYQgGgZgRgZQgTgRgagMQgJgEgKgDQgJgDgJgDQgXgHgZgFQgEgBgEAAQgOgDgOgDQgTgCgVgDQgSgBgTgBQgJgBgKACQgVACgXALQgGAEgHAEQgEABgDADIggAfQgIASgFAPQAAADgBACAjCxnQADgTAEgRAjCybQACAJAFAIIAAgBABAviIBhAAAC+viIADAAIAXDPQALBjAKBbIAJBTQAHA6AGA1QARCVAOB3IAaDTIAAAAIAAAAIAAAAIAcC5AkVvgIBTgCIAqAAAhsviIABAAICBAAAibtNIgngHIgeALIgFABIgDABQAAABgBAAQAAAAgBAAQgTAHgSAGIgOAFIhvAmIATCxIAFABIgBgFICzAMIGvAAACVseIgYgDAA4ssIipgbACyx3QAIBNAHBIADYsTIgrgHAjgtJIgFABIgDABAjptGIgmANIgOAFAmMsOIgNiFIgGg5IgBgQICKgEAlemUIAhEMIJfABAlOiJIARABAlemUIgPAFAEDmTInFg0QhBAVhBAWQgDABgCAAIgVAHIgWjIICyAHAkYBAIgJAGIAWCoIAHA2AkYBAIgJAGIAAAAAkhBGIgaARAjrGCIgJgCIAKBSIAoCTIAAiDAjrGDIgJgDAkhBGIgcjOACaCFIAHgDAjCD/IAwgSAiRGUIgsgFIgFgCIgTgFAi9GPIgFAAIgSgGAhyDiIEKhdAFeEwIACALAFeEvIABAMAFlFfIAAAEIAPBmIABAIIiLgQAFlFgIAAADAC3B7ICFgvAE8BMIn+hFIhWA5ADhLeIgIjJAF0HJQAFAXAEAPQAZBfABBVQAABwgCBtQiXjCi9AmQgpAIghARQh9A9gzC2QgFiigEigIAAhJACoG5IgcgDAB5LIQgag0gFhEQgCgUADghIAGhbAgWLyQACgHABgGQAIg8ABgsQACgTgJghIgVhgAgERGIASAyQAWAjAYASQAFAEAFADQApAZAzgMIBLgcQBDgoAFg2QAEg4gHg0QgGg0gcgkQgyg2hLgYQhMgRg+AOIAAAAQgnALgeAaQg2AsgMAwQgLAqAGAqQAKBBAcA9QAIAVAOATQAcAlA1AdQAnATAugCQAtgCAsgLQAegIAegLQAsgUAXgfQAKgPAGgRQAghFAThHQAKhPglglQg4hBhOgaAgOO/QgNAwATAzQAOApAxAVIA7AfQALgDALgDQAqgPAOgkQAcg3gRgpQgJgUgPgTQgngtg2ALQgPADgPAKQgIAFgIAJQgYAcAIAbQANAoAnAGQAOADALgBQAUgDAPgPQATgTgIgTQgGgVgagEQgSgFgQARQgCADgCADQgGAKAEAOQAFAQALgDQACgCADgBAg8QYQgHg0AiguQAqgcAmgIQAJgBAIgBQBMgHAwAeQA3AlATAvQARAlgKAjQgHAfgfAXQgkAdgtAJQgKABgKABQgbACgCgPAi5PwQgEAQAsCIQAGAUAKARQA5BmC1AWQAwgIAogLQB2gjAyhGQAPgWAJgZQAuiCgeh8ABLGuIixgVAjCG5IAAgqAj+EbIA8gcIg6AW");
	this.shape_3.setTransform(505.9041,255.805);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(0.1,1,1).p("AgtAMIgmhgAizgUIAwAwAiNg+IA9BLAjCAMIAqAcAAphIIAoBiAAdAOIgQhbABvAhIgOhbACGgtIA9CBAgbhSIAkBb");
	this.shape_4.setTransform(505.875,132.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6E3B3").s().p("Aj0CpQgKgRgGgTQgsiIAEgPQAzi3B9g8QAigSApgHQC8gnCXDCQAeB9guCBQgJAZgPAVQgyBHh2AjQgoALgvAHQi2gVg5hngAgdD9IAKgBQAsgBAsgLQAegIAegMQAsgUAXgfQAKgOAGgRQAghGAThGQACgQAAgPQAAg3gdgeQg4hBhOgaQBOAaA4BBQAdAeAAA3QAAAPgCAQQgTBGggBGQgGARgKAOQgXAfgsAUQgeAMgeAIQgsALgsABIgKABIAAAAIgBAAQgkAAghgPIAAAAIgFgDQg2gdgcglQgOgSgIgVQgcg+gKhAQgCgOAAgOQAAgcAHgcQAMgvA2gsQAegaAogLIAAgBIABAAQAbgGAeAAIAAAAIAAAAQAgAAAiAHIAAAAIADABIAIACIACAAQBLAXAyA3QAcAkAGA0QAEAhAAAiIgBAoQgFA2hDAnIhLAdIgCAAIgBABQgPADgNAAIAAAAIgBAAQgdAAgZgOIgDgCIgBAAIgBgBIgKgIQgYgSgWgjIgTgxIATAxQAWAjAYASIAKAIIABABIABAAIADACQAZAOAdAAIABAAIAAAAQANAAAPgDIABgBIACAAIBLgdQBDgnAFg2IABgoQAAgigEghQgGg0gcgkQgyg3hLgXIgCAAIgIgCIgDgBIAAAAQgigHggAAIAAAAIAAAAQgeAAgbAGIgBAAIAAABQgoALgeAaQg2AsgMAvQgHAcAAAcQAAAOACAOQAKBAAcA+QAIAVAOASQAcAlA2AdIAFADIAAAAQAhAPAkAAIABAAIAAAAgAAICeIAFAAIACgBIAUgCQAtgIAkgdQAfgYAHgeQAEgNAAgNQAAgXgLgXQgTgug3glIgBgBIgBAAQgngYg3AAIgBAAIAAAAIgUABIgGAAIgRADQgmAIgrAbQgcAnAAApIABARIgBgRQAAgpAcgnQArgbAmgIIARgDIAGAAIAUgBIAAAAIABAAQA3AAAnAYIABAAIABABQA3AlATAuQALAXAAAXQAAANgEANQgHAegfAYQgkAdgtAIIgUACIgCABIgFAAIAAAAIgBAAQgSAAgCgNIAAgBIAAABQACANASAAIABAAIAAAAgAAAB7IAVgGQAqgOAOgkQARgiAAgdQAAgRgGgPQgJgVgPgTIAAAAQgggjgngBIAAAAIgBAAIgRACIAAAAIAAAAIgDAAQgPADgPALQgIAFgIAJQgSAVAAAUQAAAHACAHQANAnAnAFIADABIAAAAIAOACIABAAIAAAAIAHgBQATgCAPgQQANgMAAgOQAAgFgCgGQgGgVgagEIAAAAIgBAAIgGgBIAAAAIAAAAQgNABgLALIgBABIAAABIgBAAIgEAFQgEAGAAAIQAAAFACAFIAAACIABAAQAEALAIAAIAAAAIAAAAIADgBIAFgCIgFACIgDABIAAAAIAAAAQgIAAgEgLIgBAAIAAgCQgCgFAAgFQAAgIAEgGIAEgFIABAAIAAgBIABgBQALgLANgBIAAAAIAAAAIAGABIABAAIAAAAQAaAEAGAVQACAGAAAFQAAAOgNAMQgPAQgTACIgHABIAAAAIgBAAIgOgCIAAAAIgDgBQgngFgNgnQgCgHAAgHQAAgUASgVQAIgJAIgFQAPgLAPgDIADAAIAAAAIAAAAIARgCIABAAIAAAAQAnABAgAjIAAAAQAPATAJAVQAGAPAAARQAAAdgRAiQgOAkgqAOIgVAGIg7gfQgxgUgPgqQgMgeAAgcQAAgUAGgUQgGAUAAAUQAAAcAMAeQAPAqAxAUIA7Afg");
	this.shape_5.setTransform(517.441,358.5562);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCB798").s().p("AD8LJIB7hhIABAEIAPBlIABAJgACfK/IiQhzICqiVIAGAlIAHAlQAHA1gHArQgCAxgJAwgADmJlQABgzgEgxQgDgkgGgkICWB/IACALIgWATIgFAEQg3Atg4ApIgUAPgAhTKiIBLg8IBlBRgAiqKYIgGgCIAGACIgGAAIAAgCIgSgFIgihaIgHgTIA7gcIAxgSIBfBQIgBAAIgEAEIAEgEIAAABIgEADIgsAvIglAcIgJAHgAgOIyIhShHIEKhdIgYAYIgBABIhJBEIgJAHIgBACIhJBAgADKGEICEgvIABAAIAbC5gACsGOIAIgDQgCADgBAEIAAABgAFOFVIn+hGIhWA6IgJAGIgbjQIJeABIAbDVgAiwi+IiCAqIgFACIgUAHIgXjJICyAIIGvAAIAKBTIAMBvgAmHqLICKBaIgOAFIhvAmgADAoRIABgDIAAgBIAThfQABgzgEgyIADAAIAXDPgACPoZIiTh0IBWhMIBhAAQAHA2gGAqQgDAzgKAxgAhfo+IAGgEIA+gyIBlBRgAjTo/IAFgBIgEABgAmEq+IAKgCIABAAIADgBIBzgWIAAAAIBTgCIArAAIBYBLQgtAmguAjIgogGIgeALIgFABgAhTrUIgGgFIAAAAIAGAFIgGgFICBAAIhAA4gAhZrZg");
	this.shape_6.setTransform(504.075,229.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#83A4AC").s().p("AC5MiIABgCIAdgLIgBAGQgFAOgJAAQgHAAgIgHgAC4MhIACgBIgBACgAC1MfIAAgCIgCgBIiwiLICwCLIACABIAAACIg2grIgWgRIhmhRIAAgBIAAABIhLA8IhcBJIgphgIAAAAIgJgVIgEgLIABg0IAjBaIAAABIASAwIAMgKIADgCIAigaIAJgHIAkgcIAtgvIAEgEIABAAIhghQIgwgpIAAgnIAAAnIhCBEIgHgaIAXgaIAyg3IBQBFIBSBHIACACIBJhAIACgCIAJgHIBJhEIABgCIAYgXIACgCIAAABIAEAGIABgBQAAgFADgCIAAgBQgEgYALAFIAPAMICgCLIAAAAIAHAqIgBAAIiWh/QAFAjAEAlQAEAxgBAzIgSBaIAUgPQA4gqA3gsIAEgEIAXgTIAAAAIAFAlIAAAAIh7BhIghAaIgQAGIgdALIgCABIgDgEIADAEgADCMEIgIAMIgFAGIgCAGIACgGIAFgGIAIgMIACgFIADgDIAZgRIgZARIgDADIgBgBIABABIgCAFgADPLdIgKAgIgBACIABgCIAKggQAPg3AAg4IAAgTQgBgfgFgcIgBgJQgHgrgNglIAjAeIgjgeIgDgQIADAQIgGgHIAGAHIgDAGIADgGQANAlAHArIABAJQAFAcABAfIAAATQAAA4gPA3gAAaJ4ICQByIAZAUIACgNIABgDQAKgwACgxQAHgrgHg1IgHglIgHglgAgCKMIAFAFIgFgFIAWgZIgWAZgAAUJzIAGAFIgGgFICkiPIAIgXIAEAWIgEgWIgIAXIikCPgAAAJgIgUASIAUgSIAAAAgAC9HAIAAgCIAAACIgBgBgAC1MdIAAAAgADEL/gAgVJyIABAAIgBAAgAgUJygADDHHIAAAAgADDHHIAAAAgADDHHgACnm4IAJgkIADgNQAKgyADgyQAGgrgHg1IgGglIgHglIgIglIAIAlIhUBKIhXBMIgWAZIAWgZICUB0IAVARIgJAkIhRhAIhlhQIg+AyIgGAEIgCACIgBAAIhOA+IhNgzIAlgMIABgBIABAAIgBAAIgmANIiKhaIgGg5IAIAGIgIgGIgBgQICLgDIhzAWIgDABIgBAAIgLACICyB/IgDABIADgBIAjAYIAngeQAvgkAsgmIhXhKIgWgSIgVgSIAAgNIAAgaIAZAVIA4AxIAGAFIAGAFIA7AzIBAg4QA8g2A6g5QAFgZAdAaQALA2AGA4QADAxgBAzIgTBgIAAAEIgDAOIgDALIgBAEIgBAJQgFAOgKAAQgGAAgIgHgAgipjIAWgSIgWASgAikreIAZgFgADMnpIAAAAIAAAEgADMnpgAmBqYgAl7qzIDNgpIAKALIAAAWIhTAQIAAAAIiLADgAj3qrIAAAAgACyr3g");
	this.shape_7.setTransform(502.9,224.9522);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BB9065").s().p("AjHMbIAAhIIgniUIgLhSIAJADIApBfIBchJICxAWIAWARIA2AqIAAABQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAABAAIAAAAIAAAAIABAAIAAAAIAAAAIABgBIAAAAIABACQAVARAIgYIABgGIAQgGIAhgaICLAQIgBgIIAJAnQAZBfABBUQAABwgCBtQiXjCi9AnQgoAHgiASQh9A8gzC3IgJlDgAgPLrQgBArgIA8IgDANIADgNQAIg8ABgrIAAgIQAAgSgGgbIgWhgIAWBgQAGAbAAASIAAAIgADcNLIgIjJgABWK9QAEBEAaA1Qgag1gEhEIgBgSQAAgPACgUIAFhbIgFBbQgCAUAAAPIABASgAjHLTIAAiEgACTJaQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgBIADACIAAAAIgBABIAAAAIAAAAIgBAAIAAAAIAAAAgACVJZgACHIjIAcAEIgBACIgCAOgAjZH2IASAGIAAArIAAgrIAGAAIArAFIgiAaIgDACIgMAKgAkJF2IBChEIAwAoIgwASIg6AXIA6gXIg8AcgAjHFsgAkmC0IAJgGIBWg6IH+BFIAAAAIiEAvIgPgMQgLgFAEAYIAAAAIgIADIAAgBIgCACIkKBdIhQhFIgyA2IgXAagAlCgbIggkLIAUgIIAFgBICCgrIHFA1IAfELgAjHnoIizgMIABAFIgFgBIgTixIBvgmIAOgFIBNAzIBOg+IABAAIACgDICpAbIBRA/QAUARAJgXIABgJIABgEIADgLIADgPIArAHIAUC+gAl5nvIgBgFICzAMgAB4q0IAYADIgDANgAjqrbIAFgBIAegKIAnAGIgnAegAC6t1QgGg4gLg2QgdgZgFAZQg6A5g8A1IiBAAIgGgEIg4gxIgZgVIAAgXIAAgWIAAgOQADgTAFgRIAEgFQAJgNARgMIAEgBIAVgNQAMgHAOgGIAZgBIAjgCIA2gDIAUAFIA0AMIAeAIQAjAaAQAZQAIAHAIABIAPCUgAA7t1IBUhKIAHAlIAGAlgAhwt1IgGgEIAGAEgAjHt1IAAgNIAVgFIAWASgAjHuZIAVASIgVAFg");
	this.shape_8.setTransform(506.4,244.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DB7A4D").s().p("ACuBZQgIgBgJgHQgPgZgkgaIgOhbIAOBbIgegHIgohiIAoBiIg0gMIgQhbIAQBbIgTgFIglhbIAlBbIg2ACIgkACIg8hMIA8BMIgZABQgOAGgLAHIgxgvIAxAvIgWANIgpgdIApAdIgDACQgRAMgJAMIgFAGIAAAAQgFgIgCgIIAAgtIAAgBIABgFQAFgOAIgSIAggfIAHgFIANgHQAXgMAVgCIAnBfIgnhfQAKgBAJABIAlACIAoAFIAcAFIAIACQAZAEAXAIIASAFIATAIQAaALATASQARAYAGAZQAGAYgNAbIg9iBIA9CBQgGAIgIAAIgCAAgAC+BRgAAFAGgAhYhXg");
	this.shape_9.setTransform(506.3197,132.5853);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_raft, new cjs.Rectangle(0,20,569.7,368.9), null);


(lib.MC_MAIN_GAME = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.FORGI_ENTER_MAIN_SCREEN();
	this.instance.setTransform(1458.15,403.2,1,1,0,0,0,493.4,71.1);

	this.islandA = new lib.MAINSCREEN_IslandA();
	this.islandA.name = "islandA";
	this.islandA.setTransform(1228.5,678.5,1,1,0,0,0,77.5,41.5);

	this.islandB = new lib.MAINSCREEN_IslandB();
	this.islandB.name = "islandB";
	this.islandB.setTransform(59.5,678.5,1,1,0,0,0,77.5,41.5);

	this.instance_1 = new lib.whiteline();
	this.instance_1.setTransform(-5,637,0.6709,1);

	this.text = new cjs.Text("רפסודה", "14px 'Heebo'");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 114;
	this.text.parent = this;
	this.text.setTransform(1208.25,580.45);

	this.text_1 = new cjs.Text("מתוך", "14px 'Heebo'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 23;
	this.text_1.lineWidth = 35;
	this.text_1.parent = this;
	this.text_1.setTransform(1210.85,606.95);

	this.instance_2 = new lib.GEZA("synched",0);
	this.instance_2.setTransform(825.05,62.65,1,1,0,0,0,433.7,62.4);

	this.instance_3 = new lib.Game_boradkey();
	this.instance_3.setTransform(1152.1,189.65,1,1,0,0,0,93,67);

	this.SubjectGame_txt = new cjs.Text("גיאוגרפיה", "14px 'Heebo'", "#FFFFFF");
	this.SubjectGame_txt.name = "SubjectGame_txt";
	this.SubjectGame_txt.textAlign = "center";
	this.SubjectGame_txt.lineHeight = 23;
	this.SubjectGame_txt.lineWidth = 129;
	this.SubjectGame_txt.parent = this;
	this.SubjectGame_txt.setTransform(77.7,113.15);

	this.instance_4 = new lib.CachedBmp_1();
	this.instance_4.setTransform(2.25,25.3,0.5,0.5);

	this.instance_5 = new lib.brown_borad();
	this.instance_5.setTransform(82.7,80.2,1,1,0,0,0,74.6,84.3);

	this.instance_6 = new lib.mc_raft();
	this.instance_6.setTransform(387.55,506.6,0.7067,0.5182,0,0,0,277.3,193.5);

	this.instance_7 = new lib.mc_raft();
	this.instance_7.setTransform(203.75,316.6,0.7067,0.5182,0,0,0,309.2,215.8);

	this.instance_8 = new lib.mc_raft();
	this.instance_8.setTransform(905.2,483.65,0.7067,0.5182,0,0,0,277.5,193.7);

	this.instance_9 = new lib.mc_raft();
	this.instance_9.setTransform(637.9,305.95,0.7067,0.5182,0,0,0,277.4,193.5);

	this.instance_10 = new lib.GameBackground();
	this.instance_10.setTransform(0,0,0.6653,0.5719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.SubjectGame_txt},{t:this.instance_3},{t:this.instance_2},{t:this.text_1},{t:this.text},{t:this.instance_1},{t:this.islandB},{t:this.islandA},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MC_MAIN_GAME, new cjs.Rectangle(-18,-4.1,1683.1,724.1), null);


(lib.MC_homePage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Game_boradkey();
	this.instance.setTransform(1133.55,566.75,1,1,0,0,0,93,67);

	this.instance_1 = new lib.HappyFrogi();
	this.instance_1.setTransform(548.1,461.75,1.0259,1.028,0,0,0,54,53.6);

	this.instance_2 = new lib.namegameH1();
	this.instance_2.setTransform(359,107);

	this.text = new cjs.Text("עזרו לי להצטרף אל החברים שלי\nפרוגי לא יודע לשחות והוא צריך לעבור בהצלחה את הנהר כדי להצטרף לחבריו", "bold 14px 'Heebo'");
	this.text.textAlign = "right";
	this.text.lineHeight = 23;
	this.text.lineWidth = 385;
	this.text.parent = this;
	this.text.setTransform(916.7,269.95);

	this.instance_3 = new lib.green_btn();
	this.instance_3.setTransform(859.55,494.5,1,1,0,0,0,270,44.5);

	this.instance_4 = new lib.Homescreenbackground();
	this.instance_4.setTransform(0,0,0.6691,0.6929);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AG6FIQgogogMg0QhgAkiBAAQiSAAhnguQhKghgVgrQiKBcjEAAQjDAAiLhcQiKhcAAiBQAAiCCKhcQCLhcDDAAQDEAACKBcQCLBcAACCQAAAhgJAeQBcggB6AAQBWAABHAQIA2gBQD9AACyAiQCzAiAAAxQAAAwizAjIgdAFIAAAJQAABSg6A5Qg5A6hSAAQhRAAg6g6g");
	this.shape.setTransform(478.675,400.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_4},{t:this.instance_3},{t:this.text},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MC_homePage, new cjs.Rectangle(0,0,1288.6,741.4), null);


(lib.FrogiSideLook_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14));

	// Layer_1
	this.instance = new lib.FrogiSideLook();

	this.instance_1 = new lib.sad_frogi();
	this.instance_1.setTransform(52.5,56.05,0.5866,0.5864,0,0,180,89.5,95.6);

	this.instance_2 = new lib.frogiwin();
	this.instance_2.setTransform(52.75,56.95,0.4362,0.5504,0,29.097,31.3941,136.2,120.2);
	this.instance_2._off = true;

	this.instance_3 = new lib.HappyFrogi();
	this.instance_3.setTransform(45.9,42.8,0.9722,1.0467,0,0,0,54,53.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({regX:111.5,regY:89.5,skewX:29.0974,skewY:31.3954,x:51.7,y:7.2},0).wait(1).to({y:2.8},0).wait(1).to({y:-1.65},0).wait(1).to({y:-6.1},0).wait(1).to({y:6.15},0).wait(1).to({y:18.4},0).wait(1).to({y:30.65},0).wait(1).to({y:42.9},0).wait(2).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-74.4,131,186.4);


(lib.FrogiAQ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.frgiraft();
	this.instance.setTransform(536.05,-43.95,0.6886,0.6808);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FrogiAQ, new cjs.Rectangle(536.1,-43.9,72.29999999999995,76.19999999999999), null);


(lib.FrogiQuestionBoxG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Layer_1
	this.instance = new lib.frogiwin();
	this.instance.setTransform(52.7,56.95,0.486,0.6177,0,29.0935,31.3914,135.4,120);

	this.instance_1 = new lib.HappyFrogi();
	this.instance_1.setTransform(60.75,33.45,1.1232,1.2809,0,0,0,54.1,53.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:111.5,regY:89.5,skewX:29.0941,skewY:31.3915,x:51.95,y:5.1},0).wait(1).to({y:0.7},0).wait(1).to({y:-3.75},0).wait(1).to({y:-8.2},0).wait(1).to({y:4.05},0).wait(1).to({y:16.3},0).wait(1).to({y:28.55},0).wait(1).to({y:40.8},0).wait(2).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.1,-84.7,146.3,202.10000000000002);


(lib.umute_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.line1();
	this.instance.setTransform(25.2,23.3,1,1,0,0,0,14.2,7.8);

	this.instance_1 = new lib.mute();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.umute_btn, new cjs.Rectangle(0,0,72,67), null);


(lib.umusic_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.line1();
	this.instance.setTransform(26.6,23.85,1,1,0,0,0,14.2,7.8);

	this.instance_1 = new lib.music();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.umusic_btn, new cjs.Rectangle(0,0,73,67), null);


(lib.music_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.music();

	this.umusic_btn = new lib.umusic_btn();
	this.umusic_btn.name = "umusic_btn";
	this.umusic_btn.setTransform(36.5,33.5,1,1,0,0,0,36.5,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.umusic_btn}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73,67);


(lib.endAnimiton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.end_animiton();
	this.instance.setTransform(1173.6,428.6,1,1,0,0,0,132.6,81.6);

	this.SubjectGame_txt = new cjs.Text("גיאוגרפיה", "14px 'Heebo'", "#FFFFFF");
	this.SubjectGame_txt.name = "SubjectGame_txt";
	this.SubjectGame_txt.textAlign = "center";
	this.SubjectGame_txt.lineHeight = 23;
	this.SubjectGame_txt.lineWidth = 129;
	this.SubjectGame_txt.parent = this;
	this.SubjectGame_txt.setTransform(76.8,113.4);

	this.instance_1 = new lib.CachedBmp_7();
	this.instance_1.setTransform(1.3,25.55,0.5,0.5);

	this.instance_2 = new lib.brown_borad();
	this.instance_2.setTransform(81.8,80.45,1,1,0,0,0,74.6,84.3);

	this.instance_3 = new lib.EndAnimitonBackground();
	this.instance_3.setTransform(0,0,0.628,0.6424);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.SubjectGame_txt},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.endAnimiton, new cjs.Rectangle(-56,-8,1343.4,739.7), null);


(lib.BetweenQA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(25).call(this.frame_25).wait(1));

	// Bubbles
	this.instance = new lib.waves();
	this.instance.setTransform(-21.2,81.9,1,1,0,0,0,206.8,122.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1).to({x:-70.2},0).wait(1).to({x:-119.25},0).wait(1).to({x:-168.25},0).wait(1).to({x:-217.3},0).wait(1).to({x:-233.45},0).wait(1).to({x:-249.65},0).wait(1).to({x:-265.8},0).wait(1).to({x:-282},0).wait(1).to({x:-335.8,y:82.25},0).wait(1).to({x:-389.65,y:82.55},0).wait(1).to({x:-433.75},0).wait(1).to({x:-477.9},0).wait(1).to({x:-552.4},0).wait(1).to({x:-626.9},0).wait(1).to({x:-651.7,y:78.95},0).wait(1).to({x:-676.5,y:75.35},0).wait(1).to({x:-721.6},0).wait(1).to({x:-766.7},0).wait(1).to({x:-807.85},0).wait(1).to({x:-862.75},0).wait(1).to({x:-917.65},0).wait(1).to({x:-972.6},0).wait(2));

	// raft
	this.instance_1 = new lib.frogiraft();
	this.instance_1.setTransform(132.6,81.7,1,1,0,0,0,132.6,81.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:81.9,x:4.9},0).wait(1).to({x:-72.15},0).wait(1).to({x:-122.35},0).wait(1).to({x:-172.6},0).wait(1).to({x:-222.85},0).wait(1).to({x:-273.1},0).wait(1).to({x:-287.75},0).wait(1).to({x:-302.4},0).wait(1).to({x:-317.05},0).wait(1).to({x:-331.75},0).wait(1).to({x:-381.9},0).wait(1).to({x:-432.1},0).wait(1).to({x:-481},0).wait(1).to({x:-529.95},0).wait(1).to({x:-608.2},0).wait(1).to({x:-686.45},0).wait(1).to({x:-704.75},0).wait(1).to({x:-723.1},0).wait(1).to({x:-769.15},0).wait(1).to({x:-815.2},0).wait(1).to({x:-842.1},0).wait(1).to({x:-897.8},0).wait(1).to({x:-953.5},0).wait(1).to({x:-1009.2},0).wait(1).to({regX:132.6,x:-958.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1179.4,-47.5,1394.2,253);


(lib.FrogiSideLook_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_65 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(65).call(this.frame_65).wait(1));

	// MAIN
	this.instance = new lib.FrogiSideLook_1();
	this.instance.setTransform(-161.7,114.35,0.7761,1,0,0,0,52.4,56);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(56));

	// raft
	this.instance_1 = new lib.mc_raft_MAIN();
	this.instance_1.setTransform(-142.3,163.5,0.5222,0.5231,0,0,0,227.6,132.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(66));

	// jumpingFrogi
	this.instance_2 = new lib.jumperfrogi();
	this.instance_2.setTransform(77.95,78.8,0.6539,0.3383,0,0,180,9.1,90.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1).to({regX:94,regY:93.5,skewX:14.9997,skewY:194.9997,x:-20.65,y:6.6},0).wait(1).to({skewX:10.7141,skewY:190.7141,x:-33.9,y:7.05},0).wait(1).to({skewX:6.4284,skewY:186.4284,x:-46.8,y:7.65},0).wait(1).to({skewX:2.1428,skewY:182.1428,x:-59.4,y:8.2},0).wait(1).to({skewX:-2.1428,skewY:177.8572,x:-90.05,y:23.15},0).wait(1).to({skewX:-6.4284,skewY:173.5716,x:-120.55,y:38.15},0).wait(1).to({skewX:-10.7141,skewY:169.2859,x:-132.25,y:52.25},0).wait(1).to({skewX:-14.9997,skewY:165.0003,x:-143.65,y:66.4},0).to({_off:true},1).wait(56));

	// frogi
	this.instance_3 = new lib.FrogiSideLook_1();
	this.instance_3.setTransform(54.5,69.25,0.8768,0.8768,0,0,0,52.5,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(65));

	// butterfly
	this.instance_4 = new lib.butterfly_open_1();
	this.instance_4.setTransform(-1081.7,-459.35,0.2696,0.367,0,103.652,140.8479);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:70.5,regY:68,scaleX:0.3505,scaleY:0.3757,skewX:103.7472,skewY:140.9416,x:-1085.25,y:-414.75},0).wait(1).to({scaleX:0.3171,scaleY:0.3843,skewX:103.7124,skewY:140.9063,x:-1043.55,y:-381.25},0).wait(1).to({scaleX:0.2836,scaleY:0.393,skewX:103.6777,skewY:140.8711,x:-1019.4,y:-374.35},0).wait(1).to({scaleX:0.2501,scaleY:0.4017,skewX:103.6429,skewY:140.8358,x:-995.35,y:-367.5},0).wait(1).to({scaleX:0.2166,scaleY:0.4104,skewX:103.6081,skewY:140.8005,x:-971.3,y:-360.65},0).wait(1).to({scaleX:0.2726,scaleY:0.419,skewX:100.5907,skewY:137.7801,x:-955,y:-348.95},0).wait(1).to({scaleX:0.3285,scaleY:0.4277,skewX:97.5734,skewY:134.7598,x:-938.3,y:-336.85},0).wait(1).to({scaleX:0.3844,scaleY:0.4364,skewX:94.556,skewY:131.7394,x:-921.2,y:-324.45},0).wait(1).to({scaleX:0.4404,scaleY:0.4451,skewX:91.5387,skewY:128.7191,x:-903.6,y:-311.75},0).wait(1).to({scaleX:0.4963,scaleY:0.4537,skewX:88.5213,skewY:125.6987,x:-885.6,y:-298.85},0).wait(1).to({scaleX:0.4273,scaleY:0.4624,skewX:81.0308,skewY:118.2081,x:-859.6,y:-287.65},0).wait(1).to({scaleX:0.3584,scaleY:0.4711,skewX:73.5402,skewY:110.7175,x:-833.9,y:-277.45},0).wait(1).to({scaleX:0.2894,scaleY:0.4797,skewX:66.0497,skewY:103.2268,x:-808.65,y:-268.15},0).wait(1).to({scaleX:0.2204,scaleY:0.4884,skewX:58.5591,skewY:95.7362,x:-784.1,y:-259.6},0).wait(1).to({scaleX:0.2294,scaleY:0.4971,skewX:54.7527,skewY:91.9304,x:-761.75,y:-277.1},0).wait(1).to({scaleX:0.2384,scaleY:0.5057,skewX:50.9463,skewY:88.1247,x:-739.2,y:-294.7},0).wait(1).to({scaleX:0.2474,scaleY:0.5144,skewX:47.1399,skewY:84.3189,x:-716.4,y:-312.4},0).wait(1).to({scaleX:0.2564,scaleY:0.5231,skewX:43.3335,skewY:80.5131,x:-693.35,y:-330.25},0).wait(1).to({scaleX:0.2654,scaleY:0.514,skewX:42.8222,skewY:80.0019,x:-674.05,y:-343.45},0).wait(1).to({scaleX:0.2744,scaleY:0.5049,skewX:42.311,skewY:79.4907,x:-654.75,y:-356.75},0).wait(1).to({scaleX:0.2618,scaleY:0.4958,skewX:51.4501,skewY:88.6294,x:-624.7,y:-372.9},0).wait(1).to({scaleX:0.2491,scaleY:0.4867,skewX:60.5892,skewY:97.768,x:-594.9,y:-383.95},0).wait(1).to({scaleX:0.2364,scaleY:0.4776,skewX:69.7284,skewY:106.9067,x:-563.9,y:-395.7},0).wait(1).to({scaleX:0.2238,scaleY:0.4685,skewX:78.8675,skewY:116.0453,x:-531.7,y:-407.85},0).wait(1).to({scaleX:0.2111,scaleY:0.4594,skewX:88.0066,skewY:125.184,x:-498.2,y:-420.2},0).wait(1).to({scaleX:0.2498,scaleY:0.4503,skewX:90.178,skewY:127.3555,x:-482.25,y:-415.65},0).wait(1).to({scaleX:0.2886,scaleY:0.4412,skewX:92.3493,skewY:129.5269,x:-466.35,y:-411.2},0).wait(1).to({scaleX:0.3273,scaleY:0.432,skewX:94.5207,skewY:131.6984,x:-450.6,y:-406.8},0).wait(1).to({scaleX:0.3661,scaleY:0.4229,skewX:96.6921,skewY:133.8698,x:-434.9,y:-402.65},0).wait(1).to({scaleX:0.4049,scaleY:0.4138,skewX:98.8635,skewY:136.0413,x:-419.3,y:-398.55},0).wait(1).to({scaleX:0.4436,scaleY:0.4047,skewX:101.0348,skewY:138.2127,x:-403.75,y:-394.5},0).wait(1).to({scaleX:0.4824,scaleY:0.3956,skewX:103.2062,skewY:140.3842,x:-388.35,y:-390.7},0).wait(1).to({scaleX:0.4521,skewX:105.6836,skewY:142.8618,x:-364.5,y:-382.05},0).wait(1).to({scaleX:0.4219,skewX:108.1611,skewY:145.3393,x:-340.45,y:-373.35},0).wait(1).to({scaleX:0.3917,skewX:110.6385,skewY:147.8169,x:-316.25,y:-364.5},0).wait(1).to({scaleX:0.3615,skewX:113.1159,skewY:150.2945,x:-291.85,y:-355.4},0).wait(1).to({scaleX:0.3312,skewX:115.5934,skewY:152.772,x:-267.2,y:-346.2},0).wait(1).to({scaleX:0.301,skewX:118.0708,skewY:155.2496,x:-242.45,y:-336.9},0).wait(1).to({scaleX:0.3046,skewX:110.2953,skewY:148.0976,x:-229.1,y:-329.45},0).wait(1).to({scaleX:0.3081,skewX:102.5197,skewY:140.9457,x:-214.9,y:-321.9},0).wait(1).to({scaleX:0.3117,skewX:94.7442,skewY:133.7937,x:-199.95,y:-314.4},0).wait(1).to({scaleX:0.3153,skewX:86.9686,skewY:126.6417,x:-184.25,y:-307.1},0).wait(1).to({scaleX:0.3188,skewX:79.1931,skewY:119.4898,x:-167.75,y:-300.05},0).wait(1).to({scaleX:0.3224,skewX:79.017,skewY:119.9373,x:-154.25,y:-298.15},0).wait(1).to({scaleX:0.3259,skewX:78.841,skewY:120.3848,x:-140.65,y:-296.25},0).wait(1).to({scaleX:0.3295,skewX:78.6649,skewY:120.8323,x:-127.15,y:-294.3},0).wait(1).to({scaleX:0.333,skewX:78.4889,skewY:121.2799,x:-113.55,y:-292.45},0).wait(1).to({scaleX:0.3366,skewX:78.3128,skewY:121.7274,x:-100.05,y:-290.5},0).wait(1).to({scaleX:0.341,skewX:67.4624,skewY:110.877,x:-76.2,y:-297.85},0).wait(1).to({scaleX:0.3455,skewX:56.6121,skewY:100.0266,x:-51.15,y:-306.25},0).wait(1).to({scaleX:0.3499,skewX:45.7617,skewY:89.1762,x:-24.95,y:-316.1},0).wait(1).to({scaleX:0.3544,skewX:34.9113,skewY:78.3257,x:1.95,y:-327.45},0).wait(1).to({scaleX:0.3588,skewX:24.061,skewY:67.4753,x:29.4,y:-340.5},0).wait(1).to({scaleX:0.3632,skewX:13.2106,skewY:56.6249,x:57,y:-355.25},0).wait(1).to({scaleX:0.3677,skewX:20.6932,skewY:64.1074,x:72.7,y:-359.05},0).wait(1).to({scaleX:0.3721,skewX:28.1757,skewY:71.5899,x:88.4,y:-363.6},0).wait(1).to({scaleX:0.3765,skewX:35.6583,skewY:79.0724,x:104,y:-368.95},0).wait(1).to({scaleX:0.381,skewX:43.1408,skewY:86.5549,x:119.75,y:-375.1},0).wait(1).to({skewX:35.641,skewY:79.0551,x:142.75,y:-389.7},0).wait(1).to({skewX:28.1412,skewY:71.5553,x:165.85,y:-405.1},0).wait(1).to({skewX:20.6414,skewY:64.0555,x:189.05,y:-421.4},0).wait(1).to({skewX:13.1416,skewY:56.5557,x:212.25,y:-438.5},0).wait(1).to({x:229,y:-454.9},0).wait(1).to({x:245.75,y:-471.3},0).wait(1).to({x:262.5,y:-487.7},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1159.7,-536.2,1443.1,769.1);


(lib.questionBox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this; //הגדרת הבמה וכל הרכיבים הנמצאים בה
		self.stop;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AT7qnIAAVPMgn2AAAIAA1Pg");
	this.shape.setTransform(127.55,68.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Az7KoIAA1PMAn2AAAIAAVPg");
	this.shape_1.setTransform(127.55,68.025);

	this.instance = new lib.FrogiQuestionBoxR();
	this.instance.setTransform(344.15,121.5,0.7095,0.7001,0,0,0,52.6,56.2);

	this.instance_1 = new lib.FrogiQuestionBoxG();
	this.instance_1.setTransform(279.25,147.65,0.7189,0.6384,0,0,0,52.6,56.3);

	this.instance_2 = new lib.ICON_V();
	this.instance_2.setTransform(132,-23,1,1,0,0,0,24,24);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF00").ss(3,1,1).p("Az7qnMAn2AAAIAAVPMgn2AAAg");
	this.shape_2.setTransform(127.55,68.025);

	this.instance_3 = new lib.sad_frogi();
	this.instance_3.setTransform(288.55,139.7,0.4162,0.4104,0,0,180,89.5,95.7);

	this.instance_4 = new lib.ICON_X();
	this.instance_4.setTransform(133,-24,1,1,0,0,0,22.5,22.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(3,1,1).p("Az7qnMAn2AAAIAAVPMgn2AAAg");
	this.shape_3.setTransform(127.55,68.025);

	this.instance_5 = new lib.FrogiQuestionBoxY();
	this.instance_5.setTransform(288.75,139.75,0.7096,0.7,0,0,0,52.8,56.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFF8C5").ss(3,1,1).p("Az7qnMAn2AAAIAAVPMgn2AAAg");
	this.shape_4.setTransform(127.55,68.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2},{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{x:344.15,y:121.5}}]},1).to({state:[{t:this.shape_1},{t:this.shape_3},{t:this.instance_4},{t:this.instance,p:{x:288.6,y:139.75}},{t:this.instance_3}]},1).to({state:[{t:this.shape_1},{t:this.shape_4},{t:this.instance_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-47,332.9,229.6);


(lib.mute_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.mute();

	this.umute_btn = new lib.umute_btn();
	this.umute_btn.name = "umute_btn";
	this.umute_btn.setTransform(36,33.5,1,1,0,0,0,36,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.umute_btn}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72,67);


(lib.Q_Animiton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bankofariver();
	this.instance.setTransform(137,637,1,1,0,0,180);

	this.instance_1 = new lib.bankofariver();
	this.instance_1.setTransform(1152,637);

	this.instance_2 = new lib.BetweenQA();
	this.instance_2.setTransform(1227,405.55,0.9455,0.8871,0,0,0,132.6,81.8);

	this.SubjectGame_txt = new cjs.Text("גיאוגרפיה", "normal 400 14px 'Heebo'", "#FFFFFF");
	this.SubjectGame_txt.name = "SubjectGame_txt";
	this.SubjectGame_txt.textAlign = "center";
	this.SubjectGame_txt.lineHeight = 20;
	this.SubjectGame_txt.lineWidth = 129;
	this.SubjectGame_txt.parent = this;
	this.SubjectGame_txt.setTransform(78.25,114.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.SubjectGame_txt);
	}

	this.instance_3 = new lib.CachedBmp_8();
	this.instance_3.setTransform(2.8,26.4,0.5,0.5);

	this.instance_4 = new lib.brown_borad();
	this.instance_4.setTransform(83.25,81.3,1,1,0,0,0,74.6,84.3);

	this.instance_5 = new lib.GameBackground();
	this.instance_5.setTransform(0,0,0.6653,0.5719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.SubjectGame_txt},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Q_Animiton, new cjs.Rectangle(-18,-3,1325,723), null);


(lib.MC_Open = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.MC_animation01 = new lib.FrogiSideLook_2();
	this.MC_animation01.name = "MC_animation01";
	this.MC_animation01.setTransform(1004.25,410.3,0.8571,0.9182);

	this.instance = new lib.OpenanimitonBackground();
	this.instance.setTransform(0,0,0.6695,0.6851);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.MC_animation01}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MC_Open, new cjs.Rectangle(0,-22.2,1287.4,753.9000000000001), null);


// stage content:
(lib.GAME = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		var self = this; //הגדרת הבמה וכל הרכיבים הנמצאים בה
		self.stop(); //עצירת כל הפריימים
		
		//הגדרת מוזיקה וצלילים בספרייה מוכנים לשליפה
		createjs.Sound.registerSound("/sounds/gameSound.mp3", "GameSound"); //פנייה לסאונד משחק
		createjs.Sound.registerSound("/sounds/success.mp3", "Success"); //פנייה לסאונד הצלחה
		createjs.Sound.registerSound("/sounds/Failure.mp3", "Failure"); //פנייה לסאונד כישלון
		createjs.Sound.registerSound("/sounds/Endofgame.mp3", "Endofgame"); //פנייה לסאונד סיום משחק
		
		//עצירת אפקטים קוליים
		createjs.Sound.stop("Success"); //עצירת סאונד הצלחה
		createjs.Sound.stop("Failure"); //עצירת סאונד אי הצלחה
		createjs.Sound.stop("Endofgame"); //עצירת סאונד סיום
		
		//הגדרת המשתנים במשחק
		var myChoice = 0; //משתנה המכיל את הבחירה של נושא המשחק
		var myGame; //משתנה המכיל את המערכים הדו-ממדיים של המשחק
		var positionX; //X-משתנה שמכיל מערך של ציר ה
		var positionY; //Yמשתנה שמכיל מערך של ציר ה
		var randomPositionX; //באופן רנדומלי Xמשתנה שמסדר את המערך של ציר ה 
		var randomPositionY; //באופן רנדומלי Yמשתנה שמסדר את המערך של ציר ה
		var question; //משתנה המכיל הפניה לשאלה באופן רנדומלי
		var counter; //משתנה המכיל את מספר השאלות שיופיעו בסך הכל במשחק
		sumScore = []; //מערך ביניים מכיל ניקוד יחסי של שאלות
		var grade = 0; //ציון סופי
		var totalQuestions; //סך השאלות במשחק
		var setTime; //משתנה שיכיל את הגדרת הזמן עבור כל שאלה
		var timeCounter = 30; //משתנה המכיל את השניות לכל שאלה
		var sumErrors = 0; //משתנה המכיל את סך כל השגיאות
		var setGlobalTime; //משתנה שיכיל את הגדרת הזמן עבור כל המשחק
		var globalTimeCounter = 0; //משתנה המכיל את ספירת הזמן בשניות לכל המשחק
		var questionCounter = 1; //משתנה המכיל את מספר השאלה הנוכחי
		var countImg = 0; //סופר את מספר התמונות שמופיעות במסיחים
		imgName = []; //שומר את שמות התמונות שמופיעות במסיחים במערך
		var timer_txt = new createjs.Text(); //הגדרת משתנה המכיל את מספר השניות שנותרו למשחק כתיבת טקסט
		var music = "on"; //מחוון הפעלה של צילים ומוזיקה
		var moveX;
		var tempX = 1162;
		var frogiProgress = new lib.frogiProgress();
		var connect = "";
		var loseFlag = "false";
		
		//הכנה ליצירה של אובייקטים מיוחדים
		var sound_btn = new lib.mute_btn();
		sound_btn.name = "sound_btn";
		sound_btn.x = 169.05;
		sound_btn.y = 39;
		
		var music_btn = new lib.music_btn();
		music_btn.name = "music_btn";
		music_btn.x = 215.65;
		music_btn.y = 39.05;
		
		var pause_btn = new lib.stopbutton();
		pause_btn.name = "pause_btn";
		pause_btn.x = 264.65;
		pause_btn.y = 39.05;
		
		var BTN_CHECK = new lib.main_btn;
		BTN_CHECK.name = "BTN_CHECK";
		BTN_CHECK.x = 70;
		BTN_CHECK.y = 450;
		
		var BTN_CHECKACTIVE = new lib.btn_check_active;
		BTN_CHECKACTIVE.name = "BTN_CHECKACTIVE";
		BTN_CHECKACTIVE.x = 70;
		BTN_CHECKACTIVE.y = 450;
		
		var BTN_CONTINUEACTIVE = new lib.btn_continue_new;
		BTN_CONTINUEACTIVE.name = "BTN_CONTINUEACTIVE";
		BTN_CONTINUEACTIVE.x = 70;
		BTN_CONTINUEACTIVE.y = 450;
		
		var BTN_CONTINUEACTIVE2 = new lib.btn_continue_new;
		BTN_CONTINUEACTIVE2.name = "BTN_CONTINUEACTIVE2";
		BTN_CONTINUEACTIVE2.x = 70;
		BTN_CONTINUEACTIVE2.y = 450;
		
		//פונקציה שיוצרת מיקום מסיחים
		function createPositionXY() {
			positionX = [46, 503, 770, 253];
			positionY = [193, 195, 382, 395];
		}
		
		homePage(); //קריאה לפונקציה דף הבית
		
		function homePage() { //פונקציה דף הבית
			createjs.Sound.play("GameSound", { //הפעלת מוזיקת פתיחה
				interrupt: createjs.Sound.INTERRUPT_ANY,
				loop: -1
			});
		
			var homePage = new lib.MC_homePage();
			stage.addChild(homePage);
			homePage.name = "homePage";
		
			var startbtn = new lib.startButton();
			stage.addChild(startbtn);
			startbtn.name = "startbtn";
			startbtn.x = 464.25;
			startbtn.y = 517.7;
		
			startbtn.gotoAndStop(0); //שנה צבע כפתור התחל כי לא נבחר עדיין נושא משחק
		
			//יצירת אובייקטים עבור שמע, צלילים ועצור משחק
			stage.addChild(sound_btn);
			sound_btn.addEventListener("click", ClickMuteSound);
			stage.addChild(music_btn);
		
			//הגדרת תפריט בחירת נושא המשחק
			var forCombo = new lib.forCombo(); //יצירת תפריט בחירת נושא על הבמה
			forCombo.name = "forCombo";
			forCombo.x = 705.8; //הגדרת מיקום התפריט
			forCombo.y = 380.45; //הגדרת מיקום התפריט
			stage.addChild(forCombo); //הוספת התפריט לבמה
			$("#dom_overlay_container").on("change", "#mycb", mycb_change); //הגדרת התנהגות תפריט בחירת נושא המשח
		}
		
		function mycb_change(evt) { //פונקציה המגדירה את התנהגות תפריט המשחק
			myChoice = evt.currentTarget.value; //ציון הנושא שהשחקן בחר למשחק
			if (myChoice == 0) { //אם לא נבחר נושא
				stage.getChildByName("startbtn").removeEventListener("click", fl_ClickToPosition); //הסרת מאזין לכפתור התחלת משחק
				stage.getChildByName("startbtn").gotoAndStop(0); //אם השחקן לא בחר נושא משחק כפתור התחל לא פעיל
			} else { //אם נבחר נושא
				stage.getChildByName("startbtn").addEventListener("click", fl_ClickToPosition); //הוספת מאזין לכפתור התחלת משחק
				stage.getChildByName("startbtn").gotoAndStop(1); //אם השחקן בחר נושא משחק כפתור התחל פעיל
			}
		}
		
		function fl_ClickToPosition() { //פונקציה המגדירה את ההפניה לסוג נושא המשק
			stage.removeChild(stage.getChildByName("forCombo")); //לאחר בחירה בנושא המשחק הסרת תפריט הבחירה מהבמה
			stage.removeChild(stage.getChildByName("homePage")); //לאחר בחירה בנושא המשחק הסרת עמוד הבית מהבמה
			stage.removeChild(stage.getChildByName("startbtn")); //לאחר בחירה בנושא המשחק הסרת עמוד הבית מהבמה
		
			if (myChoice == 1) { //אם נושא המשחק הוא גיאוגרפיה
				firstGameFunc(); //גש למשחק גיאוגרפיה
			} else if (myChoice == 2) { //אם נושא המשחק הוא חשבון
				createjs.Sound.stop("HomeScreenSound");
				secondGameFunc(); //גש למשחק חשבון
			}
		}
		
		function firstGameFunc() { //פונקציה שיוצרת את מערך המסיחים למשחק הראשון
			counter = 10;
			totalQuestions = 10;
			moveX = ((941.4) / totalQuestions);
			myGame = [
				[
					["?מי הוא האוקיינוס הגדול ביותר המחבר את יבשות אמריקה עם אסיה ואוסטרליה", 1, "SHOW"],
					["האוקיינוס האטלנטי", "true"],
					["האוקיינוס השקט", "false"],
					["האוקיינוס ההודי", "false"],
					[lib.img_1, "false"]
				],
				[
					["בגבול הצפוני של ישראל נמצאת המדינה", 1, "SHOW"],
					["לבנון", "true"],
					["ירדן", "false"],
					["מצרים", "false"],
					["איטליה", "false"]
				],
				[
					["מדינת ישראל נמצאת ביבשת", 1, "SHOW"],
					["אסיה", "true"],
					["אוסטרליה", "false"],
					["ארצות הברית", "false"],
					["אירופה", "false"]
				],
				[
					["?מיהו ההר הגבוה ביותר בישראל", 1, "SHOW"],
					["הר החרמון", "true"],
					[lib.img_2, "false"],
					["הר גרזים", "false"],
					["הר ההימלאיה", "false"]
				],
				[
					["?מהו שמו של נחל קטן הנשפך אל נחל גדול יותר או לתוך נהר", 1, "SHOW"],
					["יובל", "true"],
					["נהר", "false"],
					["נחל", "false"],
					["פלג", "false"]
				],
				[
					["?מהו שטח מים, לרוב טבעי, המוקף יבשה ואינו מחובר לים או לאוקיינוס", 1, "SHOW"],
					["ימה", "true"],
					["גבעה", "false"],
					[lib.img_3, "false"],
					["מדבר", "false"]
				],
				[
					["לנוף הטבעי של מישור החוף התיכון והדרומי  מספר מאפיינים בולטים. בחרו מבין  המאפיינים הבאים את המאפיין שאינו מתאים למישור החוף התיכון והדרומי", 1, "SHOW"],
					["שטחי המישור ושטחי הגבעות מסודרים לאורכו של מישור החוף במעין ארבע רצועות של נוף:  שטחי החולות, גבעות הכורכר, גבעות החול האדום ורצועת המרזבה", "true"],
					["זהו אזור ארוך וצר שהולך ומתרחב מעט כלפי דרום", "false"],
					["קו החוף אינו ישר ויש בו מפרצים גדולים", "false"],
					["צורות הנוף העיקריות הן שטחי מישור וגבעות נמוכות שגובהם אינו עולה בדרך כלל על  מאה מטרים", "false"]
				],
				[
					["?איזה אזור לא נמצא בכלל בצפון הארץ", 1, "SHOW"],
					["השרון", "true"],
					["הגליל העליון", "false"],
					["הגליל התחתון", "false"],
					["עמק יזרעאל", "false"]
				],
				[
					["?מים טריטוריאליים הם", 1, "SHOW"],
					["נחשב כשטח תחת ריבונות של אותה המדינה, אך אפשרי המעבר בו לספינות זרות", "true"],
					["ים פתוח הוא שטח מים שאינו שייך לאף מדינה", "false"],
					["המים שבין קו הגבול הימי של המדינה לבין קו החוף שלה", "false"],
					["אף תשובה אינה נכונה", "false"]
				],
				[
					["?מי מבין המקומות בישראל נחשב פלא עולמי", 1, "SHOW"],
					["ים המלח", "true"],
					["הכותל המערבי", "false"],
					["הסחנה", "false"],
					["כל התשובות נכונות", "false"]
				]
			];
			startGame(); //הפעלת משחק ומעבר לקוד ראשי
		}
		
		function secondGameFunc() { //פונקציה שיוצרת את מערך המסיחים למשחק השני
			counter = 20;
			totalQuestions = 20;
			moveX = ((941.4) / totalQuestions);	
			myGame = [
				[
					["3 + 0 = [      ]", 1, "SHOW"],
					[lib.num_0, "false"],
					[lib.num_3, "true"]
				],
				[
					["6 + 0 = [      ]", 1, "SHOW"],
					[lib.num_1, "false"],
					[lib.num_6, "true"],
					[lib.num_9, "false"]
				],
				[
					["?מהי הכפולה של 5", 1, "SHOW"],
					["80", "true"],
					["59", "false"],
					["74", "false"],
					["21", "false"]
				],
				[
					["?אני קטן ב- 4 מ - 755 מי אני", 1, "SHOW"],
					["751", "true"],
					["754", "false"]
				],
				[
					["? = מהו ערכה של האות הבאה פ ", 1, "SHOW"],
					["30", "false"],
					["80", "true"],
					["אף תשובה אינה נכונה", "false"]
				],
				[
					["?לרון היו 16 שקלים. הוא קיבל עוד 2 שקלים.כמה שקלים יש לרון", 1, "SHOW"],
					["18", "true"],
					["14", "false"],
					["27", "false"],
					["21", "false"]
				],
				[
					["3 + 6 = [      ]", 1, "SHOW"],
					[lib.num_9, "true"],
					["10", "false"]
				],
				[
					["?אמא קנתה לרינת 15 מסטיקים. רינת קיבלה עוד 3 מסטיקים מחברותיה.כמה מסטיקים יש לרינת", 1, "SHOW"],
					["16", "false"],
					["14", "false"],
					["18", "true"]
				],
				[
					["?לדני יש 5 קלפים.הוא הרוויח 4 קלפים נוספים.כמה קלפים יש לדני", 1, "SHOW"],
					["9", "true"],
					["10", "false"],
					["4", "false"],
					["6", "false"]
				],
				[
					["4 + 4 = [      ]", 1, "SHOW"],
					["8", "true"],
					["10", "false"]
				],
				[
					["0 + 0 = [      ]", 1, "SHOW"],
					["0", "true"],
					["1", "false"],
					["8", "false"]
				],
				[
					["?לשלי יש 9 בובות. היא קיבלה עוד 3 בובות ליום הולדתה.כמה בובות יש לשלי", 1, "SHOW"],
		
					["12", "true"],
					["8", "false"],
					["13", "false"],
				],
				[
					["?אמא אפתה 18 עוגיות. רון אכל 5 עוגיות.כמה עוגיות נשארו", 1, "SHOW"],
					["17", "false"],
					["13", "true"],
					["18", "false"],
					["10", "false"]
				],
				[
					["?לרוני היה  6 שקלים. רוני רכש מסטיק ב2 שקלים.כמה שקלים נשאר לרוני", 1, "SHOW"],
					["2", "false"],
					["4", "true"]
				],
				[
					["0 + [      ] = 11", 1, "SHOW"],
					["7", "false"],
					["4", "false"],
					["11", "true"]
				],
				[
					["[      ] - 6 = 11", 1, "SHOW"],
					["17", "true"],
					["16", "false"],
					["15", "false"],
					["12", "false"]
				],
				[
					["6 X [      ] = 18", 1, "SHOW"],
					["3", "true"],
					["12", "false"]
				],
				[
					["[      ] - 2 = 24", 1, "SHOW"],
					["24", "false"],
					["26", "true"],
					["12", "false"]
				],
				[
					["5 X [      ] = 15", 1, "SHOW"],
					[lib.num_3, "true"],
					[lib.num_7, "false"],
					[lib.num_2, "false"],
					[lib.num_4, "false"]
				],
				[
					["2 X [      ] = 0", 1, "SHOW"],
					["2", "false"],
					["0", "true"],
		
				]
			];
		
			startGame(); //הפעלת משחק ומעבר לקוד ראשי
		}
		
		function startGame() { //פונקציה פותחת
			setGlobalTime = setInterval(globalTimer, 1000); //הפעלת ספירת זמן כל שניה עבור כל המשחק
			var firstAnimation = new lib.MC_Open(); // קורא לפנוקצית אנימצייה ראשונה בין מסך פתיחה למשחק
			stage.addChild(firstAnimation);
			setTimeout(function () {
				stage.removeChild(firstAnimation);
				nextQuestion();
			}, 4000); // זמן במילי שניות
		}
		
		function nextQuestion() { //פונקציה שיוצרת את השאלה והמסיחים על הבמה
		
			createjs.Sound.stop("GameSound"); //הפעלה או השתקה של מתג מוזיקה ראשי
			if (music == "on") {
				createjs.Sound.play("GameSound", {
					interrupt: createjs.Sound.INTERRUPT_ANY,
					loop: -1
				});
			}
		
			var mainGame = new lib.MC_MAIN_GAME(); //קריאה לאובייקט המכיל את המסך המרכזי לטעינה
			stage.addChild(mainGame); //טעינת מסך מרכזי על הבמה
		
			setTimeout(function () {
				var FROGI_START_NEW = new lib.FROGI_START_NEW();
				FROGI_START_NEW.name = "FROGI_START_NEW";
				FROGI_START_NEW.x = 1153.5;
				FROGI_START_NEW.y = 330.3;
				stage.addChild(FROGI_START_NEW);
				FROGI_START_NEW.gotoAndStop(0);
			}, 550); // זמן במילי שניות
		
			frogiProgress.name = "frogiProgress"; //יצירה של מד התקדמות על הבמה
			stage.addChild(frogiProgress);
			frogiProgress.x = tempX;
			frogiProgress.y = 557;
		
			stage.addChild(sound_btn); //יצירת כפתורים
			stage.addChild(music_btn);
			stage.addChild(pause_btn);
		
			stage.getChildByName("pause_btn").addEventListener("click", pause); //הוסף מאזין לכפתור השהייה על הבמה
			stage.getChildByName("sound_btn").addEventListener("click", ClickMuteSound); //הוסף מאזין לכפתור השהייה על הבמה
		
			//יצירת אובייקט על הבמה שמכיל את מספר השאלה הנוכחי
			var currentQuestion = new createjs.Text(); //יצירת תיבת טקסט
			currentQuestion.text = questionCounter; //הגדרת מספר שאלה נוכחי בתיבת טקסט
			currentQuestion.font = "14px Heebo"; //הגדרת גופן
			currentQuestion.textAlign = "center"; //הגדרת מיקום טקסט
			var numberOne = new lib.questionNumber(); //יצירת אובייקט
			stage.addChild(numberOne); //הוספת אובייקט על הבמה
			numberOne.addChild(currentQuestion); //הגדרת תיבת טקסט בתוך אובייקט
			numberOne.x = 1236; //מיקום X
			numberOne.y = 608; //מיקום Y
			numberOne.name = "numberOne"; //שם לאובייקט
		
			//יצירת אובייקט על הבמה שמכיל את מספר השאלות במשחק
			var totalQuestion = new createjs.Text(); //יצירת תיבת טקסט
			totalQuestion.text = totalQuestions; //הגדרת מספר שאלה נוכחי בתיבת טקסט
			totalQuestion.font = "14px Heebo"; //הגדרת גופן
			totalQuestion.textAlign = "center"; //יצירת אובייקט
			var numberTwo = new lib.questionNumber(); //הגדרת תיבת טקסט בתוך אובייקט
			stage.addChild(numberTwo); //הוספת אובייקט על הבמה
			numberTwo.addChild(totalQuestion); //הגדרת תיבת טקסט בתוך אובייקט
			numberTwo.x = 1180; //מיקום X
			numberTwo.y = 608; //מיקום Y
			numberTwo.name = "numberTwo"; //שם לאובייקט
		
			countImg = 0; //איפוס מספר תמונות על הבמה
			while (imgName.length > 0) { //כל עוד מערך השמות של התמונות גדול מאפס
				imgName.splice(0, 1); //מחק את השם ש התמונה ממיקום אפס במערך
			}
		
			var clock = new lib.clock_animiton(); // הגדרת משתנה שיכיל את הסימבול של השעון
			stage.addChild(clock); // יצירת אובייקט של שעון על הבמה
			clock.x = 190; // קביעת מיקום X
			clock.y = 560; // קביעת מיקום Y
		
			stage.addChild(timer_txt); // יצירת גרפיקה של טקסט על הבמה
			timer_txt.x = 61; // קביעת מיקום X
			timer_txt.y = 590; // קביעת מיקום Y
			timer_txt.color = "#000000"; // קביעת צבע טקסט 
			timer_txt.font = "14px Heebo Regular"; // קביעת גודל פונט וסוג
		
			createPositionXY(); //צור את מערך המיקומים מחדש
			randomQuestion(); //צור מספר שאלה רנדומלי
			while (myGame[question][0][2] == "NOSHOW") { //בדוק האם המספר הרנדומלי מחזיר שאלה שלא אמורה להופיע יותר
				randomQuestion(); //צור מספר שאלה רנדומלי
			}
		
			var questionTitel = new createjs.Text(); //צור כותרת לשאלה
			questionTitel.text = myGame[question][0][0]; //צור כותרת לשאלה עם תוכן
			questionTitel.name = "questionTitel"; //שם לכותרת
		
			questionTitel.font = "14px Heebo"; //עיצוב גזע שאלה
			questionTitel.textAlign = "right";
			questionTitel.x = 1230;
			questionTitel.y = 70;
			questionTitel.lineWidth = 720;
			questionTitel.lineHeight = 30;
		
			connect = "";
			stage.addChild(BTN_CHECK);
		
			stage.addChild(questionTitel); //הוספת גזע שאלה לבמה
		
			for (i = 1; i < myGame[question].length; i++) { //לולאה שיוצרת את כל המסיחים על הבמה כולל ההתנהגות שלהם
				randomPosition(); //צור מיקומים רנדומליים
				var box = new lib.questionBox(); //צור מלבנים לקראת טעינה
				box.x = randomPositionX; //מקם מלבן במיקום רנדומלי X
				box.y = randomPositionY; //מקם מלבן במיקום רנדומלי Y
				box.name = "question" + i; //שם המלבן
				stage.addChild(box); //הוסף מלבן לבמה
				box.addEventListener("click", connection); //הוסף מאזין למלבן
				box.gotoAndStop(0); //הפסק אנימציות מלבן
				//בדוק האם מדובר במחרוזת או תמונה
				var temp = myGame[question][i][0].toString();
				var let = temp.charAt(0);
		
				if (let == "f") { //אם מדובר בתמונה
					var img = new(myGame[question][i][0])(); //הגדר משתנה תמונה
					box.addChild(img); //מקם תמונה על מלבן
					img.name = "img" + i;
					var mag = new lib.magnify(); //צור מהספרייה אובייקט זכוכית מגדלת
					mag.name = "magnify" + i; //תן שם לאובייקט
					stage.addChild(mag); //הוסף את האובייקט על הבמה
					mag.x = randomPositionX; //הגדר מיקום X
					mag.y = randomPositionY; //הגדר מיקום Y
					mag.addEventListener("click", showBIG); //הוסף מאזין בעת לחיצה על אובייקט
					countImg = countImg + 1; //הוסף מספר נוסף לספירת תמונות על הבמה
					imgName.push(mag.name); //הוסף את שם התמונה למערך שמות תמונות
		
				} else { //אם מדובר במחרוזת
					var string = new createjs.Text(); //הגדר משתנה טקסט
					string.text = myGame[question][i][0]; //הגדר תוכן במשתנה טקסט
					box.addChild(string); //מקם טקסט על מלבן
		
					string.font = "15px Heebo"; //הגדרות עיצוב
					string.textAlign = "right";
					string.x = 247;
					string.y = 15;
					string.lineWidth = 247;
					string.lineHeight = 25;
				}
			}
		
			timeCounter = 30; //אפס את הזמן המוגדר לכל שאלה
			setTime = setInterval(timer, 1000); //הפעלת זמן פר שאלה
		}
		
		function connection(event) {
			stage.getChildByName("FROGI_START_NEW").gotoAndStop(1);
			changeColor();
			event.currentTarget.gotoAndStop(3);
			stage.removeChild(stage.getChildByName("BTN_CHECK"));
			connect = event.currentTarget.name.slice(-1);
			stage.addChild(BTN_CHECKACTIVE);
			BTN_CHECKACTIVE.addEventListener("click", checkAnswer); //
		}
		
		function changeColor() {
			for (i = 1; i < myGame[question].length; i++) {
				stage.getChildByName("question" + i).gotoAndStop(0);
			}
		}
		
		function checkAnswer() { //פונקציה שמבצעת בדיקה האם הבחירה במסיח נכונה
			clearInterval(setTime); //אפס את הגדרת הזמן לכל שאלה
			removeEventListener(); //בטל את כל המאזינים
			var boxNum = connect; //שלוף את המספר של שם המלבן
			var boxAnswer = myGame[question][boxNum][1]; //בדוק האם התשובה היא נכונה
			createjs.Sound.stop("GameSound");
		
			if (boxAnswer == "true") { //אם התשובה נכונה
				if (music == "on") {
					createjs.Sound.play("Success"); //הפעלת סאונד הצלחה	
				}
				var countRespone = myGame[question][0][1]; //שלוף את מספר ניסיונות המענה לשאלה
				var countGrade = 100 / (totalQuestions * countRespone); //בצע חישוב של נוסחת ציון ביניים
				sumScore.push(countGrade); //דחוף ציון למערך ציון ביניים
		
				myGame[question][0][2] = "NOSHOW"; //הגדר שאלה שלא תופיע יותר במשחק
		
				counter = counter - 1; //צמצם ב-1 את כמות השאלות שנותרו לשחקן		
		
				if (counter == 0) { //אם כמות השאלות הגיעה ל-0
					clearInterval(globalTimeCounter); //עצור את ספירת הזמן לכל המשחק
					for (i = 0; i <= sumScore.length - 1; i++) { //בצע חישוב של ציון המשחק
						grade = grade + sumScore[i]; //סכום את מערך ביניים של ציון המשחק
					}
					tempX = tempX - moveX;
					stage.removeChild(stage.getChildByName("frogiProgress"));
					stage.addChild(frogiProgress);
					frogiProgress.x = tempX;
					stage.getChildByName("question" + connect).gotoAndStop(1);
					stage.removeChild(stage.getChildByName("BTN_CHECKACTIVE"));
					setTimeout(function () {
						endGame();
					}, 1000); // זמן במילי שניות
		
				} else { //אם כמות השאלות לא הגיעה ל-0
					questionCounter = questionCounter + 1; //הגדרת מספר השאלה הנוכחי באחד
					tempX = tempX - moveX;
					stage.removeChild(stage.getChildByName("frogiProgress"));
					stage.addChild(frogiProgress);
					frogiProgress.x = tempX;
					stage.getChildByName("question" + connect).gotoAndStop(1);
					btnNextWin(); //הפעל כפתור המשך****לא יהיה בהמשך
				}
			} else { //אם התשובה לא נכונה
				if (music == "on") {
					createjs.Sound.play("Failure"); //הפעלת סאונד אי הצלחה
				}
				sumErrors = sumErrors + 1;
				var countRespone = myGame[question][0][1]; //ציין בשאלה במערך מסיחים מספר ניסיון נוסף
				myGame[question][0][1] = countRespone + 1; //הוסף למספר הניסיון הקיים עוד 1
				stage.getChildByName("question" + connect).gotoAndStop(2);
				btnNextLose(); //הפעל כפתור המשך***לא יהיה בהמשך
			}
		}
		
		function randomQuestion() { //פונקציה שיוצרת מספר רנדומלי איתו אנחנו בוחרים תת-מערך מסיחים רנדומלי
			//question = parseInt(Math.random() * (9 + 1)) - (1) + 1;
			question = parseInt(Math.random() * ((totalQuestions-1) + 1)) - (1) + 1;	
		}
		
		function randomPosition() { //פונקציה שיוצרת צמד מספרים רנדומלי בשביל מיקום המלבנים בצורה אקראית
			var randomPosition = parseInt(Math.random() * (3 + 1)) - (1) + 1;
			while (positionX[randomPosition] == null) {
				var randomPosition = parseInt(Math.random() * (3 + 1)) - (1) + 1;
			}
			randomPositionX = positionX[randomPosition];
			randomPositionY = positionY[randomPosition];
			positionX.splice(randomPosition, 1); //מחיקה של מיקום ממערך מיקומים אחרי ששלפנו אותו כמיקום רנדומלי
			positionY.splice(randomPosition, 1); //מחיקה של מיקום ממערך מיקומים אחרי ששלפנו אותו כמיקום רנדומלי
		}
		
		function removeEventListener() { //פונקציה שמבצעת ביטול מאזינים
			for (i = 1; i < myGame[question].length; i++) { //לולאה שמבצעת ביטול מאזינים לכל המאזינים על הבמה
				stage.getChildByName("question" + i).removeEventListener("click", connection);
			}
			stage.getChildByName("pause_btn").removeEventListener("click", pause); //הסר מאזין לכפתור השהייה
			stage.getChildByName("sound_btn").removeEventListener("click", ClickMuteSound); //הסר מאזין לכפתור צלילים
			//stage.getChildByName("BTN_CHECKACTIVE").removeEventListener("click", betweenQAnimiton);
			//stage.getChildByName("BTN_CONTINUEACTIVE").removeEventListener("click", clearQuestionScreen);	
			if (countImg > 0) { //אם כמות התמונות על הבמה גדול מאפס
				for (i = 0; i <= imgName.length; i++) { //הכנס ללולאה כאורך מערך שמות התמונות
					var temp = imgName[i]; //שלוף את שם התמונה ממיקום אינדקס
					stage.getChildByName(temp).removeEventListener("click", showBIG); //הסר מאזין לשם שקיבלת ממשתנה זמני
				}
			}
		}
		
		function addEventListener() {
			for (i = 1; i < myGame[question].length; i++) { //לולאה שמבצעת ביטול מאזינים לכל המאזינים על הבמה
				stage.getChildByName("question" + i).addEventListener("click", connection);
			}
			stage.getChildByName("pause_btn").addEventListener("click", pause); //הוסף מאזין לכפתור השהייה על הבמה
			stage.getChildByName("sound_btn").addEventListener("click", ClickMuteSound); //הוסף מאזין לכפתור צלילים על הבמה
		
			if (countImg > 0) { //אם כמות התמונות על הבמה גדול מאפס
				for (i = 0; i <= imgName.length; i++) { //הכנס ללולאה כאורך מערך שמות התמונות
					var temp = imgName[i]; //שלוף את שם התמונה ממיקום אינדקס
					stage.getChildByName(temp).addEventListener("click", showBIG); //הוסף מאזין לשם שקיבלת ממשתנה זמני
				}
			}
		}
		
		function showBIG(event) { //פונקציה להגדלת תמונה לפי התמונה עליה לחצתי
			var i = event.currentTarget.name.slice(-1); //קח את מספר התמונה לפי השם שלה
			var img = new(myGame[question][i][0])(); //צור תמונה חדשה על הבמה
			img.name = "bigImage"; //הגדר שם לתמונה
			stage.addChild(img); //הוסף את התמונה החדשה לבמה
			img.scale = 2; //הגדל את התמונה פי 2
			img.x = 400; //מקם את התמונה במיקום X
			img.y = 250; //מקם את התמונה במיקום Y
			removeEventListener(); //עבור לפונקציה שמבטלת את כל המאזינים
			img.addEventListener("click", showMini); //הוסף מאזין בעת לחיצה על התמונה
		}
		
		function showMini() { //פונקציה לסגירת תמונה אחרי הגדלתה
			stage.removeChild(stage.getChildByName("bigImage")); //הסר את התמונה הגדולה מהבמה
			addEventListener(); //עבור לפונציה שמחזירה את כל המאזינים
		}
		
		function btnNextWin() { //פונקציה שמבצעת הפעלת מאזין לכפתור המשך
			stage.removeChild(stage.getChildByName("BTN_CHECKACTIVE"));
			stage.addChild(BTN_CONTINUEACTIVE);
			BTN_CONTINUEACTIVE.addEventListener("click", betweenQAnimiton); //הוספת מאזין לכפתור המשך עם הפניה לפונקציה שמנקה את הבמה
		}
		
		function btnNextLose() { //פונקציה שמבצעת הפעלת מאזין לכפתור המשך בעת בחירה שגויה ולא תהיה אנימציית מעבר
			loseFlag = "true";
			stage.removeChild(stage.getChildByName("BTN_CHECKACTIVE"));
			stage.addChild(BTN_CONTINUEACTIVE2);
			BTN_CONTINUEACTIVE2.addEventListener("click", clearQuestionScreen); //הוספת מאזין לכפתור המשך עם הפניה לפונקציה שמנקה את הבמה
		}
		
		function clearQuestionScreen() { //פונקציה שמבצעת ניקוי הבמה
			clearScreen();
			nextQuestion(); //קריאה לפונקציה שיוצרת שאלה חדשה
		}
		
		function clearScreen() { //פונקציה שבמצעת ניקוי מסך - קוראים לפונקציה הזו מכל מני פונקציות אחרות
			for (i = 1; i < myGame[question].length; i++) { //לולאה שמבצעת ניקוי לכל האלמנטים שמופיעים על-גבי הבמה
				stage.removeChild(stage.getChildByName("question" + i));
			}
			stage.removeChild(stage.getChildByName("next")); //ניקוי כפתור המשך
			stage.removeChild(stage.getChildByName("questionTitel")); //ניקוי שאלה
			stage.removeChild(stage.getChildByName("numberOne")); //ניקוי מספר שאלה נוכחי
			stage.removeChild(stage.getChildByName("numberTwo")); //ניקוי מספר שאלות במשחק
			stage.removeChild(stage.getChildByName("clock")); // ניקוי אובייקט של שעון
			stage.removeChild(stage.getChildByName("FROGI_START_NEW"));
			if (loseFlag == "true") {
				stage.removeChild(stage.getChildByName("BTN_CONTINUEACTIVE2"));
			}
		
			if (countImg > 0) { //אם כמות התמונות על הבמה גדול מאפס
				for (i = 0; i < imgName.length; i++) { //הכנס ללולאה כאורך מערך שמות התמונות
					var temp = imgName[i]; //שלוף את שם התמונה ממיקום אינדקס
					stage.removeChild(stage.getChildByName(temp)); //הסר תמונה לפי השם שקיבלת ממשתנה זמני
				}
				stage.removeChild(stage.getChildByName("bigImage")); //הסר תמונה גדולה
			}
		}
		
		function timer() { //פונקציה שמבצעת ספירה לאחור מ-זמן מוגדר עבור כל שאלה
			if (timeCounter == 0) { //אם הזמן המוגדר הגיע לאפס
				clearInterval(setTime); //אפס את הגדרת הזמן לכל שאלה
				timer_txt.text = "";
				removeEventListener(); //בטל את כל המאזינים
				timeUp(); //גש לפונקציה שמבצעת פעולות מסוימות אם הזמן נגמר
		
			} else { //אם לא
				timer_txt.text = "";
				timeCounter = timeCounter - 1; //הורד בספרה אחת את הזמן המוגדר לכל שאלה
		
				if (timeCounter < 10) { //  אם הזמן שנקבע הוא פחות מ10
					timer_txt.x = 65; // הזז מיקום X
				}
		
				timer_txt.text = timeCounter; // הדפס זמן מוגדר
			}
		
		}
		
		function timeUp() { //פונקציה שמבצעת פעולות מסוימות כאשר הזמן נגמר
			clearScreen(); //גש ונקה מסך
			var timeUp = new lib.timeUp_Screen();
			stage.addChild(timeUp);
			timeUp.name = "timeUpScreen";
			timeUp.btn_continueTimeUp.addEventListener("click", clickContinueFromTimeUp); //הפעל מאזין לכפתור שנמצא על הבמה בפריים הזמן נגמר
		}
		
		function clickContinueFromTimeUp() { //פונקציה שמבצעת איפוס אחרי לחיצה לחיצה על כפתור המשך מפריים הזמן נגמר
			stage.removeChild(stage.getChildByName("timeUpScreen"));
			nextQuestion(); //הפעל פונקציה של השאלה הבאה
		}
		
		function globalTimer() { //פונקציה שמבצעת ספירה קדימה מזמן אפס עבור כל המשחק
			globalTimeCounter = globalTimeCounter + 1; //הוסף שניה אחת לזמן אפס
		}
		
		function pause() { //פונקציה להגדרת מסך השהייה
			var pause = new lib.pause_screen(); //צור כפתור השהייה
			stage.addChild(pause); //הוסף כפתור השהייה לבמה
			pause.name = "pauseScreen"; //תן שם לכפתור השהייה
			clearInterval(setTime); //אפס את ספירת הזמן לאחור עבור כל שאלה
			removeEventListener(); //עבור לפונקציה שמבטלת את כל המאזינים על הבמה
			pause.pContinue_btn.addEventListener("click", unPause); //הוסף מאזין לכפתור המשך שיעביר לפונקציה לביטול מסך השהייה
		}
		
		function unPause() { //פונקציה לסיום מסך השהייה
			stage.removeChild(stage.getChildByName("pauseScreen")); //הסר מהבמה את מסך השהייה
			setTime = setInterval(timer, 1000); //הגדר ספירת זמן לאחור עבור כל שאלה כל 1 שניות
			addEventListener(); //עבור לפונקציה שמגדירה מאזינים לאובייקטים על הבמה
		}
		
		function betweenQAnimiton() {
			stage.removeChild(stage.getChildByName("BTN_CONTINUEACTIVE"));
			var QAnimiton = new lib.Q_Animiton();
			stage.addChild(QAnimiton);
			setTimeout(function () {
				stage.removeChild(QAnimiton);
				clearQuestionScreen();
			}, 1000); // זמן במילי שניות
		}
		
		function endGame() { // פונקציית אנימציית סיום
			clearScreen(); // מחיקת המסך הקודם
			var endAnimiton = new lib.endAnimiton(); // צור מסך אנימציית סיום
			endAnimiton.name = "endAnimation"; // תן שם למסך אנימציית הסיום
			stage.addChild(endAnimiton); // הוסף אנימציית סיום לבמה
			var myfinalgrade = setTimeout(mygrade, 3100); // ביצוע הופעת ציון סופי אחרי 3.1 שניות
			var myfinalerros = setTimeout(myerros, 3100); // ביצוע הופעת מספר טעוית לאחר 3.1 שניות
			var myfinaltime = setTimeout(mytime, 3100); // ביצוע הופעת סך הכל זמן בשניות לאחר 3.1 שניות
		
			stage.addChild(sound_btn); // הוסף כפתור השתק לבמה
			sound_btn.addEventListener("click", ClickMuteSound);
			stage.addChild(music_btn); // הוסף כפתור צלילים לבמה
		}
		
		function mygrade() { // פונקציית יצירת ציון סופי על הבמה בתיבת טקסט דינמאית בתוך אנימציה פנימית של מסך סיום
			var theGrade = new createjs.Text(); // צור תיבת טקסט דינמאית
			theGrade.name = "theGrade"; // תן שם לתיבת טקסט 
			stage.addChild(theGrade); // הוסף לבמה את תיבת הטקסט
			theGrade.x = 980; // מיקום תיבת הטקסט X
			theGrade.y = 432; // מיקום תיבת הטקסט Y
			theGrade.font = "20px Heebo "; // פונט גודל וסוג פונט
			theGrade.text = parseInt(grade); // הדפסה של משתנה הציון הסופי
		}
		
		function myerros() { //פונקציית יצירת מספר טעויות על הבמה בתיבת טקסט דינמאית בתוך אנימציה פנימית של מסך סיום
			var theErros = new createjs.Text(); // צור תיבת טקסט דינמאית
			theErros.name = "theErros"; // תן שם לתיבת טקסט
			stage.addChild(theErros); // הוסף לבמה את תיבת הטקסט
			theErros.x = 1002; // מיקום תיבת הטקסט X
			theErros.y = 372; // מיקום תיבת הטקסט Y
			theErros.font = "20px Heebo "; // פונט גודל וסוג פונט
			theErros.text = parseInt(sumErrors); // הדפסה של משתנה מספר טעויות כללי
		}
		
		function mytime() { //פונקציית יצירת סך הכל זמן בשניות על הבמה בתיבת טקסט דינמאית בתוך אנימציה פנימית של מסך סיום
			var theTime = new createjs.Text(); // צור תיבת טקסט דינמאית
			theTime.name = "theTime"; // תן שם לתיבת טקסט 
			stage.addChild(theTime); // הוסף לבמה את תיבת הטקסט
			theTime.x = 905; // מיקום תיבת הטקסט X
			theTime.y = 312; // מיקום תיבת הטקסט Y
			theTime.font = "20px Heebo "; // פונט גודל וסוג פונט
			theTime.text = " סך הכל " + parseInt(setGlobalTime / 60) + " דקות "; // הדפסה של משתנה סך הכל זמן בשניות
		}
		
		function ClickMuteSound() {
			if (music == "on") {
				music = "off"; /*מצב השתקת צלילים*/
				sound_btn.gotoAndStop(1);
				createjs.Sound.stop("Success"); //עצירת סאונד הצלחה
				createjs.Sound.stop("Failure"); //עצירת סאונד אי הצלחה
				createjs.Sound.stop("Endofgame"); //עצירת סאונד סיום
				createjs.Sound.stop("HomeScreenSound"); //עצירת סאונד מסך הבית
				createjs.Sound.stop("GameSound"); //עצירת סאונד משחק
			} else {
				music = "on"; /*הפעלת צליל משחק*/
				sound_btn.gotoAndStop(0);
				createjs.Sound.play("GameSound", {
					interrupt: createjs.Sound.INTERRUPT_ANY,
					loop: -1
				});
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: '6BF547886BE25247839B6B22E36D372B',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/EndAnimitonBackground.png?1644080073739", id:"EndAnimitonBackground"},
		{src:"images/img_temp_1.jpg?1644080073739", id:"img_temp_1"},
		{src:"images/img_temp_2.jpg?1644080073739", id:"img_temp_2"},
		{src:"images/img_temp_3.jpg?1644080073739", id:"img_temp_3"},
		{src:"images/img_temp_4.jpg?1644080073739", id:"img_temp_4"},
		{src:"images/GAME_atlas_1.png?1644080073542", id:"GAME_atlas_1"},
		{src:"images/GAME_atlas_2.png?1644080073542", id:"GAME_atlas_2"},
		{src:"images/GAME_atlas_3.png?1644080073542", id:"GAME_atlas_3"},
		{src:"images/GAME_atlas_4.png?1644080073542", id:"GAME_atlas_4"},
		{src:"images/GAME_atlas_5.png?1644080073543", id:"GAME_atlas_5"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1644080073739", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1644080073739", id:"sdk/anwidget.js"},
		{src:"components/ui/src/css.js?1644080073739", id:"an.CSS"},
		{src:"components/ui/src/combobox.js?1644080073739", id:"an.ComboBox"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6BF547886BE25247839B6B22E36D372B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;