import React from 'react';
import LuxuryBackground from '../components/LuxuryBackground';

export default function Pet() {
    return (
        <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
            <LuxuryBackground />
            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                    Pet Owners Page
                </h1>
                <p className="text-xl text-gray-600">Coming Soon...</p>
            </div>
        </div>
    );
}
