import React from "react";

const Toggles = () => {
  return (
    <div class="component" id="toggles">
      <h1>Toggles</h1>
      <p>
        A toggle button allows the user to change a setting between two states.{" "}
      </p>
      <div class="component-preview">
        <div class="form-toggle">
          <input
            type="checkbox"
            class="form-toggle-input"
            id="check-toggle"
            //checked
          />
          <label for="check-toggle" class="form-toggle-label"></label>
        </div>
        <div class="form-toggle form-toggle-danger">
          <input
            type="checkbox"
            class="form-toggle-input"
            id="check-toggle-danger"
            //checked
          />
          <label for="check-toggle-danger" class="form-toggle-label"></label>
        </div>
        <div class="form-toggle form-toggle-warning">
          <input
            type="checkbox"
            class="form-toggle-input"
            id="check-toggle-warning"
            //checked
          />
          <label for="check-toggle-warning" class="form-toggle-label"></label>
        </div>
        <div class="form-toggle form-toggle-success">
          <input
            type="checkbox"
            class="form-toggle-input"
            id="check-toggle-success"
            //checked
          />
          <label for="check-toggle-success" class="form-toggle-label"></label>
        </div>
        <div class="form-toggle form-toggle-disabled">
          <input
            type="checkbox"
            class="form-toggle-input"
            id="check-toggle-disabled"
            disabled
          />
          <label for="check-toggle-disabled" class="form-toggle-label"></label>
        </div>
        &lt;/div&gt;
        <xmp class="mt-12 mb-12">
          &lt;div class="form-toggle"&gt; &lt;input type="checkbox"
          class="form-toggle-input" id="check-toggle" /&gt; &lt;label
          for="check-toggle" class="form-toggle-label"&gt;&lt;/label&gt;
          &lt;/div&gt;
          <br />
          &lt;div class="form-toggle form-toggle-danger"&gt; &lt;input
          type="checkbox" class="form-toggle-input" id="check-toggle-danger"
          /&gt; &lt;label for="check-toggle-danger"
          class="form-toggle-label"&gt;&lt;/label&gt; &lt;/div&gt;
          <br />
          &lt;div class="form-toggle form-toggle-warning"&gt; &lt;input
          type="checkbox" class="form-toggle-input" id="check-toggle-warning"
          /&gt; &lt;label for="check-toggle-warning"
          class="form-toggle-label"&gt;&lt;/label&gt; &lt;/div&gt;
          <br />
          &lt;div class="form-toggle form-toggle-success"&gt; &lt;input
          type="checkbox" class="form-toggle-input" id="check-toggle-success"
          /&gt; &lt;label for="check-toggle-success"
          class="form-toggle-label"&gt;&lt;/label&gt; &lt;/div&gt;
          <br />
          &lt;div class="form-toggle form-toggle-disabled"&gt; &lt;input
          type="checkbox" class="form-toggle-input" id="check-toggle-disabled"
          disabled /&gt; &lt;label htmlFor="check-toggle-disabled"
          class="form-toggle-label" &gt;&lt;/label&gt; &lt;/div&gt;
        </xmp>
      </div>
    </div>
  );
};

export default Toggles;
