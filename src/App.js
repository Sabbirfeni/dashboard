import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineBars } from 'react-icons/ai';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css';
import { Navbar, Sidebar, Footer, ThemeSetting } from './components';
import { Area, Bar, Calculator, ColorMapping, ColorPicker, Customers, ECommerce,
         Editor, Employees, Financial, Kanban, Line, Order, Pie, Pyramid, Stacked } from './pages';

const App = () => {
    const activeMenu = true;
    
    return (
        <div>
            <BrowserRouter>
                    <div className="flex relative dark:bg-main-dark-bg">

                        {/* Sidebar */}
                        {activeMenu ? (
                            <div className="w-72 fixed sidebar 
                            dark:bg-secondary-dark-bg
                            text-black"
                            >
                                <Sidebar />
                            </div>
                        ) : (
                            <div className="w-0 
                            dark:bg-secondary-dark-bg"
                            >
                                <Sidebar />
                            </div>
                        )}


                        {/* Main section */}
                        <div className={
                            `dark:bg-main-bg bg-main-bg
                            min-h-screen w-full ${activeMenu ? 
                            'md:ml-72' : 'flex-2'}`
                        }>
                            <div className="fixed md:static
                            bg-main-bg dark:bg-main-dark-bg
                            navbar w-full">
                                <Navbar />
                            </div>

                            {/* All routes */}
                            <Routes>
                                <Route path="/" element={<ECommerce/>} />
                                <Route path="/ecommerce" element={<ECommerce/>} />

                                {/* Pages */}
                                <Route path="/orders" element={<Order/>}  />
                                <Route path="/employees" element={<Employees/>} />                    
                                <Route path="/customers" element={<Customers/>} />

                                {/* Apps */}
                                <Route path="/kanban" element={<Kanban/>} />
                                <Route path="/editor" element={<Editor/>} />
                                <Route path="/calculator" element={<Calculator/>} />
                                <Route path="/color-picker" element={<ColorPicker/>} />
                                
                                {/* Charts */}
                                <Route path="/line" element={<Line/>} />
                                <Route path="/area" element={<Area/>} />
                                <Route path="/bar" element={<Bar/>} />                                                          
                                <Route path="/pie" element={<Pie/>} />                                                          
                                <Route path="/financial" element={<Financial/>} />                                                          
                                <Route path="/colorMapping" element={<ColorMapping/>} />                                                          
                                <Route path="/pyramid" element={<Pyramid/>} />                                                          
                                <Route path="/stacked" element={<Stacked/>} />                                
                                <Route path="*" element='404'/>                                
                            </Routes>
                        </div>

                     
                    </div>
            </BrowserRouter>
        </div>
       
    )
}

export default App;