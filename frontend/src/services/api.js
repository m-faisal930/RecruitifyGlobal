// src/services/api.js
export const registerRecruiter = async (formData) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/recruiters/register`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );

    const text = await response.text(); // First get the raw text
    if (!text) {
      throw new Error('Empty response from server');
    }

    const data = JSON.parse(text); // Then try to parse it

    if (!response.ok) {
      throw new Error(data.error || 'Registration failed');
    }

    return data;
  } catch (error) {
    console.error('Error registering recruiter:', error);
    throw new Error(error.message || 'Failed to register recruiter');
  }
};
