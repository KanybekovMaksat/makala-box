// import {
//   List,
//   ListItem,
//   ListItemText,
//   ListItemIcon,
//   Tooltip,
//   Box,
// } from '@mui/material';
// import HomeIcon from '@mui/icons-material/Home';
// import ArticleIcon from '@mui/icons-material/Article';
// import ContactMailIcon from '@mui/icons-material/ContactMail';
// import { OrganizationQueries } from '~entities/organization';
// import { categoryQueries } from '~entities/category';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
// import { Link } from 'react-router-dom';

// export function NavBar() {
//   const {
//     data: organizationOptions,
//     isLoading,
//     isError,
//   } = OrganizationQueries.useGetOrganization();

//   const {
//     data: categories,
//     isLoading: isCategoryLoading,
//     isError: isCategoryError,
//   } = categoryQueries.useGetCategoryQuery();

//   if (isLoading) {
//     return <div>fr</div>;
//   }
//   if (isCategoryLoading) {
//     return <div>gbf</div>;
//   }

//   const truncateName = (name) => {
//     return name.length > 10 ? `${name.slice(0, 10)}...` : name;
//   };

//   console.log(organizationOptions.data);

//   return (
//     <div className="w-[250px] h-[calc(100vh-2rem)]  sticky top-5  overflow-y-auto flex flex-col bg-gray-800 text-white ">
//       <div className="flex-1 overflow-y-auto pb-20">
//         <List>
//           <ListItem className="bg-[black]/10 rounded-md ">
//             <ListItemIcon>
//               <HomeIcon className="text-second-100" />
//             </ListItemIcon>
//             <ListItemText primary="Главная" />
//           </ListItem>
//           <ListItem className="hover:bg-[black]/10 hover:rounded-md">
//             <ListItemIcon>
//               <ArticleIcon style={{ color: 'black' }} />
//             </ListItemIcon>
//             <ListItemText primary="Обзор" />
//           </ListItem>
//           <ListItem className="hover:bg-[black]/10 hover:rounded-md">
//             <ListItemIcon>
//               <BarChartIcon style={{ color: 'black' }} />
//             </ListItemIcon>
//             <ListItemText primary="Рейтинг" />
//           </ListItem>
//           <ListItem className="hover:bg-[black]/10 hover:rounded-md">
//             <ListItemIcon>
//               <ContactMailIcon style={{ color: 'black' }} />
//             </ListItemIcon>
//             <ListItemText primary="О Проекте" />
//           </ListItem>
//         </List>

//         <List>
//           <p className="text-pc-400 my-2">Категории</p>
//           {categories.data.map((category) => (
//             <ListItem className="hover:bg-[black]/10 hover:rounded-md hover:cursor-pointer">
//               <ListItemIcon>
//                 <ContactMailIcon style={{ color: 'black' }} />
//               </ListItemIcon>

//               {category.name.length > 10 ? (
//                 <Tooltip title={category.name}>
//                   <ListItemText primary={truncateName(category.name)} />
//                 </Tooltip>
//               ) : (
//                 <ListItemText primary={category.name} />
//               )}
//             </ListItem>
//           ))}
//         </List>
//         <List>
//           <p className="text-pc-400 my-2">Организации</p>
//           {organizationOptions.data.map((org) => (
//             <>
//               <ListItem className="hover:bg-[black]/10 hover:rounded-md hover:cursor-pointer">
//                 <ListItemIcon>
//                   <img
//                     src={org.photo}
//                     alt={org.name}
//                     className="w-8 rounded-sm"
//                   />
//                 </ListItemIcon>
//                 <ListItemText primary={org.name} />
//               </ListItem>
//               {/* {org.children.length > 0 &&
//               org.children.map((org) => (
//                 <ListItem>
//                   <ListItemIcon>
//                     <img src={org.photo} alt={org.name} className="w-6" />
//                   </ListItemIcon>
//                   <ListItemText primary={org.name} />
//                 </ListItem>
//               ))} */}
//             </>
//           ))}
//         </List>
//         <p className="font-bold">© 2024 Usta Soft</p>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';
import { Sidebar, Menu } from 'react-pro-sidebar';
import { Box } from '@mui/material';
import { NavbarItem } from './nav-bar.item';
import { CategoryNavbar } from './nav-bar.category';

