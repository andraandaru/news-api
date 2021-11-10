import { Table } from "react-bootstrap"

const TableBS = ({children}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Gambar</th>
          <th>Judul Berita</th>
          <th>Deskripsi</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </Table>
  )
}

export default TableBS
