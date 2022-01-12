import Marionette from 'backbone.marionette';
import {StockQuoteView} from "./StockQuoteView";

export const StockQuoteCollectionView = Marionette.CollectionView.extend({
    childView: StockQuoteView,

})

