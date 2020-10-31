import { generatePage } from "./generate-page.js";
import { toggleClass } from "./toggle-class.js";
import { createGame } from "./create-game.js";

export const initHandlers = () => {
  nav.addEventListener("click", (ev) => {
    if (ev.target === game_btn) {
      createGame();

      toggleClass(ev.target);
    } else if (ev.target.className === "link") {
      const { url } = ev.target.dataset;

      generatePage(url);

      toggleClass(ev.target);
    }
  });
};
