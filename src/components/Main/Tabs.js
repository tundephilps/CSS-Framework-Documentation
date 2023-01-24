import React from "react";

const Tabs = () => {
  return (
    <>
      <div class="component" id="tab-bar">
        <h1>Tab bar</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
          sapiente numquam, eligendi ullam natus voluptas fugiat error deserunt
          optio saepe illo suscipit unde non, odio ab eius ad explicabo
          exercitationem.
        </p>
        <div class="component-preview">
          <nav class="nav">
            <a href="#" class="nav-item ">
              Active
            </a>
            <a href="#" class="nav-item ">
              Inactive
            </a>
            <a href="#" class="nav-item ">
              Inactive
            </a>
            <a href="#" class="nav-item ">
              Inactive
            </a>
          </nav>

          <xmp class="mt-12 mb-12">
            &lt;nav class="nav"&gt; <br />
            &lt;a href="#" class="nav-item "&gt; Active &lt;/a&gt; <br />
            &lt;a href="#" class="nav-item "&gt; Inactive &lt;/a&gt; <br />
            &lt;a href="#" class="nav-item "&gt; Inactive &lt;/a&gt; <br />
            &lt;a href="#" class="nav-item "&gt; Inactive &lt;/a&gt; <br />
            &lt;/nav&gt;
          </xmp>
        </div>
      </div>
      <div class="component" id="textareas">
        <h1>Text Areas</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
          sapiente numquam, eligendi ullam natus voluptas fugiat error deserunt
          optio saepe illo suscipit unde non, odio ab eius ad explicabo
          exercitationem.
        </p>
        <div class="component-preview">
          <div class="form-block">
            <label class="form-label">Label</label>
            <textarea name="comment" class="form-input">
              Default
            </textarea>
          </div>
          <div class="form-block form-block-danger">
            <label class="form-label">Label</label>
            <textarea name="comment" class="form-input">
              Danger
            </textarea>
          </div>
          <div class="form-block form-block-warning">
            <label class="form-label">Label</label>
            <textarea name="comment" class="form-input">
              Warning
            </textarea>
          </div>
          <div class="form-block form-block-success">
            <label class="form-label">Label</label>
            <textarea name="comment" class="form-input">
              Success
            </textarea>
          </div>
          <div class="form-block form-block-disabled">
            <label class="form-label">Label</label>
            <textarea name="comment" class="form-input" disabled>
              Disabled
            </textarea>
          </div>
          &lt;/div&gt;
          <xmp class="mt-12 mb-12">
            &lt;div class="form-block"&gt; &lt;label class="form-label"&gt;Label
            &lt;/label&gt; &lt;textarea name="comment" class="form-input"&gt;
            Default &lt;/textarea&gt; &lt;/div&gt;
            <br />
            &lt;div class="form-block form-block-danger"&gt; &lt;label
            class="form-label"&gt;Label &lt;/label&gt; &lt;textarea
            name="comment" class="form-input"&gt; Danger &lt;/textarea&gt;
            &lt;/div&gt;
            <br />
            &lt;div class="form-block form-block-warning"&gt; &lt;label
            class="form-label"&gt;Label &lt;/label&gt; &lt;textarea
            name="comment" class="form-input"&gt; Warning &lt;/textarea&gt;
            <br /> &lt;div class="form-block form-block-success"&gt; &lt;label
            class="form-label"&gt;Label &lt;/label&gt; &lt;textarea
            name="comment" class="form-input"&gt; Success &lt;/textarea&gt;
            &lt;/div&gt;
            <br />
            &lt;div class="form-block form-block-disabled"&gt; &lt;label
            class="form-label"&gt;Label &lt;/label&gt; &lt;textarea
            name="comment" class="form-input" disabled&gt; Disabled
            &lt;/textarea&gt; &lt;/div&gt;
            <br />
          </xmp>
        </div>
      </div>
    </>
  );
};

export default Tabs;
