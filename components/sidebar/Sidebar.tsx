import React from 'react';
import classnames from 'classnames';
import SidebarBtn from './SidebarBtn';

export default function Sidebar({className}) {
  return (
    <div className={classnames('bg-gray-800 w-1/3 rounded-lg h-screen shadow-lg', className)}>
      <nav className='flex gap-4 flex-col p-4'>
        <SidebarBtn href='/' icon='home' isActive>Home</SidebarBtn>
        <SidebarBtn href='/blog' icon='article'>Blog</SidebarBtn>
        <SidebarBtn href='/videos' icon='ondemand_video'>Videos</SidebarBtn>
        <SidebarBtn href='/podcast' icon='podcasts'>Podcast</SidebarBtn>
        <SidebarBtn href='/donate' icon='monetization_on'>Donate</SidebarBtn>
        <SidebarBtn href='/contact' icon='message'>Contact</SidebarBtn>
      </nav>
    </div>
  );
}