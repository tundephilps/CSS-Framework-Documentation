import React from "react";

const Progress = () => {
  return (
    <div class="component" id="progress">
      <h1>Progress</h1>
      <p>
        Defines progress bars that indicate how far along a process is. The
        length of the bar can be adjusted with the ".progress-bar" class.
      </p>
      <div class="component-preview">
        <div class="progress">
          <div class="progress-bar"></div>
        </div>

        <xmp class="mt-12 mb-12">
          &lt;div class="progress"&gt; &lt;div
          class="progress-bar"&gt;&lt;/div&gt; &lt;/div&gt;
        </xmp>
      </div>
    </div>
  );
};

export default Progress;
