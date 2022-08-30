"use strict";
import Figure from './Figure.js';

export default class Circle extends Figure {
    constructor(radius) {
        super('cicle');
        this._radius = radius;
    }
    get diameter() {
        return this._radius * 2;
    }
    get area() {
        return Math.PI * this._radius * 2;
    }
    get circumference() {
        return 2 * Math.PI * this._radius;
    }
    get htmlString() {
        return `
        <div class="result">
  <div class="figure circle" style="width: DIAMETERpx; height: DIAMETERpx;"></div>
  <div class="infoBox">
    <h3>${this._name}</h3>
    <dl>
      <dt>Radius</dt>
      <dd>${this._radius}</dd>

      <dt>Diameter</dt>
      <dd>${this.diameter}</dd>

      <dt>Area</dt>
      <dd>${this.area}</dd>

      <dt>Circumference</dt>
      <dd>${this.circumference}</dd>
    </dl>
  </div>
</div>`
    }
}