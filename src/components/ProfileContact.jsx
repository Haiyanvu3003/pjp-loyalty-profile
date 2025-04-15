import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProfileContact() {
  const location = useLocation();
  const loginPhone = localStorage.getItem("loginPhone") || location.state?.phone || "";

  const defaultData = {
    storeName: "",
    phone: loginPhone,
    customerName: "",
    birthday: "",
    address: "",
    ward: "",
    district: "",
    city: "",
  };

  const [formData, setFormData] = useState(defaultData);
  const [editMode, setEditMode] = useState(true);

  useEffect(() => {
    if (!loginPhone) return;

    const saved = localStorage.getItem(`profileInfo_${loginPhone}`);
    if (saved) {
      setFormData(JSON.parse(saved));
      setEditMode(false);
    }
  }, [loginPhone]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleToggleEdit = () => {
    if (editMode && loginPhone) {
      localStorage.setItem(`profileInfo_${loginPhone}`, JSON.stringify(formData));
    }
    setEditMode(!editMode);
  };

  return (
    <div className="w-full pt-[40px] pb-[60px] bg-white text-left px-[0px]">
      <div className="flex flex-col gap-[28px] w-full items-start">
        <InputField label="TÊN TIỆM VÀNG" value={formData.storeName} onChange={(v) => handleChange("storeName", v)} readOnly={!editMode} />
        <InputField label="SỐ ĐIỆN THOẠI" value={formData.phone} readOnly />
        <InputField label="TÊN QUÝ KHÁCH" value={formData.customerName} onChange={(v) => handleChange("customerName", v)} readOnly={!editMode} />
        <InputField label="NGÀY/THÁNG/NĂM SINH" value={formData.birthday} onChange={(v) => handleChange("birthday", v)} readOnly={!editMode} />
        <InputField label="ĐỊA CHỈ" value={formData.address} onChange={(v) => handleChange("address", v)} readOnly={!editMode} />
        <InputField label="XÃ/PHƯỜNG" value={formData.ward} onChange={(v) => handleChange("ward", v)} readOnly={!editMode} />
        <InputField label="QUẬN/ HUYỆN" value={formData.district} onChange={(v) => handleChange("district", v)} readOnly={!editMode} />
        <InputField label="TỈNH/ THÀNH PHỐ" value={formData.city} onChange={(v) => handleChange("city", v)} readOnly={!editMode} />
        <div className="pt-[20px]">
          <button
            onClick={handleToggleEdit}
            className={`${
              editMode ? "bg-green-700" : "bg-red-700"
            } text-white px-6 py-2 rounded-lg font-semibold`}
          >
            {editMode ? "LƯU" : "CHỈNH SỬA"}
          </button>
        </div>
      </div>
    </div>
  );
}

function InputField({ label, value, onChange, readOnly }) {
  return (
    <div className="relative w-full max-w-[640px]">
      <label className="absolute -top-2 left-5 bg-white px-1 text-sm font-semibold text-green-900 uppercase tracking-wide">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        readOnly={readOnly}
        className={`w-full border border-neutral-400 rounded-md px-6 pt-6 pb-3 text-base font-medium text-green-900 focus:outline-none ${
          readOnly ? "bg-gray-100 cursor-default" : "focus:ring-2 focus:ring-green-500"
        }`}
      />
    </div>
  );
}
