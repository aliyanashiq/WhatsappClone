import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Left from './left/Left';
import Right from './right/Right';
import Channels from './Channels/Channels';
import Communication from './Communication/Communication';
import Meta from './Meta/Meta';
import Setting from './Setting/Setting';
import Statusbar from './left/Statusbar';
import { SearchProvider } from './Searchcontext';
import Account from './SettingCopmonents/Account';
import Security from './SettingCopmonents/Security';

function App() {
  return (
    <SearchProvider>
      <Router>
        <div className="Main-container">
          <Sidebar />
          <div className="Content-container">
            <Routes>
              <Route path="/messages" element={<Left />} />
              <Route path="/Statusbar" element={<Statusbar />} />
              <Route path="/Channels" element={<Channels />} />
              <Route path="/Communication" element={<Communication />} />
              <Route path="/Setting" element={<Setting />} />
              <Route path="/Account" element={<Account />} />
              <Route path="/Security" element={<Security />} />
              {/* Add other routes as needed */}
            </Routes>
          </div>
          <div className="Right-container">
            <Routes>
              <Route path="/Meta" element={<Meta />} />
              {/* Add more routes if you want to show other components on the right side */}
              <Route path="*" element={<Right />} />
            </Routes>
          </div>
        </div>
      </Router>
    </SearchProvider>
  );
}

export default App;
