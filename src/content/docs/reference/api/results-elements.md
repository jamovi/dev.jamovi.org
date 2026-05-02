---
layout: ../layouts/BaseLayout.astro
title: Results Elements
description: Overview of jamovi Results Elements, the building blocks of an analysis output, including the Results Tree and dynamic creation in R.
type: article
---

Results Elements are the building blocks of a jamovi analysis output. They are R6 objects that jamovi automatically instantiates based on the [Results Definition](/api/results-definition) (`.r.yaml`) of your module.

In your analysis R code, these elements are accessed via `self$results`. For example, if you have a table named `resultsTable` defined in your `.r.yaml`, you can access it in R using:

```r
self$results$resultsTable
```

## The Results Tree

The results of an analysis are organized in a hierarchical structure known as the **Results Tree**. The root of this tree is `self$results` (which is itself a [Group](/api/group) element). 

Elements like [Groups](/api/group) and [Arrays](/api/array) can contain other elements, allowing you to create complex, nested output structures.

## Relationship to YAML

The available elements and their initial configuration (such as titles, visibility, and default settings) are defined in the `.r.yaml` file. When an analysis is run, jamovi reads this definition and creates the corresponding R6 objects. While you can modify many properties of these objects at runtime (e.g., changing a title or hiding a table), their fundamental structure is determined by the YAML.

## Element Types

jamovi provides several types of results elements, each designed for a specific purpose:

| Element | Description |
|---------|-------------|
| [Table](/api/table) | The most common element, used for displaying tabular data, statistics, and coefficients. |
| [Image](/api/image) | Used for displaying plots and other graphical output. |
| [Group](/api/group) | A container used to group related elements together. |
| [Array](/api/array) | A dynamic container that can hold multiple instances of the same element type (e.g., a table for each level of a factor). |
| [Notice](/api/notice) | Used for displaying informational messages, warnings, or errors. |
| [Preformatted](/api/preformatted) | Used for displaying raw text output, often from other R packages. |
| [Html](/api/html) | Used for displaying custom HTML content. |

## Common API

All results elements share a common set of properties and methods. These can be accessed using the `$` operator.

### Properties

#### name
A string specifying the name of the element as defined in the `.r.yaml`.

#### title
A string specifying the title of the element.

#### visible
A boolean (`TRUE` or `FALSE`) indicating whether the element is currently visible in the jamovi results panel.

#### status
A string indicating the current status of the element. Possible values are:
- `'inited'`: The element has been initialized but not yet run.
- `'running'`: The analysis is currently calculating values for this element.
- `'complete'`: The element has finished running and is displaying its final results.
- `'error'`: An error occurred during the calculation of this element.

#### state
The state object associated with the element, used for caching and performance optimization.

### Methods

#### setTitle(title)
Sets the title of the element.
- `title`: A string containing the new title.

#### setVisible(visible)
Sets the visibility of the element.
- `visible`: `TRUE` to show the element, `FALSE` to hide it.

#### setStatus(status)
Sets the status of the element.
- `status`: One of `'inited'`, `'running'`, `'complete'`, or `'error'`.

#### setError(message)
Sets the element's status to `'error'` and displays the provided error message.
- `message`: A string containing the error message.

#### setState(object)
Sets the state object for the element.
- `object`: The object to be stored as state.

## Dynamic Creation

While most results elements are defined in the `.r.yaml` file, they can also be created dynamically in R during the execution of an analysis. This is useful for output structures that depend on the data or for conditional elements like warnings.

### Use Cases

- **Conditional Warnings**: Displaying a [Notice](/api/notice) only when certain conditions (e.g., assumption violations) are met.
- **Dynamic Output**: Using [Arrays](/api/array) to create a variable number of tables or plots based on the input data.

### Methods

To add a dynamically created element to the results, you can use the `insert()` method on a [Group](/api/group) object.

#### insert(index, element)
Inserts an element at a specific position within a group.
- `index`: The 1-based index where the element should be inserted.
- `element`: The results element object to insert.

Example:
```r
notice <- jmvcore::Notice$new(options=self$options, name='dynamicNotice')
notice$setContent("This is a dynamic notice.")
self$results$insert(1, notice)
```
