import React, { useState } from 'react';
import { Star, MessageCircle, ThumbsUp, ThumbsDown, Filter, Search } from 'lucide-react';

const Feedback = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRating, setFilterRating] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');

  const feedbackData = [
    {
      id: 1,
      studentName: 'Alex Thompson',
      rating: 5,
      category: 'Teaching Quality',
      subject: 'Mathematics',
      teacher: 'Sarah Johnson',
      comment: 'Excellent teaching methods and very patient with students. The explanations are clear and easy to understand.',
      date: '2024-01-15',
      helpful: 12,
      notHelpful: 1
    },
    {
      id: 2,
      studentName: 'Emma Wilson',
      rating: 4,
      category: 'Platform Usability',
      subject: 'General',
      teacher: 'N/A',
      comment: 'The platform is user-friendly but could use some improvements in the mobile app interface.',
      date: '2024-01-14',
      helpful: 8,
      notHelpful: 2
    },
    {
      id: 3,
      studentName: 'Michael Davis',
      rating: 5,
      category: 'Course Content',
      subject: 'Physics',
      teacher: 'Michael Chen',
      comment: 'The course materials are comprehensive and well-structured. Video lectures are very helpful.',
      date: '2024-01-13',
      helpful: 15,
      notHelpful: 0
    },
    {
      id: 4,
      studentName: 'Sophie Brown',
      rating: 3,
      category: 'Technical Support',
      subject: 'General',
      teacher: 'N/A',
      comment: 'Support team is responsive but resolution time could be faster for urgent issues.',
      date: '2024-01-12',
      helpful: 6,
      notHelpful: 3
    },
    {
      id: 5,
      studentName: 'David Lee',
      rating: 4,
      category: 'Teaching Quality',
      subject: 'English Literature',
      teacher: 'Emily Rodriguez',
      comment: 'Great teacher with excellent communication skills. Assignments are challenging but fair.',
      date: '2024-01-11',
      helpful: 9,
      notHelpful: 1
    },
    {
      id: 6,
      studentName: 'Jessica Garcia',
      rating: 2,
      category: 'Platform Usability',
      subject: 'General',
      teacher: 'N/A',
      comment: 'The platform is slow during peak hours and sometimes crashes. Needs performance improvements.',
      date: '2024-01-10',
      helpful: 11,
      notHelpful: 2
    },
    {
      id: 7,
      studentName: 'Ryan Martinez',
      rating: 5,
      category: 'Course Content',
      subject: 'Chemistry',
      teacher: 'Dr. Anderson',
      comment: 'Amazing course with practical examples. The lab simulations are particularly impressive.',
      date: '2024-01-09',
      helpful: 14,
      notHelpful: 0
    },
    {
      id: 8,
      studentName: 'Ashley Rodriguez',
      rating: 4,
      category: 'Customer Service',
      subject: 'General',
      teacher: 'N/A',
      comment: 'Staff is friendly and helpful. Quick response to queries and professional service.',
      date: '2024-01-08',
      helpful: 7,
      notHelpful: 1
    }
  ];

  const filteredFeedback = feedbackData.filter(feedback => {
    const matchesSearch = feedback.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         feedback.comment.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         feedback.teacher.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRating = filterRating === 'all' || feedback.rating.toString() === filterRating;
    const matchesCategory = filterCategory === 'all' || feedback.category === filterCategory;
    return matchesSearch && matchesRating && matchesCategory;
  });

  const getRatingColor = (rating) => {
    if (rating >= 4) return 'text-green-600';
    if (rating >= 3) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Teaching Quality':
        return 'bg-blue-100 text-blue-600';
      case 'Platform Usability':
        return 'bg-purple-100 text-purple-600';
      case 'Course Content':
        return 'bg-green-100 text-green-600';
      case 'Technical Support':
        return 'bg-red-100 text-red-600';
      case 'Customer Service':
        return 'bg-yellow-100 text-yellow-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-current text-yellow-500' : 'text-gray-300'}`}
      />
    ));
  };

  const averageRating = feedbackData.reduce((sum, feedback) => sum + feedback.rating, 0) / feedbackData.length;
  const totalFeedback = feedbackData.length;
  const positivePercentage = (feedbackData.filter(f => f.rating >= 4).length / totalFeedback * 100).toFixed(1);

  const categories = ['all', 'Teaching Quality', 'Platform Usability', 'Course Content', 'Technical Support', 'Customer Service'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Feedback Management</h2>
          <p className="text-gray-600">Monitor and respond to student feedback</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-600">Total Feedback</div>
          <div className="text-2xl font-bold text-blue-600">{totalFeedback}</div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-600">Average Rating</p>
              <div className="flex items-center space-x-2">
                <p className="text-2xl font-bold text-green-800">{averageRating.toFixed(1)}</p>
                <div className="flex">
                  {renderStars(Math.round(averageRating))}
                </div>
              </div>
            </div>
            <Star className="w-12 h-12 text-green-500" />
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-600">Positive Feedback</p>
              <p className="text-2xl font-bold text-blue-800">{positivePercentage}%</p>
              <p className="text-sm text-blue-600">4+ stars</p>
            </div>
            <ThumbsUp className="w-12 h-12 text-blue-500" />
          </div>
        </div>

        <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-600">Response Rate</p>
              <p className="text-2xl font-bold text-purple-800">87%</p>
              <p className="text-sm text-purple-600">Within 24hrs</p>
            </div>
            <MessageCircle className="w-12 h-12 text-purple-500" />
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
              placeholder="Search feedback..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={filterRating}
              onChange={(e) => setFilterRating(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Feedback List */}
      <div className="space-y-4">
        {filteredFeedback.map((feedback) => (
          <div key={feedback.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">
                    {feedback.studentName.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{feedback.studentName}</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex">{renderStars(feedback.rating)}</div>
                    <span className={`text-sm font-medium ${getRatingColor(feedback.rating)}`}>
                      {feedback.rating}/5
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className={`px-2 py-1 text-xs rounded-full ${getCategoryColor(feedback.category)}`}>
                  {feedback.category}
                </span>
                <div className="text-sm text-gray-500 mt-1">{feedback.date}</div>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700">{feedback.comment}</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {feedback.teacher !== 'N/A' && (
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Teacher:</span> {feedback.teacher}
                  </div>
                )}
                {feedback.subject !== 'General' && (
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Subject:</span> {feedback.subject}
                  </div>
                )}
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button className="flex items-center space-x-1 text-green-600 hover:text-green-700">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm">{feedback.helpful}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-red-600 hover:text-red-700">
                    <ThumbsDown className="w-4 h-4" />
                    <span className="text-sm">{feedback.notHelpful}</span>
                  </button>
                </div>
                <button className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-lg hover:bg-blue-100 transition-colors">
                  Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredFeedback.length === 0 && (
        <div className="text-center py-12">
          <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No feedback found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Feedback;