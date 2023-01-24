import React from "react";

const Input = () => {
  return (
    <div class="component" id="inputs">
      <h1>Inputs</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sapiente
        numquam, eligendi ullam natus voluptas fugiat error deserunt optio saepe
        illo suscipit unde non, odio ab eius ad explicabo exercitationem.
      </p>
      <div class="component-preview">
        <div class="form-block">
          <label class="form-label">Label</label>
          <input class="form-input" type="text" placeholder="Placeholder" />
        </div>
        <div class="form-block form-block-danger">
          <label class="form-label">Label</label>
          <input class="form-input" type="text" placeholder="Placeholder" />
        </div>
        <div class="form-block form-block-warning">
          <label class="form-label">Label</label>
          <input class="form-input" type="text" placeholder="Placeholder" />
        </div>
        <div class="form-block form-block-success">
          <label class="form-label">Label</label>
          <input class="form-input" type="text" placeholder="Placeholder" />
        </div>
        <div class="form-block form-block-disabled">
          <label class="form-label">Label</label>
          <input
            class="form-input"
            type="text"
            placeholder="Placeholder"
            disabled
          />
        </div>

        <xmp class="mt-12 mb-12">
          &lt;div class="form-block"&gt; &lt;label
          class="form-label"&gt;Label&lt;/label&gt; &lt;input class="form-input"
          type="text" placeholder="Placeholder" /&gt; &lt;/div&gt; &lt;div
          class="form-block form-block-danger"&gt; &lt;label
          class="form-label"&gt;Label&lt;/label&gt; &lt;input class="form-input"
          type="text" placeholder="Placeholder" /&gt; &lt;/div&gt; &lt;div
          class="form-block form-block-warning"&gt; &lt;label
          class="form-label"&gt;Label&lt;/label&gt; &lt;input class="form-input"
          type="text" placeholder="Placeholder" /&gt; &lt;/div&gt; &lt;div
          class="form-block form-block-success"&gt; &lt;label
          class="form-label"&gt;Label&lt;/label&gt; &lt;input class="form-input"
          type="text" placeholder="Placeholder" /&gt; &lt;/div&gt; &lt;div
          class="form-block form-block-disabled"&gt; &lt;label
          class="form-label"&gt;Label&lt;/label&gt; &lt;input class="form-input"
          type="text" placeholder="Placeholder" disabled /&gt; &lt;/div&gt;
        </xmp>
      </div>
    </div>
  );
};

export default Input;
