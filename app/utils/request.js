import fetch from 'dva/fetch'
import {BASE_URL, HOST} from './config'
import Storage from './storage'
import {Toast} from '@ant-design/react-native'

const CONFIG_HEADERS ={
  'Referrer': HOST,
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Origin': '*',
  'X-Host': HOST,
}


export function CREAT(options){
    let URL = BASE_URL+options.url
    let body = JSON.stringify(options.params)
    let headers
    if (window._userToken) {
        headers = { ...CONFIG_HEADERS, Authorization: window._userToken }
    } else {
        headers = CONFIG_HEADERS
    }
    return new Promise((resolve, reject)=>{
        fetch(URL,{
            method: 'POST',
            credentials: 'include',
            cache: 'no-cache',
            headers,
            body
        })
        .then(response => {
            console.log("response not handled", response)
            if(response.ok){
                return response.json()
            }else{
                console.log("服务器错误")
            }
        }
        )
        .then(response=>{
            resolve(response)
        })
        .cache(response =>{
            console.log("网络错误err response ", response)
            reject(response)
        }
        )
    }).catch(err=>{
        console.log("error in CREATE", err)
        Toast.fail(err)
    })
}

export function READ(options){
    let URL = BASE_URL+options.url
    let body = JSON.stringify(options.params)
    let headers
    if (window._userToken) {
        headers = { ...CONFIG_HEADERS, Authorization: window._userToken }
    } else {
        headers = CONFIG_HEADERS
    }

    return new Promise((resolve, reject)=>{
        fetch(URL,{
            method: 'GET',
            credentials: 'include',
            cache: 'no-cache',
            headers
        })
        .then(response => {
            console.log("response not handled", response)
            if(response.ok){
                return  response.json()
            }else{
                reject("服务器错误")
            }
        })
        .then(response=>{
            resolve(response)
        })
        .catch(response =>{
            reject("网络错误")
        })
    }).catch(err=>{
        console.log("error in READ", err)
        Toast.fail(err)
    })
}

export function UPDATE(options){
    let URL = BASE_URL+options.url
    let body = JSON.stringify(options.params)
    let headers
    if (window._userToken) {
        headers = { ...CONFIG_HEADERS, Authorization: window._userToken }
    } else {
        headers = CONFIG_HEADERS
    }
    return new Promise((resolve, reject)=>{
        fetch(URL,{
            method: 'PUT',
            credentials: 'include',
            cache: 'no-cache',
            headers,
            body
        })
        .then(response => {
            console.log("response not handled", response)
            if(response.ok){
                resolve(response)
            }else{
                console.log("服务器错误")
            }
        }
        )
        .cache(response =>{
            console.log("网络错误err response ", response)
            reject(response)
        }
        )
    }).catch(err=>{
        console.log("error in UPDATE", err)
    })
}

export function DELETE(options){
    let URL = BASE_URL+options.url
    let body = JSON.stringify(options.params)
    let headers
    if (window._userToken) {
        headers = { ...CONFIG_HEADERS, Authorization: window._userToken }
    } else {
        headers = CONFIG_HEADERS
    }
    return new Promise((resolve, reject)=>{
        fetch(URL,{
            method: 'DELETE',
            credentials: 'include',
            cache: 'no-cache',
            headers,
            body
        })
        .then(response => {
            console.log("response not handled", response)
            if(response.ok){
                resolve(response)
            }else{
                console.log("服务器错误")
            }
        }
        )
        .cache(response =>{
            console.log("网络错误err response ", response)
            reject(response)
        }
        )
    }).catch(err=>{
        console.log("error in DELETE", err)
    })

}

export function UPLOAD(options){

}
