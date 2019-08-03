import {READ} from '../utils/request'
export async function fetchFinanceDemands(){
    return READ({
        url: '/api/FinanceDemands'
    })
}