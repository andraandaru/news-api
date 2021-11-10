import { Image, Button } from "react-bootstrap"

const TableItem = ({ no, data }) => {
  const { urlToImage, title, description, url } = data
  return (
    <tr>
      <td>{no + 1}</td>
      <td>
        <Image src={urlToImage} thumbnail width={150} height={150} />
      </td>
      <td>{title}</td>
      <td>{description}</td>
      <td>
        <Button variant="primary" href={url}>
          Lihat Selengkapnya
        </Button>
      </td>
    </tr>
  )
}

export default TableItem
