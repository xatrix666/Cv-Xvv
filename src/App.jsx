import Layout from "./components/Layout";
import { Outlet } from "react-router-dom";
import "./index.css";


export default function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
