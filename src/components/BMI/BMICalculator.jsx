import React, { useState } from 'react';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [bmiStatus, setBMIStatus] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBMI(bmiValue);

      // Determine BMI status
      if (bmiValue < 18.5) {
        setBMIStatus('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBMIStatus('Normal weight');
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBMIStatus('Overweight');
      } else {
        setBMIStatus('Obesity');
      }
    }
  };

  return (
    <div className="bg-[#3c3f45] min-h-screen flex items-center justify-center">
      <div className="bg-gradient-to-r from-yellow-200 to-[#3c3f45] p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">BMI Calculator</h1>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Weight (kg)</label>
          <input
            type="number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight in kg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Height (cm)</label>
          <input
            type="number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height in cm"
          />
        </div>
        <button
          onClick={calculateBMI}
          className="w-full bg-yellow-500 hover:bg-yellow-300 text-white font-semibold py-2 px-4 rounded-md"
        >
          Calculate BMI
        </button>
        {bmi && (
          <div className="mt-6 text-center">
            <p className="text-xl font-bold text-white">Your BMI: {bmi}</p>
            <p className={`text-lg mt-2 ${bmiStatus === 'Underweight' ? 'text-yellow-500' : bmiStatus === 'Normal weight' ? 'text-green-500' : bmiStatus === 'Overweight' ? 'text-orange-500' : 'text-red-500'}`}>
              Status: {bmiStatus}
            </p>
            <BMIMeter bmi={bmi} />
          </div>
        )}
      </div>
    </div>
  );
}

function BMIMeter({ bmi }) {
  const getMeterValue = () => {
    if (bmi < 18.5) return 20;
    if (bmi >= 18.5 && bmi < 24.9) return 50;
    if (bmi >= 25 && bmi < 29.9) return 80;
    return 100;
  };

  return (
    <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
      <div
        className={`bg-${bmi < 18.5 ? 'yellow-500' : bmi >= 18.5 && bmi < 24.9 ? 'green-500' : bmi >= 25 && bmi < 29.9 ? 'orange-500' : 'red-500'} h-4 rounded-full`}
        style={{ width: `${getMeterValue()}%` }}
      ></div>
    </div>
  );
}

export default BMICalculator;
