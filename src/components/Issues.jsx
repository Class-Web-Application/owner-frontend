import React, { useState } from 'react';
import { AlertTriangle, Clock, CheckCircle, XCircle, Plus, Search } from 'lucide-react';

const Issues = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showNewIssue, setShowNewIssue] = useState(false);

  const [issues, setIssues] = useState([
    {
      id: 1,
      title: 'Login system not working',
      description: 'Multiple students unable to access their accounts',
      priority: 'High',
      status: 'Open',
      reportedBy: 'Sarah Johnson',
      reportedDate: '2024-01-15',
      assignedTo: 'Tech Team',
      category: 'Technical'
    },
    {
      id: 2,
      title: 'Payment gateway slow response',
      description: 'Payment processing taking longer than usual',
      priority: 'Medium',
      status: 'In Progress',
      reportedBy: 'Michael Chen',
      reportedDate: '2024-01-14',
      assignedTo: 'IT Department',
      category: 'System'
    },
    {
      id: 3,
      title: 'Mobile app crashes on startup',
      description: 'App crashing when opening on Android devices',
      priority: 'High',
      status: 'Open',
      reportedBy: 'Emma Wilson',
      reportedDate: '2024-01-13',
      assignedTo: 'Dev Team',
      category: 'Mobile'
    },
    {
      id: 4,
      title: 'Course materials not loading',
      description: 'PDF files not displaying properly in browser',
      priority: 'Medium',
      status: 'Resolved',
      reportedBy: 'David Lee',
      reportedDate: '2024-01-12',
      assignedTo: 'Content Team',
      category: 'Content'
    },
    {
      id: 5,
      title: 'Email notifications not sending',
      description: 'Students not receiving assignment reminders',
      priority: 'Low',
      status: 'Closed',
      reportedBy: 'Sophie Brown',
      reportedDate: '2024-01-11',
      assignedTo: 'System Admin',
      category: 'Communication'
    }
  ]);

  const [newIssue, setNewIssue] = useState({
    title: '',
    description: '',
    priority: 'Medium',
    category: 'Technical',
    reportedBy: ''
  });

  const filteredIssues = issues.filter(issue => {
    const matchesSearch = issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         issue.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || issue.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-600';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-600';
      case 'Low':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Open':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'In Progress':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'Resolved':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'Closed':
        return <XCircle className="w-4 h-4 text-gray-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open':
        return 'bg-red-100 text-red-600';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-600';
      case 'Resolved':
        return 'bg-green-100 text-green-600';
      case 'Closed':
        return 'bg-gray-100 text-gray-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const handleAddIssue = (e) => {
    e.preventDefault();
    const issue = {
      id: issues.length + 1,
      ...newIssue,
      status: 'Open',
      reportedDate: new Date().toISOString().split('T')[0],
      assignedTo: 'Unassigned'
    };
    setIssues([...issues, issue]);
    setNewIssue({
      title: '',
      description: '',
      priority: 'Medium',
      category: 'Technical',
      reportedBy: ''
    });
    setShowNewIssue(false);
  };

  const statusCounts = {
    open: issues.filter(i => i.status === 'Open').length,
    inProgress: issues.filter(i => i.status === 'In Progress').length,
    resolved: issues.filter(i => i.status === 'Resolved').length,
    closed: issues.filter(i => i.status === 'Closed').length
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Issues Management</h2>
          <p className="text-gray-600">Track and resolve platform issues</p>
        </div>
        <button
          onClick={() => setShowNewIssue(true)}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Report Issue</span>
        </button>
      </div>

      {/* Status Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-red-50 rounded-lg p-4 border border-red-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-red-600">Open Issues</p>
              <p className="text-2xl font-bold text-red-800">{statusCounts.open}</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
        </div>
        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-yellow-600">In Progress</p>
              <p className="text-2xl font-bold text-yellow-800">{statusCounts.inProgress}</p>
            </div>
            <Clock className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-600">Resolved</p>
              <p className="text-2xl font-bold text-green-800">{statusCounts.resolved}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Closed</p>
              <p className="text-2xl font-bold text-gray-800">{statusCounts.closed}</p>
            </div>
            <XCircle className="w-8 h-8 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search issues..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
      </div>

      {/* Issues List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Issue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reported By
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assigned To
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredIssues.map((issue) => (
                <tr key={issue.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{issue.title}</div>
                      <div className="text-sm text-gray-500">{issue.description}</div>
                      <div className="text-xs text-gray-400 mt-1">Category: {issue.category}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(issue.priority)}`}>
                      {issue.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(issue.status)}
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(issue.status)}`}>
                        {issue.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {issue.reportedBy}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {issue.assignedTo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {issue.reportedDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Issue Modal */}
      {showNewIssue && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Report New Issue</h3>
            <form onSubmit={handleAddIssue} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Issue Title</label>
                <input
                  type="text"
                  required
                  value={newIssue.title}
                  onChange={(e) => setNewIssue({...newIssue, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  required
                  rows={3}
                  value={newIssue.description}
                  onChange={(e) => setNewIssue({...newIssue, description: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                <select
                  value={newIssue.priority}
                  onChange={(e) => setNewIssue({...newIssue, priority: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={newIssue.category}
                  onChange={(e) => setNewIssue({...newIssue, category: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="Technical">Technical</option>
                  <option value="System">System</option>
                  <option value="Mobile">Mobile</option>
                  <option value="Content">Content</option>
                  <option value="Communication">Communication</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Reported By</label>
                <input
                  type="text"
                  required
                  value={newIssue.reportedBy}
                  onChange={(e) => setNewIssue({...newIssue, reportedBy: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Report Issue
                </button>
                <button
                  type="button"
                  onClick={() => setShowNewIssue(false)}
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

export default Issues;