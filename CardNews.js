class CardNews extends HTMLElement {
     constructor() {
          super();
          const shadow = this.attachShadow({ mode: "open" });
          shadow.appendChild(this.build());
          shadow.appendChild(this.styles());
     }

     build() {
          const componentRoot = document.createElement('div');
          componentRoot.setAttribute("class", "card");

          const cardLeft = document.createElement('div');
          cardLeft.setAttribute("class", "card__left");

          const cardRight = document.createElement('div');
          cardRight.setAttribute("class", "card__right");

          componentRoot.appendChild(cardLeft);
          componentRoot.appendChild(cardRight);

          const cardSpan = document.createElement('span');
          cardSpan.setAttribute("class", "author");
          cardSpan.textContent = "By: " + (this.getAttribute("autor") || "Anonymous");

          const linkTitle = document.createElement('a');
          linkTitle.setAttribute("class", "title__news");
          linkTitle.href = this.getAttribute("link") || "#";
          linkTitle.textContent = this.getAttribute("title") || "Título da notícia";


          const cardP = document.createElement('p');
          cardP.setAttribute("class", "news");
          cardP.textContent = this.getAttribute("news") || "Conteúdo da notícia.";

          cardLeft.appendChild(cardSpan);
          cardLeft.appendChild(linkTitle);
          cardLeft.appendChild(cardP);

          const newsImage = document.createElement('img');
          newsImage.src = this.getAttribute("img") || "assets/images.jpg";
          newsImage.alt = this.getAttribute("alt") || "Imagem da notícia";
          newsImage.setAttribute("class", "card__img");

          cardRight.appendChild(newsImage);

          return componentRoot;
     }

     styles() {
          const style = document.createElement('style');
          style.textContent = `
               .card {
                    width: 80%;
                    box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                    -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                    -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
               }

               .card__left {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 10px;
               }

               .card__left > a {
                    margin-top: 20px;
                    font-size: 30px;
               }

               .card__left > p {
                    color: gray;
               }

               .card__left > span {
                    font-weight: 400;
               }
          `
          return style;
     }
}

customElements.define("card-news", CardNews);