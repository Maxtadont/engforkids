export function getCategoryByName(categoryName) {
  return categories.filter((category) => {
    return category.categoryName === categoryName;
  });
}

export const categories = [
  {
    categoryID: 0, 
    categoryName: "Main menu", 
    picturePath: ""
  },
  {
    categoryID: 1, 
    categoryName: "Action (set A)", 
    picturePath: "./assets/images/cardpictures/cry.jpg"
  },
  {
    categoryID: 2, 
    categoryName: "Action (set B)", 
    picturePath: "./assets/images/cardpictures/open.jpg"
  },
  {
    categoryID: 3, 
    categoryName: "Animal (set A)", 
    picturePath: "./assets/images/cardpictures/cat.jpg"
  },
  {categoryID: 4, 
    categoryName: "Animal (set B)", 
    picturePath: "./assets/images/cardpictures/bird.jpg"
  },
  {
    categoryID: 5, 
    categoryName: "Clothes", 
    picturePath: "./assets/images/cardpictures/skirt.jpg"
  },
  {
    categoryID: 6, 
    categoryName: "Emotions", 
    picturePath: "./assets/images/cardpictures/angry.jpg"
  },
  {
    categoryID: 7, 
    categoryName: "Toys", 
    picturePath: "./assets/images/cardpictures/bear.jpg"
  },
  {
    categoryID: 8, 
    categoryName: "Colors", 
    picturePath: "./assets/images/cardpictures/black.jpg"
  },
  {
    categoryID: 9, 
    categoryName: "Statistics", 
    picturePath: ""
  }
];



