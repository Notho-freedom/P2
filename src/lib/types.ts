export type ViewState =
'auth' |
'home' |
'search' |
'driver' |
'publish' |
'results' |
'demand' |
'booking' |
'chat' |
'notifications' |
'profile';

export interface NavigationProps {
  currentView: ViewState;
  navigate: (view: ViewState) => void;
}