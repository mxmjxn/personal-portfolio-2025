import React from 'react';
import { useResponsive, useTouch, useOrientation } from '../hooks/useResponsive';

const ResponsiveDebug = () => {
  const { screenSize, deviceType, isMobile, isTablet, isDesktop } = useResponsive();
  const isTouch = useTouch();
  const orientation = useOrientation();

  // Only show in development
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      padding: '8px',
      borderRadius: '4px',
      fontSize: '12px',
      zIndex: 9999,
      fontFamily: 'monospace'
    }}>
      <div>Screen: {screenSize.width}x{screenSize.height}</div>
      <div>Device: {deviceType}</div>
      <div>Touch: {isTouch ? 'Yes' : 'No'}</div>
      <div>Orientation: {orientation}</div>
      <div>Mobile: {isMobile ? 'Yes' : 'No'}</div>
      <div>Tablet: {isTablet ? 'Yes' : 'No'}</div>
      <div>Desktop: {isDesktop ? 'Yes' : 'No'}</div>
    </div>
  );
};

export default ResponsiveDebug;
