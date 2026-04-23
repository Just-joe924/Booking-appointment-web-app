import {
    BarChart, Bar, LineChart, Line,
    XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer
} from 'recharts';

import {
    Calendar, Users, DollarSign, AlertCircle
} from 'lucide-react';

const AdminDashboard = () => {

    const dashboardData = [
        { month: 'Jan', bookings: 40, revenue: 2400 },
        { month: 'Feb', bookings: 35, revenue: 2200 },
        { month: 'Mar', bookings: 50, revenue: 3000 },
        { month: 'Apr', bookings: 45, revenue: 2800 },
    ];

    const metrics = [
        { label: 'Total Bookings', value: '824', icon: Calendar, color: 'bg-blue-500' },
        { label: 'Revenue', value: '$12,430', icon: DollarSign, color: 'bg-green-500' },
        { label: 'Pending Requests', value: '23', icon: AlertCircle, color: 'bg-yellow-500' },
        { label: 'Active Staff', value: '12', icon: Users, color: 'bg-purple-500' },
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {metrics.map((metric) => {
                    const Icon = metric.icon;
                    return (
                        <div key={metric.label} className="bg-white rounded-lg shadow p-6">
                            <p className="text-gray-600 text-sm">{metric.label}</p>
                            <p className="text-2xl font-bold mt-2">{metric.value}</p>
                            <div className={`${metric.color} p-2 rounded-full inline-block mt-3`}>
                                <Icon className="text-white" size={20} />
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={dashboardData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="bookings" fill="#3B82F6" />
                            <Bar dataKey="revenue" fill="#10B981" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={dashboardData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="revenue" stroke="#3B82F6" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;