import default_url from './default-nav';
import {indexedDbName} from "../config";

export default class IndexedDb {

  constructor() {
    this.dbName = indexedDbName;
    this.dbStatus = false;
  }

  /**
   * 检查数据库，如果不存在数据库，创建并写入初始数据
   */
  static checkDb = () => {
    return new Promise((resolve, reject) => {
      // 判断是否支持indexedDb
      if ('indexedDB' in window) {
        let openRequest = indexedDB.open(indexedDbName, 1);

        // 不存在数据库，初始化
        openRequest.onupgradeneeded = e => {
          // 创建表
          let db = e.target.result;
          db.createObjectStore("url", {autoIncrement: true});
          db.createObjectStore("category", {autoIncrement: true});

          reject({code: 300, message: '不存在数据库，已初始化对象仓库'})
        }

        // 存在数据库，打开成功
        openRequest.onsuccess = e => {
          resolve({code: 200, message: '数据库正常'});
        }
      } else {
        // 不支持
        reject({code: 400, message: '当前浏览器不支持indexedDb'})
      }
    })
  }

  static initDb() {
    return new Promise((resolve, reject) => {
      let openRequest = indexedDB.open(indexedDbName, 1);

      // 打开成功
      openRequest.onsuccess = e => {
        // 创建事务
        console.log('写入初始数据')
        let db = e.target.result;
        let transaction = db.transaction(["url"], "readwrite");
  
        // 获取对象仓库
        let store = transaction.objectStore('url');
  
        // 写入初始数据
        default_url.map(item => {
          store.add(item)
        })

        resolve();
      }
    })
  }

  // 创建数据表
  static initStore(storeName) {
    return new Promise((resolve, reject) => {
      let openRequest = indexedDB.open(indexedDbName, 1);

      // 打开成功
      openRequest.onsuccess = e => {
        // 创建事务
        let db = e.target.result;
        db.createObjectStore(storeName, {autoIncrement: true});

        resolve();
      }
    })
  }

  static getStore = (storeName) => {
    return new Promise((resolve, reject) => {
      // 判断是否支持indexedDb
      if ('indexedDB' in window) {
        let openRequest = indexedDB.open(indexedDbName, 1);

        // 不存在数据库，初始化
        openRequest.onupgradeneeded = e => {
          reject({code: 300, message: '不存在数据库'})
        }

        // 存在数据库，打开成功
        openRequest.onsuccess = e => {
          // 创建事务
          let db = e.target.result;
          let transaction = db.transaction([storeName], "readwrite");

          // 获取对象仓库
          let store = transaction.objectStore(storeName);

          let store_array = [];
          let cursor = store.openCursor();
          cursor.onsuccess = e => {
            let res = e.target.result;

            if (res) {
              store_array.push({...res.value, key: res.key});
              res.continue();
            } else {
              resolve(store_array);
            }
          }
        }
      } else {
        // 不支持
        reject({code: 400, message: '当前浏览器不支持indexedDb'})
      }
    })
  }

  static addObject = (storeName, object, key=null) => {

    return new Promise((resolve, reject) => {
      // 判断是否支持indexedDb
      if ('indexedDB' in window) {
        let openRequest = indexedDB.open(indexedDbName, 1);

        // 不存在数据库，初始化
        openRequest.onupgradeneeded = e => {
          reject({code: 300, message: '不存在数据库'})
        }

        // 存在数据库，打开成功
        openRequest.onsuccess = e => {

          try {
            // 创建事务
            let db = e.target.result;
            let transaction = db.transaction([storeName], "readwrite");

            // 获取对象仓库
            let store = transaction.objectStore(storeName);
            let addQuery;
            if(key){
              addQuery = store.add(object, key)
            } else {
              addQuery = store.add(object)
            }

            addQuery.onerror = e => {
              reject({code: 'Error', message: e.target.error.name})
            }

            addQuery.onsuccess = e => {
              resolve(e.target.result);
            }
          }catch(e){
            reject({code: 400, message: '不存在数据表'});
          }
        }
      } else {
        // 不支持
        reject({code: 400, message: '当前浏览器不支持indexedDb'})
      }
    })
  }

  static putObject = (storeName, object, key) => {

    return new Promise((resolve, reject) => {
      // 判断是否支持indexedDb
      if ('indexedDB' in window) {
        let openRequest = indexedDB.open(indexedDbName, 1);

        // 不存在数据库，初始化
        openRequest.onupgradeneeded = e => {
          reject({code: 300, message: '不存在数据库'})
        }

        // 存在数据库，打开成功
        openRequest.onsuccess = e => {
          // 创建事务
          let db = e.target.result;
          let transaction = db.transaction([storeName], "readwrite");

          // 获取对象仓库
          let store = transaction.objectStore(storeName);
          let putQuery;

          putQuery = store.put(object, key)

          putQuery.onerror = e => {
            reject({code: 'Error', message: e.target.error.name})
          }

          putQuery.onsuccess = e => {
            resolve(e.target.result);
          }
        }
      } else {
        // 不支持
        reject({code: 400, message: '当前浏览器不支持indexedDb'})
      }
    })
  }

  static getObject = (storeName, key) => {

    return new Promise((resolve, reject) => {
      // 判断是否支持indexedDb
      if ('indexedDB' in window) {
        let openRequest = indexedDB.open(indexedDbName, 1);

        // 不存在数据库，初始化
        openRequest.onupgradeneeded = e => {
          reject('数据库不存在');
        }

        // 存在数据库，打开成功
        openRequest.onsuccess = e => {
          try {
            e.target.result.transaction([storeName], "readonly")
              .objectStore(storeName)
              .get(key)
              .onsuccess = e => {
              resolve(e.target.result)
            }
          } catch (e) {
            reject(e);
          }


        }
      } else {
        // 不支持
        reject({code: 400, message: '当前浏览器不支持indexedDb'})
      }
    })
  }

  static delObject = (storeName, key) => {

    return new Promise((resolve, reject) => {
      // 判断是否支持indexedDb
      if ('indexedDB' in window) {
        let openRequest = indexedDB.open(indexedDbName, 1);

        // 不存在数据库，初始化
        openRequest.onupgradeneeded = e => {
          reject('数据库不存在');
        }

        // 存在数据库，打开成功
        openRequest.onsuccess = e => {
          try {
            e.target.result.transaction([storeName], "readwrite")
              .objectStore(storeName)
              .delete(key)
              .onsuccess = e => {
              resolve({ code: 200, message: '删除成功'})
            }
          } catch (e) {
            reject({code: 400, message: e});
          }


        }
      } else {
        // 不支持
        reject({code: 400, message: '当前浏览器不支持indexedDb'})
      }
    })
  }
}
