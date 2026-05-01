---
layout: ../layouts/BaseLayout.astro
title: "BaseControl"
output: html_document
---

**This control type is abstract and can not be used directly.**

Every jamovi user control inherits from `BaseControl`.

## Properties

All jamovi controls have the following properties.

Property      | Description                               | Form
------------- | ------------------------------------------| --------------------
`type`  | Set the type of control, for a list of types click [here](/ui/advanced-design#Controls). | enum of valid Control names
`name`  | The name of the control. This allows for access to the control when customizing behavior, for example enabling/disabling. It needs to be unique to all other controls. | Unique string
`stage` | This is the stage of development. The control will only be visible in the appropriate jamovi instance. | 0 : released [always visible]<br />1 : under development<br />2 : proposed
`margin`  | The level of spacing around the control when displayed. | *enum*: small, normal, large, none
`cell`   | The zero-based row and column index where the control is to be placed within the parent `LayoutBox`. | object consisting of<br />`row`: row index<br />`column`: column index
`stretchFactor`   | A stretch factor greater than zero will cause the control to fill the available horizontal space by an amount proportional to the sum of all other sibling `stretchFactors` defined in the same row. It is important to note that when specifying a non-zero `stretchFactor` on a control, it is required that the parent of the control also have a non-zero `stretchFactor`. Failing to do so will result in unhelpful layout. | number >= 0
`horizontalAlignment`   | Specifies the horizontal alignment of the control when placed in the parent `LayoutBox` cell | *enum*: left, center, right
`verticalAlignment`   | Specifies the vertical alignment of the control when placed in the parent `LayoutBox` cell | *enum*: top, center, bottom
`minWidth`   | Specifies the minimum width of the `LayoutBox` cell into which the control will be placed. | number >= 0
`minHeight`   | Specifies the minimum height of the `LayoutBox` cell into which the control will be placed. | number >= 0
`maxWidth`   | Specifies the maximum width of the `LayoutBox` cell into which the control will be placed. | number >= 0
`maxHeight`   | Specifies the maximum height of the `LayoutBox` cell into which the control will be placed. | number >= 0

------------------------------------

## Controls

Below is a list of controls that inherit from `BaseControl`.

### Layout Controls

- [LayoutBox](/ui/layoutbox)
- [CollapseBox](/ui/collapsebox)
- [Supplier](/ui/supplier)
- [VariableSupplier](/ui/variablesupplier)
- [TargetLayoutBox](/ui/targetlayoutbox)

#### Parent Controls

- [CheckBox](/ui/checkbox)
- [RadioButton](/ui/radiobutton)
- [Label](/ui/label)

### Option Controls

- [TextBox](/ui/textbox)
- [CheckBox](/ui/checkbox)
- [RadioButton](/ui/radiobutton)
- [ComboBox](/ui/combobox)
- [Label](/ui/label)
- [ListBox](/ui/listbox)
- [VariableLabel](/ui/variablelabel)
- [TermLabel](/ui/termlabel)

### Display Controls

- [Label](/ui/label)