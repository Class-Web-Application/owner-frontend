import React from 'react';
import { Users, GraduationCap, DollarSign, TrendingUp, AlertCircle, Star } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Teachers',
      value: '48',
      change: '+5 this month',
      icon: Users,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Total Students',
      value: '1,247',
      change: '+23 this week',
      icon: GraduationCap,
      color: 'bg-emerald-500',
      bgColor: 'bg-emerald-50'
    },
    {
      title: 'Monthly Income',
      value: '$45,230',
      change: '+12% from last month',
      icon: DollarSign,
      color: 'bg-yellow-500',
      bgColor: 'bg-yellow-50'
    },
    {
      title: 'Growth Rate',
      value: '18.2%',
      change: '+2.1% from last month',
      icon: TrendingUp,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50'
    }
  ];

  const recentActivities = [
    { action: 'New teacher Sarah Johnson joined', time: '2 hours ago', type: 'teacher' },
    { action: '15 students completed payments', time: '4 hours ago', type: 'payment' },
    { action: 'System maintenance scheduled', time: '1 day ago', type: 'system' },
    { action: 'Monthly report generated', time: '2 days ago', type: 'report' }
  ];

  const issues = [
    { title: 'Login issues reported', severity: 'high', count: 3 },
    { title: 'Payment gateway slow', severity: 'medium', count: 7 },
    { title: 'Mobile app crashes', severity: 'high', count: 2 }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className={`${stat.bgColor} rounded-xl p-6 border border-gray-100`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-800 mt-1">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.change}</p>
                </div>
                <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Issues Summary */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Current Issues</h3>
            <AlertCircle className="w-5 h-5 text-red-500" />
          </div>
          <div className="space-y-3">
            {issues.map((issue, index) => (
              <div key={index} className="p-3 bg-red-50 rounded-lg border border-red-100">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-800">{issue.title}</p>
                  <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                    {issue.count}
                  </span>
                </div>
                <p className={`text-xs mt-1 ${
                  issue.severity === 'high' ? 'text-red-600' : 'text-yellow-600'
                }`}>
                  {issue.severity.toUpperCase()} PRIORITY
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors">
            <Users className="w-6 h-6 text-blue-600 mb-2" />
            <p className="text-sm font-medium text-gray-800">Add New Teacher</p>
          </button>
          <button className="p-4 bg-emerald-50 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition-colors">
            <DollarSign className="w-6 h-6 text-emerald-600 mb-2" />
            <p className="text-sm font-medium text-gray-800">View Income Report</p>
          </button>
          <button className="p-4 bg-purple-50 rounded-lg border border-purple-200 hover:bg-purple-100 transition-colors">
            <Star className="w-6 h-6 text-purple-600 mb-2" />
            <p className="text-sm font-medium text-gray-800">Check Feedback</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;