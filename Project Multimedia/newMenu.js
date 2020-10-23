(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"newMenu_atlas_", frames: [[0,0,1280,720],[0,722,730,470],[1214,1143,420,410],[1282,0,705,1141],[732,722,480,450]]}
];


// symbols:



(lib.background = function() {
	this.spriteSheet = ss["newMenu_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bard_image = function() {
	this.spriteSheet = ss["newMenu_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hunter_pict = function() {
	this.spriteSheet = ss["newMenu_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.musicnotepngcopy = function() {
	this.spriteSheet = ss["newMenu_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.wizard_sprite_sheet = function() {
	this.spriteSheet = ss["newMenu_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.WizardAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// MaskScreen (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak2G9IAAt5IJtAAIAAN5g");
	mask.setTransform(0,-5.5);

	// Char
	this.instance = new lib.wizard_sprite_sheet();
	this.instance.parent = this;
	this.instance.setTransform(-28,-145);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:-89},0).wait(2).to({x:-150},0).wait(2).to({x:-207},0).wait(2).to({x:-268},0).wait(2).to({x:-329},0).wait(2).to({x:-388},0).wait(2).to({x:-449},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-49.9,59.1,89);


(lib.TweenWizard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhtUcQgmiIgVj7QgWj7AAkLQAAkNAWj3QAVj7AmiJQAliJApAAQBOAAA1HAIAAwlIgoAAQgLAAgEgbQgFgbAAgrQAAgoAFgbQAEgbALAAIBGAAMAAAAo/IApAAQAKAAAGAaQAEAZAAArQAAAogEAbQgGAbgKAAIhHAAIAAl2Qg0HAhQAAQgoAAgliHgAh6jJQgmD2AAFmQAAFkAmD5QAnD2A2AAQA0AAAnj2QAmj5AAlkQAAlmgmj2Qgnj2g0AAQg2AAgnD2g");
	this.shape.setTransform(112.5,-45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiUPhQgKABgFgZQgEgbgBgoQABgnAEgYQAFgbAKAAIBJAAIAA4fIg4AAQgKAAgEgbQgGgbAAgrQAAgoAGgbQAEgaAKAAIBWAAIAAHaQA6lLAdhfQAdhgAZAAQAaABAXBxQAYBwAAA7QAAArgFAdQgFAbgGAAQgEAAgDgIQgCgJgHgqQgMhOgJgeQgKgdgIAAQgVAAgbBjQgcBjhDF/IAAQFICEAAQALABAFAaQAEAZABArQgBAogEAaQgFAbgLAAg");
	this.shape_1.setTransform(67.9,-7.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiNNmQgeisAAj5QgBkRAojLQApjMBMAAQAUAAAYASQAZAQAcAkIAAkxQAAibgXhyQgXhygtAAQgjAAg/CAQgLAWgEAAQgGAAgDgbQgEgbAAgoQAAgmADgXQAFghAkg7QA3heAdAAQA4AAAfCxQAgCvAADeIAATdIAoAAQAMAAAEAaQAFAZgBArQABAogFAbQgEAbgMAAIhGAAIAAkPQhBFZhKAAQg2AAgeirgAhyCFQgcCFAAC3QABCqAVB1QAVB0AoAAQAoAAAghgQAhhiAkjVIAAmfQgWglgXgSQgXgSgZAAQhCAAglCwg");
	this.shape_2.setTransform(23.5,-4.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiIPKIAAioIDf4tIi6AAIAAEAQAABDgFAdQgEAdgGAAQgHAAgFgdQgDgdAAhDIAAm+IECAAIAACoIjgYvIDKAAIAAkEQAAhEAEgdQAFgcAGAAQAHAAAEAcQAFAdgBBEIAAHAg");
	this.shape_3.setTransform(-20.6,-5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiEWtQgKAAgGgbQgEgbAAgoQAAgrAEgZQAGgaAKAAIB2AAIAA4ZIhYAAQgLAAgEgbQgFgbAAgoQAAgrAEgbQAFgaALAAIB1AAIAAbXIB2AAQALAAAEAaQAFAZAAArQAAAogFAbQgEAbgLAAgAgevGIAAnmIAsAAIAAHmg");
	this.shape_4.setTransform(-64.7,-53.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABVUeIhV9EIhSdEIgvAAMgAsgl/IgMAAQgKgBgFgYQgFgbAAgrQAAgqAFgZQAFgbAKABIBwAAQALgBAFAbQAEAZAAAqQAAArgEAbQgFAYgLABIhGAAMAAoAioIBR8hIAtAAIBTchMAAngioIhGAAQgLgBgFgYQgEgbAAgrQAAgqAEgZQAFgbALABIBuAAQALgBAFAbQAFAZAAAqQAAArgFAbQgFAYgLABIgLAAMgAqAl/g");
	this.shape_5.setTransform(-108.8,-39.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("EgtLBQXQAAjOiSiTQiTiTjPAAMAAAiRFQDPAACTiTQCSiTAAjPMBaXAAAQAADPCSCTQCTCTDPAAMAAACRFQjPAAiTCTQiSCTAADOg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-339.1,-514.3,678.3,1028.7);


(lib.an_Video = function(options) {
	this._element = new $.an.Video(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.selectbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag1B9IAAAQIglAAIAAkeIAlAAIAABoQAZgdAhAAQApAAAWAdQAXAcAAAwQAAAzgZAeQgZAegmAAQghAAgXgVgAg1gGIAABiQAYAZAeAAQAXAAAPgVQAOgUAAgpQAAglgOgUQgNgTgYAAQgdAAgaAjg");
	this.shape.setTransform(103.8,2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhGBQQgagcAAg0QAAgzAagcQAbgdArAAQAsAAAbAdQAaAcAAAzQAAA0gaAcQgbAdgsAAQgrAAgbgdgAgqg6QgQATAAAnQAAAoAQATQARAVAZgBQAaABARgVQAQgTAAgoQAAgngQgTQgRgVgaABQgZgBgRAVg");
	this.shape_1.setTransform(77,6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag5B8QgVgWAAgjIAAgIIAnAAQAAA0AmAAQAUAAALgLQALgMAAglIAAjEIAmAAIAADCQAAA1gVAWQgUAWgnAAQgjAAgVgWg");
	this.shape_2.setTransform(50.8,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIB7QgLgIgCgNQgDgNAAgVIAAh1IgZAAIAAgdIAZAAIAAg0IAkAAIAAA0IAhAAIAAAdIghAAIAAB2QAAAWAFAGQAGAFAJAAQAKAAAIgBIAAAcQgMACgOAAQgXAAgJgIg");
	this.shape_3.setTransform(17.8,3.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag/BQQgagcAAg0QAAgzAagcQAbgdArAAQAiABAXARQAWARAEAhIglAAQgBgTgNgKQgOgJgSAAQgZgBgRAVQgQATAAAnQAAAoAQATQARAVAZgBQASAAAOgKQANgJABgTIAlAAQgEAhgWARQgXARgiABQgrAAgbgdg");
	this.shape_4.setTransform(-1.5,6.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhEBQQgcgdAAgzQAAgyAbgcQAbgdAqgBQAsAAAbAdQAaAcAAAzIAAAJIibAAQACAkASARQARARAZAAQATAAAQgKQAPgJABgTIAmAAQgEAggZASQgYARgkABQgtAAgbgdgAglhAQgQAPgEAeIBzAAQgEgegQgPQgPgOgXAAQgVAAgQAOg");
	this.shape_5.setTransform(-27,6.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgSCPIAAkdIAkAAIAAEdg");
	this.shape_6.setTransform(-46.6,2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhEBQQgcgdAAgzQAAgyAbgcQAbgdAqgBQAsAAAbAdQAaAcAAAzIAAAJIibAAQACAkASARQARARAZAAQATAAAQgKQAPgJABgTIAmAAQgEAggZASQgYARgkABQgtAAgbgdgAglhAQgQAPgEAeIBzAAQgEgegQgPQgPgOgXAAQgVAAgQAOg");
	this.shape_7.setTransform(-66.3,6.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhRB4QgegbgCgqIAkAAQAEAgAXAQQAYAPAhgBQAgABATgNQATgNAAgXQAAgXgUgLQgUgLgwgKQgxgKgVgTQgWgSAAgfQAAgiAcgXQAbgWAvAAQAvAAAeAXQAdAVACAqIgkAAQgHg0hAAAQgfAAgSALQgRAMAAAVQAAARAOAKQAOAIAmAJQAlAIAXAJQAWAIAQAQQAQARAAAdQAAAlgdAYQgdAZgwAAQg7AAgegcg");
	this.shape_8.setTransform(-94.9,2.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("EghBgFxMBCDAAAQB+AAAAB+IAAHnQAAB+h+AAMhCDAAAQh+AAAAh+IAAnnQAAh+B+AAg");
	this.shape_9.setTransform(-4,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("EghBAFyQh+AAAAh+IAAnnQAAh+B+AAMBCDAAAQB+AAAAB+IAAHnQAAB+h+AAg");
	this.shape_10.setTransform(-4,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag2B9IAAAQIgmAAIAAkeIAmAAIAABoQAZgdAiAAQAqAAAXAdQAXAcAAAwQAAAzgaAeQgZAegnAAQghAAgYgVgAg2gGIAABiQAYAZAfAAQAYAAAOgVQAPgUAAgpQAAglgOgUQgNgTgZAAQgeAAgaAjg");
	this.shape_11.setTransform(106.8,2.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhIBQQgbgcAAg0QAAgzAbgcQAcgdAsAAQAtAAAcAdQAbAcAAAzQAAA0gbAcQgcAdgtAAQgsAAgcgdgAgrg6QgRATAAAnQAAAoARATQARAVAagBQAbABARgVQARgTAAgoQAAgngRgTQgRgVgbABQgagBgRAVg");
	this.shape_12.setTransform(79.2,6.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag6B8QgWgWAAgjIAAgIIAnAAQAAA0AoAAQAUAAAMgLQALgMAAglIAAjEIAnAAIAADCQAAA1gVAWQgVAWgoAAQgkAAgVgWg");
	this.shape_13.setTransform(52.3,2.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgIB7QgLgIgDgNQgCgNAAgVIAAh1IgbAAIAAgdIAbAAIAAg0IAkAAIAAA0IAjAAIAAAdIgjAAIAAB2QAAAWAGAGQAFAFAKAAQAKAAAJgBIAAAcQgNACgOAAQgYAAgJgIg");
	this.shape_14.setTransform(18.4,3.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhBBQQgbgcAAg0QAAgzAbgcQAcgdAsAAQAjABAXARQAXARAFAhIgnAAQgBgTgNgKQgOgJgTAAQgagBgRAVQgRATAAAnQAAAoARATQARAVAagBQATAAAOgKQANgJABgTIAnAAQgFAhgXARQgXARgjABQgsAAgcgdg");
	this.shape_15.setTransform(-1.4,6.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhGBQQgdgdAAgzQAAgyAcgcQAbgdAsgBQAtAAAcAdQAbAcAAAzIAAAJIigAAQADAkASARQASARAZAAQAUAAAQgKQAQgJABgTIAnAAQgFAggZASQgZARglABQguAAgcgdgAgmhAQgQAPgFAeIB3AAQgFgegQgPQgQgOgXAAQgWAAgQAOg");
	this.shape_16.setTransform(-27.6,6.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgSCPIAAkdIAlAAIAAEdg");
	this.shape_17.setTransform(-47.7,2.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhGBQQgdgdAAgzQAAgyAcgcQAbgdAsgBQAtAAAcAdQAbAcAAAzIAAAJIigAAQADAkASARQASARAZAAQAUAAAQgKQAQgJABgTIAnAAQgFAggZASQgZARglABQguAAgcgdgAgmhAQgQAPgFAeIB3AAQgFgegQgPQgQgOgXAAQgWAAgQAOg");
	this.shape_18.setTransform(-67.9,6.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhUB4QgegbgCgqIAmAAQACAgAZAQQAYAPAhgBQAiABATgNQAUgNAAgXQAAgXgUgLQgVgLgygKQgygKgWgTQgWgSAAgfQAAgiAdgXQAdgWAuAAQAxAAAfAXQAfAVABAqIgmAAQgGg0hCAAQggAAgSALQgSAMAAAVQAAARAOAKQAPAIAnAJQAmAIAXAJQAXAIARAQQAQARAAAdQAAAlgeAYQgeAZgxAAQg9AAgfgcg");
	this.shape_19.setTransform(-97.3,2.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("Egh5gFxMBDzAAAQCCAAAAB+IAAHnQAAB+iCAAMhDzAAAQiCAAAAh+IAAnnQAAh+CCAAg");
	this.shape_20.setTransform(-4,0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("Egh5AFyQiCAAAAh+IAAnnQAAh+CCAAMBDzAAAQCCAAAAB+IAAHnQAAB+iCAAg");
	this.shape_21.setTransform(-4,0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgxBbIAAAMIgiAAIAAjQIAiAAIAABMQAXgWAfAAQAmAAAVAVQAUAVAAAjQAAAlgXAWQgXAVgjAAQgeAAgWgPgAgxgEIAABHQAWASAcAAQAWAAANgPQANgPAAgdQAAgbgMgOQgNgPgWAAQgbAAgYAag");
	this.shape_22.setTransform(96.1,1.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhBA7QgYgWAAglQAAglAYgUQAZgVAoAAQApAAAZAVQAYAUAAAlQAAAlgYAWQgZAUgpAAQgoAAgZgUgAgngrQgPAPAAAcQAAAdAPAPQAPAOAYAAQAYAAAQgOQAPgPAAgdQAAgcgPgPQgQgOgYAAQgYAAgPAOg");
	this.shape_23.setTransform(71.2,4.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag1BaQgTgPAAgaIAAgGIAjAAQABAmAjAAQATAAAKgIQAKgIAAgcIAAiOIAjAAIAACNQAAAmgTAQQgTAQgkAAQggAAgUgQg");
	this.shape_24.setTransform(46.9,1.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgIBZQgJgFgDgKQgCgJAAgQIAAhVIgYAAIAAgUIAYAAIAAgmIAhAAIAAAmIAfAAIAAAUIgfAAIAABXQAAAPAFAEQAFAEAJAAIARgBIAAAVQgMABgNABQgVAAgJgHg");
	this.shape_25.setTransform(16.3,2.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag6A7QgZgWAAglQAAglAZgUQAYgVAoAAQAgAAAVANQAVAMAEAYIgjAAQgBgOgMgHQgMgHgSAAQgXAAgQAOQgPAPAAAcQAAAdAPAPQAQAOAXAAQASAAAMgHQAMgHABgNIAjAAQgEAXgVANQgVAMggAAQgoAAgYgUg");
	this.shape_26.setTransform(-1.6,4.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag/A7QgagWAAglQAAgkAZgVQAZgVAnAAQApAAAZAVQAYAUAAAlIAAAHIiQAAQADAZAQANQAQANAXAAQASAAAOgHQAPgHAAgNIAkAAQgEAWgXAOQgXAMghAAQgqAAgZgUgAgiguQgPALgEAWIBrAAQgEgWgPgLQgOgLgVAAQgUAAgOALg");
	this.shape_27.setTransform(-25.3,4.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgQBpIAAjRIAhAAIAADRg");
	this.shape_28.setTransform(-43.6,1.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag/A7QgagWAAglQAAgkAZgVQAZgVAnAAQApAAAZAVQAYAUAAAlIAAAHIiQAAQADAZAQANQAQANAXAAQASAAAOgHQAPgHAAgNIAkAAQgEAWgXAOQgXAMghAAQgqAAgZgUgAgiguQgPALgEAWIBrAAQgEgWgPgLQgOgLgVAAQgUAAgOALg");
	this.shape_29.setTransform(-61.8,4.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhLBZQgcgVgCgfIAiAAQADAYAWALQAWALAeAAQAeAAASgKQARgJAAgRQAAgQgSgJQgTgHgsgIQgugHgTgNQgVgNABgXQAAgaAZgQQAagQArAAQAsAAAbARQAcAQABAeIghAAQgGgmg8AAQgdAAgQAJQgRAIAAAOQAAANAOAHQAMAHAkAGQAiAGAVAGQAWAGAOALQAPANAAAVQAAAbgbASQgcASgsAAQg2AAgcgTg");
	this.shape_30.setTransform(-88.4,1.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("A+qkNMA9VAAAQB1AAAABcIAAFjQAABch1AAMg9VAAAQh1AAAAhcIAAljQAAhcB1AAg");
	this.shape_31.setTransform(-4,0.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#990000").s().p("A+qEOQh1AAAAhcIAAljQAAhcB1AAMA9VAAAQB1AAAABcIAAFjQAABch1AAg");
	this.shape_32.setTransform(-4,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228.9,-37.9,450,76);


(lib.closeSymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(15,1,1).p("AIiowQADAEAEAEQDlDlAAFDQAAFBjhDkQgCACgCACQjlDllEAAQlDAAjljlQgigigdgkQimjPAAkUQAAlDDljlQAlglAngfQDNihEPAAQE+AADkDdIodHmIIoJvAncpsIHhIiIpsIt");
	this.shape.setTransform(78.2,78.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033FF").s().p("AooIpQgigigdgkIJsotIIoJvIgEAEQjlDllEAAQlDAAjljlgAItIlgAAFhKIpsItQimjPAAkUQAAlDDljlQAlglAngfQDOihEOAAQE+AADkDdIodHmIIdnmIAHAIQDlDlAAFDQAAFBjhDkgAAFhKInhoig");
	this.shape_1.setTransform(78.2,78.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(15.6,1,1).p("AG6nfQABABAAAAIgMALIALgMIAMgOIAEgEIAVgSQDEDzgVFCQAvgxAAABQgOEejeDIQgDACgDADIAUAIQjECgj7APQgBABgCAAQADAwgxgEQkYgWjAjrQgFgGgFgHIGgnNIA5gyIFqH7IB7AuQi7CijwAVIAAAAQAAAyg0gCQkggOjIjiQgFgGgFgGQgMgOgMgPIgBA5IAZgcIATgVQgXgcgTgeIgBAyQgLgOgKgOQgBgCgCgDIgNAWQhtirgJjVQAAgFAAgEIAAhJQABgKAAgLIAAAFQASj4Cni8QAdghAfgcQADgDADgDQAQgOARgNQALgJALgJQCdhyDHgLQAkACAkAFQAaAAAZACQBFARA+AhQB7A/BjB6gAHGntQABABABABQDODpgME4QACgCACgCQgBABAAABQgBAWgDAWQAPDHjYCxIgxg3IlEniIgog8IgCBrIAqgvIFkmSIh0BqIl9D7IgTgUIkcmzQCaiDDJgRQAagDAaAAQBhAOBVAmQCCA5BoBygAlxo1IgVghIgWghIAAAzIgBA4QAWgWAWgTgAq5AzQgYlBC9jqQAYgeAZgbQAHgFAHgGIASAZIFgH1IBMgYInHFEIhYCcQiAi4gCjqIgBA4IAAADQAAgGAAgGAq5giQABgGAAgHQAAgEAAgEAq4gvQAAgBAAgCIAAAqQgBgTABgUg");
	this.shape_2.setTransform(79.9,76.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(16.2,1,1).p("AAPqNQAWgDAVgBQA2AXAxAjQBoBKBQCCIiFB6IlcCAIgUgVIiElMIgchFIgdhLIgCBiQAQgMAPgLQB1hRCQgQQAkADAiAIQBOARBEAlQB1A9BbB1QACACABACIAagnIARgNQCdD5gsFDQAAABAAABQgEAWgEAWQAuBojgCOIgzg4IiomCID5lyQCuDkgZErQAEgEADgDQBehjAAABQgaD6jcCrQgZATgaARIBQgJQjJCCj7gEQgBAAgBAAQALAQAHANQAZAqgMAIQgFADgJgCQjYgoiUjMIEomlIAugoIEdIHIBegLQinBtjNAIQAJAQAHANQATAlgGANQgEAJgPgCQjkgYihi3QgSgUgRgWQgDgEgCgDQgWgegTgfQgNgVgLgWIgJBNQhJiYgEi2QgbkeCIjbQASgeAUgcQAGgEAGgEIAeA4ID7HWIlVC6IgNB0QhEiEgKidQgCgjABgmQABgMACgLQAYi9BziWQAUgaAUgWQAIgKAJgJQAfggAhgaIgBB0QAdgnAfgfQByh0CUgfQAWgFATgDgAB7gvIg4iAIgDDVgApfhuIAAAeIgCBgIgBBXQgEgcgDgbQgBhMALhSgApiBnQgHhUAHhMQABgaACgbAixADIAHAOIB5hSgAmMGfQgOgTgNgUQgXgkgTglIgBBqIgCBsIAqg7g");
	this.shape_3.setTransform(81.2,75.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(16.7,1,1).p("AgBo1QASgGASgEQAqAbAlAmQBRBUA7CIIiJCBIgDAAIgHAAIgEEYIAshbIghi9IgHgoIAAAoIkxAFIgVgWIgWi+IgPiHIgPh/IgBCLQAIgGAIgGQBVg9BmgSQAjAGAhALQA8AUA3AjQBkBBBNB0QAHAMAIAMIAphWIAMgKQB1EBhBFDQgBABAAABQgFAWgFAWQBLAKjnBrIg2g5IgrkBICflNQCCDZgkEWQAFgGAGgFQCNiVAAABQgoDXjZCPQhVA3hfAcQhvAih7gCQAAAAAAABQgBAAgBAAQAPAQAMAOQBTBfgagIQACALgMgCQingfh6iJQgYgbgWgeQgMgRgMgSQgVghgSgiQgphTgShcQgGgegDgfIgBBBIgGACIgEACIgJADIgSAHIAmCIIAVBIAmTleQAQgYARgVQAug4A0goIgDC2QAQgfASgcQBYiJB7gxQAPgGAOgFAoXBDQggj7BajJQAOggAOgcQAEgDAEgDIAmBlAn/iOIAAA0IgCCeQgHg4ACg7QADgWAEgVQAYiBBHhuQAHgLAGgKICQGBIj1BeIgKAEIgBAtQgDgWgCgVQgJhgALhWQABguAGgxgAoVCMQgCgkAAglQAChkAWhtAoMCJQgGgjgFgjAoDCyQgFgVgEgUAkDAjIAaBFICmiNgAkuGNIDAl5IAjgcIC+HgIAJAZIALAZICthPQhYAlhgARQh0ATh/gLQAOAQALAOQA1BDAEAUQgBAAgBAAQicg2hrirQgZgogXguQgRgkgNgmIgCCpIgDCYIAxhfgAFTGtIgfAOAoBEbQgQhFgEhK");
	this.shape_4.setTransform(81.8,71.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(17.3,1,1).p("AB2mbQBTBFA+B0QAUAlAPAnIAwimIAIgGQBOEIhZFEIAAAAQAAAAAAABQgGAXgIAWQA5gugrAAIAAAAQgFAAgFABQgoADhgAdIg3g7IAwmIIAIhCIAAA7IgIAHIh1BxIkah3IgWgXIAtjeIApjMIgCCtQA2gmA9gSQAiAJAfAQQAPgLAOgIQAeAgAaApQA6BeAlCPIgPAPIgFFxIBploQBIC8glDlQgBAGgCAGQAHgHAGgGQAAAAAAAAQC+jIAAABQg2C0jWByQhkA0hxATQhbAPhlgHQABAAAAABQgBgBgCAAQASARAPAPQCJCIgYgOQgIgFgIgGQASAbgMgEQhxgihXhhQgWgYgUgcQgbgogZgvQgRgggNgiQgZg/gMhFQgFgdgDgeIgLACIgWAFIgCABQgijVAxiyQAIggAKgeQADgBADgCIAnCzQAJgUAKgTQARgjATgeQAqhAAxgtQATgRAUgOIgED/QA8jCBrhPQAJgHAIgGQAtAWAoAggAmYBfQAAgFAAgEQAJh3AkiDIgBBEIgCCtIgJACQgFg1ACg3QADhCAMhFAmYBfQgBgEgBgEIh6AcICKDfQgWhzAIiAgAlxEIQgShfABhYQAAg5AIg1QAGgiAIghQANgxATgtIA2D2IAgCSIABgBIgDDeIgCC6IAsiGIAfhfIBqlDIAYgSIBhGJIAGAYQhfABhmgQQAQAQAOAPQBJBOAYAhQhhhBhCiKQgbg4gWhEQgJgdgIgeIDOjFIjzA4IhYAVIgBA9IgCB+QgZhXgOhSAjxDFQgCgJgCgIIAAAVgAA6HIIAfB9IDqinQh9AoiMACg");
	this.shape_5.setTransform(77.3,67);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(17.9,1,1).p("ABGmNQALgSAKgPQATAmAPAtQBBBIAvBzQAAACABACQApBpAHB2QADA4gEA7QgCAUgCAUQgngRhbAOIg5g8ICQk7IA1hzIgFFSAEgDhIA7n4IAEgBQAhDvhSEXQgFARgFAQQgHAWgHAVQgBABAAABQgIAXgIAWQAggrALgfIAsgvQgTAMgVALQgIAEgIAEQgKAFgKAFQgFAZgGAaIARgSIAagbQAEgNAAgLQABgOgHgLQgFgHgJgGQgCgBgCgBIAAAogAEcDfQgCAAgBgBQgEAdgFAeQgSAIgSAHQhoAph0AIIADAaIAPCOQgvg6gjhdQgDgHgCgIQgKAAgJgBQgUgBgTgBIAAAHIgBAhIAAACQAPAPAOAOIABgEIAIg1IACgMIAGgnIAnj6IANgHIAeEnQgiACgjAAQgHgTgGgVQgThAgNhOQgFgcgDgdQgBgKgBgLIAAAXIACgCIBjhkIgGgGIjNASIgXACIgKABIgYACIgEABIgWACQgaiYAQiIQADghAEgeQABgBACAAIAZFNIABAQIANCmQgQgzgKgyQgIgfgFgfIjUASIDaDuQgGhdANhlQADggAGggQABgIACgJQAShlAkhsIgTgUIDfmSIgDDJQANgIAOgGQAhAPAfAXQAdAWAaAcQAiBoAQCUIiRCLIglgkIAGgHIgMABIi+i4IgMgLIgFgFIgCgCQADgLAEgMIAAAeIgBAsQADgIAEgJQACgIAEgIQAJgZALgXQBBiGBhg5IgEFPQAYjLBBhjQADgEADgFAEdC2IgBApAFcDwICmiuQgvBmh3BIgAjcjGQACgMADgNAj7AXQADgsAJgqQAJgsAOgqIgCCpIgCCgIgBAtIgBBXQgJgjgGgjIAQgRIALgKIBmhpIgDDqQgYgCgZgEQABABAAABQAAAAgBgBQgBAAAAAAQABABABABQAAAAgBgCQgSgigPgpQgKgYgHgZQgDgIgCgIQgDgJgCgKQgThLgChTQgBgpADgsQAEhCAPhFAj0D5IAHgHQgVhzAHhoAkGC/IAFBHIANgNQgKgdgIgdgAjeE4QgMgggKgfAhKFmQgTgEgSgDQgYgFgYgGQAOANAMAMQALAKAKAJQAQAPAOAMQBXBRAeAaIADAZQAAACAAAAQgBABgCgCQhEgfg3hBQgMgOgMgQIgDDMIAbiuIAFghQByBzAHANAgwFqQgNgCgNgCAhwGCIAAAgQgZgjgWgqQAOANAMALQALALAKAKgAAjIGQAUASgGgHQgIgHgHgJgAATFzQghgDgigGAAmIhIAGA7IEIjxQiJAYiYgQ");
	this.shape_6.setTransform(72.7,65.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(18.5,1,1).p("AFvCrIgVmcIAAADQgBDVhODuQgGACgHACQgFgagSgRQgCAagDAaQgKADgKADQhQAVhXADQgIABgIAAQgEAAgEAAQgDAAgCAAQgnAAgogDQgDgBgCAAQgPgBgPgCQgKgBgJgCQgcgEgdgFQAAAAABABQgCgBgBAAQALAJALAKQAkAhAeAdQAFAEAEAEQgBgEgBgDQAGAFAGAGIAAAGIAAAYQgGgRgEgRQAFAFAFAFQAwAsAgAgQAFAFAFAFQABAAABABQACACACACIAAACQgCgDgCgDIAAAAIgBgPQADACACACIAAAPQBCA/gKgIQgegWgagfIgCCvIESklQgQAAgQAAQgKAAgLAAQgEAAgEAAQgLAAgLgBQgIAlgKAlIAUgUQgBAAAAABQgKAXgKAWQATgfANgbIAmgpIBrhwIAIgIIBEhIQgeAZgmAVQgFACgEADQgtAXg3ATQgFARgGARQABgQgDgOQgOAFgOAEQgGAqgKArQhQgDhVgOQgDgSgDgUQgKhLgDhbIAAAAIgDCnIAAAhQgEgBgEAAQgDgBgDgBQgjgHglgJQgDgJgDgIQgCgHgCgHQgIgXgGgYQgHgagEgaQgBgGgBgGQgLhAABhEQAAgOABgPIgJgOIgUgiIhbibIgBgBQgBgTgBgTIgCAiIgTgTIAVgVIFTlkIgEE5QADAFAEAEQAAgEABgFQAFgcADgYQAIArAEAyQAKBsgGCRIBFhTQADAJACAJQAiB9gMCPQgkgjhaAAIg8g9IAegkIgxAwQAAgJAAgIIAAARIgMAMIAAAAIgBgsIACAEIgBAoIAAALIAAgLIgbAbIgdgwIBEhJIABgBIgBBCQgBggABghQAAgDAAgCQABgEAAgEIAAAIIgBAAIhggEIgBAhIgBBRIgBB/IgBANIAAAQQgOgEgOgEQgJgCgIgCQgCgFgCgFQgLgcgKgdIAZgaIAVgXIAagcIAeggIgdgxIgUgiIgTgBIgNAAIgjgCQAJglALgmQAdhiAqhnIAAA3QAshoBCgyQAgAYAcAhIgBA6QADgaAFgXQALAPAKARQAsBFAdBlICyjUIgGHqIAAAaIgCB9IgGh1gACHgdQAAAGAAAHIg8A6gADwE4QAOgkACgdQgLAggNAhQgKAagKAbIALgMQAKgWAHgTgAG8B4IAzg3QgVAdgeAagAjokYIAAAAAjokYQAAABAAABIAAAEQAAgDAAgDgAjmjsIgEgEIgODnIgMC6IgJCSIB9iFQgTg1gPg0QgNgvgKgtQgYhsgEhkQgBgKAAgLgAhjiEQAEgSAFgQQALggAMgcIgDDhIgVgBIgSgeQACgxAIgzQAKhIAWhNAAbADIAAAEIADgEgAh2guQAFgdAGgcQAEgPAEgOAjJgHIgvgCIj2gMIDqDGIA/A2QAGhHANhLQAJgtALgtgAh7gDQACgWADgVAhmEFQgBgGgBgFQgKgsgFgqQgLhYAHhPAheE/QgBgEgCgDQAFAEAFAEQgIgegHgdAhhE4QgMgcgKgbQgegJgegJQAJAJAKAJQAiAdAdAagAhKENIgBA+QAmAgAdAZQAHAGAGAGIAAAJQgGgKgHgLQgfgygYhDQgGgBgFgBgAAPEhIAAggIgBiQIgECQIgBAeIgEBxQAGAFAFAEgAAtEmQgLgCgLgCIgCB7QBOBBgFgNQgghEgRhngABmkJIgEEPQgJijANhsgAAFGZIAAAEIgGDWIATgVIABgBIgBAgIAAgfIgBi2QgBgBgBAAQgFgHgFgHgAhLFpQgKgVgJgV");
	this.shape_7.setTransform(68.1,64.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0000").ss(19,1,1).p("AGaBqIhAk1IgEAHQgZCphAC2QgZAFgcAEQgEgSgJgPQgBASgCASQgEAAgDABQgJABgIABQgNABgMABQgeACgfABIgBgFIAAAFQgWAAgVgBQgCAAgCAAQgLgBgLgBQgBgIgCgIIgOAPQgOgBgPgCQgHgQgGgQIAyg2IASgWQABgBgBAAQAAgWAAgXIgQgQIAEgDIgHgCQABgQABgQQAEghADgeQAUiGAvhIQAFgPAFgQIAAAQIgEECIAvgkIAoggQAMAwAHA5QAKBMgFBTQgKgSgRgOIAABHIgCBKIAABLQgJAkgLAlQgHhDAChWQgZgFgZgGIgJg1QgBAAAAAAIgBAyQgTgEgTgGQgDgPgDgQIgFAdQgGgCgGgCQgEgSgDgTQgIAAgJgBIgUAUIgEAEIgUAUIgLgeQgMgEgMgEQgDgBgDgBQgDgBgDgBIAGAFQAAgBAAgCQACgHACgIQADgOADgOQAGgaAGgaQgTg2gPgzQgWhKgOhHQgIgigGghQgBACgCADIgVBuIg3iXIgZgYIHxlhIgGHTIgEEaQgeiIgShpIA0gpID3jCIgGHBIAAACIAJgJQgFAEgEADQgaASggAQgADICkQgIACgIABQgEAngHAoQgHgBgIgBQgNgDgMgCQAAggACgjQACgpAEguQAEgxAGg1QAFgoAHgpIgDDFQgIgHgLgHQgVgMgcgHQgIgCgJgBQgIgCgJgBIgXgXIgWgXQAAgJAAgIQAAgGABgHIA+gxIgBCAIgBAVIgNANIgGgnIgKAPIgHAvIgIA2IgCAKQgBgFgBgFQgDgSgDgTQgBgIgBgHQgDgfgCgfIAWgXIAcggIgygIIgMgCIANgLQAGiJAyibQAFgIAFgHQAAAAABgBQAhAqAYBAQgGA3gJA+QgMBNgQBXIgDADIgSASIgBBWIgMhJIgXAXIgSARIgTATQgEgmgCgkQgDguACgrIgqgHIg+gLIgngHIgygIIgZCBIBbBAQghgHgjgJQACABAAABQgBgBgCgBQAOANAOALQAcAZAZAXIACgCIAbgeIANgOQgIgBgHgCQgUgDgTgEIAdAUQgvgQgwgSQANALAMALQAdAYAaAWQBKA+A0ArQAMAJALAJQAIAHAJAGQgRgzgMgxIgHAvIgEAWIgCAMIgzFGICmjHIgFgfQAFAFgCgDQgCgDgCgCQgOgTgNgYQANAJAKAHQARALAHACQAFACgBgEQAAgFAAgEQgCAFgCAGQgGASgGARQAMgMAMgNQAFgFAFgGQARgSAQgQQCaijBIhLIgFgYQhBAehcATQgRAxgUAxQgHgBgIgBQAIgygJglgAC9FwIBZhrQgfgDgfgFQgbBEggBGQgDAFgDAGQADgGADgGIAAABIgBALIAAAFIgDD0Igfi+IgCgKIASgXIASgVgAGfCCIA1g4IgEEqgACviOQgKhAgGgzQgFgigGgdQgEAwgGA2QAOAmALAvgAhMBQQANgvAPgvQAwicBQipAi4h6IgPBSIkVgxID8CyIg5EnICgivQBLBEAzAvQAWATARAPQAGAGAFAFQAIAHAHAGIAAAbQgIgUgHgUQgEgNgEgNQAMAKALAIIAAAVQAiAeALAIIgBgDIgEgbIgbiiQgGgBgFgCIgBByQgWg1gPhHQgFgBgGgBIgFAeQgEgRgDgRQgUgGgVgGQgBgDgCgDQgFgMgEgLQgRgCgRgDQgCAAgBAAIACgCIgLgdIg9ikgAgeDFQgEgBgDgBQgPgFgQgFIgIgWIgBgCIAWgZQgLgcgKgcAAeFKQgKgUgJgUQgWgvgTguACtD2QgGAkgJAlIgBBHQAihPAKg8QgOgCgOgDgACSGdIAFgLACSGdQgBABAAACQgDAGgEAGQgIARgIAQABGGZQgOgZgMgaQgIgOgGgOABGFpQAJAHAIAGQgIgRgIgSg");
	this.shape_8.setTransform(63.5,63.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF0000").ss(19.6,1,1).p("AEqiXIgGgSIgJALQgRBBgXBCIgBBNQgHgTgGgSQgPAqgRAqQgPAlgQAlIAAAZQgFgBgEgCQgCAAgBAAQAGgfAHghIgBAqQgEALgFALQgDAHgDAGQABgHACgGQgagHgbgIQgGgCgGgBQgFgCgGgCIgGgTQgBgaAAgbQgIAAgHAAIgGgSQgDgfgCgeQgDgCgDgCQgCgCgCgCIAIgJIgygPQAXg9Abg+QALgYAKgYQAIgRAIgRQADALACAMQADARADATQABAHABAIQAGggAJggIAhgTQgIgTgJgTQgBgDgBgCQgIAfgKAhIAEgCQAHgcAJgdQAVhDAdhHIgCCfIgCBhIgDD0QghACgkAAQAAAIgBAIQgCgIgCgIQgIgcgOgVQgLgRgPgOQAAAAAAAAQgBgKAAgJQgCAHgDAIQgLAngNApQgWgCgXgDQgCAAgCgBIACgDIBDhLQgTgNgXgKIAAgBIgCAAQgPgGgSgFIg7g7IgFgFIADgBQgIgVgHgUQgMgjgMgiQgCADgDAEIgoB+IgbBWIgFAOIgFgUIAKAGIBUA0QgqgJgrgNQgEgBgEgBIgCAHQgYgLgYgLQALAKAKAJQALAJALAKQANALANAMIgBgEIgHgdQgHgDgGgDIgFAPIAAABIh1FxICyjIIgjiSQAzAsAqAlIAFgFIArgwIAFgFIAEACQADgGACgGQADgKADgJQgrgGgsgKIBIAtIAJgKIAPgSQgFAAgEgBQACgIADgIQgYg3gVg0QgJgYgJgYQgBgDgBgDICVhVQAGg6AMgqQAKAZAGAfQArhbAzheAEsk7IgCCkIgDDuQgSADgTACQgIABgJAAQgVACgXACQgLAAgNABQgDAAgDAAIAAAfQADgPADgQQAPhEAShNQAIgfAIgiQALgpAMgqIgCCoQgHAVgHATQgMgegLgeQgTg0gRgvQgJgagJgYQgFgPgGgPIAfgRICAhIIDTh3IgLNYIh3lSIgFgOQgkAKgtAHIgBBaIgBALQgBgEgCgEQgQgtgQgrQgIgWgIgUIgBArIgBCMIAyg1IAEgDIBXhdIAWgXQgMAFgPAEIhOjdAAriHQABgUACgSIASgKIAVgLIATgLQgGAXgHAYQgWBLgZBUQgCgVgBgWQAAgyACgrgAj4hTIg4joIgagZIJ7lIIgFFhAjfAxQgagIgagJQABABABABQgBgBgCAAQAMAKAMAKQAMAJAKAJQANAKAMAKQA2AsAtAkQAWASAUAQIgHAHIhUBUIgOg3IA6hBQAVATATARQAYAVAVASQAzAtAgAaQAHAGAGAFQAJAHAGAFQAHAFAFADIADgFIACgCQgDgLgDgLQAAgBgBAAQABAAAAAAQAAAAAAABQgCAEgCAEQgFgJgGgJQgBgDgCgDQgGgLgGgLQgBAIgDAHQgCAKgDALQgVBKggBNIAYgfIAWgcQgMAWgMAWQgBACgBABQgNAYgMAWQAJgUAJgTIAJgKIBWhaIAKgKIAMgNIgFgOIgEgPIAIgLIAggpIgBAxIgBB7IgBASQgagrgYgrQgDgFgDgFQAAAAAAgBQgCgFgCgGIALgOIAAAAQAPAHABgGQAAgBAAgBQACgNACgNQAIguAKg1QgRAngTAoIgTg6IgKggQgDARgDAQQgBACAAACQgBgFAAgGQgDgYgCgbQAAgJgBgJIgQg1QgCAAgCgBQgBgIgBgJIgIgaIgUAaIgEAPIgPAzIgDAKQgCgGgDgGQAAgBAAgBQgNgagMgaQgBgCgBgCQgDgHgDgHQAPgqAQgqQgBgBgBAAIhKgWIhogfIg9gSIkHhPIEfCxIgYhiAA0BiQgRAAgRgCQgCAAgBAAQgGAVgHAVIgFAGIgCABIg7A8QAWASAUAPIgEANIh3GiICVjEQgDAHgCAIIASgUQAGgNAFgNQAag6AQgzQAEgLADgLQACABACACQAIAFAGAEQgFgVgEgYQACgIABgHQgFgSgEgRQgBgDgBgEQgIgbgFgbQgfgKgfgKQgDgCgDgBQgBAAgBgBQgdgJgdgLQhKgchLghIgDgLIgEgQIgEAOABdiPQAJBNgBBjQAAAhgDAiQgCAAgDAAIAAAAQgLgBgLAAQAAgXAAgZQAAgCAAgDQAAgeADgfQAFg+AOhCgABOCrQgCgBgDAAQgEgCgEgBQgIgjgFgiABhB0QgDAdgFAeQgBAKgCAKIgIgYABgDjQAEgaABgXQABghgFgdAgWDuQAzAnAhAYQAIAFAHAFQABgCAAgBQAEgPAEgPQgEgVgDgZQgGAbgHAbQgjhBgfhAgABoEzQgEAIgEAIQAKAGAHADQgFgMgEgNQgIgWgHgWQAFgTACgRABqFmQgDgFgDgFQgEgIgEgIQgDAHgEAGQgRAigSAjIAvg9QAJAGAAgBgACGFZIAeggIBMhQIgGGsIhHjhgAB6FmQgFgNgEgNABxFMIAMgQIgKgfQgGALgFALACmDEIgBBEIAsg6QgVgFgWgFgACiHGQgWgxgSgv");
	this.shape_9.setTransform(64.3,63);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF0000").ss(20.2,1,1).p("AF0mhICwhLIgNPEIiqlaIgCCXQgWgsgVgpQgWgpgVgoQgJgRgIgQQgGgMgGgLQgZgBgcgCQALgbAKgcQASgwATgzIgQghIgOAQQgOAkgQAlQgZgugXgsQgBAAAAAAQgQgdgQgbQgIgNgJgNQgTArgUAuQgHg0gCgpQABA2gGBGQgCAbgDAdQgEAlgFAnQgCALgCAMQgCASgEAUQAAAEgBAFQgBAGgBAFQgEgHgEgIQgEgHgDgHIgCACIgCAFIAAACQgQgHgPgGQgFgDgGgCQhMghhOgnIgOAhIgDAFQBAA3AzArIAIgJQAPALANAKQgDAHgDAGQgKAXgKAYIiiCkIgIg0IgViCIgmjxQA4AvAwAqIhCCYIiDEvICYitICgi4QAQANAOAMQAPANAOALQARAOAOANQADABACACQAeAZAVARQAFAEAFADQAnAdAAgGQgBgPABgQQAAgGAAgGQAAgRABgTIAFgHIgEgJIgIgSIgbg5IgghGIgEAFIgYAdQgCgEgDgFQgEgIgFgJIAEADQABgDABgCQAGgOAFgOQgDAAgEgBQgEgBgEAAQgBACgBACQAAgCgBgDQgJgBgJgCQgQgdgPgdQgJgUgKgTQgDgIgEgHQgSgkgQgjQgFAFgEAFIgQAlIgPAkIgTArIgIATIgJATQg9gcg9ghIgBgFIgJg2ICVBSIBKApQgogJgqgNQhBgUhDgbQgOgFgOgGQABABABABQgBgBgCgBQAJAHAHAGQAIAGAHAGIgBgJQgNgHgOgHQAHAFAGAGQAIAHAHAGIAAgBQA5AuAyAnQBDA1A1ApIAwg3IAVgXIAEgFQgBADgCADIAKAFQgDgGgDgGQgHgMgGgMQglgHgngJIBUAuIABABQgFANgGAOQgPAjgQAkQAPALAOALIgGAPIjLHyICQjIQgLAYgMAZIANgOQAMgbALgaIBUh2IA7hTIAPgVIANgSIAMgRQABgIAAgIQACgTABgVQABgKABgKQABgIABgJQgFgVgEgUQgFgUgDgSQgDgMgCgMQgMg6gHgzQAYgxAbgzQAnhKAshNIAWgJIAxgUIBqgtIgHIfIgrhZIgBATIAAAJIAJgJQgFAAgEAAQgcABghgBIAAAWIgBA0IASgTIAsguIgBB/IgHHfIh7kMQgog9gkg6IAOgPIgGgOIgXgxIATgaIAVgdQgQgGgQgFIAAAAQAAAAAAgBQgDgJgCgKQAEgkAFgoQAFgjAGglQAFgeAGgfQAFgYAGgXQAahoAvhwQAWg3Acg6IgBBdIgDD0QAOgnAQgpQAPgpASgrIgEFJIg8h4IgJgTQAFgNAFgNIgBAtIgCCLQgGAAgGgBQgQgegQgcQgLgWgMgVQgUAugWAxQgTgCgVgDQgNgBgNgCQgcgDgdgEQgKgCgKgBQgCAAgDgBQAFgLAFgKQACgFADgEQAJgVAKgVQAMgZAMgZQgDgTgCgSQgHAPgHAQQgTAtgUAuIgpgRIgagKIhkgqIithHIjShXIDXB3IgFggIghjSIgagaIMEkwgADDlXQAig8Amg+AANAJIAHgJIgCAAIgPgHQgHARgIASQgBgBgCAAQgJgbgOgYQgSgcgbgVQgagVgigNIgGgFIg8g8IGUirAgVAxIABgBIAIgKQgBgDgBgDQgDAIgDAIAgMAmIAIgJIARgUAgIA6QgCgLgCgJAgDBfQgBAAAAAAIghBQQAPALAOAKQADACADACQgCAKgDAKQgMAxgQAxQAPg2AIgvQACgLACgKQAIg3gDguQAAgBgBgBQAAgIgBgIQgBgKgCgJAARBoQgFgCgFgCQgGgDgEgCAB2C0QgGgUgFgUQgEAIgFAJQgFALgGALQgIAQgJARQgHAOgIAOQAIAEAGAEQAOAIAKAFQAFADAFABQANAFACgFQACgFACgFQAFgPAGgPQgIgXgHgWgABrCLQgDgBgEgBQgUgIgUgHQgVgJgWgJABSDmQgGgJgGgJQgcgxgbgwQgHAqgKArQAhAZAYAPQgFALgGALQgYAtgZAtQgqBLgvBNQgBABgBACQgOAXgPAXQAGgPAHgPIASgTIDQjcQgGgKgFgJQgFgIgFgIQgGgJgFgKgABrCMIAAgBACAENIAPgQQgFgOgFgOQAdhQAhhdQgVgBgXgCQgVAtgXAuAhmHoIANgSQAhhRAVhHQgcBTgnBXgAD+HzQghgxgfgvIg+iGAD+HzQhFiBgqh1IB0h7g");
	this.shape_10.setTransform(65.3,62.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF0000").ss(20.7,1,1).p("AFnncIBVgbIgLMlIAAA/QgSgbgRgbQgZgmgYgkQg5hXg2hQQgKgOgJgOQgJgNgKgNQgWgggWggQAGgTAFgTIgDAEQgHANgHANQgGgKgHgJQgRgXgRgXQgRgYgSgXQgMAUgLAUQgIgWgHgVQgQA8gTBIQgDAKgDALQAAAAAAABQgBAEgCAEIgGgDQgFAIgFAIQgKgPgKgRQAAgBgBgBQgDgBgDgBQgJgCgKgDQgYgHgZgIQgKgDgLgEIgTAjIgUAkQAqAgAkAbQAOAKAMAJIAJgKQgDAGgEAFQgEAIgEAIQARAOAOAMQgDAMgEAMQgDAJgDAJIhSCeQAdhjAKhSQglBCgmBGIimCpIgFguIgGhGIh1DVIB7iPID5kgQABgRABgPQAAgKAAgKQAAgkgFgfQgagNgbgPQh6hDh+hOIgBgCQgGgDgHgEQABABABAAQgBAAgBgBQAFAEAEAEQADACACACIAAAAIAAgDQgGgEgGgEQAEAEADADQADACACACQCCBoBiBKIgFAKQAtAmAmAfQAIAGAHAGIALgNQABABABAAQAQAMANAKQAGADAEADIgJATQAiAbAXATIAPgWQACABACACQgHALgHALQBAAvACgIQAEgPADgPQAGACAEABQgDgGgEgFQABgGACgFQAMguAOg0QAAgBAAgBQgJgWgHgWQgFgMgEgLQgbgIgcgGQgZgHgYgHQgCgBgDgBQgBAAgBAAIACABIAFACIArAWQADgFADgEQAPgcAPgbQASgfARgfQBhimB0ivIAKgDIAhgLIgDC5QADgGAEgHQAVgrAXgrIgJJ8IAABBIgFFxIjrmIIgxhSQAWgYATgUIBYhcIARgTQgSgEgSgFQgOgDgPgEQAGgJAEgKQANgXAMgYIgshHIgOAQQADgJADgJQAKgeAKgeQAyiQBTidQAQgfASgggAE8nOQAVggAXgiACcgwQgDgEgDgEQgSAkgUAjQgJgDgKgCQgNgkgMghQgMgkgLghQgZAsgZAtQgFAKgGAJIAAABQgCADgCAEIgegQIgHgEIhLgnIgGgDIgIAPQiBgsiLhEIgEgyIgBgDIgRiwIgbgaIONkXIgCDKICNguIgPQuIiJjbIgjg4IgwhOIh9jHQA+h6BFiKIgGHLIgBBFIgEEyQh+jKhFizQgFgMgFgMQAAgCgBgCQgLgcgKgbQAIgcAJgeQgLgDgMgDQgFAJgFAJQgRAfgSAfQgEAIgFAHIAKgOQAAgBgBAAQgRgIgRgJIgSgeIgLALIgDAEIgcAgIgNAYQAlAaAaARIAZgkIAHgLIADgFQgBADgCADIAAgBIgWglQgMgGgMgGQgCgDgDgEQgLgUgNgTIATgWIgNgHQgDANgEANQgEgGgFgHQgJAQgJARQgMAVgMAWIAhgmQgFgDgEgCQgggQgggRQgEgegJgaQgDgKgEgJQgBgDgCgEQgBgBAAgBIACABIBMAmQgCgEgDgDQgWglgXgkQgFAGgGAHIgPAdIgBABIgDAEIkYiTIhegxIhIgmAoAkOIBdAuIEbCQQgjhKhKgmIhFhCIJ2jMAgSgUQgQgFgRgFQgDgFgEgGgAgUAUQgBgCAAgBQgBADgBADgAgeAuQgEgCgFgCIAQgTQgDAMgEALgAAJBCQgEgCgEgBQgPgIgQgJQgJAggLAjQgCAJgEALQAEACADADIgUAlQgvCXhTCjIDPkxQADABACACQhnCxh9C4QgBACgCACQgQAXgQAXQAFgMAFgMQAIgRAGgQQAHgPAFgPIAPgWQgNAagOAaQgLAWgNAWQAFgFAFgGQANgNAMgNQDNjYByh6QADgCACgCIgEgIQACgBABgBQAPgeAQggQAZgwAagzQgagGgdgIQAKghALgkAhcBnQACACADACQgMAWgNAXQACgPABgOgABZC8QgVgfgUgeQAAAAAAgBQgUgegTgeABoDSQgEgFgEgGQAGAAADgBIgNgVIglg9QgDAFgEAGQgKATgLATQAnAYAUAHQACgEABgEAmdimQCABuBfBOIiuE/gAiXFNIjEF1ICFjDQAmhfAZhTgAFZIfQhjiChYh9Qgbgngbgn");
	this.shape_11.setTransform(66.2,61.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF0000").ss(21.3,1,1).p("AHEozIA/gRIBqgaIgQSZIhniJIAAAUQgNgRgOgRIgDEPImIoaQACgCABgBQgEgGgEgFQgFgHgGgHQAJAEAGABQAOADADgGQAPgWAPgWQAPgYAQgYQADgEADgFQgLgNgLgNQAGgOAHgPQAhhIAlhPQANgdAPgeQBLiZBoimQAKgQALgQIAAAbIgCCIIgLMJIAAAXQiFish+iaIABgBQgBAAgBgBQgLgFgLgFQgOgGgNgGQgYgKgZgMQgCgBgDAAQgrgTgtgVQgGgCgFgCQgHAPgHAQIgEgDQgVgbgUgcQgEgFgFgGQgCACgDADQgEAFgEAFIgGAIIgPAYIgSAcIgKANQAnAgAgAZQgCADgDADIAFgGQADADADACQghBIgkBPQgeBCgkBDQgMAYgNAXIDGkuQATAOAPALQBBAvAEgJQAEgIAEgJQABgCABgCQACgEACgFQARgiARglQAIgSAJgSQAFgMAGgLQgGgHgGgHQgNgPgMgPQgNAVgNAUQgBACgBABQgYAlgZAmQgBABgBABQgGALgHAKQgIAMgIAMQiaDpi0DwQgBABgBABQgRAYgSAXQADgJAEgIQAPgQAPgQQEjkzB/iHIgHgKIgPgUQADABADABQgTgZgSgZQgcglgbglQgDgEgDgEQgBAAAAgBQgCgCgBgCQgCgCgBgCIhFgrIh+hQIgLgGIj3icIgBgVIgGh4IgcgbIQWj+IgCCPIgNP2IgagkIgBAWQgSgYgSgXIgDDWQiUjNhki5QgRgfgQgdQgLgUgLgVQgEgGgDgHQgHgMgGgMQgQgegQgcQgBgBgCgDQgTgigSgfIAiAQQAFgHAFgIQgXgZgWgaQgHALgIALQgFAIgFAHQgOAVgNAUQgKAPgKAPQgBACgBABQgHAJgHAKQgDAFgDAEQgFALgFALIAWgbQgDgCgDgCQgBAAAAgBQgDAFgCAFQgIAMgIALQACABABABIADgDQgBACgBACQgFAKgFALQASANAPAMQACACADACIAOgWIAHgLIAQgYQgUgMgVgMIAOgPIAFgFIgJgGIgFgDQgBAAAAABQgGAMgFALQgmgWgmgYQgxgegxgfQiGhWiIheQgEgCgDgDQACACABABQACACACABQCgB/B0BXQAnAeAjAYQAoAcAhAXQgGAJgGAKQAAAAAAAAIAPgRQAAABABAAQAVAPATAMQABAAABABQAUANAQAKQAbAQATAJIghguIgYghIgSAUIgJAKIgRATIgIAJIigD6IiADKQAuh1AdhmQANgrAJgpICbi2QhWCBhbCJQgJAOgJAOIiqCvIgCglIgCgfIhcCNIBehuIDUj6QAThQAIhFIjxFwIglrpIAAAAIAAgBIAAgBQgFgDgEgDQABABABABQgBgBgCgBQADADADACQACACACABQCjCKB0BfQgBgJgCgKQgCgSgEgRQgFgWgIgVQAAAAgBgCQgFgCgFgCQh5g6h9hKIgBgYIh+hPIB9A6IDTBkQgbgfgkgWIhGhEINMjWIAEgBgACzACQB5i6CFjXQAIgOAJgOQASgeATgeIgLN1IglgwIkElcIgZgfIgcgmIgWAXQgKgLgJgMQCcjvC6j7QAMgRANgQAC0AvQgBgBAAgBQgIgJgIgKQAIgMAIgMAgChZIARAIIAaANQgIgOgIgOQgHgMgGgMQgHAPgHAQQgKAWgLAXQgdgNgegOQgHgDgHgDQgggOghgPQgmgQgmgTQgRgugegjgAjWgqQAgAaAdAWIg+BgQAIhQgHhAgABTCWQAeggAUgWIAvgxAlXI0QACgFACgFIg5BaIgzBQAltJqQAMgcAKgaIBrilQg6BshHBvQgFAIgFAIQAEgEADgDQACgFABgEgAmMKEIA1hQAG0JLQi9jgikjV");
	this.shape_12.setTransform(67.2,61);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF0000").ss(21.9,1,1).p("Ao2mdIgBhIIgdgbIShjmIgCBcIgQSnIAAACQgJgKgIgKIgDCxIn6pRQADgDADgEQgCgCgCgCQADAAABgBQALgQAKgQQAKABAEgFQACgCABgCQgDgEgDgFQAFgHAEgHQgSgMgUgMQgFgHgFgGQgCADgCACQgagQgbgRQgFgDgGgEQgKAPgKAQQAAABgBABIglgbQgEAEgDADQgBABAAAAIgBACIgPAUQAKAGAJAHIAOgVIABgCQgIgGgJgHQh9hYh+hdQgDgKgEgJIhihIQg8gng8gqIAAgHIgBgaIByAyIhFhBIQfjTQAFgHAFgHIAAAMIgBBbQANgRANgRIgPRRIAAACQgMgOgNgNQjQjrjIjYQgHgHgGgHQAEgGAFgGQC7jzDHkPQAUgbAUgcIgOQTImcnaIgJgLQBQh6BYiOQARgdASgdQBlieB6inQAGgHAEgHAIWp/IAKgCIArgJIBGgOIgRUFIhFhQIgRgUIgZgcIAAADIgCCHQihjCiCi1QgWgegVgdQg0hJgyhCQgBgCgBgBQAHgJAGgIQgFgDgFgDQAEgFADgFQAFgHAEgHIgmgqIgMANIgNAPQgBABAAAAQgUgagUgZQgHAMgKALQgMAQgMAPQgDgDgEgEQgPgSgPgRQgEAFgEAFIkJjBQgCgGgDgGQghhLhAgtIgDgEII7D9QDEkEDbkNgAo1l6IAAgCQgGgEgHgEIAGAFAo2l6QABAAAAAAQABABAAAAQCCBtBmBUQgDgJgCgJQgBgDgCgDQhTg+hVhAQBcBJBPA7QCVBxBhBBQAJAGAJAGQALAHAKAFIAHgHQgDAEgDAEQgIAMgIAMQgSAcgTAeQg8BehABnQhUCLhlCPQgnA4gqA4QgDAEgDAEQADgCACgDQABgBAAgCQACgEACgEIg6BNIBJh0QAdhKAYhEQAOgnALgmIDpkTIBNh8QAJAHAHAGQADABABACQADACACABQAUAPAQAMQAJAGAIAFQAYARAPAHIgegkQgEAGgFAGQjVEcjsEgQgBACgCACQgTAYgUAXQADgGACgGQATgUASgTQF6mOB9iFIgPgRQAMAGAFAAQgVgYgWgZQgCADgCAEIgMgOIgOAPIgyA2IlRHFIhNBoQAIgUAHgTIDYlYIBfiWIBdhvIATgWQAAABABAAQAEACADADQAQAJANAIQgLgNgLgMQgDAEgEAEQgJALgJALQgUAbgWAcQhMBihPBmQg6BMg8BOIgtAwIiBCGIgBgcIAAgIIg/BUIA/hMICbi3QAIgZAHgZIiqDhIgNvBAo2l6QgDgCgDgDQAEADADACApCmEQAHAFAFAFAo1mDIhbhCIBaAoAlgjvQgugdgvgfIh4hYAo0l5IA4ArAA2AIQgHgEgHgEQgOATgPATQgDAFgEAEQgFgIgHgHQgDgEgEgFQAPAJALAGQAqAXATACQAGgIAFgJQgOgTgPgTgAA6gVQgWgXgXgXQgEAFgFAGQgEgGgFgHQgJAPgKAOQhphBh1hFQg0ggg2ghABmAmQADgDADgEQgFgFgEgEQgUgWgVgVABbA6IAQgRQgCgBgDgCAAzBkQAbgcANgOAlMi4QCJBwBZBEIkUFqQBnldg1jBgAIPJ3Qj6kPjikE");
	this.shape_13.setTransform(68.1,60.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF0000").ss(22.5,1,1).p("AJ9qbQAGgHAGgHIgRUXIAAAEIgBBUIpzqDQACgDADgDQgMgNgOgOQgLgLgLgLQgCgCgCgDQg2BCg2BEQifC3ihC8IhHBLIA5heIhVBjIhQBdIAAAAIBRhiIBghxIFLofQiiiEihiHQgBgBgBgCQAAgBAAAAIimiJIgKgIQgEgDgFgEQADACADACQAGAGAHAEIAAgXIAAgaIgegdIUqjMIAAAsIAjgFIgTVvIgrgsIgMgMIiLiOIjCjEQhXhVhWhVQgngmgngmQABAAABgBQABgCACgCIgagZIgFAEQgLgKgLgLQgDACgCADQgCgDgDgDQgDAEgDADQiShyidh2QhHg2hIg4QhQg9hPg/QgFgEgFgEIgDgDIgvgmIA8AZIAnARIgfgdITrjHQACgCACgCIAAADIgBAuIgRT9QhFhGhGhEAJ7rIQABgCACgCAJ6rIIABAAIADgBIAVgDIgSVDQgFgEgEgFQgGgGgGgGIAAAEIgBA+Qivi4igixQgagegbgcQhlhxhjhqIACgCQgGgEgFgFQgCgBgBgBQgIgHgHgIIgCACIgCAEIgOAPQgBABgCACQgCADgDADQkPFAkbFAQgDAEgEAEQgVAXgVAXQABgBAAgCIgZAeIAmg+IBFhwIgrAsQAIgUAHgTQABgCAAgDQDuqKiGkRQhUhGhUhGIAAgBIAAAAIAAAAIAAgBQBTBCBKA4Qgeg0gsgkIgsgoIL0E8QDmkNDykTgABCgFQCAidCFiqQAWgcAWgdQB+ifCKikAnalhQgBgBgBgCQHaFoBEgJQAGgBADgDQD2kbD8krQAggmAggmAqDnkIgJgIAqDnkQAFAEAFADQBZBLBNA/QAMAKAMAJIgYgUQgEgGgDgHAp5ncQgFgEgFgEAm7lAIBvBbAgigEQgFAFgEAGQgHgGgHgGQgJAJgJAKImaHfIAMgTIGWnkIkJjbQDOClBcA8QADACADACQAQAJAMAHQALAHAJAEQgBgBAAgBQgJgGgIgHQgLgJgNgJQgDADgDADQgFAGgGAGQg4BAg4BBQhPBjhQBmQiWDBijDDQAAABgBAAQABAAAAgBIAAAAQAGgQAGgPQAOgiAMgiIhBBEIAAgOIgQATIAQgTIARyJAAKAEIgGAGQgKgLgLgLQgCADgDADQgDgDgDgCQgDAEgDADAAEBDIgagbIgDgEIhLBQIoDJdQAUgVATgUQHdn3BnhugAAUAbQABAAABAAQAKAFAEgCQgNgNgNgNAAfAmQgGgFgFgGAAJA9QARgSAFgFAJrKkQk0kykkkqQgFgFgFgGAApAZQANgPAMgPAqqLTIAQgTApvLaQAEgEAEgFIgJAKQABAAAAgBgAEfEUIj2j7");
	this.shape_14.setTransform(69.1,59.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FF0000").ss(23,1,1).p("AgdAgILtKwALksLIsBMrArPpXIKyJ3IrGLs");
	this.shape_15.setTransform(69,59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-7.5,171.4,171.4);


(lib.beginBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRCdQgTgFgRgKIAAAMIg6AAQgSAAgIgHQgIgHAAgLQAAgLAIgHQAIgHASAAIAIAAIAAjXIgIAAQgSAAgIgHQgIgHAAgLQAAgLAIgHQAIgHASAAIA6AAIAABwQASgMAUgGQARgGAUAAQA0AAAkAkQAkAkAAAyQAAAwgjAhQgiAgg4AAQgUAAgSgFgAgfgBQgWAUAAAeQAAAcAUASQATARAjAAQAkAAATgRQAUgSAAgbQAAgfgWgUQgWgWgfAAQgeAAgWAWg");
	this.shape.setTransform(942.2,112);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhBBnQgfgQgQgbQgRgbAAgeQAAgdARgdQARgdAfgQQAfgRAhAAQAiAAAgARQAgARAPAdQAQAcAAAeQAAAcgQAbQgPAbggAQQgfAQgjAAQghAAgggPgAg4gtQgWAVAAAcQAAAXAWAVQAYAUAgAAQAiAAAXgUQAXgVgBgXQAAgXgRgVQgYgbgmAAQghAAgXAWg");
	this.shape_1.setTransform(913.2,116.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiLB2IAAhSQAAgSAHgIQAHgHALAAQALAAAHAHQAHAIAAASIAAAxQAjARAXAAQANAAAOgGQAOgGAGgJQAIgIACgIQABgEAAgRIAAiRIg7AAQgTAAgIgGQgHgIAAgLQAAgLAHgHQAIgHATAAICKAAQATAAAHAHQAIAHAAALQAAALgIAIQgHAGgTAAIgdAAIAACXQAAAcgKARQgOAagcAPQgaAQgfAAQgoAAhDgig");
	this.shape_2.setTransform(884.8,113);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhdBUQgkgiAAgxQAAg0AnghQAnghAzAAQAdAAAaALQAaAKAMANQASASALAbQAHASAAAYIAAAVIjMAAQAIATAUAMQAUAMAhAAQAcAAAugMQATgFAHAAQAKAAAHAHQAHAIAAAKQAAAKgIAHQgJAJgmAIQgmAIgjAAQg7AAgkgigAgrg4QgSAKgMAWICTAAQgMgWgSgKQgSgLgaAAQgYAAgTALg");
	this.shape_3.setTransform(822.7,116.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA0CeQgRAAgIgHQgIgHAAgLQAAgOAMgHQAGgEATAAIAAhaQAAgTgJgHQgLgLgXAAQgPAAgNAHQgNAGgWAUIAABeQATAAAGAEQAMAHAAAOQAAALgIAHQgHAHgSAAIg5AAQgSAAgIgHQgIgHAAgLQAAgOAMgHQAGgEATAAIAAjXIgIAAQgTAAgHgHQgIgHAAgLQAAgLAIgHQAHgHATAAIA6AAIAABqQAQgJAQgEQAQgFAPAAQAaAAAUAJQAVAJANATQANASAAAcIAABeQATAAAGAEQAMAHAAAOQAAALgIAHQgHAHgSAAg");
	this.shape_4.setTransform(793,111.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag2CGQgXgUAAgdIAAhtIgSAAQgSAAgIgHQgIgHAAgMQAAgLAIgGQAIgHASAAIASAAIAAguQAAgSAHgHQAHgIALAAQALAAAHAIQAHAHAAASIAAAuIBbAAQATAAAHAHQAIAGAAAMQAAALgIAHQgHAHgTAAIhbAAIAABjQAAAQAHAFQAKAIAZAAQAmAAAhgQQAMgGAHAAQAKAAAIAHQAHAHAAALQAAAJgIAIQgMALgjAKQgkAJgYAAQgtAAgYgUg");
	this.shape_5.setTransform(764.7,112.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag2CGQgXgUAAgdIAAhtIgSAAQgSAAgIgHQgIgHAAgMQAAgLAIgGQAIgHASAAIASAAIAAguQAAgSAHgHQAHgIALAAQALAAAHAIQAHAHAAASIAAAuIBbAAQATAAAHAHQAIAGAAAMQAAALgIAHQgHAHgTAAIhbAAIAABjQAAAQAHAFQAKAIAZAAQAmAAAhgQQAMgGAHAAQAKAAAIAHQAHAHAAALQAAAJgIAIQgMALgjAKQgkAJgYAAQgtAAgYgUg");
	this.shape_6.setTransform(704.7,112.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhTBeQgsggAAg5QAAg0AkgjQAjgkA4AAQAVAAASAFQASADAPAIQAJgIAJAAQAMAAAGAIQAHAHAAASIAAAgQAAASgHAIQgHAHgLAAQgKABgHgHQgGgEgDgNQgCgOgLgHQgUgLgfAAQgjAAgUAUQgWAWAAAeQAAAeAVAQQAUARAuAAQAgAAAUgGQALgEAKgJQALgKAJAAQAKAAAHAIQAIAIAAAKQAAAQgXAPQghAWhBABQg6AAgggZg");
	this.shape_7.setTransform(673.7,116.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhdBUQgkgiAAgxQAAg0AnghQAnghAzAAQAdAAAaALQAaAKAMANQASASALAbQAHASAAAYIAAAVIjMAAQAIATAUAMQAUAMAhAAQAcAAAugMQATgFAHAAQAKAAAHAHQAHAIAAAKQAAAKgIAHQgJAJgmAIQgmAIgjAAQg7AAgkgigAgrg4QgSAKgMAWICTAAQgMgWgSgKQgSgLgaAAQgYAAgTALg");
	this.shape_8.setTransform(642.7,116.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhUCeQgSAAgIgHQgHgHAAgLQAAgLAHgHQAIgHASAAIA8AAIAAjXIgpAAQgRAAgIgHQgHgHAAgLQAAgLAHgHQAIgHARAAIBaAAIAAEJIA8AAQASAAAIAHQAHAHABALQgBALgHAHQgIAHgSAAg");
	this.shape_9.setTransform(613.1,111.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhdBUQgkgiAAgxQAAg0AnghQAnghAzAAQAeAAAZALQAZAKANANQARASAMAbQAIASgBAYIAAAVIjLAAQAHATAUAMQAUAMAhAAQAcAAAugMQATgFAHAAQAKAAAHAHQAHAIAAAKQAAAKgHAHQgKAJgmAIQgmAIgjAAQg7AAgkgigAgrg4QgTAKgLAWICTAAQgLgWgTgKQgTgLgZAAQgYAAgTALg");
	this.shape_10.setTransform(582.7,116.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AglBzQgTgEgPgIQgEAEgEABQgEACgEAAQgMAAgHgIQgHgHAAgSIAAgRQAAgSAHgIQAHgIALAAQAJAAAGAFQAHAFADAMQALAKARAFQAQAFAUAAQAiAAATgKQAJgGAAgGQAAgJgNgHQgNgGgngFQg9gGgUgRQgUgSAAgaQAAgbAXgSQAegYAyAAQAQAAARADQAPAEAPAGIAJgFIAHgBQAKAAAHAHQAHAIAAASIAAAMQAAARgEAFQgIAMgNAAQgJAAgHgGQgHgGgCgJQgMgHgNgEQgOgEgOAAQgcAAgSAKQgHAEAAAFQAAAFAKAGQAIADAbAEQAxAHATAHQAaAJAOARQAOARAAAUQAAAbgYASQgiAag2AAQgVAAgSgDg");
	this.shape_11.setTransform(553.2,116.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhABnQgggQgQgbQgQgbAAgeQAAgdAQgdQARgdAfgQQAfgRAhAAQAiAAAgARQAfARARAdQAPAcAAAeQAAAcgPAbQgRAbgfAQQggAQgiAAQghAAgfgPgAg3gtQgYAVAAAcQAAAXAYAVQAWAUAhAAQAiAAAWgUQAYgVAAgXQAAgXgSgVQgXgbgnAAQghAAgWAWg");
	this.shape_12.setTransform(493.2,116.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag2CGQgXgUAAgdIAAhtIgSAAQgSAAgIgHQgIgHAAgMQAAgLAIgGQAIgHASAAIASAAIAAguQAAgSAHgHQAHgIALAAQALAAAHAIQAHAHAAASIAAAuIBbAAQATAAAHAHQAIAGAAAMQAAALgIAHQgHAHgTAAIhbAAIAABjQAAAQAHAFQAKAIAZAAQAmAAAhgQQAMgGAHAAQAKAAAIAHQAHAHAAALQAAAJgIAIQgMALgjAKQgkAJgYAAQgtAAgYgUg");
	this.shape_13.setTransform(464.7,112.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AglBzQgTgEgPgIQgEAEgEABQgEACgEAAQgMAAgHgIQgHgHAAgSIAAgRQAAgSAHgIQAHgIALAAQAJAAAGAFQAHAFADAMQALAKARAFQAQAFAUAAQAiAAATgKQAJgGAAgGQAAgJgNgHQgNgGgngFQg9gGgUgRQgUgSAAgaQAAgbAXgSQAegYAyAAQAQAAARADQAPAEAPAGIAJgFIAHgBQAKAAAHAHQAHAIAAASIAAAMQAAARgEAFQgIAMgNAAQgJAAgHgGQgHgGgCgJQgMgHgNgEQgOgEgOAAQgcAAgSAKQgHAEAAAFQAAAFAKAGQAIADAbAEQAxAHATAHQAaAJAOARQAOARAAAUQAAAbgYASQgiAag2AAQgVAAgSgDg");
	this.shape_14.setTransform(403.2,116.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AglBzQgTgEgPgIQgEAEgEABQgEACgEAAQgMAAgHgIQgHgHAAgSIAAgRQAAgSAHgIQAHgIALAAQAJAAAGAFQAHAFADAMQALAKARAFQAQAFAUAAQAiAAATgKQAJgGAAgGQAAgJgNgHQgNgGgngFQg9gGgUgRQgUgSAAgaQAAgbAXgSQAegYAyAAQAQAAARADQAPAEAPAGIAJgFIAHgBQAKAAAHAHQAHAIAAASIAAAMQAAARgEAFQgIAMgNAAQgJAAgHgGQgHgGgCgJQgMgHgNgEQgOgEgOAAQgcAAgSAKQgHAEAAAFQAAAFAKAGQAIADAbAEQAxAHATAHQAaAJAOARQAOARAAAUQAAAbgYASQgiAag2AAQgVAAgSgDg");
	this.shape_15.setTransform(373.2,116.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhdBUQgkgiAAgxQAAg0AnghQAnghAzAAQAdAAAaALQAaAKAMANQARASAMAbQAIASAAAYIAAAVIjMAAQAHATAUAMQAUAMAhAAQAbAAAvgMQATgFAHAAQAKAAAHAHQAHAIAAAKQAAAKgHAHQgKAJgmAIQgmAIgjAAQg7AAgkgigAgrg4QgTAKgLAWICTAAQgMgWgSgKQgTgLgZAAQgZAAgSALg");
	this.shape_16.setTransform(342.7,116.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhfByQgTAAgIgHQgHgHAAgLQAAgLAHgHQAIgHATAAIAdAAIAAh4IgSAAQgSAAgIgHQgHgHgBgMQABgLAHgGQAIgHASAAIBEAAIAAAfQAfgXASgHQASgIAQAAQAYAAAXASQAQAMAAANQAAALgIAHQgHAIgLAAQgJAAgKgKQgKgJgJAAQgKAAgUANQgVANgfAbIAABKIBHAAQARAAAJAHQAHAHAAALQAAALgHAHQgJAHgRAAg");
	this.shape_17.setTransform(313.8,116);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhfCUQgSAAgIgHQgHgHAAgLQAAgLAHgHQAIgHASAAIAIAAIAAjDIgIAAQgSAAgIgGQgHgIAAgLQAAgLAHgHQAIgHASAAIByAAQAzAAAeAcQAdAbAAAoQAAAXgKATQgHAOgSAOQgSAOgSAIQgTAGgeAAIguAAIAAA0IAxAAQASAAAIAHQAIAHAAALQAAALgIAHQgIAHgSAAgAglgCIAtAAQAhgBATgPQATgOAAgVQAAgSgPgMQgQgOgdAAIg4AAg");
	this.shape_18.setTransform(284,112.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(0.1,1,1).p("EhdwgScMC7hAAAQAACCCCAAMAAAAg1QiCAAAACCMi7hAAAQAAiCiCAAMAAAgg1QCCAAAAiCg");
	this.shape_19.setTransform(613.1,118.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC6600").s().p("EhdwASdQAAiCiCAAMAAAgg1QCCAAAAiCMC7hAAAQAACCCCAAMAAAAg1QiCAAAACCg");
	this.shape_20.setTransform(613.1,118.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,1228.3,238.2);


(lib.TweenhunterExpand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hunter_pict();
	this.instance.parent = this;
	this.instance.setTransform(-216,-115);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjVH7QgPAAgGgNQgHgOAAgUQAAgUAHgMQAFgOAQAAIBpAAIAAseIhQAAQgPAAgHgOQgHgOABgWQgBgUAHgOQAGgOAQAAIB7AAIAADzQBTipArgwQApgyAjAAQAnAAAhA7QAhA5AAAeQAAAVgGAPQgHAOgKAAQgEAAgEgEQgEgEgJgWQgTgogNgPQgNgPgNAAQgcAAgoAzQgoAyhhDDIAAINIC+AAQAQAAAGANQAIANgBAWQABAUgIAOQgGAOgQAAg");
	this.shape.setTransform(165.9,-262.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AinFxQhKiiAAjkQAAjRBGiWQBFiWBmAAQBqAABECaQBECagBDzIm2AAQALC7A7BxQA7BxBVABQAxgBA1giQA0gkAig7QAKgRAHAAQAIAAAGAPQAGAOAAAUQAAATgIASQgZA6g+AyQg/AwhDAAQhuAAhKihgAiBlOQg2BigOChIGLAAQgNieg3hkQg3hkhLAAQhLAAg2Bjg");
	this.shape_1.setTransform(100.6,-261.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhWJgQgthOAAiGIAAp+IhQAAQgPAAgHgNQgGgOAAgWQAAgUAGgOQAHgOAPAAIBQAAIAAkbQAAgjAGgOQAGgPAJAAQAKAAAGAPQAGAOABAjIAAEbIDpAAQAPAAAHAOQAGANABAWQgBAVgGAOQgHANgPAAIjpAAIAAJ+QgBBUAfA4QAdA3A6AAQArAAAzgcQAzgeAcgkQAKgQAHABQAIgBAHAQQAFANAAATQAAARgGAQQgRAlg+AtQhBArg6AAQhKAAgshPg");
	this.shape_2.setTransform(38.3,-276.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABxIAQgQAAgGgOQgHgOAAgUQAAgWAHgNQAGgNAQAAIAkAAIAApMQAAhlghhGQghhHg4AAQgqAAggAnQgfAmg6CYIAAJZIAxAAQAPAAAHANQAGANAAAWQAAAUgGAOQgHAOgPAAIiNAAQgPAAgHgOQgGgOgBgUQABgWAGgNQAHgNAPAAIAxAAIAAsbIgkAAQgQAAgHgOQgGgOAAgWQAAgUAGgOQAHgOAQAAIBPAAIAACSQAthmAlgnQAlgnAsAAQAyAAAoAvQAcAiAYBQQAYBPgBBTIAAJcIAlAAQAPAAAHANQAGANAAAWQAAAUgGAOQgHAOgPAAg");
	this.shape_3.setTransform(-25.1,-263.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiEG1QgqhkAAiGIAApqIg7AAQgPAAgGgOQgIgNABgXQgBgUAIgNQAGgOAPgBIBlAAIAALMQAABeAbA8QAbA9AoAAQBoAABYjXIAApqIhQAAQgPAAgGgOQgHgNAAgXQAAgUAHgNQAGgOAPgBIB7AAIAAN9IAlAAQAPAAAHAOQAGANAAAVQAAAVgGAOQgHANgPAAIhQAAIAAiNQhYCzhmgBQg/ABghhNg");
	this.shape_4.setTransform(-88.6,-259.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABVKcQgPAAgHgNQgHgOAAgVQAAgVAHgNQAGgOAQAAIA6AAIAAomIkeAAIAAImIA7AAQAPAAAHAOQAGANABAVQgBAVgGAOQgHANgPAAIiWAAQgPAAgIgNQgGgOAAgVQAAgVAGgNQAIgOAPAAIAwAAIAAx3IgaAAQgQAAgHgNQgGgOgBgVQABgWAGgNQAHgNAQAAICAAAQAPAAAHANQAGANABAWQgBAVgGAOQgHANgPAAIg7AAIAAHyIEeAAIAAnyIg6AAQgPAAgHgNQgHgOAAgVQAAgWAHgNQAGgNAQAAICAAAQAQAAAGANQAIANgBAWQABAVgIAOQgGANgQAAIgaAAIAAR3IAwAAQAQAAAGAOQAHANAAAVQAAAVgHAOQgGANgQAAg");
	this.shape_5.setTransform(-150.7,-278.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("EgtLBQXQAAjOiSiTQiTiTjPAAMAAAiRFQDPAACTiTQCSiTAAjPMBaXAAAQAADPCSCTQCTCTDPAAMAAACRFQjPAAiTCTQiSCTAADOg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-339.1,-514.3,678.3,1028.7);


(lib.Tweenhunter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjVTBQgPAAgGgeQgHghAAgyQAAguAHgfQAFggAQAAIBpAAIAA+AIhQAAQgPAAgHghQgHghABg0QgBgyAHggQAGghAQAAIB7AAIAAJFQBTmWArhzQAph2AjAAQAnAAAhCMQAhCJAABHQAAA1gGAjQgHAhgKAAQgEAAgEgIQgEgLgJg0QgThggNgkQgNgkgNAAQgcAAgoB5QgoB5hhHVIAATtIC+AAQAQAAAGAhQAIAegBA1QABAxgIAhQgGAhgQAAg");
	this.shape.setTransform(165.9,-7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AinN4QhKmGAAonQAAn2BGlnQBFloBmAAQBqABBEFyQBEFwgBJKIm2AAQALG/A7ETQA7EPBVAAQAxAAA1hVQA0hVAiiMQAKgpAHAAQAIAAAGAkQAGAgAAAvQAAAvgIAsQgZCJg+B4Qg/B3hDAAQhugBhKmCgAiBskQg2DrgOGEIGLAAQgNl+g3juQg3jvhLAAQhLAAg2Dsg");
	this.shape_1.setTransform(100.6,-4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhWW1Qgti9AAlBIAA39IhQAAQgPAAgHghQgGghAAg0QAAgyAGggQAHghAPAAIBQAAIAAqpQAAhSAGgkQAGgjAJAAQAKAAAGAjQAGAkABBSIAAKpIDpAAQAPAAAHAhQAGAgABA1QgBAxgGAhQgHAhgPAAIjpAAIAAX9QgBDIAfCGQAdCHA6AAQArAAAzhFQAzhHAchYQAKgkAHAAQAIAAAHAkQAFAhAAAvQAAApgGAjQgRBbg+BrQhBBog6AAQhKAAgsi9g");
	this.shape_2.setTransform(38.3,-41.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABxTNQgQAAgGghQgHghAAgxQAAg0AHgeQAGghAQAAIAkAAIAA2EQAAj0ghioQghiqg4AAQgqAAggBdQgfBbg6FtIAAWlIAxAAQAPAAAHAhQAGAeAAA0QAAAxgGAhQgHAhgPAAIiNAAQgPAAgHghQgGghgBgxQABg0AGgeQAHghAPAAIAxAAIAA94IgkAAQgQAAgHghQgGggAAg1QAAgxAGghQAHghAQAAIBPAAIAAFdQAtj1AlhdQAlhdAsAAQAyAAAoBwQAcBTAYDAQAYC9gBDIIAAWrIAlAAQAPAAAHAhQAGAeAAA0QAAAxgGAhQgHAhgPAAg");
	this.shape_3.setTransform(-25.1,-8.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiEQZQgqjxAAlBIAA3OIg7AAQgPAAgGghQgIghABg0QgBgyAIggQAGghAPAAIBlAAIAAa3QAADhAbCRQAbCSAoAAQBoAABYoEIAA3OIhQAAQgPAAgGghQgHghAAg0QAAgyAHggQAGghAPAAIB7AAMAAAAhgIAlAAQAPAAAHAhQAGAeAAA1QAAAxgGAhQgHAhgPAAIhQAAIAAlSQhYGshmAAQg/AAghi4g");
	this.shape_4.setTransform(-88.6,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABVZFQgPAAgHghQgHghAAgxQAAg1AHgdQAGgiAQABIA6AAIAA0rIkeAAIAAUrIA7AAQAPgBAHAiQAGAdABA1QgBAxgGAhQgHAhgPAAIiWAAQgPAAgIghQgGghAAgxQAAg1AGgdQAIgiAPABIAwAAMAAAgq9IgaAAQgQAAgHgeQgGghgBg0QABg0AGgfQAHggAQAAICAAAQAPAAAHAgQAGAfABA0QgBA0gGAhQgHAegPAAIg7AAIAASsIEeAAIAAysIg6AAQgPAAgHgeQgHghAAg0QAAg0AHgfQAGggAQAAICAAAQAQAAAGAgQAIAfgBA0QABA0gIAhQgGAegQAAIgaAAMAAAAq9IAwAAQAQgBAGAiQAHAdAAA1QAAAxgHAhQgGAhgQAAg");
	this.shape_5.setTransform(-150.7,-46.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("EgtLBQXQAAjOiSiTQiTiTjPAAMAAAiRFQDPAACTiTQCSiTAAjPMBaXAAAQAADPCSCTQCTCTDPAAMAAACRFQjPAAiTCTQiSCTAADOg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-339.1,-514.3,678.3,1028.7);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hunter_pict();
	this.instance.parent = this;
	this.instance.setTransform(210,-205,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210,-205,420,410);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hunter_pict();
	this.instance.parent = this;
	this.instance.setTransform(210,-205,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210,-205,420,410);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hunter_pict();
	this.instance.parent = this;
	this.instance.setTransform(210,-205,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210,-205,420,410);


(lib.TweenBardhit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AidJAQg2g8gfhvQgfhuAAh2QAAh2AfhsQAfhuA2g9QA1g8A7AAQBwAABODFIAAnTIg7AAQgPAAgHgMQgGgMAAgTQAAgRAGgMQAHgMAPAAIBmAAIAASBIA6AAQAPABAHALQAGAMAAASQAAASgGAMQgHALgPAAIhlAAIAAikQhLDFh0AAQg6AAg1g7gAivhYQg3BrAACeQAACeA3BtQA4BsBNAAQBMAAA3hsQA4htAAieQAAieg4hrQg3hshMAAQhNAAg4Bsg");
	this.shape.setTransform(84.2,-20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AjUG1QgQAAgHgLQgGgLAAgSQAAgRAGgLQAGgMARAAIBoAAIAAqxIhQAAQgPAAgHgMQgGgMgBgSQABgSAGgMQAHgMAPAAIB7AAIAADRQBTiSAqgpQAqgqAkAAQAmAAAhAyQAhAxAAAaQAAATgGAMQgGAMgKAAQgFAAgEgDQgEgEgKgSQgSgjgNgNQgNgNgNAAQgdAAgnAsQgoArhhCpIAAHEIC+AAQAQAAAHAMQAGALABATQgBASgGALQgHAMgQAAg");
	this.shape_1.setTransform(20.2,-3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AjLF/QgshMAAhtQAAh5A5hYQA6haBvAAQAcAAAjAIQAjAHAoAPIAAiGQAAhEgggyQghgyhBAAQgyAAhbA4QgRAKgEAAQgIAAgGgMQgGgMAAgSQAAgRAFgJQAHgPAzgZQBQgqApAAQBRAAAtBOQAvBNgBBhIAAIjIA6AAQAQABAGALQAHAMAAASQAAASgHAMQgGALgQAAIhmAAIAAh3QheCYhpAAQhOAAgrhLgAikA7QgoA6AABRQAABLAfAzQAeAzA7AAQA4AAAvgqQAwgsAyhdIAAi2QgdgRgjgHQghgIglAAQheAAg1BNg");
	this.shape_2.setTransform(-43.7,-2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AjpJBQgQAAgHgMQgGgMgBgSQABgSAGgLQAHgMAQAAIA5AAIAAvbIg5AAQgQAAgHgLQgGgMgBgTQABgSAGgLQAHgMAQAAIEOAAQBQAAAzBaQAzBZgBB4QAACYhUBdQBDAuAgBNQAeBNAABcQABBTgVBFQgUBEgqAwQgrAxgyAAgAiEHuIDZAAQAqAAAegkQAfgjAQg0QAQg1AAg4QAAg/gWg7QgYg7gogfQgpgehIAAIiZAAgAiEg/ICXAAQAxAAApgjQAfgbARg1QASg0AAg2QAAhOgmhBQgnhCg8AAIiqAAg");
	this.shape_3.setTransform(-108.2,-17.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#33CCFF").s().p("Eg0GBaXQAAjoipilQipikjvAAMAAAijLQDvAACpikQCpilAAjoMBoNAAAQAADoCpClQCpCkDvAAMAAACjLQjvAAipCkQipClAADog");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-391.1,-578.3,782.3,1156.7);


(lib.TweenBardexpand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bard_image();
	this.instance.parent = this;
	this.instance.setTransform(-440,-261,1.188,1.423);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AidJAQg2g9gfhuQgfhugBh1QABh3AfhsQAfhvA2g8QA1g8A7AAQBwAABODFIAAnTIg7AAQgPAAgHgMQgGgMgBgTQABgRAGgMQAHgMAPAAIBmAAIAASCIA5AAQARgBAGAMQAGAMAAASQAAASgGAMQgGAMgRgBIhkAAIAAikQhMDFhyAAQg7AAg1g7gAivhYQg3BrAACfQAACdA3BsQA4BtBNAAQBMAAA3htQA3hsABidQgBifg3hrQg3hshMAAQhNAAg4Bsg");
	this.shape.setTransform(103.7,-466);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjUG1QgQAAgHgLQgGgLAAgSQAAgRAGgLQAHgMAQAAIBoAAIAAqxIhQAAQgPAAgHgMQgHgMAAgSQAAgSAHgMQAGgMAQAAIB7AAIAADRQBTiSAqgpQAqgqAkAAQAmAAAhAyQAhAxAAAaQAAATgGAMQgGAMgLAAQgEAAgEgDQgEgEgJgSQgTgjgNgNQgNgNgNAAQgcAAgoAsQgoArhhCpIAAHEIC+AAQAQAAAHAMQAHALAAATQAAASgHALQgHAMgQAAg");
	this.shape_1.setTransform(39.7,-449.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjLF/QgshMAAhtQAAh4A5haQA6hZBuAAQAdAAAjAIQAjAGApARIAAiHQgBhDghgzQgggyhBAAQgyAAhbA4QgQAKgFAAQgJAAgFgMQgGgMAAgSQAAgRAFgJQAHgPAzgZQBQgqApAAQBRAAAtBOQAvBNAABhIAAIkIA5AAQAQgBAGAMQAHAMAAASQAAASgHAMQgGAMgQgBIhlAAIAAh3QheCYhqAAQhOAAgrhLgAikA6QgoA7AABRQAABLAfAzQAeAzA7AAQA4AAAvgqQAwgrAzheIAAi3QgfgQghgHQgjgIgkAAQheAAg1BMg");
	this.shape_2.setTransform(-24.2,-448.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjpJBQgQAAgHgMQgGgMAAgSQAAgSAGgLQAHgMAQAAIA5AAIAAvbIg5AAQgQAAgHgLQgGgMAAgTQAAgSAGgLQAHgMAQAAIENAAQBRAAAzBaQAzBZgBB4QAACYhUBdQBDAuAgBNQAeBNAABcQABBTgVBFQgUBEgrAwQgqAxgyAAgAiFHuIDaAAQApAAAfgkQAfgjAQg0QAQg1AAg4QAAg/gWg7QgYg7gogfQgpgehIAAIiaAAgAiFg/ICYAAQAxAAAogjQAggbARg1QASg0AAg2QAAhOgnhBQglhCg+AAIiqAAg");
	this.shape_3.setTransform(-88.7,-463.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#33CCFF").s().p("Eg0GBaXQAAjoipilQipikjvAAMAAAijLQDvAACpikQCpilAAjoMBoNAAAQAADoCpClQCpCkDvAAMAAACjLQjvAAipCkQipClAADog");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-440,-578.3,867,1156.7);


(lib.TweenBard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgCdAmiQg2kBgfnaQgfnZgBn2QABn6AfnVQAfnYA2kCQA1kCA7AAQBwAABONNIAA/RIg7AAQgPAAgHg0QgGgygBhQQABhMAGgzQAHgzAPAAIBmAAMAAABNQIA5AAQARAAAGAzQAGAuAABQQAABMgGAzQgGAzgRAAIhkAAIAArBQhMNNhygBQg7AAg1j9gAivl7Qg3HQAAKjQAAKgA3HUQA4HQBNABQBMgBA3nQQA3nUABqgQgBqjg3nQQg3nRhMAAQhNAAg4HRg");
	this.shape.setTransform(103.7,-34.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjUdRQgQAAgHgvQgGgyAAhMQAAhIAGgvQAHgyAQAAIBoAAMAAAguLIhQAAQgPAAgHgzQgHgzAAhQQAAhMAHgyQAGgzAQAAIB7AAIAAN/QBTpxAqixQAqi2AkAAQAmAAAhDYQAhDTAABtQAABRgGA3QgGAygLAAQgEAAgEgMQgEgRgJhRQgTiTgNg3QgNg3gNAAQgcAAgoC6QgoC5hhLTIAAeVIC+AAQAQAAAHAzQAHAuAABQQAABMgHAzQgHAzgQAAg");
	this.shape_1.setTransform(39.7,35.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjLZpQgslFAAnWQAAoDA5l/QA6mABuAAQAdAAAjAiQAjAdApBDIAAo9QgBkkghjYQggjXhBAAQgyAAhbDxQgQArgFAAQgJAAgFg0QgGgyAAhMQAAhIAFgqQAHhAAzhtQBQixApgBQBRAAAtFOQAvFJAAGjMAAAAkqIA5AAQAQAAAGAzQAHAuAABQQAABMgHAzQgGAzgQAAIhlAAIAAn/QheKKhqAAQhOAAgrlAgAikD7QgoD6AAFZQAAFCAfDbQAeDbA7ABQA4AAAvi2QAwi6AzmRIAAsNQgfhHghghQgjgjgkAAQheAAg1FNg");
	this.shape_2.setTransform(-24.2,40.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgDpAmmQgQAAgHgyQgGgzAAhMQAAhQAGgvQAHgyAQAAIA5AAMAAAhCHIg5AAQgQAAgHguQgGgzAAhQQAAhQAGgvQAHgyAQAAIENAAQBRAAAzGAQAzF8gBIDQAAKKhUGSQBDDFAgFJQAeFKAAGNQABFigVEoQgUEjgrDPQgqDPgyAAgEgCFAhEIDaAAQApAAAfiYQAfiYAQjgQAQjgAAjxQAAkOgWj9QgYj+goiDQgpiDhIAAIiaAAgAiFkSICYAAQAxAAAoiTQAgh3ARjfQASjgAAjoQAAlOgnkXQglkbg+AAIiqAAg");
	this.shape_3.setTransform(-88.7,-24);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#33CCFF").s().p("Eg0GBaXQAAjoipilQipikjvAAMAAAijLQDvAACpikQCpilAAjoMBoNAAAQAADoCpClQCpCkDvAAMAAACjLQjvAAipCkQipClAADog");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-391.1,-578.3,782.3,1156.7);


(lib.notetween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.musicnotepngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-23.5,-28.5,0.067,0.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-28.5,47.1,57.1);


(lib.notetween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.musicnotepngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-23.5,-28.5,0.067,0.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-28.5,47.1,57.1);


(lib.notetween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.musicnotepngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-18.1,-29.1,0.051,0.051);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.1,-29.1,36.2,58.3);


(lib.notetween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.musicnotepngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-18.1,-29.1,0.051,0.051);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.1,-29.1,36.2,58.3);


(lib.bardplayingsymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bard_image();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bardplayingsymbol, new cjs.Rectangle(0,0,730,470), null);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.WizardPortal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_6 = new cjs.Graphics().p("Egh4AjBMAAAhGAMBDxAAAMAAABGAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_graphics_6,x:-200,y:225.1}).wait(19));

	// Character
	this.instance = new lib.WizardAnim();
	this.instance.parent = this;
	this.instance.setTransform(136.5,295.4,3.915,4.143,0,0,0,0,0.2);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({x:-158.5},8).wait(11));

	// MainPortal
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgoAAQAAA6ANAoQALApAQAAQARAAAMgpQAMgoAAg6QAAg5gMgpQgMgpgRAAQgQAAgLApQgNApAAA5g");
	this.shape.setTransform(17.3,225.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#0000FF","#000000"],[0,1],0,-0.1,0,0,-0.1,50.1).s().p("AgbBiQgNgoAAg6QAAg5ANgpQAMgoAPAAQARAAAMAoQALApAAA5QAAA6gLAoQgMAqgRAAQgPAAgMgqg");
	this.shape_1.setTransform(17.3,225.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AhDAAQAAjLAViQQATiOAbAAQAdAAAUCOQAUCQAADLQAADKgUCQQgUCQgdAAQgbAAgTiQQgViQAAjKg");
	this.shape_2.setTransform(17.3,225.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#0000FF","#000000"],[0,1],0,-0.3,0,0,-0.3,84.8).s().p("AgvFaQgUiQgBjKQABjLAUiQQAUiOAbAAQAdAAAUCOQATCQAADLQAADKgTCQQgUCQgdAAQgbAAgUiQg");
	this.shape_3.setTransform(17.3,225.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AhgAAQAAlcAej3QAcj0AmAAQApAAAcD0QAbD3AAFcQAAFagbD3QgcD3gpAAQgmAAgcj3Qgej3AAlag");
	this.shape_4.setTransform(17.3,225.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#0000FF","#000000"],[0,1],0,-0.6,0,0,-0.6,119.4).s().p("AhCJRQgej3ABlaQgBlcAej3QAcj0AmAAQApAAAcD0QAbD3AAFcQAAFagbD3QgcD3gpAAQgmAAgcj3g");
	this.shape_5.setTransform(17.3,225.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("Ah7AAQAAnuAmleQAjlaAyAAQA0AAAlFaQAjFeAAHuQAAHrgjFeQglFeg0AAQgyAAgjleQgmleAAnrg");
	this.shape_6.setTransform(17.3,225.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#0000FF","#000000"],[0,1],0,-0.8,0,0,-0.8,154.1).s().p("AhVNJQgmleAAnrQAAnuAmleQAjlZAyAAQA0AAAlFZQAjFeAAHuQAAHrgjFeQglFdg0AAQgyAAgjldg");
	this.shape_7.setTransform(17.3,225.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("AiXAAQAAp/AunFQAsnAA9AAQBAAAAtHAQArHFAAJ/QAAJ7grHFQgtHFhAAAQg9AAgsnFQgunFAAp7g");
	this.shape_8.setTransform(17.3,225.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#0000FF","#000000"],[0,1],0,-1.1,0,0,-1.1,188.7).s().p("AhpRAQgunFAAp7QAAqAAunEQAsnAA9AAQBAAAAtHAQArHEAAKAQAAJ7grHFQgtHFhAAAQg9AAgsnFg");
	this.shape_9.setTransform(17.3,225.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.1,1,1).p("AizAAQAAsRA3osQA0olBIAAQBMAAA1IlQAzIsAAMRQAAMMgzIsQg1IrhMAAQhIAAg0orQg3osAAsMg");
	this.shape_10.setTransform(17.3,225.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#0000FF","#000000"],[0,1],0,-1.3,0,0,-1.3,223.4).s().p("Ah8U3Qg3osAAsLQAAsRA3osQA0olBIAAQBMAAA1IlQAzIsAAMRQAAMLgzIsQg1IshMAAQhIAAg0osg");
	this.shape_11.setTransform(17.3,225.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.1,1,1).p("AjPAAQAAOcBAKTQA7KTBUAAQBYAAA9qTQA7qTAAucQAAuig7qTQg9qMhYAAQhUAAg7KMQhAKTAAOig");
	this.shape_12.setTransform(17.3,225.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#0000FF","#000000"],[0,1],0,-1.6,0,0,-1.6,258).s().p("AiPYvQhAqTAAucQAAuiBAqUQA7qKBUgBQBYABA9KKQA7KUAAOiQAAOcg7KTQg9KShYAAQhUAAg7qSg");
	this.shape_13.setTransform(17.3,225.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.1,1,1).p("AiuAAQAArxA2oVQAyoPBGAAQBKAAAzIPQAyIVAALxQAALrgyIWQgzIVhKAAQhGAAgyoVQg2oWAArrg");
	this.shape_14.setTransform(17.3,225.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#0000FF","#000000"],[0,1],0,-1.3,0,0,-1.3,216.3).s().p("Ah4UBQg2oWAArrQAArxA2oVQAyoPBGAAQBKAAAzIPQAyIVAALxQAALrgyIWQgzIVhKAAQhGAAgyoVg");
	this.shape_15.setTransform(17.3,225.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.1,1,1).p("AiMAAQAAo/ArmYQApmSA4AAQA7AAAqGSQAoGYAAI/QAAI7goGYQgqGXg7AAQg4AAgpmXQgrmYAAo7g");
	this.shape_16.setTransform(17.3,225.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#0000FF","#000000"],[0,1],0,-1,0,0,-1,174.6).s().p("AhhPTQgrmYAAo7QAAo/ArmYQApmSA4AAQA7AAAqGSQAoGYAAI/QAAI7goGYQgqGXg7AAQg4AAgpmXg");
	this.shape_17.setTransform(17.3,225.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.1,1,1).p("AhqAAQAAmNAhkaQAekWArAAQAtAAAgEWQAeEaAAGNQAAGLgeEZQggEagtAAQgrAAgekaQghkZAAmLg");
	this.shape_18.setTransform(17.3,225.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#0000FF","#000000"],[0,1],0,-0.6,0,0,-0.6,132.8).s().p("AhJKkQghkZAAmLQAAmNAhkaQAekWArAAQAtAAAgEWQAeEaAAGNQAAGLgeEZQggEagtAAQgrAAgekag");
	this.shape_19.setTransform(17.3,225.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(0.1,1,1).p("AhIAAQAAjbAWicQAViaAdAAQAfAAAVCaQAVCcAADbQAADbgVCbQgVCcgfAAQgdAAgVicQgWibAAjbg");
	this.shape_20.setTransform(17.3,225.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#0000FF","#000000"],[0,1],0,-0.3,0,0,-0.3,91.1).s().p("AgyF2QgWibAAjbQAAjbAWicQAViaAdAAQAfAAAVCaQAVCcAADbQAADbgVCbQgVCcgfAAQgdAAgVicg");
	this.shape_21.setTransform(17.3,225.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(0.1,1,1).p("AgnAAQAAAqAMAeQAMAfAPAAQARAAALgfQAMgeAAgqQAAgqgMgeQgLgegRAAQgPAAgMAeQgMAeAAAqg");
	this.shape_22.setTransform(17.3,225.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#0000FF","#000000"],[0,1],0,-0.1,0,0,-0.1,49.4).s().p("AgbBIQgMgeAAgqQAAgqAMgeQAMgdAPgBQARABALAdQAMAeAAAqQAAAqgMAeQgLAegRAAQgPAAgMgeg");
	this.shape_23.setTransform(17.3,225.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},12).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.3,210.1,10.1,29.9);


(lib.TweenWizardExpand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.WizardAnim();
	this.instance.parent = this;
	this.instance.setTransform(6.4,87.3,4.233,3.834,0,0,0,0.2,0.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhtI4Qgmg8gVhtQgWhtAAhzQAAh1AWhrQAVhsAmg8QAlg7ApAAQBOAAA1DDIAAnNIgoAAQgLAAgEgMQgFgMAAgSQAAgSAFgLQAEgMALAAIBGAAIAARyIApAAQAKAAAGALQAEAKAAATQAAARgEANQgGALgKAAIhHAAIAAiiQg0DChQAAQgoAAglg6gAh6hXQgmBqAACcQAACaAmBtQAnBqA2AAQA0AAAnhqQAmhtAAiaQAAicgmhqQgnhrg0AAQg2AAgnBrg");
	this.shape.setTransform(112.5,-281.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiUGvQgKAAgFgKQgEgMgBgSQABgQAEgLQAFgLAKAAIBJAAIAAqoIg4AAQgKAAgEgMQgGgLAAgTQAAgRAGgMQAEgMAKAAIBWAAIAADOQA6iPAdgpQAdgqAZAAQAaAAAXAxQAYAxAAAZQAAATgFAMQgFAMgGAAQgEAAgDgDQgCgEgHgSQgMgigJgNQgKgMgIAAQgVAAgbAqQgcArhDCmIAAG/ICEAAQALAAAFALQAEALABASQgBASgEAMQgFALgLAAg");
	this.shape_1.setTransform(67.9,-265);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiNF6QgehLAAhsQgBh2AohYQAphZBMABQAUgBAYAIQAZAHAcAPIAAiEQAAhDgXgyQgXgxgtAAQgjAAg/A3QgLAKgEAAQgGAAgDgLQgEgMAAgRQAAgRADgKQAFgOAkgaQA3goAdAAQA4AAAfBMQAgBMAABgIAAIcIAoAAQAMAAAEAMQAFAKgBATQABARgFAMQgEAMgMgBIhGAAIAAh1QhBCVhKAAQg2AAgehJgAhyA6QgcA5AABQQABBKAVAyQAVAzAoAAQAoAAAggqQAhgqAkhdIAAi0QgWgPgXgIQgXgIgZAAQhCAAglBMg");
	this.shape_2.setTransform(23.5,-263.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiIGlIAAhJIDfqtIi6AAIAABvQAAAdgFANQgEAMgGAAQgHAAgFgMQgDgNAAgdIAAjCIECAAIAABJIjgKvIDKAAIAAhyQAAgdAEgMQAFgNAGAAQAHAAAEANQAFAMgBAdIAADDg");
	this.shape_3.setTransform(-20.6,-264);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiEJ2QgKABgGgMQgEgMAAgRQAAgTAEgKQAGgMAKAAIB2AAIAAqlIhYAAQgLAAgEgLQgFgMAAgRQAAgTAEgMQAFgLALAAIB1AAIAAL3IB2AAQALAAAEAMQAFAKAAATQAAARgFAMQgEAMgLgBgAgemiIAAjUIAsAAIAADUg");
	this.shape_4.setTransform(-64.7,-284.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABVI5IhVsnIhSMnIgvAAIgswfIgMAAQgKAAgFgLQgFgLAAgTQAAgSAFgLQAFgMAKAAIBwAAQALAAAFAMQAEALAAASQAAATgEALQgFALgLAAIhGAAIAoPBIBRsXIAtAAIBTMXIAnvBIhGAAQgLAAgFgLQgEgLAAgTQAAgSAEgLQAFgMALAAIBuAAQALAAAFAMQAFALAAASQAAATgFALQgFALgLAAIgLAAIgqQfg");
	this.shape_5.setTransform(-108.8,-278.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("EgtLBQXQAAjOiSiTQiTiTjPAAMAAAiRFQDPAACTiTQCSiTAAjPMBaXAAAQAADPCSCTQCTCTDPAAMAAACRFQjPAAiTCTQiSCTAADOg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-339.1,-514.3,2258,1770.3);


(lib.CloseBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(15,1,1).p("AIiowQADAEAEAEQDlDlAAFDQAAFBjhDkQgCACgCACQjlDllEAAQlDAAjljlQgigigdgkQimjPAAkUQAAlDDljlQAlglAngfIHhIiIIoJvAncpsQDNihEPAAQE+AADkDdIodHmIpsIt");
	this.shape.setTransform(78.2,78.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033FF").s().p("AooIpQgigigdgkIJsotIIdnmIAHAIQDlDlAAFDQAAFBjhDkIoopvIIoJvIgEAEQjlDllEAAQlDAAjljlgAItIlgAsNAAQAAlDDljlQAlglAngfIHhIiIpsItQimjPAAkUgAAFhKgAncpsQDOihEOAAQE+AADkDdIodHmg");
	this.shape_1.setTransform(78.2,78.2);

	this.instance = new lib.closeSymbol();
	this.instance.parent = this;
	this.instance.setTransform(78.2,78.2,1,1,0,0,0,78.2,78.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-7.5,171.4,171.4);


(lib.HunterChar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Layer_1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-426,-565);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-47,-237);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(210,205);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-47,y:-237},10).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},10).to({_off:true,x:210,y:205},9).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},9).wait(5).to({startPosition:0},0).wait(5).to({skewY:180,y:109.2},0).wait(5).to({y:205},0).wait(10).to({skewY:0,y:132.7},0).wait(5).to({y:205},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-636,-770,420,410);


(lib.Hunter_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tweenhunter("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,0.292);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai6DHQgNAAgGgFQgGgFAAgIQAAgIAGgFQAFgFAOAAIBbAAIAAk6IhFAAQgOAAgGgFQgFgFAAgJQAAgIAFgFQAGgGAOAAIBrAAIAABfQBJhCAlgTQAkgTAfAAQAiAAAdAXQAdAWAAAMQAAAIgGAGQgGAGgIAAQgFAAgDgCIgLgKQgQgQgMgGQgLgFgMAAQgYAAgjATQgjAUhVBNIAADOICmAAQAOAAAGAFQAGAFAAAIQAAAIgGAGQgGAFgOAAg");
	this.shape.setTransform(60.8,-83.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiSCRQhBhAAAhZQAAhSA9g7QA9g7BZAAQBcAAA8A9QA8A8gBBfImAAAQAKBJA0AtQAzAtBLAAQAqAAAvgOQAugOAdgXQAJgHAGAAQAHAAAFAGQAGAGAAAHQAAAIgHAHQgWAWg3AUQg3AUg6AAQhgAAhBhAgAhxiDQgvAngMA/IFZAAQgLg+gwgnQgwgohCAAQhBAAgwAng");
	this.shape_1.setTransform(3.7,-83.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhMDvQgmgfAAg0IAAj7IhGAAQgOAAgFgFQgHgFAAgJQAAgIAHgFQAFgGAOAAIBGAAIAAhvQgBgOAGgFQAFgGAIAAQAJAAAFAGQAFAFABAOIAABvIDMAAQANAAAGAGQAFAFAAAJQAAAIgFAFQgGAFgNAAIjMAAIAAD7QgBAgAbAWQAaAWAyAAQAmAAAtgLQAsgMAYgOQAJgGAHAAQAGAAAGAGQAFAFABAIQAAAHgHAGQgOAOg3ASQg4ARgyAAQhBAAgogfg");
	this.shape_2.setTransform(-50.8,-89.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABjDJQgOAAgGgFQgGgGAAgIQAAgIAGgFQAGgFAOAAIAgAAIAAjnQAAgogegbQgdgcgxAAQgkAAgcAPQgbAPgzA8IAADsIArAAQANAAAGAFQAGAFAAAIQAAAIgGAGQgGAFgNAAIh7AAQgOAAgFgFQgGgGAAgIQAAgIAGgFQAFgFAOAAIArAAIAAk5IggAAQgOAAgGgFQgFgFAAgJQAAgIAFgFQAGgGAOAAIBFAAIAAA5QAogoAggPQAggPAnAAQArAAAjASQAZAOAVAfQAUAfAAAhIAADtIAgAAQAOAAAFAFQAGAFAAAIQAAAIgGAGQgFAFgOAAg");
	this.shape_3.setTransform(-106.3,-84.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhzCrQglgnAAg1IAAjyIg0AAQgNAAgGgFQgFgGgBgIQABgIAFgGQAGgFANAAIBZAAIAAEYQAAAmAXAYQAYAXAjAAQBbAABNhVIAAjyIhGAAQgNAAgGgFQgGgGAAgIQAAgIAGgGQAGgFANAAIBsAAIAAFfIAfAAQAOAAAGAEQAFAGAAAIQAAAIgFAFQgGAGgOAAIhFAAIAAg3QhNBGhaAAQg3AAgcgfg");
	this.shape_4.setTransform(-161.8,-82.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABKEHQgNAAgGgGQgGgFAAgIQAAgJAGgFQAGgFANAAIAzAAIAAjZIj5AAIAADZIAzAAQANAAAGAFQAFAFAAAJQAAAIgFAFQgGAGgNAAIiEAAQgNAAgGgGQgGgFAAgIQAAgJAGgFQAGgFANAAIArAAIAAnBIgYAAQgNAAgGgFQgGgFAAgJQAAgJAGgEQAGgGANAAIBxAAQANAAAGAGQAFAEAAAJQAAAJgFAFQgGAFgNAAIgzAAIAADEID5AAIAAjEIgzAAQgNAAgGgFQgGgFAAgJQAAgJAGgEQAGgGANAAIBxAAQAOAAAFAGQAGAEAAAJQAAAJgGAFQgFAFgOAAIgYAAIAAHBIArAAQANAAAGAFQAGAFAAAJQAAAIgGAFQgGAGgNAAg");
	this.shape_5.setTransform(-216.1,-90.2);

	this.instance_1 = new lib.TweenhunterExpand("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1,2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AjhDrQgQAAgHgGQgHgGAAgKQAAgJAHgGQAHgGAQAAIBvAAIAAlyIhVAAQgQAAgHgGQgHgGAAgLQAAgJAHgGQAHgHAQAAICCAAIAABwQBYhOAtgWQArgXAmAAQApAAAjAbQAjAbAAANQAAAKgHAHQgHAHgKAAQgGAAgEgCIgOgMQgTgTgOgHQgOgGgNAAQgeAAgqAXQgqAXhnBbIAADyIDJAAQARAAAHAHQAHAFAAALQAAAJgHAGQgHAHgRAAg");
	this.shape_6.setTransform(73.4,-98.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiwCsQhPhMAAhpQAAhhBKhGQBJhFBsAAQBvAABJBHQBIBIgBBwInQAAQAMBWA/A1QA9A1BbgBQAzAAA4gQQA4gQAjgbQAKgIAIAAQAJAAAGAGQAHAHAAAJQAAAJgJAIQgaAbhCAXQhDAXhGAAQh0AAhOhKgAiJiaQg5AtgOBLIGhAAQgOhKg6guQg6guhPAAQhPAAg6Aug");
	this.shape_7.setTransform(4.4,-98.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhbEaQgwglAAg9IAAknIhUAAQgQgBgHgGQgHgGAAgLQAAgJAHgGQAHgGAQAAIBUAAIAAiEQAAgPAHgHQAGgIAKABQALgBAGAIQAHAHAAAPIAACEID2AAQAQAAAHAGQAHAGAAAKQAAAKgHAGQgHAGgQABIj2AAIAAEnQAAAmAgAaQAfAaA8AAQAuAAA2gNQA2gOAegRQAKgHAIAAQAIAAAHAHQAGAHAAAJQAAAHgHAHQgRAShDAUQhDAVg9AAQhPAAgvglg");
	this.shape_8.setTransform(-61.5,-105.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AB3DtQgQAAgHgGQgHgGAAgKQAAgKAHgGQAHgGAQAAIAmAAIAAkQQAAgvgjggQgjghg7AAQgsAAghASQghARg9BHIAAEWIAzAAQARAAAGAGQAIAGAAAKQAAAKgIAGQgGAGgRAAIiVAAQgQAAgHgGQgHgGAAgKQAAgKAHgGQAHgGAQAAIA0AAIAAlwIgnAAQgQAAgHgHQgHgGAAgKQAAgKAHgGQAHgGAQAAIBVAAIAABDQAvgvAngSQAmgSAvAAQA0AAAsAWQAeAPAZAmQAYAkAAAnIAAEXIAnAAQAQAAAHAGQAHAGAAAKQAAAKgHAGQgHAGgQAAg");
	this.shape_9.setTransform(-128.4,-99.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiMDKQgtguAAg+IAAkeIg9AAQgQAAgHgGQgHgHAAgKQAAgJAHgHQAHgGAQAAIBrAAIAAFLQAAArAcAcQAcAcArAAQBuAABdhjIAAkeIhVAAQgQAAgHgGQgHgHAAgKQAAgJAHgHQAHgGAQAAICCAAIAAGdIAnAAQAQAAAHAGQAHAGAAALQAAAJgHAGQgHAGgQAAIhUAAIAAhBQheBThrAAQhDAAgjgkg");
	this.shape_10.setTransform(-195.4,-97.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABaE2QgQAAgHgHQgHgGAAgJQAAgLAHgFQAGgHARAAIA9AAIAAj/IktAAIAAD/IA9AAQAQAAAHAHQAHAFAAALQAAAJgHAGQgHAHgQAAIieAAQgRAAgHgHQgHgGAAgJQAAgLAHgFQAHgHARAAIAzAAIAAoRIgcAAQgRAAgHgGQgHgGAAgKQAAgLAHgFQAHgHARAAICHAAQAQAAAHAHQAHAFAAALQAAAKgHAGQgHAGgQAAIg9AAIAADnIEtAAIAAjnIg9AAQgQAAgHgGQgHgGAAgKQAAgLAHgFQAGgHARAAICHAAQARAAAHAHQAHAFAAALQAAAKgHAGQgHAGgRAAIgcAAIAAIRIA0AAQAQAAAHAHQAHAFAAALQAAAJgHAGQgHAHgQAAg");
	this.shape_11.setTransform(-261.1,-106.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-339.1,-150,678.3,300);


(lib.flytingnotescopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// note2
	this.instance = new lib.notetween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(126.5,3.2);

	this.instance_1 = new lib.notetween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-286,-404.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},89).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,guide:{path:[126.4,3.1,69.6,-11.8,12.8,-26.8,-118.5,-61.5,-249.9,-96.2,-264.1,-101.5,-271.7,-114.2,-274.8,-119.4,-273.5,-125.7,-270.6,-140.4,-259,-150.1,-246.8,-160.3,-232.9,-167.5,-222.6,-172.9,-211.3,-176.7,-173.9,-189.2,-135.2,-196.5,-132.2,-197.1,-129.3,-197.6,-101.3,-202.5,-73.2,-206.9,-36.3,-212.7,0.6,-217.3,121.7,-232.5,242.4,-224.6,242.4,-224.6,242.4,-224.6,274.6,-223,304.5,-214.6,312.8,-212.2,320.4,-208.7,320.4,-204.9,320.4,-201.1,316.9,-183.3,302.1,-170.8,282.9,-154.6,258.6,-147.5,231.9,-139.8,204.1,-140,198.2,-140.1,192.3,-140.5,186.5,-140.9,180.7,-141.3,137.5,-144.9,95,-153.7,52,-162.5,8.5,-168.4,-57.1,-177.3,-121.3,-193.2,-128.2,-194.9,-135.2,-196.5,-158.1,-202,-181.1,-207.1,-214.2,-214.4,-247.4,-221,-286.4,-228.6,-320.5,-246.7,-323.3,-260.8,-312.2,-271.4,-296.3,-286.4,-275,-293.1,-259.1,-298.1,-243,-302.4,-215.5,-309.8,-187.5,-315.4,-154.1,-322.1,-120.4,-326.3,-109.8,-327.6,-99.1,-328.7,-66.3,-332,-33.3,-333.5,-13,-334.4,7.2,-334.7,70.7,-335.5,133.8,-343.1,149.9,-345,165.6,-344.7,211.3,-344,252.7,-324.2,254.9,-323.2,257.2,-322.1,257.2,-316.1,257.2,-310.1,250,-291.2,230.1,-282.4,203.7,-270.8,176.4,-272.5,176.4,-272.5,176.4,-272.5,126.6,-266.3,79.3,-274.7,52.1,-279.5,25.1,-285.6,-0.4,-291.4,-25.7,-298.3,-73.3,-311.4,-120.4,-326.3,-128.6,-328.9,-136.7,-331.5,-148.3,-335.3,-159.7,-339.5,-186,-349.2,-211.4,-361.3,-246.7,-378.2,-277.4,-401.1,-281.3,-403.9,-285.9,-404.6]}},89).wait(1));

	// Layer_1
	this.instance_2 = new lib.notetween4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-122,-5);

	this.instance_3 = new lib.notetween3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(239.6,-403.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},89).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,guide:{path:[-121.9,-5,-82.4,-6.7,-45.4,-15.7,-16.7,-22.7,12.8,-26.8,22.3,-28.1,32,-29.2,70.9,-33.4,109,-43.9,147.9,-54.7,174.4,-84.4,195.4,-107.9,186.1,-131.3,184.1,-136.3,180.7,-141.3,177.1,-146.6,172,-151.9,82.5,-189.6,-4.9,-202.9,-39.5,-205.4,-73.2,-206.9,-115.2,-208.8,-155.9,-209.1,-168.9,-209.2,-181.1,-207.1,-201.9,-203.5,-220.6,-193.5,-234,-186.3,-233,-169,-232.9,-168.3,-232.9,-167.5,-230.6,-143.4,-204.5,-135.9,-163.4,-124.1,-119.9,-122.4,-25.9,-118.9,68,-116.6,111,-115.5,153.4,-122.5,170.2,-125.3,186.1,-131.3,187.3,-131.7,188.5,-132.2,196.8,-135.5,204.1,-140,222.2,-151.2,233.8,-169.8,250.2,-196.3,242.4,-224.5,242.3,-224.8,242.3,-225.1,239.9,-233.5,232.4,-239,205.9,-258,176.4,-272.4,167,-277.1,157.2,-281.2,122.8,-295.9,87.6,-306.8,28.2,-325.4,-33.3,-333.5,-73.2,-338.7,-113.9,-339.5,-136.8,-340,-159.7,-339.4,-174.8,-339,-189.9,-338.2,-211.8,-336.9,-231.3,-327.5,-238.9,-323.8,-241,-315.8,-242.8,-309.3,-243,-302.4,-243,-301.1,-243,-299.8,-205.8,-265.9,-151.9,-267.1,-122.5,-267.8,-92.9,-268.4,-32.8,-269.7,25.1,-285.6,39.4,-289.5,53.5,-294.2,70.8,-300.1,87.6,-306.8,127.9,-323.1,165.6,-344.7,173.1,-349,180.5,-353.6,214.7,-374.5,239.5,-403.4]}},89).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.5,-33.5,290.1,65.9);


(lib.bardpalyinglute = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bardplayingsymbol();
	this.instance.parent = this;
	this.instance.setTransform(-6,-203,1,1,0,0,0,365,235);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-4.3,y:-204},0).wait(1).to({x:-2.6,y:-205},0).wait(1).to({x:-0.9,y:-205.9},0).wait(1).to({x:0.8,y:-207},0).wait(1).to({x:2.5,y:-208},0).wait(1).to({x:4.2,y:-208.9},0).wait(1).to({x:5.9,y:-209.9},0).wait(1).to({x:7.6,y:-211},0).wait(1).to({x:9.3,y:-212},0).wait(1).to({x:11,y:-213},0).wait(1).to({x:8.6,y:-212.2},0).wait(1).to({x:6.1,y:-211.5},0).wait(1).to({x:3.7,y:-210.8},0).wait(1).to({x:1.2,y:-210},0).wait(1).to({x:-1.2,y:-209.3},0).wait(1).to({x:-3.7,y:-208.6},0).wait(1).to({x:-6.1,y:-207.9},0).wait(1).to({x:-8.6,y:-207.1},0).wait(1).to({x:-11,y:-206.4},0).wait(1).to({x:-13.5,y:-205.7},0).wait(1).to({x:-16,y:-205},0).wait(1).to({y:-203.9},0).wait(1).to({y:-202.8},0).wait(1).to({y:-201.7},0).wait(1).to({y:-200.6},0).wait(1).to({y:-199.6},0).wait(1).to({y:-198.5},0).wait(1).to({y:-197.4},0).wait(1).to({y:-196.3},0).wait(1).to({y:-195.3},0).wait(1).to({y:-194.2},0).wait(1).to({y:-193.1},0).wait(1).to({y:-192},0).wait(1).to({y:-191},0).wait(1).to({x:-14.6,y:-191.7},0).wait(1).to({x:-13.2,y:-192.4},0).wait(1).to({x:-11.8,y:-193.1},0).wait(1).to({x:-10.4,y:-193.9},0).wait(1).to({x:-9,y:-194.6},0).wait(1).to({x:-6.2,y:-194.2},0).wait(1).to({x:-3.5,y:-193.9},0).wait(1).to({x:-0.8,y:-193.5},0).wait(1).to({x:1.9,y:-193.1},0).wait(1).to({x:4.6,y:-192.7},0).wait(1).to({x:7.3,y:-192.3},0).wait(1).to({x:10,y:-192},0).wait(1).to({x:9.3,y:-193.1},0).wait(1).to({x:8.6,y:-194.2},0).wait(1).to({x:7.8,y:-195.3},0).wait(1).to({x:7.1,y:-196.4},0).wait(1).to({x:6.4,y:-197.6},0).wait(1).to({x:5.6,y:-198.7},0).wait(1).to({x:4.9,y:-199.8},0).wait(1).to({x:2.9,y:-200},0).wait(1).to({x:0.9,y:-200.2},0).wait(1).to({x:-1,y:-200.4},0).wait(1).to({x:-3,y:-200.6},0).wait(1).to({x:-5,y:-200.8},0).wait(1).to({x:-7,y:-201},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-371,-438,730,470);


(lib.Bard_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.TweenBard("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,0.259);

	this.instance_1 = new lib.TweenBardexpand("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,0);

	this.instance_2 = new lib.TweenBardhit("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-1.9,1,1,0,0,0,-6.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-391.1,-150,782.3,300);


(lib.wizard_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.TweenWizard("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,0.292);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai6DHQgNAAgGgFQgGgFAAgIQAAgIAGgFQAFgFAOAAIBbAAIAAk6IhFAAQgOAAgGgFQgFgFAAgJQAAgIAFgFQAGgGAOAAIBrAAIAABfQBJhCAlgTQAkgTAfAAQAiAAAdAXQAdAWAAAMQAAAIgGAGQgGAGgIAAQgFAAgDgCIgLgKQgQgQgMgGQgLgFgMAAQgYAAgjATQgjAUhVBNIAADOICmAAQAOAAAGAFQAGAFAAAIQAAAIgGAGQgGAFgOAAg");
	this.shape.setTransform(60.8,-83.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiSCRQhBhAAAhZQAAhSA9g7QA9g7BZAAQBcAAA8A9QA8A8gBBfImAAAQAKBJA0AtQAzAtBLAAQAqAAAvgOQAugOAdgXQAJgHAGAAQAHAAAFAGQAGAGAAAHQAAAIgHAHQgWAWg3AUQg3AUg6AAQhgAAhBhAgAhxiDQgvAngMA/IFZAAQgLg+gwgnQgwgohCAAQhBAAgwAng");
	this.shape_1.setTransform(3.7,-83.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhMDvQgmgfAAg0IAAj7IhGAAQgOAAgFgFQgHgFAAgJQAAgIAHgFQAFgGAOAAIBGAAIAAhvQgBgOAGgFQAFgGAIAAQAJAAAFAGQAFAFABAOIAABvIDMAAQANAAAGAGQAFAFAAAJQAAAIgFAFQgGAFgNAAIjMAAIAAD7QgBAgAbAWQAaAWAyAAQAmAAAtgLQAsgMAYgOQAJgGAHAAQAGAAAGAGQAFAFABAIQAAAHgHAGQgOAOg3ASQg4ARgyAAQhBAAgogfg");
	this.shape_2.setTransform(-50.8,-89.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABjDJQgOAAgGgFQgGgGAAgIQAAgIAGgFQAGgFAOAAIAgAAIAAjnQAAgogegbQgdgcgxAAQgkAAgcAPQgbAPgzA8IAADsIArAAQANAAAGAFQAGAFAAAIQAAAIgGAGQgGAFgNAAIh7AAQgOAAgFgFQgGgGAAgIQAAgIAGgFQAFgFAOAAIArAAIAAk5IggAAQgOAAgGgFQgFgFAAgJQAAgIAFgFQAGgGAOAAIBFAAIAAA5QAogoAggPQAggPAnAAQArAAAjASQAZAOAVAfQAUAfAAAhIAADtIAgAAQAOAAAFAFQAGAFAAAIQAAAIgGAGQgFAFgOAAg");
	this.shape_3.setTransform(-106.3,-84.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhzCrQglgnAAg1IAAjyIg0AAQgNAAgGgFQgFgGgBgIQABgIAFgGQAGgFANAAIBZAAIAAEYQAAAmAXAYQAYAXAjAAQBbAABNhVIAAjyIhGAAQgNAAgGgFQgGgGAAgIQAAgIAGgGQAGgFANAAIBsAAIAAFfIAfAAQAOAAAGAEQAFAGAAAIQAAAIgFAFQgGAGgOAAIhFAAIAAg3QhNBGhaAAQg3AAgcgfg");
	this.shape_4.setTransform(-161.8,-82.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABKEHQgNAAgGgGQgGgFAAgIQAAgJAGgFQAGgFANAAIAzAAIAAjZIj5AAIAADZIAzAAQANAAAGAFQAFAFAAAJQAAAIgFAFQgGAGgNAAIiEAAQgNAAgGgGQgGgFAAgIQAAgJAGgFQAGgFANAAIArAAIAAnBIgYAAQgNAAgGgFQgGgFAAgJQAAgJAGgEQAGgGANAAIBxAAQANAAAGAGQAFAEAAAJQAAAJgFAFQgGAFgNAAIgzAAIAADEID5AAIAAjEIgzAAQgNAAgGgFQgGgFAAgJQAAgJAGgEQAGgGANAAIBxAAQAOAAAFAGQAGAEAAAJQAAAJgGAFQgFAFgOAAIgYAAIAAHBIArAAQANAAAGAFQAGAFAAAJQAAAIgGAFQgGAGgNAAg");
	this.shape_5.setTransform(-216.1,-90.2);

	this.instance_1 = new lib.TweenWizardExpand("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-339.1,-150,678.3,300);


// stage content:
(lib.newMenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
		
		createjs.Sound.registerSound("asssets/wanderer.ogg", "music")
		
		function begin(){
			createjs.Sound.play("music")
			this.gotoAndPlay(2)
		}
		
		this.beginBtn.addEventListener("click", begin.bind(this))
	}
	this.frame_25 = function() {
		this.stop()
		
		function goBardSection(){
			this.gotoAndStop(26)
		}
		function goHunterSection(){
			this.gotoAndStop(27)
		}
		
		function goWizardSection(){
			this.gotoAndStop(28)
		}
		
		this.bard_button.addEventListener("click", goBardSection.bind(this));
		this.hunter_button.addEventListener("click", goHunterSection.bind(this));
		this.wizardBtn.addEventListener("click", goWizardSection.bind(this));
	}
	this.frame_26 = function() {
		this.stop()
		//
		function backMenu(){
			this.gotoAndStop(25)
		}
		
		function endMenu(){
			window.open("bard.html")
			this.gotoAndStop(29)
		}
		
		
		
		this.select_btn.addEventListener("click", endMenu.bind(this))
		this.closeBtn.addEventListener("click", backMenu.bind(this))
		createjs.Sound.registerSound("asssets/bardSong.ogg", "music");
		
		this.bardJob.addEventListener("click", bardMusic.bind(this))
		
		function bardMusic(){
			createjs.Sound.play("music")
			console.log("aaa")
		}
	}
	this.frame_27 = function() {
		this.stop()
		
		
		function backMenu(){
			this.gotoAndStop(25)
		}
		
		this.closeBtn.addEventListener("click", backMenu.bind(this))
		
		this.SelectJob.addEventListener("click", fl_ClickToGoToWebPage.bind(this));
		
		function fl_ClickToGoToWebPage() {
			window.open("hunter.html");
			this.gotoAndStop(29)
		}
	}
	this.frame_28 = function() {
		this.stop()
		
		function backMenu(){
			this.gotoAndStop(25)
		}
		
		this.closeBtn.addEventListener("click", backMenu.bind(this))
		
		function endMenu(){
			window.open("wizard.html");
			this.gotoAndStop(29)
		}
		
		this.select_btn.addEventListener("click", endMenu.bind(this))
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25).call(this.frame_25).wait(1).call(this.frame_26).wait(1).call(this.frame_27).wait(1).call(this.frame_28).wait(2));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(938.2,502.6,0.999,0.999,0,0,0,0.1,0.2);
	this.___camera___instance.depth = 0;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(1).to({regX:0.3,regY:0.3,scaleX:1,scaleY:1,x:964.7,y:1539.6},18).wait(5).to({_off:true},1).wait(5));

	// closeButton
	this.closeBtn = new lib.CloseBtn();
	this.closeBtn.name = "closeBtn";
	this.closeBtn.parent = this;
	this.closeBtn.setTransform(1806.3,117.8,0.433,0.465,0,0,0,78.2,78.2);
	this.closeBtn._off = true;
	new cjs.ButtonHelper(this.closeBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.closeBtn).wait(26).to({_off:false},0).wait(1).to({x:1798.4,y:109.6},0).wait(1).to({y:112.1},0).to({_off:true},1).wait(1));

	// mainObject
	this.beginBtn = new lib.beginBtn();
	this.beginBtn.name = "beginBtn";
	this.beginBtn.parent = this;
	this.beginBtn.setTransform(973.2,483.7,1,1,0,0,0,613.1,118.1);
	new cjs.ButtonHelper(this.beginBtn, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("ApHJIQjyjyAAlWQAAlVDyjyQDyjyFVAAQFWAADyDyQDyDyAAFVQAAFWjyDyQjyDylWAAQlVAAjyjyg");
	this.shape.setTransform(1009.4,1515.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3300").s().p("ApHJIQjyjyAAlWQAAlVDyjyQDyjyFVAAQFWAADyDyQDyDyAAFVQAAFWjyDyQjyDylWAAQlVAAjyjyg");
	this.shape_1.setTransform(1009.4,1524.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AD5233").s().p("AmNMuIgGgGQCLgsCChDQEhiWCsjHQAEgeAYgdQAagsAfgoQAAnEjCl2QgghAgig5Qg9gYg2gaQgUgIgOgJQEEhRElAAQEdAAD+BNQASASAnASQA2AbA9AYQAeAzAcA3QDBF2ABHFQggAogZAsQgZAcgDAeQitDGkgCWQl3DCnHAAQkdAAj/hNgA3RMzQgLgMgSgKQCTgtCIhHQEhiXCrjHQACgYAQgXQAwCwBTCiQAdA3AeAzQA9AYA2AaQAgAPARAPQkIBTkqAAQkVAAj3hIgAszjOIAAgBQAfgnAagsIAGgIQA/DoAAECQgTAZgRAcIgTAcIgJALQg+jpAAkBg");
	this.shape_2.setTransform(1075.1,1530.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D64700").s().p("AEuMQQg2gbg9gYQgegzgdg3QhTihgvixQgPAXgDAYQirDHkhCXQiIBHiSAtQgNgHgPgHQg2gag9gXQgjg6ggg/QjCl3AAnGQAfgnAagsQAYgcADgdQCujIEiiWQCChDCMgsQAQALAXAKIAmASQAlARAoARQAgA1AfA8QBTCgAvCtIgGAIQgaAsgfAnIAAABQAAECA+DoIAIgKIATgdQARgcATgZQAAkBg+jpQARgXADgaQCtjGEiiXQCFhFCPgsQAOAJAUAIQA2AaA9AYQAiA6AgA/QDCF2AAHEQgfAogaAtQgYAcgEAeQisDHkiCXQiCBCiLAsQgRgPgggOg");
	this.shape_3.setTransform(999.6,1530.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D62900").s().p("Aw0MyQgSgSgngRQg1gag9gYQgig4ggg9QjBl0AAnCIAAgBQAegmAZgsQAYgcAEgdQCrjIEfiWQF1jCHDAAQEUABD3BIQAHAIALAHQiLAsiCBDQkiCXiuDHQgDAegYAcQgaAsgfAnQAAHFDCF3QAgBAAjA5QA9AYA2AaQAQAHAMAHQj/BNkeAAQkVAAj1hIgAJppnQgfg8ggg2QgogQglgSIgmgSQgXgKgQgLQEHhSEpAAQEVAAD2BIQAKAJAPAKQiQAsiFBEQkhCXitDGQgEAagSAYQgviuhTifg");
	this.shape_4.setTransform(924.7,1529.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E05C00").s().p("AxAOPQgNgag4gUQhEgchVgSIgdhfQEKhZDbhtQACgiAtgdQARgOASgNQAhgXAngUQAAowiSn2IgYhSQBqgkByggQH8iRI3AAQFZAAFCA1QAOAaA4AWQBEAcBVARIAZBUQkKBZjcBsQgCAiguAcQgvAqg+AdIAAABQAAI1CRH7IAaBWQhmAihtAfQn8CRo4AAQlaAAlDg2g");
	this.shape_5.setTransform(989.6,1536.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E01F00").s().p("Aw1OFQgNgZg4gVQhDgchUgSQgZhPgYhTQiRn1AAovIAAgBQA9gdAugpQAtgdACgiQEsiVGEhxQH2iRIwAAQFYAAFCA2QANAaA4AVQAYAKAbAJQAvAQA2AMIAXBMIAYBSQCRH2AAIxQgmATghAYQgTAMgRAOQgsAdgDAiQjaBtkLBaQhiAhhqAfQn2CRoxAAQlWAAlBg2g");
	this.shape_6.setTransform(770.3,1534.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8F7066").s().p("AxOOCQgNgag4gUQhDgdhVgSIgSg8IgahWQiRn7AAo1IAAgBQA+gdAvgqQAugcACgiQDchsEKhZQBmgiBsgfQH7iSI1ABQFkAAFMA4QAOAbA4AUQBEAdBVATQAWBHAVBMQCSH5AAI1Qg/AeguAqQguAdgCAiQkwCVmFBxQn8CRo2gBQllAAlOg5g");
	this.shape_7.setTransform(1210.7,1537.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EB7000").s().p("A2kPnQgJghhKgZQhRgehsgMIgbirIA1gMQACgmBBgfQAYgNAcgKQAwgUA6gNQAAqfhhp4IgJg9QGhhdHVhHQKBhhKoAAQGdAAGPAkQAJAhBKAaQBSAdBrAMIAYCYIg5ANQgCAmhCAeQhEAmhdAVIAAABQAAKlBhKAIAKBBQmbBbnOBGQqBBhqpAAQmfAAmPgkg");
	this.shape_8.setTransform(979.9,1542.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EB1400").s().p("A2RPYQgJghhKgZQhQgdhqgMIgijOQhgp3AAqdQBbgUBDgmQBCgfABglQGuhkHnhLQJ3hhKfAAQGaAAGNAlQAJAgBKAZQAdALAgAIQA6APBEAIIAWCOIAJA9QBhJ4AAKfQg6AMgwAVQgbAKgZANQhBAfgCAmIg1AMQmXBcnKBHQp4BhqfAAQmaAAmKgkg");
	this.shape_9.setTransform(650.8,1539.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#708F99").s().p("A2xPWQgIghhKgYQhSgehsgMIgUh5IgJhBQhhqAAAqlIAAgBQBdgVBEgmQBCgeACgmIA5gNQGbhbHNhHQJ/hgKnAAQGqgBGaAnQAJAhBLAYQBSAeBsANIAdC8QBgJ+AAKlQhdAVhEAmQhDAegCAmQmwBknsBKQp/BiqngBQmtAAmcgmg");
	this.shape_10.setTransform(1311.3,1544.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F58500").s().p("A8JQ/QgFgohbgeQhggfiDgGIgRkEQgwsFAAsaQB7gKBZgkQBXggABgrQI6gyJWglQMFgxMaAAQHiAAHaASQAFAoBbAeQBgAgCDAFIAREHQAwMEAAMYQh9AKhXAkQhYAggBArQo2AypUAlQsGAxscAAQniAAncgSg");
	this.shape_11.setTransform(970.3,1549.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F50A00").s().p("A7uQqQgFgnhagdQhegfiCgFIgQj8Qgwr2AAsNQB5gKBXgjQBXggABgqQIugyJMglQL4gxMNAAQHeAAHXATQAFAnBaAdQAiAMAoAHQBEAOBSAEIAQD4QAwL4AAMOQhNAGg/ARQglAJggAMQhWAggBAqQovAypNAmQr5AwsOAAQncAAnVgSg");
	this.shape_12.setTransform(531.2,1544.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#52ADCC").s().p("A8UQqQgFgohbgcQhgggiEgGIgOjiQgxsCAAsYIAAgBQB8gKBZgkQBYgfABgqQI3gyJTgmQMDgwMXAAQHxAAHpATQAEAoBcAcQBgAgCEAGIAODlQAxMCAAMWQh9ALhYAjQhZAfgBArQozAxpQAmQsEAwsYAAQnzAAnrgTg");
	this.shape_13.setTransform(1411.9,1551.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhmHrQgjg0gUheQgUheAAhkQAAhkAUhdQAUheAjgzQAjgzAmAAQBIAAAzCoIAAmOIglAAQgLAAgFgKQgDgKAAgQQAAgPADgKQAFgLALAAIBBAAIAAPXIAlAAQALAAAEAKQAFAJgBAQQABAPgFAKQgEAKgLAAIhBAAIAAiMQgxCohKAAQgmAAgjgygAhxhKQglBbABCGQgBCGAlBdQAjBcAzAAQAwAAAlhcQAjhdABiGQgBiGgjhbQglhdgwAAQgzAAgjBdg");
	this.shape_14.setTransform(1580,1550.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AiJF0QgLAAgEgJQgFgKABgPQgBgOAFgJQAEgKALAAIBDAAIAApMIgzAAQgLAAgEgKQgFgKAAgQQAAgPAFgJQAEgLALAAIBPAAIAACyQA2h8AcgjQAbglAWAAQAZAAAWArQAVArABAVQAAAQgFALQgEALgGgBQgEAAgCgCIgJgTQgLgegJgLQgIgLgJAAQgTAAgZAlQgaAlg/CPIAAGCIB7AAQALAAAEAKQAEAKAAAPQAAAPgEAKQgEALgLgBg");
	this.shape_15.setTransform(1538.4,1565);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiEFGQgchBAAhcQAAhnAlhLQAmhNBHAAQATAAAWAHQAXAGAbANIAAhyQAAg6gWgrQgVgrgqAAQghAAg7AxQgKAIgDAAQgGAAgDgKQgEgLAAgOQAAgOADgJQAFgNAhgVQA0gkAaAAQA1AAAdBCQAeBCAABTIAAHSIAlAAQALAAAEAKQAEAKAAAPQAAAPgEAKQgEALgLgBIhBAAIAAhlQg+CBhEAAQgyAAgdhAgAhqAyQgaAxAABGQAAA/AUAsQAUArAmAAQAkAAAegkQAggkAhhQIAAicQgUgNgWgGQgWgHgYAAQg9AAgiBBg");
	this.shape_16.setTransform(1496.8,1566);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiYHrQgKAAgEgKQgEgKAAgPQAAgQAEgJQAEgKAKAAIAmAAIAAtJIgmAAQgKAAgEgJQgEgKAAgQQAAgQAEgJQAEgKAKAAICwAAQA0AAAhBMQAhBMAABmQAACCg3BPQAsAnAUBBQAUBCAABPQAABGgNA7QgNA6gcApQgbApghAAgAhWGlICNAAQAbAAAUgfQAUgeALgsQAKgtAAgwQAAg1gPgzQgPgygagaQgagagvAAIhkAAgAhWg2IBiAAQAgAAAbgdQAUgXALgtQAMgsAAgvQAAhCgZg3QgZg5goAAIhuAAg");
	this.shape_17.setTransform(1454.8,1553.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhREqQgcgegQg6QgRg5AAg9QAAg9ARg4QAQg6AcgfQAbgfAfAAQA6AAAoBmIAAjyIgeAAQgIAAgDgGQgEgHAAgJQAAgJAEgGQADgHAIAAIA1AAIAAJXIAdAAQAIAAAEAFQAEAHAAAJQAAAJgEAHQgEAFgIABIg0AAIAAhWQgnBmg7AAQgfAAgbgfgAhagtQgdA3AABSQAABSAdA4QAcA5AoAAQAnAAAdg5QAdg4AAhSQAAhSgdg3Qgdg5gnAAQgoAAgcA5g");
	this.shape_18.setTransform(1044.3,1545.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhuDjQgIAAgDgGQgEgGAAgJQAAgIAEgHQADgFAIgBIA2AAIAAlkIgpAAQgIgBgDgGQgEgGAAgKQAAgIAEgHQADgGAIAAIBAAAIAABtQArhNAVgVQAWgWASAAQAUAAASAbQARAZAAANQAAAKgDAHQgEAFgFAAQgDAAgCgBIgGgLQgKgSgHgHQgHgHgGAAQgPAAgUAXQgVAWgyBXIAADrIBiAAQAIAAAEAGQADAGAAAKQAAAIgDAHQgEAGgIAAg");
	this.shape_19.setTransform(1011,1553.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhpDHQgXgoAAg4QAAg/AegtQAegvA5AAQAPAAASAEQASAEAVAIIAAhGQAAgjgRgaQgRgaghAAQgaAAgwAdQgIAFgDAAQgEAAgDgGQgDgGAAgJQAAgJADgFQADgIAbgNQApgWAWAAQApAAAYApQAYAoAAAyIAAEcIAdAAQAJAAADAGQAEAGAAAJQAAAJgEAHQgDAGgJAAIg0AAIAAg+QgxBPg2AAQgpAAgWgngAhVAeQgUAfAAAqQAAAmAQAbQAPAbAfAAQAdAAAYgWQAZgXAagwIAAhfQgQgIgRgEQgSgEgSAAQgxAAgcAng");
	this.shape_20.setTransform(977.9,1554.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhlDeIAAgnIClloIiJAAIAAA7QAAAPgEAGQgDAHgFAAQgFAAgDgHQgDgGAAgPIAAhnIDBAAIAAAnIioFpICXAAIAAg8QAAgPADgHQADgGAFgBQAFABADAGQADAHAAAPIAABng");
	this.shape_21.setTransform(945,1554.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhiFMQgIAAgEgGQgDgHAAgJQAAgJADgGQAEgGAIAAIBYAAIAAlkIhCAAQgIAAgDgGQgEgGAAgJQAAgKAEgGQADgGAIAAIBXAAIAAGPIBYAAQAIAAAEAGQADAGAAAJQAAAJgDAHQgEAGgIAAgAgWjcIAAhvIAgAAIAABvg");
	this.shape_22.setTransform(912.1,1543.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ABAErIhAmoIg9GoIgjAAIghoqIgIAAQgIAAgEgGQgDgGAAgKQAAgKADgFQAEgGAIAAIBTAAQAIAAADAGQAEAFAAAKQAAAKgEAGQgDAGgIAAIg1AAIAeH5IA9mgIAhAAIA+GgIAdn5Ig0AAQgIAAgEgGQgDgGAAgKQAAgKADgFQAEgGAIAAIBSAAQAJAAADAGQADAFAAAKQAAAKgDAGQgDAGgJAAIgIAAIgfIqg");
	this.shape_23.setTransform(879.2,1546.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AicEQQgLAAgFgHQgFgHAAgLQAAgLAFgHQAFgHALAAIBNAAIAAmsIg7AAQgLAAgFgHQgFgIAAgLQAAgLAFgIQAFgHALAAIBbAAIAACCQA8hbAfgaQAfgaAaAAQAcAAAZAfQAYAfAAAQQAAAMgFAIQgEAHgIAAQgDAAgDgCIgKgOQgNgVgKgIQgKgIgJAAQgVAAgdAbQgdAbhHBoIAAEZICLAAQAMAAAFAIQAEAGAAAMQAAALgEAHQgFAIgMAAg");
	this.shape_24.setTransform(533.5,1548.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ah6DGQg3hWAAh7QAAhwAzhRQAzhPBLAAQBNAAAzBSQAyBSgBCDIlCAAQAIBkAsA8QArA9A/AAQAjAAAngTQAngTAYgfQAHgJAGAAQAGAAAEAIQAFAHAAAKQAAALgGAKQgSAeguAbQgvAbgwAAQhRAAg2hXgAhfizQgoA1gKBXIEiAAQgKhWgng2Qgpg1g3AAQg3AAgoA1g");
	this.shape_25.setTransform(485.5,1549.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag/FGQghgqAAhHIAAlWIg7AAQgLAAgFgHQgFgIAAgMQAAgKAFgIQAFgIALABIA7AAIAAiYQAAgTAEgHQAFgJAHABQAHgBAEAJQAFAHAAATIAACYICrAAQALgBAFAIQAFAIAAALQAAALgFAIQgFAHgLAAIirAAIAAFWQAAAsAWAeQAWAeAqAAQAgAAAlgPQAlgQAVgTQAIgIAFAAQAGAAAEAIQAFAGAAALQAAAKgFAHQgMAUgvAYQguAYgrAAQg2gBghgqg");
	this.shape_26.setTransform(439.7,1540.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ABTETQgLAAgFgIQgFgHAAgLQAAgMAFgGQAFgIALAAIAbAAIAAk6QAAg3gZglQgYgngpAAQgfAAgXAWQgXATgqBSIAAFCIAjAAQAMAAAFAIQAFAGAAAMQAAALgFAHQgFAIgMAAIhnAAQgLAAgFgIQgFgHAAgLQAAgMAFgGQAFgIALAAIAkAAIAAmqIgbAAQgLAAgFgHQgFgIAAgMQAAgKAFgIQAFgIALABIA7AAIAABNQAhg2AbgVQAagUAhAAQAkAAAeAYQAVATARAqQARArAAAtIAAFDIAbAAQAMAAAEAIQAFAGAAAMQAAALgFAHQgEAIgMAAg");
	this.shape_27.setTransform(393.2,1548.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhhDqQgfg2AAhHIAAlLIgrAAQgLAAgFgHQgFgIAAgMQAAgKAFgIQAFgIALABIBLAAIAAF/QAAAzATAgQAUAgAdAAQBMAABBhzIAAlLIg6AAQgMAAgFgHQgFgIAAgMQAAgKAFgIQAFgIAMABIBaAAIAAHeIAaAAQAMAAAFAIQAFAGAAAMQAAALgFAHQgFAIgMAAIg6AAIAAhMQhBBghKAAQgvgBgYgpg");
	this.shape_28.setTransform(346.6,1550.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AA/FnQgMAAgFgIQgFgHAAgLQAAgMAFgGQAFgIAMAAIAqAAIAAkoIjRAAIAAEoIAqAAQAMAAAFAIQAFAGAAAMQAAALgFAHQgFAIgMAAIhuAAQgLAAgFgIQgFgHAAgLQAAgMAFgGQAFgIALAAIAkAAIAAplIgUAAQgLAAgFgHQgFgHAAgMQAAgMAFgGQAFgIALABIBeAAQAMgBAFAIQAFAGAAAMQAAAMgFAHQgFAHgMAAIgqAAIAAELIDRAAIAAkLIgqAAQgMAAgFgHQgFgHAAgMQAAgMAFgGQAFgIAMABIBeAAQALgBAFAIQAFAGAAAMQAAAMgFAHQgFAHgLAAIgUAAIAAJlIAkAAQALAAAFAIQAFAGAAAMQAAALgFAHQgFAIgLAAg");
	this.shape_29.setTransform(300.9,1539.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#33CCFF").s().p("Egh4AR+QAAgvhtggQhughibAAMAAAggbQCbAABughQBtggAAgvMBDwAAAQAAAvBuAgQBuAhCbAAMAAAAgbQibAAhuAhQhuAgAAAvg");
	this.shape_30.setTransform(1512.6,1557.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF9900").s().p("EghtASWQAAgvhtgiQhughiaAAMAAAghHQCaAABugiQBtghAAgwMBDbAAAQAAAwBtAhQBuAiCaAAMAAAAhHQiaAAhuAhQhtAiAAAvg");
	this.shape_31.setTransform(960.5,1555.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("EghLAR9QAAguhsghQhrggiYgBMAAAggaQCYAABrggQBsghAAguMBCXAAAQAAAuBrAhQAoAMAtAHQBPANBgAAMAAAAgaQhgABhPANQgtAHgoAMQhrAhAAAug");
	this.shape_32.setTransform(411.7,1550.1);

	this.hunter_button = new lib.Hunter_button();
	this.hunter_button.name = "hunter_button";
	this.hunter_button.parent = this;
	this.hunter_button.setTransform(408.2,553.3,0.737,0.778,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.hunter_button, 0, 1, 1);

	this.bard_button = new lib.Bard_button();
	this.bard_button.name = "bard_button";
	this.bard_button.parent = this;
	this.bard_button.setTransform(1468.8,556.2,0.639,0.778,0,0,0,-51.9,0.1);
	new cjs.ButtonHelper(this.bard_button, 0, 1, 2, false, new lib.Bard_button(), 3);

	this.wizardBtn = new lib.wizard_button();
	this.wizardBtn.name = "wizardBtn";
	this.wizardBtn.parent = this;
	this.wizardBtn.setTransform(924,553.3,0.737,0.778,0,0,0,-45.1,0);
	new cjs.ButtonHelper(this.wizardBtn, 0, 1, 1);

	this.bardJob = new lib.bardpalyinglute();
	this.bardJob.name = "bardJob";
	this.bardJob.parent = this;
	this.bardJob.setTransform(1530.5,620.7,1,1,0,0,0,-6,-203);

	this.instance = new lib.flytingnotescopy();
	this.instance.parent = this;
	this.instance.setTransform(1490.2,790.7,1.004,1,0,0,0,-0.5,-0.7);

	this.select_btn = new lib.selectbutton();
	this.select_btn.name = "select_btn";
	this.select_btn.parent = this;
	this.select_btn.setTransform(1502.3,908.5,1.004,1);
	new cjs.ButtonHelper(this.select_btn, 0, 1, 2, false, new lib.selectbutton(), 3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhMBbQgOAAgHgFQgGgGAAgJQAAgJAGgFQAHgGAOAAIAXAAIAAhgIgOAAQgOAAgHgGQgFgFAAgJQAAgJAFgFQAHgGAOAAIA3AAIAAAZQAYgSAOgGQAPgGAMAAQAUAAASAOQANAKAAAKQAAAJgGAGQgGAGgIAAQgIAAgIgIQgIgHgHAAQgIAAgRAKQgQALgYAVIAAA7IA3AAQAPAAAGAGQAHAFAAAJQAAAJgHAGQgGAFgPAAg");
	this.shape_33.setTransform(1212.5,848.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhKBEQgdgcAAgnQAAgqAfgaQAfgbApAAQAXABAVAIQAUAIAKALQAOAOAJAVQAHAPAAATIAAARIikAAQAHAPAQAKQAQAKAaAAQAWAAAlgKQAPgEAGAAQAIAAAFAGQAGAFAAAJQAAAHgGAGQgIAHgeAHQgeAGgcAAQgvAAgdgagAgigtQgPAJgJAQIB1AAQgJgQgPgJQgOgJgVAAQgTAAgPAJg");
	this.shape_34.setTransform(1187.6,848.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAeBZIgehKIgbBKIglAAIgiiJQgKAAgGgGQgGgFAAgJQAAgIAHgGQAFgGAPAAIAlAAQAOAAAHAGQAGAGAAAJQAAAJgHAGQgGAEgOAAIAOA/IAZhAIAjAAIAZBAIAQg/QgQAAgEgCQgKgHABgLQgBgIAHgGQAGgGAOAAIAmAAQAOAAAHAGQAGAGAAAJQAAAIgGAFQgFAGgLAAIggCJg");
	this.shape_35.setTransform(1164,848.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ag0BSQgZgNgNgVQgMgWAAgXQAAgYAMgXQAOgXAZgOQAZgNAaAAQAbABAaANQAYAOANAXQAOAWAAAYQAAAWgNAXQgNAVgZANQgZAMgcAAQgaAAgagMgAgtgkQgRARgBAWQABATARAQQATAQAaABQAbgBASgQQASgQAAgTQAAgSgNgQQgUgXgeAAQgbABgSARg");
	this.shape_36.setTransform(1140,848.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhYCFQgPAAgGgGQgGgFAAgJQAAgJAGgGQAGgFAPAAIAHAAIAAi0IgHAAQgPAAgGgFQgGgGAAgJQAAgIAGgGQAGgGAPAAIAvAAIAAAOQAOgKAPgEQAOgFAQAAQApAAAcAcQAdAbAAAlQAAAngiAZQgcAVgkAAQgQABgOgFQgPgEgOgKIAABCIAYAAQAOAAAFAFQAGAGAAAJQAAAJgGAFQgFAGgOAAgAgehGQgLAQAAAOQAAAQARAPQARAOAYABQAZgBARgOQARgPAAgQQAAgJgGgNQgHgMgOgJQgOgJgSAAQgdAAgSAWg");
	this.shape_37.setTransform(1115.2,852.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhDB/QgPAAgFgGQgHgFAAgJQAAgJAHgGQAFgFAPAAIAwAAIAAitIggAAQgOAAgHgFQgGgGAAgJQAAgIAGgGQAHgGAOAAIBHAAIAADVIAwAAQAOAAAHAFQAGAGAAAJQAAAJgGAFQgHAGgOAAg");
	this.shape_38.setTransform(1068,844.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhDB/QgOAAgHgGQgGgFAAgJQAAgJAGgGQAHgFAOAAIAwAAIAAitIggAAQgPAAgFgFQgHgGAAgJQAAgIAHgGQAFgGAPAAIBHAAIAADVIAwAAQAPAAAGAFQAGAGAAAJQAAAJgGAFQgGAGgPAAg");
	this.shape_39.setTransform(1044,844.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhDB/QgOAAgHgGQgGgFAAgJQAAgJAGgGQAHgFAOAAIAwAAIAAhhIggAAQgOAAgHgFQgGgGAAgJQAAgIAGgGQAGgGAPAAIBHAAIAACJIAwAAQAPAAAGAFQAGAGAAAJQAAAJgGAFQgGAGgPAAgAgghTIAAgrIAvAAIAAArg");
	this.shape_40.setTransform(1019.9,844.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAeBZIgdhKIgbBKIgmAAIghiJQgLAAgGgGQgGgFAAgJQAAgIAHgGQAFgGAPAAIAlAAQAPAAAGAGQAGAGAAAJQAAAJgHAGQgFAEgQAAIAQA/IAZhAIAiAAIAZBAIAPg/QgOAAgFgCQgJgHAAgLQAAgIAGgGQAGgGAPAAIAlAAQAOAAAHAGQAGAGAAAJQAAAIgGAFQgFAGgKAAIgiCJg");
	this.shape_41.setTransform(996,848.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AhVCDQgOAAgGgGQgGgFAAgKQAAgIAGgGQAGgFAOgBIAoAAIAXgtIhFiGQgKgCgFgFQgFgGAAgHQAAgJAGgGQAGgFAOAAIAlAAQAOAAAHAFQAGAGAAAJQAAAIgGAGQgHAFgNABIAvBaIAuhaQgNgBgGgFQgGgGAAgIQAAgJAGgGQAGgFAPAAIAlAAQAPAAAGAFQAGAGAAAJQAAAIgFAFQgFAGgLABIhbCzQAOAAAFADQAJAGAAALQAAAKgGAFQgGAGgOAAg");
	this.shape_42.setTransform(900,852.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgrBrQgTgQAAgXIAAhYIgOAAQgPAAgGgFQgGgGAAgJQAAgIAGgGQAGgGAPAAIAOAAIAAgkQAAgOAGgGQAFgGAJAAQAJAAAGAGQAFAGAAAOIAAAkIBJAAQAPAAAGAGQAGAGAAAJQAAAIgGAGQgGAFgPAAIhJAAIAABQQAAANAGAEQAIAGAUAAQAfAAAagNQAKgFAFAAQAIAAAGAGQAGAGAAAIQAAAIgHAGQgJAJgcAIQgdAHgTAAQgkAAgTgQg");
	this.shape_43.setTransform(877.2,845.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AhDB/QgOAAgHgGQgGgFAAgJQAAgJAGgGQAHgFAOAAIAwAAIAAhhIggAAQgOAAgHgFQgGgGAAgJQAAgIAGgGQAGgGAPAAIBHAAIAACJIAwAAQAPAAAGAFQAGAGAAAJQAAAJgGAFQgGAGgPAAgAgghTIAAgrIAvAAIAAArg");
	this.shape_44.setTransform(851.9,844.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhMBbQgPAAgFgFQgHgGAAgJQAAgJAHgFQAFgGAPAAIAYAAIAAhgIgPAAQgOAAgGgGQgHgFAAgJQAAgJAHgFQAGgGAOAAIA2AAIAAAZQAZgSAOgGQAPgGAMAAQAUAAATAOQAMAKAAAKQAAAJgGAGQgGAGgIAAQgHAAgJgIQgIgHgHAAQgIAAgQAKQgSALgYAVIAAA7IA4AAQAPAAAHAGQAFAFAAAJQAAAJgFAGQgHAFgPAAg");
	this.shape_45.setTransform(828.5,848.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhDB/QgOAAgHgGQgGgFAAgJQAAgJAGgGQAHgFAOAAIAwAAIAAhhIggAAQgOAAgHgFQgGgGAAgJQAAgIAGgGQAGgGAPAAIBHAAIAACJIAwAAQAPAAAGAFQAGAGAAAJQAAAJgGAFQgGAGgPAAgAgghTIAAgrIAvAAIAAArg");
	this.shape_46.setTransform(803.9,844.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgrBrQgTgQAAgXIAAhYIgOAAQgPAAgGgFQgGgGAAgJQAAgIAGgGQAGgGAPAAIAOAAIAAgkQAAgOAGgGQAFgGAJAAQAJAAAGAGQAFAGAAAOIAAAkIBJAAQAPAAAGAGQAGAGAAAJQAAAIgGAGQgGAFgPAAIhJAAIAABQQAAANAGAEQAIAGAUAAQAfAAAagNQAKgFAFAAQAIAAAGAGQAGAGAAAIQAAAIgHAGQgJAJgcAIQgdAHgTAAQgkAAgTgQg");
	this.shape_47.setTransform(781.2,845.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAoBZQgPAAgFgGQgHgFAAgKQAAgHAEgFQAFgFAIgCIgegaIgeAaQAJACAFAFQADAFAAAHQABAKgHAFQgGAGgOAAIgtAAQgPAAgGgGQgGgFAAgJQAAgJAGgFQAFgGALAAIA7g0Ig1gtQgKAAgFgGQgFgFAAgJQAAgIAGgGQAGgGAPAAIAlAAQAOAAAGAGQAHAGgBAIQABAMgLAHIAXAUIAXgVQgKgHAAgKQAAgJAGgGQAGgGAPAAIAlAAQAOAAAGAGQAHAGgBAJQAAAIgFAFQgFAGgLAAIg0AuIA8AzQALAAAFAGQAGAFAAAJQAAAJgGAFQgGAGgPAAg");
	this.shape_48.setTransform(756,848.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AhKBEQgdgcAAgnQAAgqAfgaQAfgbApAAQAXABAVAIQAUAIAKALQAOAOAJAVQAHAPAAATIAAARIikAAQAHAPAQAKQAQAKAaAAQAWAAAlgKQAPgEAGAAQAIAAAFAGQAGAFAAAJQAAAHgGAGQgIAHgeAHQgeAGgcAAQgvAAgdgagAgigtQgPAJgJAQIB1AAQgJgQgPgJQgOgJgVAAQgTAAgPAJg");
	this.shape_49.setTransform(731.6,848.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AhYBoQgcgaAAgnQAAgnAdgdQAdgdAqAAQAPAAAOAFQAPAEAPAKIAAgyIgHAAQgOAAgGgFQgGgGAAgIQAAgKAGgFQAGgGAOAAIAvAAIAADUIAHAAQAOAAAGAGQAHAGAAAJQAAAIgGAGQgHAFgOABIgvAAIAAgKQgOAHgOAFQgPAEgPAAQguAAgbgagAg6gBQgSARAAAXQAAAXAQAOQAQAOAcAAQAbAAAQgOQAQgOAAgWQAAgYgRgRQgSgRgYAAQgZAAgRARg");
	this.shape_50.setTransform(708.8,845.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AhVBNQgUgQAAgVQAAgZAagVQAZgVAugBQARAAAXAFIAAgKQABgJgIgGQgIgGgVAAQgSABgcAGQgKADgGAAQgIAAgFgFQgGgHAAgJQAAgFACgEQABgDAEgCQADgDAMgDQAOgDAQgDQAQgCAMgBQAkABAVAQQAVAQAAAcIAABRIAHAAQAOAAAGAFQAGAGAAAJQAAAJgGAGQgGAFgOAAIgwAAIAAgKQgPAIgRAFQgSADgPAAQggAAgUgRgAg1AXQgKAIAAAIQAAAGAEADQALAHAQAAQAPAAARgGQATgFANgLIAAgRQgXgEgUAAQgYAAgSALg");
	this.shape_51.setTransform(612.3,848.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAvBbQgOAAgGgFQgHgGAAgJQAAgJAGgFQAGgGANAAIAAhKQAAgNgHgHQgJgHgSAAQgNAAgLAFQgKAFgQASIAABJQAPAAAFADQAJAGAAALQAAAJgGAGQgGAFgPAAIgtAAQgOAAgHgFQgGgGAAgJQAAgLAKgGQAEgDAQAAIAAhgQgNAAgGgGQgGgFAAgJQAAgJAGgFQAGgGAPAAIAmAAIAAANQALgJANgFQANgEAOAAQAkAAAVAWQAQARAAAdIAABJQANAAAGAGQAGAFAAAJQAAAJgGAGQgGAFgPAAg");
	this.shape_52.setTransform(587.9,848.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AhDB/QgOAAgHgGQgGgFAAgJQAAgJAGgGQAHgFAOAAIAwAAIAAhhIggAAQgOAAgHgFQgGgGAAgJQAAgIAGgGQAGgGAPAAIBHAAIAACJIAwAAQAPAAAGAFQAGAGAAAJQAAAJgGAFQgGAGgPAAgAgghTIAAgrIAvAAIAAArg");
	this.shape_53.setTransform(563.9,844.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("ABABcIAAh+QAAgJgEgEQgDgDgHAAQgGAAgGADQgHAGgLANIAABPQANAAAGAGQAGAGAAAJQAAAIgGAGQgGAFgPABIglAAIAAh+QAAgJgDgEQgDgDgHAAQgHAAgHAEQgHAFgKANIAABPQANAAAGAGQAGAGAAAJQAAAIgGAGQgGAFgPABIgkAAQgOgBgGgFQgGgGAAgIQAAgJAGgGQAGgGAMAAIAAhgQgMAAgGgFQgGgGAAgJQAAgIAGgGQAGgGAOAAIAmAAIAAALQAKgJAIgDQAIgEAKgBQAJAAAJAFQAIAFAIAIQAKgIALgFQAKgEALAAQAXAAANAMQATAPAAAaIAABYQAMAAAGAGQAGAGAAAJQAAAIgGAGQgGAFgOABg");
	this.shape_54.setTransform(540.1,848.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AhVBNQgUgQAAgVQAAgZAZgVQAagVAtgBQARAAAZAFIAAgKQAAgJgIgGQgIgGgUAAQgTABgbAGQgLADgGAAQgIAAgGgFQgFgHAAgJQAAgFACgEQACgDADgCQADgDAMgDQAPgDAPgDQAPgCANgBQAlABAUAQQAVAQgBAcIAABRIAIAAQAOAAAGAFQAGAGAAAJQAAAJgGAGQgGAFgOAAIgvAAIAAgKQgQAIgRAFQgSADgPAAQggAAgUgRgAg1AXQgKAIAAAIQgBAGAGADQAJAHASAAQAOAAARgGQASgFAPgLIAAgRQgYgEgUAAQgYAAgSALg");
	this.shape_55.setTransform(516.3,848.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgrBrQgTgQAAgXIAAhYIgOAAQgPAAgGgFQgGgGAAgJQAAgIAGgGQAGgGAPAAIAOAAIAAgkQAAgOAGgGQAFgGAJAAQAJAAAGAGQAFAGAAAOIAAAkIBJAAQAPAAAGAGQAGAGAAAJQAAAIgGAGQgGAFgPAAIhJAAIAABQQAAANAGAEQAIAGAUAAQAfAAAagNQAKgFAFAAQAIAAAGAGQAGAGAAAIQAAAIgHAGQgJAJgcAIQgdAHgTAAQgkAAgTgQg");
	this.shape_56.setTransform(493.2,845.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgeBcQgOgEgNgFIgGADIgGACQgKAAgGgGQgFgGAAgPIAAgNQAAgPAFgGQAGgGAJAAQAIAAAEAEQAFAEADAKQAJAHANAEQANAEAQABQAbAAAPgJQAIgFgBgEQAAgIgKgFQgKgFgggEQgwgEgQgOQgQgPAAgVQAAgVASgOQAZgUAnAAQANABANACQANACALAGIAIgEIAGgBQAHgBAGAHQAGAGAAAPIAAAJQAAAOgEAEQgGAJgLAAQgGAAgGgFQgGgEgBgHQgKgHgKgCQgMgDgLgBQgXAAgNAIQgGAEAAADQAAAFAIAEQAHADAVADQAnAGAQAFQAUAHALANQALAPAAAQQAAAVgSAPQgcAUgrAAQgRAAgPgCg");
	this.shape_57.setTransform(468,848.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AhCBMQgjgaAAguQAAgqAcgcQAdgcAsAAQARABAOACQAPAEAMAGQAHgHAIAAQAIAAAGAGQAFAGAAAPIAAAZQAAAPgFAGQgGAGgJAAQgIAAgGgEQgEgEgCgLQgDgLgJgFQgPgKgZAAQgbABgRAQQgRARAAAYQAAAYAQANQAQAOAlAAQAZgBAQgFQAKgCAIgIQAIgHAHgBQAIAAAHAHQAFAGAAAHQAAAOgSAMQgbARg0AAQgtAAgagSg");
	this.shape_58.setTransform(372.4,848.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AhDB/QgOAAgHgGQgGgFAAgJQAAgJAGgGQAHgFAOAAIAwAAIAAhhIggAAQgOAAgHgFQgGgGAAgJQAAgIAGgGQAGgGAPAAIBHAAIAACJIAwAAQAPAAAGAFQAGAGAAAJQAAAJgGAFQgGAGgPAAgAgghTIAAgrIAvAAIAAArg");
	this.shape_59.setTransform(347.9,844.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgrCFQgOAAgHgFQgGgGAAgJQAAgJAGgFQAHgGAOAAIArAAQASAAALgKQAKgKAAgPIAAgTQgNAIgOAFQgNAEgOAAQgpAAgcgbQgbgcAAgnQAAgoAbgbQAcgbApAAQAPAAANAEQANAEANAJIAAgMIAvAAQAOAAAGAGQAGAGAAAJQAAAIgGAGQgGAFgOAAIgHAAIAACRQAAAVgJAQQgJAQgSALQgTALgXAAgAg3hMQgQAQAAAWQAAAWAQAQQAQAQAXAAQAWAAAQgQQARgQAAgWQAAgWgRgQQgQgQgWAAQgXAAgQAQg");
	this.shape_60.setTransform(324.5,852.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AhVBNQgUgQAAgVQAAgZAZgVQAagVAtgBQARAAAZAFIAAgKQAAgJgIgGQgIgGgUAAQgTABgbAGQgLADgGAAQgIAAgGgFQgFgHAAgJQAAgFACgEQACgDADgCQADgDAMgDQAPgDAPgDQAPgCANgBQAlABAUAQQAVAQgBAcIAABRIAIAAQAOAAAGAFQAGAGAAAJQAAAJgGAGQgGAFgOAAIgvAAIAAgKQgQAIgRAFQgSADgPAAQggAAgUgRgAg1AXQgKAIAAAIQgBAGAGADQAJAHASAAQAOAAARgGQATgFAOgLIAAgRQgYgEgUAAQgYAAgSALg");
	this.shape_61.setTransform(300.3,848.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("ABABcIAAh+QAAgJgEgEQgDgDgHAAQgGAAgGADQgHAGgLANIAABPQANAAAGAGQAGAGAAAJQAAAIgGAGQgGAFgPABIglAAIAAh+QAAgJgDgEQgDgDgHAAQgHAAgHAEQgHAFgKANIAABPQANAAAGAGQAGAGAAAJQAAAIgGAGQgGAFgPABIgkAAQgOgBgGgFQgGgGAAgIQAAgJAGgGQAGgGAMAAIAAhgQgMAAgGgFQgGgGAAgJQAAgIAGgGQAGgGAOAAIAmAAIAAALQAKgJAIgDQAIgEAKgBQAJAAAJAFQAIAFAIAIQAKgIALgFQAKgEALAAQAXAAANAMQATAPAAAaIAABYQAMAAAGAGQAGAGAAAJQAAAIgGAGQgGAFgOABg");
	this.shape_62.setTransform(276.1,848.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgVBVQgIgIAAgLQAAgMAIgIQAIgHANAAQAOAAAIAHQAIAIAAAMQAAALgIAIQgIAHgOAAQgNAAgIgHgAgVguQgIgIAAgLQAAgLAIgHQAIgIANAAQAOAAAIAIQAIAHAAALQAAALgIAIQgIAIgOAAQgNAAgIgIg");
	this.shape_63.setTransform(876,801.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AguB2QgPAAgGgFQgGgFAAgJQAAgKAGgFQAGgGAPABIAbAAIAAicIgsAAIAAAmQAAAOgFAHQgGAFgJABQgJgBgFgFQgGgHAAgOIAAhOIDPAAIAABOQAAAOgGAHQgFAFgJABQgJgBgGgFQgFgHAAgOIAAgmIgsAAIAACcIAbAAQAOgBAGAGQAGAFAAAKQAAAJgGAFQgGAFgOAAg");
	this.shape_64.setTransform(851.9,798.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AA4B2IhmigIAAB5IAOAAQAPgBAGAGQAGAFAAAKQAAAJgGAFQgGAFgPAAIg0AAQgPAAgFgFQgHgFAAgJQAAgJAGgGQAGgGANABIAAicIgHAAQgOAAgGgFQgGgHAAgJQAAgJAGgEQAGgHAOABIAvAAIBmCgIAAh4IgPAAQgPAAgFgFQgHgHAAgJQAAgJAHgEQAFgHAPABIA1AAQAOAAAGAGQAGAEAAAJQAAAKgGAFQgGAGgNAAIAADDg");
	this.shape_65.setTransform(827.7,798.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AhQB2QgPAAgFgFQgHgFAAgJQAAgKAHgFQAGgGAOABIAHAAIAAicIgHAAQgPAAgFgFQgHgHAAgJQAAgJAHgEQAFgHAPABICzAAIAAA9QAAAOgGAGQgFAHgJAAQgJAAgGgHQgFgGAAgOIAAgVIhdAAIAAA6IAiAAQAAgQADgEQAGgKALAAQAKAAAFAGQAGAGAAAOIAAAuQgBANgDAFQgGAIgLABQgLAAgGgKQgDgFAAgQIgiAAIAAA8IBmAAIAAgWQgBgOAGgHQAFgGAKAAQAIAAAGAGQAFAHAAAOIAAA9g");
	this.shape_66.setTransform(803.3,798.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAxB2QgPAAgFgFQgHgFAAgJQAAgKAHgFQAFgGAPABIAPAAIAAh3IguBmIgiAAIguhmIAAB3IAOAAQAOgBAHAGQAFAFAAAKQAAAJgFAFQgHAFgOAAIg1AAQgOAAgGgFQgHgFAAgJQABgKAFgFQAHgGAMABIAAicQgKgBgGgFQgFgGAAgJQAAgJAHgEQAFgHAPABIAsAAIA2B3IA1h3IAsAAQAOAAAHAGQAGAEAAAJQAAAJgFAGQgGAFgLABIAACcQAOgBAFAGQAHAGgBAJQABAJgHAFQgGAFgOAAg");
	this.shape_67.setTransform(780.1,798.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AhQB2QgOAAgHgFQgFgFAAgJQAAgKAFgFQAHgGAOABIAGAAIAAicIgGAAQgOAAgHgFQgFgHAAgJQAAgJAFgEQAHgHAOABICzAAIAAA9QAAAOgGAGQgFAHgJAAQgJAAgFgHQgGgGAAgOIAAgVIhcAAIAAA6IAiAAQAAgQACgEQAHgKAKAAQAKAAAFAGQAGAGgBAOIAAAuQAAANgCAFQgHAIgLABQgKAAgHgKQgCgFAAgQIgiAAIAAA8IBkAAIAAgWQABgOAFgHQAGgGAIAAQAJAAAGAGQAGAHAAAOIAAA9g");
	this.shape_68.setTransform(755.3,798.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("ABIB2QgxhKgfgQIgnAAIAAAzIAOAAQAPgBAGAGQAGAFAAAKQAAAJgGAFQgGAFgPAAIg8AAQgPAAgGgFQgHgFABgJQgBgKAHgFQAGgGAPABIAFAAIAAicIgFAAQgPAAgGgFQgHgHABgJQgBgJAHgEQAGgHAPABIBaAAQAqAAAXAVQAXAVAAAeQAAATgLAPQgLAOgWAMQANAMAPARQAIALAPAYQAQAAAFACQAIAHABALQgBAJgFAFQgHAFgOAAgAgvgLIAfAAQAQAAAOgFQASgHAHgIQAGgIAAgHQAAgMgMgKQgMgJgWAAIguAAg");
	this.shape_69.setTransform(732.7,798.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("Ag7B2QgPAAgGgFQgGgFAAgJQAAgKAGgFQAGgGAPABIAoAAIAAicIgoAAQgPAAgGgFQgGgHAAgJQAAgJAGgEQAGgHAPABIB3AAQAPAAAGAGQAGAEAAAJQAAAJgGAHQgGAFgPAAIgoAAIAACcIAoAAQAPgBAGAGQAGAFAAAKQAAAJgGAFQgGAFgPAAg");
	this.shape_70.setTransform(708,798.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AghBzQgRgHgNgMQgNgNgHgOQgIgNAAgYIAAhwQgMAAgGgGQgGgFAAgKQAAgJAGgEQAGgGAPAAIA0AAQAPgBAGAHQAGAEAAAJQAAAJgGAHQgGAFgPAAIgOAAIAAB0QgBASAPAOQAQANAUAAQANAAANgGQANgHAHgMQAFgIAAgMIAAh0IgOAAQgPAAgGgFQgGgHAAgJQAAgJAGgEQAGgHAPABIA0AAQAPAAAGAGQAGAEAAAJQAAAKgGAFQgGAGgNAAIAABwQAAAmgaAaQgbAagmAAQgRgBgQgGg");
	this.shape_71.setTransform(684,798.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAlCTQgSgHgLAAQgQAAgjAIQgHACgEAAQgIAAgFgFQgGgGAAgJQAAgJAIgHIAZgZQgfgNgUggQgUgeAAgnQAAg7AoglQAggdAnAAQAoAAAgAdQAoAlAAA7QAAAwgeAjQgfAkgqADIgBACQAVAAASAIQAHAEAFAAQAHAAAKgHQAKgGAGAAQAJAAAFAFQAGAGAAAJQAAALgLAHQgVAPgVAAQgLAAgLgEgAgxhVQgWAYAAAkQAAAjAWAYQAWAYAbAAQAcAAAWgYQAWgYAAgjQAAglgWgXQgWgZgcAAQgbAAgWAZg");
	this.shape_72.setTransform(660,801);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AhQB2QgOAAgHgFQgFgFgBgJQABgKAFgFQAHgGAOABIAGAAIAAicIgGAAQgOAAgHgFQgFgHgBgJQABgJAFgEQAHgHAOABICzAAIAAA9QAAAOgFAGQgGAHgJAAQgJAAgFgHQgGgGAAgOIAAgVIhcAAIAAA6IAhAAQABgQADgEQAFgKAMAAQAIAAAGAGQAFAGABAOIAAAuQAAANgDAFQgHAIgKABQgMAAgFgKQgDgFgBgQIghAAIAAA8IBlAAIAAgWQAAgOAFgHQAFgGAJAAQAKAAAFAGQAGAHgBAOIAAA9g");
	this.shape_73.setTransform(635.3,798.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("ABIB2QgwhKgfgQIgpAAIAAAzIAPAAQAPgBAGAGQAGAFAAAKQAAAJgGAFQgGAFgPAAIg9AAQgOAAgGgFQgHgFAAgJQAAgKAHgFQAGgGAOABIAHAAIAAicIgHAAQgOAAgGgFQgHgHAAgJQAAgJAHgEQAGgHAOABIBbAAQApAAAYAVQAXAVAAAeQAAATgLAPQgLAOgWAMQANAMAOARQAKALAOAYQAQAAAEACQAKAHgBALQAAAJgFAFQgHAFgOAAgAgwgLIAgAAQARAAANgFQASgHAHgIQAGgIAAgHQAAgMgMgKQgMgJgXAAIguAAg");
	this.shape_74.setTransform(612.7,798.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#660033").s().p("AgrBrQgTgQAAgXIAAhYIgOAAQgPAAgGgFQgGgGAAgJQAAgIAGgGQAGgGAPAAIAOAAIAAgkQAAgOAGgGQAFgGAJAAQAJAAAGAGQAFAGAAAOIAAAkIBJAAQAPAAAGAGQAGAGAAAJQAAAIgGAGQgGAFgPAAIhJAAIAABQQAAANAGAEQAIAGAUAAQAfAAAagNQAKgFAFAAQAIAAAGAGQAGAGAAAIQAAAIgHAGQgJAJgcAIQgdAHgTAAQgkAAgTgQg");
	this.shape_75.setTransform(1134.8,670.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#660033").s().p("AgxBTQgOgHgJgPQgFgLAAgPIAAhWIgIAAQgOAAgGgFQgGgGAAgJQAAgJAGgFQAGgGAOAAIAvAAIAAB2QAAANAGAGQAHAGAMAAQAMAAANgFQAPgEAUgNIAAhRIgPAAQgOAAgGgFQgGgGAAgJQAAgJAGgFQAGgGAOAAIA3AAIAACIQANABAGAFQAGAGAAAIQAAAJgGAGQgGAGgPAAIgmAAIAAgJQgRAHgQAEQgPAEgNAAQgUAAgPgJg");
	this.shape_76.setTransform(1109.4,673.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#660033").s().p("AgzBSQgZgNgNgVQgNgWgBgXQABgYANgXQANgXAZgOQAYgNAbABQAbAAAZANQAZAOAOAWQAMAXAAAYQAAAWgMAXQgNAVgaANQgYANgcAAQgaAAgZgNgAgsgkQgTARABAWQgBATATAQQASAQAaAAQAbAAASgQQATgQAAgTQgBgSgOgQQgTgXgeAAQgbAAgRASg");
	this.shape_77.setTransform(1085.6,673.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#660033").s().p("AhCBMQgjgaAAguQAAgqAcgcQAdgbAsAAQARAAAOACQAPADAMAHQAHgHAIAAQAIAAAGAGQAFAHAAANIAAAaQAAAPgFAGQgGAGgJAAQgIAAgGgEQgEgEgCgLQgDgLgJgFQgPgKgZAAQgbAAgRARQgRAQAAAZQAAAXAQAOQAQANAlAAQAZAAAQgEQAKgDAIgIQAIgHAHAAQAIgBAHAHQAFAGAAAHQAAAOgSAMQgbASg0AAQgtgBgagSg");
	this.shape_78.setTransform(1062,673.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#660033").s().p("AgcB5QgPgEgPgIIgIAHQgEACgFAAQgJAAgFgGQgGgGABgOIAAgbQgBgPAGgGQAFgGAJAAQAIAAAEADQAFAEADAJQADAJACADQAGAGAOAGQAOAGARABQAaAAARgNQAMgIAAgLQgBgIgEgGQgGgGgMgEQgIgEgagEQghgHgQgJQgRgHgKgQQgKgPABgSQAAgdAXgWQAYgWAnABQAOgBANAEQANAEALAGQAIgHAIAAQAJAAAFAGQAGAGAAAOIAAAfQAAAOgGAHQgFAFgJABQgIAAgFgFQgEgEgCgJQgDgLgDgEQgGgHgLgFQgLgFgOAAQgWAAgMAKQgNAKAAALQAAAHAGAHQAFAHAJAEQAHADAeAGQAeAGARAHQAQAHAMAOQALAQAAAVQgBAegUASQgcAXgrAAQgQAAgQgDg");
	this.shape_79.setTransform(1037.6,670.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFF00").s().p("AhMBbQgPAAgFgFQgHgGAAgJQAAgJAHgFQAFgGAPAAIAXAAIAAhgIgOAAQgOAAgGgGQgHgFABgJQgBgJAHgFQAGgGAOAAIA3AAIAAAZQAYgSAOgGQAPgGAMAAQAUAAATAOQAMAKAAAKQAAAJgGAGQgGAGgIAAQgHAAgJgIQgIgHgHAAQgIAAgQAKQgSALgXAVIAAA7IA3AAQAPAAAHAGQAFAFAAAJQAAAJgFAGQgHAFgPAAg");
	this.shape_80.setTransform(822.1,673.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFF00").s().p("AhKBEQgdgcAAgoQAAgpAfgaQAfgbApABQAXAAAVAIQAUAIAKALQAOAOAJAWQAHAOAAATIAAARIikAAQAHAPAQAKQAQAKAagBQAWABAlgKQAPgEAGAAQAIAAAFAGQAGAFAAAJQAAAHgGAGQgIAIgeAGQgeAGgcABQgvAAgdgbgAgigtQgPAIgJARIB1AAQgJgRgPgIQgOgJgVAAQgTAAgPAJg");
	this.shape_81.setTransform(797.2,673.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFF00").s().p("AhDB/QgPAAgFgGQgHgFAAgJQAAgJAHgGQAFgFAPAAIAwAAIAAitIggAAQgOAAgHgFQgGgGAAgJQAAgIAGgGQAHgGAOAAIBHAAIAADVIAwAAQAOAAAHAFQAGAGAAAJQAAAJgGAFQgHAGgOAAg");
	this.shape_82.setTransform(773.6,669.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFF00").s().p("AhVBNQgUgQAAgVQAAgaAagUQAZgVAugBQARAAAXAFIAAgKQABgJgIgGQgIgGgVAAQgSABgcAGQgKADgGAAQgIAAgFgFQgGgHAAgJQAAgFACgEQABgDAEgCQAEgCALgDQAOgEAQgDQAQgDAMABQAkgBAVARQAVAPAAAdIAABRIAHAAQAOAAAGAFQAGAGAAAJQAAAJgGAGQgGAFgOAAIgwAAIAAgKQgPAJgRADQgSAFgPAAQgggBgUgRgAg1AXQgLAIABAIQAAAGAEADQALAHAQgBQAPABARgGQATgFANgLIAAgRQgXgEgUAAQgYAAgSALg");
	this.shape_83.setTransform(749.9,673.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFF00").s().p("AhKBEQgdgcAAgoQAAgpAfgaQAfgbApABQAXAAAVAIQAUAIAKALQAOAOAJAWQAHAOAAATIAAARIikAAQAHAPAQAKQAQAKAagBQAWABAlgKQAPgEAGAAQAIAAAFAGQAGAFAAAJQAAAHgGAGQgIAIgeAGQgeAGgcABQgvAAgdgbgAgigtQgPAIgJARIB1AAQgJgRgPgIQgOgJgVAAQgTAAgPAJg");
	this.shape_84.setTransform(725.2,673.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFF00").s().p("AAkB3QgOAAgGgGQgGgGAAgJQAAgIAGgGQAGgFAOgBIAHAAIAAg5IhVAAIAAA5IAGAAQAPABAGAFQAGAGAAAIQAAAJgGAGQgGAGgPAAIgxAAQgOAAgGgGQgGgGAAgJQAAgKAJgGQAFgEAPAAIAAibQgLgBgFgGQgFgFAAgIQAAgKAGgFQAGgFAOgBIApABQAPAAAGAFQAGAFAAAKQAAAIgGAGQgGAGgPAAIgGAAIAAA6IBVAAIAAg6IgHAAQgOAAgGgGQgGgGAAgIQAAgKAGgFQAGgFAOgBIApABQAPAAAGAFQAGAFAAAKQAAAIgFAFQgGAGgKABIAACbQAPAAAFAEQAJAGAAAKQAAAJgGAGQgGAGgPAAg");
	this.shape_85.setTransform(701.7,670.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#00FF33").s().p("AgrBrQgTgQAAgXIAAhYIgOAAQgPAAgGgFQgGgGAAgJQAAgIAGgGQAGgGAPAAIAOAAIAAgkQAAgOAGgGQAFgGAJAAQAJAAAGAGQAFAGAAAOIAAAkIBJAAQAPAAAGAGQAGAGAAAJQAAAIgGAGQgGAFgPAAIhJAAIAABQQAAANAGAEQAIAGAUAAQAfAAAagNQAKgFAFAAQAIAAAGAGQAGAGAAAIQAAAIgHAGQgJAJgcAIQgdAHgTAAQgkAAgTgQg");
	this.shape_86.setTransform(486.8,670.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#00FF33").s().p("AhMBbQgPAAgFgFQgHgGAAgJQAAgJAHgFQAFgGAPAAIAXAAIAAhgIgOAAQgOAAgGgGQgHgFABgJQgBgJAHgFQAGgGAOAAIA3AAIAAAZQAYgSAOgGQAPgGAMAAQAUAAATAOQAMAKAAAKQAAAJgGAGQgGAGgIAAQgHAAgJgIQgIgHgHAAQgIAAgQAKQgSALgXAVIAAA7IA3AAQAPAAAHAGQAFAFAAAJQAAAJgFAGQgHAFgPAAg");
	this.shape_87.setTransform(462.1,673.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#00FF33").s().p("AgzBSQgZgNgNgVQgNgWgBgXQABgYANgXQANgXAZgOQAYgNAbABQAbAAAaANQAYAOAOAWQANAXgBAYQAAAWgMAXQgNAVgZANQgaANgbAAQgaAAgZgNgAgsgkQgTARABAWQgBATATAQQASAQAaAAQAbAAASgQQATgQAAgTQgBgSgOgQQgTgXgeAAQgbAAgRASg");
	this.shape_88.setTransform(437.6,673.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#00FF33").s().p("AhYCFQgPAAgGgGQgGgFAAgJQAAgJAGgGQAGgFAPAAIAHAAIAAi0IgHAAQgPAAgGgFQgGgGAAgJQAAgJAGgFQAGgGAPAAIAvAAIAAAOQAOgKAPgEQAOgFAQAAQApAAAcAcQAdAbAAAlQAAAngiAZQgcAWgkgBQgQABgOgFQgPgEgOgKIAABCIAYAAQAOAAAFAFQAGAGAAAJQAAAJgGAFQgFAGgOAAgAgehGQgLAQAAAOQAAAQARAPQARAOAYABQAZgBARgOQARgOAAgRQAAgJgGgNQgHgNgOgIQgOgJgSAAQgdAAgSAWg");
	this.shape_89.setTransform(412.8,677.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#00FF33").s().p("AhYCFQgPAAgGgGQgGgFAAgJQAAgJAGgGQAGgFAPAAIAHAAIAAi0IgHAAQgPAAgGgFQgGgGAAgJQAAgJAGgFQAGgGAPAAIAvAAIAAAOQAOgKAPgEQAOgFAQAAQApAAAcAcQAdAbAAAlQAAAngiAZQgcAWgkgBQgQABgOgFQgPgEgOgKIAABCIAYAAQAOAAAFAFQAGAGAAAJQAAAJgGAFQgFAGgOAAgAgehGQgLAQAAAOQAAAQARAPQARAOAYABQAZgBARgOQARgOAAgRQAAgJgGgNQgHgNgOgIQgOgJgSAAQgdAAgSAWg");
	this.shape_90.setTransform(388.8,677.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#00FF33").s().p("AgxBTQgOgHgIgPQgHgLAAgPIAAhWIgHAAQgOAAgGgFQgGgGAAgJQAAgJAGgFQAGgGAOAAIAwAAIAAB2QAAANAFAGQAHAGAMAAQAMAAANgFQAOgEAVgNIAAhRIgOAAQgPAAgGgFQgGgGAAgJQAAgJAGgFQAGgGAPAAIA2AAIAACIQANABAGAFQAGAGAAAIQAAAJgGAGQgGAGgPAAIgmAAIAAgJQgRAHgQAEQgPAEgOAAQgTAAgPgJg");
	this.shape_91.setTransform(365.4,673.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#00FF33").s().p("AgbB5QgQgEgPgIIgIAHQgEACgEAAQgKAAgFgGQgGgGAAgOIAAgbQAAgPAGgGQAFgGAKAAQAHAAAEADQAFAEADAJQACAJADADQAFAGAPAGQAOAGARABQAbAAAQgNQAMgIgBgLQAAgIgEgGQgGgGgMgEQgHgEgbgEQgggHgSgJQgQgHgKgQQgKgPAAgSQAAgdAYgWQAZgWAmABQAPgBAMAEQANAEAMAGQAHgHAIAAQAJAAAFAGQAGAGAAAOIAAAfQAAAOgGAHQgFAFgJABQgIAAgFgFQgEgEgDgJQgCgLgDgEQgFgHgMgFQgLgFgOAAQgVAAgNAKQgNAKAAALQAAAHAFAHQAGAHAKAEQAGADAeAGQAfAGAQAHQARAHAKAOQAMAQAAAVQAAAegWASQgbAXgrAAQgPAAgQgDg");
	this.shape_92.setTransform(341.6,670.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgVBVQgIgIAAgMQAAgLAIgIQAIgHANAAQAOAAAIAHQAIAIAAALQAAAMgIAIQgIAHgOAAQgNAAgIgHgAgVguQgIgIAAgKQAAgMAIgHQAIgIANAAQAOAAAIAIQAIAHAAAMQAAAKgIAIQgIAIgOAAQgNAAgIgIg");
	this.shape_93.setTransform(785.6,626.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AhQB2QgPAAgFgFQgHgFAAgJQAAgKAHgFQAGgGAOABIAHAAIAAicIgHAAQgPAAgFgFQgHgHAAgJQAAgIAHgGQAFgFAPAAICzAAIAAA9QAAAOgGAGQgFAHgJAAQgJAAgGgHQgFgGAAgOIAAgVIhdAAIAAA6IAjAAQgBgQADgFQAHgJAKAAQAKAAAFAGQAGAGgBAOIAAAuQAAANgDAEQgGAJgLAAQgKABgHgKQgDgEABgRIgjAAIAAA8IBlAAIAAgWQAAgPAGgGQAFgGAKAAQAIAAAGAGQAFAGABAPIAAA9g");
	this.shape_94.setTransform(760.9,623.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AhRB2QgOAAgGgFQgGgFAAgJQAAgKAGgFQAGgGAOABIAYAAIAAicIgYAAQgOAAgGgFQgGgHAAgJQAAgIAGgGQAGgFAOAAIBXAAQANAAAHAFQAGAGAAAIQAAAJgGAHQgHAFgNAAIgXAAIAACcIBVAAIAAgnQAAgOAGgGQAFgGAJAAQAJAAAGAGQAFAGAAAOIAABOg");
	this.shape_95.setTransform(737.7,623.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AhHBfQgoglAAg6QAAg5AoglQAggdAngBQAsAAAiAkQAiAjAAA1QAAA2giAjQgiAkgsAAQgngBgggdgAgxg7QgWAYAAAjQAAAkAWAZQAWAXAbAAQAcAAAWgXQAWgZAAgkQAAgkgWgXQgWgYgcAAQgbAAgWAYg");
	this.shape_96.setTransform(713.6,623.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("ABIB2QgxhKgfgQIgnAAIAAAzIAOAAQAOgBAHAGQAGAFAAAKQAAAJgGAFQgHAFgOAAIg9AAQgOAAgGgFQgHgFAAgJQAAgKAHgFQAGgGAOABIAGAAIAAicIgGAAQgOAAgGgFQgHgHAAgJQAAgIAHgGQAGgFAOAAIBbAAQAqAAAXAVQAXAVAAAeQAAATgLAPQgLAOgWAMQANAMAPARQAIALAPAYQAQAAAEACQAJAGAAAMQAAAJgFAFQgHAFgOAAgAgvgLIAfAAQARAAANgFQASgIAHgHQAGgIAAgHQAAgMgMgKQgMgJgWAAIguAAg");
	this.shape_97.setTransform(690.3,623.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgaAYQgKgKAAgOQAAgNAKgKQAKgJAQAAQARAAAKAJQAKAKAAANQAAAOgKAKQgKAJgRAAQgQAAgKgJg");
	this.shape_98.setTransform(1163.3,506);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AhcBUQgjgiAAgxQAAg0AmghQAnghAyAAQAdAAAZALQAZAKANANQARASALAbQAIASAAAYIAAAVIjKAAQAIATAUAMQATAMAhAAQAbAAAugMQATgFAHAAQAKAAAGAHQAHAIAAAKQAAAKgHAHQgKAJglAIQglAIgjAAQg6AAgkgigAgqg4QgTAKgLAWICRAAQgLgWgSgKQgTgLgZAAQgYAAgSALg");
	this.shape_99.setTransform(1133.2,497.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("Ag1CGQgXgUAAgdIAAhtIgSAAQgSAAgHgHQgIgHAAgMQAAgLAIgGQAHgHASAAIASAAIAAguQAAgSAHgHQAHgIALAAQALAAAGAIQAHAHAAASIAAAuIBbAAQARAAAIAHQAIAGAAAMQAAALgIAHQgIAHgRAAIhbAAIAABjQAAAQAHAFQAKAIAZAAQAmAAAggQQAMgGAHAAQAKAAAHAHQAHAHAAALQAAAJgIAIQgMALgiAKQgjAJgYAAQgtAAgXgUg");
	this.shape_100.setTransform(1105.6,493.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("Ag8BpQgSgLgKgSQgIgNAAgUIAAhrIgIAAQgSAAgIgHQgHgHAAgLQAAgLAHgHQAIgHASAAIA6AAIAACUQAAAQAIAHQAHAIAPAAQAPAAARgGQARgGAZgQIAAhlIgSAAQgRAAgIgHQgIgHABgLQgBgLAIgHQAIgHARAAIBEAAIAACrQAPAAAIAHQAHAHAAALQAAALgHAHQgIAHgRAAIgwAAIAAgMQgVAKgTAFQgTAFgRAAQgZAAgRgKg");
	this.shape_101.setTransform(1074.1,497.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AhTCeQgRAAgIgHQgIgHAAgLQAAgLAIgHQAIgHARAAIA7AAIAAjXIgnAAQgSAAgHgHQgJgHAAgLQAAgLAJgHQAHgHASAAIBYAAIAAEJIA7AAQASAAAIAHQAHAHAAALQAAALgHAHQgIAHgSAAg");
	this.shape_102.setTransform(1044.8,492.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AhpCjQgRAAgIgHQgIgHABgLQgBgLAIgHQAIgHARAAIAyAAIAcg4IhWipQgMgCgHgGQgFgIAAgJQgBgLAIgHQAIgHARAAIAtAAQATAAAHAHQAHAHAAALQAAALgHAHQgIAHgQAAIA6ByIA5hyQgQAAgHgHQgIgHAAgLQAAgLAIgHQAHgHASAAIAvAAQARAAAIAHQAIAHgBALQABAKgHAHQgGAHgNABIhxDhQASAAAGADQALAIAAAOQAAALgIAHQgHAHgSAAg");
	this.shape_103.setTransform(985.6,502.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("Ag1CGQgXgUAAgdIAAhtIgSAAQgSAAgHgHQgIgHAAgMQAAgLAIgGQAHgHASAAIASAAIAAguQAAgSAHgHQAHgIALAAQALAAAGAIQAHAHAAASIAAAuIBbAAQARAAAIAHQAIAGAAAMQAAALgIAHQgIAHgRAAIhbAAIAABjQAAAQAHAFQAKAIAZAAQAmAAAggQQAMgGAHAAQAKAAAHAHQAHAHAAALQAAAJgIAIQgMALgiAKQgjAJgYAAQgtAAgXgUg");
	this.shape_104.setTransform(957.4,493.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgkBzQgTgEgPgIQgDAEgFABQgEACgFAAQgLAAgGgIQgIgHAAgSIAAgRQAAgSAIgIQAGgIALAAQAJAAAGAFQAGAFAEAMQALAKAQAFQAQAFAUAAQAhAAAUgKQAIgGAAgGQAAgJgNgHQgNgGgngFQg7gGgUgRQgUgSAAgaQAAgbAXgSQAegYAxAAQAQAAAQADQAQAEAOAGIAJgFIAHgBQAKAAAHAHQAHAIAAASIAAAMQAAARgEAFQgIAMgNAAQgJAAgGgGQgIgGgBgJQgMgHgNgEQgOgEgOAAQgcAAgRAKQgHAEAAAFQgBAFALAGQAHADAbAEQAxAHASAHQAaAJAOARQAOARgBAUQABAbgYASQghAag2AAQgUAAgSgDg");
	this.shape_105.setTransform(926.3,497.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("Ag8BpQgSgLgLgSQgHgNAAgUIAAhrIgIAAQgSAAgIgHQgHgHAAgLQAAgLAHgHQAIgHASAAIA6AAIAACUQAAAQAIAHQAHAIAPAAQAPAAARgGQARgGAZgQIAAhlIgSAAQgRAAgIgHQgHgHAAgLQAAgLAHgHQAIgHARAAIBEAAIAACrQAPAAAIAHQAIAHgBALQABALgIAHQgIAHgRAAIgwAAIAAgMQgVAKgTAFQgTAFgRAAQgZAAgRgKg");
	this.shape_106.setTransform(896.4,497.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AheByQgSAAgIgHQgIgHAAgLQAAgLAIgHQAIgHASAAIAdAAIAAh4IgSAAQgSAAgHgHQgIgHAAgMQAAgLAIgGQAHgHASAAIBEAAIAAAfQAegXARgHQASgIAQAAQAYAAAXASQAQAMAAANQAAALgIAHQgHAIgKAAQgKAAgKgKQgKgJgIAAQgKAAgVANQgVANgdAbIAABKIBFAAQASAAAHAHQAIAHAAALQAAALgIAHQgHAHgSAAg");
	this.shape_107.setTransform(867.6,497.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("Ag1CGQgXgUAAgdIAAhtIgSAAQgSAAgHgHQgIgHAAgMQAAgLAIgGQAHgHASAAIASAAIAAguQAAgSAHgHQAHgIALAAQALAAAGAIQAHAHAAASIAAAuIBbAAQARAAAIAHQAIAGAAAMQAAALgIAHQgIAHgRAAIhbAAIAABjQAAAQAHAFQAKAIAZAAQAmAAAggQQAMgGAHAAQAKAAAHAHQAHAHAAALQAAAJgIAIQgMALgiAKQgjAJgYAAQgtAAgXgUg");
	this.shape_108.setTransform(838.9,493.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AglBzQgSgEgPgIQgDAEgFABQgEACgEAAQgMAAgGgIQgIgHAAgSIAAgRQAAgSAIgIQAGgIALAAQAJAAAGAFQAGAFAEAMQALAKAQAFQAQAFAUAAQAhAAAUgKQAIgGAAgGQAAgJgNgHQgNgGgngFQg7gGgUgRQgUgSAAgaQAAgbAXgSQAegYAxAAQAQAAAQADQAQAEAOAGIAJgFIAHgBQALAAAGAHQAHAIAAASIAAAMQAAARgEAFQgIAMgNAAQgJAAgHgGQgGgGgDgJQgLgHgNgEQgOgEgOAAQgcAAgRAKQgIAEABAFQAAAFAKAGQAHADAbAEQAxAHASAHQAaAJAOARQAOARgBAUQABAbgYASQgiAag1AAQgUAAgTgDg");
	this.shape_109.setTransform(778.2,497.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AhTCeQgSAAgIgHQgHgHAAgLQAAgLAHgHQAIgHASAAIA7AAIAAh4IgoAAQgRAAgIgHQgHgHAAgMQAAgLAHgGQAIgHARAAIBYAAIAACqIA8AAQASAAAIAHQAHAHAAALQAAALgHAHQgIAHgSAAgAgohoIAAg1IA6AAIAAA1g");
	this.shape_110.setTransform(748.5,492.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AAzCeQgRAAgHgHQgIgHAAgLQAAgOALgHQAGgEATAAIAAhaQAAgTgIgHQgMgLgWAAQgQAAgMAHQgNAGgVAUIAABeQASAAAHAEQALAHAAAOQAAALgIAHQgHAHgSAAIg4AAQgSAAgIgHQgHgHAAgLQAAgOAMgHQAGgEASAAIAAjXIgIAAQgSAAgHgHQgIgHAAgLQAAgLAIgHQAHgHASAAIA6AAIAABqQAPgJAQgEQAPgFAQAAQAZAAAUAJQAVAJANATQANASgBAcIAABeQAUAAAGAEQALAHAAAOQAAALgIAHQgHAHgSAAg");
	this.shape_111.setTransform(718.8,492.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AAzCeQgRAAgIgHQgHgHAAgLQAAgOAMgHQAFgEATAAIAAhaQAAgTgJgHQgLgLgWAAQgPAAgNAHQgNAGgVAUIAABeQASAAAGAEQAMAHAAAOQAAALgHAHQgIAHgSAAIg4AAQgSAAgIgHQgHgHAAgLQAAgOALgHQAGgEATAAIAAjXIgIAAQgSAAgIgHQgHgHAAgLQAAgLAHgHQAIgHASAAIA6AAIAABqQAPgJAQgEQAQgFAPAAQAZAAAVAJQATAJANATQANASABAcIAABeQASAAAHAEQALAHAAAOQAAALgIAHQgHAHgSAAg");
	this.shape_112.setTransform(659.5,492.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("Ag1CGQgXgUAAgdIAAhtIgSAAQgSAAgHgHQgIgHAAgMQAAgLAIgGQAHgHASAAIASAAIAAguQAAgSAHgHQAHgIALAAQALAAAGAIQAHAHAAASIAAAuIBbAAQARAAAIAHQAIAGAAAMQAAALgIAHQgIAHgRAAIhbAAIAABjQAAAQAHAFQAKAIAZAAQAmAAAggQQAMgGAHAAQAKAAAHAHQAHAHAAALQAAAJgIAIQgMALgiAKQgjAJgYAAQgtAAgXgUg");
	this.shape_113.setTransform(631.5,493.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AhTCeQgSAAgHgHQgIgHAAgLQAAgLAIgHQAHgHASAAIA7AAIAAh4IgnAAQgSAAgIgHQgHgHgBgMQABgLAHgGQAHgHATAAIBYAAIAACqIA7AAQASAAAHAHQAIAHAAALQAAALgIAHQgHAHgSAAgAgohoIAAg1IA6AAIAAA1g");
	this.shape_114.setTransform(600.3,492.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAkBvIgkhdIghBdIguAAIgqirQgNgBgHgGQgHgIAAgKQAAgLAIgHQAHgHASAAIAuAAQASAAAHAHQAIAHAAALQAAALgJAIQgGAGgTAAIASBOIAfhQIArAAIAfBQIAThOQgSAAgGgEQgMgHAAgOQAAgLAIgHQAIgHARAAIAvAAQASAAAIAHQAHAHAAALQAAAKgGAHQgHAHgNABIgpCrg");
	this.shape_115.setTransform(570.7,497.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AhtCCQgighAAgwQAAgyAkgkQAkgkAzAAQATAAASAGQASAGASAMIAAg+IgIAAQgSAAgIgHQgHgHgBgLQABgLAHgHQAIgHASAAIA5AAIAAEJIAJAAQARAAAIAHQAIAHAAALQAAALgIAHQgHAHgSAAIg6AAIAAgMQgQAKgTAFQgSAFgTAAQg4AAgigggAhIgBQgVAUgBAeQAAAcAUASQATARAjAAQAiAAAUgRQATgSAAgbQAAgfgWgUQgVgWgeAAQgeAAgWAWg");
	this.shape_116.setTransform(512.5,493.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AhTCeQgSAAgHgHQgIgHAAgLQAAgLAIgHQAHgHASAAIA8AAIAAjXIgpAAQgRAAgIgHQgHgHgBgLQABgLAHgHQAIgHARAAIBZAAIAAEJIA7AAQASAAAIAHQAHAHAAALQAAALgHAHQgIAHgSAAg");
	this.shape_117.setTransform(481.8,492.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AhcBUQgjgiAAgxQAAg0AmghQAnghAyAAQAdAAAZALQAZAKANANQARASALAbQAIASAAAYIAAAVIjKAAQAIATAUAMQATAMAhAAQAbAAAugMQATgFAHAAQAKAAAGAHQAHAIAAAKQAAAKgHAHQgKAJglAIQglAIgjAAQg6AAgkgigAgqg4QgTAKgLAWICRAAQgLgWgSgKQgTgLgZAAQgYAAgSALg");
	this.shape_118.setTransform(451.7,497.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AhTCeQgSAAgHgHQgIgHAAgLQAAgLAIgHQAHgHASAAIA7AAIAAh4IgnAAQgSAAgIgHQgHgHgBgMQABgLAHgGQAHgHATAAIBYAAIAACqIA7AAQASAAAHAHQAIAHAAALQAAALgIAHQgHAHgSAAgAgohoIAAg1IA6AAIAAA1g");
	this.shape_119.setTransform(422.5,492.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AhZCeQgSAAgIgHQgHgHAAgLQAAgLAHgHQAIgHASAAIAdAAIAAh4IgYAAQgRAAgIgHQgIgHAAgMQAAgLAIgGQAIgHARAAIAYAAIAAgTQAAghAYgWQAZgVAtAAQAUAAAbAEQAbADAIAHQAHAHAAALQAAALgHAHQgGAHgKAAIgOgBQgfgGgXAAQgZAAgIAHQgJAIAAALIAAATIBLAAQASAAAHAHQAIAGAAAMQAAALgIAHQgHAHgSAAIhLAAIAAB4IBFAAQASAAAIAHQAHAHAAALQAAALgHAHQgIAHgSAAg");
	this.shape_120.setTransform(394,492.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AhcBUQgjgiAAgxQAAg0AmghQAnghAyAAQAdAAAZALQAZAKANANQARASALAbQAIASAAAYIAAAVIjKAAQAIATAUAMQATAMAhAAQAbAAAugMQATgFAHAAQAKAAAGAHQAHAIAAAKQAAAKgHAHQgKAJglAIQglAIgjAAQg6AAgkgigAgqg4QgTAKgLAWICRAAQgLgWgSgKQgTgLgZAAQgYAAgSALg");
	this.shape_121.setTransform(362.9,497.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("Ag1CGQgXgUAAgdIAAhtIgSAAQgSAAgHgHQgIgHAAgMQAAgLAIgGQAHgHASAAIASAAIAAguQAAgSAHgHQAHgIALAAQALAAAGAIQAHAHAAASIAAAuIBbAAQARAAAIAHQAIAGAAAMQAAALgIAHQgIAHgRAAIhbAAIAABjQAAAQAHAFQAKAIAZAAQAmAAAggQQAMgGAHAAQAKAAAHAHQAHAHAAALQAAAJgIAIQgMALgiAKQgjAJgYAAQgtAAgXgUg");
	this.shape_122.setTransform(335.2,493.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("Ag1CGQgXgUAAgdIAAhtIgSAAQgSAAgHgHQgIgHAAgMQAAgLAIgGQAHgHASAAIASAAIAAguQAAgSAHgHQAHgIALAAQALAAAGAIQAHAHAAASIAAAuIBbAAQARAAAIAHQAIAGAAAMQAAALgIAHQgIAHgRAAIhbAAIAABjQAAAQAHAFQAKAIAZAAQAmAAAggQQAMgGAHAAQAKAAAHAHQAHAHAAALQAAAJgIAIQgMALgiAKQgjAJgYAAQgtAAgXgUg");
	this.shape_123.setTransform(305.5,493.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AhpBhQgZgVAAgbQAAgfAggZQAfgcA5AAQAUAAAeAFIAAgMQAAgLgJgHQgKgHgaAAQgWAAgiAIQgNADgIABQgKgBgGgGQgIgIAAgLQABgGACgFQADgFADgCQAFgDAOgEQASgFATgDQATgEAPABQAtAAAbAUQAZAUAAAjIAABmIAIAAQASAAAIAHQAHAHAAALQAAALgHAHQgIAHgSAAIg6AAIAAgLQgTAJgVAFQgWAGgTgBQgoABgYgWgAhCAdQgNAKAAAJQAAAIAHAEQAMAJAUgBQATABAVgIQAWgHASgMIAAgWQgdgFgZgBQgdAAgXAPg");
	this.shape_124.setTransform(274.8,497.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgRCdQgSgFgRgKIAAAMIg6AAQgSAAgIgHQgHgHAAgLQAAgLAHgHQAIgHASAAIAJAAIAAjXIgJAAQgSAAgIgHQgHgHAAgLQAAgLAHgHQAIgHASAAIA6AAIAABwQASgMATgGQARgGAUAAQAzAAAjAkQAkAkAAAyQAAAwgiAhQgiAgg3AAQgUAAgSgFgAgegBQgWAUAAAeQAAAcATASQAUARAiAAQAjAAAUgRQASgSABgbQAAgfgWgUQgWgWgeAAQgeAAgVAWg");
	this.shape_125.setTransform(243.8,493.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AA6ByQgSAAgIgHQgHgHAAgLQAAgLAHgHQAIgHAQAAIAAhdQgBgRgIgHQgMgKgWAAQgQAAgNAHQgNAGgUAWIAABcQATAAAFAEQAMAHAAAOQABALgIAHQgIAHgRAAIg5AAQgRAAgIgHQgHgHAAgLQAAgOALgHQAFgEAUAAIAAh4QgQAAgIgHQgHgIAAgLQAAgLAIgGQAHgHASAAIAvAAIAAAQQAOgLAQgGQAQgGASAAQAsAAAZAcQAVAWAAAjIAABcQAPAAAIAHQAHAHABALQgBALgHAHQgHAHgTAAg");
	this.shape_126.setTransform(1237.4,438.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AhTCeQgSAAgIgHQgHgHAAgLQAAgLAHgHQAIgHASAAIA7AAIAAh4IgoAAQgRAAgIgHQgIgHAAgMQAAgLAIgGQAHgHASAAIBYAAIAACqIA8AAQASAAAIAHQAHAHAAALQAAALgHAHQgIAHgSAAgAgohoIAAg1IA6AAIAAA1g");
	this.shape_127.setTransform(1207.7,434.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AglBzQgSgEgPgIQgDAEgFABQgEACgFAAQgLAAgHgIQgGgHAAgSIAAgRQAAgSAGgIQAHgIALAAQAJAAAGAFQAGAFADAMQAMAKAQAFQAQAFATAAQAjAAASgKQAJgGAAgGQAAgJgMgHQgNgGgngFQg8gGgUgRQgUgSAAgaQAAgbAWgSQAfgYAxAAQAQAAAQADQAQAEAOAGIAJgFIAHgBQALAAAGAHQAHAIAAASIAAAMQAAARgEAFQgIAMgNAAQgJAAgHgGQgHgGgCgJQgMgHgNgEQgNgEgOAAQgcAAgRAKQgIAEAAAFQABAFAJAGQAJADAaAEQAwAHAUAHQAZAJANARQAPARAAAUQAAAbgYASQghAag2AAQgVAAgSgDg");
	this.shape_128.setTransform(1133.7,438.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AhcBUQgjgiAAgxQAAg0AmghQAnghAyAAQAdAAAZALQAZAKANANQARASALAbQAIASAAAYIAAAVIjKAAQAIATAUAMQATAMAhAAQAbAAAugMQATgFAHAAQAKAAAGAHQAHAIAAAKQAAAKgHAHQgKAJglAIQglAIgjAAQg6AAgkgigAgqg4QgTAKgLAWICRAAQgLgWgSgKQgTgLgZAAQgYAAgSALg");
	this.shape_129.setTransform(1103.6,438.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AhTCeQgSAAgHgHQgIgHAAgLQAAgLAIgHQAHgHASAAIA7AAIAAh4IgnAAQgSAAgIgHQgHgHAAgMQAAgLAHgGQAHgHATAAIBXAAIAACqIA8AAQASAAAIAHQAHAHAAALQAAALgHAHQgIAHgSAAgAgohoIAAg1IA6AAIAAA1g");
	this.shape_130.setTransform(1074.4,434.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AhTCeQgRAAgIgHQgIgHAAgLQAAgLAIgHQAIgHARAAIA7AAIAAjXIgnAAQgSAAgHgHQgJgHAAgLQAAgLAJgHQAHgHASAAIBYAAIAAEJIA7AAQASAAAIAHQAHAHAAALQAAALgHAHQgIAHgSAAg");
	this.shape_131.setTransform(1044.8,434.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AhTCeQgSAAgHgHQgIgHAAgLQAAgLAIgHQAHgHASAAIA8AAIAAjXIgpAAQgRAAgIgHQgHgHAAgLQAAgLAHgHQAIgHARAAIBZAAIAAEJIA7AAQASAAAIAHQAHAHAAALQAAALgHAHQgIAHgSAAg");
	this.shape_132.setTransform(1015.1,434.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AhpBhQgZgVAAgaQAAggAggaQAfgbA5AAQAUAAAeAFIAAgMQAAgLgJgHQgKgHgaAAQgVAAgkAJQgMADgIAAQgJAAgHgIQgIgHAAgLQABgGACgFQADgEADgDQAFgDAOgEQASgFATgDQATgDAPgBQAuAAAZAVQAaAUAAAjIAABmIAIAAQASAAAIAHQAHAHAAALQAAALgHAHQgIAHgSAAIg6AAIAAgMQgSAKgWAGQgWAEgTAAQgoAAgYgVgAhBAdQgOAKAAAKQAAAHAHAEQAMAJAUAAQATAAAVgIQAXgHARgMIAAgWQgdgFgZAAQgegBgVAPg");
	this.shape_133.setTransform(985.9,438.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AglBzQgSgEgPgIQgDAEgFABQgEACgEAAQgMAAgGgIQgIgHABgSIAAgRQgBgSAIgIQAGgIALAAQAJAAAGAFQAGAFADAMQAMAKAQAFQAQAFATAAQAjAAASgKQAJgGAAgGQAAgJgMgHQgNgGgngFQg8gGgUgRQgUgSAAgaQAAgbAWgSQAfgYAxAAQAQAAAQADQAQAEAOAGIAJgFIAHgBQALAAAGAHQAHAIAAASIAAAMQAAARgEAFQgIAMgNAAQgJAAgHgGQgGgGgDgJQgMgHgNgEQgNgEgOAAQgcAAgRAKQgIAEAAAFQABAFAJAGQAJADAaAEQAwAHAUAHQAZAJANARQAOARABAUQgBAbgXASQgiAag1AAQgVAAgSgDg");
	this.shape_134.setTransform(911.5,438.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AhTCeQgSAAgHgHQgIgHAAgLQAAgLAIgHQAHgHASAAIA7AAIAAh4IgnAAQgSAAgIgHQgHgHAAgMQAAgLAHgGQAHgHATAAIBXAAIAACqIA8AAQASAAAIAHQAHAHAAALQAAALgHAHQgIAHgSAAgAgohoIAAg1IA6AAIAAA1g");
	this.shape_135.setTransform(881.8,434.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AAzCeQgRAAgIgHQgHgHAAgLQAAgOAMgHQAFgEATAAIAAhaQAAgTgJgHQgLgLgWAAQgPAAgNAHQgNAGgVAUIAABeQASAAAGAEQAMAHAAAOQAAALgHAHQgIAHgSAAIg4AAQgSAAgIgHQgHgHAAgLQAAgOALgHQAGgEATAAIAAjXIgIAAQgSAAgIgHQgHgHAAgLQAAgLAHgHQAIgHASAAIA6AAIAABqQAPgJAQgEQAQgFAPAAQAZAAAVAJQATAJANATQANASABAcIAABeQASAAAHAEQALAHAAAOQAAALgIAHQgHAHgSAAg");
	this.shape_136.setTransform(852.1,434.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AglBzQgSgEgPgIQgDAEgFABQgEACgEAAQgMAAgGgIQgIgHAAgSIAAgRQAAgSAIgIQAGgIALAAQAJAAAGAFQAGAFAEAMQALAKAQAFQAQAFAUAAQAhAAAUgKQAIgGAAgGQAAgJgNgHQgNgGgngFQg7gGgUgRQgUgSAAgaQAAgbAXgSQAegYAxAAQAQAAAQADQAQAEAOAGIAJgFIAHgBQALAAAGAHQAHAIAAASIAAAMQAAARgEAFQgIAMgNAAQgJAAgHgGQgGgGgDgJQgLgHgNgEQgOgEgOAAQgcAAgRAKQgIAEABAFQAAAFAKAGQAHADAbAEQAxAHASAHQAaAJAOARQAOARgBAUQABAbgYASQgiAag1AAQgUAAgTgDg");
	this.shape_137.setTransform(778.2,438.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("Ag1CGQgXgUAAgdIAAhtIgSAAQgSAAgHgHQgIgHAAgMQAAgLAIgGQAHgHASAAIASAAIAAguQAAgSAHgHQAHgIALAAQALAAAGAIQAHAHAAASIAAAuIBbAAQARAAAIAHQAIAGAAAMQAAALgIAHQgIAHgRAAIhbAAIAABjQAAAQAHAFQAKAIAZAAQAmAAAggQQAMgGAHAAQAKAAAHAHQAHAHAAALQAAAJgIAIQgMALgiAKQgjAJgYAAQgtAAgXgUg");
	this.shape_138.setTransform(750,435.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AheByQgTAAgHgHQgIgHAAgLQAAgLAIgHQAHgHATAAIAdAAIAAh4IgSAAQgSAAgHgHQgIgHAAgMQAAgLAIgGQAHgHASAAIBEAAIAAAfQAegXASgHQARgIAQAAQAYAAAXASQAQAMAAANQAAALgIAHQgHAIgKAAQgKAAgKgKQgKgJgIAAQgLAAgUANQgVANgdAbIAABKIBFAAQASAAAHAHQAIAHAAALQAAALgIAHQgHAHgSAAg");
	this.shape_139.setTransform(719.5,438.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AhABnQgegQgQgbQgRgbAAgeQAAgdARgdQAQgdAfgQQAegRAhAAQAiAAAfARQAfARAQAdQAQAcAAAeQAAAcgPAbQgQAbgfAQQggAQgiAAQghAAgfgPgAg3gtQgWAVAAAcQgBAXAXAVQAXAUAgAAQAhAAAXgUQAXgVgBgXQAAgXgRgVQgXgbgmAAQghAAgWAWg");
	this.shape_140.setTransform(689.2,438.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AhuCnQgSAAgHgIQgIgGAAgMQAAgKAIgIQAIgGARgBIAJAAIAAjhIgJAAQgSAAgHgGQgIgIAAgLQAAgLAIgGQAHgIASABIA7AAIAAARQARgNASgFQASgHAUAAQAyAAAjAkQAkAiAAAtQAAAygqAfQgjAbgsAAQgTAAgSgGQgSgFgSgMIAABSIAdAAQASABAHAGQAHAIAAAKQAAAMgHAGQgHAIgSAAgAglhXQgOATAAASQgBAUAWATQAUASAfAAQAfAAAVgSQAVgTAAgUQAAgLgIgQQgJgRgRgKQgRgLgWAAQglAAgVAcg");
	this.shape_141.setTransform(658.7,443.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AhtCnQgTAAgHgIQgHgGAAgMQAAgKAHgIQAIgGASgBIAIAAIAAjhIgIAAQgTAAgHgGQgHgIAAgLQAAgLAHgGQAHgIATABIA5AAIAAARQARgNATgFQASgHATAAQAzAAAkAkQAkAiAAAtQAAAygrAfQgjAbgsAAQgTAAgSgGQgTgFgSgMIAABSIAeAAQASABAGAGQAIAIAAAKQAAAMgIAGQgGAIgSAAgAglhXQgPATAAASQABAUAUATQAWASAdAAQAgAAAVgSQAVgTAAgUQAAgLgJgQQgHgRgRgKQgSgLgXAAQgkAAgVAcg");
	this.shape_142.setTransform(629.1,443.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("Ag8BpQgSgLgLgSQgHgNAAgUIAAhrIgIAAQgSAAgHgHQgJgHABgLQgBgLAJgHQAHgHASAAIA6AAIAACUQgBAQAJAHQAHAIAPAAQAPAAARgGQARgGAagQIAAhlIgSAAQgTAAgHgHQgHgHAAgLQAAgLAHgHQAHgHATAAIBCAAIAACrQARAAAHAHQAIAHAAALQAAALgIAHQgIAHgRAAIgvAAIAAgMQgWAKgUAFQgRAFgSAAQgZAAgRgKg");
	this.shape_143.setTransform(600,439.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AglBzQgSgEgPgIQgDAEgFABQgEACgFAAQgLAAgHgIQgGgHAAgSIAAgRQAAgSAGgIQAHgIALAAQAJAAAGAFQAGAFADAMQAMAKAQAFQAQAFATAAQAjAAASgKQAJgGAAgGQAAgJgMgHQgNgGgngFQg8gGgUgRQgUgSAAgaQAAgbAWgSQAfgYAxAAQAQAAAQADQAQAEAOAGIAJgFIAHgBQALAAAGAHQAHAIAAASIAAAMQAAARgEAFQgIAMgNAAQgJAAgHgGQgHgGgBgJQgNgHgNgEQgNgEgOAAQgcAAgRAKQgIAEAAAFQABAFAJAGQAJADAaAEQAwAHAUAHQAZAJANARQAPARAAAUQgBAbgXASQgiAag1AAQgVAAgSgDg");
	this.shape_144.setTransform(570.8,438.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AhcBUQgjgiAAgxQAAg0AmghQAnghAyAAQAdAAAZALQAZAKANANQARASALAbQAIASAAAYIAAAVIjKAAQAIATAUAMQATAMAhAAQAbAAAugMQATgFAHAAQAKAAAGAHQAHAIAAAKQAAAKgHAHQgKAJglAIQglAIgjAAQg6AAgkgigAgqg4QgTAKgLAWICRAAQgLgWgSgKQgTgLgZAAQgYAAgSALg");
	this.shape_145.setTransform(496.2,438.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AAtCUQgSAAgHgHQgIgHAAgLQAAgLAIgHQAIgHARAAIAIAAIAAhIIhpAAIAABIIAIAAQASAAAHAHQAIAHAAALQAAALgIAHQgHAHgSAAIg8AAQgTAAgHgHQgHgHgBgLQAAgOAMgIQAGgEATABIAAjDQgNgBgHgHQgGgGgBgLQAAgLAIgHQAIgHASAAIAyAAQASAAAHAHQAIAHAAALQAAALgIAHQgHAHgSAAIgIAAIAABJIBpAAIAAhJIgIAAQgSAAgHgHQgIgHAAgLQAAgLAIgHQAHgHASAAIAyAAQASAAAIAHQAIAHAAALQgBALgGAGQgHAHgNABIAADDQAUAAAFADQAMAIAAAOQgBALgHAHQgHAHgTAAg");
	this.shape_146.setTransform(467.1,435.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgaAYQgKgKAAgOQAAgNAKgKQAKgJAQAAQARAAAKAJQAKAKAAANQAAAOgKAKQgKAJgRAAQgQAAgKgJg");
	this.shape_147.setTransform(392.9,447.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AhpCjQgSAAgHgHQgIgHAAgLQAAgLAIgHQAHgHASAAIAxAAIAdg4IhWipQgMgCgGgGQgGgIgBgJQAAgMAIgGQAHgHASAAIAtAAQASAAAIAHQAIAGAAAMQAAALgIAHQgHAHgRAAIA6ByIA5hyQgQAAgHgHQgIgHAAgMQAAgLAIgGQAHgHASAAIAuAAQASAAAIAHQAHAGAAAMQAAAKgGAHQgHAHgNABIhwDhQASAAAFADQAMAIAAAOQAAALgHAHQgIAHgSAAg");
	this.shape_148.setTransform(363.4,444.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("Ag1CGQgXgUAAgdIAAhtIgSAAQgSAAgHgHQgIgHAAgMQAAgLAIgGQAHgHASAAIASAAIAAguQAAgSAHgHQAHgIALAAQALAAAGAIQAHAHAAASIAAAuIBbAAQARAAAIAHQAIAGAAAMQAAALgIAHQgIAHgRAAIhbAAIAABjQAAAQAHAFQAKAIAZAAQAmAAAggQQAMgGAHAAQAKAAAHAHQAHAHAAALQAAAJgIAIQgMALgiAKQgjAJgYAAQgtAAgXgUg");
	this.shape_149.setTransform(335.2,435.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AhfByQgSAAgGgHQgIgHAAgLQAAgLAIgHQAGgHASAAIAeAAIAAh4IgSAAQgRAAgIgHQgIgHAAgMQAAgLAIgGQAIgHARAAIBDAAIAAAfQAegXATgHQASgIAPAAQAYAAAXASQAPAMAAANQAAALgHAHQgIAIgKAAQgJAAgKgKQgKgJgIAAQgKAAgVANQgVANgeAbIAABKIBGAAQASAAAIAHQAHAHAAALQAAALgHAHQgIAHgSAAg");
	this.shape_150.setTransform(304.6,438.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AhpBhQgZgVAAgaQAAggAggaQAfgbA5AAQAUAAAeAFIAAgMQAAgLgJgHQgKgHgaAAQgWAAgiAJQgNADgIAAQgKAAgGgIQgIgHAAgLQABgGACgFQADgEADgDQAFgDAOgEQASgFATgDQATgDAPgBQAtAAAbAVQAZAUAAAjIAABmIAIAAQASAAAIAHQAHAHAAALQAAALgHAHQgIAHgSAAIg6AAIAAgMQgTAKgVAGQgWAEgTAAQgoAAgYgVgAhCAdQgNAKAAAKQAAAHAHAEQAMAJAUAAQATAAAVgIQAWgHASgMIAAgWQgdgFgZAAQgdgBgXAPg");
	this.shape_151.setTransform(274.8,438.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AhtCnQgTAAgHgIQgHgGAAgMQAAgKAHgIQAIgGASgBIAIAAIAAjhIgIAAQgTAAgHgGQgHgIAAgLQAAgLAHgGQAHgIATABIA5AAIAAARQARgNATgFQASgHATAAQAzAAAkAkQAkAiAAAtQAAAygrAfQgjAbgsAAQgTAAgSgGQgTgFgSgMIAABSIAeAAQASABAGAGQAIAIAAAKQAAAMgIAGQgGAIgSAAgAglhXQgPATAAASQABAUAUATQAWASAdAAQAgAAAVgSQAVgTAAgUQAAgLgJgQQgHgRgRgKQgSgLgXAAQgkAAgVAcg");
	this.shape_152.setTransform(243.9,443.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AhTCeQgRAAgIgHQgIgHAAgLQAAgLAIgHQAIgHARAAIA7AAIAAjXIgnAAQgSAAgIgHQgIgHAAgLQAAgLAIgHQAIgHASAAIBYAAIAAEJIA7AAQASAAAIAHQAHAHAAALQAAALgHAHQgIAHgSAAg");
	this.shape_153.setTransform(1237.6,375.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AhTCeQgSAAgHgHQgIgHAAgLQAAgLAIgHQAHgHASAAIA8AAIAAjXIgpAAQgRAAgHgHQgJgHABgLQgBgLAJgHQAHgHARAAIBZAAIAAEJIA7AAQASAAAIAHQAHAHAAALQAAALgHAHQgIAHgSAAg");
	this.shape_154.setTransform(1207.9,375.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AhpBhQgZgWAAgaQAAgfAggZQAggcA4AAQAVAAAdAFIAAgMQAAgLgJgHQgKgHgZAAQgWAAgkAJQgNACgHAAQgJABgIgIQgGgGgBgMQAAgGADgFQACgFAEgCQAFgDAOgEQASgFATgDQATgEAPAAQAtABAaAUQAZAUAAAjIAABmIAJAAQASAAAIAHQAHAHAAALQAAALgHAHQgIAHgSAAIg6AAIAAgMQgSALgWAEQgWAFgSABQgogBgZgVgAhBAeQgOAJAAAKQAAAHAGAEQAMAIAWAAQARAAAWgHQAWgHASgMIAAgVQgegHgXAAQgfABgVAPg");
	this.shape_155.setTransform(1178.7,380.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AhfByQgRAAgIgHQgHgHAAgLQAAgLAHgHQAIgHARAAIAeAAIAAh4IgSAAQgRAAgIgHQgIgHAAgMQAAgLAIgGQAIgHARAAIBDAAIAAAfQAegXATgHQASgIAPAAQAYAAAXASQAPAMAAANQAAALgHAHQgIAIgKAAQgJAAgKgKQgKgJgIAAQgKAAgVANQgVANgeAbIAABKIBGAAQASAAAIAHQAHAHAAALQAAALgHAHQgIAHgSAAg");
	this.shape_156.setTransform(1086.3,379.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AhABnQgfgQgPgbQgRgbAAgeQAAgdARgdQAQgdAfgQQAegRAhAAQAiAAAfARQAfARAQAdQAQAcAAAeQAAAcgPAbQgQAbgfAQQggAQgiAAQghAAgfgPgAg3gtQgWAVAAAcQgBAXAXAVQAXAUAgAAQAhAAAXgUQAXgVgBgXQAAgXgRgVQgXgbgmAAQghAAgWAWg");
	this.shape_157.setTransform(1056.1,380.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AhZCeQgSAAgIgHQgHgHAAgLQAAgLAHgHQAIgHASAAIAdAAIAAh4IgYAAQgRAAgIgHQgIgHAAgMQAAgLAIgGQAIgHARAAIAYAAIAAgTQAAghAYgWQAZgVAtAAQAUAAAbAEQAbADAIAHQAHAHAAALQAAALgHAHQgGAHgKAAIgOgBQgfgGgXAAQgZAAgIAHQgJAIAAALIAAATIBLAAQASAAAHAHQAIAGAAAMQAAALgIAHQgHAHgSAAIhLAAIAAB4IBFAAQASAAAIAHQAHAHAAALQAAALgHAHQgIAHgSAAg");
	this.shape_158.setTransform(1027.5,375.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AA6ByQgSAAgHgHQgIgHAAgLQAAgLAIgHQAHgHAPAAIAAhdQAAgRgIgHQgLgKgXAAQgRAAgMAHQgNAGgUAWIAABcQATAAAFAEQAMAHAAAOQABALgIAHQgHAHgSAAIg4AAQgTAAgHgHQgHgHAAgLQAAgOALgHQAFgEAUAAIAAh4QgQAAgIgHQgHgIAAgLQAAgLAIgGQAHgHASAAIAvAAIAAAQQAOgLAQgGQAQgGASAAQAsAAAZAcQAVAWAAAjIAABcQAPAAAIAHQAHAHAAALQAAALgHAHQgHAHgTAAg");
	this.shape_159.setTransform(933.7,379.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AhABnQgfgQgQgbQgQgbAAgeQAAgdAQgdQARgdAfgQQAfgRAgAAQAiAAAfARQAfARAQAdQAQAcAAAeQAAAcgQAbQgQAbgeAQQggAQgiAAQggAAgggPgAg3gtQgXAVABAcQAAAXAWAVQAXAUAgAAQAiAAAWgUQAWgVAAgXQABgXgSgVQgXgbgmAAQggAAgXAWg");
	this.shape_160.setTransform(904.2,380.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AhTCeQgSAAgIgHQgHgHAAgLQAAgLAHgHQAIgHASAAIA7AAIAAh4IgoAAQgRAAgIgHQgHgHAAgMQAAgLAHgGQAIgHARAAIBYAAIAACqIA8AAQASAAAIAHQAHAHAAALQAAALgHAHQgIAHgSAAgAgohoIAAg1IA6AAIAAA1g");
	this.shape_161.setTransform(874.5,375.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AA6ByQgSAAgIgHQgHgHAAgLQAAgLAHgHQAIgHAQAAIAAhdQAAgRgJgHQgLgKgXAAQgRAAgMAHQgNAGgUAWIAABcQATAAAGAEQAMAHgBAOQAAALgHAHQgIAHgRAAIg5AAQgRAAgIgHQgIgHABgLQAAgOALgHQAFgEAUAAIAAh4QgQAAgIgHQgHgIAAgLQAAgLAIgGQAHgHASAAIAvAAIAAAQQAOgLAQgGQAQgGASAAQAsAAAZAcQAVAWAAAjIAABcQAQAAAHAHQAIAHAAALQAAALgIAHQgIAHgSAAg");
	this.shape_162.setTransform(844.9,379.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AhpBhQgZgWAAgaQAAgfAggZQAfgcA5AAQAVAAAdAFIAAgMQAAgLgJgHQgKgHgZAAQgWAAgkAJQgNACgHAAQgJABgIgIQgGgGgBgMQAAgGADgFQACgFAEgCQAFgDAOgEQASgFATgDQATgEAPAAQAtABAaAUQAZAUAAAjIAABmIAJAAQASAAAIAHQAHAHAAALQAAALgHAHQgIAHgSAAIg6AAIAAgMQgTALgVAEQgXAFgRABQgogBgZgVgAhBAeQgOAJAAAKQAAAHAGAEQAMAIAWAAQARAAAWgHQAWgHASgMIAAgVQgegHgXAAQgfABgVAPg");
	this.shape_163.setTransform(815.7,380.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AhuCmQgSAAgHgGQgIgIAAgKQAAgMAIgGQAIgIARABIAJAAIAAjhIgJAAQgSgBgHgGQgIgIAAgLQAAgLAIgGQAHgIASAAIA7AAIAAARQARgMASgFQASgGAUgBQAyABAjAiQAkAjAAAtQAAAygqAfQgjAbgsAAQgTAAgSgFQgSgHgSgKIAABSIAdAAQASgBAHAIQAHAGAAAMQAAAKgHAIQgHAGgSAAgAglhXQgOATAAASQgBAUAWATQAUASAfAAQAfAAAVgSQAVgTAAgVQAAgKgIgQQgJgRgRgKQgRgLgWAAQglAAgVAcg");
	this.shape_164.setTransform(784.7,385.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("ABOByIAAidQAAgLgEgFQgDgEgJAAQgJAAgGAEQgJAHgNAQIAABkQAPAAAIAHQAHAHABALQgBALgHAHQgHAHgTAAIguAAIAAidQAAgLgDgEQgFgFgJAAQgIAAgJAGQgIAFgMAQIAABkQAQAAAIAHQAHAHAAALQAAALgHAHQgIAHgSAAIgsAAQgTAAgHgHQgHgHgBgLQABgLAHgHQAIgHAPAAIAAh4QgPAAgIgHQgHgIgBgLQABgLAHgGQAHgHATAAIAuAAIAAAOQANgMAJgFQAKgEANAAQALAAAKAFQALAFAJALQANgLANgFQANgFANAAQAcAAARAPQAXATAAAgIAABvQAQAAAHAHQAIAHgBALQABALgIAHQgIAHgRAAg");
	this.shape_165.setTransform(756.2,379.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("Ag/BnQgfgQgQgbQgRgbAAgeQAAgdARgdQAQgdAfgQQAfgRAgAAQAiAAAfARQAfARAQAdQAQAcAAAeQAAAcgPAbQgRAbgfAQQgfAQgiAAQghAAgegPgAg3gtQgWAVgBAcQAAAXAYAVQAWAUAgAAQAhAAAXgUQAWgVABgXQgBgXgQgVQgYgbgmAAQghAAgWAWg");
	this.shape_166.setTransform(726.4,380.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AhSBeQgrghAAg4QAAg0AjgjQAjgkA4AAQAUAAARAFQASAEAPAHQAJgIAKAAQAKAAAHAHQAHAIAAASIAAAgQAAASgHAIQgHAHgLAAQgKABgHgHQgFgEgDgNQgDgOgLgHQgUgLgeAAQgiAAgVAUQgVAVAAAfQAAAeAUAQQAUARAvAAQAfAAATgGQAMgEAKgJQAKgKAIAAQALAAAHAIQAIAIAAAKQgBAQgWAPQgiAWhAABQg4AAgggZg");
	this.shape_167.setTransform(697.3,380.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AhTCeQgSAAgHgHQgIgHAAgLQAAgLAIgHQAHgHASAAIA7AAIAAjXIgoAAQgRAAgIgHQgHgHgBgLQABgLAHgHQAIgHARAAIBZAAIAAEJIA7AAQASAAAIAHQAHAHAAALQAAALgHAHQgIAHgSAAg");
	this.shape_168.setTransform(604.1,375.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("Ag8BpQgSgLgKgSQgIgNAAgUIAAhrIgIAAQgSAAgIgHQgHgHAAgLQAAgLAHgHQAIgHASAAIA6AAIAACUQAAAQAIAHQAHAIAPAAQAPAAARgGQARgGAZgQIAAhlIgSAAQgRAAgIgHQgHgHAAgLQAAgLAHgHQAIgHARAAIBEAAIAACrQAPAAAIAHQAIAHgBALQABALgIAHQgIAHgRAAIgwAAIAAgMQgVAKgTAFQgTAFgRAAQgZAAgRgKg");
	this.shape_169.setTransform(574.2,380.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AhZCeQgSAAgIgHQgHgHAAgLQAAgLAHgHQAIgHASAAIAdAAIAAh4IgYAAQgRAAgIgHQgIgHAAgMQAAgLAIgGQAIgHARAAIAYAAIAAgTQAAghAYgWQAZgVAtAAQAUAAAbAEQAbADAIAHQAHAHAAALQAAALgHAHQgGAHgKAAIgOgBQgfgGgXAAQgZAAgIAHQgJAIAAALIAAATIBLAAQASAAAHAHQAIAGAAAMQAAALgIAHQgHAHgSAAIhLAAIAAB4IBFAAQASAAAIAHQAHAHAAALQAAALgHAHQgIAHgSAAg");
	this.shape_170.setTransform(545.9,375.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("Ag1CGQgXgUAAgdIAAhtIgSAAQgSAAgHgHQgIgHAAgMQAAgLAIgGQAHgHASAAIASAAIAAguQAAgSAHgHQAHgIALAAQALAAAGAIQAHAHAAASIAAAuIBbAAQARAAAIAHQAIAGAAAMQAAALgIAHQgIAHgRAAIhbAAIAABjQAAAQAHAFQAKAIAZAAQAmAAAggQQAMgGAHAAQAKAAAHAHQAHAHAAALQAAAJgIAIQgMALgiAKQgjAJgYAAQgtAAgXgUg");
	this.shape_171.setTransform(516.7,376.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AAzCeQgRAAgIgHQgHgHAAgLQAAgOAMgHQAGgEASAAIAAhaQAAgTgIgHQgMgLgWAAQgQAAgMAHQgNAGgVAUIAABeQASAAAHAEQALAHAAAOQAAALgIAHQgHAHgSAAIg4AAQgSAAgIgHQgHgHAAgLQAAgOAMgHQAFgEATAAIAAjXIgIAAQgSAAgHgHQgIgHAAgLQAAgLAIgHQAHgHASAAIA6AAIAABqQAPgJAQgEQAQgFAPAAQAZAAAVAJQATAJAOATQANASgBAcIAABeQATAAAHAEQALAHAAAOQAAALgIAHQgHAHgSAAg");
	this.shape_172.setTransform(485.5,375.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("Ag1CnQgSAAgIgHQgHgHAAgLQAAgLAHgHQAIgHASAAIA1AAQAXAAAMgNQANgMAAgTIAAgZQgRALgQAFQgRAGgRAAQgzAAgigiQgigiAAgxQAAgzAigiQAigiAzAAQASAAAQAGQARAFAQALIAAgOIA6AAQASAAAHAHQAIAGAAAMQAAALgIAHQgHAHgSAAIgJAAIAAC1QAAAagLAUQgLATgWAPQgXAOgcAAgAhEhfQgUAUAAAbQAAAcAUAUQAUAUAcAAQAbAAAVgUQAUgUAAgcQAAgbgUgUQgVgVgbAAQgcAAgUAVg");
	this.shape_173.setTransform(456.5,385);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AhTCeQgSAAgIgHQgHgHAAgLQAAgLAHgHQAIgHASAAIA7AAIAAh4IgoAAQgRAAgIgHQgHgHAAgMQAAgLAHgGQAIgHARAAIBYAAIAACqIA8AAQASAAAIAHQAHAHAAALQAAALgHAHQgIAHgSAAgAgohoIAAg1IA6AAIAAA1g");
	this.shape_174.setTransform(426.3,375.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AhTCeQgSAAgHgHQgIgHAAgLQAAgLAIgHQAHgHASAAIA7AAIAAjXIgoAAQgRAAgIgHQgHgHgBgLQABgLAHgHQAIgHARAAIBZAAIAAEJIA7AAQASAAAIAHQAHAHAAALQAAALgHAHQgIAHgSAAg");
	this.shape_175.setTransform(396.6,375.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AhcBUQgjgiAAgxQAAg0AmghQAnghAyAAQAdAAAZALQAZAKANANQARASALAbQAIASAAAYIAAAVIjKAAQAIATAUAMQATAMAhAAQAbAAAugMQATgFAHAAQAKAAAGAHQAHAIAAAKQAAAKgHAHQgKAJglAIQglAIgjAAQg6AAgkgigAgqg4QgTAKgLAWICRAAQgLgWgSgKQgTgLgZAAQgYAAgSALg");
	this.shape_176.setTransform(366.6,380.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AhtCCQgighAAgwQAAgyAkgkQAkgkAzAAQATAAASAGQASAGASAMIAAg+IgIAAQgSAAgIgHQgHgHgBgLQABgLAHgHQAIgHASAAIA5AAIAAEJIAJAAQASAAAHAHQAIAHAAALQAAALgIAHQgHAHgSAAIg6AAIAAgMQgRAKgSAFQgSAFgTAAQg4AAgigggAhIgBQgVAUAAAeQgBAcAUASQATARAjAAQAiAAAUgRQATgSAAgbQAAgfgVgUQgVgWgfAAQgeAAgWAWg");
	this.shape_177.setTransform(338.5,375.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AA8CUQgSAAgHgHQgIgHAAgLQAAgLAIgHQAHgHASAAIAMAAIgMgeIh3AAIgMAeIAMAAQASAAAIAHQAHAHAAALQAAALgHAHQgIAHgSAAIhCAAQgSAAgIgHQgHgHAAgLQAAgLAIgHQAIgIASABIBOjDIghAAQgSAAgHgGQgIgIAAgLQAAgLAIgHQAHgHASAAIBqAAIBiD1QASAAAFAEQALAIAAANQAAALgHAHQgIAHgRAAgAgnARIBPAAIgohig");
	this.shape_178.setTransform(244.7,376.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFEE00").s().p("Ai2HqQhTgzgthaQguhcAAh2QAAh0AqhcQAphfBSgyQBSgyBlAAQBKAAA6AeQA6AdAkAvIAAl+ICLAAIAAQoIiCAAIAAhiQhOBziXAAQhiAAhSgzgAiWhVQg+BHAACZQAACUBCBJQBDBKBaAAQBbAABAhGQBAhHAAiPQAAiehBhKQhBhKhgAAQhcAAg+BHg");
	this.shape_179.setTransform(1595.9,281.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFEE00").s().p("AjfGLIAAsDIB+AAIAAB1QAwhSApgaQAogbAwABQBHgBBIArIgvB5Qg0gdgzABQgugBgjAbQglAagPAtQgXBGAABTIAAGTg");
	this.shape_180.setTransform(1534.7,294.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFEE00").s().p("AkxFVQhIg+AAhhQgBg4AcgvQAbgvAtgcQAtgcA3gOQApgKBTgKQCogTBPgaIABgiQAAhQgnghQg1gshpAAQhiAAgvAhQgvAggWBSIiJgSQAThSAqgyQArgzBRgbQBQgbBpAAQBqAABCAXQBBAXAfAkQAfAjAMA2QAIAhgBBXIAACtQAAC3AKAwQAIAwAbAtIiSAAQgVgpgHg2QhNA9hIAaQhGAZhSAAQiIAAhJg+gAghAwQhWAMgkAOQgjAPgUAcQgTAcAAAiQAAA0ArAjQAqAjBRAAQBPAAA/ghQA/ghAdg6QAWgsAAhWIAAgvQhLAciXAUg");
	this.shape_181.setTransform(1457.4,295.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFEE00").s().p("AmsIVIAAwpIGqAAQCBABBPAgQBPAgAtBEQAsBDAABJQAABEgoA9QgnA8hQAlQBnAcA4BDQA3BFAABdQAABKgiBBQgiBAgxAjQgyAjhKASQhLARhtABgAkVGXIEZAAQBJAAAegFQAzgJAjgUQAjgVAXgmQAWgnAAgzQAAg8ghgrQgggsg5gSQg6gShsAAIkGAAgAkVhUID1AAQBjAAArgMQA6gRAdgkQAdgmAAg4QAAg1gbgnQgbgpgzgOQgygQh5AAIjjAAg");
	this.shape_182.setTransform(1362.5,280.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(1,1,1).p("ECAAgHUIAAOpEh//AHVIAAtJ");
	this.shape_183.setTransform(979.1,1029.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#33CCFF").s().p("Eh7RBF7QAAjPiziSIgagVQirh+jqAAMAAAh8NQD9AACyiSQCziTAAjPMD2jAAAQAADPCzCTQA5AuBBAgQAmATAqAOIASAGIAYAHQBXAWBkAAMAAAB8NQhxAAhiAeQh5AjhjBSQizCSAADPg");
	this.shape_184.setTransform(964.6,567.3);

	this.hunterJob = new lib.HunterChar();
	this.hunterJob.name = "hunterJob";
	this.hunterJob.parent = this;
	this.hunterJob.setTransform(378,583,1,1,0,0,0,210,205);

	this.instance_1 = new lib.an_Video({'id': 'instance_1', 'src':'videos/Hunter%20demo.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':true, 'poster':'images/', 'preload':true, 'class':'video'});

	this.instance_1.setTransform(923.6,571.8,1.734,1.587,0,0,0,200.1,150.2);

	this.SelectJob = new lib.selectbutton();
	this.SelectJob.name = "SelectJob";
	this.SelectJob.parent = this;
	this.SelectJob.setTransform(368,885.5,1,1.207);
	new cjs.ButtonHelper(this.SelectJob, 0, 1, 2, false, new lib.selectbutton(), 3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgeBAIAAhhIAAgOIABgOQAAgOAHAAQAHAAAAAXQAPgZASAAQAGgBADAJQAEAJAAAQIgBALQAAARgHAAQgHAAAAgOIAAgJIgBgMQgMACgHAKQgHAJgEASIAABMQAAAOgIAAQgHAAAAgOg");
	this.shape_185.setTransform(1540.1,754.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgaA8QgMgRAAgfQAAgkAKgYQAKgbASAAQAMgBAJAJQAKAJAAAUQAAAOgJAMQgEAEgNALIgdAYQAFAMAGAGQAHAGAHAAQAGAAAHgDQAKgFACgIQADgHADAAQADAAACAEQACADAAAFQAAAPgOAMQgMAKgMAAQgQgBgLgQgAgQglQgGAOgDAZIAYgUQANgMAGgJQgGgLgMAAQgJAAgHANg");
	this.shape_186.setTransform(1531.8,754.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AAFApIgEghIgBgeIgHAZIgMA6QgBAGgBACQgCAIgGABQgGAAgFgqQgEgWgCgkIgCgVIgBgVQAAgGACgEQACgEAEAAQAGAAABAMIACAUIABAVIAFA+IAShjQACgPAGAAQAGAAACARIAGAzIAFA2IAGgmIAKhMQABgIAGAAQADAAACAEQADAEAAAFIgBAHQgGAugKA4QgCANgFANQgDAIgFAAQgIgBgFglg");
	this.shape_187.setTransform(1521.7,754.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgXA8QgKgUgBggQAAggAJgXQALgdATAAQAQAAAIAaQAGAUAAAeQAAAegJAWQgKAZgQAAQgNAAgKgRgAgNgbQgFAPAAAUQAAATAGAMQAFAJAHAAQAHAAAGgKQAHgMAAgUQACg1gSAAQgLgBgGAVg");
	this.shape_188.setTransform(1511.7,754.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AAVBqQgCgMgBgVIgBghIAAgLIAAgLQAAgZgHgBQgKABgHAPQgEAIgHAXQAAA2gDAJQgCAJgFAAQgDAAgCgEQgDgEAAgFIABgHQABgDAAgRIAAgUIAAhnIABgXIgBgOIgBgNQAAgGADgDQACgFADAAQAHAAABANIABAYIgBAfIAAAfIAAAMQAHgPAHgIQAGgHAJAAQANAAAFAPQADAKAAAZIABAaIACAeIACAcIABAEQAAAGgDAEQgCADgDAAQgGAAgCgKg");
	this.shape_189.setTransform(1503.1,750.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgfBhQgOgMgBgVQAAgGADgEQACgDADAAQAEAAADAHQAEALADAEQAHAIANAAQALAAAKgKQAOgMAAgVQAAgSgMgKQgJgJgNgBQgNAAgIgIQgLgMAAgVQAAgZAPgUQAQgUAPAAQAIAAAJAFQANAGAAAJQAAANgHAAQgDAAgIgDQgIgDgEAAQgMAAgIAKQgJALAAAQQAAALAMAFQAEACALABQASADAKASQAKAPAAAXQAAAigSAUQgPARgSAAQgPAAgMgKg");
	this.shape_190.setTransform(1492.8,751.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AAFApIgEghIgBgeIgHAZIgLA6QgCAGgCACQgCAIgFABQgGAAgGgqQgDgWgCgkIgCgVIgBgVQAAgGADgEQABgEAEAAQAGAAABAMIACAUIABAVIAFA+IAShjQADgPAFAAQAGAAADARIAEAzIAGA2IAGgmIAKhMQABgIAGAAQADAAACAEQADAEAAAFIgBAHQgGAugKA4QgCANgFANQgDAIgFAAQgIgBgFglg");
	this.shape_191.setTransform(1476.9,754.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgXA8QgKgUgBggQAAggAJgXQALgdATAAQAQAAAIAaQAGAUAAAeQAAAegJAWQgKAZgQAAQgNAAgKgRgAgNgbQgFAPAAAUQAAATAGAMQAFAJAHAAQAHAAAGgKQAHgMAAgUQACg1gSAAQgLgBgGAVg");
	this.shape_192.setTransform(1466.9,754.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgeBAIAAhhIAAgOIABgOQAAgOAHAAQAHAAAAAXQAPgZASAAQAGgBADAJQAEAJAAAQIgBALQAAARgHAAQgHAAAAgOIAAgJIgBgMQgMACgHAKQgHAJgEASIAABMQAAAOgIAAQgHAAAAgOg");
	this.shape_193.setTransform(1459.2,754.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgeBAIAAhhIAAgOIABgOQAAgOAHAAQAHAAAAAXQAPgZASAAQAGgBADAJQAEAJAAAQIgBALQAAARgHAAQgHAAAAgOIAAgJIgBgMQgMACgHAKQgHAJgEASIAABMQAAAOgIAAQgHAAAAgOg");
	this.shape_194.setTransform(1451.5,754.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AAbBIIgFgsIgVAHIgUAIQgDASgKAkQgCAHgFABQgDAAgDgFQgCgDAAgHQAAgGALgsIgBgJQAAgMAIgDQAJgdAOgnQARg1AFABQAGAAACAPIAGAvIALBgIAFAXIACAOQAAAGgCAFQgDADgDAAQgHABgGgigAgKAKIAcgKIgGg2g");
	this.shape_195.setTransform(1441.4,751.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgUAmQgJgLAAgUQAAgWAHgPQAJgRANAAQAKAAAGAFQAIAGAAANQAAAIgHAIIgNAIIgWAQQADAIAFADQAFAEAGAAQAEAAAGgCQAHgDACgFQACgFADAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQACACAAADQAAAKgLAHQgJAGgJAAQgNAAgIgKgAgMgXQgFAIgCAQIASgMQAKgHAFgGQgFgHgJAAQgHAAgFAIg");
	this.shape_196.setTransform(1655.3,744.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgJBLQgCgCAAgEIAAgCQACgLAAgNIAAgYIAAgZIgKABQgGAAAAgJQAAgIAKgBIAGAAIABgNQACgUAFgJQAFgLAOAAQAIAAAAAIQAAAJgHAAQgPAAgCAdIAAAGIANgBQAKAAAAAIQAAAHgFABIgFABIgOABIAAATIAAAQIAAAQQAAARgBAJQAAAHgFAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_197.setTransform(1648.4,742.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AATAtIgEgHIgKAHQgEACgCAAQgPAAgGgLQgGgLAAgWQAAgVAKgPQAKgPANAAQAFAAAHAEQAIAFAAAHIgBAEIgBALIAAATIABARIAEAPIABAFIAAABQAAAEgBACQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgCAAgDgEgAgJgVQgHALAAANQAAAPADAHQAEAHAHAAQAFAAAEgDIAGgHIgCghIAAgJIABgJIgDgDIgDAAQgJAAgGALg");
	this.shape_198.setTransform(1642.2,744.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgXAoIAAg8IAAgJIAAgJQAAgJAGAAQAGAAAAAPQALgQAOAAQAFAAACAFQADAFAAALIgBAGQAAALgGAAQgFAAAAgIIAAgGIAAgIQgKACgFAGQgFAGgEALIABAvQAAAJgGAAQgGAAAAgJg");
	this.shape_199.setTransform(1636.2,744.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgDA+QgCgDAAgDIAAgKIAAgKIgBgyIgNgCQgGAAABgJQgBgDACgDQACgDADAAIAMACIAAgMIAAgKQAAgFABgCQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAFAAABANIAAAHIAAAGIAAAFIAIgCQAHAAACABQAEACAAAHQAAAEgCADQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgDAAIgEAAIgIABIABAzIAAAEIAAAFQABATgHAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBgBAAg");
	this.shape_200.setTransform(1630.1,743.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgYA9QgLgHAAgOQAAgEACgCQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAQADAAACAEQADAHADADQAFAFAKAAQAIAAAIgGQALgIAAgNQAAgLgJgGQgHgGgKgBQgKAAgHgFQgIgHAAgNQAAgPAMgOQAMgMALAAQAGAAAIADQAJAEAAAGQAAAHgFABIgJgCQgGgDgDABQgIAAgHAGQgHAIAAAJQAAAHAJADIAMACQAOACAIALQAHAJAAAPQAAAVgNAMQgMALgOAAQgLAAgKgGg");
	this.shape_201.setTransform(1623,743);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgUAmQgJgLAAgUQAAgWAHgPQAJgRANAAQAKAAAGAFQAIAGAAANQAAAIgHAIIgNAIIgWAQQADAIAFADQAFAEAGAAQAEAAAGgCQAHgDACgFQACgFADAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQACACAAADQAAAKgLAHQgJAGgJAAQgNAAgIgKgAgMgXQgFAIgCAQIASgMQAKgHAFgGQgFgHgJAAQgHAAgFAIg");
	this.shape_202.setTransform(1611.6,744.8);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgGBAIAAghIABgfIAAgfIABggQAAgIAFAAQAGAAAAAIIAAAgIAAAfIgCArIAAAVQAAAJgFAAQgGAAAAgJg");
	this.shape_203.setTransform(1606.4,742.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgSBCQgCAEgDAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQgCgCAAgEIAAgHIAAgHIAAgcIAAgbIAAgYIAAgYQAAgFABgEQACgGAEAAQAEAAAAAIIAAADIAAAEIgBAUIAAAVIAKgHQAFgCADgBQANAAAJAPQAHAMAAAVQAAATgJAOQgJAOgMAAQgJAAgIgFgAgJgDIgJAHIAAAQIAAAOIAAAOIAJAFQADABAFAAQAIABAGgKQAFgJAAgMQAAgOgEgJQgFgIgJAAQgEAAgFAEg");
	this.shape_204.setTransform(1601.1,742.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AAOAqQgIAGgJAAQgIAAgFgFQgGgGgBgLQgCgXAAgRQAAgMACgQQABgHAEAAQADAAACACQACADAAADIgBANIgBAOIABAYIACARIADACIAEABQAHAAAJgEIAAgSIAAgQIABghQABgIAFAAQADAAACADQABACAAAEIgBAhIAAASIAAATIABAGIAAAGQAAADgCADQgCACgCAAQgFAAgBgIg");
	this.shape_205.setTransform(1594,744.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgRAlQgIgMgBgUQAAgTAHgPQAJgSAOAAQAMAAAGAQQAFANAAASQAAATgHAOQgIAPgMAAQgKAAgHgLgAgKgRQgEAKAAAMQAAAMAFAIQAEAFAFABQAGAAAEgHQAGgHAAgNQABghgOAAIgBAAQgHAAgFAMg");
	this.shape_206.setTransform(1587.4,744.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgSBHQgHgCgDgEIgBAAQgDgBgBgCQgCgDAAgEIAAgbIABgbIAAgfIgBgeQAAgDADgFQADgDACAAQACAAAIAFIALAHQAQAJAMARQAOAWAAAXQAAAPgFAOQgEAOgJAJQgJAJgRAAQgEAAgGgCgAgWgYIAAAZIgBAvIACACQAFAFAIAAQANAAAGgGQAGgGAEgJQADgKAAgLQAAgYgTgRQgFgHgWgOg");
	this.shape_207.setTransform(1579.9,742.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgbAoQgLgLgBgWQABgWAJgRQALgSASAAQANAAAIAFQAKAGAAAOQAAAJgJAIQgEADgNAHIgdARQAFAHAGAEQAGAEAJAAQAFAAAHgDQAKgDACgFQADgEADAAQADAAACACQACADABACQgBALgOAHQgMAHgLAAQgSAAgLgLgAgPgYQgHAIgDARIAYgNQANgIAHgGQgIgIgLABQgKAAgFAJg");
	this.shape_208.setTransform(1675.5,709.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgUBJQgDgCAAgEQAAgKASgsIgdhAIgDgGQgDgFAAgDQAAgEADgDQACgCAEAAQADgBACAEQAOAWAOAoIAMgfQAGgSAGgMQADgEAEAAQADgBACADQADADAAAEIgBAEIgcBFIgOArIgFASQgCAHgFAAQgEAAgCgDg");
	this.shape_209.setTransform(1666.4,711.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgiBIQgHgIgBgeIABgOIAAgPIgBgEQAAgDACgCIABgoIAAgKIgBgKQAAgLAIAAQADAAADADIASgFIAOgCQAUABAMAFQAEADAAAGQAAADgCADQgCAEgDAAIgDAAQgNgFgNAAIgMABIgRAFIAAAJIgBAkIAigEIATgCQADAAADACQACAEAAADQAAAIgHABIgTACIgkAEIAAANIAAALQgBAUADAEQACADAKAAIAOAAIAPgBIAFgBIAFAAQAIAAAAAJQAAAJgHABQgHACgYAAQgZAAgHgIg");
	this.shape_210.setTransform(1657.6,706.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgWA0QgMgFAAgKQABgEACgCQACgDAEAAQACAAAEAFQABABAHACIAKABQAFAAAFgCQAIgCAAgGQAAgNgPgFIgIgBQgLgDgEgEQgHgEABgLQAAgTAPgJIAOgFIAQgHIAGgBQAEAAACACQACADAAAFIABAHIACAIQAAAEgDADQgCADgDAAQgFAAgCgEQgBgDAAgHIgTAHQgMAFAAAKIAFABQARADAJAIQANAIAAATQAAAPgLAIQgJAGgNAAQgLAAgKgEg");
	this.shape_211.setTransform(1643.3,708.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgFAUIgBgJIAAgHIgBgHIABgNQACgHAEAAQADAAACACQACACABAEIgBAGIAAAGIAAAHIABAIQgBAMgHAAQgDAAgCgEg");
	this.shape_212.setTransform(1636.2,700.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgbAoQgMgLAAgWQAAgWAKgRQAMgSARAAQANAAAIAFQAKAGAAAOQAAAJgJAIQgEADgNAHIgdARQAEAHAHAEQAHAEAIAAQAFAAAHgDQAKgDACgFQADgEADAAQADAAACACQACADABACQAAALgPAHQgMAHgLAAQgSAAgLgLgAgPgYQgHAIgEARIAZgNQAOgIAFgGQgHgIgLABQgJAAgGAJg");
	this.shape_213.setTransform(1628.9,709.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgeArIAAhBIAAgJIAAgJQABgKAGAAQAIABAAAPQAPgSASAAQAGABAEAFQADAGAAAMIgBAGQAAAMgHAAQgHgBAAgIIgBgHIAAgIQgMACgHAGQgHAHgEALIAAAzQAAAKgIAAQgHAAAAgKg");
	this.shape_214.setTransform(1620.7,709.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AASAtQgKAFgMABQgKgBgHgFQgIgGgBgLQgDgZAAgTQAAgMACgQQABgJAHAAQADABADACQACADAAADIgBAPIgBANIAAAaQABAMACAGIAFADIAFABQAKgBAMgEIAAgTIgBgRQAAgTACgQQABgIAHAAQADAAACACQADADgBAEIgBAjIAAATIAAAVIAAAGIABAHQAAADgDADQgCACgDAAQgGABgCgJg");
	this.shape_215.setTransform(1612.3,709.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgEBCQgCgDgBgDIAAgLIABgLIgCg1IgSgCQgHgBAAgIQAAgEADgDQACgCADAAIARABIAAgNIgBgLQAAgEACgDQADgCADAAQAHAAABANIAAAJIAAAFIAAAGIALgBIAKAAQAFACABAHQAAAEgDADQgCADgDAAIgFgBIgDAAIgLACIACA2IAAAEIAAAFQAAAUgIAAQgDAAgCgCg");
	this.shape_216.setTransform(1604.2,707.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgIBEIAAgiIABgiIABghIABgiQgBgJAHAAQAIAAAAAJIgBAiIAAAhIgBAuIgBAWQAAAJgHAAQgHAAAAgJg");
	this.shape_217.setTransform(1598.2,706.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AASAtQgKAFgMABQgKgBgHgFQgIgGgBgLQgDgZAAgTQAAgMACgQQABgJAHAAQADABADACQACADAAADIgBAPIgBANIAAAaQABAMACAGIAFADIAFABQAKgBAMgEIAAgTIgBgRQAAgTACgQQABgIAHAAQADAAACACQADADgBAEIgBAjIAAATIAAAVIAAAGIABAHQAAADgDADQgCACgDAAQgGABgCgJg");
	this.shape_218.setTransform(1591.7,709.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgNBEQgKgcgMg1IgGgZQgFgUAAgGQAAgEADgCQACgDADAAQAGAAACAHIADARIAIAgQAHAhAHAZIABgBIAUhDIAHgWQAEgPAGgGQACgFAEAAQADAAACAEQADADAAADIgCAGQgFAJgDAJIgGAUIgVBEQgEAMgFALQgBAFgFAAQgGAAgCgHg");
	this.shape_219.setTransform(1582.7,707.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgtAoQgTgLgBgWQAAgWARgRQASgSAeAAQAVAAAOAFQARAGAAAOQAAAJgPAIQgHADgVAHIgxARQAHAHAMAEQAKAEAOAAQAJAAAMgDQAQgDAEgFQAEgEAGAAQAEAAAEACQAEADAAACQAAALgYAHQgUAHgTAAQgdAAgTgLgAgbgYQgKAIgGARIApgNQAXgIAKgGQgLgIgUABQgQAAgLAJg");
	this.shape_220.setTransform(1534.8,709.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgiBJQgFgCAAgEQAAgKAdgsIgvhAIgGgGQgEgFAAgDQAAgEAEgDQAFgCAFAAQAGgBADAEQAWAWAZAoIAUgfQAKgSAKgMQAEgEAHAAQAFgBAFADQAEADAAAEIgCAEIguBFQgQAagIARIgJASQgEAHgIAAQgGAAgDgDg");
	this.shape_221.setTransform(1519.7,711.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("Ag5BIQgNgIAAgeIABgOIABgPIgCgEQAAgDADgCQACgbAAgNIgBgKIgBgKQAAgLANAAQAFAAAEADIAegFIAagCQAgABATAFQAJADAAAGQAAADgEADQgEAEgFAAIgEAAQgXgFgUAAIgXABIgbAFIABAJQAAANgDAXIA5gEIAfgCQAGAAAEACQAEAEAAADQAAAIgMABIgfACIg8AEIgBANIAAALQAAAUAEAEQADADARAAIAYAAIAZgBIAIgBIAHAAQAOAAAAAJQAAAJgLABQgMACgpAAQgpAAgLgIg");
	this.shape_222.setTransform(1505.1,706.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgkA0QgUgFAAgKQAAgEAEgCQAEgDAFAAQAEAAAHAFQADABALACIAPABQAKAAAIgCQANgCAAgGQAAgNgZgFIgNgBQgSgDgHgEQgLgEAAgLQAAgTAagJIAZgFIAZgHQAFgBAGAAQAGAAAEACQADADAAAFIACAHIABAIQAAAEgDADQgEADgFAAQgIAAgDgEQgCgDgBgHIgeAHQgVAFAAAKIAIABQAdADAPAIQAWAIAAATQAAAPgTAIQgQAGgWAAQgRAAgQgEg");
	this.shape_223.setTransform(1481.2,708.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgJAUIgBgJIgBgHIAAgHQAAgKABgDQACgHAIAAQAFAAAEACQADACAAAEIAAAGIgBAGIABAHIAAAIQAAAMgLAAQgIAAgCgEg");
	this.shape_224.setTransform(1469.4,700.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgOBEIACgiIABgiIABghIAAgiQAAgJAMAAQANAAAAAJIAAAiIgBAhIgCAuIgBAWQgBAJgLAAQgNAAAAgJg");
	this.shape_225.setTransform(1460.9,706.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AAIAbIgFgWIgDgUIgLARIgUAnQgCADgDACQgEAGgJAAQgKAAgJgcQgFgPgFgXIgDgOIgCgOQAAgEAEgDQAEgCAGAAQAKAAACAHQACAGABAIIACAOIAHApQAPgcAQgmQAEgKAKAAQAKAAAEALIAJAiQAFAXAEANIAKgaIARgyQACgFAJAAQAFAAAFACQAEADAAAEIgCAEQgKAfgRAlQgDAIgJAJQgEAFgIAAQgPAAgIgZg");
	this.shape_226.setTransform(1448,709.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AhCA6QgbgRAAgbQAAgfAbgaQAegeAsAAQArAAAVAOQAWAPAAAeQAAAggYAaQgdAdgsABQglAAgagQgAgugfQgVAWAAAXQAAATATALQASALAbAAQAfAAAVgYQASgUAAgZQAAgWgOgIQgNgJggAAQgfgBgXAXg");
	this.shape_227.setTransform(1428,707.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgVDxQgKgJAAgNIABgnIABgnIgHjHQgZgBgzgFQgfgEAAgeQAAgPAKgKQAJgKAOAAIBIAGIgBguIgCgrQAAgOAKgJQAKgKAOAAQAeAAAFAzIABAeIgBAUIAAAVIAxgGQAjAAALAEQAVAHAAAZQAAAPgJAKQgKAKgPAAIgQgBIgRgBQgIAAgnAFIAHDJIAAAPIAAASQACBLgmAAQgMAAgKgJg");
	this.shape_228.setTransform(1737.5,634.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("ABTCmIgJhKQgFgoAAgjIABggIABggQAAhKgbAAQgmAAgiAtQggAqgRA+IgDAhQgDASAAAQQAAAKADAUIACAfQAAAQgKAJQgJAKgPAAQgPAAgJgKQgJgJAAgQIgCgfQgDgUAAgKQAAgkAFg9QAFg+AAgkIgBggIgBggQAAgPAKgJQAJgKAOAAQAgAAADAsIABAoQA5hMA8AAQA3AAAVAwQAPAgABA/IAAAjIAAAeQAAAdAHAtQAIAtAAAcQAAAPgKAJQgKAKgPAAQgdAAgEghg");
	this.shape_229.setTransform(1703.6,639.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("Ah1CUQg0grAAhNQAAhYArg8QAvhBBOAAQA4AAAkATQAsAXAAAxQAAAignAcQgRANg3AZIiCA+QATAcAdAOQAcAPAlAAQAYAAAggJQAogMAMgSQALgSAOAAQAMAAAJAJQAJAJAAAMQAAAmg9AbQg0AXgyAAQhMAAgwgmgAhGhbQgcAggOBAIBpgxQA9geAbgXQgegbg0AAQgqAAgbAhg");
	this.shape_230.setTransform(1665.9,640.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgTDKQgKgKAAgPQAAgqgIhRQgIhQAAgpQAAglgLgUQgYALgYAZIgoAtQgGAIgMAOQAAAUgEAnQgDApAAATQAAAJADATQADASAAAJQAAAOgKAKQgLAJgOAAQgmAAAAhYQAAgVADgoQAEgoAAgVQAAgRgDglQgDgkAAgTQAAhNAiAAQAOAAALALQALAMAAAOIgCAUIgBAVIAAAkQASglAjgdQAigeAYAAQA2AAATA2QATgaAagLQAagNAhgBQA6ABAUA9QAFAMAJBUQAKA6APCJQABANgKALQgKAJgPAAQgcAAgFgeQgGglgGhFIgMhpQgDgYgJgWQgLgfgOABQgMAAgjAVQghAUgKAMQAAAgACAgIAKBaQAGA2AAAkQAAAPgJAKQgJAJgPAAQgOAAgJgJg");
	this.shape_231.setTransform(1619.4,640.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("Ah1CUQg0grAAhNQAAhYArg8QAvhBBOAAQA4AAAkATQAsAXAAAxQAAAignAcQgRANg3AZIiCA+QATAcAdAOQAcAPAlAAQAYAAAggJQAogMAMgSQALgSAOAAQAMAAAJAJQAJAJAAAMQAAAmg9AbQg0AXgyAAQhMAAgwgmgAhGhbQgcAggOBAIBpgxQA9geAbgXQgegbg0AAQgqAAgbAhg");
	this.shape_232.setTransform(1573.2,640.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AiECdIAAjvIABgiIAAghQAAgjAfAAQAhAAAAA5QBChABPAAQAcAAANAVQAOAVAAAqIAAAYQgDArggAAQgdAAAAgiIgBgYIgBgdQg2AHgfAYQgfAWgUAtIABC6QAAAjgiAAQgeAAAAgjg");
	this.shape_233.setTransform(1537.6,640.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AghD3QgJgJAAgPIgCg9IgBg+QAAggAEgwQADgvAAggQAAgQAJgJQAKgKAPAAQANAAAKAKQAJAJAAAQQAAAggEAvQgDAwAAAgIACA+IAAA9QABAPgKAJQgJAKgOAAQgOAAgKgKgAgVi8QgMgMAAgQQAAgRAMgLQALgMAQAAQAQAAAMAMQAMALAAARQAAAQgMAMQgMAMgQAAQgQAAgLgMg");
	this.shape_234.setTransform(1510.7,631.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("ABNCjQgrAXg3AAQgtAAgdgUQghgWgGgqQgNhbAAhFQAAgvAKg8QAFgeAcAAQAOAAAKAJQAKAKAAAOQAAARgFAiQgFAiAAATQAAA4AEAoQAEApAHAZQAMAFALAEQALADAKAAQAtAAAzgPIAAhFIgBhBQAAhKAGg3QAEgfAdAAQAPAAAKAKQAKAJgBAOIgGCCIABBJIAABJIABAYIABAWQAAAPgKAKQgKAJgOAAQgaAAgHghg");
	this.shape_235.setTransform(1482.1,640.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AAwDyQgBgPADgXIAEgmIAGhLQgdAIgMAAQhKAAgtgnQgygpAAhIQAAhlA5g8QA5g+BiAAQAUAAAJAPQAPgNALAAQAOAAAKALQAKALAAAOQAABlgMB1IgPCCQgJBJAAA8QAAAPgKAJQgJAKgPAAQgfAAgCgjgAAnjYQg/ALgfA0QgbArAAA6QABAoAYAZQAbAcAvgCQAggBAPgiQARglABhcIAFhbQgIACgRgBIgSgCIgFABg");
	this.shape_236.setTransform(1444.3,648.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("Ah1CUQg0grAAhNQAAhYArg8QAvhBBOAAQA4AAAkATQAsAXAAAxQAAAignAcQgRANg3AZIiCA+QATAcAdAOQAcAPAlAAQAYAAAggJQAogMAMgSQALgSAOAAQAMAAAJAJQAJAJAAAMQAAAmg9AbQg0AXgyAAQhMAAgwgmgAhGhbQgcAggOBAIBpgxQA9geAbgXQgegbg0AAQgqAAgbAhg");
	this.shape_237.setTransform(1408.8,640.3);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AiuEDQgKgKAAgPQAAgbgCg2QgDg1AAgbQAAggAHg9QAHg+AAgfQAAgSgDgiQgEgiAAgSQAAgTALgPQANgSAXACIBTAGQAuAGAgARQCKBKAABqQAAA0gvAnQgmAgg5AQQBqA5A1BAQAJALAAAMQAAAOgKALQgLALgOAAQgNAAgLgLQhxhwiKgnIADBDIACBEQAAAPgKAKQgKAKgOAAQgPAAgKgKgAhtiZQADAZAAAQQAAAcgFAoIgHBDIAPABIAPAAQBXAAArgXQATgKAQgRQASgTAAgNQAAgwg2gpQgwgmg3gFIgygEg");
	this.shape_238.setTransform(1367.8,631.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AAvCMIgFg/QgDghAAgeIABgaIAAgbQAAg+gPAAQgWAAgTAmQgRAjgLA0IgBAcIgBAcIABAZIABAaQAAAMgFAJQgGAHgIABQgJgBgFgHQgFgJAAgMIgBgaIgCgZQAAgeADgzQADg1AAgdIgBgbIAAgbQAAgMAFgJQAGgHAIAAQASgBABAmIABAhQAhhAAhAAQAfAAAMApQAJAaAAA1IAAAdIAAAaQAAAYAEAlQAFAlAAAYQAAAMgGAJQgGAHgIABQgRAAgCgbg");
	this.shape_239.setTransform(1773.5,466.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("Ag5B5QgagngChDQgBhAAXgxQAcg6AvAAQAnAAAUA0QAQArgBA7QAAA/gWAtQgZAzgoAAQghAAgXgkgAgig6QgMAhAAAoQAAApAPAYQANATARAAQATAAAPgWQAQgYABgpQADhugrAAIgBAAQgbAAgQAog");
	this.shape_240.setTransform(1751.8,467.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgSDPQgGgIAAgMIAAg0IgBg0QAAgbACgnQACgoAAgbQAAgNAFgIQAGgHAIgBQAHABAGAHQAFAIAAANQAAAbgCAoIgCBCIABA0IAAA0QAAAMgFAIQgFAIgIAAQgIAAgFgIgAgMieQgHgJAAgOQAAgOAHgKQAHgJAIAAQAKAAAGAJQAHAKAAAOQAAAOgHAJQgGALgKAAQgIAAgHgLg");
	this.shape_241.setTransform(1736.5,460);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgMDJQgGgHAAgLIABghIABggIgEinIgrgEQgSgEAAgZQAAgNAGgIQAFgIAIAAIApAFIgBgnIgBgkQAAgLAGgIQAFgIAIAAQARAAADAqIAAAaIAAAQIAAASIAbgFQAVAAAGADQAMAFAAAWQAAAMgGAJQgFAHgIABIgKgBIgKAAQgEgBgWAFIAECoIAAAMIAAAPQABA/gVAAQgHAAgGgIg");
	this.shape_242.setTransform(1721.2,462.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AA+CSQgJgMgEgJQgTAPgOAIQgOAHgJAAQgtAAgVgmQgTgjAAhJQAAhFAggxQAggxAsAAQARAAAVANQAaAQAAAXQAAAHgEAGIgCAkQgCAZAAAmQAAAjAEAVQABANALAlIAEAPIABAFQAAAMgFAHQgFAIgIAAQgDAAgKgNgAgghHQgWAkAAAuQAAAvALAYQALAXAXAAQASAAANgKQAHgFAMgRQgGhKAAgmIABgbIADgfQgHgFgFgDQgFgCgDAAQgdAAgWAkg");
	this.shape_243.setTransform(1701.7,467.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AhLCEIAAjIIABgdIAAgcQAAgdARAAQATAAAAAwQAmg1AsAAQAQAAAIARQAIASAAAjIAAAUQgCAkgSAAQgQAAAAgdIgBgUIgBgYQgfAGgRAUQgRASgMAmIABCcQAAAcgUAAQgQAAgBgcg");
	this.shape_244.setTransform(1682.6,467.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AgMDJQgGgHAAgLIABghIABggIgEinIgrgEQgSgEAAgZQAAgNAGgIQAFgIAIAAIApAFIgBgnIgBgkQAAgLAGgIQAFgIAIAAQARAAADAqIAAAaIAAAQIAAASIAbgFQAVAAAGADQAMAFAAAWQAAAMgGAJQgFAHgIABIgKgBIgKAAQgEgBgWAFIAECoIAAAMIAAAPQABA/gVAAQgHAAgGgIg");
	this.shape_245.setTransform(1663,462.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AAvCMIgFg/QgDghAAgeIABgaIAAgbQAAg+gPAAQgWAAgTAmQgRAjgLA0IgBAcIgBAcIABAZIABAaQAAAMgFAJQgGAHgIABQgJgBgFgHQgFgJAAgMIgBgaIgCgZQAAgeADgzQADg1AAgdIgBgbIAAgbQAAgMAFgJQAGgHAIAAQASgBABAmIABAhQAhhAAhAAQAfAAAMApQAJAaAAA1IAAAdIAAAaQAAAYAEAlQAFAlAAAYQAAAMgGAJQgGAHgIABQgRAAgCgbg");
	this.shape_246.setTransform(1643.8,466.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AhCB8QgegkABhAQgBhKAZgyQAbg3AsAAQAfAAAUAQQAZAUAAApQAAAcgVAYQgKAKggAVIhIA0QAKAXARANQAPAMAVgBQANAAATgHQAWgJAHgQQAGgPAIAAQAHAAAGAIQAEAHAAAKQAAAggiAXQgdATgdAAQgrAAgbgggAgohMQgPAagIA2IA7gpQAjgZAPgTQgRgWgdAAQgYAAgQAbg");
	this.shape_247.setTransform(1622.4,467);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("Ag3B9QgcgkAAg+QAAg4Aag/QAdhEAkAAQATAAAXANQAeARAAAYQAAALgFAJQgFAIgHAAQgFAAgEgFIgJgKQgLgOgaAAQgTAAgTA0QgSAxAAAhQAAAmASAWQAQAUAYAAQAMAAANgJIAXgSQAGgEACAAQAHAAAGAJQAFAHAAAMQAAAUgeAUQgaARgSAAQgmAAgbgkg");
	this.shape_248.setTransform(1601,467);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AAvCMIgFg/QgDghAAgeIABgaIAAgbQAAg+gPAAQgWAAgTAmQgRAjgLA0IgBAcIgBAcIABAZIABAaQAAAMgFAJQgGAHgIABQgJgBgFgHQgFgJAAgMIgBgaIgCgZQAAgeADgzQADg1AAgdIgBgbIAAgbQAAgMAFgJQAGgHAIAAQASgBABAmIABAhQAhhAAhAAQAfAAAMApQAJAaAAA1IAAAdIAAAaQAAAYAEAlQAFAlAAAYQAAAMgGAJQgGAHgIABQgRAAgCgbg");
	this.shape_249.setTransform(1580.7,466.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("Ag5B5QgagngChDQgBhAAXgxQAcg6AvAAQAnAAAUA0QAQArgBA7QAAA/gWAtQgZAzgoAAQghAAgXgkgAgig6QgMAhAAAoQAAApAPAYQANATARAAQATAAAPgWQAQgYABgpQADhugrAAIgBAAQgbAAgQAog");
	this.shape_250.setTransform(1559,467.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AhQCwQgbgsAAg9QAAhgA3hlQAuhVAuAAQAKAAAHABQAIABAFADQAHgOALAAQAOAAADAaQADAXAAAhQAAAMgEAJQgGALgJAAQgMAAgHgVQgFgTgFgEQgEgDgQAAQgdAAggBAQgvBVAABLQAAAlAQAbQAQAbAYAAQASAAAVgPQALgIAXgZQAMgMAFAAQAJAAAFAJQAFAJAAAMQABAMgIAKQgzBDgzAAQgoAAgcgtg");
	this.shape_251.setTransform(1537.5,459.9);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AhCB8QgegkABhAQgBhKAZgyQAag3AtAAQAfAAAUAQQAZAUAAApQAAAcgVAYQgKAKgfAVIhJA0QAKAXARANQAQAMAUgBQANAAASgHQAYgJAGgQQAHgPAHAAQAHAAAGAIQAEAHAAAKQAAAggiAXQgeATgcAAQgqAAgcgggAgohMQgPAagIA2IA7gpQAjgZAOgTQgQgWgdAAQgYAAgQAbg");
	this.shape_252.setTransform(1502.6,467);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AgVCEIgeh0IgiiCQgCgIAAgGQAAgLAGgJQAGgIAIAAQALAAAFASIAyDHQANguAWhWIARhBQAGgSALAAQAIAAAGAIQAGAIAAAMQAAALggBvIgoCGQAAAbgQAAQgPAAgGgZg");
	this.shape_253.setTransform(1481.9,466.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("Ag5B5QgagngChDQgBhAAXgxQAcg6AvAAQAnAAAUA0QAQArgBA7QAAA/gWAtQgZAzgoAAQghAAgXgkgAgig6QgMAhAAAoQAAApAPAYQANATARAAQATAAAPgWQAQgYABgpQADhugrAAIgBAAQgbAAgQAog");
	this.shape_254.setTransform(1461.2,467.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AhLCEIAAjIIABgdIAAgcQABgdARAAQASAAAAAwQAmg1AsAAQAQAAAIARQAIASAAAjIAAAUQgCAkgSAAQgQAAAAgdIgBgUIgBgYQgeAGgSAUQgRASgMAmIABCcQAAAcgTAAQgRAAgBgcg");
	this.shape_255.setTransform(1442.2,467.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AhKDoQgGgIAAgMIABhzIAAhxQgBg+gCg0IgDg6QAAgUAFgOQAGgRALAAQAHAAAGAIQAFAIAAALIgBAJIgBARQAQgRAQgIQAPgJAOAAQAnAAATA0QAOApAABEQAAA9gWAoQgYAqgoAAQgSAAgXgJIgBCJQAAAMgFAIQgGAIgIAAQgIAAgFgIgAgSiXQgKAIgQAWQADBBAABHQAVAMAUAAQAYAAANgbQALgWAAglQAAg0gIgaQgJgagRAAQgRAAgPAMg");
	this.shape_256.setTransform(1421.6,473.9);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgKCoQgGgIAAgNQAAgigEhDQgFhEAAgiQAAgegGgRQgOAJgOAUIgXAnIgJASQAAAQgDAhIgCAyIACAXIACAXQAAALgGAIQgGAJgIAAQgWAAAAhKIACgzQADghAAgSIgCgtIgCguQAAhBAUAAQAHAAAHAKQAGAKAAALIgBARIgBARIAAAfQAKgfAUgZQAUgYANAAQAfAAAKAsQALgVAPgKQAOgKATAAQAhgBAMA0QACAKAGBHQAFAvAJB0QAAAKgGAJQgFAIgJAAQgQgBgCgYQgEgggDg5IgHhYQgCgTgFgTQgGgagIAAQgHAAgUASQgSAQgGAKIABA2IAGBMQADAtAAAdQAAANgFAIQgFAJgJgBQgHABgFgJg");
	this.shape_257.setTransform(1395.6,467.2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AhUDSQgGgIAAgMQAAgMAGgKQAFgIAIAAQANAAAdgGQABgXAAgeIAAgwIgCgwQAAhBAFhjIgYABIgaABQgIAAgGgJQgGgHABgNQAAgbASgCQAPgDArAAQAmAAA7ANQARADAAAbQAAAOgHAHQgFAHgIAAQgMAAgUgDIgegHQgFBTAABMIAAAxIABAyQAAAagBAWIA9gBQAJAAAFAJQAFAIAAAMQAAANgFAJQgFAIgJAAIghABIggAAQgMAAgaAFQgZAGgNAAQgIAAgFgJg");
	this.shape_258.setTransform(1369.1,460.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AAtCgQgVAAgMhNQgEgZgEgqIgFg/IgQA2IgeB2QgCALgFAGQgGAQgNABQgPABgNhXQgHgsgHhLIgFgrQgCgZAAgSQAAgMAFgIQAGgIAIAAQAPAAADAYQADARABAZIADAqIAMB/QAVhXAXhzQAHgfAPAAQAPAAAGAjQAFAiAHBFQAIBHAGAoIAOhNIAZibQADgSAOAAQAIAAAGAJQAGAIAAALIgCANQgPBdgZB1QgFAagNAcQgGAPgLAAIgBgBg");
	this.shape_259.setTransform(1677.3,383.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("Ag5B5QgagngChDQgBhAAXgxQAcg6AvAAQAnAAAUA0QAQArgBA7QAAA/gWAtQgZAzgoAAQghAAgXgkgAgig6QgMAhAAAoQAAApAPAYQANATARAAQATAAAPgWQAQgYABgpQADhugrAAIgBAAQgbAAgQAog");
	this.shape_260.setTransform(1652.7,383.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AhLCEIAAjIIABgdIAAgcQAAgdARAAQAUAAgBAwQAmg1AtAAQAPAAAIARQAHASAAAjIAAAUQgBAkgSAAQgRAAAAgdIAAgUIgBgYQgfAGgRAUQgRASgMAmIABCcQAAAcgUAAQgRAAAAgcg");
	this.shape_261.setTransform(1633.7,383.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AhLCEIAAjIIABgdIAAgcQABgdAQAAQAUAAgBAwQAmg1AsAAQAQAAAIARQAHASABAjIAAAUQgCAkgSAAQgQAAAAgdIgBgUIgBgYQgfAGgRAUQgRASgMAmIABCcQAAAcgTAAQgRAAgBgcg");
	this.shape_262.setTransform(1614.6,383.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("ABDCUQgEgZgIhBQgUAEggAKIgzAQQgJAmgXBIQgHAQgKAAQgIAAgHgIQgFgJAAgMQAAgOAdhaQgEgIAAgKQAAgXAUgGQAVg9AjhPQAshtALAAQAQAAAGAgIAMBgIAcDGIAMAtQAFAXAAAIQABAMgHAJQgGAIgHAAQgSAAgOhEgAgYAVQAXgJAvgMIgQhug");
	this.shape_263.setTransform(1589.7,376.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgzDgQgGgIAAgMQAAgdAqiJIhGjEIgJgVQgFgNAAgIQAAgMAGgJQAHgJAHAAQAJAAAFAKQAhBEAkB9IAdhjQAQgzAPgmQAGgQAJAAQAJABAFAHQAHAJAAALQAAAHgDAIIhDDVQgZBOgMA0IgNA4QgFAVgMAAQgJAAgFgIg");
	this.shape_264.setTransform(1552.6,390.7);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AgVCEIgeh0IgiiCQgCgIAAgGQAAgLAGgJQAGgIAIAAQALAAAFASIAyDHQANguAWhWIARhBQAGgSALAAQAIAAAGAIQAGAIAAAMQAAALggBvIgoCGQAAAbgQAAQgPAAgGgZg");
	this.shape_265.setTransform(1533.4,382.7);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AA+CSQgJgMgEgJQgTAPgOAIQgOAHgJAAQgtAAgVgmQgTgjAAhJQAAhFAggxQAggxAsAAQARAAAVANQAaAQAAAXQAAAHgEAGIgCAkQgCAZAAAmQAAAjAEAVQABANALAlIAEAPIABAFQAAAMgFAHQgFAIgIAAQgDAAgKgNgAgghHQgWAkAAAuQAAAvALAYQALAXAXAAQASAAANgKQAHgFAMgRQgGhKAAgmIABgbIADgfQgHgFgFgDQgFgCgDAAQgdAAgWAkg");
	this.shape_266.setTransform(1513.4,383.3);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AhCB8QgdgkgBhBQABhIAYgzQAag3AtAAQAfAAAVAQQAYAUAAApQABAcgXAYQgJAKggAVIhJA0QALAYAQAMQAQAMAVgBQANAAATgHQAXgJAGgPQAHgQAHAAQAHAAAFAIQAFAHABAKQAAAggjAXQgeATgcAAQgqAAgcgggAgohMQgPAagIA2IA7gpQAjgZAPgTQgRgWgdAAQgYAAgQAbg");
	this.shape_267.setTransform(1492.6,383);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("Ah5DiQgGgIABgMQgBgeAEg8QADg9AAgeIgBgvIgBgvIAChEIADhEQgBgMAGgIQAFgIAJAAQAHAAAFAIQAGAIAAAMIgCBEIgCBFIABBIIBTgXQAxgOAiAAQACgpAAhTQABgVAFgXQAFgeANAAQAGAAAGAIQAHAIAAAMIgCALQgEAMAAAXIABAaIABAaQAAAcgEA5QgEA4ABAcQgBAWADArIACBCQAAAMgFAHQgGAJgIgBQgHABgGgJQgFgHgBgMIgBhCIgChBIABgqQgiAAgvAPIhSAWQAAAagEAwQgDAvAAAaQAAAMgGAIQgFAIgIAAQgIAAgFgIg");
	this.shape_268.setTransform(1466.4,376.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AhfC+Qg1gTAAgiQAAgNALgLQALgKANAAQALAAARAQQAIAIAdAGQAXADAPAAQAcABAWgIQAggJAAgWQAAguhBgQIgjgJQgtgKgTgNQgcgSAAgmQAAhIBDgeQAVgKAsgNQAtgNAUgIQAOgGAQgBQAPAAAJAKQAJAKAAAPQAAAKAFATQAEAUAAAJQAAAQgJAJQgKAKgPAAQgSAAgIgNQgFgIgEgcQgZAGg2ARQg2AWAAAgQAKAEAKACQBOANAmAZQA4AjAABEQAAA4gwAcQgoAYg9AAQgsgBgpgPg");
	this.shape_269.setTransform(1642.7,283.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AgmD4QAAgqAEhSQADhUAAgoIACh7QAChGAAg2QAAgiAgAAQAiAAAAAiIgBB8IgCB7IgGCpQABAbgDA0QgEAigdAAQghAAAAgig");
	this.shape_270.setTransform(1617.2,275.2);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AgmD4QAAgqADhSQAEhUAAgoIACh7QAChGAAg2QAAgiAhAAQAhAAAAAiIgCB8IgBB7IgGCpQAAAbgCA0QgEAigdAAQghAAAAgig");
	this.shape_271.setTransform(1598,275.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AghD3QgJgJAAgPIgBg9IgCg+QAAggADgwQAEgvAAggQAAgQAJgJQAKgKAOAAQAOAAAKAKQAJAJAAAQQAAAggEAvQgDAwAAAgIABA+IABA9QAAAPgJAJQgJAKgOAAQgPAAgJgKgAgWi8QgMgMABgQQgBgRAMgLQANgMAPAAQAQAAAMAMQAMALAAARQAAAQgMAMQgMAMgQAAQgPAAgNgMg");
	this.shape_272.setTransform(1579.3,276.4);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("ABbEFQgRgigkgvIg8hTQgUAQgpAcQgEA1AAAyQAAAQgJAKQgKAJgPAAQgiAAAAguQAAgdAEg5QAEg4AAgcQAAg1AChBIABh3IgBgkQgCgUAAgQQAAgPAJgJQAKgKAOAAQAPAAAKAKQAJAJAAAPQAAAQACAWIABAlIgCBuQgCA7ABA6QAugjAqgqIBMhNQALgMANABQANgBALALQALAKAAAOQAAAMgKALQgqAyg+A3IBLBlQA0BIAAAVQAAAOgLAKQgLAKgOAAQgSAAgLgUg");
	this.shape_273.setTransform(1551.9,275.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AiJDsQhAgdgBgzQAAgPAKgJQAKgIAPgBQAQAAANAUQARAZAOAKQAdATA3AAQA0AAAugXQA6geAAgzQAAgrgxgaQgpgVg8gCQg2gBgmgWQgxgbAAg0QAAg9BGgyQBBgwBGABQAhAAAqALQA3APAAAWQAAAegfABQgNgBgigGQgjgIgSAAQg1ABglAaQgmAaAAAlQAAAdAyALQATAFA1ADQBOAHAsArQApAmAAA6QAABRhLAwQhCArhVAAQg+AAg0gZg");
	this.shape_274.setTransform(1507.1,277.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AkMF+IAAgdQA5AAAcgSQAUgNAJgcQADgOAAhBIAAkeQAAiCgEgYQgGgagOgLQgPgLgUAAQgZAAghAMIgIgdIDhhbIAiAAIAACnQBdinBhAAQAtAAAdAbQAdAbABAkQgBAfgUAWQgWAWgdAAQgdAAgigbQgkgdgRAAQgPAAgQARQglAhgmBMIAAFjQAAA9AQAgQAJAWAbAOQAaAPAzAAIAAAdg");
	this.shape_275.setTransform(641,215.7);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AjaEiQhfhoAAiwQAAi+BihqQBhhrCTAAQB9AABQBTQBQBSAACJIoAAAQgBClBRBeQBRBeBtAAQBJAAA2goQA1goAlhiIAZARQgRBvhSBbQhSBbh7AAQiFAAhfhogAiIkbQg1A0gJBdIFXAAQgEhHgNgdQgVgtgngaQgpgagrAAQhDAAg1A0g");
	this.shape_276.setTransform(576.1,216.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AgjHfQgkgVgRgmQgRgnAAhQIAAnyIh2AAIAAgbQAtgSAvgqQAugrAlg7QASgeAhhSIAZAAIAAD0ICtAAIAAA5IitAAIAAHgQAABIAVAZQAUAZAgAAQAbAAAZgQQAZgRAOggIAgAAQgcBPg0ApQg0Ang3AAQglAAgjgUg");
	this.shape_277.setTransform(516.4,205.2);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AAoF+IAAgdIAPAAQA0AAAVgPQAUgRAIgeQADgMABhBIAAkuQAAhmgbgtQgagug/AAQhfAAhfBpIAAGGQAABMAIASQALAXAVAMQATAKA9AAIAAAdIlvAAIAAgdIAQAAQA5AAAUgcQAUgdAAhSIAAkSQgBiGgFgdQgHgdgMgLQgNgKgVAAQgXAAgfAMIgNgdIDhhbIAjAAIAACdQCCidB1AAQA9AAAsAfQArAeAbBFQARAxAABlIAAE7QAABHAMAZQAJAUAUAMQATALA1AAIAAAdg");
	this.shape_278.setTransform(451.1,215.7);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("ACaF+IAAicQhfBngzAbQgwAbg5gBQg+AAgugjQgtgkgTg5QgRg5AAhnIAAlLQAAg1gMgUQgLgVgWgKQgXgMg6ABIAAgeIEEAAIAAHwQAABoAlAgQAjAhAzAAQAjAAAsgWQAsgWA8g+IAAmjQAAhAgWgVQgXgXhKgCIAAgeID9AAIAAHBQAACCAHAdQAFAcAOALQANALASAAQAZAAAggNIALAcIjeBbg");
	this.shape_279.setTransform(367.9,217.9);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("ABiIlIAAgdIAnAAQBDAAAfgoQAUgaAAhjIAAlPIn+AAIAAFPQAABTALAbQAIAVAaAOQAjAUAnAAIAoAAIAAAdInXAAIAAgdIAnAAQBEAAAegoQAUgaAAhjIAArEQAAhVgLgbQgIgTgZgPQgkgTgmgBIgnAAIAAgdIHXAAIAAAdIgoAAQgnABgjASQgZANgKAbQgKAaAABRIAAE6IH+AAIAAk6QAAhVgKgbQgJgTgZgPQgjgTgngBIgnAAIAAgdIHWAAIAAAdIgnAAQgnABgjASQgaANgJAbQgJAaAABRIAALEQAABTAKAbQAIAVAaAOQAjAUAnAAIAnAAIAAAdg");
	this.shape_280.setTransform(266.2,199);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#FF0000").ss(1,1,1).p("EgiPgG3MBEfAAAIAANvMhEfAAAg");
	this.shape_281.setTransform(397.2,787);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#000000").ss(1,1,1).p("Eh7RhF6MD2kAAAQAADPCyCSQCzCTD8AAMAAAB8NQj8AAizCTQiyCSAADPMj2kAAAQAAjPiziSQiyiTj9AAMAAAh8NQD9AACyiTQCziSAAjPg");
	this.shape_282.setTransform(959.4,562);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FF0000").s().p("Eh7RBF7QAAjPiyiSQiziTj9AAMAAAh8NQD9AACziTQCyiSAAjPMD2jAAAQABDPCyCSQCzCTD8AAMAAAB8NQj8AAizCTQiyCSgBDPgEh6GAqDMBEhAAAIAAtxMhEhAAAMBEhAAAIAANxMhEhAAAIAAtxIAANxg");
	this.shape_283.setTransform(959.4,562);

	this.wizardJob = new lib.WizardPortal();
	this.wizardJob.name = "wizardJob";
	this.wizardJob.parent = this;
	this.wizardJob.setTransform(1130.1,527.5,1,1,0,0,0,17.3,225.1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AhOC2QgVgmAAg3QAAhGAcgmQAdgnAyAAQAMAAAQAEIgBh8IgagLIgBgKQAigJAdgKIACABIgBCEIAACbIAABOIABAXQAAAKADAEQADAFAFABQAFACAKABIABALIgVAKQgLAEgFAAQgTAAgHggQgeAggcABQgkAAgVgmgAgqgGQgSAbAAA5QAAAwAQAeQAPAdAcAAQARAAAUgPIAAjGQgNgGgQAAQggAAgRAcg");
	this.shape_284.setTransform(1641.9,714.3);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AhGB5QgRgUAAgkQAAgsAbgVQAbgUA4AAIAAgWQAAgggLgQQgMgPgWAAQgSAAgaAKIgFgTQAmgZAeAAQAdAAARAXQARAXAAArIgBB2QAAAPABAJQAAAIADAFQACAFAGACQAGACAKAAIABALQgJAFgMAFQgMAEgEABQgUgBgGgcQgbAdgZAAQgaAAgRgTgAggAOQgPANAAAdQAAAbAKAMQAKALARAAQASAAAOgKIABhdQgogBgPAMg");
	this.shape_285.setTransform(1621,722.3);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("Ag2BoQgagkAAg/QgBg/AZgpQAZgoAoAAQAiAAAUAeQASAfABA1IgBAQIh6AAQAAA8AUAbQATAbApgBQATAAAVgEIACAMQgRAPgRAGQgSAHgPAAQgqAAgagkgAgahcQgMAYgCAkIBRAAIAAgJQABgpgJgSQgJgRgQAAQgXAAgLAZg");
	this.shape_286.setTransform(1601.9,722.3);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgvDKIghgBIgwABIgBgNIAYgLQAFgCAAgHIABgZIAAgfIAAjoIAAgaIgBgVQAAgHgEgCIgYgMIgBgMIAxABQATAAASgCQATgBATAAQBCAAAiAuQAjAtAABaQAABpgmA7QgmA6hEAAIghAAgAgliwIgYACIAAFdQALACALABIAWABQAzAAAagtQAbgsAAhbQAAhagZgqQgagrg2AAIgTAAg");
	this.shape_287.setTransform(1577.2,715.4);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("Ag2BoQgbgkABg/QgBg/AZgpQAZgoAoAAQAiAAAUAeQASAfABA1IgBAQIh6AAQABA8ATAbQATAbApgBQATAAAVgEIACAMQgRAPgSAGQgRAHgPAAQgqAAgagkgAgahcQgMAYgCAkIBSAAIAAgJQAAgpgJgSQgIgRgRAAQgXAAgLAZg");
	this.shape_288.setTransform(1543,722.3);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AA+DXIgrABIgBgMIAUgIQAEgDABgGIAAgSIAAh9QAAgjgMgOQgLgPgVAAQgTAAgWANIAACAIABBBQAAAHAFACIAUAJIAAAMIgrgBIguABIAAgMIAWgJQAFgDAAgGIAAhHIAAh2IAAhoIgBhDIgagLIgBgKQAggJAggLIABACIgBBNIAABwQAiggAcAAQAbAAAQAWQAQAWAAArIAABlIABA1QAAAHAEADIAWAJIABAMIgtgBg");
	this.shape_289.setTransform(1522,714);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AgbCcQgKgRAAgiIABiuIgbgKIgBgLIAegEIAOhFIAUgJIABACIAABBIAAALIA6AAIAAAbIg6AAIgBCbQAAAdAGAMQAFALARAAQAOAAAVgFIABANQghAZgaAAQgVAAgLgRg");
	this.shape_290.setTransform(1503.3,718.9);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AgdDXIguABIgBgMIAWgJQAFgDABgGIAAgmIAAioIgagJIgCgMIAcgEIAAgBQAAhQAYgtQAYgsAnAAQAUAAASAHQgHAjgEAlIgJACIgMg5IgLgBQgXAAgLAdQgMAeAABOIAAAKIAwAAIAAAbIgwAAIAACaIABAwQAAAHAFADIAXAKIABAMIgvgBg");
	this.shape_291.setTransform(1482.8,714);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AhCBmQgZgmAAg9QAAg+AagoQAagoAqAAQAoAAAZAlQAYAkAAA+QAABAgbAoQgaAogoAAQgpAAgYgmgAgmhYQgNAcAAA6QAAA1ANAhQAOAiAZAAQAZAAANgeQANgdAAg6QAAg3gNgeQgOgggZAAQgZAAgNAcg");
	this.shape_292.setTransform(1463.2,722.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AhKC/QgVgRAAgcQAAghAggoQgUgMAAgSQAAgaAbguQgegbAAg0QAAgsAWgbQAWgcAjAAQAIAAAQAEQAPAEAIAAIA3gBIABAMIgsARQAOAYAAAhQAAAugVAcQgWAbggAAQgSAAgPgJQgLAYAAAOQAAAIAGADQAFADAOAAIAagBIAagBQAfAAAUARQAUASAAAiQAAAzgiAeQgiAegrAAQgkAAgWgRgAhBCBQAAAaAOAOQANAOAYAAQAbAAAVgTQAVgSAAghQAAgSgKgKQgKgKgdAAIgVABIgYABIgNgBQgNAdAAAYgAglimQgJASAAAkQAAAlAKAUQAJAUATAAQARAAAJgSQAJgUAAgkQAAgjgKgVQgJgUgSAAQgSAAgJATg");
	this.shape_293.setTransform(1433,729);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AA+CIIgrABIgBgNIAUgHQAEgDABgGIAAgSIAAh8QAAgkgMgPQgLgPgVAAQgUAAgVAQIAAB8IABBCQAAAIAEACIAUAIIABANIgrgBIguABIAAgNIAWgJQAFgDAAgGIAAgjIAAhgIgBhGIgagKIAAgKQAggKAdgLIACADIAAAhQAigkAcAAQAcAAAPAXQAQAXAAAqIAABkIAAA1QAAAHAFADIAWAJIAAANIgsgBg");
	this.shape_294.setTransform(1411,721.9);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AAADKIgsABIgBgMIAWgKQAFgCAAgHIABglIAAhgIgBhEIgagKIAAgKQAhgJAcgLIACACIgBBRIAABuIAAAvQABAIAEACIAWAKIABAMIgugBgAgSiRQgGgJAAgOQAAgQAGgJQAHgJALAAQAIAAAGAIQAGAIAAAQQAAAPgGAKQgHAJgJAAQgJAAgHgJg");
	this.shape_295.setTransform(1393.7,715.3);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("ABRDLQgGgBgEgCIgJgEIgIgHQgIgJgHgQQgIgRgIgVIgSgtIgSgvIgFgLIgFgHQgCgCgDgBIgJgBIgNAAIAABjIAAAfIAAAZQAAAJAFACIAWAJIAAANIgugBIgwABIgBgNIAYgKQAFgCAAgHIABgaIAAgfIAAjnIAAgaIgBgWQAAgHgEgCIgYgMIgBgMIAxABIAMAAIASgBIASgBIALAAQArAAAXAYQAWAZAAAvQAAArgPAaQgQAbgfANIAXA1IATAvIARAmQAHAQAGAJIAHAJIAHAGIAIAEIAIADIABANQgOACgKAAIgOAAgAgliyIgNACIAACnIAWABQAgAAAQgVQAQgVAAgtQAAgrgPgUQgPgUgfAAIgMAAg");
	this.shape_296.setTransform(1376.7,715.6);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("ABADXIgXAAQgHgRgKgUQgZg3gfg1IBFhjIgWgJIgBgLIAlABIApgBIABALQgUAIgIAFQgJAGgLAQIgqA3IA/B0QAKASAGAHQAGAHAOAEIAAAMIgmgBgAg3DXIgtABIgBgMIAXgKQAEgCAAgGIABhIIAAh1QAAiVgBgWIgagLIgBgKQAigJAdgLIACACIgBCCIAAC6IAABTQAAAIAFACIATAIIAAAMIgqgBg");
	this.shape_297.setTransform(1342.9,714);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("Ag0BoQgZgkAAg9QgBhBAdgoQAdgpAqAAQAdAAAaASIgLBOIgIACIgPhFQgJgFgLAAQgcAAgRAeQgQAeAAAxQAAA4ASAbQATAcAnAAQATAAAUgFIABAMQgLAMgSAIQgSAIgSAAQgoAAgZgkg");
	this.shape_298.setTransform(1322.8,722.3);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AhGB5QgQgUAAgkQAAgsAagVQAagUA5AAIAAgWQAAgggLgQQgLgPgWAAQgSAAgbAKIgFgTQAmgZAeAAQAcAAASAXQARAXAAArIgBB2QgBAPABAJQABAIADAFQADAFAFACQAGACAKAAIAAALQgIAFgMAFQgMAEgFABQgSgBgIgcQgaAdgZAAQgbAAgQgTgAggAOQgPANAAAdQAAAbAKAMQAKALARAAQASAAAPgKIAAhdQgogBgPAMg");
	this.shape_299.setTransform(1304,722.3);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AABDXIgtABIAAgMIAVgJQAFgDABgGIAAhIIAAh1IgBirIgagLIgBgKQAjgJAcgLIABACIgBCCIAAC5IABBTQAAAHAFADIAVAJIABAMIgtgBg");
	this.shape_300.setTransform(1288.7,714);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AgZDKIgagBIgwABIgCgNIAYgLQAFgBABgIIAAgZIAAgfIAAjoIAAgaIAAgVQAAgHgFgCIgYgMIgBgMIAyABIAdgCIAagBQArAAAWAYQAVAXABArQgBBHgzAaQAfAHAPAYQAQAaAAAoQAAA5gbAfQgdAfgxAAIgVAAgAghACIAACtQAGADAHABIAOABQAfAAARgXQARgYAAgtQAAgtgRgUQgQgXgmAAIgVACgAgUiwIgNACIAACZIAZABQAbAAAOgUQAPgVAAgnQAAgpgPgRQgPgTgbABIgLAAg");
	this.shape_301.setTransform(1271.5,715.4);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AhKC/QgVgRAAgcQAAghAggoQgUgMAAgSQAAgaAbguQgegbAAg0QAAgsAWgbQAWgcAjAAQAIAAAQAEQAPAEAIAAIA3gBIABAMIgsARQAOAYAAAhQAAAugVAcQgWAbggAAQgSAAgPgJQgLAYAAAOQAAAIAGADQAFADAOAAIAagBIAagBQAfAAAUARQAUASAAAiQAAAzgiAeQgiAegrAAQgkAAgWgRgAhBCBQAAAaAOAOQANAOAYAAQAbAAAVgTQAVgSAAghQAAgSgKgKQgKgKgdAAIgVABIgYABIgNgBQgNAdAAAYgAglimQgJASAAAkQAAAlAKAUQAJAUATAAQARAAAJgSQAJgUAAgkQAAgjgKgVQgJgUgSAAQgSAAgJATg");
	this.shape_302.setTransform(1605.9,655.1);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("Ag2BoQgagkAAg/QAAg/AYgpQAZgoAoAAQAiAAAUAeQATAeAAA2IgBAQIh6AAQAAA8AUAbQATAbApgBQATABAVgGIABANQgQAPgRAGQgSAHgPAAQgqAAgagkgAgahcQgMAYgCAkIBRAAIAAgJQAAgpgIgSQgIgRgSAAQgVAAgMAZg");
	this.shape_303.setTransform(1585.9,648.4);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AABDXIgtABIAAgMIAVgJQAFgDABgGIAAhIIAAh1IgBirIgagMIgBgJQAjgKAcgKIABACIgBCCIAAC5IABBTQAAAHAFADIAVAJIABAMIgtgBg");
	this.shape_304.setTransform(1570.7,640.1);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AgVCIIgtABIgBgNIAXgJQAFgDgBgGIABgjIAAhgIgBhGIgagKIgBgKQAggKAegLIACADIAAAhQAjgkAiAAIABADIgLBYIgIACQgFgZgFgOQgFgPgLAAQgLAAgOAOIAAB7IAABAQAAAIAEACIAaAKIABANIgxgBg");
	this.shape_305.setTransform(1547.9,648);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("Ag2BoQgagkAAg/QAAg/AYgpQAYgoApAAQAiAAAUAeQATAeAAA2IgBAQIh5AAQgBA8AUAbQATAbApgBQATABAVgGIABANQgQAPgRAGQgSAHgPAAQgqAAgagkgAgahcQgMAYgCAkIBRAAIAAgJQAAgpgIgSQgIgRgSAAQgVAAgMAZg");
	this.shape_306.setTransform(1530.6,648.4);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AhOC2QgVgmAAg3QAAhGAcgmQAdgoAyAAQAMABAQAEIgBh8IgagLIgBgJQAigKAdgKIACACIgBCDIAACbIAABOIABAXQAAAKADAEQADAFAFABQAFACAKABIABALIgVAKQgLAEgFAAQgTAAgHggQgeAggcAAQgkABgVgmgAgqgGQgSAbAAA5QAAAwAQAeQAPAdAcAAQARAAAUgOIAAjHQgNgGgQAAQggAAgRAcg");
	this.shape_307.setTransform(1509.9,640.4);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AAADKIgsABIgBgMIAWgKQAFgCAAgHIABglIAAhgIgBhEIgagKIgBgKQAigJAcgLIACACIgBBRIAABuIAAAvQAAAIAFACIAWAKIABAMIgugBgAgSiRQgGgJAAgOQAAgQAGgJQAHgJALAAQAIAAAGAIQAGAIAAAQQAAAPgGAKQgHAJgJAAQgJAAgHgJg");
	this.shape_308.setTransform(1492.8,641.4);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("Ag1DNIguABIAAgMIAWgKQAFgCAAgHIAAg/IAAhzQAAh/gBghIgZgLIgBgKQAggKAdgLIACADIAAAcQAegfAbAAQAkABAWAjQAVAkAAA5QAABGgbAoQgcAogxAAQgPABgRgFIAAA/IABAoQAAAIAFACIAZALIABAMIgxgBgAgkidIAADJQARAGAQAAQAfAAAQgeQARgcAAg4QAAg0gQgbQgQgagcgBQgUAAgRANg");
	this.shape_309.setTransform(1475.6,654.9);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("AhXDAIgBgCIAKhiIAIgCIAOBSQAVAMAVAAQAcAAAQgTQAQgTAAgjQAAgSgFgOQgFgOgJgKQgJgKgLgIIgWgQQgOgJgNgKQgNgJgKgNQgKgOgHgTQgGgTAAgaQAAg0AegcQAdgcArAAQAeAAAhAKIACACIgLBZIgIACIgNhHQgUgKgRAAQgZAAgPATQgQASAAAgQABATAFAOQAGAOAIALQAJAKAMAJIAWAQQAOAIAMAKQANAJALAMQAJANAGASQAHASAAAYQAAA5geAeQgeAegwAAQgeAAgmgPg");
	this.shape_310.setTransform(1455.2,641.6);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("Ag2BoQgbgkAAg/QAAg/AZgpQAZgoAnAAQAjAAAUAeQATAeAAA2IgBAQIh6AAQAAA8AUAbQATAbApgBQATABAVgGIACANQgRAPgRAGQgSAHgPAAQgqAAgagkgAgahcQgMAYgCAkIBRAAIAAgJQAAgpgIgSQgIgRgSAAQgVAAgMAZg");
	this.shape_311.setTransform(1425.3,648.4);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AhNDJIgBgLQAVgFALgQQAMgTAahWIABgFIgCgBQgjiCgdhjQgDgIgGgEIgRgHIgBgMIAsABIApgBIABAMIgWAJIAQBCIAUBMIAJAlIALgsIAShBIAShGIgWgJIgBgMIAhABIAigBIABAMIgSAHQgGADgDAJIgPA1QgaBZgNA3QgJAngHAoQgHAogDAdQgCAOgFAIQgFAHgUAAQgVAAgSgCg");
	this.shape_312.setTransform(1405.9,655.3);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AgBDIIguAAIgwABIgBgNIAYgKQAFgCAAgHIABgaIAAgfIAAjnIAAgaIgBgWQAAgHgEgCIgYgMIgBgMIAwABIAwAAIBagBIACACIgMBZIgHACIgNhCIhYAAIAACdIARAAIAtAAQAFgBABgHIAHgmIAKgBIAAA7IAAA6IgKABIgHgoQgCgHgEAAIgtgBIgRAAIAABoIAAA/IBcAAIAYhJIAJgCIgEBkIgCACIhcgBg");
	this.shape_313.setTransform(1384.9,641.6);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AhOC2QgVgmAAg3QAAhGAcgmQAdgoAyAAQAMABAQAEIgBh8IgagLIgBgJQAigKAdgKIACACIgBCDIAACbIAABOIABAXQAAAKADAEQADAFAFABQAFACAKABIABALIgVAKQgLAEgFAAQgTAAgHggQgeAggcAAQgkABgVgmgAgqgGQgSAbAAA5QAAAwAQAeQAPAdAcAAQARAAAUgOIAAjHQgNgGgQAAQggAAgRAcg");
	this.shape_314.setTransform(1352.4,640.4);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("Ag2BoQgbgkABg/QgBg/AZgpQAZgoAoAAQAiAAAUAeQASAeABA2IgBAQIh6AAQABA8ATAbQATAbApgBQATABAVgGIACANQgRAPgSAGQgRAHgPAAQgqAAgagkgAgahcQgMAYgCAkIBSAAIAAgJQAAgpgJgSQgIgRgRAAQgXAAgLAZg");
	this.shape_315.setTransform(1331.5,648.4);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("ABRDLQgGgBgEgCIgJgEIgIgHQgIgJgHgQQgIgRgIgVIgSgtIgSgvIgFgLIgFgHQgCgCgDgBIgJgBIgNAAIAABjIAAAfIAAAZQAAAJAFACIAWAJIAAANIgugBIgwABIgBgNIAYgKQAFgCAAgHIABgaIAAgfIAAjnIAAgaIgBgWQAAgHgEgCIgYgMIgBgMIAxABIAMAAIASgBIASgBIALAAQArAAAXAYQAWAZAAAvQAAArgPAaQgQAbgfANIAXA1IATAvIARAmQAHAQAGAJIAHAJIAHAGIAIAEIAIADIABANQgOACgKAAIgOAAgAgliyIgNACIAACnIAWABQAgAAAQgVQAQgVAAgtQAAgrgPgUQgPgUgfAAIgMAAg");
	this.shape_316.setTransform(1310.5,641.7);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AhCB6QAGglAFgkIAHgBIAOA+QALAFARABQARAAALgLQALgLAAgUQAAgSgHgKQgIgLgQgIIgTgKQgagNgKgRQgKgSAAgbQAAglATgWQAUgWAeAAQAeAAAYANQgGAhgEAjIgHADIgNg3QgLgEgNAAQgSAAgLAKQgLAKAAASQAAASAHAKQAIAKATAKIAPAHQAbAOANARQAMAQAAAdQAAAngVAYQgVAWgfAAQgdAAgfgSg");
	this.shape_317.setTransform(1539.5,574.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AABDXIgtABIAAgMIAVgKQAFgBABgIIAAhIIAAh0IgBirIgagLIgBgKQAjgJAcgLIABACIgBCBIAAC6IABBSQAAAJAFABIAVAKIABAMIgtgBg");
	this.shape_318.setTransform(1525.9,566.2);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("Ag2BoQgbgkAAhAQABg+AYgoQAYgpAoAAQAkAAASAfQAUAdgBA2IAAAQIh5AAQAAA9ATAaQAUAaApAAQASAAAVgEIABALQgQAQgSAHQgRAGgPAAQgqAAgagkgAgahcQgMAYgCAjIBSAAIAAgIQAAgpgJgRQgJgSgRAAQgWAAgLAZg");
	this.shape_319.setTransform(1510.9,574.5);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AAXA1IgRhEIgGgeIgHAdIgSBFIgUBPIgRACIgeh3Igfh1QgDgKgHgDIgOgGIAAgMIApABIAsgBIAAAMIgXAJQANBAAUBPIAIAiIAIgiIAYhfIAOhDIAOgCIAPBFIAXBfIAHAiIAJgiQAVhQAOg/IgVgKIgBgLIAhABIAfgBIABALIgPAHQgHADgDAKIghB1IgeB1IgSACIgThRg");
	this.shape_320.setTransform(1486.6,574.6);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("Ag2BoQgbgkAAhAQABg+AYgoQAYgpAoAAQAkAAASAfQAUAdgBA2IAAAQIh5AAQAAA9ATAaQAUAaApAAQASAAAVgEIABALQgQAQgSAHQgRAGgPAAQgqAAgagkgAgahcQgMAYgCAjIBSAAIAAgIQAAgpgJgRQgJgSgRAAQgWAAgLAZg");
	this.shape_321.setTransform(1462.8,574.5);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("Ag+D3QAUgMAMgQQALgPAGgTQAGgUACgYQABgYAAgfIAAkKIAAgaIAAgVQAAgIgFgCIgYgLIAAgMIAvABIAwgBIABAMIgYALQgFABAAAHIAAAWIgBAaIAAECQAAAcgBAYQgCAXgDASQgEASgHAOQgGAOgKALQgKALgPAIQgOAJgUAGg");
	this.shape_322.setTransform(1445.7,573.8);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AA+CIIgrAAIgBgLIAUgIQAEgDABgGIAAgSIAAh9QAAgigMgQQgLgPgVAAQgUAAgVARIAAB7IABBCQAAAIAEACIAUAJIABALIgrAAIguAAIAAgLIAWgKQAFgCAAgHIAAgjIAAhgIgBhGIgagLIAAgJQAggKAdgKIACACIAAAhQAigjAcAAQAcAAAPAWQAQAXAAAqIAABkIAAA1QAAAIAFACIAWAKIAAALIgsAAg");
	this.shape_323.setTransform(1419.4,574.2);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("Ag+B1QgPgXAAgpIAAg8IgBhbIgagLIgBgKQAigJAdgLIACACQgBAhAAA1IAABaQAAAjALAQQALAPATAAQAUAAAVgPIAAh6IAAhCIgagLIgBgKQAigJAdgLIACACQgCAjAAA1IABB+IABASQABAIADAEQACADAGACIAOACIABALQgJAGgMAEQgLAFgFgBQgTABgHghQgeAhgdAAQgfAAgPgXg");
	this.shape_324.setTransform(1396.1,574.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AhXDAIgBgCIAJhiIAJgCIAOBSQAUAMAWAAQAcAAAQgTQAQgTAAgjQABgSgGgOQgFgOgJgKQgJgKgLgIIgXgQQgNgJgNgKQgNgJgKgNQgKgOgHgTQgGgTAAgaQAAg0AegcQAdgcArAAQAeAAAiAKIABACIgLBZIgIACIgNhHQgUgKgRAAQgZAAgPATQgQASAAAgQABATAFAOQAFAOAJALQAJAKAMAJIAWAQQAOAIAMAKQANAJALAMQAJANAGASQAHASAAAYQAAA5geAeQgfAeguAAQgfAAgmgPg");
	this.shape_325.setTransform(1375.4,567.7);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("AgwC7QgSgVAAgoQAAhCADiOIgwgMIgCgOIA1gEIAZhTIAjgKIACACIgBBOIAAAMIBnAAIAAAhIhnAAQgBByAABHQAAAjAKAOQAKANAeAAQAXAAAmgGIACAQQg7AdguAAQglAAgTgTg");
	this.shape_326.setTransform(1649.5,435.9);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("ABtCiIhLABIgCgOIAjgKQAHgDABgIIAAgVIAAiUQAAgqgUgSQgUgTgmAAQgiAAglAUIAACUIAABPQABAJAHACIAkALIAAAOIhLgBIhQABIgBgOIAogMQAHgDABgHIAAgqIAAh0QAAgtgBgmIgugMIgBgMQA5gLAzgNIADACIAAAoQA8gqAyAAQAxAAAbAbQAcAbAAAyIAAB4IABA/QAAAJAJADIAmAMIAAAOIhOgBg");
	this.shape_327.setTransform(1617.2,439.6);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("AhgB8QgvgqAAhNQAAhLArgwQAsgwBHAAQA9AAAiAkQAhAkAABAIgBATIjXAAQABBJAiAfQAjAgBIgBQAhAAAmgFIABAOQgcASggAIQgeAIgbAAQhJAAgvgrgAgvhuQgVAdgDAqICRAAIAAgKQAAgxgQgVQgPgVgeAAQgnAAgVAeg");
	this.shape_328.setTransform(1580,440);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("ADQCiIhLABIgBgOIAhgKQAJgDAAgIIABgVIAAiUQAAgqgUgSQgTgTglAAQgnAAghAZQAFAQgBAVIAAB5IABBAQABAJAIADIAjAKIAAAOIhKgBIhKABIgCgOIAggKQALgDAAgIIAAgVIAAiUQAAgqgTgSQgTgTglAAQgiAAgiAUIAACUIAABPQABAKAHABIAkALIAAAOIhLgBIhQABIgBgOIAngMQAIgCABgIIAAgqIAAh0QAAgtgBgmIgugMIgBgMQA4gLA0gNIADACIAAAoQA4gqAzAAQA9AAAbAwQA2gwA/AAQAwAAAaAbQAbAbAAAyIAAB4IABA/QABAJAIADIAnAMIAAAOIhPgBg");
	this.shape_329.setTransform(1533,439.6);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFFFF").s().p("AhgB8QgvgqABhNQgBhLAsgwQArgwBIAAQA8AAAhAkQAiAkABBAIgBATIjXAAQAABJAjAfQAiAgBIgBQAhAAAlgFIADAOQgeASgeAIQgfAIgbAAQhJAAgvgrgAgvhuQgVAdgDAqICQAAIAAgKQAAgxgPgVQgPgVgeAAQgnAAgVAeg");
	this.shape_330.setTransform(1485.8,440);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("AglCiIhQABIgBgOIAogMQAIgDAAgHIABgqIAAh0QAAg4gCgbIgtgMIgCgMQA5gLA0gNIADACIAAAoQA+gqA9AAIACACIgUBqIgNACQgKgdgJgRQgJgSgTAAQgSAAgbARIAACTIABBMQAAAJAHADIAuANIABAOIhWgBg");
	this.shape_331.setTransform(1456.8,439.6);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AABDxIhQABIgBgOIAngLQAJgDAAgIIABgtIAAhyQAAgtgCglIgtgMIgBgMQA7gLAygMIAEACQgDAsAAA1IAACDIABA5QABAJAHADIApALIAAAOIhQgBgAggitQgLgLAAgRQAAgTALgKQAMgLASAAQAPAAAMAKQAKAJAAATQAAASgLALQgLAMgSAAQgRAAgKgLg");
	this.shape_332.setTransform(1433.2,431.6);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AhuCMQgbgbAAgyIAAhIQAAhJgCglIgtgLIgCgNQA9gKAygNIAEACQgCAoAAA/IAABsQAAApATATQAUASAiAAQAjABAmgUIAAiQIgBhRIgugLIgBgNQA7gKAzgNIADACQgCApAABAQAAB7ABAcIACAWQACAIAFAGQAEAEAKACQAJACAQAAIABANIgkAMQgVAGgHAAQgjgBgLgmQg1Ang1AAQg1AAgbgbg");
	this.shape_333.setTransform(1403,440);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("ABhD0IhQABIgCgOIAogLQAIgDAAgIIABhnIAAgxQg0AggwAAQg/AAgmgsQgmgtAAhCQAAhSAxgwQAxgwBVAAQAkAAAwAIIAjgIIADACQgCBBAABbIAADgIAABGQAAAJAIACIAnAMIABAOIhPgBgAhMizQgdAjAABBQAAA7AbAhQAaAjAzAAQAiAAAfgMIAAj0QgbgHgZAAQg7AAgdAkg");
	this.shape_334.setTransform(1364.8,447.8);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AhgB8QgvgqAAhNQABhLAqgwQAsgwBIAAQA8AAAhAkQAjAkgBBAIgBATIjWAAQgBBJAkAfQAiAgBJgBQAgAAAmgFIACAOQgeASgfAIQgeAIgaAAQhLAAgugrgAgvhuQgVAdgDAqICQAAIAAgKQAAgxgPgVQgPgVgeAAQgnAAgVAeg");
	this.shape_335.setTransform(1328.1,440);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("ACPDyIgTgDIgPgFIgNgIQgOgLgOgUQgOgUgOgZIgfg2QgPgdgSgbIgJgNQgDgFgFgCQgEgDgGgBIgOgCIgYAAIAAB2IAAAlIAAAeQABALAIACIAmAMIABAOIhRgBIhVABIgBgOIAqgNQAIgCABgJIABgeIAAgmIAAkUIAAgfIgBgaQAAgJgIgCIgrgOIAAgOIBWABIAVAAIAfgCIAfgBIAUAAQBOAAAnAdQAnAeAAA4QAAAzgbAgQgbAfg3AQQAWAhASAfIAiA4IAdAtQANATALAMIAMAKIAMAHIAOAFIAPAEIABAPQgZADgQAAIgZgBgAhCjVIgXACIAADIIAmABQA6AAAcgZQAbgZAAg2QAAg0gagYQgagYg3AAIgVABg");
	this.shape_336.setTransform(1292.2,432);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("AA+CIIgrABIgBgNIAUgIQAEgCABgHIAAgSIAAh7QAAgkgMgOQgLgQgVAAQgUAAgVAQIAAB8IABBCQAAAIAEACIAUAIIABANIgrgBIguABIAAgNIAWgJQAFgDAAgGIAAgjIAAhgIgBhGIgagKIAAgKQAggKAdgLIACADIAAAhQAigkAcAAQAcAAAPAYQAQAWAAAqIAABkIAAA1QAAAHAFADIAWAJIAAANIgsgBg");
	this.shape_337.setTransform(548.3,648);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("AhCBmQgZgmAAg9QAAg+AagoQAagoAqAAQAoAAAZAlQAYAkAAA+QAABAgbAoQgaAogoAAQgpAAgYgmgAgmhYQgNAcAAA6QAAA0ANAiQAOAiAZgBQAZAAANgdQANgeAAg6QAAg2gNgeQgOgggZAAQgZAAgNAcg");
	this.shape_338.setTransform(525.7,648.4);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("AAADKIgsABIgBgMIAWgKQAFgCABgHIAAglIAAhgIgBhEIgagKIgBgKQAigJAdgLIABACIgBBRIAABuIAAAvQABAIAEACIAWAKIABAMIgugBgAgSiRQgGgJAAgOQAAgQAHgJQAGgJALAAQAIAAAGAIQAGAIAAAQQAAAPgGAKQgHAJgJAAQgJAAgHgJg");
	this.shape_339.setTransform(509.5,641.4);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFFFF").s().p("AhCB6QAGglAFgjIAHgCIAOA+QALAFARAAQARAAALgKQALgLAAgUQAAgSgHgLQgIgLgQgHIgTgKQgagNgKgRQgKgSAAgbQAAglATgWQAUgWAeAAQAeAAAYANIgKBFIgHABIgNg2QgLgFgNABQgSgBgLALQgLALAAASQAAARAHAKQAIAKATAJIAPAJQAbANANAQQAMASAAAcQAAAogVAWQgVAXgfAAQgdAAgfgSg");
	this.shape_340.setTransform(495.7,648.4);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFFFF").s().p("AhCBmQgZgmAAg9QAAg+AagoQAagoAqAAQAoAAAZAlQAYAkAAA+QAABAgbAoQgaAogoAAQgpAAgYgmgAgmhYQgNAcAAA6QAAA0ANAiQAOAiAZgBQAZAAANgdQANgeAAg6QAAg2gNgeQgOgggZAAQgZAAgNAcg");
	this.shape_341.setTransform(476.9,648.4);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("AABDXIgtABIAAgMIAVgJQAFgDABgGIAAhIIAAh1IgBirIgagMIgBgJQAjgKAcgKIABACIgBCCIAAC5IABBTQAAAHAFADIAVAJIABAMIgtgBg");
	this.shape_342.setTransform(460.5,640.1);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFFFF").s().p("Ag1DNIguABIAAgMIAWgKQAFgCAAgHIAAg/IAAhzQAAh/gBghIgZgLIgBgKQAggKAdgLIACADIAAAcQAegfAbAAQAkABAWAjQAVAkAAA5QAABGgbAoQgcAogxAAQgPABgRgFIAAA/IABAoQAAAIAFACIAZALIABAMIgxgBgAgkidIAADJQARAGAQAAQAfAAAQgeQARgcAAg4QAAg0gQgbQgQgagcgBQgUAAgRANg");
	this.shape_343.setTransform(443.5,654.9);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFFFFF").s().p("AAyCEIglABIgBgMIARgHIgkhXIgnBXIARAHIAAAMIgcgBIgiABIgBgMIATgHQAGgDAFgKIAuhgIgthqQgEgJgHgDIgRgHIgBgMIAtABIAkgBIABAMIgRAGIAgBRIAkhQIgQgHIgBgMIAdABIAggBIABAMIgTAHQgFACgEAJQgUAngYAzQAZA8AZA2QADAJAHADIARAHIAAAMIgrgBg");
	this.shape_344.setTransform(423.6,648.4);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("AgBDIIguAAIgwABIgBgNIAYgKQAFgCAAgHIABgaIAAgfIAAjnIAAgaIgBgWQAAgHgEgCIgYgMIgBgMIAwABIAwAAIBagBIACACIgMBZIgHACIgNhCIhYAAIAACdIARAAIAtAAQAFgBABgHIAHgmIAKgBIAAA7IAAA6IgKABIgHgoQgCgHgEAAIgtgBIgRAAIAABoIAAA/IBcAAIAYhJIAJgCIgEBkIgCACIhcgBg");
	this.shape_345.setTransform(402.5,641.6);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("AhGB5QgRgUAAgkQABgsAagVQAbgUA4AAIAAgWQAAgggLgQQgMgPgWAAQgRAAgbAKIgFgTQAngZAcAAQAeAAARAXQARAXAAArIgBB2QgBAPACAJQAAAIADAFQADAFAGACQAFACAKAAIABALQgJAFgMAFQgMAEgEABQgUgBgGgcQgbAdgYAAQgbAAgRgTgAggAOQgPANAAAdQAAAcAKALQAKALARAAQASAAAOgKIABhdQgoAAgPALg");
	this.shape_346.setTransform(372.6,648.4);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFFFF").s().p("AhKC/QgVgRAAgcQAAghAggoQgUgMAAgSQAAgaAbguQgegbAAg0QAAgsAWgbQAWgcAjAAQAIAAAQAEQAPAEAIAAIA3gBIABAMIgsARQAOAYAAAhQAAAugVAcQgWAbggAAQgSAAgPgJQgLAYAAAOQAAAIAGADQAFADAOAAIAagBIAagBQAfAAAUARQAUASAAAiQAAAzgiAeQgiAegrAAQgkAAgWgRgAhBCBQAAAaAOAOQANAOAYAAQAbAAAVgTQAVgSAAghQAAgSgKgKQgKgKgdAAIgVABIgYABIgNgBQgNAdAAAYgAglimQgJASAAAkQAAAlAKAUQAJAUATAAQARAAAJgSQAJgUAAgkQAAgjgKgVQgJgUgSAAQgSAAgJATg");
	this.shape_347.setTransform(353.3,655.1);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("Ag2BoQgagkgBg/QABg/AYgpQAYgoAoAAQAkAAASAeQAUAegBA2IAAAQIh5AAQAAA8ATAbQAUAbApgBQASABAVgGIABANQgQAPgSAGQgRAHgPAAQgqAAgagkgAgahcQgMAYgCAkIBSAAIAAgJQAAgpgJgSQgJgRgRAAQgWAAgLAZg");
	this.shape_348.setTransform(333.3,648.4);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFFFFF").s().p("AhviHIAAD2IABA5QABAHAEADIAWAKIAAAMIgngBIgnABIgBgMIAXgLQAGgCAAgHIAAg5IAAjnIAAgwQgBgHgEgCIgYgLIAAgMIAoABIAigBIBaE4IBZk4IAhABIAngBIABAMIgZALQgFACABAHIgBAwIAADnIABA5QgBAHAGACIAXALIABAMIgygBIgtABIgBgMIAXgKQAEgDAAgHIABg5IAAj2IhgFOIgOACg");
	this.shape_349.setTransform(306.2,641.7);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("AA+CIIgrAAIgBgLIAUgIQAEgDABgGIAAgSIAAh9QAAgigMgQQgLgPgVAAQgUAAgVARIAAB7IABBCQAAAIAEACIAUAJIABALIgrAAIguAAIAAgLIAWgKQAFgCAAgHIAAgjIAAhgIgBhGIgagLIAAgJQAggKAdgKIACACIAAAhQAigjAcAAQAcAAAPAWQAQAXAAAqIAABkIAAA1QAAAIAFACIAWAKIAAALIgsAAg");
	this.shape_350.setTransform(497,574.2);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("AhCBmQgZgmAAg9QAAg+AagnQAagpAqAAQAoAAAZAlQAYAlAAA8QAABAgbApQgaAogoAAQgpAAgYgmgAgmhYQgNAdAAA5QAAA0ANAiQAOAhAZABQAZgBANgdQANgeAAg5QAAg2gNggQgOgfgZAAQgZAAgNAcg");
	this.shape_351.setTransform(474.5,574.5);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FFFFFF").s().p("AABDKIgtABIgBgMIAXgKQAEgCABgHIAAglIAAhgIgBhEIgagKIAAgKQAhgJAdgLIABACIgBBRIAABuIABAvQgBAIAFACIAXAKIAAAMIgtgBgAgSiRQgGgJAAgOQAAgQAHgJQAGgJAKAAQAJAAAGAIQAGAIAAAQQAAAPgHAKQgGAJgJAAQgKAAgGgJg");
	this.shape_352.setTransform(458.2,567.5);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFFFF").s().p("AhCB6QAGglAFgkIAHgBIAOA+QALAFARABQARAAALgLQALgLAAgUQAAgSgHgKQgIgLgQgIIgTgKQgagNgKgRQgKgSAAgbQAAglATgWQAUgWAeAAQAeAAAYANQgGAhgEAjIgHADIgNg3QgLgEgNAAQgSAAgLAKQgLAKAAASQAAASAHAKQAIAKATAKIAPAHQAbAOANARQAMAQAAAdQAAAngVAYQgVAWgfAAQgdAAgfgSg");
	this.shape_353.setTransform(444.5,574.5);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FFFFFF").s().p("AhCBmQgZgmAAg9QAAg+AagnQAagpAqAAQAoAAAZAlQAYAlAAA8QAABAgbApQgaAogoAAQgpAAgYgmgAgmhYQgNAdAAA5QAAA0ANAiQAOAhAZABQAZgBANgdQANgeAAg5QAAg2gNggQgOgfgZAAQgZAAgNAcg");
	this.shape_354.setTransform(425.6,574.5);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FFFFFF").s().p("AABDXIgtABIAAgMIAVgKQAFgBABgIIAAhIIAAh0IgBirIgagLIgBgKQAjgJAcgLIABACIgBCBIAAC6IABBSQAAAJAFABIAVAKIABAMIgtgBg");
	this.shape_355.setTransform(409.3,566.2);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FFFFFF").s().p("Ag1DMIguABIAAgLIAWgKQAFgCAAgHIAAg/IAAh0QAAh+gBgiIgZgLIgBgJQAggKAdgKIACACIAAAbQAegdAbAAQAkgBAWAlQAVAjAAA5QAABGgbAoQgcApgxAAQgPgBgRgEIAAA/IABAoQAAAIAFACIAZALIABALIgxgBgAgkidIAADKQARAFAQAAQAfAAAQgeQARgdAAg3QAAg1gQgaQgQgagcAAQgUAAgRAMg");
	this.shape_356.setTransform(392.2,581.1);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FFFFFF").s().p("AAyCEIglABIgBgMIARgGIgkhXIgnBWIARAHIAAAMIgcgBIgiABIgBgMIATgIQAGgCAFgKIAuhgIgthpQgEgKgHgDIgRgIIgBgLIAtAAIAkAAIABALIgRAHIAgBRIAkhRIgQgHIgBgLIAdAAIAgAAIABALIgTAIQgFACgEAIQgUApgYAyQAZA8AZA2QADAIAHADIARAIIAAAMIgrgBg");
	this.shape_357.setTransform(372.4,574.5);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFFFF").s().p("AgBDIIguAAIgwABIgBgNIAYgKQAFgCAAgHIABgaIAAgfIAAjnIAAgaIgBgWQAAgHgEgCIgYgMIgBgMIAwABIAwAAIBagBIACACIgMBZIgHACIgNhCIhYAAIAACdIARAAIAtAAQAFgBABgHIAHgmIAKgBIAAA7IAAA6IgKABIgHgoQgCgHgEAAIgtgBIgRAAIAABoIAAA/IBcAAIAYhJIAJgCIgEBkIgCACIhcgBg");
	this.shape_358.setTransform(351.3,567.7);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFFFFF").s().p("AiECRQALgvAIgqIARgDIAZBLQAVAGAgABQAcAAATgMQASgLAAgUQAAgRgLgLQgLgMgggLIgqgOQgogPgVgUQgTgXgBggQAAgzAogaQAngbBEAAQA5AAAuARQgKAtgIAnIgTAEIgUhDQgWgEgYAAQgfgBgTALQgUAMAAATQAAAQAJAIQAIAJAVAHIA2ATQAxARAWAWQAXAZAAAfQAAAzgqAbQgqAchFAAQg5AAg3gXg");
	this.shape_359.setTransform(448.9,452);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FFFFFF").s().p("AABEBIhjABIgCgRIAsgLQAIgDAAgHIABgtIAAknIgBhTIgzgOIgCgOQBWgNA+gNIAEADQgCAvAAA1IAAE7IABA5QAAAKAIACIArALIABARIhlgBg");
	this.shape_360.setTransform(421.2,442.2);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFFFFF").s().p("AABEBIhjABIgCgRIAsgLQAIgDAAgHIABgtIAAknIgBhTIgzgOIgCgOQBWgNA+gNIAEADQgCAvAAA1IAAE7IABA5QAAAKAIACIArALIABARIhlgBg");
	this.shape_361.setTransform(398.2,442.2);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FFFFFF").s().p("AABD0IhjABIgCgQIArgMQAIgCAAgIIACgtIAAhuQAAgsgCglIgxgNIgCgOQBUgNA+gNIAFACQgDAwAAA0IAACBIABA4QABAKAHACIArAMIABAQIhkgBgAgqicQgOgOAAgWQAAgZAPgOQAPgOAZABQAVgBAPANQAOANAAAXQAAAYgOAPQgQAOgYAAQgWAAgPgNg");
	this.shape_362.setTransform(375.3,443.4);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFFFFF").s().p("ABzEBIg0ABIgagrQgng8gvg+ICCiAIglgKIgCgQIBIACIBPgCIACARQgrAJgQAIQgQAJgTARIg+A8IBoCSQALAOAJAHQAKAHAgAIIACARIhcgBgAhnEBIhkABIgCgRIAsgLQAIgDAAgHIABgtIAAknIgBhTIgzgOIgCgOQBWgNA/gNIAEADQgCAvAAA1IAAE8IABA5QAAAJAIADIAlAKIABARIhfgBg");
	this.shape_363.setTransform(342.9,442.2);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FFFFFF").s().p("AiaDlIgCgDIASh7IAVgDIAaBpQAZAKAeABQAqAAAbgWQAagXAAgkQAAgVgIgPQgJgOgOgMQgOgLgQgJIgmgSIgpgWQgVgKgQgQQgRgQgKgWQgKgXAAggQAAhBAxgmQAzgnBOAAQAzAABAAQIADADIgWBuIgSADIgZhbQgWgJgaAAQgjAAgZAVQgZAVAAAiQAAAUAIAOQAJAPANALQANALARAJIAkASQAVAKAVAMQAWAMAQAPQARAQALAWQAKAXAAAgQAABGg0AnQg1AohUAAQg+AAg8gUg");
	this.shape_364.setTransform(302.8,444.1);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFFFFF").s().p("AlIIEQhahrAAicQAAjIB4huQB3huDVAAQA0AABAAMQAAi0gEiqIhtgfIgEgbQCQgcB5geIAHAHQgFCtAADHIAAG4IABDeQAAApADAZQADAZALAOQALANAXAFQAWAEApABIAEAgQgkAOgyAOQgyANgSAAQhRAAgdhcQh9Bdh3AAQiWAAhZhqgAizgSQhIBNAAChQAACLBABTQBABTB0AAQBLAABSgqIAAo0Qg2gRhCAAQiJAAhIBQg");
	this.shape_365.setTransform(1159.4,204.1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFFFFF").s().p("AhZGAQhQAAhsACIgEghIBegcQATgGABgTIABhjIAAkUQAAiEgDhBIhsgdIgEgcQCHgZB7gfIAIAFIAABfQCVhkCQAAIAEAFQgYB4gWCCIghAGQgWhFgVgqQgVgqguAAQgrAAhBApIAAFeQAAB+ABA3QACAVASAGIBrAfIADAhQh+gChPAAg");
	this.shape_366.setTransform(1083.1,225.7);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFFFFF").s().p("AkoFVQhEg4AAhlQAAh9Bvg7QBvg6DuAAIAAg/QABhbgvgsQgvgshgAAQhKAAhvAcIgTg2QCfhFB5AAQB8AABIBBQBIBAgBB7IgDFQQgBApACAZQADAaANANQAKANAYAGQAYAFAnABIAFAfQgkAOgyAOQgyAOgRAAQhQAAgehRQhyBRhlAAQhyAAhGg3gAiIApQg/AjAABTQAABNAqAgQApAgBHAAQBPAAA8gcIACkJQiqAAg+Aig");
	this.shape_367.setTransform(1011,226.7);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFFFF").s().p("AgQF3QirgBiPADIgGgKIDmlOQBbiGCKjRIk8AAIg1CjIggAFQgTh+gWhlIADgHQClADCZAAQCcAACogDIAGAJIjhFOQhrCfh3C4IFBAAIBmipIAhgFQgNBygHB6IgFAFQiMgDi8ABg");
	this.shape_368.setTransform(930.1,226.6);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFFFFF").s().p("AABI8QhPAAhuACIgDghIBegcQATgGABgTQACgfAAhLIAAkPQAAhqgDhZIhsgdIgEgcQCOgaB4geIAHAFQgEBqAAB9IAAE3QAABiABAlQACAWATAGIBeAcIABAhQhwgChPAAgAhOmcQgagZAAgqQAAgrAbgZQAbgaAsAAQAmAAAaAXQAZAXAAArQAAArgbAbQgbAbgpAAQgoAAgagZg");
	this.shape_369.setTransform(867.6,206.9);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FFFFFF").s().p("AgEkhIkqNXIhSAHIlEvjQgNgmgQgUQgRgVgegJIhKgXIgCgjQBQAEBsAAQBjAAB8gEIADAjIhMAWQgRAEgIAIQgHAIAAAQQAAAQAIAbIAUBFIDcK3IEtuCIBIgGIEkOQIDlq+IAXhKQAIgcAAgOQAAgPgIgGQgHgHgQgEIhMgUIgCgmQBYAEBaAAQBXAABTgEIADAjIhSAaQgYAIgOAPQgPAPgNAmIlgPlIhSAHg");
	this.shape_370.setTransform(760.1,207.4);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FF9900").s().p("Eh7RBF7QAAjPiyiSQiziTj9AAMAAAh8NQD9AACziTQCyiSAAjPMD2jAAAQABDPCyCSQCzCTD8AAMAAAB8NQj8AAizCTQiyCSgBDPg");
	this.shape_371.setTransform(959.4,562);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.beginBtn,p:{x:973.2,y:483.7}}]}).to({state:[{t:this.shape},{t:this.beginBtn,p:{x:975,y:488.2}}]},1).to({state:[{t:this.shape_1}]},18).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.wizardBtn},{t:this.bard_button},{t:this.hunter_button}]},1).to({state:[{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.select_btn,p:{scaleX:1.004,scaleY:1,x:1502.3,y:908.5}},{t:this.instance},{t:this.bardJob}]},1).to({state:[{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.SelectJob},{t:this.instance_1},{t:this.hunterJob}]},1).to({state:[{t:this.shape_371},{t:this.shape_282},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.select_btn,p:{scaleX:1,scaleY:1.207,x:933.6,y:911.8}},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.wizardJob}]},1).to({state:[]},1).wait(1));

	// Final
	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FFFFFF").s().p("AiSCRQhBhAAAhZQAAhSA9g7QA9g7BZAAQBcAAA8A9QA8A8gBBfImAAAQAKBJA0AtQAzAtBLAAQAqAAAvgOQAugOAdgXQAJgHAGAAQAHAAAFAGQAGAGAAAHQAAAIgHAHQgWAWg3AUQg3AUg6AAQhgAAhBhAgAhxiDQgvAngMA/IFZAAQgLg+gwgnQgwgohCAAQhBAAgwAng");
	this.shape_372.setTransform(1233.8,369.5);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFFFFF").s().p("AiVCXQg6g7AAhZQAAhaA8g9QA8g8BaAAQBWAAA7A0IAAgNQAAgOAGgFQAFgGAIAAQAJAAAFAGQAFAFAAAOIAABWQAAAOgFAFQgFAGgJAAQgIAAgEgFQgGgFgBgMQgCgggogdQgngdhDAAQhTAAgrA1QgsA1AABCQAABKAwAvQAwAwBMAAQAsAAAugQQAtgRAlgjQAJgJAHAAQAIAAAGAFQAEAFAAAIQAAATgtAeQhJAwhaAAQhaAAg7g6g");
	this.shape_373.setTransform(1180.2,369.5);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FFFFFF").s().p("AimEjQgOAAgGgFQgGgGABgIQgBgIAGgFQAGgFAOAAICUAAIAAk5IhuAAQgOAAgFgFQgHgFAAgIQAAgJAGgFQAGgGAOAAICSAAIAAFfICVAAQANAAAHAFQAFAFABAIQgBAIgFAGQgHAFgNAAgAgljBIAAhhIA2AAIAABhg");
	this.shape_374.setTransform(1124.3,359.8);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFFFFF").s().p("AiVCTQg9g9AAhWQAAhVA9g9QA+g+BXAAQBYAAA+A9QA9A9AABWQAABWg9A9Qg+A+hYAAQhXAAg+g+gAh5h3QgzAyAABFQAABGAzAzQAyAyBHAAQBHAAA0gyQAygyAAhHQAAhGgygyQg0gyhHAAQhHAAgyAzg");
	this.shape_375.setTransform(1068.9,369.5);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFFFF").s().p("ABYEaQgPAAgFgFQgGgGAAgIQAAgJAGgFQAFgEAPgBIAqAAIAAjnQAAgogegcQgdgbg1AAQgoAAgdAUQgVAPgwA1IAADuIAqAAQAOABAFAEQAGAFAAAJQAAAIgGAGQgFAFgOAAIh7AAQgNAAgHgFQgFgGAAgIQAAgJAFgFQAHgEANgBIAqAAIAAnnIgyAAQgOAAgFgFQgHgGABgIQgBgIAHgFQAFgGAOAAIBZAAIAADpQAjgnAhgQQAigRAnABQAsAAAfAPQAfAPAUAhQAVAgAAAiIAADqIAqAAQAOABAGAEQAFAFAAAJQAAAIgFAGQgGAFgOAAg");
	this.shape_376.setTransform(1013.5,360.7);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFFFF").s().p("AiVCXQg6g7AAhZQAAhaA8g9QA8g8BaAAQBWAAA7A0IAAgNQAAgOAGgFQAFgGAIAAQAJAAAFAGQAFAFAAAOIAABWQAAAOgFAFQgFAGgJAAQgIAAgEgFQgGgFgBgMQgCgggogdQgngdhDAAQhTAAgrA1QgsA1AABCQAABKAwAvQAwAwBMAAQAsAAAugQQAtgRAlgjQAJgJAHAAQAIAAAGAFQAEAFAAAIQAAATgtAeQhJAwhaAAQhaAAg7g6g");
	this.shape_377.setTransform(959.4,369.5);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FFFFFF").s().p("AiKEHQgvgcgbgzQgbgyAAg1QAAg2AbgxQAbgyAvgcQAvgbA0AAQBiAABDBaIAAjVIgyAAQgOAAgGgGQgGgFAAgIQAAgJAGgFQAGgGAOAAIBYAAIAAIOIAyAAQAOAAAGAFQAGAFAAAJQAAAIgGAFQgGAFgOAAIhYAAIAAhKQhCBZhkABQgzAAgvgbgAiZgoQgwAxAABIQAABHAwAyQAxAxBDABQBCgBAwgxQAxgyAAhHQAAhIgxgxQgwgxhCAAQhDAAgxAxg");
	this.shape_378.setTransform(850.2,361.5);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFFFFF").s().p("AiUCTQg+g9AAhWQAAhVA+g9QA9g+BYAAQBXAAA9A9QA+A9AABWQAABWg+A9Qg9A+hXAAQhYAAg9g+gAh5h3QgzAyAABFQAABGAzAzQAyAyBHAAQBHAAAzgyQAzgyAAhHQAAhGgzgyQgzgyhHAAQhHAAgyAzg");
	this.shape_379.setTransform(792.9,369.5);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FFFFFF").s().p("AiUCTQg+g9AAhWQAAhVA+g9QA9g+BXAAQBYAAA+A9QA9A9AABWQAABWg9A9Qg+A+hYAAQhXAAg9g+gAh5h3QgzAyAABFQAABGAzAzQAyAyBHAAQBHAAA0gyQAygyAAhHQAAhGgygyQg0gyhHAAQhHAAgyAzg");
	this.shape_380.setTransform(737.7,369.5);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FFFFFF").s().p("AhVECQgtgSggggQghghgRgoQgSgoAAg9IAAhEQAAg+Afg7QAeg6A2gfQA1gfA/AAQBaAABAAxQgBgWACgEQABgFAGgDQAFgDAFAAQAJAAAFAGQAFAFAAAOIAABVQAAAOgFAGQgFAFgJAAQgHAAgFgFQgFgFgBgNQgDgmgugYQgwgZg3AAQgzAAgpAXQgqAXglA/QgYAqgBA1IAABEQAABeA6A3QA5A3BlAAQAiAAAdgHQAdgHAogSIAAiMIiDAAQgNAAgGgFQgFgFAAgJQAAgIAFgGQAGgFANAAIC2ABQANAAAHAFQAFAFAAAIQAAAGgDAFQgEAFgFACQgEABgXAAIAACiQgrAYgqAMQgrAMgrAAQg7AAgvgSg");
	this.shape_381.setTransform(683.8,362.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372}]},29).wait(1));

	// introThing
	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FFFFFF").s().p("AiSCRQhBhAAAhZQAAhSA9g7QA9g7BZAAQBcAAA8A9QA8A8gBBfImAAAQAKBJA0AtQAzAtBLAAQAqAAAvgOQAugOAdgXQAJgHAGAAQAHAAAFAGQAGAGAAAHQAAAIgHAHQgWAWg3AUQg3AUg6AAQhgAAhBhAgAhxiDQgvAngMA/IFZAAQgLg+gwgnQgwgohCAAQhBAAgwAng");
	this.shape_382.setTransform(1726,1232.4);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FFFFFF").s().p("ABIEaQgNAAgGgGQgGgFAAgIQAAgIAGgGQAGgEANAAIAaAAIigioIgsAlIAACoIhYAAQgNAAgHgGQgFgFAAgIQAAgIAFgGQAHgEANAAIAyAAIAAnoIgyAAQgNABgHgGQgFgGAAgIQAAgIAFgFQAHgGANAAIBYAAIAAFbICgiGIgTAAQgOAAgGgFQgFgGgBgHQABgJAFgGQAGgFAOAAIB4AAQAPAAAFAFQAGAGAAAJQAAAHgGAGQgFAFgPAAIgrAAIiTB6IC6C/IAsAAQAOAAAFAEQAGAGAAAIQAAAIgGAFQgFAGgOAAg");
	this.shape_383.setTransform(1674.5,1223.6);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FFFFFF").s().p("AinEjQgNAAgGgFQgGgGABgIQgBgIAGgFQAGgFANAAICVAAIAAk5IhuAAQgNAAgHgFQgGgFAAgIQAAgJAGgFQAGgGAOAAICSAAIAAFfICVAAQANAAAHAFQAFAFAAAIQAAAIgFAGQgHAFgNAAgAgljBIAAhhIA2AAIAABhg");
	this.shape_384.setTransform(1616.5,1222.6);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FFFFFF").s().p("AimEaQgOAAgFgGQgHgFAAgIQAAgIAHgGQAFgEAOAAICUAAIAAnoIhtAAQgOABgFgGQgHgGABgIQAAgIAFgFQAHgGANAAICSAAIAAIOICUAAQAOAAAFAEQAHAGAAAIQAAAIgHAFQgFAGgOAAg");
	this.shape_385.setTransform(1561.2,1223.6);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FFFFFF").s().p("Ah0CrQgkgngBg0IAAjzIgzAAQgNAAgGgFQgGgGABgIQgBgIAGgGQAGgFANAAIBZAAIAAEZQAAAlAYAYQAXAXAjAAQBbAABMhUIAAjzIhFAAQgOAAgFgFQgGgGAAgIQAAgIAGgGQAFgFAOAAIBrAAIAAFfIAgAAQAOAAAFAEQAHAGAAAIQAAAIgHAFQgFAGgOAAIhGAAIAAg3QhNBGhYAAQg4AAgdgfg");
	this.shape_386.setTransform(1450.2,1233.1);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FFFFFF").s().p("AiVCTQg9g9AAhWQAAhVA9g9QA+g+BXAAQBXAAA/A9QA9A9AABWQAABWg9A9Qg/A+hXAAQhXAAg+g+gAh6h3QgyAyAABFQAABGAyAzQAzAyBHAAQBHAAA0gyQAygyAAhHQAAhGgygyQg0gyhHAAQhHAAgzAzg");
	this.shape_387.setTransform(1395.5,1232.4);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FFFFFF").s().p("AjLEZQgNAAgGgFQgGgFAAgJQAAgIAGgFQAGgGANAAIB2AAIBDiHIivleIgMAAQgNAAgGgFQgGgGAAgIQAAgGADgEQADgFAFgCQAEgCAKAAIBoAAQANAAAGAFQAGAGAAAIQAAAIgGAGQgGAFgNAAIgzAAICZE0ICYk0IgzAAQgNAAgGgFQgGgGAAgIQAAgIAGgGQAGgFANAAIBnAAQAOAAAGAFQAGAGAAAIQAAAGgEAFQgEAFgEACQgFABgUAAIjuHlIA6AAQANAAAGAGQAGAFAAAIQAAAIgGAGQgGAFgNAAg");
	this.shape_388.setTransform(1342.5,1241);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FFFFFF").s().p("AhLDvQgogfAAg0IAAj7IhGAAQgMAAgHgFQgFgFAAgJQAAgIAFgFQAHgGAMAAIBGAAIAAhvQAAgOAGgFQAFgGAIAAQAJAAAFAGQAGAFgBAOIAABvIDMAAQAOAAAFAGQAHAFAAAJQAAAIgHAFQgFAFgOAAIjMAAIAAD7QAAAgAbAWQAaAWAyAAQAmAAAsgLQAtgMAZgOQAIgGAGAAQAIAAAFAGQAGAFgBAIQAAAHgFAGQgOAOg4ASQg4ARgzAAQhBAAgmgfg");
	this.shape_389.setTransform(1229.9,1226.2);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FFFFFF").s().p("AixCuQgngiAAgyQAAg3AygoQAzgpBhAAQAZAAAeAEQAfADAjAHIAAg9QAAgfgdgXQgdgXg4AAQgsAAhPAaQgPAFgEAAQgHAAgFgGQgGgFABgIQgBgIAFgEQAGgHAtgMQBGgTAkAAQBHAAAnAkQAoAjAAAsIAAD5IAyAAQAPAAAFAFQAGAFAAAJQAAAIgGAFQgFAGgPAAIhYAAIAAg3QhSBGhcAAQhEAAgmgjgAiPAbQgjAaAAAlQAAAiAbAXQAaAYA0AAQAwAAAqgTQApgUAtgrIAAhTQgagHgegDQgegEggAAQhSAAguAjg");
	this.shape_390.setTransform(1175.3,1232.4);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FFFFFF").s().p("ABXEaQgOAAgFgGQgGgFAAgIQAAgIAGgGQAFgEAOAAIArAAIAAjoQAAgogdgcQgegbg0AAQgpAAgdAVQgVAOgxA0IAADwIArAAQAOAAAFAEQAGAGAAAIQAAAIgGAFQgFAGgOAAIh7AAQgOAAgGgGQgFgFAAgIQAAgIAFgGQAGgEAOAAIArAAIAAnoIgzAAQgOABgGgGQgFgGgBgIQABgIAFgFQAHgGANAAIBYAAIAADoQAkgnAigPQAggQAogBQAsAAAfAQQAfAPAVAhQAUAfAAAjIAADrIAqAAQAOAAAGAEQAFAGABAIQgBAIgFAFQgGAGgOAAg");
	this.shape_391.setTransform(1119.3,1223.6);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FFFFFF").s().p("AhLDvQgngfgBg0IAAj7IhGAAQgNAAgGgFQgFgFAAgJQAAgIAFgFQAGgGANAAIBGAAIAAhvQAAgOAGgFQAFgGAIAAQAJAAAFAGQAFAFAAAOIAABvIDMAAQAOAAAFAGQAHAFgBAJQABAIgHAFQgFAFgOAAIjMAAIAAD7QAAAgAbAWQAaAWAyAAQAmAAAsgLQAtgMAZgOQAIgGAGAAQAIAAAFAGQAGAFgBAIQAAAHgFAGQgOAOg4ASQg4ARgzAAQhBAAgmgfg");
	this.shape_392.setTransform(1064.3,1226.2);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FFFFFF").s().p("Ah9DIIAABKIhYAAQgNABgHgGQgFgFgBgJQABgIAFgFQAHgFANAAIAzAAIAAnnIgzAAQgNAAgHgGQgFgFgBgIQABgJAFgFQAHgGANABIBYAAIAAD6QBFhZBfAAQBTAAA6A8QA7A8ABBWQgBBYg7A9Qg7A9hSABQhhAAhDhagAhLgnQgxAwAABIQAABIAxAxQAwAxBBABQBCgBAxgxQAxgxAAhIQAAhIgxgwQgxgyhCAAQhBAAgwAyg");
	this.shape_393.setTransform(952.3,1224.3);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FFFFFF").s().p("AiVCTQg9g9AAhWQAAhVA9g9QA+g+BXAAQBYAAA+A9QA9A9AABWQAABWg9A9Qg+A+hYAAQhXAAg+g+gAh6h3QgyAyAABFQAABGAyAzQAzAyBHAAQBIAAAzgyQAygyAAhHQAAhGgygyQgzgyhIAAQhHAAgzAzg");
	this.shape_394.setTransform(898.7,1232.4);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFFFFF").s().p("Ah3F6QgNAAgGgFQgGgFABgJQgBgJAGgFQAGgGANAAIB3ABQAvAAAegfQAeggAAguIAAl5IjfAAQgNAAgHgEQgFgGAAgJQAAgHAFgGQAGgFAOgBIEFAAIAAGfQgBAwgTAgQgUAhgnAUQgcAOglAAgAAxkYIAAhhIA3AAIAABhg");
	this.shape_395.setTransform(838.5,1231.3);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FFFFFF").s().p("AiSCRQhBhAAAhZQAAhSA9g7QA9g7BZAAQBcAAA8A9QA8A8gBBfImAAAQAKBJA0AtQAzAtBLAAQAqAAAvgOQAugOAdgXQAJgHAGAAQAHAAAFAGQAGAGAAAHQAAAIgHAHQgWAWg3AUQg3AUg6AAQhgAAhBhAgAhxiDQgvAngMA/IFZAAQgLg+gwgnQgwgohCAAQhBAAgwAng");
	this.shape_396.setTransform(732.4,1232.4);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FFFFFF").s().p("ABYEaQgPAAgFgGQgGgFAAgIQAAgIAGgGQAFgEAPAAIAqAAIAAjoQAAgogegcQgdgbg1AAQgoAAgdAVQgVAOgxA0IAADwIArAAQAOAAAFAEQAGAGAAAIQAAAIgGAFQgFAGgOAAIh7AAQgNAAgHgGQgFgFAAgIQAAgIAFgGQAHgEANAAIAqAAIAAnoIgyAAQgNABgHgGQgFgGAAgIQAAgIAFgFQAHgGANAAIBYAAIAADoQAlgnAggPQAigQAngBQAsAAAfAQQAfAPAUAhQAVAfAAAjIAADrIAqAAQAOAAAGAEQAFAGAAAIQAAAIgFAFQgGAGgOAAg");
	this.shape_397.setTransform(677.7,1223.6);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FFFFFF").s().p("AhLDvQgngfAAg0IAAj7IhGAAQgOAAgFgFQgHgFAAgJQAAgIAHgFQAFgGAOAAIBGAAIAAhvQgBgOAGgFQAFgGAIAAQAJAAAFAGQAFAFABAOIAABvIDMAAQANAAAGAGQAFAFAAAJQAAAIgFAFQgGAFgNAAIjMAAIAAD7QgBAgAbAWQAaAWAyAAQAmAAAsgLQAtgMAYgOQAJgGAHAAQAGAAAGAGQAFAFABAIQAAAHgHAGQgOAOg3ASQg4ARgyAAQhBAAgngfg");
	this.shape_398.setTransform(622.7,1226.2);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FFFFFF").s().p("AhMDvQgngfABg0IAAj7IhHAAQgNAAgFgFQgGgFgBgJQABgIAGgFQAFgGANAAIBHAAIAAhvQAAgOAFgFQAFgGAIAAQAJAAAFAGQAFAFAAAOIAABvIDNAAQANAAAGAGQAFAFABAJQgBAIgFAFQgGAFgNAAIjNAAIAAD7QABAgAaAWQAaAWAyAAQAmAAAtgLQAsgMAYgOQAKgGAFAAQAIAAAFAGQAFAFAAAIQABAHgHAGQgOAOg3ASQg3ARgzAAQhCAAgngfg");
	this.shape_399.setTransform(512.3,1226.2);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FFFFFF").s().p("AiVCXQg6g7AAhZQAAhaA8g9QA8g8BaAAQBWAAA7A0IAAgNQAAgOAGgFQAFgGAIAAQAJAAAFAGQAFAFAAAOIAABWQAAAOgFAFQgFAGgJAAQgIAAgEgFQgGgFgBgMQgCgggogdQgngdhDAAQhTAAgrA1QgsA1AABCQAABKAwAvQAwAwBMAAQAsAAAugQQAtgRAlgjQAJgJAHAAQAIAAAGAFQAEAFAAAIQAAATgtAeQhJAwhaAAQhaAAg7g6g");
	this.shape_400.setTransform(458,1232.4);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FFFFFF").s().p("AiSCRQhBhAAAhZQAAhSA9g7QA9g7BZAAQBcAAA8A9QA8A8gBBfImAAAQAKBJA0AtQAzAtBLAAQAqAAAvgOQAugOAdgXQAJgHAGAAQAHAAAFAGQAGAGAAAHQAAAIgHAHQgWAWg3AUQg3AUg6AAQhgAAhBhAgAhxiDQgvAngMA/IFZAAQgLg+gwgnQgwgohCAAQhBAAgwAng");
	this.shape_401.setTransform(401.2,1232.4);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FFFFFF").s().p("AimEaQgOAAgFgGQgHgFABgIQgBgIAHgGQAFgEAOAAICUAAIAAnoIhtAAQgNABgGgGQgGgGgBgIQAAgIAHgFQAFgGAOAAICRAAIAAIOICVAAQAOAAAFAEQAGAGABAIQgBAIgGAFQgFAGgOAAg");
	this.shape_402.setTransform(346.8,1223.6);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FFFFFF").s().p("AiSCRQhBhAAAhZQAAhSA9g7QA9g7BZAAQBcAAA8A9QA8A8gBBfImAAAQAKBJA0AtQAzAtBLAAQAqAAAvgOQAugOAdgXQAJgHAGAAQAHAAAFAGQAGAGAAAHQAAAIgHAHQgWAWg3AUQg3AUg6AAQhgAAhBhAgAhxiDQgvAngMA/IFZAAQgLg+gwgnQgwgohCAAQhBAAgwAng");
	this.shape_403.setTransform(290.8,1232.4);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FFFFFF").s().p("AiaDXIAAAVQAAAOgFAFQgGAGgIAAQgIAAgGgGQgFgFAAgOIAAhoQAAgOAFgGQAGgGAIAAQAIAAAFAGQAGAFAAAMQACAqArAiQApAhBGAAQBHAAAqgjQAogkAAgwQAAgegPgXQgQgXgfgOQgWgJhEgMQhdgOgpghQgpggAAg8QgBg7AwgrQAvgqBOAAQBOAAA5AxIAAgMQAAgOAGgFQAEgGAJAAQAIAAAGAGQAFAFAAAOIAABgQAAANgFAGQgGAGgIAAQgIAAgFgFQgFgGgBgMQgCgmgkgeQgmgeg7AAQg9AAglAhQglAgAAArQAAAXAKASQALASARAMQARALAVAHQAWAHAtAIQBNAMAdANQAnARAUAfQAUAfAAAqQAABBgzAuQg1AthXAAQhiAAg6g9g");
	this.shape_404.setTransform(236.3,1225.6);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FFFFFF").s().p("AhpDJIAABJIhKAAQgLABgFgGQgEgFAAgJQAAgIAEgFQAFgFALAAIArAAIAAnnIgrAAQgLAAgFgGQgEgFAAgIQAAgJAEgFQAFgGALABIBKAAIAAD6QA6hZBQAAQBFAAAxA8QAxA8AABWQABBYgyA9QgzA9hDABQhSAAg4hZgAg/gnQgpAwAABIQAABHApAyQApAxA2ABQA3gBApgxQApgyAAhHQAAhIgpgwQgpgyg3AAQg2AAgpAyg");
	this.shape_405.setTransform(1746.2,884.9);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FFFFFF").s().p("Ah8CTQgzg9gBhWQABhVAzg9QAzg+BKAAQBIAAA0A9QAzA9AABWQAABWgzA9Qg0A+hIAAQhKAAgzg+gAhmh3QgqAyAABFQAABGAqAzQArAyA7AAQA8AAAqgyQAqgyABhHQgBhGgqgyQgqgyg8AAQg7AAgrAzg");
	this.shape_406.setTransform(1701.3,893);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FFFFFF").s().p("AhjF6QgLAAgFgFQgFgGAAgIQAAgIAFgGQAFgFALgBIBjABQAoAAAZgfQAZggAAguIAAl5Ii7AAQgLAAgFgEQgFgGAAgJQAAgIAFgFQAEgFAMAAIDaAAIAAGeQAAAwgQAgQgRAhghAUQgXAOggAAgAApkYIAAhhIAvAAIAABhg");
	this.shape_407.setTransform(1650.8,891.9);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FFFFFF").s().p("Ag/DvQghgfAAg0IAAj7Ig6AAQgMAAgEgFQgFgFAAgJQAAgIAFgFQAEgGAMAAIA6AAIAAhvQAAgOAFgFQAEgGAHAAQAHAAAEAGQAFAFAAAOIAABvICrAAQALAAAFAGQAFAFAAAJQAAAIgFAFQgFAFgLAAIirAAIAAD7QAAAgAWAWQAWAWAqAAQAfAAAmgLQAlgMAVgOQAHgGAFAAQAGAAAFAGQAEAFAAAIQAAAHgFAGQgMAOguASQgvARgqAAQg3AAgggfg");
	this.shape_408.setTransform(1562.7,886.8);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FFFFFF").s().p("Ah9CXQgwg7AAhZQAAhaAxg9QAyg8BMAAQBIAAAyA0IAAgNQAAgOAFgFQAEgGAHAAQAHAAAEAGQAFAFAAAOIAABWQgBAOgEAFQgEAGgHAAQgHAAgEgFQgEgFgBgMQgDgggggdQghgdg4AAQhFAAglA1QgkA1AABCQAABKAoAvQApAwA+AAQAlAAAngQQAmgRAegjQAJgJAGAAQAFAAAFAFQAFAFAAAIQAAATgnAeQg9AwhLAAQhMAAgxg6g");
	this.shape_409.setTransform(1517.2,893);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FFFFFF").s().p("Ah6CRQg2hAgBhZQABhSAzg7QAzg7BKAAQBNAAAyA9QAzA8gBBfIlBAAQAIBJArAtQArAtA+AAQAkAAAngOQAmgOAZgXQAHgHAGAAQAFAAAFAGQAFAGAAAHQgBAIgGAHQgSAWgtAUQgvAUgxAAQhQAAg2hAgAhfiDQgnAngKA/IEgAAQgJg+gognQgogog3AAQg3AAgoAng");
	this.shape_410.setTransform(1469.7,893);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FFFFFF").s().p("AiLEaQgLAAgGgGQgEgFAAgIQAAgJAEgFQAGgEALAAIB8AAIAAnoIhbAAQgMABgEgGQgGgGAAgIQABgIAFgFQAEgGAMAAIB5AAIAAIOIB8AAQANAAAEAEQAFAFAAAJQAAAIgFAFQgEAGgNAAg");
	this.shape_411.setTransform(1424,884.2);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FFFFFF").s().p("Ah6CRQg2hAgBhZQAAhSA0g7QAzg7BKAAQBNAAAzA9QAyA8gCBfIlAAAQAIBJArAtQArAtA+AAQAkAAAmgOQAngOAZgXQAHgHAGAAQAFAAAFAGQAFAGgBAHQAAAIgFAHQgTAWgtAUQgvAUgxAAQhPAAg3hAgAhfiDQgnAngKA/IEhAAQgKg+gognQgogog3AAQg3AAgoAng");
	this.shape_412.setTransform(1377.2,893);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FFFFFF").s().p("Ah5CjQAAAPgBAFQgCAEgEAEQgEADgFAAQgGAAgFgGQgEgGAAgNIAAhOQAAgOAEgFQAEgGAHAAQAHAAAFAGQAFAFAAAJQAAAVAIAOQANAWAdAOQAdAOApAAQA9AAAegcQAfgbAAgfQAAgjgfgVQgfgVg6gHQg6gGgagMQgagMgOgXQgOgXAAgbQAAgxAogcQAogdA3AAQBAAAApAmQAAgNAFgFQAEgGAHAAQAHAAAFAGQAEAFAAAOIAABBQAAANgEAGQgFAGgHAAQgGAAgEgFQgFgFgBgLQgCgbgVgRQgfgagyAAQg1AAgdAaQgWATAAAYQAAAbAaASQASANAzAGQBAAJAaALQAkAPASAbQASAcAAAgQAAAxgnAlQgmAmhLAAQhKAAgwgug");
	this.shape_413.setTransform(1331.6,893);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FFFFFF").s().p("Ah8CTQgzg9AAhWQAAhVAzg9QA0g+BIAAQBKAAAzA9QAzA9ABBWQgBBWgzA9QgzA+hKAAQhIAAg0g+gAhlh3QgrAyAABFQAABGArAzQAqAyA7AAQA8AAArgyQApgyAAhHQAAhGgpgyQgrgyg8AAQg7AAgqAzg");
	this.shape_414.setTransform(1239.1,893);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FFFFFF").s().p("Ag/DvQghgfAAg0IAAj7Ig6AAQgMAAgEgFQgFgFAAgJQAAgIAFgFQAEgGAMAAIA6AAIAAhvQAAgOAFgFQAEgGAHAAQAHAAAEAGQAFAFAAAOIAABvICrAAQALAAAFAGQAFAFAAAJQAAAIgFAFQgFAFgLAAIirAAIAAD7QAAAgAWAWQAWAWAqAAQAfAAAmgLQAlgMAVgOQAHgGAFAAQAGAAAFAGQAEAFAAAIQAAAHgFAGQgMAOguASQgvARgqAAQg3AAgggfg");
	this.shape_415.setTransform(1192.9,886.8);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FFFFFF").s().p("Ah6CRQg3hAABhZQgBhSA0g7QAzg7BKAAQBNAAAzA9QAyA8gCBfIlBAAQAJBJArAtQArAtA/AAQAjAAAmgOQAngOAZgXQAHgHAGAAQAFAAAFAGQAFAGgBAHQAAAIgFAHQgTAWgtAUQgvAUgwAAQhRAAg2hAgAhfiDQgnAngKA/IEhAAQgKg+gognQgogog3AAQg2AAgpAng");
	this.shape_416.setTransform(1099.9,893);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FFFFFF").s().p("AgYDCIiCleIghAAQgLAAgFgEQgFgGAAgJQAAgIAFgFQAFgFALAAIB2AAQAMAAAFAFQAFAFAAAJQAAAIgFAGQgFAEgMAAIg0AAIB0E5IANAAIByk5Ig1AAQgLAAgFgEQgFgGAAgJQAAgIAFgFQAFgFALAAIB3AAQALAAAGAFQAEAFAAAJQAAAIgEAGQgGAEgLAAIggAAIiAFeg");
	this.shape_417.setTransform(1054.2,892.9);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FFFFFF").s().p("Ah8CTQg0g9ABhWQgBhVA0g9QAzg+BKAAQBIAAA0A9QA0A9gBBWQABBWg0A9Qg0A+hIAAQhKAAgzg+gAhmh3QgqAyAABFQAABGAqAzQArAyA7AAQA8AAArgyQAqgyAAhHQAAhGgqgyQgrgyg8AAQg7AAgrAzg");
	this.shape_418.setTransform(1008,893);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFFFFF").s().p("AhpDJIAABJIhKAAQgLABgFgGQgEgFAAgJQAAgIAEgFQAFgFALAAIArAAIAAnnIgrAAQgLAAgFgGQgEgFAAgIQAAgJAEgFQAFgGALABIBKAAIAAD6QA6hZBQAAQBFAAAxA8QAxA8AABWQABBYgyA9QgzA9hDABQhSAAg4hZgAg/gnQgpAwAABIQAABHApAyQApAxA2ABQA3gBApgxQApgyAAhHQAAhIgpgwQgpgyg3AAQg2AAgpAyg");
	this.shape_419.setTransform(960.5,884.9);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FFFFFF").s().p("AiVCuQgggiAAgyQAAg3ArgoQAqgpBRAAQAUAAAaAEQAZADAeAHIAAg9QAAgfgYgXQgYgXgvAAQglAAhDAaQgMAFgDAAQgGAAgEgGQgFgFAAgIQAAgIAEgEQAFgHAmgMQA6gTAeAAQA7AAAiAkQAhAjAAAsIAAD5IAqAAQAMAAAFAFQAFAFAAAJQAAAIgFAFQgFAGgMAAIhKAAIAAg3QhFBGhNAAQg5AAgggjgAh4AbQgdAaAAAlQAAAiAXAXQAWAYArAAQApAAAigTQAjgUAlgrIAAhTQgWgHgZgDQgZgEgaAAQhFAAgnAjg");
	this.shape_420.setTransform(916,893);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFFFFF").s().p("ABTDJQgMAAgFgFQgFgGAAgIQAAgIAFgFQAFgFAMAAIAaAAIAAjnQAAgogYgbQgZgcgpAAQgeAAgXAPQgXAPgqA8IAADsIAjAAQAMAAAFAFQAFAFAAAIQAAAIgFAGQgFAFgMAAIhnAAQgLAAgFgFQgFgGAAgIQAAgIAFgFQAFgFALAAIAkAAIAAk5IgbAAQgLAAgFgFQgFgFAAgJQAAgIAFgFQAFgGALAAIA7AAIAAA5QAhgoAbgPQAagPAhAAQAkAAAeASQAVAOARAfQARAfAAAhIAADtIAbAAQALAAAFAFQAFAFAAAIQAAAIgFAGQgFAFgLAAg");
	this.shape_421.setTransform(823,892.2);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FFFFFF").s().p("Ah8CTQgzg9gBhWQABhVAzg9QAzg+BKAAQBIAAA0A9QAzA9AABWQAABWgzA9Qg0A+hIAAQhKAAgzg+gAhmh3QgqAyAABFQAABGAqAzQArAyA7AAQA8AAAqgyQAqgyABhHQgBhGgqgyQgqgyg8AAQg7AAgrAzg");
	this.shape_422.setTransform(776.9,893);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FFFFFF").s().p("Ag/DvQghgfAAg0IAAj7Ig6AAQgMAAgEgFQgFgFAAgJQAAgIAFgFQAEgGAMAAIA6AAIAAhvQAAgOAFgFQAEgGAHAAQAHAAAEAGQAFAFAAAOIAABvICrAAQALAAAFAGQAFAFAAAJQAAAIgFAFQgFAFgLAAIirAAIAAD7QAAAgAWAWQAWAWAqAAQAfAAAmgLQAlgMAVgOQAHgGAFAAQAGAAAFAGQAEAFAAAIQAAAHgFAGQgMAOguASQgvARgqAAQg3AAgggfg");
	this.shape_423.setTransform(730.7,886.8);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#FFFFFF").s().p("Ag/DvQghgfAAg0IAAj7Ig6AAQgMAAgEgFQgFgFAAgJQAAgIAFgFQAEgGAMAAIA6AAIAAhvQAAgOAFgFQAEgGAHAAQAHAAAEAGQAFAFAAAOIAABvICrAAQALAAAFAGQAFAFAAAJQAAAIgFAFQgFAFgLAAIirAAIAAD7QAAAgAWAWQAWAWAqAAQAfAAAmgLQAlgMAVgOQAHgGAFAAQAGAAAFAGQAEAFAAAIQAAAHgFAGQgMAOguASQgvARgqAAQg3AAgggfg");
	this.shape_424.setTransform(684.5,886.8);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FFFFFF").s().p("AhgCrQgfgnAAg0IAAjzIgrAAQgLAAgFgFQgFgGAAgIQAAgIAFgGQAFgFALAAIBKAAIAAEZQAAAkAUAZQATAXAeAAQBMAABAhUIAAjzIg6AAQgMAAgEgFQgFgGAAgIQAAgIAFgGQAEgFAMAAIBaAAIAAFfIAaAAQAMAAAEAEQAFAFAAAJQAAAIgFAFQgEAGgMAAIg6AAIAAg3QhBBGhKAAQguAAgYgfg");
	this.shape_425.setTransform(637.8,893.7);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FFFFFF").s().p("AhpDJIAABJIhJAAQgMABgFgGQgEgFAAgJQAAgIAEgFQAFgFAMAAIAqAAIAAnnIgqAAQgMAAgFgGQgEgFAAgIQAAgJAEgFQAFgGAMABIBJAAIAAD6QA6hZBPAAQBGAAAxA8QAyA8gBBWQAABYgxA9QgzA9hEABQhRAAg4hZgAg/gnQgpAwAABIQAABHApAyQApAxA2ABQA3gBApgxQApgyAAhHQAAhIgpgwQgpgyg3AAQg2AAgpAyg");
	this.shape_426.setTransform(590.7,884.9);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FFFFFF").s().p("Ah6CRQg3hAABhZQgBhSA0g7QAyg7BLAAQBOAAAyA9QAxA8gBBfIlBAAQAJBJArAtQArAtA/AAQAjAAAmgOQAogOAYgXQAHgHAGAAQAGAAAEAGQAFAGgBAHQAAAIgFAHQgTAWguAUQguAUgwAAQhRAAg2hAgAheiDQgoAngKA/IEhAAQgKg+gognQgogog3AAQg2AAgoAng");
	this.shape_427.setTransform(499.1,893);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#FFFFFF").s().p("ABJEaQgMAAgEgGQgFgFAAgIQAAgJAFgFQAEgEAMAAIAkAAIAAjoQAAgogZgcQgYgbgsAAQgiAAgZAUQgRAPgpA1IAADvIAkAAQALAAAFAEQAFAFAAAJQAAAIgFAFQgFAGgLAAIhnAAQgLAAgGgGQgEgFAAgIQAAgJAEgFQAGgEALAAIAjAAIAAnoIgqAAQgLABgFgGQgFgGAAgIQAAgIAFgFQAFgGALAAIBKAAIAADpQAegoAcgPQAbgQAhgBQAmAAAaAQQAZAPASAhQARAfAAAjIAADrIAjAAQAMAAAEAEQAFAFAAAJQAAAIgFAFQgEAGgMAAg");
	this.shape_428.setTransform(453.2,884.2);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FFFFFF").s().p("Ag/DvQghgfAAg0IAAj7Ig6AAQgMAAgEgFQgFgFAAgJQAAgIAFgFQAEgGAMAAIA6AAIAAhvQAAgOAFgFQAEgGAHAAQAHAAAEAGQAFAFAAAOIAABvICrAAQALAAAFAGQAFAFAAAJQAAAIgFAFQgFAFgLAAIirAAIAAD7QAAAgAWAWQAWAWAqAAQAfAAAmgLQAlgMAVgOQAHgGAFAAQAGAAAFAGQAEAFAAAIQAAAHgFAGQgMAOguASQgvARgqAAQg3AAgggfg");
	this.shape_429.setTransform(407.2,886.8);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#FFFFFF").s().p("Ah5CjQAAAPgBAFQgCAEgEAEQgEADgFAAQgGAAgFgGQgEgGAAgNIAAhOQAAgOAEgFQAEgGAHAAQAHAAAFAGQAFAFAAAJQAAAVAIAOQANAWAdAOQAdAOApAAQA9AAAegcQAfgbAAgfQAAgjgfgVQgfgVg6gHQg6gGgagMQgagMgOgXQgOgXAAgbQAAgxAogcQAogdA3AAQBAAAApAmQAAgNAFgFQAEgGAHAAQAHAAAFAGQAEAFAAAOIAABBQAAANgEAGQgFAGgHAAQgGAAgEgFQgFgFgBgLQgCgbgVgRQgfgagyAAQg1AAgdAaQgWATAAAYQAAAbAaASQASANAzAGQBAAJAaALQAkAPASAbQASAcAAAgQAAAxgnAlQgmAmhLAAQhKAAgwgug");
	this.shape_430.setTransform(314.7,893);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#FFFFFF").s().p("Ah5CjQAAAPgBAFQgCAEgEAEQgEADgFAAQgGAAgFgGQgEgGAAgNIAAhOQAAgOAEgFQAEgGAHAAQAHAAAFAGQAFAFAAAJQAAAVAIAOQANAWAdAOQAdAOApAAQA9AAAegcQAfgbAAgfQAAgjgfgVQgfgVg6gHQg6gGgagMQgagMgOgXQgOgXAAgbQAAgxAogcQAogdA3AAQBAAAApAmQAAgNAFgFQAEgGAHAAQAHAAAFAGQAEAFAAAOIAABBQAAANgEAGQgFAGgHAAQgGAAgEgFQgFgFgBgLQgCgbgVgRQgfgagyAAQg1AAgdAaQgWATAAAYQAAAbAaASQASANAzAGQBAAJAaALQAkAPASAbQASAcAAAgQAAAxgnAlQgmAmhLAAQhKAAgwgug");
	this.shape_431.setTransform(268.5,893);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#FFFFFF").s().p("Ah6CRQg2hAAAhZQAAhSAzg7QAzg7BKAAQBOAAAyA9QAxA8gBBfIlBAAQAJBJArAtQArAtA/AAQAjAAAmgOQAogOAYgXQAHgHAFAAQAHAAAEAGQAEAGAAAHQABAIgHAHQgRAWgvAUQguAUgwAAQhRAAg2hAgAheiDQgoAngKA/IEgAAQgJg+gngnQgpgog3AAQg2AAgoAng");
	this.shape_432.setTransform(221.8,893);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FFFFFF").s().p("AibDHQgMAAgFgFQgEgFAAgIQAAgIAEgFQAFgFAMAAIBMAAIAAk6Ig6AAQgMAAgEgFQgFgFAAgJQAAgIAFgFQAEgGAMAAIBaAAIAABfQA8hCAfgTQAfgTAaAAQAcAAAYAXQAYAWAAAMQAAAIgEAGQgFAGgHAAQgEAAgDgCIgJgKQgOgQgJgGQgKgFgKAAQgUAAgdATQgeAUhGBNIAADOICKAAQAMAAAFAFQAFAFAAAIQAAAIgFAGQgFAFgMAAg");
	this.shape_433.setTransform(177.1,892.4);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FFFFFF").s().p("AizEgQgLAAgEgFQgGgGAAgIQAAgJAGgEQAEgGALAAIArAAIAAnmIgrAAQgLAAgEgEQgGgGAAgJQAAgIAGgFQAEgFALAAIBLAAIAABEQAcgpAggUQAhgVArAAQAuAAAnAaQAoAaAWAvQAVAuABAzQgBBRgwA6QgxA5hHAAQhUAAg0hSIAADjIBMAAQAMAAAFAGQAEAEAAAJQAAAIgEAGQgFAFgMAAgAhBjKQgnAvAABAQAABCAnAtQApAvA4AAQA5AAAoguQAogugBhCQAAhBgnguQgogvg5AAQg4AAgpAvg");
	this.shape_434.setTransform(128.5,900.9);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FFFFFF").s().p("AgGEnQgQAAgMgNQgMgOAAgTQAAgUAMgOQAMgNAQAAIAOAAQAPAAAMAOQALANAAAUQAAATgLAOQgMANgPAAgAgKBRQgEgGgBgOIgOkwIAAgQQAAgPAJgKQAIgKAMAAQANAAAJAKQAJAKAAAQIgBAPIgOEwQgBAOgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_435.setTransform(1354.7,777.9);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FFFFFF").s().p("AibDHQgMAAgFgFQgEgFAAgIQAAgIAEgFQAFgFAMAAIBMAAIAAk6Ig6AAQgMAAgEgFQgFgFAAgJQAAgIAFgFQAEgGAMAAIBaAAIAABfQA8hCAfgTQAfgTAaAAQAcAAAYAXQAYAWAAAMQAAAIgEAGQgFAGgHAAQgEAAgDgCIgJgKQgOgQgJgGQgKgFgKAAQgUAAgdATQgeAUhGBNIAADOICKAAQAMAAAFAFQAFAFAAAIQAAAIgFAGQgFAFgMAAg");
	this.shape_436.setTransform(1309.5,786.2);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FFFFFF").s().p("Ah6CRQg2hAgBhZQABhSAzg7QAzg7BKAAQBNAAAzA9QAyA8gCBfIlAAAQAIBJArAtQArAtA+AAQAkAAAmgOQAngOAZgXQAHgHAGAAQAFAAAFAGQAFAGAAAHQgBAIgFAHQgTAWgtAUQgvAUgxAAQhQAAg2hAgAhfiDQgnAngKA/IEhAAQgKg+gognQgogog3AAQg3AAgoAng");
	this.shape_437.setTransform(1261.7,786.7);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FFFFFF").s().p("AiqEZQgLAAgFgFQgFgFAAgJQAAgIAFgFQAFgGALAAIBjAAIA4iHIiTleIgJAAQgLAAgFgFQgFgGAAgIQAAgGACgEQADgFAEgCQAEgCAIAAIBWAAQAMAAAFAFQAEAGAAAIQAAAIgEAGQgFAFgMAAIgqAAICAE0IB/k0IgrAAQgLAAgFgFQgFgGAAgIQAAgIAFgGQAFgFALAAIBXAAQALAAAFAFQAFAGAAAIQAAAGgDAFQgDAFgEACQgDABgSAAIjHHlIAwAAQAMAAAFAGQAEAFAAAIQAAAIgEAGQgFAFgMAAg");
	this.shape_438.setTransform(1217.8,795.3);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FFFFFF").s().p("AiVCuQgggiAAgyQAAg3ArgoQAqgpBRAAQAUAAAaAEQAZADAeAHIAAg9QAAgfgYgXQgYgXgvAAQglAAhDAaQgMAFgDAAQgGAAgEgGQgFgFAAgIQAAgIAEgEQAFgHAmgMQA6gTAeAAQA7AAAiAkQAhAjAAAsIAAD5IAqAAQAMAAAFAFQAFAFAAAJQAAAIgFAFQgFAGgMAAIhKAAIAAg3QhFBGhNAAQg5AAgggjgAh4AbQgdAaAAAlQAAAiAXAXQAWAYArAAQApAAAigTQAjgUAlgrIAAhTQgWgHgZgDQgZgEgaAAQhFAAgnAjg");
	this.shape_439.setTransform(1170.2,786.7);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FFFFFF").s().p("AiLEaQgLAAgGgFQgEgGAAgIQAAgJAEgEQAGgGALAAIB8AAIAAnmIhbAAQgMgBgEgFQgGgGABgIQAAgIAEgGQAGgFALAAIB6AAIAAINIB7AAQAMAAAFAGQAFAEAAAJQAAAIgFAGQgFAFgMAAg");
	this.shape_440.setTransform(1123.6,777.9);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FFFFFF").s().p("AizEgQgLAAgFgFQgEgGAAgIQAAgIAEgGQAFgFALAAIArAAIAAnlIgrAAQgLgBgFgFQgEgFAAgIQAAgJAEgFQAFgGALAAIBKAAIAABFQAdgoAggWQAggUAsAAQAuAAAnAaQAoAaAWAvQAVAuAAA0QAABRgwA4QgxA6hHAAQhUAAg1hSIAADjIBOAAQAKAAAGAFQAEAGAAAIQAAAIgEAFQgGAGgKAAgAhAjKQgpAuAABCQAABAApAuQAoAvA4AAQA4AAAogvQAogtABhBQAAhCgoguQgogvg5AAQg4AAgoAvg");
	this.shape_441.setTransform(1076,794.7);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FFFFFF").s().p("AABgvIhFDyIgngBIhBleIgQAAQgLAAgFgFQgFgFAAgJQAAgIAFgFQAFgGALAAIBXAAQALAAAFAGQAFAFAAAJQAAAIgFAFQgFAFgLAAIgoAAIA4ErIBDjuIAlAAIBFDuIA2krIgoAAQgLAAgGgFQgEgFAAgJQAAgIAEgFQAFgGAMAAIBXAAQALAAAFAGQAFAFAAAJQAAAIgFAFQgFAFgLAAIgQAAIhAFeIgnABg");
	this.shape_442.setTransform(984.9,786.7);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FFFFFF").s().p("Ah6CRQg2hAAAhZQAAhSAzg7QAyg7BLAAQBOAAAyA9QAxA8gBBfIlBAAQAJBJArAtQArAtA/AAQAjAAAmgOQAogOAYgXQAHgHAFAAQAHAAAEAGQAEAGAAAHQABAIgHAHQgRAWgvAUQguAUgwAAQhRAAg2hAgAheiDQgoAngKA/IEgAAQgJg+gngnQgpgog3AAQg2AAgoAng");
	this.shape_443.setTransform(938.2,786.7);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FFFFFF").s().p("ABTDJQgMAAgFgFQgFgGAAgIQAAgIAFgFQAFgFAMAAIAaAAIAAjnQAAgogYgbQgZgcgpAAQgeAAgXAPQgXAPgqA8IAADsIAjAAQAMAAAFAFQAFAFAAAIQAAAIgFAGQgFAFgMAAIhnAAQgLAAgFgFQgFgGAAgIQAAgIAFgFQAFgFALAAIAkAAIAAk5IgbAAQgLAAgFgFQgFgFAAgJQAAgIAFgFQAFgGALAAIA7AAIAAA5QAhgoAbgPQAagPAhAAQAkAAAeASQAVAOARAfQARAfAAAhIAADtIAbAAQALAAAFAFQAFAFAAAIQAAAIgFAGQgFAFgLAAg");
	this.shape_444.setTransform(892.3,786);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FFFFFF").s().p("Ah6CRQg2hAAAhZQAAhSAzg7QAzg7BKAAQBOAAAxA9QAyA8AABfIlCAAQAJBJArAtQArAtA/AAQAjAAAngOQAngOAYgXQAHgHAFAAQAHAAAEAGQAEAGABAHQAAAIgHAHQgRAWgvAUQguAUgwAAQhQAAg3hAgAheiDQgoAngKA/IEgAAQgJg+gngnQgpgog3AAQg2AAgoAng");
	this.shape_445.setTransform(799.5,786.7);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FFFFFF").s().p("ACRDJIAAkpQAAgcgPgTQgOgTgUAAQgRAAgTAQQgTAPgYAtIAAD6IAaAAQALAAAFAFQAFAFAAAIQAAAIgFAGQgFAFgLAAIg6AAIAAkmQAAgegOgTQgPgUgSAAQgSAAgQANQgXASgZAtIAAD6IAbAAQAKAAAFAFQAGAFAAAIQAAAIgGAGQgFAFgKAAIhWAAQgLAAgFgFQgEgGAAgIQAAgIAEgFQAFgFALAAIAbAAIAAk5IgbAAQgLAAgFgFQgEgFAAgJQAAgIAEgFQAFgGALAAIA7AAIAAAmQAogzApAAQAYAAASAPQATAQAMAfQAUgfAWgQQAWgPAVAAQAiAAAVAaQAaAiAAApIAAEHIAbAAQAMAAAEAFQAFAFABAIQgBAIgFAGQgEAFgMAAg");
	this.shape_446.setTransform(754,786);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FFFFFF").s().p("Ah8CTQgzg9gBhWQABhVAzg9QAzg+BKAAQBIAAA0A9QAzA9AABWQAABWgzA9Qg0A+hIAAQhKAAgzg+gAhmh3QgqAyAABFQAABGAqAzQArAyA7AAQA8AAAqgyQAqgyABhHQgBhGgqgyQgqgyg8AAQg7AAgrAzg");
	this.shape_447.setTransform(707.6,786.7);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FFFFFF").s().p("Ah8CXQgyg7AAhZQAAhaAzg9QAyg8BLAAQBIAAAyA0IAAgNQAAgOAEgFQAFgGAHAAQAHAAAFAGQAEAFAAAOIAABWQAAAOgEAFQgFAGgHAAQgHAAgEgFQgFgFAAgMQgCggghgdQghgdg4AAQhFAAgkA1QglA1AABCQAABKAoAvQAoAwBAAAQAkAAAmgQQAngRAfgjQAHgJAGAAQAHAAAEAFQAEAFAAAIQABATgmAeQg+AwhLAAQhLAAgxg6g");
	this.shape_448.setTransform(662.2,786.7);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FFFFFF").s().p("AiLEaQgMAAgEgFQgFgGAAgIQAAgJAFgEQAEgGAMAAIB8AAIAAnmIhbAAQgMgBgEgFQgGgGABgIQAAgIAEgGQAGgFALAAIB6AAIAAINIB8AAQALAAAFAGQAFAEAAAJQAAAIgFAGQgFAFgLAAg");
	this.shape_449.setTransform(615.2,777.9);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FFFFFF").s().p("Ah6CRQg3hAAAhZQAAhSA0g7QAyg7BLAAQBNAAAyA9QAzA8gBBfIlBAAQAIBJArAtQArAtA+AAQAkAAAngOQAmgOAZgXQAHgHAFAAQAGAAAFAGQAEAGABAHQAAAIgHAHQgSAWguAUQguAUgxAAQhQAAg2hAgAhfiDQgnAngKA/IEgAAQgJg+gngnQgpgog3AAQg3AAgoAng");
	this.shape_450.setTransform(568.4,786.7);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FFFFFF").s().p("AAAgvIhEDyIgngBIhBleIgQAAQgLAAgFgFQgFgFAAgJQAAgIAFgFQAFgGALAAIBXAAQAMAAAEAGQAFAFAAAJQAAAIgFAFQgEAFgMAAIgoAAIA4ErIBDjuIAkAAIBGDuIA1krIgnAAQgMAAgEgFQgGgFAAgJQAAgIAGgFQAEgGAMAAIBWAAQAMAAAFAGQAFAFAAAJQAAAIgFAFQgFAFgMAAIgOAAIhBFeIgnABg");
	this.shape_451.setTransform(522.7,786.7);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FFFFFF").s().p("AjDEsQgiAAgOgNQgOgNAAgUQAAgUAOgNQAOgNAiAAIBbAAIA0hnIifk4QgXgDgMgMQgLgNAAgSQAAgVAOgMQAOgNAiAAIBUAAQAhAAAOANQAOAMAAAVQAAAUgOANQgOANgfAAIBtDTIBqjTQgdAAgOgNQgOgNAAgUQAAgVAOgMQAOgNAhAAIBXAAQAgAAAPANQAOAMAAAVQAAATgMANQgNAMgXACIjSGfQAhAAALAHQAVAOABAZQAAAUgOANQgOANgiAAg");
	this.shape_452.setTransform(1635.7,110.6);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FFFFFF").s().p("AhFDTQgigIgdgNQgGAGgIADQgIADgIAAQgVAAgNgOQgNgOABgiIAAgeQgBgiANgOQANgOAVAAQAQAAAMAKQALAIAGAXQAVASAdAJQAfAJAlAAQA/AAAjgUQARgKAAgKQAAgSgYgMQgYgLhJgJQhvgMglggQgmggABgxQAAgxApghQA4gsBdgBQAeABAeAGQAdAGAbAMQAJgGAHgDQAIgDAFAAQAUAAAMAOQAMAOAAAhIAAAXQABAegIAKQgOAVgZAAQgQAAgNgKQgMgLgEgQQgWgPgZgGQgZgIgaAAQg1ABgfARQgPAIAAAIQABALASAKQAOAHAyAHQBbAMAkANQAvARAaAfQAZAhAAAkQAAAygrAhQg/AxhkAAQgngBghgGg");
	this.shape_453.setTransform(1562.5,101.2);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FFFFFF").s().p("AjFCyQgugnAAgwQAAg6A7gwQA7gyBoAAQApAAA3AJIAAgWQAAgVgSgNQgSgNgxAAQgpAAhBAQQgYAGgNAAQgTAAgMgNQgNgNAAgVQAAgMAEgIQAFgJAIgFQAIgFAZgHQAigKAkgFQAjgGAdAAQBVAAAwAmQAvAkAABBIAAC8IAPAAQAiAAAOANQAOANAAAUQAAAVgOANQgOAMgiAAIhrAAIAAgVQgjASgpAKQgpAJgjAAQhKAAgugogAh7A2QgZASAAARQAAAOAMAIQAXAOAnAAQAhAAApgNQAqgNAhgWIAAgoQg4gKgtAAQg4AAgpAbg");
	this.shape_454.setTransform(1489.9,101.2);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FFFFFF").s().p("AhjD3QgrgmgBg1IAAjKIghAAQghAAgOgNQgPgNAAgUQAAgVAPgMQAOgNAhAAIAhAAIAAhTQAAghANgOQANgPAUAAQAVAAANAPQAMAOAAAhIAABTICpAAQAiAAAOANQAOAMAAAVQAAAUgOANQgOANgiAAIipAAIAAC4QABAdALAKQAUAOAvAAQBHAAA7geQAXgLANAAQASAAANANQANAOAAATQAAASgOANQgWAVhBASQhBASgsAAQhVAAgqglg");
	this.shape_455.setTransform(1418.8,94.5);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FFFFFF").s().p("ABsDSQghAAgOgMQgPgNAAgWQAAgTAOgNQAOgNAdAAIAAitQAAgegQgOQgVgSgqAAQgfAAgYAMQgYANglAoIAACqQAkAAAKAHQAWANAAAaQAAAUgOAOQgOAMgiAAIhoAAQgiAAgNgMQgPgNAAgWQAAgZAWgNQALgHAjAAIAAjfQgdAAgOgNQgOgNAAgUQAAgVAOgMQAOgNAhAAIBYAAIAAAfQAZgWAfgKQAegLAiAAQBSAAAwAyQAlApAABCIAACqQAeAAAOANQAOAMAAAVQAAAUgOAOQgPAMghAAg");
	this.shape_456.setTransform(1342.7,100.4);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FFFFFF").s().p("AjFCyQgugnAAgwQAAg6A7gwQA7gyBoAAQApAAA3AJIAAgWQAAgVgSgNQgSgNgxAAQgpAAhBAQQgYAGgNAAQgTAAgMgNQgNgNAAgVQAAgMAEgIQAFgJAIgFQAIgFAZgHQAigKAkgFQAjgGAdAAQBVAAAwAmQAvAkAABBIAAC8IAPAAQAiAAAOANQAOANAAAUQAAAVgOANQgOAMgiAAIhrAAIAAgVQgjASgpAKQgpAJgjAAQhKAAgugogAh7A2QgZASAAARQAAAOAMAIQAXAOAnAAQAhAAApgNQAqgNAhgWIAAgoQg4gKgtAAQg4AAgpAbg");
	this.shape_457.setTransform(1270.3,101.2);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#FFFFFF").s().p("Ai5ERQgiAAgNgNQgPgNAAgVQAAgUAPgNQAOgMAhAAIAOAAIAAloIgOAAQgiAAgNgNQgPgMAAgVQAAgVAPgMQANgOAiAAIGwABIAACMQAAAhgMAPQgNAOgVAAQgUAAgMgOQgOgOAAgiIAAgwIjqAAIAACFIBQAAQAAgjAHgLQAOgVAZAAQAVgBANAOQAMAOAAAiIAABpQAAAhgMAPQgNANgVAAQgZABgOgWQgHgLAAgkIhQAAIAACHIBeAAQAhAAAOAMQAOANAAAVQAAAUgOANQgOANghAAg");
	this.shape_458.setTransform(1198,94.2);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FFFFFF").s().p("AirCbQhDg/AAhaQAAhhBIg9QBHg9BeAAQA3AAAvAUQAvAUAXAXQAgAhAWAxQANAiAAAsIAAAnIl4AAQAPAkAkAWQAlAWA9AAQAzAABVgWQAjgJANAAQATAAANANQAMANAAAUQAAASgNAMQgTARhFAQQhGAPhAAAQhuAAhBg/gAhPhoQgjASgVAoIEQAAQgWgoghgSQgjgVgvAAQguAAghAVg");
	this.shape_459.setTransform(1049.2,101.2);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FFFFFF").s().p("ABhEjQghAAgOgMQgOgNgBgVQAAgZAWgOQALgHAjAAIAAimQAAgjgQgOQgWgUgpAAQgeAAgWAMQgYAMgoAnIAACsQAjAAALAHQAVAOAAAZQABAVgOANQgPAMghAAIhpAAQghAAgOgMQgOgNAAgVQAAgZAVgOQAMgHAiAAIAAmNIgPAAQgiAAgOgNQgOgNAAgVQAAgUAOgMQAOgNAiAAIBsAAIAADEQAcgRAegIQAdgJAdAAQAwAAAlAQQAlARAZAjQAYAiABA0IAACtQAjAAAKAHQAWAOAAAZQAAAVgOANQgOAMgiAAg");
	this.shape_460.setTransform(976.6,92.3);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FFFFFF").s().p("AhkD3QgqgmAAg1IAAjKIgiAAQghAAgOgNQgPgNAAgUQAAgVAPgMQAOgNAhAAIAiAAIAAhTQAAghAMgOQANgPAVAAQAUAAANAPQANAOAAAhIAABTICpAAQAhAAAOANQAOAMAAAVQAAAUgOANQgOANghAAIipAAIAAC4QgBAdAMAKQAUAOAvAAQBGAAA8geQAXgLANAAQASAAAOANQANAOgBATQAAASgOANQgWAVhAASQhBASgtAAQhVAAgrglg");
	this.shape_461.setTransform(906.4,94.5);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FFFFFF").s().p("AhkEzQghAAgOgNQgPgNAAgUQAAgVAPgNQAOgNAhAAIBkAAQAqABAYgXQAYgXAAgjIAAgtQgfAUggAJQgeAKgiAAQhdABhAg/QhAg/AAhbQAAhdBAg+QBAg/BdAAQAjAAAfAKQAfALAeAUIAAgbIBrAAQAiAAAOANQAOAMAAAVQAAAUgOANQgOANgiAAIgQAAIAAFOQAAAxgUAjQgUAkgrAaQgqAbg1AAgAh/ixQgmAmAAAyQAAA0AmAlQAlAkA1AAQAzAAAmgkQAlglAAg0QAAgyglgmQgmglgzAAQg1AAglAlg");
	this.shape_462.setTransform(758.3,110);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FFFFFF").s().p("ABsDSQghAAgOgMQgPgNAAgWQAAgTAOgNQAOgNAdAAIAAitQAAgegQgOQgVgSgqAAQgfAAgYAMQgYANglAoIAACqQAkAAAKAHQAWANAAAaQAAAUgOAOQgOAMgiAAIhoAAQgiAAgNgMQgPgNAAgWQAAgZAWgNQALgHAjAAIAAjfQgdAAgOgNQgOgNAAgUQAAgVAOgMQAOgNAhAAIBYAAIAAAfQAZgWAfgKQAegLAiAAQBSAAAwAyQAlApAABCIAACqQAeAAAOANQAOAMAAAVQAAAUgOAOQgPAMghAAg");
	this.shape_463.setTransform(683.9,100.4);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FFFFFF").s().p("AicEjQggAAgOgMQgPgNAAgVQAAgUAPgNQAOgNAgAAIBvAAIAAjfIhKAAQghAAgOgMQgPgNAAgVQAAgUAPgNQANgNAiAAIClAAIAAE7IBvAAQAhAAAOANQAOANAAAUQAAAVgOANQgOAMghAAgAhLjBIAAhhIBsAAIAABhg");
	this.shape_464.setTransform(610.7,92.3);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FFFFFF").s().p("AhjD3QgrgmgBg1IAAjKIghAAQghAAgOgNQgPgNAAgUQAAgVAPgMQAOgNAhAAIAhAAIAAhTQAAghANgOQANgPAUAAQAVAAANAPQAMAOAAAhIAABTICpAAQAiAAAOANQAOAMAAAVQAAAUgOANQgOANgiAAIipAAIAAC4QAAAdANAKQASAOAwAAQBHAAA7geQAXgLANAAQASAAAOANQAMAOAAATQAAASgOANQgWAVhBASQhBASgsAAQhVAAgqglg");
	this.shape_465.setTransform(540.4,94.5);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#FFFFFF").s().p("AixDSQghAAgOgMQgOgNAAgWQAAgTAOgNQAOgNAhAAIA3AAIAAjfIghAAQghAAgOgMQgPgOAAgUQAAgVAPgMQAOgNAhAAIB9AAIAAA5QA5gpAigOQAhgOAdAAQAtAAAqAhQAdAXAAAXQAAAUgNANQgOAOgUAAQgRAAgSgRQgTgRgPAAQgTAAgnAZQgmAXg5AxIAACKICCAAQAiAAAOANQAOAMAAAVQAAAUgOAOQgOAMgiAAg");
	this.shape_466.setTransform(465.5,100.4);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#FFFFFF").s().p("AjFCyQgugnAAgwQAAg6A7gwQA7gyBoAAQApAAA3AJIAAgWQAAgVgSgNQgSgNgxAAQgpAAhBAQQgYAGgNAAQgTAAgMgNQgNgNAAgVQAAgMAEgIQAFgJAIgFQAIgFAZgHQAigKAkgFQAjgGAdAAQBVAAAwAmQAvAkAABBIAAC8IAPAAQAiAAAOANQAOANAAAUQAAAVgOANQgOAMgiAAIhrAAIAAgVQgjASgpAKQgpAJgjAAQhKAAgugogAh7A2QgZASAAARQAAAOAMAIQAXAOAnAAQAhAAApgNQAqgNAhgWIAAgoQg4gKgtAAQg4AAgpAbg");
	this.shape_467.setTransform(391.9,101.2);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FFFFFF").s().p("AhjD3QgrgmgBg1IAAjKIghAAQghAAgOgNQgPgNAAgUQAAgVAPgMQAOgNAhAAIAhAAIAAhTQAAghANgOQANgPAUAAQAVAAANAPQAMAOAAAhIAABTICpAAQAiAAAOANQAOAMAAAVQAAAUgOANQgOANgiAAIipAAIAAC4QABAdAMAKQASAOAwAAQBHAAA7geQAXgLANAAQASAAAOANQAMAOAAATQAAASgOANQgWAVhBASQhBASgsAAQhVAAgqglg");
	this.shape_468.setTransform(320.8,94.5);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FFFFFF").s().p("AhAEVQgkgKgjgSQgLAPgIADQgHAFgLAAQgWgBgMgOQgNgOAAghIAAg+QAAggANgOQAMgPAWAAQAQAAALAIQALAJAGAUQAGAUAGAHQANAOAhAPQAiAOAmAAQA+AAAngdQAZgRAAgaQAAgRgMgPQgMgPgcgKQgRgHg+gLQhLgOgngUQgmgTgXgkQgXgkAAgqQAAhBA3gyQA4gyBYAAQAjAAAfAIQAeAIAZAQQARgRATgBQATAAANAPQANAOAAAgIAABGQAAAhgNAOQgNAOgTABQgSAAgNgLQgJgHgFgYQgFgWgIgKQgNgSgagLQgagMghAAQgyAAgcAYQgeAWAAAaQAAAQAMARQAMAQAXAIQAPAHBGAOQBHAOAmAQQAlAQAZAkQAaAjAAAxQAABEgwApQhAA2hjAAQglAAgkgJg");
	this.shape_469.setTransform(244.8,94.2);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FFFFFF").s().p("ABIEaQgNAAgGgGQgGgFAAgIQAAgIAGgGQAGgEANAAIAbAAIihioIgsAlIAACoIhYAAQgOAAgFgGQgGgFAAgIQAAgIAGgGQAFgEAOAAIAzAAIAAnnIgzAAQgOAAgFgGQgGgFAAgJQAAgIAGgFQAFgGAOAAIBYAAIAAFbICgiGIgTAAQgOAAgGgFQgGgGABgHQgBgJAGgGQAGgFAOAAIB4AAQAOAAAGAFQAGAGAAAJQAAAHgGAGQgGAFgOAAIgrAAIiSB6IC5C/IArAAQAPAAAFAEQAGAGAAAIQAAAIgGAFQgGAGgOAAg");
	this.shape_470.setTransform(1671.6,190);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FFFFFF").s().p("AinEjQgNAAgGgFQgGgGAAgIQAAgIAGgFQAGgFANAAICVAAIAAk5IhvAAQgMAAgHgFQgGgFAAgIQAAgJAGgFQAGgGANAAICUAAIAAFfICUAAQAOAAAFAFQAHAFgBAIQABAIgHAGQgFAFgOAAgAgmjBIAAhhIA3AAIAABhg");
	this.shape_471.setTransform(1613.6,189.1);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#FFFFFF").s().p("AimEaQgOAAgFgGQgHgFAAgIQAAgIAHgGQAFgEAOAAICUAAIAAnnIhtAAQgNAAgGgGQgHgFAAgJQAAgIAGgFQAGgGAOAAICRAAIAAIOICVAAQAOAAAFAEQAHAGAAAIQAAAIgHAFQgFAGgOAAg");
	this.shape_472.setTransform(1558.3,190);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#FFFFFF").s().p("Ah0CrQglgnABg1IAAjyIg0AAQgNAAgGgFQgGgGABgIQgBgIAGgGQAGgFANAAIBZAAIAAEYQAAAmAYAYQAXAXAjAAQBbAABMhVIAAjyIhFAAQgOAAgFgFQgGgGAAgIQAAgIAGgGQAFgFAOAAIBrAAIAAFfIAhAAQANAAAGAEQAFAGAAAIQAAAIgFAFQgGAGgNAAIhHAAIAAg3QhNBGhZAAQg3AAgdgfg");
	this.shape_473.setTransform(1447.3,199.5);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FFFFFF").s().p("AiVCTQg9g9AAhWQAAhVA9g9QA+g+BYAAQBWAAA+A9QA+A9AABWQAABWg+A9Qg+A+hWAAQhYAAg+g+gAh6h3QgyAyAABFQAABGAyAzQAzAyBHAAQBIAAAygyQAzgyAAhHQAAhGgzgyQgygyhIAAQhHAAgzAzg");
	this.shape_474.setTransform(1392.6,198.8);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FFFFFF").s().p("AhMDvQgngfAAg0IAAj7IhGAAQgNAAgGgFQgFgFgBgJQABgIAFgFQAHgGAMAAIBGAAIAAhvQABgOAFgFQAFgGAIAAQAJAAAFAGQAFAFAAAOIAABvIDNAAQANAAAFAGQAHAFAAAJQAAAIgHAFQgFAFgNAAIjNAAIAAD7QAAAgAbAWQAaAWAyAAQAmAAAtgLQAsgMAZgOQAIgGAGAAQAIAAAFAGQAGAFgBAIQABAHgHAGQgOAOg3ASQg3ARg0AAQhBAAgngfg");
	this.shape_475.setTransform(1227,192.7);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#FFFFFF").s().p("AixCuQgngiAAgyQAAg3AygoQAzgpBgAAQAZAAAfAEQAeADAkAHIAAg9QAAgfgcgXQgdgXg5AAQgsAAhPAaQgPAFgEAAQgHAAgFgGQgGgFAAgIQAAgIAFgEQAGgHAtgMQBGgTAkAAQBGAAAoAkQAoAjAAAsIAAD5IAzAAQAOAAAFAFQAGAFAAAJQAAAIgGAFQgFAGgOAAIhZAAIAAg3QhSBGhdAAQhEAAglgjgAiPAbQgjAaAAAlQAAAiAbAXQAbAYAyAAQAyAAApgTQApgUAtgrIAAhTQgagHgegDQgegEgfAAQhTAAguAjg");
	this.shape_476.setTransform(1172.4,198.8);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#FFFFFF").s().p("ABXEaQgNAAgGgGQgGgFAAgIQAAgIAGgGQAGgEANAAIArAAIAAjoQAAgogdgcQgegbg1AAQgoAAgdAVQgVAOgwA0IAADwIAqAAQANAAAHAEQAFAGAAAIQAAAIgFAFQgHAGgNAAIh7AAQgOAAgFgGQgGgFAAgIQAAgIAGgGQAFgEAOAAIArAAIAAnnIgzAAQgOAAgFgGQgHgFAAgJQAAgIAHgFQAFgGAOAAIBZAAIAADoQAjgnAhgPQAhgQAogBQAsAAAfAQQAfAQAVAgQAUAgAAAiIAADrIArAAQANAAAGAEQAGAGAAAIQAAAIgGAFQgGAGgNAAg");
	this.shape_477.setTransform(1116.4,190);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FFFFFF").s().p("AhMDvQgngfAAg0IAAj7IhGAAQgMAAgHgFQgFgFgBgJQABgIAFgFQAHgGAMAAIBGAAIAAhvQABgOAFgFQAFgGAIAAQAJAAAFAGQAFAFAAAOIAABvIDNAAQANAAAFAGQAHAFAAAJQgBAIgGAFQgFAFgNAAIjNAAIAAD7QAAAgAbAWQAaAWAyAAQAmAAAtgLQAsgMAZgOQAIgGAGAAQAIAAAFAGQAGAFgBAIQAAAHgGAGQgOAOg3ASQg4ARgzAAQhBAAgngfg");
	this.shape_478.setTransform(1061.4,192.7);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#FFFFFF").s().p("Ah8DIIAABKIhZAAQgOABgFgGQgHgFAAgJQAAgIAHgFQAFgFAOAAIAzAAIAAnnIgzAAQgOAAgFgGQgHgFAAgIQAAgJAHgFQAFgGAOABIBZAAIAAD6QBDhZBgAAQBTAAA7A8QA6A8AABWQAABYg6A9Qg9A9hRAAQhiABhBhagAhLgnQgxAxAABHQAABIAxAxQAwAyBBAAQBCAAAxgyQAxgxAAhIQAAhHgxgxQgxgyhCAAQhBAAgwAyg");
	this.shape_479.setTransform(949.4,190.8);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FFFFFF").s().p("AiVCTQg9g9AAhWQAAhVA9g9QA+g+BYAAQBWAAA+A9QA+A9AABWQAABWg+A9Qg+A+hWAAQhYAAg+g+gAh6h3QgyAyAABFQAABGAyAzQAzAyBHAAQBIAAAygyQAzgyAAhHQAAhGgzgyQgygyhIAAQhHAAgzAzg");
	this.shape_480.setTransform(895.8,198.8);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FFFFFF").s().p("Ah3F6QgNAAgGgFQgGgGAAgIQAAgJAGgFQAGgGANAAIB3ABQAwAAAdggQAegfAAguIAAl5IjfAAQgNAAgHgEQgFgGAAgJQAAgHAFgGQAGgFAOgBIEEAAIAAGfQAAAwgTAgQgUAhgnAUQgcAOgmAAgAAxkXIAAhiIA4AAIAABig");
	this.shape_481.setTransform(835.6,197.8);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FFFFFF").s().p("ABXEaQgOAAgFgGQgGgFAAgIQAAgIAGgGQAFgEAOAAIArAAIAAjoQAAgogdgcQgegbg0AAQgpAAgdAVQgVAOgxA0IAADwIArAAQAOAAAFAEQAGAGAAAIQAAAIgGAFQgFAGgOAAIh7AAQgNAAgHgGQgFgFAAgIQAAgIAFgGQAHgEANAAIAqAAIAAnnIgyAAQgNAAgHgGQgFgFAAgJQAAgIAFgFQAHgGANAAIBYAAIAADoQAkgnAigPQAggQAogBQAsAAAfAQQAfAQAUAgQAVAgAAAiIAADrIAqAAQAOAAAGAEQAFAGABAIQgBAIgFAFQgGAGgOAAg");
	this.shape_482.setTransform(674.8,190);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FFFFFF").s().p("AhLDvQgogfAAg0IAAj7IhFAAQgNAAgHgFQgFgFAAgJQAAgIAFgFQAHgGANAAIBFAAIAAhvQAAgOAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAOIAABvIDLAAQAOAAAFAGQAHAFgBAJQABAIgHAFQgFAFgOAAIjLAAIAAD7QAAAgAaAWQAaAWAyAAQAmAAAsgLQAtgMAZgOQAJgGAGAAQAGAAAGAGQAGAFAAAIQgBAHgFAGQgOAOg4ASQg3ARg0AAQhBAAgmgfg");
	this.shape_483.setTransform(619.8,192.7);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FFFFFF").s().p("AhMDvQgmgfAAg0IAAj7IhGAAQgOAAgFgFQgHgFAAgJQAAgIAHgFQAFgGAOAAIBGAAIAAhvQgBgOAGgFQAFgGAIAAQAJAAAFAGQAFAFABAOIAABvIDMAAQANAAAGAGQAFAFAAAJQAAAIgFAFQgGAFgNAAIjMAAIAAD7QgBAgAbAWQAaAWAyAAQAmAAAtgLQAsgMAYgOQAJgGAHAAQAGAAAGAGQAFAFABAIQAAAHgHAGQgOAOg3ASQg4ARgyAAQhBAAgogfg");
	this.shape_484.setTransform(509.4,192.7);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FFFFFF").s().p("AinEaQgNAAgGgGQgFgFAAgIQAAgIAFgGQAGgEANAAICVAAIAAnnIhtAAQgNAAgGgGQgGgFgBgJQAAgIAHgFQAFgGAOAAICRAAIAAIOICVAAQAOAAAGAEQAFAGAAAIQAAAIgFAFQgGAGgOAAg");
	this.shape_485.setTransform(343.9,190);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FFFFFF").s().p("AiaDXIAAAVQAAAOgFAFQgFAGgJAAQgIAAgGgGQgFgFAAgOIAAhoQAAgOAFgGQAFgGAJAAQAIAAAFAGQAFAFABAMQACAqArAiQApAhBGAAQBHAAAqgjQApgkgBgwQABgegRgXQgPgXgfgOQgWgJhEgMQhdgOgpghQgpggAAg8QAAg7AvgrQAvgqBOAAQBOAAA5AxIAAgMQAAgOAFgFQAGgGAIAAQAJAAAFAGQAFAFAAAOIAABgQAAANgFAGQgFAGgJAAQgIAAgFgFQgFgGgBgMQgCgmgkgeQgmgeg6AAQg+AAglAhQglAgAAArQAAAXALASQAKASARAMQARALAVAHQAWAHAtAIQBNAMAdANQAnARAUAfQAUAfAAAqQAABBgzAuQg1AthXAAQhiAAg6g9g");
	this.shape_486.setTransform(233.4,192.1);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FFFFFF").s().p("AhpDIIAABKIhKAAQgLABgFgGQgEgFAAgJQAAgIAEgFQAFgFALAAIArAAIAAnnIgrAAQgLAAgFgGQgEgFAAgIQAAgJAEgFQAFgGALABIBKAAIAAD6QA6hZBQAAQBFAAAxA8QAxA8AABWQAABYgxA9QgyA9hEAAQhSABg4hagAg/gnQgpAxAABHQAABIApAxQApAxA2ABQA3gBApgxQApgxAAhIQAAhHgpgxQgpgyg3AAQg2AAgpAyg");
	this.shape_487.setTransform(1743.3,-148.6);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#FFFFFF").s().p("Ah8CTQg0g9AAhWQAAhVA0g9QAzg+BKAAQBIAAA0A9QA0A9gBBWQABBWg0A9Qg0A+hIAAQhKAAgzg+gAhmh3QgqAyAABFQAABGAqAzQArAyA7AAQA8AAArgyQAqgyAAhHQAAhGgqgyQgrgyg8AAQg7AAgrAzg");
	this.shape_488.setTransform(1698.4,-140.6);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FFFFFF").s().p("AhjF6QgLAAgFgFQgFgFAAgJQAAgJAFgFQAFgGALAAIBjABQAoAAAZgfQAZgfAAgvIAAl5Ii7AAQgLAAgFgEQgFgGAAgJQAAgHAFgGQAEgFAMgBIDaAAIAAGfQAAAwgQAgQgRAhghAUQgXAOggAAgAApkYIAAhhIAvAAIAABhg");
	this.shape_489.setTransform(1647.9,-141.6);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FFFFFF").s().p("Ah9CXQgxg7ABhZQAAhaAxg9QAyg8BMAAQBJAAAxA0IAAgNQAAgOAEgFQAFgGAHAAQAHAAAFAGQAEAFAAAOIAABWQgBAOgDAFQgFAGgHAAQgGAAgFgFQgEgFgBgMQgCggghgdQghgdg4AAQhFAAglA1QgkA1AABCQAABKAoAvQAoAwA/AAQAlAAAmgQQAmgRAfgjQAIgJAHAAQAFAAAFAFQAFAFgBAIQAAATgmAeQg9AwhLAAQhLAAgyg6g");
	this.shape_490.setTransform(1514.3,-140.6);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FFFFFF").s().p("Ah6CRQg3hAAAhZQAAhSA0g7QAzg7BKAAQBNAAAzA9QAyA8gCBfIlBAAQAJBJArAtQArAtA+AAQAkAAAmgOQAngOAZgXQAHgHAGAAQAFAAAFAGQAFAGgBAHQAAAIgFAHQgTAWgtAUQgvAUgxAAQhPAAg3hAgAhfiDQgnAngKA/IEhAAQgKg+gognQgogog3AAQg3AAgoAng");
	this.shape_491.setTransform(1466.8,-140.6);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#FFFFFF").s().p("AiLEaQgMAAgFgGQgEgFAAgIQAAgIAEgGQAFgEAMAAIB8AAIAAnoIhbAAQgLABgFgGQgGgGAAgIQAAgIAGgFQAEgGAMAAIB5AAIAAIOIB8AAQAMAAAGAEQAEAGAAAIQAAAIgEAFQgGAGgMAAg");
	this.shape_492.setTransform(1421.1,-149.4);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FFFFFF").s().p("Ah6CRQg3hAABhZQgBhSA0g7QAyg7BLAAQBOAAAyA9QAxA8gBBfIlBAAQAJBJArAtQArAtA/AAQAjAAAmgOQAngOAZgXQAHgHAGAAQAFAAAFAGQAFAGgBAHQABAIgHAHQgRAWgvAUQguAUgwAAQhRAAg2hAgAheiDQgoAngKA/IEhAAQgKg+gognQgogog3AAQg2AAgoAng");
	this.shape_493.setTransform(1374.3,-140.6);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FFFFFF").s().p("Ah8CTQg0g9AAhWQAAhVA0g9QAzg+BJAAQBKAAAzA9QA0A9AABWQAABWg0A9QgzA+hKAAQhJAAgzg+gAhlh3QgrAyAABFQAABGArAzQAqAyA7AAQA8AAAqgyQArgygBhHQABhGgrgyQgqgyg8AAQg7AAgqAzg");
	this.shape_494.setTransform(1236.2,-140.6);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#FFFFFF").s().p("Ah6CRQg3hAABhZQAAhSAzg7QAyg7BLAAQBOAAAyA9QAxA8AABfIlCAAQAJBJArAtQArAtA/AAQAjAAAngOQAngOAYgXQAHgHAFAAQAHAAAEAGQAEAGAAAHQABAIgHAHQgRAWgvAUQguAUgwAAQhRAAg2hAgAheiDQgoAngKA/IEgAAQgJg+gognQgogog3AAQg2AAgoAng");
	this.shape_495.setTransform(1097,-140.6);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#FFFFFF").s().p("AgYDCIiDleIgfAAQgMAAgFgEQgFgGAAgJQAAgHAFgGQAFgFAMgBIB2AAQALABAFAFQAFAGAAAIQAAAIgFAGQgFAEgLAAIg1AAIB0E5IANAAIByk5Ig1AAQgLAAgFgEQgFgGAAgJQAAgHAFgGQAFgFALgBIB3AAQAMABAEAFQAFAGAAAIQAAAIgFAGQgEAEgMAAIggAAIiAFeg");
	this.shape_496.setTransform(1051.3,-140.6);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#FFFFFF").s().p("AhpDIIAABKIhKAAQgLABgFgGQgEgFAAgJQAAgIAEgFQAFgFALAAIArAAIAAnnIgrAAQgLAAgFgGQgEgFAAgIQAAgJAEgFQAFgGALABIBKAAIAAD6QA6hZBQAAQBFAAAxA8QAyA8gBBWQAABYgxA9QgyA9hEAAQhSABg4hagAg/gnQgpAxAABHQAABIApAxQApAxA2ABQA3gBApgxQApgxAAhIQAAhHgpgxQgpgyg3AAQg2AAgpAyg");
	this.shape_497.setTransform(957.6,-148.6);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#FFFFFF").s().p("AhgCrQgfgnAAg0IAAjzIgrAAQgLAAgFgFQgFgGAAgIQAAgIAFgGQAFgFALAAIBKAAIAAEZQAAAlAUAYQATAXAeAAQBMAABAhUIAAjzIg6AAQgMAAgEgFQgFgGAAgIQAAgIAFgGQAEgFAMAAIBaAAIAAFfIAaAAQAMAAAEAEQAFAGAAAIQAAAIgFAFQgEAGgMAAIg6AAIAAg3QhBBGhKAAQguAAgYgfg");
	this.shape_498.setTransform(634.9,-139.9);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#FFFFFF").s().p("AhoDIIAABKIhKAAQgMABgEgGQgFgFgBgJQABgIAFgFQAEgFAMAAIAqAAIAAnnIgqAAQgMAAgEgGQgFgFgBgIQABgJAFgFQAEgGAMABIBKAAIAAD6QA5hZBPAAQBGAAAxA8QAyA8AABWQAABYgzA9QgxA9hFAAQhRABg3hagAg/gnQgpAxAABHQAABIApAxQApAxA2ABQA3gBApgxQApgxAAhIQAAhHgpgxQgpgyg3AAQg2AAgpAyg");
	this.shape_499.setTransform(587.8,-148.6);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#FFFFFF").s().p("Ah6CRQg2hAAAhZQAAhSAzg7QAyg7BLAAQBNAAAyA9QAyA8AABfIlCAAQAJBJArAtQArAtA/AAQAjAAAngOQAngOAYgXQAHgHAFAAQAHAAAEAGQAEAGAAAHQABAIgHAHQgRAWgvAUQguAUgwAAQhQAAg3hAgAheiDQgoAngKA/IEgAAQgJg+gngnQgpgog3AAQg2AAgoAng");
	this.shape_500.setTransform(496.2,-140.6);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#FFFFFF").s().p("ABJEaQgMAAgEgGQgFgFAAgIQAAgIAFgGQAEgEAMAAIAkAAIAAjoQAAgogZgcQgZgbgrAAQgiAAgZAVQgRAOgpA0IAADwIAkAAQALAAAFAEQAFAGAAAIQAAAIgFAFQgFAGgLAAIhnAAQgLAAgGgGQgEgFAAgIQAAgIAEgGQAGgEALAAIAjAAIAAnoIgqAAQgMABgEgGQgFgGAAgIQAAgIAFgFQAEgGAMAAIBKAAIAADoQAegnAcgPQAbgQAigBQAlAAAaAQQAZAPASAhQAQAfAAAjIAADrIAkAAQAMAAAEAEQAFAGAAAIQAAAIgFAFQgEAGgMAAg");
	this.shape_501.setTransform(450.3,-149.4);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#FFFFFF").s().p("Ah6CRQg3hAAAhZQAAhSA0g7QAyg7BLAAQBNAAAyA9QAzA8gBBfIlBAAQAIBJArAtQArAtA/AAQAjAAAngOQAngOAYgXQAHgHAFAAQAHAAAEAGQAEAGABAHQAAAIgHAHQgRAWgvAUQguAUgwAAQhQAAg3hAgAheiDQgoAngKA/IEgAAQgJg+gngnQgpgog3AAQg2AAgoAng");
	this.shape_502.setTransform(218.9,-140.6);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#FFFFFF").s().p("AizEgQgLAAgFgFQgEgFAAgJQAAgJAEgFQAFgFALAAIArAAIAAnmIgrAAQgLAAgFgEQgEgGAAgJQAAgHAEgGQAFgFALgBIBKAAIAABFQAdgpAggUQAggVAsAAQAuAAAnAaQAoAaAWAvQAVAuAAAzQAABSgwA5QgxA5hHAAQhUAAg1hSIAADjIBOAAQAKAAAGAFQAEAFAAAJQAAAIgEAFQgGAGgKAAgAhAjKQgpAvAABAQAABCApAtQAoAvA4AAQA4AAAoguQAoguABhCQAAhBgoguQgogvg5AAQg4AAgoAvg");
	this.shape_503.setTransform(125.6,-132.6);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#FFFFFF").s().p("AgGEnQgRAAgLgNQgMgOABgTQgBgUAMgOQAMgNAQAAIAOAAQAPAAANAOQALANgBAUQAAATgLAOQgMANgPAAgAgJBRQgFgGgBgOIgOkwIgBgQQAAgPAJgKQAJgKAMAAQANAAAJAKQAJAKAAAQIgBAPIgOEwQgBAOgEAGQgFAGgGAAQgGAAgDgGg");
	this.shape_504.setTransform(1351.8,-255.6);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#FFFFFF").s().p("Ah6CRQg3hAABhZQgBhSA0g7QAyg7BLAAQBOAAAyA9QAxA8gBBfIlBAAQAJBJArAtQArAtA/AAQAjAAAmgOQAngOAZgXQAHgHAGAAQAFAAAFAGQAFAGgBAHQAAAIgFAHQgTAWgtAUQgvAUgwAAQhRAAg2hAgAhfiDQgnAngKA/IEhAAQgKg+gognQgogog3AAQg2AAgpAng");
	this.shape_505.setTransform(1258.8,-246.8);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#FFFFFF").s().p("AiLEaQgLAAgGgFQgEgGAAgIQAAgJAEgEQAGgGALAAIB8AAIAAnmIhbAAQgMgBgEgFQgGgGAAgIQABgIAEgGQAFgFAMAAIB5AAIAAINIB8AAQANAAAEAGQAFAEAAAJQAAAIgFAGQgEAFgNAAg");
	this.shape_506.setTransform(1120.7,-255.6);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#FFFFFF").s().p("AiyEgQgMAAgFgFQgEgFAAgJQAAgIAEgGQAFgFAMAAIAqAAIAAnlIgqAAQgMAAgFgGQgEgFAAgIQAAgJAEgFQAFgGAMABIBJAAIAABEQAdgoAggWQAhgUAqAAQAvAAAoAaQAnAaAWAvQAWAugBA0QABBRgxA4QgxA6hHAAQhUAAg1hSIAADjIBOAAQAKAAAFAFQAGAGgBAIQABAIgGAFQgFAGgKAAgAhAjKQgoAugBBCQABBAAoAuQAnAvA5AAQA4AAAogvQAogtAAhBQAAhCgnguQgogvg5AAQg5AAgnAvg");
	this.shape_507.setTransform(1073.1,-238.9);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#FFFFFF").s().p("AABgvIhFDyIgngBIhCleIgPAAQgLAAgFgFQgFgFAAgJQAAgIAFgFQAFgGALAAIBXAAQALAAAFAGQAFAFAAAJQAAAIgFAFQgFAFgLAAIgoAAIA4ErIBDjuIAlAAIBFDuIA1krIgnAAQgLAAgGgFQgEgFAAgJQAAgIAEgFQAFgGAMAAIBXAAQALAAAFAGQAFAFAAAJQAAAIgFAFQgFAFgLAAIgPAAIhBFeIgnABg");
	this.shape_508.setTransform(982,-246.9);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#FFFFFF").s().p("Ah6CRQg3hAAAhZQAAhSA0g7QAyg7BLAAQBNAAAyA9QAzA8gBBfIlBAAQAIBJArAtQArAtA/AAQAjAAAngOQAmgOAZgXQAHgHAFAAQAHAAAEAGQAEAGABAHQAAAIgHAHQgSAWguAUQguAUgwAAQhQAAg3hAgAheiDQgoAngKA/IEgAAQgJg+gngnQgpgog3AAQg3AAgnAng");
	this.shape_509.setTransform(935.3,-246.8);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#FFFFFF").s().p("Ah6CRQg3hAAAhZQAAhSA0g7QAyg7BLAAQBOAAAxA9QAzA8gBBfIlBAAQAIBJArAtQArAtA+AAQAkAAAngOQAmgOAZgXQAHgHAFAAQAGAAAFAGQAEAGABAHQAAAIgHAHQgSAWguAUQguAUgxAAQhQAAg2hAgAhfiDQgnAngKA/IEgAAQgJg+gngnQgpgog3AAQg3AAgoAng");
	this.shape_510.setTransform(796.6,-246.8);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#FFFFFF").s().p("ACRDJIAAkpQAAgcgPgTQgOgTgUAAQgRAAgTAQQgTAPgZAtIAAD6IAbAAQALAAAFAFQAFAFAAAIQAAAIgFAGQgFAFgLAAIg5AAIAAkmQAAgegPgTQgPgUgTAAQgRAAgQANQgXASgZAtIAAD6IAaAAQAMAAAEAFQAFAFABAIQgBAIgFAGQgEAFgMAAIhUAAQgMAAgFgFQgEgGAAgIQAAgIAEgFQAFgFAMAAIAaAAIAAk5IgaAAQgMAAgFgFQgEgFAAgJQAAgIAEgFQAFgGAMAAIA6AAIAAAmQAogzAoAAQAZAAASAPQATAQAMAfQAUgfAWgQQAVgPAWAAQAjAAAUAaQAbAigBApIAAEHIAbAAQAMAAAFAFQAEAFAAAIQAAAIgEAGQgFAFgMAAg");
	this.shape_511.setTransform(751.1,-247.6);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#FFFFFF").s().p("Ah8CTQg0g9ABhWQgBhVA0g9QAzg+BKAAQBIAAA0A9QA0A9gBBWQABBWg0A9Qg0A+hIAAQhKAAgzg+gAhmh3QgqAyAABFQAABGAqAzQArAyA7AAQA8AAArgyQAqgyAAhHQAAhGgqgyQgrgyg8AAQg7AAgrAzg");
	this.shape_512.setTransform(704.7,-246.8);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#FFFFFF").s().p("Ah8CXQgyg7AAhZQAAhaAzg9QAyg8BLAAQBJAAAxA0IAAgNQAAgOAFgFQAEgGAHAAQAHAAAEAGQAFAFAAAOIAABWQAAAOgFAFQgEAGgHAAQgGAAgFgFQgEgFgBgMQgCggghgdQghgdg4AAQhFAAgkA1QglA1AABCQAABKAoAvQApAwA/AAQAkAAAmgQQAmgRAggjQAHgJAGAAQAHAAAEAFQAEAFABAIQgBATglAeQg+AwhLAAQhMAAgwg6g");
	this.shape_513.setTransform(659.3,-246.8);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#FFFFFF").s().p("AiLEaQgLAAgGgFQgEgGAAgIQAAgJAEgEQAGgGALAAIB8AAIAAnmIhbAAQgLgBgFgFQgGgGABgIQAAgIAEgGQAGgFALAAIB6AAIAAINIB7AAQANAAAEAGQAFAEAAAJQAAAIgFAGQgEAFgNAAg");
	this.shape_514.setTransform(612.3,-255.6);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#FFFFFF").s().p("Ah6CRQg2hAgBhZQABhSAzg7QAzg7BKAAQBNAAAzA9QAyA8gCBfIlAAAQAIBJArAtQArAtA+AAQAkAAAmgOQAngOAZgXQAHgHAGAAQAFAAAFAGQAFAGAAAHQgBAIgFAHQgSAWguAUQgvAUgxAAQhPAAg3hAgAhfiDQgnAngKA/IEhAAQgKg+gognQgogog3AAQg3AAgoAng");
	this.shape_515.setTransform(565.5,-246.8);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#FFFFFF").s().p("AAAgvIhEDyIgngBIhBleIgQAAQgLAAgFgFQgFgFAAgJQAAgIAFgFQAFgGALAAIBXAAQAMAAAEAGQAFAFAAAJQAAAIgFAFQgEAFgMAAIgoAAIA4ErIBDjuIAkAAIBGDuIA2krIgoAAQgMAAgEgFQgGgFAAgJQAAgIAGgFQAEgGAMAAIBWAAQAMAAAFAGQAFAFAAAJQAAAIgFAFQgFAFgMAAIgPAAIhAFeIgnABg");
	this.shape_516.setTransform(519.8,-246.9);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#FFFFFF").s().p("AjEEsQghAAgOgNQgOgNAAgUQAAgUAOgNQAOgNAhAAIBcAAIA0hnIifk4QgXgDgLgMQgMgNAAgSQAAgVAOgMQAOgNAhAAIBVAAQAgAAAPANQAOAMAAAVQAAAUgOANQgOANgfAAIBtDTIBrjTQgeAAgOgNQgPgNAAgUQAAgVAPgMQAOgNAhAAIBXAAQAhAAAOANQAOAMAAAVQAAATgMANQgMAMgYACIjSGfQAhAAALAHQAVAOAAAZQAAAUgNANQgOANgiAAg");
	this.shape_517.setTransform(1632.8,-922.9);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#FFFFFF").s().p("AhFDTQgigIgdgNQgGAGgIADQgIADgHAAQgWAAgMgOQgOgOAAgiIAAgeQAAgiAOgOQAMgOAVAAQAQAAAMAKQAKAJAHAWQAVASAdAJQAfAJAlAAQA/AAAkgUQAQgJAAgLQAAgSgYgMQgYgMhJgIQhvgLglghQglggAAgxQAAgxApghQA4gtBdAAQAeAAAeAHQAdAFAbANQAIgGAIgDQAHgEAGABQATAAANAOQANAOAAAhIAAAWQAAAegIAMQgOAUgYAAQgRAAgNgKQgNgLgDgQQgXgPgYgGQgZgIgaABQg1AAggARQgNAIAAAIQgBALAUAKQANAHAzAHQBaANAkAMQAvARAaAfQAaAhgBAkQAAAygrAhQg+AxhlAAQgngBghgGg");
	this.shape_518.setTransform(1559.6,-932.4);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FFFFFF").s().p("AhkD3QgrgmABg1IAAjKIgiAAQghAAgOgNQgPgNAAgUQAAgVAPgMQAOgNAhAAIAiAAIAAhTQgBghANgOQANgPAVAAQAUAAANAPQAMAOAAAhIAABTICqAAQAhAAAOANQAOAMAAAVQAAAUgOANQgOANghAAIiqAAIAAC4QAAAdAMAKQAUAOAvAAQBHAAA7geQAXgLANAAQASAAAOANQAMAOAAATQAAASgOANQgWAVhAASQhBASgtAAQhVAAgrglg");
	this.shape_519.setTransform(1415.9,-939);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#FFFFFF").s().p("ABsDSQghAAgOgNQgPgMAAgWQAAgTAOgNQAOgNAdAAIAAitQAAgegQgOQgVgSgqAAQgfAAgYAMQgYANglAoIAACqQAkAAAKAGQAWAOAAAaQAAAUgOANQgOANgiAAIhoAAQgiAAgNgNQgPgMAAgWQAAgZAWgOQALgGAjAAIAAjfQgdAAgOgNQgOgNAAgUQAAgVAOgMQAOgNAhAAIBYAAIAAAfQAZgWAfgKQAegLAiAAQBSAAAwAyQAlApAABCIAACqQAeAAAOANQAOAMAAAVQAAAUgOANQgPANghAAg");
	this.shape_520.setTransform(1339.8,-933.1);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#FFFFFF").s().p("Ai5EQQgiAAgNgMQgPgNAAgVQAAgUAPgNQAOgNAhABIAPAAIAAloIgPAAQgiAAgNgNQgPgMAAgVQAAgVAPgMQANgOAiAAIGwABIAACMQAAAigMAOQgNAOgVAAQgUAAgMgOQgNgOgBgiIAAgwIjqAAIAACGIBQAAQABglAGgKQAOgVAZgBQAVABANAOQAMAOAAAhIAABpQAAAhgMAPQgNANgVAAQgZABgOgXQgGgKgBgkIhQAAIAACHIBeAAQAhgBAPANQANANAAAVQAAAUgNANQgPAMghAAg");
	this.shape_521.setTransform(1195.1,-939.4);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#FFFFFF").s().p("AisCbQhCg/AAhaQAAhhBIg9QBIg8BdgBQA3ABAvATQAvAUAXAXQAgAhAVAxQAOAiAAAsIAAAoIl4AAQAPAjAkAWQAlAWA9AAQAzAABVgWQAjgJANAAQATAAANANQAMANAAAUQAAASgNAMQgTARhFAPQhGAQhAAAQhuAAhCg/gAhQhoQgiASgWAoIERAAQgWgoghgSQgjgVgvABQgtgBgjAVg");
	this.shape_522.setTransform(1046.3,-932.4);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#FFFFFF").s().p("ABhEjQghAAgOgMQgOgNAAgVQgBgZAWgOQALgHAjAAIAAimQAAgjgRgOQgUgUgqAAQgeAAgWAMQgZAMgoAnIAACsQAkAAALAHQAVAOAAAZQAAAVgOANQgOAMghAAIhpAAQghAAgOgMQgOgNAAgVQgBgZAWgOQAMgHAiAAIAAmNIgQAAQghAAgOgNQgOgNAAgVQAAgUAOgMQAOgNAhAAIBsAAIAADEQAegRAdgIQAdgJAdAAQAwAAAlAQQAlARAZAjQAZAiAAA0IAACtQAiAAALAHQAWAOAAAZQAAAVgOANQgOAMgiAAg");
	this.shape_523.setTransform(973.7,-941.3);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#FFFFFF").s().p("AhkD3QgrgmAAg1IAAjKIghAAQghAAgOgNQgOgNAAgUQAAgVAOgMQAOgNAhAAIAhAAIAAhTQAAghAOgOQAMgPAVAAQAUAAANAPQANAOAAAhIAABTICpAAQAhAAAOANQAOAMAAAVQAAAUgOANQgOANghAAIipAAIAAC4QAAAdALAKQATAOAwAAQBGAAA8geQAXgLANAAQASAAANANQANAOABATQAAASgPANQgWAVhAASQhCASgsAAQhVAAgrglg");
	this.shape_524.setTransform(903.5,-939);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#FFFFFF").s().p("AhkEzQghAAgPgNQgOgNABgUQgBgVAOgMQAPgNAhgBIBlAAQApABAYgXQAXgXABgjIAAgtQgfAUgfAJQggALghAAQheAAg/g/QhAg/AAhbQAAhdBAg+QA/g/BeAAQAjAAAfAKQAgALAdAUIAAgbIBrAAQAhAAAPAMQAOANAAAVQAAAUgOANQgPANghAAIgQAAIAAFOQABAwgVAlQgUAkgqAZQgrAbg1AAgAh/iwQgnAlAAAyQAAA0AnAlQAlAkA1AAQAzAAAmgkQAlglAAg0QAAgyglglQgmgmgzAAQg1AAglAmg");
	this.shape_525.setTransform(755.4,-923.6);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#FFFFFF").s().p("ABsDSQghAAgOgNQgPgMAAgWQAAgTAOgNQAOgNAdAAIAAitQAAgegQgOQgVgSgqAAQgfAAgYAMQgYANglAoIAACqQAkAAAKAGQAWAOAAAaQAAAUgOANQgOANgiAAIhoAAQgiAAgNgNQgPgMAAgWQAAgZAWgOQALgGAjAAIAAjfQgdAAgOgNQgOgNAAgUQAAgVAOgMQAOgNAhAAIBYAAIAAAfQAZgWAfgKQAegLAiAAQBSAAAwAyQAlApAABCIAACqQAeAAAOANQAOAMAAAVQAAAUgOANQgPANghAAg");
	this.shape_526.setTransform(681,-933.1);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#FFFFFF").s().p("AibEjQgiAAgNgMQgPgNAAgVQAAgUAPgNQANgNAiAAIBuAAIAAjfIhKAAQghAAgOgMQgPgNAAgVQAAgUAPgNQANgNAiAAIClAAIAAE7IBvAAQAhAAAPANQANANAAAUQAAAVgNANQgPAMghAAgAhLjBIAAhhIBsAAIAABhg");
	this.shape_527.setTransform(607.8,-941.3);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#FFFFFF").s().p("AhjD3QgsgmABg1IAAjKIgiAAQghAAgOgNQgPgNAAgUQAAgVAPgMQAOgNAhAAIAiAAIAAhTQgBghANgOQANgPAVAAQAUAAANAPQAMAOAAAhIAABTICqAAQAhAAAOANQAOAMAAAVQAAAUgOANQgOANghAAIiqAAIAAC4QAAAdAMAKQAUAOAvAAQBHAAA7geQAXgLANAAQASAAAOANQANAOgBATQAAASgOANQgWAVhAASQhBASgtAAQhVAAgqglg");
	this.shape_528.setTransform(537.5,-939);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#FFFFFF").s().p("AixDSQghAAgOgNQgOgMAAgWQAAgTAOgNQAOgNAhAAIA3AAIAAjfIghAAQghAAgOgNQgPgNAAgUQAAgVAPgMQAOgNAhAAIB9AAIAAA6QA5gqAigOQAhgOAdAAQAtAAAqAhQAdAWAAAYQAAAUgNANQgOAOgUAAQgRAAgSgRQgTgRgPAAQgTAAgnAZQgmAYg5AwIAACKICCAAQAiAAAOANQAOAMAAAVQAAAUgOANQgOANgiAAg");
	this.shape_529.setTransform(462.6,-933.1);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#FFFFFF").s().p("AhjD3QgsgmABg1IAAjKIgiAAQghAAgOgNQgPgNAAgUQAAgVAPgMQAOgNAhAAIAiAAIAAhTQgBghANgOQANgPAVAAQAUAAANAPQAMAOABAhIAABTICpAAQAhAAAOANQAOAMAAAVQAAAUgOANQgOANghAAIipAAIAAC4QgBAdAMAKQAUAOAvAAQBHAAA7geQAXgLANAAQASAAAOANQANAOgBATQAAASgOANQgWAVhBASQhAASgtAAQhVAAgqglg");
	this.shape_530.setTransform(317.9,-939);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#FFFFFF").s().p("AhAEVQgkgKgjgSQgMAOgHAEQgIAFgKAAQgVgBgNgOQgNgNAAgiIAAg+QAAggANgPQANgOAVAAQAQAAALAIQALAJAGAVQAFATAHAHQANAOAhAPQAhAOAnAAQA+AAAngdQAZgSAAgZQAAgRgMgPQgMgPgbgKQgTgHg9gLQhLgPgngTQgmgTgXgkQgXgkABgqQAAhCA3gxQA3gyBYAAQAjAAAeAIQAfAIAYAQQATgRARAAQAVAAAMAOQANAOAAAgIAABGQAAAhgNAOQgMAOgVABQgRAAgNgLQgKgHgEgYQgFgXgIgJQgNgSgagLQgagMghAAQgyAAgdAYQgdAWAAAZQAAARAMARQAMAQAXAJQAPAGBGAOQBHANAmARQAlAQAaAjQAZAkAAAxQAABEgwApQhAA2hjAAQglAAgkgJg");
	this.shape_531.setTransform(241.9,-939.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_469},{t:this.shape_468},{t:this.shape_467,p:{x:391.9,y:101.2}},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457,p:{x:1270.3,y:101.2}},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454,p:{x:1489.9,y:101.2}},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444,p:{x:892.3,y:786}},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439,p:{x:1170.2,y:786.7}},{t:this.shape_438,p:{x:1217.8,y:795.3}},{t:this.shape_437},{t:this.shape_436,p:{x:1309.5,y:786.2}},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433,p:{x:177.1,y:892.4}},{t:this.shape_432},{t:this.shape_431,p:{x:268.5,y:893}},{t:this.shape_430,p:{x:314.7,y:893}},{t:this.shape_429,p:{x:407.2,y:886.8}},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424,p:{x:684.5,y:886.8}},{t:this.shape_423,p:{x:730.7,y:886.8}},{t:this.shape_422},{t:this.shape_421,p:{x:823,y:892.2}},{t:this.shape_420,p:{x:916,y:893}},{t:this.shape_419},{t:this.shape_418,p:{x:1008,y:893}},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415,p:{x:1192.9,y:886.8}},{t:this.shape_414,p:{x:1239.1,y:893}},{t:this.shape_413,p:{x:1331.6,y:893}},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408,p:{x:1562.7,y:886.8}},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403,p:{x:290.8,y:1232.4}},{t:this.shape_402},{t:this.shape_401,p:{x:401.2,y:1232.4}},{t:this.shape_400,p:{x:458,y:1232.4}},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396,p:{x:732.4,y:1232.4}},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388,p:{x:1342.5,y:1241}},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382,p:{x:1726,y:1232.4}}]}).to({state:[{t:this.shape_531},{t:this.shape_530},{t:this.shape_467,p:{x:389,y:-932.4}},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_457,p:{x:1267.4,y:-932.4}},{t:this.shape_520},{t:this.shape_519},{t:this.shape_454,p:{x:1487,y:-932.4}},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_444,p:{x:889.4,y:-247.6}},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_439,p:{x:1167.3,y:-246.8}},{t:this.shape_438,p:{x:1214.9,y:-238.2}},{t:this.shape_505},{t:this.shape_436,p:{x:1306.6,y:-247.4}},{t:this.shape_504},{t:this.shape_503},{t:this.shape_433,p:{x:174.2,y:-141.1}},{t:this.shape_502},{t:this.shape_431,p:{x:265.6,y:-140.6}},{t:this.shape_430,p:{x:311.8,y:-140.6}},{t:this.shape_429,p:{x:404.3,y:-146.7}},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_424,p:{x:681.6,y:-146.7}},{t:this.shape_423,p:{x:727.8,y:-146.7}},{t:this.shape_418,p:{x:774,y:-140.6}},{t:this.shape_421,p:{x:820.1,y:-141.3}},{t:this.shape_420,p:{x:913.1,y:-140.6}},{t:this.shape_497},{t:this.shape_414,p:{x:1005.1,y:-140.6}},{t:this.shape_496},{t:this.shape_495},{t:this.shape_415,p:{x:1190,y:-146.7}},{t:this.shape_494},{t:this.shape_413,p:{x:1328.7,y:-140.6}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_408,p:{x:1559.8,y:-146.7}},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_403,p:{x:287.9,y:198.8}},{t:this.shape_485},{t:this.shape_401,p:{x:398.3,y:198.8}},{t:this.shape_400,p:{x:455.1,y:198.8}},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_396,p:{x:729.5,y:198.8}},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_388,p:{x:1339.6,y:207.4}},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_382,p:{x:1723.1,y:198.8}}]},25).to({state:[{t:this.shape_531},{t:this.shape_530},{t:this.shape_467,p:{x:389,y:-932.4}},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_457,p:{x:1267.4,y:-932.4}},{t:this.shape_520},{t:this.shape_519},{t:this.shape_454,p:{x:1487,y:-932.4}},{t:this.shape_518},{t:this.shape_517}]},1).to({state:[]},3).wait(1));

	// background
	this.instance_2 = new lib.background();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-40,-77,1.533,3.119);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({x:-43,y:-1111},0).wait(1).to({y:-621},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(920,463,1962.8,2245.9);
// library properties:
lib.properties = {
	id: '384BAE021725F840B0E84DA743BD100C',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/newMenu_atlas_.png?1578380233243", id:"newMenu_atlas_"},
		{src:"components/lib/jquery-2.2.4.min.js?1578380233543", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1578380233543", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1578380233543", id:"an.Video"}
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
an.compositions['384BAE021725F840B0E84DA743BD100C'] = {
	getStage: function() { return exportRoot.getStage(); },
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


// Virtual camera API : 

AdobeAn.VirtualCamera = new function() {
	var _camera = new Object();
	function VirtualCamera(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined )
	{
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VirtualCamera.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VirtualCamera.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VirtualCamera.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VirtualCamera.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VirtualCamera.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VirtualCamera.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VirtualCamera.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VirtualCamera.prototype.resetZoom = function() {
	this.setZoom(100);
};

VirtualCamera.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VirtualCamera.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VirtualCamera.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VirtualCamera.prototype.resetRotation = function() {
this.setRotation(0);
};

VirtualCamera.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VirtualCamera.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VirtualCamera.prototype.getZDepth = function() {
	return this.camera.depth;
}
VirtualCamera.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VirtualCamera.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VirtualCamera.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
if(this.camera.pinToObject != undefined) {
this.camera.pinToObject.pinOffsetX = offsetX;
this.camera.pinToObject.pinOffsetY = offsetY;
this.camera.pinToObject.pinOffsetZ = offsetZ;
}
};

VirtualCamera.prototype.unpinCamera = function() {
this.camera.pinToObject = undefined;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VirtualCamera(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
VirtualCamera.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};
}

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
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

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;