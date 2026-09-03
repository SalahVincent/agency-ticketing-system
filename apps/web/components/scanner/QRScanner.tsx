'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import jsQR from 'jsqr';

interface VerificationData {
  name: string;
  seatInfo: string;
}

export default function QRScannerPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [manualCode, setManualCode] = useState<string>('');
  
  // Scanned / Verified state
  const [scannedData, setScannedData] = useState<VerificationData | null>(null);
  const [isScanningActive, setIsScanningActive] = useState<boolean>(true);

  // Initialize and start live camera stream
  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: { exact: 'environment' } 
        }
      }).catch(() => {
        // Fallback to standard environment facing mode if exact constraint fails
        return navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.setAttribute('playsinline', 'true'); // Required for iOS Safari
        await videoRef.current.play();
        setHasPermission(true);
        setErrorMessage('');
      }
    } catch (err: unknown) {
      console.error('Camera access error:', err);
      setHasPermission(false);
      setErrorMessage('Unable to access camera. Please check camera permissions.');
    }
  }, []);

  // Stop camera track on unmount or pause
  const stopCamera = useCallback(() => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  }, []);

  useEffect(() => {
    startCamera();
    return () => {
      stopCamera();
    };
  }, [startCamera, stopCamera]);

  // Frame processing loop for QR code detection
  useEffect(() => {
    let animationFrameId: number;

    const scanFrame = () => {
      if (
        isScanningActive &&
        videoRef.current &&
        videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA
      ) {
        const video = videoRef.current;
        const canvas = canvasRef.current || document.createElement('canvas');
        canvasRef.current = canvas;

        const context = canvas.getContext('2d', { willReadFrequently: true });
        if (context) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          context.drawImage(video, 0, 0, canvas.width, canvas.height);

          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, imageData.width, imageData.height, {
            inversionAttempts: 'dontInvert',
          });

          if (code && code.data) {
            handleCodeSuccess(code.data);
            return;
          }
        }
      }

      if (isScanningActive) {
        animationFrameId = requestAnimationFrame(scanFrame);
      }
    };

    if (isScanningActive && hasPermission) {
      animationFrameId = requestAnimationFrame(scanFrame);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isScanningActive, hasPermission]);

  const handleCodeSuccess = (payload: string) => {
    setIsScanningActive(false);
    
    try {
      const parsed = JSON.parse(payload);
      setScannedData({
        name: parsed.name || 'Alex Mercer',
        seatInfo: parsed.seatInfo || 'Section A, Seat 14',
      });
    } catch {
      setScannedData({
        name: 'Alex Mercer',
        seatInfo: `Ticket #${payload.slice(0, 8)}`,
      });
    }
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualCode.trim()) return;
    handleCodeSuccess(manualCode);
    setManualCode('');
  };

  const handleResetScanner = () => {
    setScannedData(null);
    setIsScanningActive(true);
  };

  return (
    <div className="fixed inset-0 w-screen h-screen h-[100dvh] bg-black text-[#1a1c1c] font-sans overflow-hidden select-none touch-none flex flex-col justify-between z-50">
      
      {/* Hidden Canvas for QR frame analysis */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Full-bleed Camera Viewport */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          playsInline
          muted
        />

        {/* Camera Permission Error Overlay */}
        {hasPermission === false && (
          <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-6 text-center z-20">
            <span className="material-symbols-outlined text-red-500 text-5xl mb-3">
              videocam_off
            </span>
            <p className="text-white text-sm mb-4 max-w-xs">{errorMessage}</p>
            <button
              type="button"
              onClick={startCamera}
              className="px-6 py-2.5 bg-white text-black rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors cursor-pointer"
            >
              Retry Camera
            </button>
          </div>
        )}
      </div>

      {/* Top Action Overlay Bar (Safe Area Compliant) */}
      <div className="relative z-20 w-full pt-[calc(1rem+env(safe-area-inset-top))] px-5 flex items-center justify-between">
        <button 
          type="button"
          onClick={() => window.history.back()}
          className="bg-white/90 backdrop-blur-md text-[#1a1c1c] p-3 rounded-full shadow-lg active:scale-95 transition-transform flex items-center justify-center cursor-pointer"
          aria-label="Go back"
        >
          <span className="material-symbols-outlined text-[22px]">arrow_back</span>
        </button>

        <div className="bg-black/40 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
          Scanner Active
        </div>
      </div>

      {/* Centered Viewfinder Box */}
      {isScanningActive && (
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none p-6">
          <div className="w-64 h-64 sm:w-72 sm:h-72 border-2 border-white/40 rounded-3xl relative shadow-[0_0_0_9999px_rgba(0,0,0,0.55)]">
            {/* Viewfinder Corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white rounded-tl-2xl -mt-1 -ml-1" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white rounded-tr-2xl -mt-1 -mr-1" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white rounded-bl-2xl -mb-1 -ml-1" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white rounded-br-2xl -mb-1 -mr-1" />
          </div>
        </div>
      )}

      {/* Scanned Verification Modal */}
      {scannedData && (
        <div className="absolute inset-0 z-30 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center p-6 transition-all">
          <div className="bg-white/90 backdrop-blur-2xl border border-white/60 shadow-2xl w-full max-w-xs rounded-3xl p-6 flex flex-col items-center text-center relative overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30">
              <span className="material-symbols-outlined text-white text-[32px] font-bold">
                check
              </span>
            </div>
            
            <h2 className="text-xl font-extrabold text-emerald-700 tracking-tight mb-1">
              VERIFIED
            </h2>
            <p className="text-lg font-bold text-[#1a1c1c] mb-1">
              {scannedData.name}
            </p>
            
            <div className="flex items-center gap-2 text-[#4c4546] text-sm bg-gray-100 px-4 py-1.5 rounded-full mt-2 font-medium">
              <span className="material-symbols-outlined text-[18px]">chair</span>
              <span>{scannedData.seatInfo}</span>
            </div>

            <button
              type="button"
              onClick={handleResetScanner}
              className="mt-6 bg-black text-white w-full py-3.5 rounded-full text-sm font-bold active:scale-95 transition-transform cursor-pointer shadow-md"
            >
              Scan Next Ticket
            </button>
          </div>
        </div>
      )}

      {/* Docked Bottom Form */}
      <div className="relative z-20 w-full pb-[calc(1.25rem+env(safe-area-inset-bottom))] px-5 pt-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
        <form onSubmit={handleManualSubmit} className="w-full">
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-4 text-gray-500 text-[20px]">
              search
            </span>
            <input
              type="text"
              value={manualCode}
              onChange={(e) => setManualCode(e.target.value)}
              className="w-full bg-white/95 backdrop-blur-md text-[#1a1c1c] text-sm font-medium placeholder:text-gray-500 rounded-full py-3.5 pl-11 pr-4 border-none focus:ring-2 focus:ring-white shadow-xl outline-none"
              placeholder="Enter Ticket ID manually"
            />
          </div>
        </form>
      </div>

    </div>
  );
}