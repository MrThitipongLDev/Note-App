import { useState } from "react";
import SelectInput from "./inputs/SelectInput";
import TextInput from "./inputs/TextInput";

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
          <TextInput
            label="หัวข้อ"
            id="title"
            name="title"
            className="w-full p-2 border rounded-lg"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <SelectInput
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: "High", label: "High" },
              { value: "Medium", label: "Medium" },
              { value: "Low", label: "Low" },
            ]}
          />
          <SelectInput
            label="Category"
            name="Category"
            value={formData.Category}
            onChange={handleChange}
            options={[
              { value: "Work", label: "Work" },
              { value: "Pernoal", label: "Pernoal" },
              { value: "Idea", label: "Idea" },
            ]}
          />

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
