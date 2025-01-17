import type { FileNodeInfo } from '@/api/files'
import { apiBase } from '@/api'

const encode = encodeURIComponent
export const toRawFileUrl = (file: FileNodeInfo, download = false) =>
  `${apiBase.value}/file?path=${encode(file.fullpath)}&t=${encode(file.date)}${
    download ? `&disposition=${encode(file.name)}` : ''
  }`
export const toImageThumbnailUrl = (file: FileNodeInfo, size: string = '256x256') =>
  `${apiBase.value}/image-thumbnail?path=${encode(file.fullpath)}&size=${size}&t=${encode(
    file.date
  )}`

  export type FileTransferData = {
    path: string[]
    loc: string
    includeDir: boolean
    nodes: FileNodeInfo[]
    __id: 'FileTransferData'
  }
  
  export const isFileTransferData = (v: any): v is FileTransferData => 
    typeof v === 'object' && v.__id === 'FileTransferData'
  

    