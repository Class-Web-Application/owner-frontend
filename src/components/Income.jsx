import React, { useState } from 'react';
import { TrendingUp, DollarSign, Calendar, Download, Filter } from 'lucide-react';

const Income = () => {
  const [selectedMonth, setSelectedMonth] = useState('2024-01');
  
  const monthlyData = [
    { month: 'Jan 2024', income: 42500, expenses: 28000, profit: 14500 },
    { month: 'Feb 2024', income: 45200, expenses: 29500, profit: 15700 },
    { month: 'Mar 2024', income: 48100, expenses: 31000, profit: 17100 },
    { month: 'Apr 2024', income: 46800, expenses: 30200, profit: 16600 },
    { month: 'May 2024', income: 49500, expenses: 32500, profit: 17000 },
    { month: 'Jun 2024', income: 52300, expenses: 34000, profit: 18300 }
  ];

  const paymentData = [
    { id: 1, studentName: 'Alex Thompson', amount: 750, date: '2024-01-15', method: 'Credit Card', status: 'Completed' },
    { id: 2, studentName: 'Emma Wilson', amount: 750, date: '2024-01-14', method: 'Bank Transfer', status: 'Pending' },
    { id: 3, studentName: 'Michael Davis', amount: 750, date: '2024-01-13', method: 'Cash', status: 'Completed' },
    { id: 4, studentName: 'Sophie Brown', amount: 750, date: '2024-01-12', method: 'Credit Card', status: 'Failed' },
    { id: 5, studentName: 'David Lee', amount: 750, date: '2024-01-11', method: 'Bank Transfer', status: 'Completed' },
    { id: 6, studentName: 'Jessica Garcia', amount: 750, date: '2024-01-10', method: 'Credit Card', status: 'Completed' },
    { id: 7, studentName: 'Ryan Martinez', amount: 750, date: '2024-01-09', method: 'Cash', status: 'Completed' },
    { id: 8, studentName: 'Ashley Rodriguez', amount: 750, date: '2024-01-08', method: 'Bank Transfer', status: 'Pending' }
  ];

  const currentMonth = monthlyData[monthlyData.length - 1];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-600';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-600';
      case 'Failed':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const totalIncome = paymentData.filter(p => p.status === 'Completed').reduce((sum, p) => sum + p.amount, 0);
  const pendingPayments = paymentData.filter(p => p.status === 'Pending').length;
  const failedPayments = paymentData.filter(p => p.status === 'Failed').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Income & Payments</h2>
          <p className="text-gray-600">Track your institution's financial performance</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-600">Total Income</p>
              <p className="text-2xl font-bold text-green-800">${totalIncome.toLocaleString()}</p>
              <p className="text-sm text-green-600">+12% from last month</p>
            </div>
            <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-600">Monthly Target</p>
              <p className="text-2xl font-bold text-blue-800">$50,000</p>
              <p className="text-sm text-blue-600">85% achieved</p>
            </div>
            <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-yellow-600">Pending Payments</p>
              <p className="text-2xl font-bold text-yellow-800">{pendingPayments}</p>
              <p className="text-sm text-yellow-600">Need follow-up</p>
            </div>
            <div className="bg-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-red-50 rounded-xl p-6 border border-red-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-red-600">Failed Payments</p>
              <p className="text-2xl font-bold text-red-800">{failedPayments}</p>
              <p className="text-sm text-red-600">Require attention</p>
            </div>
            <div className="bg-red-500 w-12 h-12 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Trend */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Monthly Financial Trend</h3>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {monthlyData.map((month, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-50 rounded-lg p-4 mb-2">
                <div className="text-sm font-medium text-gray-600">{month.month}</div>
                <div className="text-lg font-bold text-blue-600">${(month.income / 1000).toFixed(0)}K</div>
                <div className="text-xs text-gray-500">Income</div>
              </div>
              <div className="bg-green-50 rounded-lg p-2">
                <div className="text-sm font-semibold text-green-600">${(month.profit / 1000).toFixed(0)}K</div>
                <div className="text-xs text-gray-500">Profit</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Payments */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Recent Payments</h3>
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1">
              <option>All Status</option>
              <option>Completed</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Method
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paymentData.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{payment.studentName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">${payment.amount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{payment.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{payment.method}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(payment.status)}`}>
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Income;