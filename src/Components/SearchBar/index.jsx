import { Form, FormControl, Button, DropdownButton, Dropdown } from "react-bootstrap"

const SearchBar = ({
  onChangeCategory,
  category,
  onChangeInput,
  onSearch,
  keyword,
  onChangeCountry,
}) => {
  return (
    <div>
      <Form className="d-flex flex-column mb-3">
        <div className="d-flex align-items-center">
          <Form.Label>Cari Berdasarkan&nbsp;</Form.Label>
          <DropdownButton
            id="dropdown-basic-button"
            title={category === "country" ? "Negara" : "Keyword"}
            className="mb-3"
          >
            <Dropdown.Item onClick={() => onChangeCategory()}>Negara</Dropdown.Item>
            <Dropdown.Item onClick={() => onChangeCategory()}>Keyword</Dropdown.Item>
          </DropdownButton>
        </div>

        {category === "country" ? (
          <div className="d-flex">
            <Button className="me-2" onClick={() => onChangeCountry("id")}>
              Indonesia
            </Button>
            <Button className="mx-2" onClick={() => onChangeCountry("us")}>
              Amerika
            </Button>
            <Button className="mx-2" onClick={() => onChangeCountry("in")}>
              India
            </Button>
            <Button className="mx-2" onClick={() => onChangeCountry("gb")}>
              Inggris
            </Button>
            <Button className="mx-2" onClick={() => onChangeCountry("de")}>
              Jerman
            </Button>
            <Button className="mx-2" onClick={() => onChangeCountry("nl")}>
              Belanda
            </Button>
            <Button className="mx-2" onClick={() => onChangeCountry("jp")}>
              Jepang
            </Button>
            <Button className="ms-2" onClick={() => onChangeCountry("kr")}>
              Korea
            </Button>
          </div>
        ) : (
          <>
            <Form.Label>Cari Berita</Form.Label>
            <div className="d-flex">
              <FormControl
                type="search"
                placeholder="Keyword"
                className="mx-2"
                aria-label="Search"
                value={keyword}
                onChange={onChangeInput}
              />
              <Button variant="outline-success" onClick={onSearch}>
                Search
              </Button>
            </div>
          </>
        )}
      </Form>
    </div>
  )
}

export default SearchBar
