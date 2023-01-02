'use strict';

var server = require('server');

server.extend(module.superModule);

server.append('Refinebar', function (req, res, next) {

    var viewData = res.getViewData();

    viewData.productSearch.refinements.forEach(function (refinement) {
        refinement.selectedCount = 0;
        refinement.values.forEach(function (value) {
            if (value.type !== 'category' && value.selected == true) {

                refinement.selectedCount++;
            }

        })

    })

    next();
})

module.exports = server.exports();