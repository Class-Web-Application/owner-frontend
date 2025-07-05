import React, { useState } from 'react';
import { Plus, Search, Edit, Mail, Phone, Calendar, MapPin } from 'lucide-react';

const Teachers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@school.com',
      phone: '+1 (555) 123-4567',
      subject: 'Mathematics',
      joinDate: '2023-01-15',
      salary: '$4,500',
      status: 'Active',
      address: '123 Oak Street, City',
      experience: '5 years'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.chen@school.com',
      phone: '+1 (555) 234-5678',
      subject: 'Physics',
      joinDate: '2022-09-01',
      salary: '$4,800',
      status: 'Active',
      address: '456 Pine Avenue, City',
      experience: '7 years'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@school.com',
      phone: '+1 (555) 345-6789',
      subject: 'English Literature',
      joinDate: '2023-03-20',
      salary: '$4,200',
      status: 'Active',
      address: '789 Maple Drive, City',
      experience: '3 years'
    }
  ]);

  const [newTeacher, setNewTeacher] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    salary: '',
    address: '',
    experience: ''
  });

  const filteredTeachers = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddTeacher = (e) => {
    e.preventDefault();
    const teacher = {
      id: teachers.length + 1,
      ...newTeacher,
      joinDate: new Date().toISOString().split('T')[0],
      status: 'Active'
    };
    setTeachers([...teachers, teacher]);
    setNewTeacher({
      name: '',
      email: '',
      phone: '',
      subject: '',
      salary: '',
      address: '',
      experience: ''
    });
    setShowAddForm(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Teachers Management</h2>
          <p className="text-gray-600">Manage all teachers in your institution</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Add Teacher</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search teachers by name or subject..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeachers.map((teacher) => (
          <div key={teacher.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold text-lg">
                  {teacher.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Edit className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{teacher.name}</h3>
                <p className="text-sm text-blue-600 font-medium">{teacher.subject}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>{teacher.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>{teacher.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Joined: {teacher.joinDate}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{teacher.address}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-3 border-t">
                <span className="text-lg font-semibold text-green-600">{teacher.salary}</span>
                <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full">
                  {teacher.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Teacher Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Add New Teacher</h3>
            <form onSubmit={handleAddTeacher} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={newTeacher.name}
                  onChange={(e) => setNewTeacher({...newTeacher, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={newTeacher.email}
                  onChange={(e) => setNewTeacher({...newTeacher, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  required
                  value={newTeacher.phone}
                  onChange={(e) => setNewTeacher({...newTeacher, phone: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  required
                  value={newTeacher.subject}
                  onChange={(e) => setNewTeacher({...newTeacher, subject: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Salary</label>
                <input
                  type="text"
                  required
                  value={newTeacher.salary}
                  onChange={(e) => setNewTeacher({...newTeacher, salary: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., $4,500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  required
                  value={newTeacher.address}
                  onChange={(e) => setNewTeacher({...newTeacher, address: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                <input
                  type="text"
                  required
                  value={newTeacher.experience}
                  onChange={(e) => setNewTeacher({...newTeacher, experience: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 5 years"
                />
              </div>
              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add Teacher
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teachers;