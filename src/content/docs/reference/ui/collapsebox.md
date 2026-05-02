---
layout: ../layouts/BaseLayout.astro
title: "CollapseBox"
type: article
description: "Technical reference for the jamovi UI CollapseBox control, which allows for grouping options in an expandable/collapsible section."
output: html_document
---

**Inherits from [`LayoutBox`](/ui/layoutbox)**

The `CollapseBox` is a `LayoutBox` that can be collapsed down to a label so that advanced options can be hidden until needed.

## Properties

In addition to any inherited properties, a `CollapseBox` supports:

Property      | Description                               | Form                 |
------------- | ------------------------------------------| -------------------- |
`collapsed`  | Sets the initial collapsed state of the control. | boolean
`label`  | Sets the text that will be displayed in the label bar of the control. | string

----------------------------------------

