import React, { useState } from 'react';
import { Search, Filter, GraduationCap, Calendar, BookOpen, CheckCircle, XCircle } from 'lucide-react';

const Students = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterClass, setFilterClass] = useState('all');
  
  const students = [
    {
      id: 1,
      name: 'Alex Thompson',
      email: 'alex.thompson@email.com',
      class: 'Grade 10',
      enrollmentDate: '2023-09-01',
      paymentStatus: 'Paid',
      subjects: ['Math', 'Physics', 'Chemistry'],
      guardian: 'John Thompson',
      phone: '+1 (555) 111-2222'
    },
    {
      id: 2,
      name: 'Emma Wilson',
      email: 'emma.wilson@email.com',
      class: 'Grade 11',
      enrollmentDate: '2023-09-01',
      paymentStatus: 'Pending',
      subjects: ['English', 'History', 'Biology'],
      guardian: 'Sarah Wilson',
      phone: '+1 (555) 222-3333'
    },
    {
      id: 3,
      name: 'Michael Davis',
      email: 'michael.davis@email.com',
      class: 'Grade 12',
      enrollmentDate: '2023-09-01',
      paymentStatus: 'Paid',
      subjects: ['Math', 'Computer Science', 'Physics'],
      guardian: 'Robert Davis',
      phone: '+1 (555) 333-4444'
    },
    {
      id: 4,
      name: 'Sophie Brown',
      email: 'sophie.brown@email.com',
      class: 'Grade 9',
      enrollmentDate: '2023-09-01',
      paymentStatus: 'Overdue',
      subjects: ['Art', 'English', 'Geography'],
      guardian: 'Lisa Brown',
      phone: '+1 (555) 444-5555'
    },
    {
      id: 5,
      name: 'David Lee',
      email: 'david.lee@email.com',
      class: 'Grade 10',
      enrollmentDate: '2023-09-01',
      paymentStatus: 'Paid',
      subjects: ['Math', 'Science', 'English'],
      guardian: 'Jennifer Lee',
      phone: '+1 (555) 555-6666'
    }
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.class.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = filterClass === 'all' || student.class === filterClass;
    return matchesSearch && matchesClass;
  });

  const classes = ['all', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];

  const getPaymentStatusIcon = (status) => {
    switch (status) {
      case 'Paid':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'Pending':
        return <Calendar className="w-4 h-4 text-yellow-500" />;
      case 'Overdue':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getPaymentStatusColor = (status) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-600';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-600';
      case 'Overdue':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Students Management</h2>
          <p className="text-gray-600">Overview of all enrolled students</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Total Students:</span>
          <span className="text-lg font-semibold text-blue-600">{students.length}</span>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search students by name or class..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={filterClass}
              onChange={(e) => setFilterClass(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {classes.map(cls => (
                <option key={cls} value={cls}>
                  {cls === 'all' ? 'All Classes' : cls}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Class
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subjects
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Guardian
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Enrollment Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                        <GraduationCap className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{student.name}</div>
                        <div className="text-sm text-gray-500">{student.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{student.class}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-1">
                      {student.subjects.slice(0, 2).map((subject, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {subject}
                        </span>
                      ))}
                      {student.subjects.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{student.subjects.length - 2}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{student.guardian}</div>
                    <div className="text-sm text-gray-500">{student.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      {getPaymentStatusIcon(student.paymentStatus)}
                      <span className={`px-2 py-1 text-xs rounded-full ${getPaymentStatusColor(student.paymentStatus)}`}>
                        {student.paymentStatus}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.enrollmentDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <div className="text-green-600 text-sm font-medium">Payments Up to Date</div>
          <div className="text-2xl font-bold text-green-800">
            {students.filter(s => s.paymentStatus === 'Paid').length}
          </div>
        </div>
        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
          <div className="text-yellow-600 text-sm font-medium">Pending Payments</div>
          <div className="text-2xl font-bold text-yellow-800">
            {students.filter(s => s.paymentStatus === 'Pending').length}
          </div>
        </div>
        <div className="bg-red-50 rounded-lg p-4 border border-red-200">
          <div className="text-red-600 text-sm font-medium">Overdue Payments</div>
          <div className="text-2xl font-bold text-red-800">
            {students.filter(s => s.paymentStatus === 'Overdue').length}
          </div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <div className="text-blue-600 text-sm font-medium">Total Classes</div>
          <div className="text-2xl font-bold text-blue-800">
            {new Set(students.map(s => s.class)).size}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;