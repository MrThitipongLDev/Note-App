import { useState } from "react";

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: "",
    priority: "work",
    category: "Medium",
    description: "",
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validation
    if (!formData.title || !formData.description) return;

    //create note
    const newNote = { id: Date.now(), ...formData };

    // Add notes to sate
    setNotes([newNote, ...notes]);

    //reset formdata
    setFormData({
      title: "",
      category: "Work",
      priority: "Medium",
      description: "",
    });
  };

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4"
      >
        {isFormVisible ? "Hide Form x" : "Add New Note +"}
      </button>
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label htmlFor="title" className="block font-semibold">
              หัวข้อ
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full p-2 border rounded-lg"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="priority" className="block font-semibold">
              Priority
            </label>
            <select
              type="text"
              name="priority"
              className="w-full p-2 border rounded-lg"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="High">สูง</option>
              <option value="Medium">กลาง</option>
              <option value="Low">น้อย</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block font-semibold">
              Category
            </label>
            <select
              type="text"
              name="category"
              className="w-full p-2 border rounded-lg"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Work">งาน</option>
              <option value="Peronal">บ้าน</option>
              <option value="Ideas">คิด</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block font-semibold">
              รายละเอียด
            </label>
            <textarea
              type="text"
              name="description"
              className="w-full p-2 border rounded-lg"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">
            เพิ่ม Note
          </button>
        </form>
      )}
    </div>
  );
};

export default NoteForm;
