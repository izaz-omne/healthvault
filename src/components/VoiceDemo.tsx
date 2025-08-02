import React, { useState } from 'react';
import { Mic, MicOff, FileText, User, Clock } from 'lucide-react';

const VoiceDemo = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [prescription, setPrescription] = useState('');

  const sampleTranscriptions = [
    "Prescribe Lisinopril 10 milligrams once daily for hypertension. Patient should monitor blood pressure twice weekly.",
    "Metformin 500 mg twice daily with meals for type 2 diabetes. Follow up in 3 months with lab work.",
    "Amoxicillin 500 mg three times daily for 7 days for strep throat. Take with food to reduce stomach upset."
  ];

  const handleStartRecording = () => {
    setIsRecording(true);
    // Simulate voice recording with sample text
    setTimeout(() => {
      const randomTranscription = sampleTranscriptions[Math.floor(Math.random() * sampleTranscriptions.length)];
      setTranscript(randomTranscription);
      setPrescription(generatePrescription(randomTranscription));
      setIsRecording(false);
    }, 3000);
  };

  const generatePrescription = (text: string) => {
    // Simple prescription formatting based on the transcription
    const lines = text.split('. ');
    return `
PRESCRIPTION

Patient: Demo Patient
Date: ${new Date().toLocaleDateString()}
Provider: Dr. Demo Provider

${lines[0]}.

Instructions: ${lines[1] || 'Take as directed.'}

Refills: 2
Quantity: 30 days supply

_________________________
Dr. Demo Provider, MD
License #: DEMO123456
    `.trim();
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Voice-to-Text Prescription Demo
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how doctors can generate accurate prescriptions using voice commands, 
            reducing time spent on documentation and improving patient care.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Voice Input Section */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <User className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-bold text-gray-900">Doctor's Voice Input</h3>
            </div>

            <div className="text-center mb-8">
              <button
                onClick={handleStartRecording}
                disabled={isRecording}
                className={`w-24 h-24 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
                  isRecording 
                    ? 'bg-red-500 animate-pulse' 
                    : 'bg-blue-500 hover:bg-blue-600 hover:scale-105'
                } shadow-lg`}
              >
                {isRecording ? (
                  <MicOff className="w-8 h-8" />
                ) : (
                  <Mic className="w-8 h-8" />
                )}
              </button>
              
              <p className="mt-4 text-sm text-gray-600">
                {isRecording ? 'Listening... Speak your prescription' : 'Click to start voice dictation'}
              </p>
            </div>

            {/* Transcription Display */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="w-5 h-5 text-teal-500" />
                <span className="text-sm font-semibold text-gray-700">Live Transcription</span>
              </div>
              
              <div className="min-h-24 text-gray-700 leading-relaxed">
                {isRecording ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-500 italic">Listening for speech...</span>
                  </div>
                ) : transcript ? (
                  <p>{transcript}</p>
                ) : (
                  <p className="text-gray-400 italic">Click the microphone to start dictating a prescription</p>
                )}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Voice Recognition</span>
              <span className="text-xs bg-teal-100 text-teal-700 px-3 py-1 rounded-full">Medical Terminology</span>
              <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Real-time Processing</span>
            </div>
          </div>

          {/* Generated Prescription Section */}
          <div className="bg-gradient-to-br from-gray-50 to-teal-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="w-6 h-6 text-teal-500" />
              <h3 className="text-xl font-bold text-gray-900">Generated Prescription</h3>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 min-h-80">
              {prescription ? (
                <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono leading-relaxed">
                  {prescription}
                </pre>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <FileText className="w-12 h-12 text-gray-300 mb-4" />
                  <p className="text-gray-400 italic">Prescription will appear here after voice input</p>
                </div>
              )}
            </div>

            {prescription && (
              <div className="mt-6 flex space-x-4">
                <button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  Send to Pharmacy
                </button>
                <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors">
                  Save to Records
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 bg-blue-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">85%</div>
              <p className="text-gray-600">Faster Prescription Writing</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">99.2%</div>
              <p className="text-gray-600">Transcription Accuracy</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">60%</div>
              <p className="text-gray-600">Reduction in Documentation Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceDemo;