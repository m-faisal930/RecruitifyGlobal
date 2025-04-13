import { useState } from "react";
const SettingsPage = () => {
  const [formData, setFormData] = useState({
    companyName: 'JobPortal',
    email: 'admin@jobportal.pk',
    notifications: true,
    timezone: 'Asia/Karachi',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Settings saved successfully!');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>

      <div className="bg-white shadow-sm rounded-xl overflow-hidden">
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  General Settings
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Admin Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="timezone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Timezone
                    </label>
                    <select
                      name="timezone"
                      id="timezone"
                      value={formData.timezone}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="Asia/Karachi">
                        Pakistan Standard Time (UTC+5)
                      </option>
                      <option value="UTC">UTC</option>
                      <option value="America/New_York">
                        Eastern Time (UTC-5)
                      </option>
                      <option value="Europe/London">London (UTC+0)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Notification Settings
                </h2>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="notifications"
                      name="notifications"
                      type="checkbox"
                      checked={formData.notifications}
                      onChange={handleChange}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="notifications"
                      className="font-medium text-gray-700"
                    >
                      Email Notifications
                    </label>
                    <p className="text-gray-500">
                      Receive email notifications for new applications
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Danger Zone
                </h2>
                <div className="bg-red-50 p-4 rounded-md">
                  <h3 className="text-sm font-medium text-red-800">
                    Delete Account
                  </h3>
                  <p className="mt-1 text-sm text-red-700">
                    Once you delete your account, there is no going back. Please
                    be certain.
                  </p>
                  <button
                    type="button"
                    className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Delete Account
                  </button>
                </div>
              </div>

              <div className="flex justify-end pt-6 border-t border-gray-200">
                <button
                  type="button"
                  className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
