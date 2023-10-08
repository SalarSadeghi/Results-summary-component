import data from "./data.json" assert { type: "json" };
const items = document.querySelector(".rightItems");

const rightItem = document.createElement("li");
rightItem.classList = "rightItem";

data.forEach((d) => {
  const rightItem = document.createElement("li");
  const rightItemTitle = document.createElement("div");
  const rightItemScore = document.createElement("div");
  const rightItemScoreNum = document.createElement("span");
  const rightItemScoreTotal = document.createElement("span");
  const rightItemIcon = document.createElement("img");
  const rightItemCat = document.createElement("h4");
  const topleftCorner = document.createElement("div");
  const toprightCorner = document.createElement("div");
  const bottomleftCorner = document.createElement("div");
  const bottomRightCorner = document.createElement("div");

  rightItem.classList = "rightItem";
  rightItemTitle.classList = "rightItemTitle";
  rightItemScore.classList = "rightItemScore";
  rightItemScoreNum.classList = "rightItemScoreNum";
  topleftCorner.classList = "corner";
  topleftCorner.id = "topleft";
  toprightCorner.classList = "corner";
  toprightCorner.id = "topright";
  bottomleftCorner.classList = "corner";
  bottomleftCorner.id = "bottomleft";
  bottomRightCorner.classList = "corner";
  bottomRightCorner.id = "bottomright";
  rightItemIcon.classList = "icon"

  rightItem.style.backgroundColor = d.backgroundColor;
  rightItemIcon.src = d.icon;
  rightItemCat.textContent = d.category;
  rightItemTitle.style.color = d.textColor;
  rightItemTitle.appendChild(rightItemIcon);
  rightItemTitle.appendChild(rightItemCat);
  rightItemScoreNum.textContent = d.score;
  rightItemScoreTotal.classList = "rightItemScoreTotal";
  rightItemScoreTotal.textContent = " / 100";
  rightItemScore.appendChild(rightItemScoreNum);
  rightItemScore.appendChild(rightItemScoreTotal);
  rightItem.appendChild(topleftCorner)
  rightItem.appendChild(toprightCorner)
  rightItem.appendChild(bottomleftCorner)
  rightItem.appendChild(bottomRightCorner)
  rightItem.appendChild(rightItemTitle);
  rightItem.appendChild(rightItemScore);
  items.appendChild(rightItem);
});
