import MenuVis from '@services/menuvis';

export default Widget.Window({
	name: 'clickoff',
	visible: MenuVis.bind_clickoff(),
	layer: 'top',
	anchor: ['top', 'left', 'right', 'bottom'],
	exclusivity: 'ignore',
	class_name: 'ClickOff',
	child: Widget.EventBox({
		on_primary_click: MenuVis.closeall,
		on_secondary_click: MenuVis.closeall,
		on_middle_click: MenuVis.closeall,
		setup: self => self.keybind('Escape', MenuVis.closeall),
	}),
});