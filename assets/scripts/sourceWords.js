export function wordsInCategoryByName(words, categoryID) {
  return words.filter((word) => {
    return word.categoryID === categoryID;
  });
}

export const words = [
  {
    categoryID: 1,
    wordEnglish: "cry", 
    wordRussian: "плакать",
    picturePath: "./assets/images/cardpictures/cry.jpg", 
    soundPath: "./assets/audio/cry.mp3"
  },
  {
    categoryID: 1, 
    wordEnglish: "dance", 
    wordRussian: "танцевать", 
    picturePath: "./assets/images/cardpictures/dance.jpg", 
    soundPath: "./assets/audio/dance.mp3"
  },
  {
    categoryID: 1, 
    wordEnglish: "dive", 
    wordRussian: "нырять", 
    picturePath: "./assets/images/cardpictures/dive.jpg", 
    soundPath: "./assets/audio/dive.mp3"
  },
  {
    categoryID: 1, 
    wordEnglish: "draw", 
    wordRussian: "рисовать", 
    picturePath: "./assets/images/cardpictures/draw.jpg", 
    soundPath: "./assets/audio/draw.mp3"
  },
  {
    categoryID: 1, 
    wordEnglish: "fish", 
    wordRussian: "ловить рыбу", 
    picturePath: "./assets/images/cardpictures/fish.jpg", 
    soundPath: "./assets/audio/fish.mp3"
  },
  {
    categoryID: 1, 
    wordEnglish: "fly", 
    wordRussian: "летать", 
    picturePath: "./assets/images/cardpictures/fly.jpg", 
    soundPath: "./assets/audio/fly.mp3"
  },
  {
    categoryID: 1, 
    wordEnglish: "hug",
    wordRussian: "обнимать", 
    picturePath: "./assets/images/cardpictures/hug.jpg", 
    soundPath: "./assets/audio/hug.mp3"
  },
  {
    categoryID: 1, 
    wordEnglish: "jump", 
    wordRussian: "прыгать", 
    picturePath: "./assets/images/cardpictures/jump.jpg", 
    soundPath: "./assets/audio/jump.mp3"
  },
  

  {
    categoryID: 2, 
    wordEnglish: "open", 
    wordRussian: "открывать", 
    picturePath: "./assets/images/cardpictures/open.jpg", 
    soundPath: "./assets/audio/open.mp3"
  },
  {
    categoryID: 2, 
    wordEnglish: "play", 
    wordRussian: "играть", 
    picturePath: "./assets/images/cardpictures/play.jpg", 
    soundPath: "./assets/audio/play.mp3"
  },
  {categoryID: 2, 
    wordEnglish: "point", 
    wordRussian: "указывать", 
    picturePath: "./assets/images/cardpictures/point.jpg", 
    soundPath: "./assets/audio/point.mp3"
  },
  {
    categoryID: 2, 
    wordEnglish: "ride", 
    wordRussian: "ездить", 
    picturePath: "./assets/images/cardpictures/ride.jpg", 
    soundPath: "./assets/audio/ride.mp3"
  },
  {
    categoryID: 2, 
    wordEnglish: "run", 
    wordRussian: "бежать", 
    picturePath: "./assets/images/cardpictures/run.jpg", 
    soundPath: "./assets/audio/run.mp3"
  },
  {
    categoryID: 2, 
    wordEnglish: "sing", 
    wordRussian: "петь", 
    picturePath: "./assets/images/cardpictures/sing.jpg", 
    soundPath: "./assets/audio/sing.mp3"
  },
  {
    categoryID: 2, 
    wordEnglish: "skip", 
    wordRussian: "пропускать", 
    picturePath: "./assets/images/cardpictures/skip.jpg", 
    soundPath: "./assets/audio/skip.mp3"
  },
  {
    categoryID: 2,
    wordEnglish: "swim", 
    wordRussian: "плавать", 
    picturePath: "./assets/images/cardpictures/swim.jpg", 
    soundPath: "./assets/audio/swim.mp3"
  },


  {
    categoryID: 3, 
    wordEnglish: "cat", 
    wordRussian: "кот", 
    picturePath: "./assets/images/cardpictures/cat.jpg", 
    soundPath: "./assets/audio/cat.mp3"
  },
  {
    categoryID: 3, 
    wordEnglish: "chick", 
    wordRussian: "цыпленок", 
    picturePath: "./assets/images/cardpictures/chick.jpg", 
    soundPath: "./assets/audio/chick.mp3"
  },
  {
    categoryID: 3, 
    wordEnglish: "chicken", 
    wordRussian: "курица", 
    picturePath: "./assets/images/cardpictures/chicken.jpg", 
    soundPath: "./assets/audio/chicken.mp3"
  },
  {
    categoryID: 3, 
    wordEnglish: "dog", 
    wordRussian: "собака", 
    picturePath: "./assets/images/cardpictures/dog.jpg", 
    soundPath: "./assets/audio/dog.mp3"
  },
  {
    categoryID: 3, 
    wordEnglish: "horse", 
    wordRussian: "лошадь", 
    picturePath: "./assets/images/cardpictures/horse.jpg", 
    soundPath: "./assets/audio/horse.mp3"
  },
  {
    categoryID: 3, 
    wordEnglish: "pig", 
    wordRussian: "6", 
    picturePath: "./assets/images/cardpictures/pig.jpg", 
    soundPath: "./assets/audio/pig.mp3"
  },
  {
    categoryID: 3, 
    wordEnglish: "rabbit", 
    wordRussian: "кролик", 
    picturePath: "./assets/images/cardpictures/rabbit.jpg", 
    soundPath: "./assets/audio/rabbit.mp3"
  },
  {
    categoryID: 3, 
    wordEnglish: "sheep", 
    wordRussian: "8", 
    picturePath: "./assets/images/cardpictures/sheep.jpg", 
    soundPath: "./assets/audio/sheep.mp3"
  },


  {
    categoryID: 4, 
    wordEnglish: "bird", 
    wordRussian: "птица", 
    picturePath: "./assets/images/cardpictures/bird.jpg", 
    soundPath: "./assets/audio/bird.mp3"
  },
  {
    categoryID: 4, 
    wordEnglish: "fish", 
    wordRussian: "рыба", 
    picturePath: "./assets/images/cardpictures/fish.jpg", 
    soundPath: "./assets/audio/fish.mp3"
  },
  {
    categoryID: 4, 
    wordEnglish: "frog", 
    wordRussian: "лягушка", 
    picturePath: "./assets/images/cardpictures/frog.jpg", 
    soundPath: "./assets/audio/frog.mp3"
  },
  {
    categoryID: 4, 
    wordEnglish: "giraffe", 
    wordRussian: "жираф", 
    picturePath: "./assets/images/cardpictures/giraffe.jpg", 
    soundPath: "./assets/audio/giraffe.mp3"
  },
  {
    categoryID: 4, 
    wordEnglish: "lion", 
    wordRussian: "лев", 
    picturePath: "./assets/images/cardpictures/lion.jpg", 
    soundPath: "./assets/audio/lion.mp3"
  },
  {
    categoryID: 4, 
    wordEnglish: "mouse", 
    wordRussian: "мышь", 
    picturePath: "./assets/images/cardpictures/mouse.jpg", 
    soundPath: "./assets/audio/mouse.mp3"
  },
  {
    categoryID: 4, 
    wordEnglish: "turtle", 
    wordRussian: "черепаха", 
    picturePath: "./assets/images/cardpictures/turtle.jpg", 
    soundPath: "./assets/audio/turtle.mp3"
  },
  {
    categoryID: 4, 
    wordEnglish: "dolphin", 
    wordRussian: "дельфин", 
    picturePath: "./assets/images/cardpictures/dolphin.jpg", 
    soundPath: "./assets/audio/dolphin.mp3"
  },


  {
    categoryID: 5, 
    wordEnglish: "skirt", 
    wordRussian: "юбка", 
    picturePath: "./assets/images/cardpictures/skirt.jpg", 
    soundPath: "./assets/audio/skirt.mp3"
  },
  {
    categoryID: 5, 
    wordEnglish: "pants", 
    wordRussian: "брюки", 
    picturePath: "./assets/images/cardpictures/pants.jpg", 
    soundPath: "./assets/audio/pants.mp3"
  },
  {
    categoryID: 5, 
    wordEnglish: "blouse", 
    wordRussian: "блузка", 
    picturePath: "./assets/images/cardpictures/blouse.jpg", 
    soundPath: "./assets/audio/blouse.mp3"
  },
  {
    categoryID: 5, 
    wordEnglish: "dress", 
    wordRussian: "платье", 
    picturePath: "./assets/images/cardpictures/dress.jpg", 
    soundPath: "./assets/audio/dress.mp3"
  },
  {
    categoryID: 5, 
    wordEnglish: "boot", 
    wordRussian: "ботинок", 
    picturePath: "./assets/images/cardpictures/boot.jpg", 
    soundPath: "./assets/audio/boot.mp3"
  },
  {
    categoryID: 5, 
    wordEnglish: "shirt", 
    wordRussian: "рубашка", 
    picturePath: "./assets/images/cardpictures/shirt.jpg", 
    soundPath: "./assets/audio/shirt.mp3"
  },
  {
    categoryID: 5, 
    wordEnglish: "coat", 
    wordRussian: "пальто", 
    picturePath: "./assets/images/cardpictures/coat.jpg", 
    soundPath: "./assets/audio/coat.mp3"
  },
  {
    categoryID: 5, 
    wordEnglish: "shoe", 
    wordRussian: "туфли", 
    picturePath: "./assets/images/cardpictures/shoe.jpg", 
    soundPath: "./assets/audio/shoe.mp3"
  },


  {
    categoryID: 6, 
    wordEnglish: "sad", 
    wordRussian: "грустный", 
    picturePath: "./assets/images/cardpictures/sad.jpg", 
    soundPath: "./assets/audio/sad.mp3"
  },
  {
    categoryID: 6, 
    wordEnglish: "angry", 
    wordRussian: "сердитый", 
    picturePath: "./assets/images/cardpictures/angry.jpg", 
    soundPath: "./assets/audio/angry.mp3"
  },
  {
    categoryID: 6, 
    wordEnglish: "happy", 
    wordRussian: "счастливый", 
    picturePath: "./assets/images/cardpictures/happy.jpg", 
    soundPath: "./assets/audio/happy.mp3"
  },
  {
    categoryID: 6,
    wordEnglish: "tired", 
    wordRussian: "уставший", 
    picturePath: "./assets/images/cardpictures/tired.jpg", 
    soundPath: "./assets/audio/tired.mp3"
  },
  {
    categoryID: 6, 
    wordEnglish: "surprised", 
    wordRussian: "удивленный", 
    picturePath: "./assets/images/cardpictures/surprised.jpg", 
    soundPath: "./assets/audio/surprised.mp3"
  },
  {
    categoryID: 6, 
    wordEnglish: "scared", 
    wordRussian: "испуганный", 
    picturePath: "./assets/images/cardpictures/scared.jpg", 
    soundPath: "./assets/audio/scared.mp3"
  },
  {
    categoryID: 6, 
    wordEnglish: "smile", 
    wordRussian: "улыбка", 
    picturePath: "./assets/images/cardpictures/smile.jpg", 
    soundPath: "./assets/audio/smile.mp3"
  },
  {
    categoryID: 6, 
    wordEnglish: "laugh", 
    wordRussian: "смех", 
    picturePath: "./assets/images/cardpictures/laugh.jpg", 
    soundPath: "./assets/audio/laugh.mp3"
  },


  {
    categoryID: 7, 
    wordEnglish: "bear", 
    wordRussian: "мишка", 
    picturePath: "./assets/images/cardpictures/bear.jpg", 
    soundPath: "./assets/audio/bear.mp3"
  },
  {
    categoryID: 7, 
    wordEnglish: "locomotive", 
    wordRussian: "паровоз", 
    picturePath: "./assets/images/cardpictures/locomotive.jpg", 
    soundPath: "./assets/audio/locomotive.mp3"
  },
  {
    categoryID: 7, 
    wordEnglish: "truck", 
    wordRussian: "грузовик", 
    picturePath: "./assets/images/cardpictures/truck.jpg", 
    soundPath: "./assets/audio/truck.mp3"
  },
  {
    categoryID: 7, 
    wordEnglish: "phone", 
    wordRussian: "телефон", 
    picturePath: "./assets/images/cardpictures/phone.jpg", 
    soundPath: "./assets/audio/phone.mp3"
  },
  {
    categoryID: 7,
    wordEnglish: "monkey", 
    wordRussian: "обезьяна", 
    picturePath: "./assets/images/cardpictures/monkey.jpg", 
    soundPath: "./assets/audio/monkey.mp3"
  },
  {
    categoryID: 7, 
    wordEnglish: "dinosaur", 
    wordRussian: "динозавр", 
    picturePath: "./assets/images/cardpictures/dinosaur.jpg", 
    soundPath: "./assets/audio/dinosaur.mp3"
  },
  {
    categoryID: 7, 
    wordEnglish: "rocket", 
    wordRussian: "ракета", 
    picturePath: "./assets/images/cardpictures/rocket.jpg", 
    soundPath: "./assets/audio/rocket.mp3"
  },
  {
    categoryID: 7, 
    wordEnglish: "hedgehog", 
    wordRussian: "еж", 
    picturePath: "./assets/images/cardpictures/hedgehog.jpg", 
    soundPath: "./assets/audio/hedgehog.mp3"
  },

  
  {
    categoryID: 8, 
    wordEnglish: "black", 
    wordRussian: "черный", 
    picturePath: "./assets/images/cardpictures/black.jpg", 
    soundPath: "./assets/audio/black.mp3"
  },
  {
    categoryID: 8, 
    wordEnglish: "white", 
    wordRussian: "белый", 
    picturePath: "./assets/images/cardpictures/white.jpg", 
    soundPath: "./assets/audio/white.mp3"
  },
  {
    categoryID: 8, 
    wordEnglish: "red", 
    wordRussian: "красный", 
    picturePath: "./assets/images/cardpictures/red.jpg", 
    soundPath: "./assets/audio/red.mp3"
  },
  {
    categoryID: 8, 
    wordEnglish: "blue", 
    wordRussian: "синий", 
    picturePath: "./assets/images/cardpictures/blue.jpg", 
    soundPath: "./assets/audio/blue.mp3"
  },
  {
    categoryID: 8, 
    wordEnglish: "green", 
    wordRussian: "зеленый", 
    picturePath: "./assets/images/cardpictures/green.jpg", 
    soundPath: "./assets/audio/green.mp3"
  },
  {
    categoryID: 8, 
    wordEnglish: "yellow", 
    wordRussian: "желтый", 
    picturePath: "./assets/images/cardpictures/yellow.jpg", 
    soundPath: "./assets/audio/yellow.mp3"
  },
  {
    categoryID: 8, 
    wordEnglish: "violet", 
    wordRussian: "фиолетовый", 
    picturePath: "./assets/images/cardpictures/violet.jpg", 
    soundPath: "./assets/audio/violet.mp3"
  },
  {
    categoryID: 8, 
    wordEnglish: "grey", 
    wordRussian: "серый", 
    picturePath: "./assets/images/cardpictures/grey.jpg", 
    soundPath: "./assets/audio/grey.mp3"
  }
];