import React from 'react';
import { User } from 'lucide-react';

interface StaffMember {
  name: string;
  position: string;
  subject?: string;
  category: string;
  image?: string;
}

const staffData: StaffMember[] = [
  // ── Leadership ──────────────────────────────────────────────────────────
  {
    name: 'Mrs Nyali',
    position: 'Principal',
    category: 'Leadership',
    image: './assets/about/principal.jpg',
  },
  {
    name: 'Deputy Principal',
    position: 'Deputy Principal',
    category: 'Leadership',
  },

  // ── Departmental Heads ───────────────────────────────────────────────────
  // Update names below via the Staff Portal once confirmed
  {
    name: 'HOD — Humanities',
    position: 'Head of Department',
    subject: 'Humanities',
    category: 'Departmental Heads',
  },
  {
    name: 'HOD — Mathematics & Science',
    position: 'Head of Department',
    subject: 'Mathematics & Science',
    category: 'Departmental Heads',
  },
  {
    name: 'HOD — Languages',
    position: 'Head of Department',
    subject: 'Languages',
    category: 'Departmental Heads',
  },

  // ── Class Teachers ───────────────────────────────────────────────────────
  { name: 'Class Teacher', position: 'Class Teacher — Grade 8A',  category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 8B',  category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 8C',  category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 9A',  category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 9B',  category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 9C',  category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 10A', category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 10B', category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 10C', category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 11A', category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 11B', category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 11C', category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 12A', category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 12B', category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 12C', category: 'Class Teachers' },

  // ── Support Staff ────────────────────────────────────────────────────────
  { name: 'School Administrator', position: 'School Administrator', category: 'Support Staff' },
  { name: 'Security Officer',     position: 'Security Officer',     category: 'Support Staff' },
  { name: 'Learner Support Agent',position: 'Learner Support Agent',category: 'Support Staff' },
];

const categories = [
  'Leadership',
  'Departmental Heads',
  'Class Teachers',
  'Support Staff',
];

export const Staff = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('Leadership');

  const filteredStaff = staffData.filter((member) => member.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Meet Our Staff</h1>
          <p className="text-gray-300 text-lg">Meet the dedicated educators and support staff at Lehana Senior Secondary School</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-[#A8131C] text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStaff.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image Container */}
              <div className="aspect-square bg-gray-700 flex items-center justify-center overflow-hidden">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <User size={64} className="text-gray-600" />
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-[#A8131C] text-sm font-medium mb-1">{member.position}</p>
                {member.subject && <p className="text-gray-400 text-sm">{member.subject}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
