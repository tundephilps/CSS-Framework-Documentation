import React from "react";

const Process = () => {
  return (
    <div class="component" id="process">
      <h1>Process</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sapiente
        numquam, eligendi ullam natus voluptas fugiat error deserunt optio saepe
        illo suscipit unde non, odio ab eius ad explicabo exercitationem.
      </p>
      <div class="component-preview">
        <div class="steps">
          <div class="step is-done">1</div>
          <div class="step is-active">2</div>
          <div class="step">3</div>
        </div>

        <xmp class="mt-12 mb-12">
          &lt;div class="steps"&gt;
          <br /> &lt;div class="step is-done"&gt;1&lt;/div&gt; <br /> &lt;div
          class="step is-active"&gt;2&lt;/div&gt; <br /> &lt;div
          class="step"&gt;3&lt;/div&gt; &lt;/div&gt;
        </xmp>
      </div>
    </div>
  );
};

export default Process;
