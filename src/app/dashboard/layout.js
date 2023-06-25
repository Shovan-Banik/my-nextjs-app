import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div>
            <div>
                <h2>sidebar</h2>
            </div>
            {children}
        </div>
    );
};

export default DashboardLayout;