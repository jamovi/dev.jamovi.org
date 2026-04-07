---
layout: ../layouts/BaseLayout.astro
title: "Development Cheat Sheet"
description: "A quick reference guide for building jamovi modules, analyses, and results."
---

A quick reference for the essential components and commands used in jamovi module development.

<div class="cheat-grid">

  <div class="cheat-card">
    <h3><span>📂</span> Project Structure</h3>
    <ul>
      <li><code>jamovi/0000.yaml</code>: Module metadata (name, version).</li>
      <li><code>jamovi/analysis.a.yaml</code>: UI and input options definition.</li>
      <li><code>jamovi/analysis.r.yaml</code>: Results and table structure.</li>
      <li><code>jamovi/analysis.u.yaml</code>: UI layout and grouping.</li>
      <li><code>R/analysis.b.R</code>: R implementation (R6 class).</li>
    </ul>
  </div>

  <div class="cheat-card">
    <h3><span>🛠️</span> Essential Commands</h3>
    <p>Run these from within your module directory in R:</p>
    <ul>
      <li><code>jmvtools::install()</code>: Compiles and installs the module into jamovi.</li>
      <li><code>jmvtools::check()</code>: Validates the module structure.</li>
      <li><code>jmvtools::prepare()</code>: Regenerates R source files from YAML.</li>
      <li><code>devtools::test()</code>: Runs the automated test suite.</li>
    </ul>
  </div>

  <div class="cheat-card">
    <h3><span>📊</span> Data Types</h3>
    <p>Used in <code>.a.yaml</code> for VariableSuppliers:</p>
    <ul>
      <li><code>Continuous</code>: Scale/Interval data.</li>
      <li><code>Nominal</code>: Categorical data.</li>
      <li><code>Ordinal</code>: Ordered categorical data.</li>
      <li><code>NominalText</code>: Text-based categorical data.</li>
    </ul>
  </div>

  <div class="cheat-card">
    <h3><span>🎛️</span> UI Controls</h3>
    <p>Common types used in <code>.u.yaml</code>:</p>
    <ul>
      <li><code>VariableSupplier</code>: The source list of variables.</li>
      <li><code>TargetLayoutBox</code>: Drop target for variables.</li>
      <li><code>CheckBox</code>: Boolean toggle.</li>
      <li><code>ComboBox</code>: Dropdown selection.</li>
      <li><code>RadioButton</code>: Mutually exclusive options.</li>
      <li><code>TextBox</code>: Text or numeric input.</li>
    </ul>
  </div>

  <div class="cheat-card">
    <h3><span>📝</span> R Implementation</h3>
    <p>Common patterns in <code>.b.R</code>:</p>
    <ul>
      <li><code>self$options$name</code>: Access user inputs.</li>
      <li><code>self$data</code>: Access the data frame.</li>
      <li><code>self$results$name</code>: Access a results element.</li>
      <li><code>table$setRow(rowKey=k, values=list(...))</code>: Populate a table row.</li>
      <li><code>table$setStatus('complete')</code>: Signal completion.</li>
    </ul>
  </div>

  <div class="cheat-card">
    <h3><span>✨</span> Results Elements</h3>
    <p>Common types used in <code>.r.yaml</code>:</p>
    <ul>
      <li><code>Table</code>: APA-formatted statistical tables.</li>
      <li><code>Image</code>: Plots and graphical output (ggplot2).</li>
      <li><code>Preformatted</code>: Raw text or R console output.</li>
      <li><code>Array</code>: Dynamic list of tables or images.</li>
      <li><code>Html</code>: Custom rich text or web-based content.</li>
    </ul>
  </div>

  <div class="cheat-card cheat-grid-wide">
    <h3><span>💡</span> Pro Tips</h3>
    <ul>
      <li><strong>Guard Clauses</strong>: Use <code>if (is.null(self$options$dep)) return()</code> at the start of your <code>.run()</code> function to prevent errors when inputs are missing.</li>
      <li><strong>Dev Mode</strong>: Enable <strong>Development Mode</strong> in jamovi settings to see advanced stack traces and debug output.</li>
      <li><strong>Versioning</strong>: Increment your version in <code>0000.yaml</code> before sharing your <code>.jmo</code> file to ensure users see the update.</li>
    </ul>
  </div>

</div>
