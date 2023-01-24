import React from "react";

const Cards = () => {
  return (
    <div class="component" id="cards">
      <h1>Cards</h1>
      <p>
        A card is a flexible and extensible content container. It contains a
        field that user can add a picture, a title and a content text.
      </p>
      <div class="component-preview">
        <div class="card-body">
          <div class="card-image">
            <img src="https://images.unsplash.com/photo-1564999771144-d57dc396b99f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
          </div>
          <h2> Title </h2>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, saepe
            at. Accusamus facilis ratione adipisci libero, iste necessitatibus
            nemo? Adipisci repudiandae saepe deleniti nemo eligendi dolorem.
            Maiores tempore quibusdam et?
          </h6>
        </div>
        <xmp class="mt-12 mb-12">
          &lt;div class="card-body"&gt;
          <br /> &lt;div class="card-image"&gt; <br /> &lt;img
          src="https://images.unsplash.com/photo-1564999771144-d57dc396b99f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
          /&gt; <br /> &lt;/div&gt; <br /> &lt;h2&gt; Title &lt;/h2&gt;
          <br />
          &lt;h6&gt; &lt;/div&gt; Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nam, saepe at. Accusamus facilis ratione adipisci
          libero, iste necessitatibus nemo? Adipisci repudiandae saepe deleniti
          nemo eligendi dolorem. Maiores tempore quibusdam et? &lt;/h6&gt;{" "}
          <br />
        </xmp>
      </div>
    </div>
  );
};

export default Cards;