export function NavBar() {
  const [selected, setSelected] = useState('');

  return (
    <Box
      className="min-h-screen fixed  bg-[none]"
      sx={{
        '& .pro-sidebar': {
          maxWidth: '220px !important',
          minWidth: '200px !important',
        },
        '& .ps-sidebar-container': {
          backgroundColor: 'transparent !important',
        },
        '& .ps-sidebar-root': {
          borderColor: 'transparent',
        },
        '& .ps-menu-button:hover': {
          backgroundColor: 'white !important',
          borderRadius: '5px',
        },
        // '& .ps-menu-button.ps-active': {
        //   color: 'white',
        // },
        '& .ps-menuitem-root.ps-active': {
          background: 'white',
          borderRadius: '5px',
        },
      }}
    >
      <Sidebar className="h-[calc(1oovh - 64px)] sticky top-[60px] block">
        <Menu>
          <Box className="overflow-y-hidden duration-300 hover:overflow-y-auto max-h-screen pt-5 pb-40">
            <NavbarItem
              title="Главная"
              to="/"
              icon={
                <svg
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.75 20.995H3.25C2.01 20.995 1 19.985 1 18.745V8.605C1 7.895 1.34 7.235 1.9 6.805L9.32 1.225C9.73 0.925 10.27 0.925 10.67 1.225L18.09 6.805C18.65 7.235 18.99 7.895 18.99 8.605V18.745C18.99 19.985 17.98 20.995 16.74 20.995H16.75Z"
                    stroke="#3B3B3D"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M7.12 20.9949V16.3649C7.12 14.7749 8.4 13.4849 10 13.4849C11.6 13.4849 12.88 14.7649 12.88 16.3649V20.9949"
                    stroke="#3B3B3D"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                </svg>
              }
              selected={selected}
              setSelected={setSelected}
            />
            <NavbarItem
              title="Обзор"
              to="/feed"
              icon={
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5 9.75C18.5 12.18 17.52 14.35 15.94 15.94C14.35 17.53 12.18 18.5 9.75 18.5C4.91 18.5 1 14.59 1 9.75C1 4.91 4.91 1 9.75 1C14.59 1 18.5 4.91 18.5 9.75Z"
                    stroke="#3B3B3D"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M17.15 16.1L20.24 18.01C20.99 18.47 21.23 19.47 20.75 20.22C20.27 20.97 19.29 21.21 18.54 20.73C18.33 20.59 18.15 20.42 18.03 20.22L16.12 17.13C15.89 16.78 16.01 16.3 16.36 16.09C16.61 15.94 16.92 15.94 17.16 16.09L17.15 16.1Z"
                    fill="#3B3B3D"
                  />
                </svg>
              }
              selected={selected}
              setSelected={setSelected}
            />
            <NavbarItem
              title="Рейтинг"
              to="/rating/"
              icon={
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 21C16.52 21 21 16.52 21 11C21 5.48 16.52 1 11 1C5.48 1 1 5.48 1 11C1 16.52 5.48 21 11 21Z"
                    stroke="#3B3B3D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.17001 11.9302V16.6902"
                    stroke="#3B3B3D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.98 9.08008V16.7001"
                    stroke="#3B3B3D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.79 6.22021V16.7002"
                    stroke="#3B3B3D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
              selected={selected}
              setSelected={setSelected}
            />
            <NavbarItem
              title="О Проекте"
              to="/about"
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.25C6.62402 2.25 2.25 6.62402 2.25 12C2.25 17.376 6.62402 21.75 12 21.75C17.376 21.75 21.75 17.376 21.75 12C21.75 6.62402 17.376 2.25 12 2.25ZM12 3.75C16.5645 3.75 20.25 7.43555 20.25 12C20.25 16.5645 16.5645 20.25 12 20.25C7.43555 20.25 3.75 16.5645 3.75 12C3.75 7.43555 7.43555 3.75 12 3.75ZM11.25 7.5V9H12.75V7.5H11.25ZM11.25 10.5V16.5H12.75V10.5H11.25Z"
                    fill="black"
                  />
                </svg>
              }
              selected={selected}
              setSelected={setSelected}
            />
            <h5 className='text-meduim text-sm mt-4 text-pc-500'>Категории</h5>
            <CategoryNavbar />

            <p className="text-meduim text-sm mt-4 text-pc-500">&reg; Makalabox 2024 </p>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
}
