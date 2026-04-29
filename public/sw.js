 const staticCacheName = 's-app-v1'
 
 const asSetURLs = [
    '/index.html',
    '../../../styles/styles.css',
    '../../form/form.css',
    './index.js'
 ]

 self.addEventListener('install', async event=>{
   const cache= await caches.open(staticCacheName);
   await cache.addAll(asSetURLs)
 })

 self.addEventListener('activate', event=>{
    
 })
 
 self.addEventListener('fetch', event=>{
    console.log('fetch', event.request.url)
 })

