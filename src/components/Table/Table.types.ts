export type row = {
  make: string
  model: string
  price: number
  type?: string
}

export type column = {
  field: string
}

export interface TableType {
  isDark?: boolean
  filter?: boolean
  sortable?: boolean
  pagination?: boolean
  perPage?: number
  resizable?: boolean
  rowData?: Array<row>
  columnDefs?: Array<column>
}
