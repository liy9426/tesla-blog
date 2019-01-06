import fetch from 'src/utils/fetch';

export function getChartData () {
    return fetch({
        url: 'https://www.alphavantage.co/query',
        method: 'get',
        params: {
            'function': 'TIME_SERIES_MONTHLY_ADJUSTED',
            'symbol': 'TSLA',
            'apikey': 'RXWUOZSWDQCFNP28'
        }
    });
}
