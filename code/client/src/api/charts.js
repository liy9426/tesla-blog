import fetch from 'src/utils/fetch';

export function getCountData () {
    return fetch({
        url: '/dashboard/statistics',
        method: 'get'
    });
}
