import React from "react";

const Alert = () => {
  return (
    <div class="component" id="alerts">
      <h1>Alerts</h1>
      <p>
        {" "}
        Provides feedback messages based on user actions. Alerts are available
        for any length of text. For proper styling, use one of the five required
        contextual classes. (e.g., .alert-success).{" "}
      </p>

      <div class="component-preview">
        <div class="alert mb-12">Alert Default</div>

        <xmp>&lt;div id="alert"&gt; Alert Default &lt;div&gt;</xmp>

        <div class="alert alert-danger mb-12 mt-12">Alert Danger</div>

        <xmp>
          &lt;div id="alert alert-danger mb-12 mt-12"&gt; Alert Danger
          &lt;div&gt;
        </xmp>

        <div class="alert alert-warning mb-12 mt-12">Alert Warning</div>
        <xmp>
          &lt;div id="alert alert-warning mb-12 mt-12"&gt; Alert Warning
          &lt;div&gt;
        </xmp>

        <div class="alert alert-success mb-12 mt-12">Alert Success</div>
        <xmp>
          &lt;div id="alert alert-success"&gt; Alert Success &lt;div&gt;
        </xmp>

        <div class="alert alert-disabled mb-12 mt-12">Alert Disabled</div>

        <xmp>
          &lt;div id="alert alert-disabled"&gt; Alert Disabled &lt;div&gt;
        </xmp>
      </div>
    </div>
  );
};

export default Alert;
