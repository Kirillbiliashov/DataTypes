'use strict';

const fn = () =>  {
    console.log(hoisted);
    var hoisted = 'hoisted string';
};

fn();

module.exports = { fn };
