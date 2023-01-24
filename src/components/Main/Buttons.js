import React from "react";

const Buttons = () => {
  return (
    <div class="component" id="buttons">
      <h1>Buttons</h1>
      <p>
        {" "}
        Provides button styles for actions in forms, dialogs, and more with
        support for multiple sizes, states, and more.
      </p>
      <div class="component-preview">
        <button class="button">Button Default</button>
        <button class="button button-danger">Button Danger</button>
        <button class="button button-warning">Button Warning</button>
        <button class="button button-success">Button Success</button>
        <xmp class="mt-12 mb-12">
          &lt;button class="button"&gt;Button Default&lt;/button&gt; <br />
          &lt;button class="button button-danger"&gt;Button
          Danger&lt;/button&gt;
          <br /> &lt;button class="button button-warning"&gt;Button
          Warning&lt;/button&gt;
          <br /> &lt;button class="button button-success"&gt;Button
          Success&lt;/button&gt; <br />
        </xmp>
      </div>
    </div>
  );
};

export default Buttons;
