import React from "react";

const ToolTip = () => {
  return (
    <div class="component" id="tooltip">
      <h1>Tooltips</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sapiente
        numquam, eligendi ullam natus voluptas fugiat error deserunt optio saepe
        illo suscipit unde non, odio ab eius ad explicabo exercitationem.
      </p>
      <div class="component-preview">
        <div class="tooltips">
          <span data-tooltip="this is tooltip">Right</span>
          <span data-tooltip="this is tooltip" data-tooltip-left>
            Left
          </span>
          <span data-tooltip="this is tooltip" data-tooltip-bottom>
            Bottom
          </span>
          <span data-tooltip="this is tooltip" data-tooltip-top>
            Top
          </span>
        </div>
      </div>
    </div>
  );
};

export default ToolTip;
