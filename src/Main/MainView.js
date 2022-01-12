import Marionette from 'backbone.marionette';
import template from './MainTemplate.html';
import _ from 'underscore';
import './main.scss';
const MainView = Marionette.View.extend({
    template: _.template(template),
    el: '#app',

    ui: {
        stockSearchInput: '#stock-search-input',
        stockSearchButton: '#stock-search-button',
        stockError: '#stock-error'
    },

    events: {
        'click @ui.stockSearchButton': 'searchStock',
    },

    searchStock: function() {
        const symbol = this.ui.stockSearchInput.val();

        if (symbol.length < 1) {
            this.$el.find('#stock-error').removeClass('d-none')
            // TODO: show the user a warning here

            return;
        }
        this.$el.find('#stock-error').addClass('d-none')

        this.ui.stockSearchInput.val('');
        this.trigger('stockSearch', {symbol: symbol.toUpperCase()});

    }
})

export default MainView;