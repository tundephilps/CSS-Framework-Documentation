import React from "react";

const Radio = () => {
  return (
    <div class="component" id="radios">
      <h1>Radios</h1>
      <p>
        Radio buttons allow the user to select one option from a set. For proper
        styling, use one of the five required contextual classes. (e.g.,
        .form-radio-success).
      </p>
      <div class="component-preview">
        <div class="form-radio-button mb-4">
          <input
            type="radio"
            class="form-radio-input"
            id="radio-button"
            name="radio"
          />
          <label for="radio-button" class="form-radio-label">
            Default
          </label>
        </div>
        <div class="form-radio form-radio-danger mb-4">
          <input
            type="radio"
            class="form-radio-input"
            id="radio-button-danger"
            name="radio"
          />
          <label for="radio-button-danger" class="form-radio-label">
            Danger
          </label>
        </div>
        <div class="form-radio form-radio-warning mb-4">
          <input
            type="radio"
            class="form-radio-input"
            id="radio-button-warning"
            name="radio"
          />
          <label for="radio-button-warning" class="form-radio-label">
            Warning
          </label>
        </div>
        <div class="form-radio form-radio-success mb-4">
          <input
            type="radio"
            class="form-radio-input"
            id="radio-button-success"
            name="radio"
          />
          <label for="radio-button-success" class="form-radio-label">
            Success
          </label>
        </div>
        <div class="form-radio form-radio-disabled">
          <input
            type="radio"
            class="form-radio-input"
            id="radio-button-disabled"
            name="radio"
            disabled
          />
          <label for="radio-button-disabled" class="form-radio-label">
            Disabled
          </label>
        </div>

        <xmp class="mt-12 mb-12">
          &lt;div class="form-radio-button"&gt; &lt;input type="radio"
          class="form-radio-input" id="radio-button" name="radio" /&gt;
          &lt;label for="radio-button" class="form-radio-label"&gt; Default
          &lt;/label&gt; &lt;/div&gt;
          <br /> &lt;div class="form-radio form-radio-danger"&gt; &lt;input
          type="radio" class="form-radio-input" id="radio-button-danger"
          name="radio" /&gt; &lt;label for="radio-button-danger"
          class="form-radio-label"&gt; Danger &lt;/label&gt; &lt;/div&gt;
          <br />
          &lt;div class="form-radio form-radio-warning"&gt; &lt;input
          type="radio" class="form-radio-input" id="radio-button-warning"
          name="radio" /&gt; &lt;label for="radio-button-warning"
          class="form-radio-label"&gt; Warning &lt;/label&gt; &lt;/div&gt;
          <br />
          &lt;div class="form-radio form-radio-success"&gt; &lt;input
          type="radio" class="form-radio-input" id="radio-button-success"
          name="radio" /&gt; &lt;label for="radio-button-success"
          class="form-radio-label"&gt; Success &lt;/label&gt; &lt;/div&gt;
          <br />
          &lt;div class="form-radio form-radio-disabled"&gt; &lt;input
          type="radio" class="form-radio-input" id="radio-button-disabled"
          name="radio" disabled /&gt; &lt;label for="radio-button-disabled"
          class="form-radio-label"&gt; Disabled &lt;/label&gt; &lt;/div&gt;
          <br />
        </xmp>
      </div>
    </div>
  );
};

export default Radio;
