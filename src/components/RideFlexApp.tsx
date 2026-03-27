import React, { useState } from 'react';
import { ViewState } from '../lib/types';
import { NavBar } from './NavBar';
import { HomeScreen } from '../pages/HomeScreen';
import { AuthFlow } from '../pages/AuthFlow';
import { QuickSearch } from '../pages/QuickSearch';
import { DriverMode } from '../pages/DriverMode';
import { TripPublish } from '../pages/TripPublish';
import { SearchResults } from '../pages/SearchResults';
import { OpenDemand } from '../pages/OpenDemand';
import { BookingConfirmation } from '../pages/BookingConfirmation';
import { ChatView } from '../pages/ChatView';
import { NotificationsPanel } from '../pages/NotificationsPanel';
import { ProfilePage } from '../pages/ProfilePage';
export function RideFlexApp() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const navigate = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };
  const showNavBar = ['home', 'search', 'driver', 'demand', 'profile'].includes(
    currentView
  );
  const renderView = () => {
    const props = {
      currentView,
      navigate
    };
    switch (currentView) {
      case 'auth':
        return <AuthFlow {...props} />;
      case 'home':
        return <HomeScreen {...props} />;
      case 'search':
        return <QuickSearch {...props} />;
      case 'driver':
        return <DriverMode {...props} />;
      case 'publish':
        return <TripPublish {...props} />;
      case 'results':
        return <SearchResults {...props} />;
      case 'demand':
        return <OpenDemand {...props} />;
      case 'booking':
        return <BookingConfirmation {...props} />;
      case 'chat':
        return <ChatView {...props} />;
      case 'notifications':
        return <NotificationsPanel {...props} />;
      case 'profile':
        return <ProfilePage {...props} />;
      default:
        return <HomeScreen {...props} />;
    }
  };
  return (
    <div className="w-full min-h-screen bg-black">
      {/* Mobile container wrapper */}
      <div className="max-w-md mx-auto min-h-screen bg-white relative shadow-2xl overflow-hidden">
        {renderView()}
        {showNavBar && <NavBar currentView={currentView} navigate={navigate} />}
      </div>
    </div>);

}