(function () {
    'use strict';

    this.export = function (cmd) {

        /**
         * Command: upper('a') === ['A']
         * @author Nate Ferrero
         */
        this.args = [];
        this.each = function (args, val) {
            return ('' + val).toUpperCase();
        };
    };
}).call(typeof module === 'undefined' ? this['cmd:lib'].upper = {} : this);