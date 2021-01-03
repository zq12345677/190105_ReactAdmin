/**
 要求：能根据接口文档定义接口请求
 包含应用中所有接口请求函数的模块
 每个函数的返回值都是promise

 基本要求：能根据接口文档定义接口请求函数
 */
import { message } from 'antd'
import jsonp from 'jsonp'
import ajax from './ajax'

 //登陆
//  export function reqLogin(){
//    return ajax(url,{username,password},'POST')
//  }
export const reqLogin = (username,password) => ajax('./login',{username,password},'POST')

//添加用户
export const reqAddUser = (user) => ajax('/adduser',user,'POST')


//获取一级/二级分类的列表
export const reqCategorys = (parentId) => ajax('url',{parentId})
//添加分类
export const reqAddCategory = (categoryName,parentId) => ajax('url',{categoryName,parentId},'POST')
//更新分类
export const reqUpdateCategory = (categoryId,parentId) => ajax('url',{categoryId,parentId},'POST')


/**
 * json请求的接口请求函数
 */
export const reqWeather = (city) => {
    return new Promise((resolve,reject)=>{
        const url=`http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBwr2`
        jsonp(url,{},(err,data)=>{
            console.log('jsonp()',err,data)
            // 如果成功了
            if(!err && data.status==='success'){
                //取出需要的数据
                const {dayPictureUrl,weather} = data.results[0].weather_data[0]
                resolve({dayPictureUrl,weather})
            }else{
                //如果失败了
                message.error('获取天气信息失败')
            }
        })
    })
}   
reqWeather('北京')