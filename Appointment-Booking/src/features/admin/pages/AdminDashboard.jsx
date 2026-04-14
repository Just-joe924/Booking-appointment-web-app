import React, { useState } from 'react';
import { 
    BarChart, 
    Bar, 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer, 
    PieChart, 
    Pie, 
    Cell 
} from 'recharts';
import { 
    Menu, 
    X, 
    Home, 
    Calendar, 
    Users, 
    Briefcase, 
    CreditCard, 
    Settings, 
    ChevronDown, 
    TrendingUp, 
    Clock, 
    DollarSign, 
    AlertCircle 
} from 'lucide-react';

const AdminDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activePage, setActivePage] = useState('dashboard');
    const [expandedMenu, setExpandedMenu] = useState(null);

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

    const navigationItems = [
        { id: 'dashboard', label: 'Dashboard', icon: Home },
        { id: 'calendar', label: 'Calendar', icon: Calendar },
        { id: 'clients', label: 'Clients', icon: Users },
        { id: 'services', label: 'Services', icon: Briefcase },
        { id: 'staff', label: 'Staff', icon: Users },
        { id: 'payments', label: 'Payments', icon: CreditCard },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    const renderDashboard = () => (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {metrics.map((metric) => {
                    const Icon = metric.icon;
                    return (
                        <div key={metric.label} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm font-medium">{metric.label}</p>
                                    <p className="text-2xl font-bold text-gray-900 mt-2">{metric.value}</p>
                                </div>
                                <div className={`${metric.color} p-3 rounded-full`}>
                                    <Icon className="text-white" size={24} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Bookings & Revenue</h2>
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

                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Trend Analysis</h2>
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

    const renderCalendar = () => (
        <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Calendar & Agenda</h1>
            <p className="text-gray-600">Master view of all staff schedules and appointments</p>
            <div className="mt-4 p-4 bg-gray-50 rounded text-center">
                <Clock className="mx-auto mb-2 text-gray-400" />
                <p className="text-gray-600">Calendar component to be integrated</p>
            </div>
        </div>
    );

    const renderClients = () => (
        <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Client Management</h1>
            <table className="w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Name</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Email</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Bookings</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td className="px-4 py-2">John Doe</td>
                        <td className="px-4 py-2">john@example.com</td>
                        <td className="px-4 py-2">5</td>
                        <td className="px-4 py-2"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Active</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

    const renderServices = () => (
        <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Services Management</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4">Add Service</button>
            <div className="space-y-3">
                {[1, 2, 3].map(i => (
                    <div key={i} className="border rounded p-4 flex justify-between items-center">
                        <div>
                            <p className="font-semibold">Service {i}</p>
                            <p className="text-gray-600 text-sm">Duration: 60 min | Price: ${50 * i}</p>
                        </div>
                        <button className="text-blue-600 hover:text-blue-800">Edit</button>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderStaff = () => (
        <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Staff Management</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4">Add Staff</button>
            <div className="space-y-3">
                {[1, 2, 3].map(i => (
                    <div key={i} className="border rounded p-4 flex justify-between items-center">
                        <div>
                            <p className="font-semibold">Staff Member {i}</p>
                            <p className="text-gray-600 text-sm">Services: Haircut, Styling</p>
                        </div>
                        <button className="text-blue-600 hover:text-blue-800">Manage</button>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderPayments = () => (
        <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Payments & Invoicing</h1>
            <table className="w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Invoice #</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Amount</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Date</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td className="px-4 py-2">#INV-001</td>
                        <td className="px-4 py-2">$150</td>
                        <td className="px-4 py-2">2024-01-15</td>
                        <td className="px-4 py-2"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Paid</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

    const renderSettings = () => (
        <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Settings</h1>
            <div className="space-y-4">
                <div className="border-b pb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <input type="text" placeholder="09:00 - 18:00" className="w-full border rounded px-3 py-2" />
                </div>
                <div className="border-b pb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Business Location</h3>
                    <input type="text" placeholder="Enter address" className="w-full border rounded px-3 py-2" />
                </div>
                <div className="border-b pb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Branding</h3>
                    <input type="text" placeholder="Business name" className="w-full border rounded px-3 py-2" />
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save Changes</button>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activePage) {
            case 'dashboard': return renderDashboard();
            case 'calendar': return renderCalendar();
            case 'clients': return renderClients();
            case 'services': return renderServices();
            case 'staff': return renderStaff();
            case 'payments': return renderPayments();
            case 'settings': return renderSettings();
            default: return renderDashboard();
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gray-900 text-white transition-all duration-300 overflow-y-auto`}>
                <div className="flex items-center justify-between p-4">
                    {sidebarOpen && <h1 className="text-xl font-bold">Admin Panel</h1>}
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden">
                        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                <nav className="mt-8">
                    {navigationItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setActivePage(item.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 transition ${
                                    activePage === item.id ? 'bg-blue-600' : 'hover:bg-gray-800'
                                }`}
                            >
                                <Icon size={20} />
                                {sidebarOpen && <span>{item.label}</span>}
                            </button>
                        );
                    })}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                <header className="bg-white shadow">
                    <div className="flex items-center justify-between p-6">
                        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="hidden lg:flex">
                            <Menu size={24} />
                        </button>
                        <div className="text-gray-600">Welcome back, Admin</div>
                    </div>
                </header>
                <div className="p-6">
                    {renderContent()}
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;  