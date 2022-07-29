class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  clone() {
    return new Vec(this.x, this.y);
  }

  sub(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }

  add(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  dot(other) {
    return this.x * other.x + this.y * other.y;
  }

  cross(other) {
    return this.x * other.y - this.y * other.x;
  }

  sqrNorm() {
    return this.dot(this);
  }

  norm() {
    return Math.sqrt(this.sqrNorm());
  }

  normalized() {
    return this.numDiv(this.norm());
  }

  isLeftTo(other, include = true) {
    if (include) {
      return this.cross(other) >= 0; //left hand coordinate
    } else {
      return this.cross(other) > 0;
    }
  }

  isRightTo(other, include = true) {
    if (include) {
      return this.cross(other) <= 0; //left hand coordinate
    } else {
      return this.cross(other) < 0;
    }
  }

  leftRotate90degree() {
    return new Vec(this.y, -this.x);
  }

  rightRotate90degree() {
    return new Vec(-this.y, this.x);
  }

  numMul(other) {
    return new Vec(this.x * other, this.y * other);
  }

  numDiv(other) {
    return new Vec(this.x / other, this.y / other);
  }

}