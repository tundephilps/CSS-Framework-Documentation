import React from "react";

const Avatar = () => {
  return (
    <div class="component" id="avatars">
      <h1>Avatars</h1>
      <p>
        Allows user to place avatar image in desired size and in two different
        shapes (circular and soft edged).
      </p>
      <div class="component-preview">
        <div class="avatar mr-4">
          <img src="https://randomuser.me/api/portraits/men/28.jpg" />
        </div>
        <div class="avatar avatar-medium mr-4">
          <img src="https://randomuser.me/api/portraits/men/28.jpg" />
        </div>
        <div class="avatar avatar-large">
          <img src="https://randomuser.me/api/portraits/men/28.jpg" />
        </div>
        <xmp class="mt-12 mb-12">
          &lt;div class="avatar mr-4"&gt; &lt;img
          src="https://randomuser.me/api/portraits/men/28.jpg" /&gt;
          &lt;/div&gt; &lt;div class="avatar avatar-medium mr-4"&gt; &lt;img
          src="https://randomuser.me/api/portraits/men/28.jpg" /&gt;
          &lt;/div&gt; &lt;div class="avatar avatar-large"&gt; &lt;img
          src="https://randomuser.me/api/portraits/men/28.jpg" /&gt;
          &lt;/div&gt;
        </xmp>
        <div class="avatar avatar-rounded mr-4">
          <img src="https://randomuser.me/api/portraits/men/28.jpg" />
        </div>
        <div class="avatar avatar-rounded avatar-medium mr-4">
          <img src="https://randomuser.me/api/portraits/men/28.jpg" />
        </div>
        <div class="avatar avatar-rounded avatar-large">
          <img src="https://randomuser.me/api/portraits/men/28.jpg" />
        </div>
        <xmp class="mt-12">
          &lt;div class="avatar avatar-rounded mr-4"&gt; &lt;img
          src="https://randomuser.me/api/portraits/men/28.jpg" /&gt;
          &lt;/div&gt; <br /> &lt;div class="avatar avatar-rounded avatar-medium
          mr-4"&gt; &lt;img src="https://randomuser.me/api/portraits/men/28.jpg"
          /&gt; &lt;/div&gt; <br /> &lt;div class="avatar avatar-rounded
          avatar-large"&gt; &lt;img
          src="https://randomuser.me/api/portraits/men/28.jpg" /&gt;
          &lt;/div&gt;
        </xmp>
      </div>
    </div>
  );
};

export default Avatar;
