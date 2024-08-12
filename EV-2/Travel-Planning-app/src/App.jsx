import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import DestinationDetail from './components/DestinationDetail';
import AdminForm from './components/AdminForm';
import { AppProvider } from './contexts/AppContext';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
    return (
        <AppProvider>
          <AdminForm/>
          <ThemeToggle/>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/destination/:id" element={<DestinationDetail />} />
                        <Route path="/admin" element={<AdminForm />} />
                    </Routes>
                </div>
            </Router>
        </AppProvider>
    );
}

export default App;
