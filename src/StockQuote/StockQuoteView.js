import Marionette from 'backbone.marionette';
import template from './StockQuoteCard.html';
import _ from 'underscore';
import './stock-quote-card.scss'
import { stockArrowLocation } from './StockQuoteService';
import $ from 'jquery';
export const StockQuoteView = Marionette.View.extend({
    className: "stock-card col-lg-4 col-md-6 col-xs-12",
    template: _.template(template),
    
    initialize: function() {
        _.bindAll(this, 'template');
    },

    /**
     *
     * @param {String} value
     * @returns {*}
     */
    formatMoney: function(value = null, isMoney = true) {
        // TODO - complete the format money method, don't just return the input.
        if(value === null)
        return 'N/A'
        if(!isMoney)
        return Number(value)
        return '$' + Number(value).toFixed(2).toString()
    },
    isStockPositive: function(data = 0){
        if(Number(Math.sign(data)) === 1)
        return true
        if(Number(Math.sign(data)) === -1)
        return false
    },
    stockArrowLocation: function(high = 100, low = 0, price = 50){
        //Not positive what formula to use to find location of current price based on difference between high/low. 
        return parseFloat((high - low) / (high - price)).toFixed(2).toString() + '%';
    }
})