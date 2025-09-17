class Food {
  constructor(rating, name) {
    this.rating = rating;
    this.name = name;
  }
}

// A simple Max-Heap for Food items (rating desc, name asc)
class FoodHeap {
  constructor() {
    this.data = [];
  }

  // Compare: higher rating first, if tie -> lexicographically smaller name
  static compare(a, b) {
    if (a.rating === b.rating) {
      return a.name.localeCompare(b.name);
    }
    return b.rating - a.rating; // max-heap by rating
  }

  push(item) {
    this.data.push(item);
    this._siftUp();
  }

  peek() {
    return this.data[0];
  }

  pop() {
    if (this.data.length === 0) return undefined;
    const top = this.data[0];
    const end = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = end;
      this._siftDown();
    }
    return top;
  }

  _siftUp() {
    let idx = this.data.length - 1;
    const element = this.data[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.data[parentIdx];
      if (FoodHeap.compare(element, parent) >= 0) break;
      this.data[idx] = parent;
      this.data[parentIdx] = element;
      idx = parentIdx;
    }
  }

  _siftDown() {
    let idx = 0;
    const length = this.data.length;
    const element = this.data[0];

    while (true) {
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;
      let swapIdx = null;

      if (left < length) {
        if (FoodHeap.compare(this.data[left], element) < 0) {
          swapIdx = left;
        }
      }
      if (right < length) {
        if (
          FoodHeap.compare(this.data[right], element) < 0 &&
          (swapIdx === null ||
            FoodHeap.compare(this.data[right], this.data[left]) < 0)
        ) {
          swapIdx = right;
        }
      }
      if (swapIdx === null) break;
      this.data[idx] = this.data[swapIdx];
      this.data[swapIdx] = element;
      idx = swapIdx;
    }
  }
}

class FoodRatings {
  constructor(foods, cuisines, ratings) {
    this.foodRatingMap = new Map();   // food -> rating
    this.foodCuisineMap = new Map();  // food -> cuisine
    this.cuisineFoodMap = new Map();  // cuisine -> FoodHeap

    for (let i = 0; i < foods.length; i++) {
      const food = foods[i];
      const cuisine = cuisines[i];
      const rating = ratings[i];

      this.foodRatingMap.set(food, rating);
      this.foodCuisineMap.set(food, cuisine);

      if (!this.cuisineFoodMap.has(cuisine)) {
        this.cuisineFoodMap.set(cuisine, new FoodHeap());
      }
      this.cuisineFoodMap.get(cuisine).push(new Food(rating, food));
    }
  }

  changeRating(food, newRating) {
    this.foodRatingMap.set(food, newRating);
    const cuisine = this.foodCuisineMap.get(food);
    this.cuisineFoodMap.get(cuisine).push(new Food(newRating, food));
  }

  highestRated(cuisine) {
    const heap = this.cuisineFoodMap.get(cuisine);

    // Discard outdated entries
    while (heap.peek() &&
           this.foodRatingMap.get(heap.peek().name) !== heap.peek().rating) {
      heap.pop();
    }

    return heap.peek().name;
  }
}