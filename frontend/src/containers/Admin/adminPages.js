import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import AdminSidebar from "./adminSidebar";
export default function adminPages() {
  return (
    <>
      <div className="min-h-screen">
        <div className="flex w-full flex-auto min-h-screen">
          <div className="bg-[#e1e1e1]">
            <AdminSidebar />
          </div>
          <div className="flex-auto w-full min-h-screen p-4">
            <div className="w-full min-h-screen">
              <div className="h-[45px] flex align-items justify-end">User</div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
