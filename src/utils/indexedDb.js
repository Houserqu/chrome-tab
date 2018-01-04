import default_url from './default-nav';
import { indexedDbName } from "../config";

export default class IndexedDb {

  constructor(){
    this.dbName = indexedDbName;
  }
  /**
   * 检查数据库，如果不存在数据库，创建并写入初始数据
   */
  checkDb = () => {
    // 判断是否支持indexedDb
    if('indexedDB' in window) {
      let openRequest = indexedDB.open("chrometab",1);

      // 不存在数据库，初始化
      openRequest.onupgradeneeded = e => {
        // 创建表
        let db = e.target.result;
        db.createObjectStore("url", { autoIncrement: true });
      }

      // 存在数据库，打开成功
      openRequest.onsuccess = e => {
        // 创建事务
        let db = e.target.result;
        let transaction = db.transaction(["url"],"readwrite");

        // 获取对象仓库
        let store = transaction.objectStore('url');

        let cursor = store.openCursor();
        let length = 0;

        cursor.onsuccess = e => {
          let res = e.target.result;

          if(res) {
            length++;
            res.continue();
          } else {
            if(length === 0){
              //写入初始化数据
              default_url.map(item => {
                store.add(item)
              })
            }
          }
        }
      }
    } else {
      // 不支持
      console.log('no')
    }
  }

  getStore = (storeName) => {

    return new Promise((resolve, reject) => {
      // 判断是否支持indexedDb
      if('indexedDB' in window) {
        let openRequest = indexedDB.open("chrometab",1);

        // 不存在数据库，初始化
        openRequest.onupgradeneeded = e => {
          reject('数据库不存在');
        }

        // 存在数据库，打开成功
        openRequest.onsuccess = e => {
          // 创建事务
          let db = e.target.result;
          let transaction = db.transaction([storeName],"readwrite");

          // 获取对象仓库
          let store = transaction.objectStore(storeName);

          let store_array = [];
          let cursor = store.openCursor();
          cursor.onsuccess = e => {
            let res = e.target.result;

            if(res) {
              store_array.push({...res.value, key: res.key});
              res.continue();
            } else {
              resolve(store_array);
            }
          }
        }
      } else {
        // 不支持
        reject('不支持indexdb');
      }
    })
  }

  addObject = (storeName) => {

    return new Promise((resolve, reject) => {
      // 判断是否支持indexedDb
      if('indexedDB' in window) {
        let openRequest = indexedDB.open("chrometab",1);

        // 不存在数据库，初始化
        openRequest.onupgradeneeded = e => {
          reject('数据库不存在');
        }

        // 存在数据库，打开成功
        openRequest.onsuccess = e => {
          // 创建事务
          let db = e.target.result;
          let transaction = db.transaction([storeName],"readwrite");

          // 获取对象仓库
          let store = transaction.objectStore(storeName);

        }
      } else {
        // 不支持
        reject('不支持indexdb');
      }
    })
  }

  getObject = (storeName, key) => {

    return new Promise((resolve, reject) => {
      // 判断是否支持indexedDb
      if('indexedDB' in window) {
        let openRequest = indexedDB.open("chrometab",1);

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
          } catch(e) {
            reject(e);
          }


        }
      } else {
        // 不支持
        reject('不支持indexdb');
      }
    })
  }
}
