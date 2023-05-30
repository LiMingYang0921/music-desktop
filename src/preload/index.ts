import { contextBridge, ipcRenderer } from 'electron'
console.log('preload')
// import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
// const api = {}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
// if (process.contextIsolated) {
//   try {
//     console.log('electronAPI', electronAPI)
//     contextBridge.exposeInMainWorld('electron', electronAPI)
//     contextBridge.exposeInMainWorld('api', api)
//   } catch (error) {
//     console.error(error)
//   }
// } else {
//   // @ts-ignore (define in dts)
//   window.electron = electronAPI
//   // @ts-ignore (define in dts)
//   window.api = api
// }

// contextBridge.exposeInMainWorld('electron', {
//   ping: () => ipcRenderer.invoke('ping')
// })

contextBridge.exposeInMainWorld('electron', {
  mainWindowMax: () => ipcRenderer.invoke('mainWindowMax'),
  mainWindowMin: () => ipcRenderer.invoke('mainWindowMin'),
  mainWindowClose: () => ipcRenderer.invoke('mainWindowClose'),
  mainWindowUnmaximize: () => ipcRenderer.invoke('mainWindowUnmaximize')
})
