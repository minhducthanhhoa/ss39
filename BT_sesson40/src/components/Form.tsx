import React,{useState} from 'react'

export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        dateOfBirth: '',
        email: '',
        address: '',
      });
    
      const [errors, setErrors] = useState({
        name: '',
        dateOfBirth: '',
        email: '',
      });
    
      const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };
    
      const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        // Validate form data
        let isValid = true;
        const newErrors = { ...errors };
    
        if (!formData.name.trim()) {
          newErrors.name = 'Họ và tên không được để trống.';
          isValid = false;
        } else {
          newErrors.name = '';
        }
    
        if (!formData.email.trim()) {
          newErrors.email = 'Email không được để trống.';
          isValid = false;
        } else {
          newErrors.email = '';
        }
    
        const today = new Date();
        const dob = new Date(formData.dateOfBirth);
        if (dob > today) {
          newErrors.dateOfBirth = 'Ngày sinh không được lớn hơn ngày hiện tại.';
          isValid = false;
        } else {
          newErrors.dateOfBirth = '';
        }
    
        setErrors(newErrors);
    
        if (isValid) {
          // Lưu dữ liệu nhân viên vào localStorage hoặc gửi lên server
          console.log('Lưu dữ liệu nhân viên:', formData);
        }
      };
    
  return (
    <div>
        <div className="overlay">
      <form className="form" onSubmit={handleSubmit}>
        <div className="d-flex justify-content-between align-items-center">
          <h4>Thêm mới nhân viên</h4>
          <i className="fa-solid fa-xmark" />
        </div>
        <div>
          <label className="form-label" htmlFor="name">
            Họ và tên
          </label>
          <input
            id="name"
            type="text"
            className="form-control"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <div className="form-text error">{errors.name}</div>}
        </div>
        <div>
          <label className="form-label" htmlFor="dateOfBirth">
            Ngày sinh
          </label>
          <input
            id="dateOfBirth"
            type="date"
            className="form-control"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
          />
          {errors.dateOfBirth && (
            <div className="form-text error">{errors.dateOfBirth}</div>
          )}
        </div>
        <div>
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="form-control"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <div className="form-text error">{errors.email}</div>}
        </div>
        <div>
          <label className="form-label" htmlFor="address">
            Địa chỉ
          </label>
          <textarea
            className="form-control"
            id="address"
            rows={3}
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit" className="w-100 btn btn-primary">
            Thêm mới
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}
