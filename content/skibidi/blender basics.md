---
title: "blender basics"
tags:
  - fetus
---
## shortcuts
(shortcuts are editor dependant)

| grab objects                                     | G<br>(x,y,z for axis) |
| ------------------------------------------------ | --------------------- |
| keyframe                                         | I                     |
| render                                           | F12                   |
| toggle editor fullscreen                         | ctrl+space            |
| scroll (tabs, values and dropdowns)              | ctrl+mousewheel       |
| rename object                                    | F2                    |
| search                                           | F3                    |
| Quick favorites                                  | Q                     |
| walk mode (use to change camera position easily) | Shift + ~             |
| center camera on object                          | . (numpad)            |
| selection                                        | W                     |
## note because i keep forgetting stuff -\_\_-
GCBoost - Blender Launch Pad Download Link for later: https://zeroupload.com/folder/48d7a81694d045b537448008556a2754/CGBoost_-_Blender_Launch_Pad
### UI/nav
- editors are hidden and unhidden, not deleted, the data is still there
- workspaces are a thing at the top. default startup workspace can be changed 
- default editor terminology: 
	- 3d viewport
	- outliner
	- properties editor
	- timeline
- editors usually have:
	- a header (top)
		- editor switcher (top left)
	- a toolbar (left) (channels for the timeline editor not toolbar)
	- sidebar (right)
- editor actions:
	- left click corner and drag into editor to split. drag into other editor to merge. shift+left click to open new window. ctrl+drag to switch editor positions
	- 3d viewport:
		- middle mouse to rotate, hold shift+middle mouse to strafe, scroll to zoom in and out
	- 2d infinite canvas type editors (compositor, shader editor, geometry nodes, uv etc): 
		- middle mouse to strafe
### object basics 
- its all objects. but they have different data tied to them. the objects by themselves just have location info and basic shit like that. its when mesh data and other data types are tied to it that it becomes a proper object. 
- multiple objects can use the same data. useful when dealing with duplicates to edit something everywhere at once
	- "same data" not limited to mesh data only. materials, camera, light etc data can be reused across multiple objects
- unused object data will get deleted on project reload unless a fake user is added (shield icon)