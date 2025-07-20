'use client';

import { useState } from 'react';
import { submitInterest, getInterestCount } from '@/lib/api-client';

export default function TestApiPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subscribed: false,
  });
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const result = await submitInterest(formData);
      if (result.success) {
        setMessage('Success! Interest submitted.');
        setFormData({ name: '', email: '', subscribed: false });
        // Refresh count
        const countResult = await getInterestCount();
        if (countResult.success && countResult.data) {
          setCount(countResult.data.count);
        }
      } else {
        setMessage(`Error: ${result.error}`);
      }
    } catch {
      setMessage('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleGetCount = async () => {
    setLoading(true);
    try {
      const result = await getInterestCount();
      if (result.success && result.data) {
        setCount(result.data.count);
        setMessage(`Current count: ${result.data.count}`);
      } else {
        setMessage(`Error: ${result.error}`);
      }
    } catch {
      setMessage('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h1 className="text-2xl font-bold mb-6">API Test Page</h1>

      <div className="mb-6">
        <button
          onClick={handleGetCount}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          Get Count
        </button>
        {count !== null && (
          <p className="mt-2 text-sm text-gray-600">Current count: {count}</p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.subscribed}
              onChange={e =>
                setFormData({ ...formData, subscribed: e.target.checked })
              }
              className="mr-2"
            />
            Subscribe to newsletter
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
        >
          {loading ? 'Submitting...' : 'Submit Interest'}
        </button>
      </form>

      {message && (
        <div
          className={`mt-4 p-3 rounded ${
            message.includes('Error')
              ? 'bg-red-100 text-red-700'
              : 'bg-green-100 text-green-700'
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
}
