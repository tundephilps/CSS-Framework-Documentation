import React from "react";

const Grid = () => {
  return (
    <>
      <div class="component" id="grid">
        <h1>Grid</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
          sapiente numquam, eligendi ullam natus voluptas fugiat error deserunt
          optio saepe illo suscipit unde non, odio ab eius ad explicabo
          exercitationem.
        </p>
        <div class="component-preview">
          <div class="container grid-preview">
            <div class="row">
              <div class="column column-7">7</div>
              <div class="column column-3">3</div>
              <div class="column column-2">2</div>
            </div>
            <div class="row">
              <div class="column column-4">4</div>
              <div class="column column-4">4</div>
              <div class="column column-4">4</div>
            </div>
          </div>

          <xmp class="mt-12 mb-12">
            &lt;div class="container"&gt; &lt;div class="row"&gt; <br /> &lt;div
            class="column column-7"&gt;7&lt;/div&gt;
            <br /> &lt;div class="column column-3"&gt;3&lt;/div&gt;
            <br /> &lt;div class="column column-2"&gt;2&lt;/div&gt;
            <br />
          </xmp>
        </div>
      </div>
      <div class="component" id="labels">
        <h1>Labels</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
          sapiente numquam, eligendi ullam natus voluptas fugiat error deserunt
          optio saepe illo suscipit unde non, odio ab eius ad explicabo
          exercitationem.
        </p>
        <div class="component-preview">
          <div class="label-button">
            <span class="default-label "> Default </span>
          </div>
          <div class="label-button label-danger">
            <span class="default-label"> Danger </span>
          </div>
          <div class="label-button label-warning">
            <span class="default-label"> Warning </span>
          </div>
          <div class="label-button label-success">
            <span class="default-label"> Success </span>
          </div>
          <div class="label-button label-disabled">
            <span class="default-label" disabled>
              {" "}
              Disabled{" "}
            </span>
          </div>

          <xmp class="mt-12 mb-12">
            &lt;div class="label-button"&gt; &lt;span class="default-label "&gt;
            Default &lt;/span&gt; &lt;/div&gt; &lt;div class="label-button
            label-danger"&gt; &lt;span class="default-label"&gt; Danger
            &lt;/span&gt; &lt;/div&gt; &lt;div class="label-button
            label-warning"&gt; &lt;span class="default-label"&gt; Warning
            &lt;/span&gt; &lt;/div&gt; &lt;div class="label-button
            label-success"&gt; &lt;span class="default-label"&gt; Success
            &lt;/span&gt; &lt;/div&gt; &lt;div class="label-button
            label-disabled"&gt; &lt;span class="default-label" disabled&gt;{" "}
            Disabled &lt;/span&gt; &lt;/div&gt;
          </xmp>
        </div>
      </div>
    </>
  );
};

export default Grid;
