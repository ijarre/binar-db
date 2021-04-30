import Suwit from "./game.js";
const Game = () => {
  //1
  const pilihan = document.querySelectorAll(".pemain img");
  //2
  pilihan.forEach((pil) => {
    pil.addEventListener("click", () => {
      const lawan = document.querySelectorAll(".komputer img");
      lawan.forEach((en) => {
        en.setAttribute("style", " ");
      });
      const pilihanPemain = pil.className;
      const pilihanComputer = getPilihanComputer();
      const hasil = new Suwit(pilihanPemain, pilihanComputer);
      console.log(hasil);
      document.querySelector(".vs").setAttribute("style", "visibility:hidden");
      document.querySelector(".hasil").setAttribute("style", "visibility:visible;");
      document.getElementById("changeable").innerHTML = hasil.mainkan();
    });
  });
  //3
  const refresh = document.querySelector(".refresh");
  //4
  refresh.addEventListener("click", () => {
    window.location.reload();
  });
  //5
  const getPilihanComputer = () => {
    let score = Math.random();
    let pilComp = "";
    if (score <= 1 / 3) {
      pilComp = "gunting-lawan";
    } else if (score <= 2 / 3) {
      pilComp = "batu-lawan";
    } else {
      pilComp = "kertas-lawan";
    }
    document.querySelector(`.komputer .${pilComp}`).setAttribute("style", "background-color:#c4c4c4; border-radius:30px");
    return pilComp;
  };
  //6
};

Game();
