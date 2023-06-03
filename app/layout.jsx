'use client'
import './globals.css';
import Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.css';



export default function RootLayout({ children}) {
  
  return (
    <html lang="en">

      <body>
      
     
        <div className="container">
     
        <Navbar />
        {children}
        </div>
        
        </body>
    </html>
  )
}
