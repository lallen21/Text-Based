const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Text,
		C3.Plugins.Sprite,
		C3.Plugins.Flowchart,
		C3.Plugins.Mouse,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Flowchart.Acts.StartFlowchart,
		C3.Plugins.Flowchart.Cnds.OnAnyNodeChange,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Flowchart.Exps.OutputValue,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Flowchart.Acts.GotoNextFlowchartNode
	];
};
self.C3_JsPropNameTable = [
	{PathB: 0},
	{BackgroundImage: 0},
	{PathA: 0},
	{FlowchartController: 0},
	{Mouse: 0},
	{TextforScene: 0},
	{PathC: 0},
	{subtext: 0}
];

self.InstanceType = {
	PathB: class extends self.ITextInstance {},
	BackgroundImage: class extends self.ISpriteInstance {},
	PathA: class extends self.ITextInstance {},
	FlowchartController: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	TextforScene: class extends self.ITextInstance {},
	PathC: class extends self.ITextInstance {},
	subtext: class extends self.ITextInstance {}
}