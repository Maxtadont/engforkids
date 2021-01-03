import {appEventDispatcher, mainPageName} from "./script.js";
import {appPage} from "./script.js";
import {appPlay} from "./script.js";
import {appEndPlayWindow} from "./script.js";

function endCurrentPlay() {
  appPlay.endPlay();
  appEndPlayWindow.hide();
  appPage.appSwitch.toggleSwitchPlayMode();
  appPage.appProgressBar.removeStars();
  appPage.appProgressBar.hide();
}

function goMainPage() {
  endCurrentPlay();
  appPage.changePage(mainPageName, appPage.appSwitch.isPlayMode());
}

function checkCard(card) {
  if (card.isActivateCard(appPlay.isPlayStarted(), appPlay.cards[appPlay.curCardIdx])) {          
    appPlay.playSound(true);
    appPlay.nextCard();
    return true;
  }
  else {
    if (appPlay.isPlayStarted()) {
      appPlay.playSound(false);
      return false;
    }
  }
  return null;
}

function setEventOnSwitchClick() {
  appEventDispatcher.addEvent(appPage.appSwitch.domElement, "click", function() {
    appPage.appSwitch.toggleSwitchPlayMode();
    appPage.togglePagePlayMode(appPage.appSwitch.isPlayMode());
    resetEventOnCatCardClick();
    setEventOnCatCardClick();
  });
}

function setEventOnMenuBtnClick() {
  appEventDispatcher.addEvent(appPage.appMenuBtn.domElement, "click", function() {
    appPage.toggleMenu();
    appPage.appMenu.setActiveMenuItem(appPage.appGreeting.domElement.textContent);
  });
}

function setEventOnBackMenuClick() {
  appEventDispatcher.addEvent(appPage.appBackMenu.domElement, "click", function() {
    appPage.hideMenu();
  });

  for (let child of appPage.appMenuBtn.domLines) {
    appEventDispatcher.addEvent(child.domElement, "click", function() {
      appPage.toggleMenu();
    });
  }
}

function setEventOnMenuItemsClick() {
  for (let menuItem of appPage.appMenu.menuItems) {
    appEventDispatcher.addEvent(menuItem.domElement, "click", function() {
      endCurrentPlay();
      appPage.appSwitch.resetSwitchPlayMode();
      resetEventOnCatCardClick();
      appPage.selectCategory(menuItem.domElement.textContent, appPage.appSwitch.isPlayMode());
      setEventOnCatCardClick();
    });
  }
}

function resetEventOnCatCardClick() {
  for (let card of appPage.appPlayspace.catCards) {
    appEventDispatcher.removeEvent(card.picture.domElement, "click");  
  }
}

function setEventOnCatCardClick() {
  for (let card of appPage.appPlayspace.catCards) {
    resetEventOnCatCardClick();
    if (card.isCategoryCard()) {
      appEventDispatcher.addEvent(card.picture.domElement, "click", function() {
        appPage.selectCategory(card.domElement.textContent, appPage.appSwitch.isPlayMode());
        setEventOnCatCardClick();
      });  
    } else {
      appEventDispatcher.addEvent(card.picture.domElement, "click", function() {        
        const isPlayableCard = checkCard(card);
        if (isPlayableCard === false) {
          appPage.appProgressBar.addStar(false);
        } else if (isPlayableCard === true) {
          appPage.appProgressBar.addStar(true);
          if (appPlay.isLastCard()) {
            appEndPlayWindow.showEndWin(appPlay.wrongAnswers === 0);
          }
        }
      });
      if (card.transbtn !== null) {
        appEventDispatcher.addEvent(card.transbtn.domElement, "click", function() {
          card.toggleTranslate();
        });
      }
    }
  }
}

function setEventOnStartBtnClick() {
  appEventDispatcher.addEvent(appPage.appPlayBtn.domElement, "click", function() {
    if (!appPage.appPlayspace.isCategory() && appPage.appPlayBtn.isStartBtn()) {
      appPlay.setPlayCatCards(appPage.appPlayspace.catCards);
      appPage.appProgressBar.show();
      appPage.appSwitch.hide();
      appPage.appPlayBtn.setTitle("REPEAT");
      appPlay.startPlay();
    }
    else {
      appPlay.playCurSound();
    }
  });
}

function setEventOnEndPlayWinClick() {
  appEventDispatcher.addEvent(appEndPlayWindow.domElement, "click", function() {
    goMainPage();  
  });
  appEventDispatcher.addEvent(appEndPlayWindow.endPlayPic.domElement, "click", function() {
    goMainPage();
  });
}

setEventOnSwitchClick();
setEventOnMenuBtnClick();
setEventOnBackMenuClick();
setEventOnMenuItemsClick();
setEventOnCatCardClick();
setEventOnStartBtnClick();
setEventOnEndPlayWinClick();