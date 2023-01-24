import React from "react";

const CheckBox = () => {
  return (
    <div class="component" id="checkboxes">
      <h1>Checkboxes</h1>
      <p>Checkboxes allow the user to select one or more options from a set.</p>
      <div class="component-preview">
        <div class="form-checkbox">
          <input
            type="checkbox"
            class="form-checkbox-input"
            id="check"
            checked
          />
          <label for="check" class="form-checkbox-label">
            Default
          </label>
        </div>
        <div class="form-checkbox form-checkbox-danger">
          <input
            type="checkbox"
            class="form-checkbox-input"
            id="check-danger"
            checked
          />
          <label for="check-danger" class="form-checkbox-label">
            Danger
          </label>
        </div>
        <div class="form-checkbox form-checkbox-warning">
          <input
            type="checkbox"
            class="form-checkbox-input"
            id="check-warning"
            checked
          />
          <label for="check-warning" class="form-checkbox-label">
            Warning
          </label>
        </div>
        <div class="form-checkbox form-checkbox-success">
          <input
            type="checkbox"
            class="form-checkbox-input"
            id="check-success"
            checked
          />
          <label for="check-success" class="form-checkbox-label">
            Success
          </label>
        </div>
        <div class="form-checkbox form-checkbox-disabled">
          <input
            type="checkbox"
            class="form-checkbox-input"
            id="check-disabled"
            disabled
          />
          <label for="check-disabled" class="form-checkbox-label">
            Disabled
          </label>
        </div>

        <xmp class="mt-12 mb-12">
          &lt;div class="form-checkbox"&gt; <br /> &lt;input type="checkbox"
          class="form-checkbox-input" id="check" /&gt;
          <br /> &lt;label for="check" class="form-checkbox-label"&gt; Default
          &lt;/label&gt;
          <br />
          <br /> &lt;/div&gt; &lt;div class="form-checkbox
          form-checkbox-danger"&gt; <br /> &lt;input type="checkbox"
          class="form-checkbox-input" id="check-danger" /&gt;
          <br />
          &lt;label for="check-danger" class="form-checkbox-label"&gt; <br />
          Danger &lt;/label&gt; &lt;/div&gt; <br />
          &lt;div class="form-checkbox form-checkbox-warning"&gt;
          <br /> &lt;input type="checkbox" class="form-checkbox-input"
          id="check-warning" /&gt;
          <br /> &lt;label for="check-warning" class="form-checkbox-label"&gt;
          <br /> Warning &lt;/label&gt; &lt;/div&gt;
          <br />
          <br /> &lt;div class="form-checkbox form-checkbox-success"&gt;
          <br /> &lt;input type="checkbox" class="form-checkbox-input"
          id="check-success" /&gt;
          <br /> &lt;label for="check-success" class="form-checkbox-label"&gt;
          <br /> Success &lt;/label&gt; &lt;/div&gt;
          <br />
          <br /> &lt;div class="form-checkbox form-checkbox-disabled"&gt;
          <br /> &lt;input type="checkbox" class="form-checkbox-input"
          id="check-disabled" disabled /&gt;
          <br />
          &lt;label for="check-disabled" class="form-checkbox-label"&gt;
          <br />
          Disabled &lt;/label&gt;
          <br />
        </xmp>
      </div>
    </div>
  );
};

export default CheckBox;
