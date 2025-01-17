import { axiosInst } from '.'

export interface FileNodeInfo {
  size: string
  type: 'file' | 'dir'
  created_time: string
  name: string
  date: string
  bytes: number
  fullpath: string
}

export const getTargetFolderFiles = async (folder_path: string) => {
  const resp = await axiosInst.value.get(`/files`, { params: { folder_path } })
  return resp.data as { files: FileNodeInfo[] }
}

export const deleteFiles = async (file_paths: string[]) => {
  const resp = await axiosInst.value.post(`/delete_files`, { file_paths })
  return resp.data as { files: FileNodeInfo[] }
}

export const moveFiles = async (
  file_paths: string[],
  dest: string,
  create_dest_folder?: boolean
) => {
  const resp = await axiosInst.value.post(`/move_files`, { file_paths, dest, create_dest_folder })
  return resp.data as { files: FileNodeInfo[] }
}
