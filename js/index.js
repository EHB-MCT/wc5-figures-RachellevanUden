"use strict";
import Figure from './Figure.js';
import Circle from './Circle.js';
import Rectangle from './Rectangle.js';
import Square from './Square.js';

const form = {
    changeSelect(e) {
        console.log('Changing select!');
        console.log(this.value);

        const inputsHtml = document.getElementById('otherInputs');
        let htmlString = '';

        if (this.value == 'rectangle') {
            htmlString += form.inputElementsWithLabel('width (px)', 'width');
            htmlString += form.inputElementsWithLabel('height (px)', 'height');
        } else if (this.value == 'square') {
            htmlString += form.inputElementsWithLabel('size (px)', 'size');
        } else if (this.value == 'circle') {
            htmlString += form.inputElementsWithLabel('radius (px)', 'radius');
        }

        inputsHtml.innerHTML = htmlString;

    },
    init() {
        console.log('Form init!');

        document.getElementById('select').addEventListener('change', this.changeSelect);
        document.getElementById('form').addEventListener('submit', (e) => {
            this.submitForm(e)
        });

    },
    inputElementsWithLabel(label, id) {
        return `
        <label>
            ${label}
            <input id="${id}" type="number">
        </label>
        `

    },
    submitForm(e) {
        e.preventDefault();
        console.log('Form submitted');
        console.log(this);
        const figureSelected = document.getElementById('select').value;

        let figure;

        if (figureSelected == 'rectangle') {
            const width = document.getElementById('width').value;
            const height = document.getElementById('height').value;

            figure = new Rectangle(width, height);

        } else if (figureSelected == 'square') {
            const size = document.getElementById('size').value;
            figure = new Square(size);

        } else if (figureSelected == 'circle') {
            const radius = document.getElementById('radius').value;
            figure = new Circle(radius);
        }

        console.log(figure);
        const resultsHtml = document.getElementById('results');
        resultsHtml.innerHTML += figure.htmlString;
    }
};

form.init();

/* const rect1 = new Rectangle(400, 200);

const newHtml = document.getElementById('results'); */