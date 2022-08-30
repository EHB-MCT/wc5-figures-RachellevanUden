"use strict";
import Figure from './Figure.js';

export default class Rectangle extends Figure {
    constructor(height, width) {
        super("Rectangle");
        this._height = height;
        this._width = width;
    }
    get area() {
        return this._width * this._height;
    }
    get circumference() {
        return (this._width + this._height) * 2;
    }
    get htmlString() {
        return `<div class="result">
    <div class="figure rectangle" style="width: ${this._width}; height: ${this.height} px;"></div>
    <div class="infoBox">
      <h3>${this._name}</h3>
      <dl>
        <dt>Height</dt>
        <dd>${this._height} px</dd>
  
        <dt>Width</dt>
        <dd>${this._width} px</dd>
  
        <dt>Area</dt>
        <dd>${this._area} px</dd>
  
        <dt>Circumference</dt>
        <dd>${this._circumference} px</dd>
      </dl>
    </div>
  </div>`;
    }
}