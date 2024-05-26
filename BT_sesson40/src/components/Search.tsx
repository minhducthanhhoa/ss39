import React,{useState,useEffect} from 'react'

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Mô phỏng lấy dữ liệu từ API
    fetchData();
  }, []);

  const fetchData = () => {
    // Ở đây bạn sẽ thực hiện logic lấy dữ liệu từ API
    // Ví dụ:
    const mockData = [
      { id: 1, email: 'john@example.com' },
      { id: 2, email: 'jane@example.com' },
      { id: 3, email: 'bob@example.com' },
      { id: 4, email: 'alice@example.com' },
    ];
    setData(mockData);
    setFilteredData(mockData);
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Lọc dữ liệu dựa trên giá trị tìm kiếm
    const filtered = data.filter((item) =>
      item.email.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleRefresh = () => {
    setSearchTerm('');
    setFilteredData(data);
  };
  return (
    <div>
       <div className="d-flex align-items-center justify-content-end gap-2 mb-3">
        <input
          style={{ width: 350 }}
          type="text"
          className="form-control"
          placeholder="Tìm kiếm theo email"
          value={searchTerm}
          onChange={handleSearch}
        />
        <i className="fa-solid fa-arrows-rotate" title="Refresh" onClick={handleRefresh} />
      </div>

      {/* Hiển thị kết quả tìm kiếm */}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
