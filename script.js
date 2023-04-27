import { context } from './data.js';

const templateSource = await fetch('./template.hbs');
const source = await templateSource.text();

const template = Handlebars.compile(source);

const html = template(context);

const app = document.querySelector('#header');
app.innerHTML = html;
