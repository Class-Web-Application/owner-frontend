import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  DollarSign, 
  AlertCircle, 
  MessageSquare,
  School
} from 'lucide-react';

const Sidebar = ({ currentPage, onPageChange }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'teachers', label: 'Teachers', icon: Users },
    { id: 'students', label: 'Students', icon: GraduationCap },
    { id: 'income', label: 'Income & Payments', icon: DollarSign },
    { id: 'issues', label: 'Issues', icon: AlertCircle },
    { id: 'feedback', label: 'Feedback', icon: MessageSquare },
  ];

  return (
    <div className="w-64 bg-white shadow-lg h-screen">
      <div className="p-6 border-b">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center">
            <School className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">EduAdmin</h1>
            <p className="text-sm text-gray-500">Owner Portal</p>
          </div>
        </div>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onPageChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                    currentPage === item.id
                      ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;