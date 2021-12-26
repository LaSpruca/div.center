import Div from './index';

test('Test with valid id, top level element', () => {
    document.body.innerHTML = `<div id="cm">Center me</div>`;
    const div = new Div('cm');
    div.center();
    expect(document.body.innerHTML).toBe(
        `<div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%"><div id="cm">Center me</div></div>`
    );
});

test('Test with valid id, nested element', () => {
    document.body.innerHTML = `<div>Sorrounding div<div id="cm">Center me</div></div>`;
    const div = new Div('cm');
    div.center();
    expect(document.body.innerHTML).toBe(
        `<div>Sorrounding div<div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%"><div id="cm">Center me</div></div></div>`
    );
});

test('Test with valid id, nested element', () => {
    document.body.innerHTML = `<div>Sorrounding div<div id="cm">Center me</div></div>`;
    const div = new Div('cm');
    div.center();
    expect(document.body.innerHTML).toBe(
        `<div>Sorrounding div<div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%"><div id="cm">Center me</div></div></div>`
    );
});

test('Test with HTML element', () => {
    document.body.innerHTML = `<div>Sorrounding div<div id="cm">Center me</div></div>`;
    const elm = document.getElementById('cm');

    // This should never happen
    if (elm == null) {
        throw Error('How does this even happen, the test is broken');
    }

    const div = new Div(elm);
    div.center();
    expect(document.body.innerHTML).toBe(
        `<div>Sorrounding div<div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%"><div id="cm">Center me</div></div></div>`
    );
});

test('Test with p', () => {
    document.body.innerHTML = `<div>Sorrounding div<p id="cm">Center me</p></div>`;
    const elm = document.getElementById('cm');

    // This should never happen
    if (elm == null) {
        throw Error('How does this even happen, the test is broken');
    }

    const div = new Div(elm);
    div.center();
    expect(document.body.innerHTML).toBe(
        `<div>Sorrounding div<div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%"><p id="cm">Center me</p></div></div>`
    );
});

// Tests where the library should throw an exception

test('Test with invalid id', () => {
    const x = () => {
        document.body.innerHTML = `<div>Sorrounding div<div id="cm">Center me</div></div>`;
        new Div('cmi');
    };
    expect(x).toThrow(TypeError);
});
test('Test with invalid object', () => {
    const x = () => {
        document.body.innerHTML = `<div>Sorrounding div<div id="cm">Center me</div></div>`;
        // @ts-ignore
        new Div({});
    };
    expect(x).toThrow(TypeError);
});
